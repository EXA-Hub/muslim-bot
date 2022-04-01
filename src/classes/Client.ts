import DiscordJS from "discord.js";

class Client extends DiscordJS.Client {
    constructor(Options: any) {
        super(Options);
    }
}

export default Client;
