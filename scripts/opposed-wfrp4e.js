class OpposedWFRP {
  /**
   * This class is the handler for opposed tests
   */

  static opposedClicked(event)
  {
    let button = $(event.currentTarget),
    messageId = button.parents('.message').attr("data-message-id"),
    message = game.messages.get(messageId);
    let data = message.data.flags.data

    if (this.opposedInProgress)
    {
      if (game.messages.get(this.startMessage._id)) // If the startMessage still exists, proceed with the opposed test. Otherwise, start a new opposed test
        this.defenderClicked(data.postData, message.data.speaker)
      else 
      {
        this.clearOpposed()
        this.opposedClicked(event);
      }
    }
    else
    {
      this.opposedInProgress = true
      this.attackerClicked(data.postData, message.data.speaker)
    }
  }

  static attackerClicked(testResult, speaker)
  {
    this.attacker = {
      testResult : testResult,
      speaker : speaker
    }

    this.createOpposedStartMessage(speaker);

  }

  static defenderClicked(testResult, speaker)
  {
    this.defender = {
      testResult : testResult,
      speaker : speaker
    }

    this.evaluateOpposedTest(this.attacker, this.defender);
  }
  
  static evaluateOpposedTest(attacker, defender, options = {})
  {
    let result;
    try {
    let opposeResult = {};
    let attackerSL = parseInt(attacker.testResult.SL);
    let defenderSL = parseInt(defender.testResult.SL);
  
    let differenceSL = 0;
    if (attackerSL > defenderSL || (attackerSL == defenderSL && attacker.testResult.target > defender.testResult.target))
    {
      opposeResult.winner = "attacker"
      differenceSL = attackerSL - defenderSL;
      opposeResult.result = 
      `<b>${attacker.speaker.alias}</b> won against <b>${defender.speaker.alias}</b> by ${differenceSL} SL`
      opposeResult.img = attacker.img;
      opposeResult.speakerAttack= attacker.speaker
      opposeResult.speakerDefend = defender.speaker
      opposeResult.attackerTestResult = duplicate(attacker.testResult);
      opposeResult.defenderTestResult = duplicate(defender.testResult);
      if (!isNaN(opposeResult.attackerTestResult.damage))
      {
        let damageMultiplier = 1;
        let sizeDiff =  WFRP4E.actorSizeNums[opposeResult.attackerTestResult.size] - WFRP4E.actorSizeNums[opposeResult.defenderTestResult.size]
        damageMultiplier = sizeDiff >= 2 ? sizeDiff : 1
        if (opposeResult.attackerTestResult.trait)
        {
          if (sizeDiff >= 1)
          { 
            let SL = Number(opposeResult.attackerTestResult.SL)
            let unitValue = Number(opposeResult.attackerTestResult.roll.toString().split("").pop())

            let damageToAdd = unitValue - SL
            if (damageToAdd > 0)
              opposeResult.attackerTestResult.damage += damageToAdd
            
          }
          if (sizeDiff >= 2)
          {
            let unitValue = Number(opposeResult.attackerTestResult.roll.toString().split("").pop())
            opposeResult.attackerTestResult.damage += unitValue
          }
        }

        opposeResult.damage = 
        {
          description : `<b>Damage</b>: ${(opposeResult.attackerTestResult.damage - defenderSL) * damageMultiplier}`,
          value : (opposeResult.attackerTestResult.damage - defenderSL) * damageMultiplier
        };
      }
      else if (opposeResult.attackerTestResult.weapon || opposeResult.attackerTestResult.trait)
      {
        opposeResult.damage = 
        {
          description : `<b>Damage</b>: ?`,
          value : null
        };
      }
      if (opposeResult.attackerTestResult.hitloc)
        opposeResult.hitloc  = 
        {
          description : `<b>Hit Location</b>: ${opposeResult.attackerTestResult.hitloc.description}`,
          value : opposeResult.attackerTestResult.hitloc.result
        };
      }
      else
      {
        opposeResult.winner = "defender"
        differenceSL = defenderSL - attackerSL;
        opposeResult.result = `<b>${defender.speaker.alias}</b> won against <b>${attacker.speaker.alias}</b> by ${differenceSL} SL`
        opposeResult.img = defender.img
      }

      if (options.target)
      {
        opposeResult.hideData = true;
        renderTemplate("systems/dh/templates/chat/opposed-result.html", opposeResult).then(html => {
          let chatOptions = {
            user : game.user.id,
            content : html,
            "flags.opposeData" : opposeResult,
            "flags.startMessageId" : options.startMessageId,
          }
            ChatMessage.create(chatOptions)
        })
      }
      else 
      {
        opposeResult.hideData = true;
        renderTemplate("systems/dh/templates/chat/opposed-result.html", opposeResult).then(html => {
          let chatOptions = {
            user : game.user.id,
            content : html,
            "flags.opposeData" : opposeResult
          }
          try {
            this.startMessage.update(chatOptions).then(resultMsg =>{
              ui.chat.updateMessage(resultMsg)
              this.clearOpposed();
            })
          }
          catch {
            ChatMessage.create(chatOptions)
            this.clearOpposed();
          }
        })
      }
    }
    catch 
    {
      this.clearOpposed()
    }
  }

  static createOpposedStartMessage(speaker)
  {
    ChatMessage.create({
      user : game.user.id,
      hideData : true,
      content : `<div><b>${speaker.alias}<b> started an opposed test!<div>`
    }).then(msg => this.startMessage = msg)
  }

  static updateOpposedMessage(damageConfirmation, msgId)
  {
    let opposeMessage = game.messages.get(msgId)
    let newCard = {
      user : game.user.id,
      hideData : true,
      content : $(opposeMessage.data.content).append(`<div>${damageConfirmation}</div>`).html()
    }

    opposeMessage.update(newCard).then(resultMsg =>{
        ui.chat.updateMessage(resultMsg)
    })
  }

  static clearOpposed()
  {
    this.opposedInProgress = false;
    this.attacker = {};
    this.defender = {};
    this.startMessage = null;
  }
}