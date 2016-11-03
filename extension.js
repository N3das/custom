(function () {

    // Change this to your GitHub username so you don't have to modify so many things.
    var fork = "Gabr1ele";

    // Define our function responsible for extending the bot.
    function extend() {
        // If the bot hasn't been loaded properly, try again in 1 second(s).
        if (!window.bot) {
          return setTimeout(extend, 1 * 1000);
        }

        // Precaution to make sure it is assigned properly.
        var bot = window.bot;

        // Load custom settings set below
        bot.retrieveSettings();

        //Extend the bot here, either by calling another function or here directly.

        // You can add more spam words to the bot.
        var spamWords = ['spam1', 'spam2', 'spam3', 'spam4'];
        for (var i = 0; i < spamWords.length; i++) {
          window.bot.chatUtilities.spam.push(spamWords[i]);
        }

        // Example code for a bot command:
        bot.commands.baconCommand = {
          command: 'bacon',  // The command to be called. With the standard command literal this would be: !bacon
          rank: 'user', // Minimum user permission to use the command
          type: 'exact', // Specify if it can accept variables or not (if so, these have to be handled yourself through the chat.message
          functionality: function (chat, cmd) {
            if (this.type === 'exact' && chat.message.length !== cmd.length) return void (0);
            if (!bot.commands.executable(this.rank, chat)) return void (0);
            else {
              API.sendChat("/me Bacon!!!");
            }
          }
        };

        // Load the chat package again to account for any changes
        bot.loadChat();

      }

    //Change the bots default settings and make sure they are loaded on launch

    localStorage.setItem("basicBotsettings", JSON.stringify({
      botName: "Patriotas",
      language: "lithuanian",
      chatLink: "https://raw.githubusercontent.com/Gabr1ele/custom/master/lang/lt.json",
      scriptLink: "https://raw.githubusercontent.com/Gabr1ele/custom/master/patriotas.json",
      roomLock: false, // Requires an extension to re-load the script
      startupCap: 20, // 1-200
      startupVolume: 10, // 0-100
      startupEmoji: true, // true or false
      autowoot: true,
      autoskip: false,
      smartSkip: true,
      cmdDeletion: true,
      maximumAfk: 120,
      afkRemoval: true,
      maximumDc: 60,
      bouncerPlus: true,
      blacklistEnabled: true,
      lockdownEnabled: false,
      lockGuard: false,
      maximumLocktime: 10,
      cycleGuard: true,
      maximumCycletime: 10,
      voteSkip: true,
      voteSkipLimit: 5,
      historySkip: true,
      timeGuard: true,
      maximumSongLength: 10,
      autodisable: false,
      commandCooldown: 30,
      usercommandsEnabled: true,
      skipPosition: 3,
      skipReasons: [
      ["zanras", "Netinkamas zanras siai bendruomenei."],
      ["noreason", "Tave praskipino, nes taip norejo."],
      ["istorija", "Si daina jau grojo. "],
      ["ispejimas", "Uz tycini nesamoniu leidima gauni ispejima."],
      ["kokybe", "Sis irasas nekokybiskas arba be garso."],
      ["n18", "Vaizdo klipas negali buti rodomas vartotojams iki 18 metu."],
      ["negalima", "Daina negalima/negroja."]
      ],
      afkpositionCheck: 15,
      afkRankCheck: "ambassador",
      motdEnabled: false,
      motdInterval: 5,
      motd: "Sios dienos pranesimas",
      filterChat: true,
      etaRestriction: false,
      welcome: true,
      opLink: null,
      rulesLink: null,
      themeLink: null,
      fbLink: null,
      youtubeLink: null,
      website: null,
      intervalMessages: [],
      messageInterval: 5,
      songstats: true,
      commandLiteral: "!",
      blacklists: {
        NSFW: "https://raw.githubusercontent.com/Gabr1ele/custom/master/blacklists/NSFWlist.json",
        OP: "https://raw.githubusercontent.com/Gabr1ele/custom/master/blacklists/OPlist.json",
        BANNED: "https://raw.githubusercontent.com/Gabr1ele/custom/master/blacklists/BANNEDlist.json"
      }
    }));
{
    "room":                     "Otaku Net",
    "author":                   "Mr_Ben",
    "icon":                     "http://i.imgur.com/2W5yh5k.png",
    "css":                      "https://dl.dropboxusercontent.com/s/dxgd88vvz7pwz3l/plugcustomcsstheme2.css",
    "rules": {
        "allowAutorespond":     true,
        "allowAutowoot":        true,
        "allowAutojoin":        false,
        "allowAutograb":        true,
        "allowSmartVote":       true,
        "allowEmotes":          true,
        "allowShowingMehs":     true,
        "forceSmartVote":       false
    },
    "ccc": {
        "admin":                "#43BFC7",
        "ambassador":           "#4CC417",
        "host":                 "#E9FFFF",
        "cohost":               "#E9FFFF",
        "manager":              "#82CAFF",
        "bouncer":              "#38ACEC",
        "rdj":                  "#2B65EC",
        "subscriber":           "#FFFF00",
        "friend":               "#null",
        "user":                 "#98AFC7"
    },
    "images": {
        "background":           "http://i.imgur.com/GwcefEN.jpg",
        "playback":             null,
        "admin":                "https://cdn.radiant.dj/rcs/icons/radiant/admin.png",
        "ambassador":           "https://cdn.radiant.dj/rcs/icons/radiant/ambassador.png",
        "host":                 "https://dl.dropboxusercontent.com/s/t70qvqutc7043rd/SM-Host.png?dl=0",
        "cohost":               "https://dl.dropboxusercontent.com/s/0r4ke3rrbghyhy6/SM-Cohost.png?dl=0",
        "manager":              "https://dl.dropboxusercontent.com/s/w0b2u64yi1sa6xq/SM-Manager.png?dl=0",
        "bouncer":              "https://dl.dropboxusercontent.com/s/cr6oqo3gkzluej7/SM-Bouncer.png?dl=0",
        "rdj":                  "https://dl.dropboxusercontent.com/s/u6io4evqkij2gth/SM-Resdj.png?dl=0",
        "subscriber":           "https://cdn.radiant.dj/rcs/icons/radiant/subscriber.png"
    },
    "autocomplete": [],
    "emotes": {
        "custom_test": "https://cdn.radiant.dj/rcs/icons/test_custom.png",
        "reav": "http://i.imgur.com/J7J8nPt.gif",
        "otakuN": "http://i.imgur.com/axZcXdQ.png",
        "havii": "http://i.imgur.com/9wVLTYk.jpg",
        "izu": "http://i.imgur.com/BE77Gx3.gif",
        "weeb": "http://i.imgur.com/7C2zXsr.png"
 
    }
}
    // Start the bot and extend it when it has loaded.
    $.getScript("https://raw.githubusercontent.com/Gabr1ele/custom/master/patriotas.json", extend);

}).call(this);
