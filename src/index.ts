import env from "dotenv";
env.config();

import WOKCommands from "wokcommands";
import { Intents } from "discord.js";
import path from "path";

import Client from "./classes/Client";

const client = new Client({
    intents: [
        Intents.FLAGS.GUILDS,
        Intents.FLAGS.GUILD_MESSAGES,
        Intents.FLAGS.GUILD_MESSAGE_REACTIONS,
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
    new WOKCommands(client, {
        commandsDir: path.join(__dirname, "commands"),
        featuresDir: path.join(__dirname, "events"),
        messagesPath: path.join(__dirname, "languages.json"),
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
