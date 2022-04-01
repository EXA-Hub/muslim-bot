import { ICommand } from 'wokcommands'

export default {
    category: 'بـسـائـط',
    description: 'يرد السلام',
    slash: 'both',
    testOnly: false,
    callback: ({ instance, guild }) => {
        const reply = instance.messageHandler.get(guild, 'رد السلام')

        return reply
    },
} as ICommand