class GeneratorWfrp4e
{
  static speciesStage()
  {
    let chatData = {
      user : game.user._id,
      rollMode : game.settings.get("core", "rollMode")
    }

    if ( ["gmroll", "blindroll"].includes(chatData.rollMode) ) chatData["whisper"] = ChatMessage.getWhisperIDs("GM");
    if ( chatData.rollMode === "blindroll" ) chatData["blind"] = true;

    renderTemplate("systems/dh/templates/chat/chargen/species-select.html", {species : WFRP4E.species}).then(html => {
      chatData.content = html;
      ChatMessage.create(chatData);
    })
  } 

  static rollSpecies(messageId, chosenSpecies = null)
  {
    let roll, exp;
    if (chosenSpecies)
    {
      exp = 0;
      roll = {roll: "Choose", value : chosenSpecies, name : WFRP4E.species[chosenSpecies], exp : 0}
    }
    else
    {
      exp = 20;
      roll = WFRP_Tables.rollTable("species");
    }

    let speciesMessage = game.messages.get(messageId)
    let updateCardData = {roll : roll, species : WFRP4E.species}

    renderTemplate("systems/dh/templates/chat/chargen/species-select.html", updateCardData).then(html =>{
      speciesMessage.update({content: html})
    })
    this.speciesSkillsTalents(roll.value, exp)
   // this.speciesAttributes(roll.value, WFRP4E.randomExp.speciesRand)
  }

  static speciesSkillsTalents(species, exp)
  {
    let chatData = {
      user : game.user._id,
      rollMode : game.settings.get("core", "rollMode")
    }

    if ( ["gmroll", "blindroll"].includes(chatData.rollMode) ) chatData["whisper"] = ChatMessage.getWhisperIDs("GM");
    if ( chatData.rollMode === "blindroll" ) chatData["blind"] = true;

    let cardData = {
      speciesKey : species,
      species : WFRP4E.species[species],
      speciesSkills : WFRP4E.speciesSkills[species],
      exp : exp
    }

    let talents = []
    let choiceTalents = []

    WFRP4E.speciesTalents[species].forEach(talent => {
        if (isNaN(talent))
        {
          let talentList = talent.split(", ")
          if (talentList.length == 1)
            talents.push(talentList[0])
          else
            choiceTalents.push(talentList)
        }
    })
    let randomTalents = WFRP4E.speciesTalents[species][WFRP4E.speciesTalents[species].length-1]
    cardData.randomTalents = []
    for (let i = 0; i < randomTalents; i++)
      cardData.randomTalents.push(WFRP_Tables.rollTable("talents").name)

    cardData.speciesTalents = talents;
    cardData.choiceTalents = choiceTalents;
    renderTemplate("systems/dh/templates/chat/chargen/species-skills-talents.html", cardData).then(html =>{
      chatData.content = html;
      ChatMessage.create(chatData);
    })
  }


  static rollAttributes(species, exp = 0)
  {
    let characteristics = WFRP_Utility.speciesCharacteristics(species, false)
    let dataTransfer = {
      generation : true,
      type : "characteristics",
      payload : {
        species: WFRP4E.species[species],
        characteristics : characteristics,
        movement : WFRP4E.speciesMovement[species],
        fate : WFRP4E.speciesFate[species],
        resilience : WFRP4E.speciesRes[species],
        exp : exp
      }
    }

    let cardData = duplicate(dataTransfer.payload)

    // Turn keys into abbrevitaions (ws -> WS) for more appealing look
    cardData.characteristics = {}
    for (let abrev in WFRP4E.characteristicsAbbrev)
    {
      cardData.characteristics[WFRP4E.characteristicsAbbrev[abrev]] = dataTransfer.payload.characteristics[abrev]
    }

    cardData.extra = WFRP4E.speciesExtra[species]
    cardData.dataTransfer = JSON.stringify(dataTransfer)

    let chatData = {
      user : game.user._id,
      rollMode : game.settings.get("core", "rollMode")
    }

    if ( ["gmroll", "blindroll"].includes(chatData.rollMode) ) chatData["whisper"] = ChatMessage.getWhisperIDs("GM");
    if ( chatData.rollMode === "blindroll" ) chatData["blind"] = true;

    renderTemplate("systems/dh/templates/chat/chargen/attributes.html", cardData).then(html => {
      chatData.content = html;
      ChatMessage.create(chatData);
    })
  }

  static async rollCareer(species)
  {
    let roll = WFRP_Tables.rollTable("career", {}, species)
    let pack = game.packs.find(p => p.collection == "dh.careers")
    let careers =  await pack.getContent();
    let careerFound;
    for (let c of careers)
    {
      if (c.data.data.careergroup.value == roll.name && c.data.data.level.value == 1)
        careerFound = c
      if (careerFound)
        break;
    }
    careerFound.postItem()

    let chatData = {
      user : game.user._id,
      rollMode : game.settings.get("core", "rollMode"),
      exp : WFRP4E.randomExp.careerRand,
      trappings : WFRP4E.classTrappings[WFRP_Utility.matchClosest(WFRP4E.classTrappings, careerFound.data.data.class.value)]
    }


    if ( ["gmroll", "blindroll"].includes(chatData.rollMode) ) chatData["whisper"] = ChatMessage.getWhisperIDs("GM");
    if ( chatData.rollMode === "blindroll" ) chatData["blind"] = true;

    renderTemplate("systems/dh/templates/chat/chargen/career-select.html", chatData).then(html => {
      chatData.content = html;
      ChatMessage.create(chatData);
    })
  }
}