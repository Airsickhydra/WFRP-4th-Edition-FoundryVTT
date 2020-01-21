const WFRP4E = {}

CONFIG.ChatMessage.template = "systems/wfrp4e/templates/chat/chat-message.html"

CONFIG.statusEffects =
["systems/dh/icons/conditions/bleeding1.png",
"systems/dh/icons/conditions/bleeding2.png",
"systems/dh/icons/conditions/bleeding3.png",
"systems/dh/icons/conditions/bleeding4.png",
"systems/dh/icons/conditions/poisoned1.png",
"systems/dh/icons/conditions/poisoned2.png",
"systems/dh/icons/conditions/poisoned3.png",
"systems/dh/icons/conditions/poisoned4.png",
"systems/dh/icons/conditions/ablaze1.png",
"systems/dh/icons/conditions/ablaze2.png",
"systems/dh/icons/conditions/ablaze3.png",
"systems/dh/icons/conditions/ablaze4.png",
"systems/dh/icons/conditions/deafened1.png",
"systems/dh/icons/conditions/deafened2.png",
"systems/dh/icons/conditions/deafened3.png",
"systems/dh/icons/conditions/deafened4.png",
"systems/dh/icons/conditions/stunned1.png",
"systems/dh/icons/conditions/stunned2.png",
"systems/dh/icons/conditions/stunned3.png",
"systems/dh/icons/conditions/stunned4.png",
"systems/dh/icons/conditions/entangled1.png",
"systems/dh/icons/conditions/entangled2.png",
"systems/dh/icons/conditions/entangled3.png",
"systems/dh/icons/conditions/entangled4.png",
"systems/dh/icons/conditions/fatigued1.png",
"systems/dh/icons/conditions/fatigued2.png",
"systems/dh/icons/conditions/fatigued3.png",
"systems/dh/icons/conditions/fatigued4.png",
"systems/dh/icons/conditions/blinded1.png",
"systems/dh/icons/conditions/blinded2.png",
"systems/dh/icons/conditions/blinded3.png",
"systems/dh/icons/conditions/blinded4.png",
"systems/dh/icons/conditions/broken1.png",
"systems/dh/icons/conditions/broken2.png",
"systems/dh/icons/conditions/broken3.png",
"systems/dh/icons/conditions/broken4.png",
"systems/dh/icons/conditions/prone.png",
"systems/dh/icons/conditions/fear.png",
"systems/dh/icons/conditions/surprised.png",
"systems/dh/icons/conditions/unconscious.png",
"systems/dh/icons/conditions/grappling.png",
]

CONFIG.controlIcons.defeated = "systems/dh/icons/defeated.png";

 CONFIG.JournalEntry.noteIcons = {
   "Marker" : "systems/dh/icons/buildings/point_of_interest.png",
   "Apothecary" : "systems/dh/icons/buildings/apothecary.png",
   "Beastmen Herd 1" : "systems/dh/icons/buildings/beastmen_camp1.png",
   "Besatmen Herd 2" : "systems/dh/icons/buildings/beastmen_camp2.png",
   "Blacksmith" : "systems/dh/icons/buildings/blacksmith.png",
   "Bretonnian City 1" : "systems/dh/icons/buildings/bret_city1.png",
   "Bretonnian City 2" : "systems/dh/icons/buildings/bret_city2.png",
   "Bretonnian City 3" : "systems/dh/icons/buildings/bret_city3.png",
   "Bretonnian Worship" : "systems/dh/icons/buildings/bretonnia_worship.png",
   "Caste Hill 1" : "systems/dh/icons/buildings/castle_hill1.png",
   "Caste Hill 2" : "systems/dh/icons/buildings/castle_hill2.png",
   "Caste Hill 3" : "systems/dh/icons/buildings/castle_hill3.png",
   "Castle Wall" : "systems/dh/icons/buildings/castle_wall.png",
   "Cave 1" : "systems/dh/icons/buildings/cave1.png",
   "Cave 2" : "systems/dh/icons/buildings/cave2.png",
   "Cave 3" : "systems/dh/icons/buildings/cave3.png",
   "Cemetery" : "systems/dh/icons/buildings/cemetery.png",
   "Chaos Portal" : "systems/dh/icons/buildings/chaos_portal.png",
   "Chaos Worship" : "systems/dh/icons/buildings/chaos_worship.png",
   "Court" : "systems/dh/icons/buildings/court.png",
   "Dwarf Beer" : "systems/dh/icons/buildings/dwarf_beer.png",
   "Dwarf Hold 1" : "systems/dh/icons/buildings/dwarf_hold1.png",
   "Dwarf Hold 2" : "systems/dh/icons/buildings/dwarf_hold2.png",
   "Dwarf Hold 3" : "systems/dh/icons/buildings/dwarf_hold3.png",
   "Empire Barracks" : "systems/dh/icons/buildings/empire_barracks.png",
   "Empire City 1" : "systems/dh/icons/buildings/empire_city1.png",
   "Empire City 2" : "systems/dh/icons/buildings/empire_city2.png",
   "Empire City 3" : "systems/dh/icons/buildings/empire_city3.png",
   "Farm" : "systems/dh/icons/buildings/farms.png",
   "Food" : "systems/dh/icons/buildings/food.png",
   "Guard Post" : "systems/dh/icons/buildings/guards.png",
   "Haunted Hill" : "systems/dh/icons/buildings/haunted_hill.png",
   "Haunted Wood" : "systems/dh/icons/buildings/haunted_wood.png",
   "Inn 1" : "systems/dh/icons/buildings/inn1.png",
   "Inn 2" : "systems/dh/icons/buildings/inn2.png",
   "Kislev City 1" : "systems/dh/icons/buildings/kislev_city1.png",
   "Kislev City 2" : "systems/dh/icons/buildings/kislev_city2.png",
   "Kislev City 3" : "systems/dh/icons/buildings/kislev_city3.png",
   "Lumber" : "systems/dh/icons/buildings/lumber.png",
   "Magic" : "systems/dh/icons/buildings/magic.png",
   "Metal" : "systems/dh/icons/buildings/metal.png",
   "Mountain 1" : "systems/dh/icons/buildings/mountains1.png",
   "Mountain 2" : "systems/dh/icons/buildings/mountains2.png",
   "Orcs" : "systems/dh/icons/buildings/orcs.png",
   "Orc Camp" : "systems/dh/icons/buildings/orc_city.png",
   "Port" : "systems/dh/icons/buildings/port.png",
   "Road" : "systems/dh/icons/buildings/roads.png",
   "Ruins" : "systems/dh/icons/buildings/ruins.png",
   "Scroll" : "systems/dh/icons/buildings/scroll.png",
   "Sigmar" : "systems/dh/icons/buildings/sigmar_worship.png",
   "Stables" : "systems/dh/icons/buildings/stables.png",
   "Standing Stones" : "systems/dh/icons/buildings/standing_stones.png",
   "Swamp" : "systems/dh/icons/buildings/swamp.png",
   "Temple" : "systems/dh/icons/buildings/temple.png",
   "Textile" : "systems/dh/icons/buildings/textile.png",
   "Tower 1" : "systems/dh/icons/buildings/tower1.png",
   "Tower 2" : "systems/dh/icons/buildings/tower2.png",
   "Tower Hill" : "systems/dh/icons/buildings/tower_hill.png",
   "Wizard Tower" : "systems/dh/icons/buildings/wizard_tower.png",
   "Ulric" : "systems/dh/icons/buildings/ulric_worship.png",
   "Village 1" : "systems/dh/icons/buildings/village1.png",
   "Village 2" : "systems/dh/icons/buildings/village2.png",
   "Village 3" : "systems/dh/icons/buildings/village3.png",
   "Wood Elves 1" : "systems/dh/icons/buildings/welves1.png",
   "Wood Elves 2" : "systems/dh/icons/buildings/welves2.png",
   "Wood Elves 3" : "systems/dh/icons/buildings/welves3.png"
 }

// Species
WFRP4E.species = {
  "human": "Human",
  "dwarf": "Dwarf",
  "halfling": "Halfling",
  "helf": "High Elf",
  "welf": "Wood Elf",
};

WFRP4E.speciesCharacteristics = {
  "human" :
  {
   "ws" : "2d10+20",
   "bs" : "2d10+20",
   "s"  : "2d10+20",
   "t"  : "2d10+20",
   "i"  : "2d10+20",
   "ag" : "2d10+20",
   "dex": "2d10+20",
   "int": "2d10+20",
   "wp" : "2d10+20",
   "fel": "2d10+20"
  },
  "dwarf" :
  {
    "ws" : "2d10+30",
    "bs" : "2d10+20",
    "s"  : "2d10+20",
    "t"  : "2d10+30",
    "i"  : "2d10+20",
    "ag" : "2d10+10",
    "dex": "2d10+30",
    "int": "2d10+20",
    "wp" : "2d10+40",
    "fel": "2d10+10"
  },
  "halfling" :
  {
    "ws" : "2d10+10",
    "bs" : "2d10+30",
    "s"  : "2d10+10",
    "t"  : "2d10+20",
    "i"  : "2d10+20",
    "ag" : "2d10+20",
    "dex": "2d10+30",
    "int": "2d10+20",
    "wp" : "2d10+30",
    "fel": "2d10+30"
  },
  "helf" :
  {
    "ws" : "2d10+30",
    "bs" : "2d10+30",
    "s"  : "2d10+20",
    "t"  : "2d10+20",
    "i"  : "2d10+40",
    "ag" : "2d10+30",
    "dex": "2d10+30",
    "int": "2d10+30",
    "wp" : "2d10+30",
    "fel": "2d10+20"
  },
  "welf" :
  {
    "ws" : "2d10+30",
    "bs" : "2d10+30",
    "s"  : "2d10+20",
    "t"  : "2d10+20",
    "i"  : "2d10+40",
    "ag" : "2d10+30",
    "dex": "2d10+30",
    "int": "2d10+30",
    "wp" : "2d10+30",
    "fel": "2d10+20"
  },

}

WFRP4E.speciesSkills = {
  "human" : [
    "Animal Care",
    "Charm",
    "Cool",
    "Evaluate",
    "Gossip",
    "Haggle",
    "Language (Bretonnian)",
    "Language (Wastelander)",
    "Leadership",
    "Lore (Reikland)",
    "Melee (Basic)",
    "Ranged (Bow)"
  ],
  "dwarf" : [
    "Consume Alcohol",
    "Cool",
    "Endurance",
    "Entertain (Storytelling)",
    "Evaluate",
    "Intimidate",
    "Language (Khazalid)",
    "Lore (Dwarfs)",
    "Lore (Geology)",
    "Lore (Metallurgy)",
    "Melee (Basic)",
    "Trade (any one)"
  ],
  "halfling" : [
    "Charm",
    "Consume Alcohol",
    "Dodge",
    "Gamble",
    "Haggle",
    "Intuition",
    "Language (Mootish)",
    "Lore (Reikland)",
    "Perception",
    "Sleight of Hand",
    "Stealth (Any)",
    "Trade (Cook)"
  ],
  "helf" : [
    "Cool",
    "Entertain (Sing)",
    "Evaluate",
    "Language (Eltharin)",
    "Leadership",
    "Melee (Basic)",
    "Navigation",
    "Perception",
    "Play (any one)",
    "Ranged (Bow)",
    "Sail",
    "Swim"
  ],
  "welf" : [
    "Athletics",
    "Climb",
    "Endurance",
    "Entertain (Sing)",
    "Intimidate",
    "Language (Eltharin)",
    "Melee (Basic)",
    "Outdoor Survival",
    "Perception",
    "Ranged (Bow)",
    "Stealth (Rural)",
    "Track"
  ],
}

WFRP4E.speciesTalents = {
  "human" : [
    "Doomed",
    "Savvy, Suave",
    3
  ],
  "dwarf" : [
    "Magic Resistance",
    "Night Vision",
    "Read/Write, Relentless",
    "Resolute, Strong-minded",
    "Sturdy",
    0
  ],
  "halfling" : [
    "Acute Sense (Taste)",
    "Night Vision",
    "Resistance (Chaos)",
    "Small",
    0
  ],
  "helf" : [
    "Acute Sense (Sight)",
    "Coolheaded, Savvy",
    "Night Vision",
    "Second Sight, Sixth Sense",
    "Read/Write",
    0
  ],
  "welf" : [
    "Acute Sense (Sight)",
    "Hardy, Second Sight",
    "Night Vision",
    "Second Sight, Sixth Sense",
    "Read/Write",
    0
  ],
}

WFRP4E.speciesMovement = {
  "human" : 4,
  "dwarf" : 3,
  "halfling" : 3,
  "helf" : 5,
  "welf" : 5
}

WFRP4E.speciesFate = {
  "human" : 2,
  "dwarf" : 0,
  "halfling" : 0,
  "helf" : 0,
  "welf" : 0
}

WFRP4E.speciesRes = {
  "human" : 1,
  "dwarf" : 2,
  "halfling" : 2,
  "helf" : 0,
  "welf" : 0
}

WFRP4E.speciesExtra = {
  "human" : 3,
  "dwarf" : 2,
  "halfling" : 3,
  "helf" : 2,
  "welf" : 2
}

WFRP4E.classTrappings = {
  "Academics" : "Clothing, Dagger, Pouch, Sling Bag containing Writing Kit and 1d10 sheets of Parchment",
  "Burghers" : "Cloak, Clothing, Dagger, Hat, Pouch, Sling Bag containing Lunch",
  "Courtiers" : "Fine Clothing, Dagger, Pouch containing Tweezers, Ear Pick, and a Comb",
  "Peasants" : "Cloak, Clothing, Dagger, Pouch, Sling Bag containing Rations (1 day)",
  "Rangers" : "Cloak, Clothing, Dagger, Pouch, Backpack containing Tinderbox, Blanket, Rations (1 day)",
  "Riverfolk" : "Cloak, Clothing, Dagger, Pouch, Sling Bag containing a Flask of Spirits ",
  "Rogues" : "Clothing, Dagger, Pouch, Sling Bag containing 2 Candles, 1d10 Matches, a Hood or Mask",
  "Warriors" : "Clothing, Hand Weapon, Dagger, Pouch",
}



// Status Tiers
WFRP4E.statusTiers = {
  "g" : "Gold",
  "s" : "Silver",
  "b" : "Brass"
};

// Characteristic Names
WFRP4E.characteristics = {
    "ws": "Weapon Skill",  
    "bs": "Ballistic Skill",  
    "s": "Strength",  
    "t": "Toughness",  
    "i": "Initiative",  
    "ag": "Agility",  
    "dex": "Influence",  
    "int": "Intelligence",  
    "wp": "Willpower",  
    "fel": "Fellowship"
};

// Characteristic Abbreviations
WFRP4E.characteristicsAbbrev = {
  "ws": "WS",
  "bs": "BS",
  "s": "S",
  "t": "T",
  "i": "I",
  "ag": "Ag",
  "dex": "Inf",
  "int": "Int",
  "wp": "WP",
  "fel": "Fel"
};

WFRP4E.skillTypes = {
  "bsc" : "Basic",
  "adv" : "Advanced"
};

WFRP4E.xpCost = {
  "characteristic" : [25, 30, 40, 50, 70, 90, 120, 150, 190, 230, 280, 330, 390, 450, 520],
  "skill" : [10, 15, 20, 30, 40, 60, 80, 110, 140, 180, 220, 270, 320, 380, 440]
}

WFRP4E.skillGroup = {
  "isSpec" : "Is Specialization",
  "noSpec" : "Not Specialization"
};

WFRP4E.talentMax = {
  "1":"1",
  "2":"2",
  "none":"None",
  "ws":" Weapon Skill Bonus",
  "bs":"Ballistic Skill Bonus",
  "s": "Strength Bonus",
  "t": "Toughness Bonus",
  "i": "Initiative Bonus",
  "ag": "Agility Bonus",
  "dex": "Influence Bonus",
  "int": "Intelligence Bonus",
  "wp": "Willpower Bonus",
  "fel": "Fellowship Bonus"
};


// Weapon Groups
WFRP4E.weaponGroups = {
  "MeleeBasic" : "Melee Basic",
  "RangedBasic" : "Ranged Basic",
  "Las" : "Las",
  "Plasma" : "Plasma",
  "Flame" : "Flame",
  "Melta" : "Melta",
  "Bolt" : "Bolt",
  "RangedExotic" : "Ranged Exotic",
   "Chain" : "Chain",
  "Power" : "Power",
  "MeleeExotic" : "Melee Exotic",
  "Thrown" : "Thrown",
  "Launcher" : "Launcher",
   "Force" : "Force"
};

// Weapon Group Descriptions
WFRP4E.weaponGroupDescriptions = {
  "MeleeBasic": "Basic primitive melee weaponry of various types.",
  "RangedBasic": "Primitive and Solid Projectile weaponry.",
  "Las": "Standard issue Las weaponry.",
  "Plasma": "Rare, valuable and highly dangerous. Plasma weaponry often has two firing settings though +2 damage and pen is tempting,  roll a misfire that is also an even number — 00, 88, and so on — your weapon Misfires, exploding in your hand. You take full Damage to your primary arm location using the units die as an effective SL for the hit, and your weapon is destroyed.",
  "Flame": "Template based weapons ideal for taking down groups of enemies.",
  "Melta": "Ideal for melting through armour. Will make short work of most units.",
  "Bolt": "Some of the finest quality imperial weapons.",
  "RangedExotic": "Various Xenos and ancient weapons.",
  "Chain": "Reliably but noisy, ideal for cutting through heresy.",
  "Power": "Goes through armour like butter",
  "MeleeExotic": "Weapons including both xenos and lost imperial tech.",
  "Thrown": "Grenades and thrown weapons.",
  "Launcher": "Both grenade and missile launching weaponry.",
  "Force": "Weapons amplified by weilders of psykic power. These weapons may add their weilders WP bonus as additional weapon damage."
};
// Weapon Reach
WFRP4E.weaponReaches={
  "personal":"Personal",
  "vshort":"Very Short",
  "short":"Short",
  "average": "Average",
  "long":"Long",
  "vLong":"Very Long",
  "massive":"Massive",
 }

 // Weapon reach descriptions
 WFRP4E.reachDescription={
  "personal":"Your legs and fists, perhaps your head, and anything attached to those.",
  "vshort":"Less than a foot in length.",
  "short":"Up to 2 feet in length.",
  "average": "Up to 3 feet long.",
  "long":"Up to 6 feet long.",
  "vLong":"Up to 10 feet in length; can Engage enemies up to 4 yards away, rather than just 2.",
  "massive":"Anything over 10 feet long; can Engage enemies up to 6 yards away, rather than just 2",
 }

// Ammo Groups
WFRP4E.ammunitionGroups = {
  "Las": "Las",
  "Plasma": "Plasma",
  "Melta": "Melta",
  "Flamer": "Flamer",
  "Bullets": "Bullets",
  "Exotic":"Exotic"
};

// Item Qualities
WFRP4E.itemQualities ={
  "durable": "Durable",
  "fine": "Fine",
  "lightweight": "Lightweight",
  "practical": "Practical",
};

// Item Flaws
WFRP4E.itemFlaws = {
  "ugly": "Ugly",
  "shoddy": "Shoddy",
  "unreliable": "Unreliable",
  "bulky": "Bulky",
}


// Weapon Qualities
WFRP4E.weaponQualities = {
  "Accurate": "Accurate",
  "Balanced": "Balanced",
  "Blast": "Blast",
  "Concussive": "Concussive",
  "Corrosive": "Corrosive",
  "Crippling": "Crippling",
  "Daemonbane": "Daemonbane",
  "Defensive": "Defensive",
  "Felling": "Felling",
  "Flame": "Flame",
  "Flexible": "Flexible",
  "Force": "Force",
  "Graviton": "Graviton",
  "Hallucinogenic": "Hallucinogenic",
  "Haywire": "Haywire",
  "Indirect": "Indirect",
  "Lance": "Lance",
 "Maximal": "Maximal",
  "Melta": "Melta",
  "Overheats": "Overheats",
  "PowerField": "Power Field",
  "Proven": "Proven",
  "RazorSharp": "Razor Sharp",
  "Recharge": "Recharge",
  "Reliable": "Reliable",
  "Sanctified": "Sanctified",
  "Scatter": "Scatter",
  "Shocking": "Shocking",
  "Smoke": "Smoke",
  "Snare": "Snare",
 "Spray": "Spray",
  "Storm": "Storm",
  "Tearing": "Tearing",
  "Toxic": "Toxic",
  "TwinLinked": "Twin-Linked",
   "Vengeful": "Vengeful",
   "Flak": "Flak",
};

// Weapon Flaws
CONFIG.weaponFlaws = {
  "Unbalanced": "Unbalanced",
  "Unreliable": "Unreliable",
  "Unwieldly": "Unweildly",
  "Inaccurate": "Inaccurate",
  "Tainted": "Tainted",
  "tiring": "Tiring",
"Primitive": "Primitive",
  "undamaging": "Undamaging"
};



// Weapon Quality Descriptions (Used in dropdown info)
WFRP4E.qualityDescriptions = {
  "Accurate": "Grants +10 Bonus to hit if used with Aim, Basic weapons add +1 damage per two extra DoS when firing a single shot.",
"Balanced": "Bonus of 1 SL when defending in an opposed melee test",
"Blast": "All within the weapon’s blast radius in metres are hit. Roll Hit Location and damage individually for each character affected.",
"Concussive": "Target must pass Toughness test with penalty equal to 10 times (X) or be Stunned. Target is possibly knocked Prone.",
"Corrosive": "Reduces Armour points in Hit Location by 1d10 (Untill repair) Excess AP damage is dealt as damage to character.",
"Crippling": "Cripples the target until the end of the encounter. Crippled characters take (X) damage when performing both a move and an action.",
"Daemonbane": "Weapon gain the Vengeful (8) quality and their damage is not reduced by the target’s Toughness bonus.",
"Defensive": "When defending enemy deducts 1 SL from their roll. ",
"Felling": "Weapon reduces a target’s Toughness bonus by (X) when calculating damage from this weapon.",
"Flame": "Target must make a Dodge test or be set on fire.",
"Flexible": "-20 to defend with a weapon based roll against this weapon.",
"Force": "Normal weapon unless wielded by a psyker (pg 145).",
"Graviton": "Weapon inflicts additional damage equal to AP (pg 146).",
"Hallucinogenic": "This weapon forces a Valor tet on the target. Failure will provide one frenzy or broken condition.",
"Haywire": "Weapon generates a Haywire field (pg 147).",
"Indirect": "Weapon can fire at targets out of line of sight. Shots scatter Xd10 metres (pg 147).",
"Lance": "Weapon increases its penetration based on DoS from attack. (1:1)",
"Maximal": "Weapon has a second, more powerful, fire setting. +4 damage and might explode on an even misfire roll, dealing weapon damage plus unit die as SL damage.",
"Melta": "Weapon doubles its Pen when firing at Short range.",
"Overheats": "Attack roll of 91 or more to hit causes Overheat (pg 148).",
"PowerField": "When defending using a weapon based skill against a Power weapons, there is a 75% chance of destroying the opponent’s weapon.",
"Proven": "Weapon’s damage dice never count as rolling lower than (X).",
"RazorSharp": "If the attack results in three or more DoS, double weapon Pen.",
"Recharge": "When fired, cannot be fired again in the next round.",
"Reliable": "Weapon only jams (fumbles) on unmodified roll of 100. Weapons that do not roll to hit do not jam.",
"Sanctified": "This weapon deals Holy damage to Daemonic and Warp creatures.",
"Scatter": "At Point Blank range, weapon gains +10 to hit and +3 damage. At Short Range, weapon gains +10 to hit. Any longer ranges, weapon suffers –3 damage.",
"Shocking": "If weapon causes damage, the target must make a Challenging (+0) Toughness test or be Stunned for rounds equal to DoF.",
"Smoke": "Creates cloud with radius of (X) metres lasting 1d10+10 rounds.",
"Snare": "Target must make an Agility test with penalty equal to 10 times (X) or be immobilised. (See Snared). Action to burst the bonds (a Strength test) or wriggle free (an Agility test) Cumulative SL must = (x).",
"Spray": "Weapon projects a 30° arc cone out to the weapon’s range. Roll a ballistic skill test with +40 to hit; all creatures oppose with dodge or acrobatics.",
"Storm": "Double number of hits inflicted on target (and ammo expended).",
"Tearing": "May swap unit die for SL when calculating damage.",
"Toxic": "Targets damaged by weapon must make a Toughness test with penalty of X times 10 or suffer an extra 1d10 damage of same type of first Toxic damage that round (not reduced by Armour or Toughness).",
"TwinLinked": "Grants +20 Bonus to hit and uses twice as much ammunition. Two or more DoS inflicts 1 additional hit; reload time is doubled.",
 "Vengeful": "Critical hits will also apply on a hit ending with a 0, in addition to the usual doubles.",
 "flak" : "This item provides +1 AP against explosions.",
};
// Weapon Flaw Descriptions (used in dropdown info)
WFRP4E.flawDescriptions ={
  "Unbalanced": "Grants –1 SL to defend when using this weapon.",
  "Unreliable": "Weapon jams on roll of 91 or higher.",
  "Unwieldly": "Cannot use to defend in an opposed test (Must rely on dodge or other appropraite)",
  "Inaccurate": "Weapon gains no bonus from Aiming.",
  "Tainted": "Weapons inflict additional damage equal to the value of the user’s Corruption bonus or Daemonic (X) trait value (whichever is higher).",
  "Primitive": "Weapon’s damage dice never count as rolling higher than (X)."
};

// Armor Qualities
WFRP4E.armorQualities = {
  "flexible": "Flexible",
  "impenetrable": "Impenetrable",
};

// Armor Flaws
WFRP4E.armorFlaws = {
  "partial": "Partial",
  "weakpoints": "Weakpoints",
};

// Equipment Types
WFRP4E.armorTypes =  {
  "flak": "Flak",
  "power": "Power",
  "primitive": "Primitive",
  "mesh": "Mesh",
  "other": "Other"

};

// Range Test Modifiers
WFRP4E.rangeModifiers={
  "Point Blank" : "Easy (+40)",
  "Short Range":"Average (+20)",
  "Normal" : "Challenging (+0)",
  "Long Range": "Difficult (-10)",
  "Extreme": "Very Hard (-30)",
 }

// Difficulty Modifiers
WFRP4E.difficultyModifiers = {
 "veasy" : 60,
 "easy" : 40 ,
 "average":20,
 "challenging":0,
 "difficult": -10,
 "hard" : -20,
 "vhard": -30
}

// Difficulty Labels
WFRP4E.difficultyLabels = {

 "veasy" :"Very Easy (+60)",
 "easy" :"Easy (+40)",
 "average":"Average (+20)",
 "challenging":"Challenging (+0)",
 "difficult":"Difficult (-10)",
 "hard" :"Hard (-20)",
 "vhard":"Very Hard (-30)"
}

WFRP4E.locations = {
 "head": "Head",
 "body": "Body",
 "rArm": "Right Arm",
 "lArm": "Left Arm",
 "rLeg": "Right Leg",
 "lLeg": "Left Leg",
}



// Trapping Availability
WFRP4E.availability = {
  "None": "-",
  "Abundant": "Abundant",
  "Plentiful": "Plentiful",
  "Common": "Common",
  "Average": "Average",
  "Scarce": "Scarce",
  "Rare": "Rare",
  "VeryRare": "VeryRare",
  "ExtremelyRare": "Extremely Rare",
  "NearUnique": "Near Unique",
  "Unique": "Unique",
};


// Trapping Types
WFRP4E.trappingTypes = {
  "clothingAccessories":"Clothing and Accessories",
  "foodAndDrink":"Food and Drink",
  "toolsAndKits":"Tools and Kits",
  "booksAndDocuments":"Books and Documents",
  "tradeTools":"Trade Tools and Workshops", //unused, makes more sense to use Tools and Kits
  "drugsPoisonsHerbsDraughts":"Drugs, Poisons, Herbs, and Draughts",
  "ingredient":"Ingredient",
  "misc":"Miscellaneous"
};

// These categories are used to label items in containers (Trapping tab)
WFRP4E.trappingCategories = {
  "weapon" : "Weapons",
  "armour" : "Armour",
  "money" : "Money",
  "ammunition" : "Ammunition",
  "container" : "Container",
  "clothingAccessories":"Clothing and Accessories",
  "foodAndDrink":"Food and Drink",
  "toolsAndKits":"Tools and Kits",
  "booksAndDocuments":"Books and Documents",
  "tradeTools":"Trade Tools and Workshops", //unused, makes more sense to use Tools and Kits
  "drugsPoisonsHerbsDraughts":"Drugs, Poisons, Herbs, and Draughts",
  "ingredient":"Ingredient",
  "misc":"Miscellaneous"
};

// Creature Sizes
WFRP4E.actorSizes = {
  "tiny": "Tiny",
  "ltl": "Little",
  "sml": "Small",
  "avg": "Average",
  "lrg": "Large",
  "enor": "Enormous",
  "mnst": "Monstrous"
};

WFRP4E.actorSizeNums = {
  "tiny": 0,
  "ltl": 1,
  "sml": 2,
  "avg": 3,
  "lrg": 4,
  "enor": 5,
  "mnst": 6
};

WFRP4E.tokenSizes= {
  "tiny": 0.3,
  "ltl": 0.5,
  "sml": 0.8,
  "avg": 1,
  "lrg": 2,
  "enor": 3,
  "mnst": 4
};

// Condition Types
WFRP4E.magicLores = {
  "petty": "Petty",
  "beasts": "Beasts",
  "death": "Death",
  "fire": "Fire",
  "heavens": "Heavens",
  "metal": "Metal",
  "life": "Life",
  "light": "Light",
  "shadow": "Shadow",
  "hedgecraft": "Hedgecraft",
  "witchcraft": "Witchcraft",
  "daemonology": "Daemonology",
  "necromancy": "Necromancy",
  "nurgle": "Nurgle",
  "slaanesh": "Slaanesh",
  "tzeentch": "Tzeentch",
};

// Given a Lore, what is the Wind
WFRP4E.magicWind = {
  "petty": "None",
  "beasts": "Ghur",
  "death": "Shyish",
  "fire": "Aqshy",
  "heavens": "Azyr",
  "metal": "Chamon",
  "life": "Ghyran",
  "light": "Hysh",
  "shadow": "Ulgu",
  "hedgecraft": "None",
  "witchcraft": "None",
  "daemonology": "Dhar",
  "necromancy": "Dhar",
  "nurgle": "Dhar",
  "slaanesh": "Dhar",
  "tzeentch": "Dhar",
};

WFRP4E.loreEffect = {
  "petty": "None",
  "beasts": "Whenever you successfully cast a spell from the Lore of Beasts, you may also gain the Fear (1) Creature Trait for the next 1d10 Rounds.",
  "death": "Targets afflicted by spells from the Lore of Death are drained of life, enervated, and listless. You may assign +1 Fatigued Condition to any living target aﬀected by a spell from this lore. A target may only ever have a single Fatigued Condition gained in this manner at any one time.",
  "fire": "You may inﬂict +1 Ablaze Condition on anyone targeted by spells from the Lore of Fire, unless they also possess the Arcane Magic (Fire) Talent. Every Ablaze condition within Willpower Bonus yards adds +10 to attempts to Channel or Cast with Aqshy. ",
  "heavens": "Spells causing Damage ignore Armour Points from metal armour, and will arc to all other targets within 2 yards, except those with the Arcane Magic (Heavens) Talent, inﬂicting hits with a Damage equal to your Willpower Bonus, handled like a magical missile.",
  "metal": "Spells inﬂicting Damage ignore Armor Points from metal armor, and inﬂict bonus Damage equal to the number of Armor Points of metal armor being worn on any Hit Location struck. So, if your spell hit an Arm location protected by 2 Armor Points of metal armor, it would cause an additional +2 Damage and ignore the Armor Points.",
  "life": "Receive a +10 bonus to Casting and Channeling rolls when in a rural or wilderness environment. Living creatures — e.g. those without the Daemonic or Undead Creature Traits — targeted by Arcane Spells from the Lore of Life have all Fatigued and Bleeding Conditions removed after any other eﬀects have been applied as life magic ﬂoods through them. Creatures with the Undead Creature Trait, on the other hand, suffer additional Damage equal to your Willpower Bonus, ignoring Toughness Bonus and Armor Points, if aﬀected by any spell cast with the Lore of Life.",
  "light": "You may inﬂict one Blinded Condition on those targeted by Lore of Light spells, unless they possess the Arcane Magic (Light) Talent. If a target has the Daemonic or Undead Creature Traits, spells also inﬂict an additional hit with Damage equal to your Intelligence Bonus that ignores Toughness Bonus and Armor Points.",
  "shadow": "All spells cast from the Lore of Shadows inﬂicting Damage ignore all non-magical Armor Points.",
  "hedgecraft": "Hedgecraft spells cannot be cast without ingredients, which are an integral part of their spellcasting process.<br><br>Fortunately, the ingredients they use are easily found on the fringes of settlements and are usually herbs or plants. You receive 1 + SL ingredients on a successful foraging roll, using Lore (Herbs), as described under Gathering Food and Herbs, or you can buy them for 5 brass pennies each.",
  "witchcraft": "Each time practitioners of Witchcraft roll on a Miscast table, they also gain 1 Corruption point. Further, you may inﬂict one Bleeding Condition on anyone targeted by spells from the Lore of Witchcraft. Lastly, channeling or casting spells from this Lore automatically require a roll on the Minor Miscast table unless cast with an ingredient, where the ingredient provides no further protection should you roll a Miscast. Fortunately, ingredients for the Lore of Witchcraft are cheap and readily available: body parts of small animals for the most part. Ingredients cost a spell’s CN in brass pennies, instead of silver shillings, to purchase. Alternatively, a Witch may forage for parts, using the Outdoor Survival skill: a successful foraging roll receives 1 + SL ingredients, as described under Gathering Food and Herbs",
  "daemonology": "",
  "necromancy": "",
  "nurgle": "",
  "slaanesh": "",
  "tzeentch": "",
};

// Types of prayers
WFRP4E.prayerTypes = {
  "blessing" : "Blessing",
  "miracle" : "Miracle"
}

WFRP4E.mutationTypes = {
  "physical" : "Physical",
  "mental" : "Mental"
}

WFRP4E.encumbrancePenalties = {
"encumbered" : "–1 Movement (min: 3), –10 Agility, +1 Travel Fatigue",
"veryEncumbered" : "–2 Movement (min: 2), –20 Agility (min: 10), +2 Travel Fatigue",
"maxEncumbered" : "You're not moving.",
}

WFRP4E.conditions = {
  "ablaze" : "Ablaze",
  "bleeding" : "Bleeding",
  "blinded" : "Blinded",
  "broken" : "Broken",
  "deafened" : "Deafened",
  "entangled" : "Entangled",
  "fatigued" : "Fatigued",
  "poisoned" : "Poisoned",
  "prone" : "Prone",
  "stunned" : "Stunned",
  "surprised" : "Surprised",
  "unconscious" : "Unconscious",
  "grappling" : "Grappling",
  "fear" : "Fear"
}


WFRP4E.conditionDescriptions = {
  "ablaze" : "At the end of every Round, you suﬀer <b><a class = 'chat-roll'>1d10</a></b> Wounds, modified by Toughness Bonus and Armor Points on the least protected Hit Location, with a minimum of 1 Wound suﬀered. Each extra Ablaze Condition you have adds +1 to the Damage suﬀered; so, three Ablaze Conditions result in 1d10+2 Damage suﬀered.<br><br>One Ablaze Condition can be removed with a successful Athletics Test, with each SL removing an extra Ablaze Condition. The Difficulty for this Test is modified by circumstances: it’s much easier to put out a fire rolling around on sand than it is in the middle of an oil-soaked kitchen",
  "bleeding" : "You are bleeding badly. Lose 1 Wound at the end of every Round, ignoring all modifiers. Further, suﬀer a penalty of –10 to any Tests to resist Festering Wounds, Minor Infection, or Blood Rot. If you reach 0 Wounds, you no longer lose Wounds and instead fall immediately unconscious (gain the <a class ='condition-chat'>Unconscious</a> Condition). At the end of Round, you have a 10% chance of dying per Bleeding Condition you have; so, if you had 3 Bleeding Conditions, you would die from blood loss on a roll of 0–30. If a double is scored on this roll, your wound clots a little: lose 1 Bleeding.You cannot regain consciousness until all Bleeding Conditions are removed (see Injury)<br><br>A Bleeding Condition can be removed with: a successful Heal Test, with each SL removing an extra Bleeding Condition; or with any spell or prayer that heals Wounds, with one Condition removed per Wound healed.<br><br>Once all Bleeding Conditions are removed, gain one <a class ='condition-chat'>Fatigued</a> Condition.",
  "blinded" : "Perhaps because of a ﬂash of light, or because of liquid sprayed in your face, you are unable to see properly. You suﬀer a –10 penalty to all Tests involving sight, and any opponent attacking you in close combat gains a bonus of +10 to hit you.<br><br>One Blinded Condition is removed at the end of every other Round",
  "broken" : "You are terrified, defeated, panicked, or otherwise convinced you are going to die. On your turn, your Move and Action must be used to run away as fast as possible until you are in a good hiding place beyond the sight of any enemy; then you can use your Action on a Skill that allows you to hide more eﬀectively. You also receive a penalty of –10 to all Tests not involving running and hiding.<br><br>You cannot Test to rally from being Broken if you are Engaged with an enemy. If you are unengaged, at the end of each Round, you may attempt a Cool Test to remove a Broken Condition, with each SL removing an extra Broken Condition, and the Difficulty determined by the circumstances you currently find yourself: it is much easier to rally when hiding behind a barrel down an alleyway far from danger (Average +20) than it is when three steps from a slavering Daemon screaming for your blood (Very Hard –30).<br><br>If you spend a full Round in hiding out of line-of-sight of any enemy, you remove 1 Broken Condition.<br><br>Once all Broken Conditions are removed, gain 1 <a class ='condition-chat'>Fatigued</a> Condition.",
  "deafened" : "Whether caused by a loud noise or a blow to the head, you are unable to hear properly. You suﬀer a –10 penalty to all Tests involving hearing, and any opponent attacking you in close combat from the ﬂank or rear gains an extra bonus of +10 to hit you (this bonus does not increase with multiple Deafened Conditions). One Deafened condition is removed at the end of every other Round and is often replaced with tinnitus.",
  "entangled" : "You are wrapped in something restricting your movement; it could be ropes, spider’s webbing, or an opponent’s bulging biceps. On your turn, you may not Move, and all your actions involving movement of any kind suﬀer a penalty of –10 (including Grappling). For your Action, you can remove an Entangled Condition if you win an Opposed Strength Test against the source of the entanglement, with each SL removing an extra Entangled Condition.",
  "fatigued" : "You are exhausted or stressed, and certainly in need of rest. You suﬀer a –10 penalty to all Tests. Removing a Fatigued Condition normally requires rest, a spell, or a divine eﬀect, though in some instances, such as when a <a class ='condition-chat'>Fatigued</a> Condition is caused by carrying too much (see Encumbrance), simply changing your circumstances (carrying fewer trappings, for example) can remove a Condition.",
  "poisoned" : "You have been poisoned or injected with venom. All Tests to remove poison have their difficulty determined by the poison or venom suﬀered. At the end of each Round, lose 1 Wound, ignoring all modifiers. Also, suﬀer a penalty of –10 to all Tests.<br><br>If you reach 0 Wounds when Poisoned, you cannot heal any Wounds until all Poisoned conditions are removed. If you fall Unconscious when Poisoned, make an Endurance Test after a number of Rounds equal to your Toughness Bonus or die horribly. See Injury.<br><br>At the end of each Round, you may attempt an Endurance Test. If successful, remove a Poisoned Condition, with each SL removing an extra Poisoned Condition. A Heal Test provides the same results. Once all Poisoned Conditions are removed, gain 1 Fatigued Condition.",
  "prone" : "You have fallen to the ground, possibly because you have run out of Wounds, you’ve tripped, or because you’ve been hit by something rather large. On your turn, your Move can only be used to stand up or crawl at half your Movement in yards (note: if you have 0 Wounds remaining, you can only crawl). You suﬀer a –20 penalty to all Tests involving movement of any kind, and any opponent trying to strike you in Melee Combat gains +20 to hit you.<br><br>Unlike most other conditions, Prone does not stack — you are either Prone, or you are not. You lose the Prone Condition when you stand up.",
  "stunned" : "You have been struck about the head or otherwise disorientated or confused; your ears are likely ringing, and little makes sense.<br><br>You are incapable of taking an Action on your turn but are capable of half your normal movement. You can defend yourself in opposed Tests — but not with Language (Magick). You also suﬀer a –10 penalty to all Tests. If you have any Stunned Conditions, any opponent trying to strike you in Melee Combat gains +1 Advantage before rolling the attack.<br><br>At the end of each Round, you may attempt a Challenging (+0) Endurance Test. If successful, remove a Stunned Condition, with each SL removing an extra Stunned Condition.<br><br>Once all Stunned Conditions are removed, gain 1 Fatigued Condition if you don’t already have one.",
  "surprised" : "You have been caught unawares and you aren’t at all ready for what’s about to hit you. You can take no Action or Move on your turn and cannot defend yourself in opposed Tests. Any opponent trying to strike you in Melee Combat gains a bonus of +20 to hit.<br><br>The Surprised Condition does not stack, so you do not collect multiple Surprised Conditions, even should you be technically surprised multiple times in a Round.<br><br>At the end of each Round, or after the first attempt to attack you, you lose the Surprised Condition.",
  "unconscious" : "You are knocked out, asleep, or otherwise insensible. You can do nothing on your turn and are completely unaware of your surroundings. Any Melee attack targeting you automatically hits on the location of the attacker’s choice with the maximum possible SL it could score, and also inﬂicts a Critical Wound; or, if the GM prefers, any close combat hit simply kills you. Any ranged combat hit automatically does the same if the shooter is at Point Blank range.<br><br>The Unconscious Condition does not stack — you are either Unconscious, or you are not — so you do not collect multiple Unconscious Conditions.<br><br>Recovering from unconsciousness requires diﬀerent circumstances depending upon why you fell unconscious. Refer to Injury for more on this. If you spend a Resolve point to remove an Unconscious condition, but have not resolved the cause of the incapacitation, you gain another Unconscious Condition at the end of the round. When you lose the Unconscious Condition, you gain the <a class ='condition-chat'>Prone</a> and <a class ='condition-chat'>Fatigued</a> Conditions",
  "grappling" : "If you begin your turn Grappling, you may break the Grapple if you have a higher Advantage than your opponent, and do not count as being Engaged for your Move; otherwise, you must make an Opposed Strength Test for your Action. If you win, you can do one of the following:<br><ul><li>Deal SB + SL Damage using your Strength roll to determine the Hit Location affected. You ignore any Armour Points as you wrench arms and pull muscles.</li><li>Either: 1) Give your opponent an <a class ='condition-chat'>Entangled</a> Condition, or 2) Remove an <a class ='condition-chat'>Entangled</a> Condition from yourself, plus lose an extra one for each SL by which you win</li></ul>",
  "fear" : "When subject to Fear, you suffer –1 SL on all Tests to affect the source of your fear. You may not move closer to whatever is causing Fear without passing a <b>Challenging (+0) Cool</b> Test. If it comes closer to you, you must pass a <b>Challenging (+0) Cool</b> Test, or gain a <a class ='condition-chat'>Broken</a> Condition"
}

WFRP4E.symptoms = {
  "blight" : "Blight",
  "buboes" : "Buboes",
  "convulsions" : "Convulsions",
  "coughsAndSneezes" : "Coughs and Sneezes",
  "fever" : "Fever",
  "flux" : "Flux",
  "gangrene" : "Gangrene",
  "lingering" : "Lingering",
  "malaise" : "Malaise",
  "nausea" : "Nausea",
  "pox" : "Pox",
  "wounded" : "Wounded",
  "delirium" : "Delirium",
  "swelling" : "Swelling"
}

WFRP4E.symptomDescriptions = {
  "blight" : "You are seriously ill and perhaps close to Morr’s Portal as deadly poisons ﬂood your body.\n\nPass a <b>Very Easy (+60) Endurance</b> daily (normally when you sleep) or die, passing away, perhaps in your sleep, perhaps lost in a fever, perhaps in agony. If Blight is marked as (Moderate), this Test is <b>Easy (+40)</b>; if marked as (Severe), this Test is <b>Average (+20)</b>.",
  "buboes" : "You have huge swellings of the lymph nodes, possibly in the groin, neck or armpits. These are enormously painful and may bleed or seep pus. They are disgusting, smelly, and some would argue a sure sign of the Lord of Pestilence’s favor, believing they hide tiny, growing Daemons. Common practice is to lance these terrible expressions of taint to remove whatever nestles within, though doing so often results in Festering Wounds.\n\nSuffer a penalty of –10 to all physical Tests, and to all Fellowship Tests if the buboes can be seen (or smelled!).",
  "convulsions" : "Your body periodically spasms or shakes as the infection seemingly uses you like a puppet.\n\nSuffer a penalty of –10 to all physical Tests as your body convulses beyond your control. If this symptom is marked as (Moderate), the penalty increases to –20. If it is marked as (Severe), you need to be tied down in order not to hurt yourself, leaving you eﬀectively incapacitated.",
  "coughsAndSneezes" : "You intermittently cough or sneeze, spreading your disease to all around you. Any characters in your environment are exposed to the disease you carry, and need Test for Contraction once per hour, or part thereof, of exposure.",
  "fever" : "Your temperature is high, you’re likely sweating, and you really don’t look at all well. Suffer a penalty of –10 to all physical and Fellowship Tests. If your Fever is marked as (Severe), it has completely incapacitated you, leaving you bed-ridden. Take the <a class ='condition-chat'>Unconscious</a> Condition, though expenditure of a Resolve point can bring consciousness for a few minutes.",
  "flux" : "There’s a rumble and a grumble, then you’re oﬀ for yet another sprint to the splattered outhouse. Pale and weary, you’ve had better days. Any given situation may be the moment you just have to go to the privy. You are expected to take every opportunity you can to pop oﬀ for an essential stop, and this is largely left in your hands. In addition, the GM can choose any point during the session’s play to claim you need to go. You have a number of rounds equal to your Toughness Bonus to get to an appropriate place to relieve yourself; whether you get there in time or not, your body will empty itself in a spectacular fashion. If the Flux is marked as (Moderate), the GM can make you go twice a session. If it is marked as (Severe), the GM can do it three times, and you will also lose 1 Wound per visit, as the bloody ﬂux leaves you utterly drained. ",
  "gangrene" : "Your ﬂesh is turning black, dying, infected with something awful, and it isn’t going to get better. Roll percentile dice to determine a <a class ='table-click' data-table='hitloc'>Hit Location</a>. If you roll Body, luckily the Gangrene did not settle in during this infection. If you roll Head, your nose is aﬀected. If you roll Arms, it’s your fingers. If you roll Leg, it’s your feet. Each day, roll an <b>Average (+20) Endurance</b> Test. If you pass, you hold oﬀ the Gangrene; if you fail, it grows worse. If you ever fail more times than you have Toughness Bonus, you completely lose all capability with the aﬀected location. If this occurs, use the same rules as Amputated Parts. For as long as you have Gangrene, suﬀer a penalty –10 to all Fellowship Tests, and suﬀer the Wounded symptom. Further, if not already suffering it, you also suﬀer from Blight until the aﬀected tissue is amputated; this remains even if you are cured of the disease that started the Gangrene. ",
  "lingering" : "You have an infection that just refuses to go away. Indeed, you fear it may be getting worse… After your disease reaches the end of its duration, attempt an Endurance Test with the Difficulty marked on the symptom like so: Lingering (Average) or Lingering (Easy). If this scores a Marginal Failure (0), the duration extends for an extra <b><a class = 'chat-roll'>1d10</a></b> days. If it scores a Failure (–2), develop a Festering Wound. On an Astounding Failure (–6), you instead develop Blood Rot. ",
  "malaise" : "You don’t feel at all well. You are tired, find it hard to concentrate, and just generally ill. Take a <a class ='condition-chat'>Fatigued</a> Condition that you can only remove when you have recovered from your illness. ",
  "nausea" : "You feel very sick and are prone to vomiting if you move around too quickly. Whenever you fail a Test involving physical movement, your nausea overwhelms you and you vomit. You gain the <a class = 'condition-chat'>Stunned</a> condition, which represents you being sick repeatedly or dry heaving, depending upon your current circumstances. ",
  "pox" : "You are covered in pustules, inﬂamed swellings, disgusting rashes, or itchy spots, which are unlikely to be your most attractive feature. Pox are largely a cosmetic issue, resulting in a penalty of –10 to Fellowship Tests. Additionally, remember to roleplay and describe all the scratching; if you want to withhold from this for a while, pass an <b>Average (+20) Cool</b> Test. When the Pox ends, attempt an <b>Average (+20) Cool</b> Test. If this fails, reverse the Test dice and apply permanent scarring to that Hit Location, showing an area where you scratched and the pox there healed badly. If the <a class='table-click' data-table = 'hitloc'>Hit Location</a> is the head, permanently lose 1 in Fellowship.",
  "wounded" : "You have a wound or open sore that does not heal properly because of an infection. For each Wounded symptom you have, you cannot heal one of your Wounds, which stays open and sore, possibly seeping foul-smelling pus. Every day, take an <b>Easy (+20) Endurance</b> Test or gain a Festering Wound if you do not already have one.",
  "delirium" : "Your sensibility comes and goes, with moments of clarity replaced suddenly by bouts of raving, hallucinations, and terror. Make a <b>Challenging (+0) Willpower Test</b> each hour, and consult the <b><a class='table-click' data-table='delirium'>Delirium</a></b> table.",
  "swelling" : "A part of the body swells up to several times its normal size, turning an angry red or purple colour and becoming almost unusable. The affected body part is normally the location of a wound or bite causing the Swelling, or the point of contact where a disease or infection entered the body.<br><br><b>Head</b>: The eyes and tongue bulge, the cheeks become livid, the jaw is forced open. Eating is impossible, but clear liquids maybe sipped in small quantities. Any Tests requiring speech are 3 steps more Difficult.<br><b>Arm</b>:The arm and hand swell, the shoulder and elbow joints cannot move, and the hand becomes useless. For the duration, the arm counts as Amputated (WFRP, page 180).<br><b>Body</b>: The entire body swells until the sufferer can no longer wear clothes. All Tests involving movement become 3 steps more Difficult.<br><b>Leg</b>: The leg swells grotesquely, becoming as wide as the widest part of the thigh for its entire length. The foot is almost indistingushable. For the duration, the leg counts as Amputated (WFRP, page 180)."
}

WFRP4E.symptomTreatment = {
  "blight" : "None that work",
  "buboes" : "A successful Heal Test with Surgery can lance your buboes, removing the penalty. If the Test is failed, gain a Festering Wound. If your Buboes are lanced, make a <b>Difficult (–10) Endurance</b> Test once per day or more swell into place",
  "convulsions" : "Rare herbs and alchemical mixes can lessen this symptom for a day, bringing Severe down to Moderate, and Moderate down to standard convulsions. These can be created by any with the Trade (Apothecary) skill and access to the appropriate ingredients (which can cost upwards of 10 shillings or more per dose). The final medicine is Rare and usually genuine (80%), and can be bought for around 1 GC per dose from Apothecaries, putting it beyond the reach of most citizens of the Empire.",
  "coughsAndSneezes" : "None that work",
  "fever" : "There are many common, often disgusting, remedies for a fever, most of which don’t work (only 10% of commercial cures are genuine). A successful Heal Test does little more that inform you how long the fever will likely last. The cures range from a few pennies to many shillings in cost. If genuine, they will remove the symptoms of a Fever (not a severe one) if you pass a <b>Challenging (+0) Endurance</b> Test.",
  "flux" : "Real cures for the Flux are rare (10% of commercial remedies are genuine), but many apothecaries and herbalists swear theirs work every time. Costs vary widely according to where you buy the cures, from a few brass coins to small bag of silver. If genuine, the Flux can be held oﬀ for your Toughness Bonus in hours by taking a remedy.",
  "gangrene" : "Amputation of the gangrenous location is the only eﬀective treatment.",
  "lingering" : "Cures for lingering infections are commonplace and usually relatively cheap, rarely costing more than a shilling. However, almost all are fake or based on faulty lore. Any bought cure has only a 10% chance of being genuine, but if so will negate the need to roll the Endurance Test if taken on the correct day (which will require a successful Heal Test to determine).",
  "malaise" : "Medicine treating Malaise, costing anything from a few pence to a handful of silver, is usually genuine (75% chance); and, if so, pass a <b>Challenging (+0) Endurance</b> Test to ignore the symptom for the day.",
  "nausea" : "Remedies for Nausea are Common and usually genuine (60% chance), and typically cost around thirty pennies; if genuine, pass a <b>Challenging (+0) Endurance</b> Test, and the Nausea can be ignored for a number of hours equal to your Toughness Bonus.",
  "pox" : "Poxes are exceedingly common, and so are remedies, which are usually creams or oils. Larger temples of Shallya often keep a stock of the cream for free (though donations are expected) and apothecaries and herbalists of all kinds sell similar products for relatively low prices (rarely more than six or seven pence for a week’s worth of treatment, with a 90% chance of being genuine medicine). Using a cream increases all Cool Tests to resist scratching to <b>Very Easy (+60)</b>, but is usually unsightly.",
  "wounded" : "A daily successful Heal Test ensures the Wound is clean and does not require an Endurance Test to be further infected.",
  "delirium" : "Some authorities treat delirium as part of a fever, prescribing the same measures. Remedies cost from a few pennies to a few shillings, and 10% are genuine.<br><br>With the correct medicine, a successful <b>Challenging (+0) Heal</b> Test banishes the hallucinations for <b><a class = 'chat-roll'>1d10</a></b> hours.<br><br>It is also common to sedate delirious patients with a tranquillising drug, such as Moonflower or even Nightshade, to keep the patient comfortable until the condition has passed, sending them into a Fitful Sleep until they either recover or die.",
  "swelling" : "Most treatments involve plunging the affected part, or sometimes the whole body, into an ice-water bath to reduce the heat that accompanies the swellings. An Extended <b>Hard (-20) Heal Test</b> requiring +3 SL reduces the swelling by <b><a class = 'chat-roll'>2d10</a></b> hours. Each Test takes an hour. The patient is left with +1 Fatigued Condition for every Test made in the process.<br><br>Some physicians instead bleed the patient with a blade or leeches. A successful <b>Extended Heal Test</b> requiring +4 SL and Trade Tools (Physician) reduces the swelling by (<a class = 'chat-roll'>1d10</a> + the patient's Toughness Bonus) hours. Each Test has a base Difficulty of <b>Impossible (-50)</b> and takes half an hour."
}

WFRP4E.earningValues = {
  "b" : "2d10",
  "s" : "1d10",
  "g" : "1",
}

WFRP4E.randomExp = {
  speciesRand : 20,
  careerRand : 50,
  careerReroll : 25,
  statsRand : 50,
  statsReorder : 25
}

WFRP4E.traitBonuses = {
  "big" : { 
    "s" :   10,
    "t" :   10,
    "ag" : -5
  },
  "brute" : {
    "m" :  -1,
    "t" :   10,
    "s" :   10,
    "ag" : -10
  },
  "clever" : { 
    "int" : 20,
    "i" :   10
  },
  "cunning" : { 
    "int" : 10,
    "fel" : 10,
    "i" :   10
  },
  "elite" : { 
    "ws" : 20,
    "bs" : 20,
    "wp" : 20
  },
  "fast" : { 
    "ag" : 10,
    "m" : 1
  },
  "leader" : { 
    "fel" : 10,
    "wp" :  10
  },
  "tough" : { 
    "t" :   10,
    "wp" :  10
  }
}

WFRP4E.talentBonuses = {
  "savvy" : "int",
  "suave" : "fel",
  "marksman" : "bs",
  "very strong" : "s",
  "sharp" : "i",
  "lightning reflexes" : "ag",
  "coolheaded" : "wp",
  "very resilient" : "t",
  "nimble fingered" : "dex",
  "warrior born" : "ws"
}

const DAMAGE_TYPE = {
  NORMAL : 0,
  IGNORE_AP : 1,
  IGNORE_TB : 2,
  IGNORE_ALL : 3
}