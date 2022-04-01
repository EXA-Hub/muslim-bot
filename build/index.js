"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const wokcommands_1 = __importDefault(require("wokcommands"));
const discord_js_1 = require("discord.js");
const path_1 = __importDefault(require("path"));
const Client_1 = __importDefault(require("./classes/Client"));
const client = new Client_1.default({
    intents: [
        discord_js_1.Intents.FLAGS.GUILDS,
        discord_js_1.Intents.FLAGS.GUILD_MESSAGES,
        discord_js_1.Intents.FLAGS.GUILD_MESSAGE_REACTIONS,
    ],
    presence: {
        status: "online",
        activities: [
            {
                name: `لا إله إلا الله`,
                type: "PLAYING",
            },
        ],
    },
});
client.on("ready", () => {
    new wokcommands_1.default(client, {
        commandsDir: path_1.default.join(__dirname, "commands"),
        featuresDir: path_1.default.join(__dirname, "events"),
        messagesPath: path_1.default.join(__dirname, "languages.json"),
        typeScript: true,
        showWarns: true,
        delErrMsgCooldown: -1,
        defaultLanguage: "العربية",
        ignoreBots: true,
        ephemeral: true,
        dbOptions: {
            keepAlive: true,
        },
        testServers: ["719288987700953150"],
        botOwners: ["635933198035058700", "945760318007701625"],
        disabledDefaultCommands: [
        // "requiredrole",
        // "language",
        // "command",
        // "prefix",
        // "help",
        ],
        mongoUri: process.env.MONGO_URI,
        debug: true,
    })
        .setDefaultPrefix("*")
        .setColor(0x00d6e6);
});
client.login(process.env.BOT_TOKEN);
