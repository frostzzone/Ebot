let Discord;
let Database;
if (typeof window !== "undefined") {
    Discord = DiscordJS;
    Database = EasyDatabase;
} else {
    Discord = require("discord.js");
    Database = require("easy-json-database");
}
const delay = (ms) => new Promise((resolve) => setTimeout(() => resolve(), ms));
const s4d = {
    Discord,
    client: null,
    tokenInvalid: false,
    reply: null,
    joiningMember: null,
    database: new Database("./db.json"),
    checkMessageExists() {
        if (!s4d.client) throw new Error('You cannot perform message operations without a Discord.js client')
        if (!s4d.client.readyTimestamp) throw new Error('You cannot perform message operations while the bot is not connected to the Discord API')
    }
};
s4d.client = new s4d.Discord.Client({
    fetchAllMembers: true
});
s4d.client.on('raw', async (packet) => {
    if (['MESSAGE_REACTION_ADD', 'MESSAGE_REACTION_REMOVE'].includes(packet.t)) {
        const guild = s4d.client.guilds.cache.get(packet.d.guild_id);
        if (!guild) return;
        const member = guild.members.cache.get(packet.d.user_id) || guild.members.fetch(d.user_id).catch(() => {});
        if (!member) return;
        const channel = s4d.client.channels.cache.get(packet.d.channel_id);
        if (!channel) return;
        const message = channel.messages.cache.get(packet.d.message_id) || await channel.messages.fetch(packet.d.message_id).catch(() => {});
        if (!message) return;
        s4d.client.emit(packet.t, guild, channel, message, member, packet.d.emoji.name);
    }
});
var Amount_of_code, online_time, arguments2, member_xp, command, member_level, counter, Prefix, sub_command, inspire_list, inspire_quote, quick_text_filler1, item_, quick_text_filler2, last_inspire_quote;

function listsGetRandomItem(list, remove) {
    var x = Math.floor(Math.random() * list.length);
    if (remove) {
        return list.splice(x, 1)[0];
    } else {
        return list[x];
    }
}

function colourRandom() {
    var num = Math.floor(Math.random() * Math.pow(2, 24));
    return '#' + ('00000' + num.toString(16)).substr(-6);
}


s4d.client.login('token').catch((e) => {
    s4d.tokenInvalid = true;
    s4d.tokenError = e;
});

s4d.client.on('ready', async () => {
    Amount_of_code = 0;
    online_time = 0;

    while (s4d.client && s4d.client.token) {
        await delay(50);
        counter = (typeof counter == 'number' ? counter : 0) + 1;
        if (counter / 60 >= 1) {
            if ((counter / 60) / 60 >= 1) {
                if (((counter / 60) / 60) / 24 >= 1) {
                    if (((counter / 60) / 60) / 24 == 1) {
                        online_time = String(((counter / 60) / 60) / 24) + ' day';
                    } else {
                        online_time = String(((counter / 60) / 60) / 24) + ' days';
                    }
                } else {
                    if ((counter / 60) / 60 == 1) {
                        online_time = String((counter / 60) / 60) + ' hour';
                    } else {
                        online_time = String((counter / 60) / 60) + ' hours';
                    }
                }
            } else {
                if (counter / 60 == 1) {
                    online_time = String(counter / 60) + ' minute';
                } else {
                    online_time = String(counter / 60) + ' minutes';
                }
            }
        } else {
            if (counter == 1) {
                online_time = String(counter) + ' second';
            } else {
                online_time = String(counter) + ' seconds';
            }
        }

        console.log('ran')
    }

});

s4d.client.on('ready', async () => {

    while (s4d.client && s4d.client.token) {
        await delay(50);
        s4d.client.user.setActivity(String('Ping for prefix'));
        await delay(Number(5) * 1000);
        s4d.client.user.setActivity(String('ehelp'));
        await delay(Number(5) * 1000);
        s4d.client.user.setActivity(String((['In "', s4d.client.guilds.cache.size, '" servers'].join(''))));
        await delay(Number(5) * 1000);
        s4d.client.user.setActivity(String((['Woah "', s4d.client.ws.ping, 'ms" ping'].join(''))));
        await delay(Number(5) * 1000);
        s4d.client.user.setActivity(String(('Online for ' + String(online_time))));
        await delay(Number(5) * 1000);

        console.log('ran')
    }

});

s4d.client.on('message', async (s4dmessage) => {
    if (!((s4dmessage.member).user.bot)) {
        arguments2 = (s4dmessage.content).split(' ');
        command = arguments2.splice(0, 1)[0];
        Prefix = s4d.database.get(String(('prefix-' + String((s4dmessage.guild || {}).id))));
        if (!Prefix) {
            Prefix = 'e';
        }
        s4d.database.set(String(('prefix-' + String((s4dmessage.guild || {}).id))), Prefix);
    }

});

s4d.client.on('message', async (s4dmessage) => {
    if (!((s4dmessage.member).user.bot)) {
        if (command == String(Prefix) + 'invite') {
            s4dmessage.channel.send(String('No...'));
        }
        if (command == String(Prefix) + 'code') {
            sub_command = arguments2.splice(0, 1)[0];
            if (sub_command == 'lines') {
                s4dmessage.channel.send(String((String(Amount_of_code) + ' lines of code to run me XD')));
            } else {
                s4dmessage.channel.send(String('No...'));
            }
        }
        if (command == String(Prefix) + 'inspire') {
            inspire_list = ['“The Best Way To Get Started Is To Quit Talking And Begin Doing.” – Walt Disney', '“The Pessimist Sees Difficulty In Every Opportunity. The Optimist Sees Opportunity In Every Difficulty.” – Winston Churchill', '“Don’t Let Yesterday Take Up Too Much Of Today.” – Will Rogers', '“You Learn More From Failure Than From Success. Don’t Let It Stop You. Failure Builds Character.” – Unknown', '“It’s Not Whether You Get Knocked Down, It’s Whether You Get Up.” – Vince Lombardi', '“If You Are Working On Something That You Really Care About, You Don’t Have To Be Pushed. The Vision Pulls You.” – Steve Jobs', '“People Who Are Crazy Enough To Think They Can Change The World, Are The Ones Who Do.” – Rob Siltanen', '“Failure Will Never Overtake Me If My Determination To Succeed Is Strong Enough.” – Og Mandino', '“We May Encounter Many Defeats But We Must Not Be Defeated.” – Maya Angelou', '“Knowing Is Not Enough; We Must Apply. Wishing Is Not Enough; We Must Do.” – Johann Wolfgang Von Goethe', '“Imagine Your Life Is Perfect In Every Respect; What Would It Look Like?” – Brian Tracy', '“We Generate Fears While We Sit. We Overcome Them By Action.” – Dr. Henry Link', '“Whether You Think You Can Or Think You Can’t, You’re Right.” – Henry Ford', '“Security Is Mostly A Superstition. Life Is Either A Daring Adventure Or Nothing.” – Helen Keller', '“The Only Limit To Our Realization Of Tomorrow Will Be Our Doubts Of Today.” – Franklin D. Roosevelt', ' “Creativity Is Intelligence Having Fun.” – Albert Einstein', '“What You Lack In Talent Can Be Made Up With Desire, Hustle And Giving 110% All The Time.” – Don Zimmer', '“Do What You Can With All You Have, Wherever You Are.” – Theodore Roosevelt', '“Develop An ‘Attitude Of Gratitude’. Say Thank You To Everyone You Meet For Everything They Do For You.” – Encouraging Quote By Brian Tracy', '“You Are Never Too Old To Set Another Goal Or To Dream A New Dream.” – C.S. Lewis'];
            inspire_quote = listsGetRandomItem(inspire_list, false);
            s4dmessage.channel.send({
                embed: {
                    title: null,
                    color: (colourRandom()),
                    image: {
                        url: null
                    },
                    description: ([inspire_quote, '\n', inspire_list.indexOf(inspire_quote) + 1, '/', inspire_list.length].join(''))
                }
            });
        }
        if (command == String(Prefix) + 'linspire') {
            inspire_list = ['“The Best Way To Get Started Is To Quit Talking And Begin Doing.” – Walt Disney', '“The Pessimist Sees Difficulty In Every Opportunity. The Optimist Sees Opportunity In Every Difficulty.” – Winston Churchill', '“Don’t Let Yesterday Take Up Too Much Of Today.” – Will Rogers', '“You Learn More From Failure Than From Success. Don’t Let It Stop You. Failure Builds Character.” – Unknown', '“It’s Not Whether You Get Knocked Down, It’s Whether You Get Up.” – Vince Lombardi', '“If You Are Working On Something That You Really Care About, You Don’t Have To Be Pushed. The Vision Pulls You.” – Steve Jobs', '“People Who Are Crazy Enough To Think They Can Change The World, Are The Ones Who Do.” – Rob Siltanen', '“Failure Will Never Overtake Me If My Determination To Succeed Is Strong Enough.” – Og Mandino', '“We May Encounter Many Defeats But We Must Not Be Defeated.” – Maya Angelou', '“Knowing Is Not Enough; We Must Apply. Wishing Is Not Enough; We Must Do.” – Johann Wolfgang Von Goethe', '“Imagine Your Life Is Perfect In Every Respect; What Would It Look Like?” – Brian Tracy', '“We Generate Fears While We Sit. We Overcome Them By Action.” – Dr. Henry Link', '“Whether You Think You Can Or Think You Can’t, You’re Right.” – Henry Ford', '“Security Is Mostly A Superstition. Life Is Either A Daring Adventure Or Nothing.” – Helen Keller', '“The Only Limit To Our Realization Of Tomorrow Will Be Our Doubts Of Today.” – Franklin D. Roosevelt', ' “Creativity Is Intelligence Having Fun.” – Albert Einstein', '“What You Lack In Talent Can Be Made Up With Desire, Hustle And Giving 110% All The Time.” – Don Zimmer', '“Do What You Can With All You Have, Wherever You Are.” – Theodore Roosevelt', '“Develop An ‘Attitude Of Gratitude’. Say Thank You To Everyone You Meet For Everything They Do For You.” – Encouraging Quote By Brian Tracy', '“You Are Never Too Old To Set Another Goal Or To Dream A New Dream.” – C.S. Lewis'];
            item_ = 0;
            last_inspire_quote = '';
            for (var count2 = 0; count2 < 1; count2++) {
                var repeat_end = inspire_list.length / 1;
                for (var count = 0; count < repeat_end; count++) {
                    item_ = (typeof item_ == 'number' ? item_ : 0) + 1;
                    inspire_quote = [last_inspire_quote, '\n', [inspire_list[(item_ - 1)], '\n', inspire_list.indexOf(inspire_list[(item_ - 1)]) + 1, '/', inspire_list.length, '\n'].join('')].join('');
                    last_inspire_quote = inspire_quote;
                }
                s4dmessage.channel.send({
                    embed: {
                        title: null,
                        color: (colourRandom()),
                        image: {
                            url: null
                        },
                        description: last_inspire_quote
                    }
                });
            }
        }
    }

});

s4d.client.on('message', async (s4dmessage) => {
    if (!((s4dmessage.member).user.bot)) {
        if ((s4dmessage.content) == 'nO u' || (s4dmessage.content) == 'No U' || (s4dmessage.content) == 'nO U' || (s4dmessage.content) == 'NO U' || (s4dmessage.content) == 'No u' || (s4dmessage.content) == 'no U' || (s4dmessage.content) == 'no u') {
            s4dmessage.channel.send(String((s4dmessage.content)));
        }
        if ((s4dmessage.content) == 'XD') {
            s4dmessage.react('😆');
        }
        if ((s4dmessage.content) == String(Prefix) + 'no') {
            s4dmessage.channel.send(String('<:xm:796849533933322241>'));
        }
        if (command == String(Prefix) + 'em') {
            s4dmessage.delete();
            s4dmessage.channel.send({
                embed: {
                    title: null,
                    color: (colourRandom()),
                    image: {
                        url: null
                    },
                    description: (arguments2.join(' '))
                }
            });
        }
        if ((s4dmessage.content) == String(Prefix) + 'check') {
            s4dmessage.channel.send(String('<:gc:796862581763473409>'));
        }
        if ((s4dmessage.content) == String(Prefix) + 'tacog') {
            s4dmessage.channel.send(String('<:tacog:797234900578074674>'));
        }
        if ((s4dmessage.content) == String(Prefix) + 'fz') {
            s4dmessage.channel.send(String('<:fz:779117205035810816>'));
        }
        if (command == String(Prefix) + 'prefx') {
            if ((s4dmessage.member).hasPermission('ADMINISTRATOR')) {
                s4d.database.set(String(('prefix-' + String((s4dmessage.guild || {}).id))), (arguments2.join(' ')));
                s4dmessage.channel.send(String((['Set server prefix to [ **', arguments2.join(' '), '** ]'].join(''))));
            } else {
                s4dmessage.channel.send({
                    embed: {
                        title: '**FALURE**',
                        color: '#ff0000',
                        image: {
                            url: null
                        },
                        description: 'You don\'t have admin permisions'
                    }
                });
            }
        }
    }

});

s4d.client.on('message', async (s4dmessage) => {
    if (!((s4dmessage.member).user.bot)) {
        member_xp = s4d.database.get(String(('xp-' + String(s4dmessage.author.id))));
        member_level = s4d.database.get(String(('level-' + String(s4dmessage.author.id))));
        Prefix = s4d.database.get(String(('prefix-' + String((s4dmessage.guild || {}).id))));
        if (!member_xp) {
            member_xp = 0;
        } else if (!member_level) {
            member_level = 1;
        }
        s4d.database.set(String(('xp-' + String(s4dmessage.author.id))), (member_xp + 1));
        member_xp = member_xp + 1;
        if (member_xp > 100 + 50 * member_level) {
            s4d.database.set(String(('xp-' + String(s4dmessage.author.id))), 0);
            s4d.database.set(String(('level-' + String(s4dmessage.author.id))), (member_level + 1));
            member_level = member_level + 1;
            s4dmessage.channel.send(String((['Congratulations, ', s4dmessage.member, ' you jumped to level ', member_level, '!!'].join(''))));
        }
        if (command == String(Prefix) + 'reset') {
            (s4dmessage.channel).send({
                embed: {
                    title: '**Confirmation**',
                    color: '#ff0000',
                    image: {
                        url: null
                    },
                    description: (['Are you sure O-O', '\n', '__**Respond with a "y" or "n"**__', '\n', '*You have 1 minute to awnser*'].join(''))
                }
            });
            (s4dmessage.channel).awaitMessages((m) => m.author.id === (s4dmessage.member).id, {
                time: (1 * 60 * 1000),
                max: 1
            }).then(async (collected) => {
                s4d.reply = collected.first().content;
                arguments2 = (s4d.reply).split(' ');
                command = arguments2.splice(0, 1)[0];
                if (command.toLowerCase() == 'y') {
                    s4d.database.set(String(('xp-' + String(s4dmessage.author.id))), 0);
                    s4d.database.set(String(('level-' + String(s4dmessage.author.id))), 0);
                    s4dmessage.channel.send({
                        embed: {
                            title: '**Reset**',
                            color: '#33cc00',
                            image: {
                                url: null
                            },
                            description: 'Xp and levels reset'
                        }
                    });
                } else if (command.toLowerCase() == 'n') {
                    s4dmessage.channel.send({
                        embed: {
                            title: '**Canceled**',
                            color: '#33cc00',
                            image: {
                                url: null
                            },
                            description: 'Reset Canceled'
                        }
                    });
                } else {
                    s4dmessage.channel.send({
                        embed: {
                            title: '**Canceled**',
                            color: '#cc0000',
                            image: {
                                url: null
                            },
                            description: 'Unkown Response'
                        }
                    });
                }

                s4d.reply = null;
            }).catch(async (e) => {
                console.error(e);
                s4dmessage.channel.send({
                    embed: {
                        title: '**Canceled**',
                        color: '#cc0000',
                        image: {
                            url: null
                        },
                        description: 'No Resopnse'
                    }
                });
            });
        }
        if (command == String(Prefix) + 'level') {
            s4dmessage.channel.send({
                embed: {
                    title: null,
                    color: (colourRandom()),
                    image: {
                        url: null
                    },
                    description: ([s4dmessage.member, ', you are currently level: ', member_level].join(''))
                }
            });
        }
        if (command == String(Prefix) + 'slevel') {
            member_level = s4d.database.get(String(('level-' + String((s4dmessage.mentions.members.first()).user.id))));
            s4dmessage.channel.send({
                embed: {
                    title: null,
                    color: (colourRandom()),
                    image: {
                        url: null
                    },
                    description: ([s4dmessage.mentions.members.first(), ', is currently on level: ', member_level].join(''))
                }
            });
        }
        if (command == String(Prefix) + 'xp') {
            s4dmessage.channel.send({
                embed: {
                    title: null,
                    color: (colourRandom()),
                    image: {
                        url: null
                    },
                    description: ([s4dmessage.member, ', you need ', (100 + 50 * member_level) - member_xp, ' xp to jump to level ', member_level + 1].join(''))
                }
            });
        }
        if (command == String(Prefix) + 'sxp') {
            member_xp = s4d.database.get(String(('xp-' + String((s4dmessage.mentions.members.first()).user.id))));
            member_level = s4d.database.get(String(('level-' + String((s4dmessage.mentions.members.first()).user.id))));
            s4dmessage.channel.send({
                embed: {
                    title: null,
                    color: (colourRandom()),
                    image: {
                        url: null
                    },
                    description: ([s4dmessage.mentions.members.first(), ', needs ', (100 + 50 * member_level) - member_xp, ' xp to jump to level ', member_level + 1].join(''))
                }
            });
        }
    }

});

s4d.client.on('message', async (s4dmessage) => {
    if (!((s4dmessage.member).user.bot)) {
        if (command == String(Prefix) + 'm') {
            s4dmessage.delete();
            s4dmessage.channel.send(String((arguments2.join(' '))));
        }
        if (command == String(Prefix) + 'info') {
            if (!((s4dmessage.mentions.members.first()) == null)) {
                if ((s4dmessage.member).hasPermission('ADMINISTRATOR')) {
                    quick_text_filler1 = 'yes';
                } else {
                    quick_text_filler1 = 'no';
                }
                if ((s4dmessage.mentions.members.first()).user.bot) {
                    quick_text_filler2 = 'yes';
                } else {
                    quick_text_filler2 = 'no';
                }
                member_xp = s4d.database.get(String(('xp-' + String((s4dmessage.mentions.members.first()).user.id))));
                member_level = s4d.database.get(String(('level-' + String((s4dmessage.mentions.members.first()).user.id))));
                s4dmessage.channel.send({
                    embed: {
                        title: (String((s4dmessage.mentions.members.first()).user.username) + '\'s info'),
                        color: '#339999',
                        image: {
                            url: null
                        },
                        description: (['ID:', (s4dmessage.mentions.members.first()).user.id, '\n', 'Username:', (s4dmessage.mentions.members.first()).user.username, '\n', 'Discriminator: ', (s4dmessage.mentions.members.first()).user.discriminator, '\n', 'Has admin permissions: ', quick_text_filler1, '\n', 'Level: ', member_level, '\n', 'Amount of xp to next level: ', member_xp, '/', 100 + 50 * member_level, '\n', 'Is a bot?:', quick_text_filler2].join(''))
                    }
                });
            } else {
                if ((s4dmessage.member).hasPermission('ADMINISTRATOR')) {
                    quick_text_filler1 = 'yes';
                } else {
                    quick_text_filler1 = 'no';
                }
                s4dmessage.channel.send({
                    embed: {
                        title: (String((s4dmessage.member).user.username) + '\'s info'),
                        color: '#339999',
                        image: {
                            url: null
                        },
                        description: (['ID:', s4dmessage.author.id, '\n', 'Username:', s4dmessage.author.username, '\n', 'Discriminator: ', (s4dmessage.member).user.discriminator, '\n', 'Has admin permissions: ', quick_text_filler1, '\n', 'Level: ', member_level, '\n', 'Amount of xp to next level: ', member_xp, '/', 100 + 50 * member_level].join(''))
                    }
                });
            }
        }
        if (command == String(Prefix) + 'help') {
            s4dmessage.channel.send({
                embed: {
                    title: 'Help',
                    color: (colourRandom()),
                    image: {
                        url: null
                    },
                    description: ([String(Prefix) + 'help xp', '\n', String(Prefix) + 'xp - Shows your XP', '\n', String(Prefix) + 'level - Shows your LV', '\n', String(Prefix) + 'reset - resets your XP and LV', '\n', String(Prefix) + 'm <message> - Mimics what you said after the command', '\n', String(Prefix) + 'info [@member] - shows user info', '\n', 'no u, No u, nO u, no U, NO u, No U, NO U - replies with the message', '\n', 'XD - reacts with 😆', '\n', String(Prefix) + 'sxp <@user> - Shows a users xp', '\n', String(Prefix) + 'slevel <@user> - Shows a users level', '\n', String(Prefix) + 'prefx <new prefix> - Sets the prefix (Need to have administrator permissions)', '\n', '<@725027934875811962> - Says the server prefix', '\n', String(Prefix) + 'em <message> -  Mimics what you said after the command but puts it in an embed', '', '\n', '\n', 'parts in <> are required, parts in [] are optional'].join(''))
                }
            });
        }
    }

});

s4d.client.on('message', async (s4dmessage) => {
    if (!((s4dmessage.member).user.bot)) {
        if (command == String(Prefix) + 'create') {
            if ((s4dmessage.member).hasPermission('MANAGE_CHANNELS')) {
                (s4dmessage.channel).send({
                    embed: {
                        title: null,
                        color: null,
                        image: {
                            url: null
                        },
                        description: (['what should the name of the channel be?', '\n', '_type cancel to end command_'].join(''))
                    }
                });
                (s4dmessage.channel).awaitMessages((m) => m.author.id === (s4dmessage.member).id, {
                    time: (1 * 60 * 1000),
                    max: 1
                }).then(async (collected) => {
                    s4d.reply = collected.first().content;
                    if ((s4d.reply) == String(Prefix) + 'create') {
                        s4dmessage.channel.send({
                            embed: {
                                title: '**@-@**',
                                color: '#ff0000',
                                image: {
                                    url: null
                                },
                                description: 'Dont try and confuse me <a:spin:840349781809430549>'
                            }
                        });
                    } else if ((s4d.reply) == 'cancel') {
                        s4dmessage.channel.send({
                            embed: {
                                title: '**Canceled**',
                                color: '#33cc00',
                                image: {
                                    url: null
                                },
                                description: 'Command canceled <:command:840352294683279430>'
                            }
                        });
                    } else {
                        quick_text_filler1 = (s4d.reply).split(' ');
                        quick_text_filler2 = quick_text_filler1.join('-');
                        (s4dmessage.guild).channels.create((s4d.reply), {
                            type: 'text'
                        });
                        s4dmessage.channel.send({
                            embed: {
                                title: '**:D**',
                                color: '#33cc00',
                                image: {
                                    url: null
                                },
                                description: (['Channel named **', quick_text_filler2.toLowerCase(), '** created'].join(''))
                            }
                        });
                    }

                    s4d.reply = null;
                }).catch(async (e) => {
                    console.error(e);
                    s4dmessage.channel.send({
                        embed: {
                            title: '**Canceled**',
                            color: '#cc0000',
                            image: {
                                url: null
                            },
                            description: 'Canceled because no response'
                        }
                    });
                });
            } else {
                s4dmessage.channel.send({
                    embed: {
                        title: '**Not enough permsissons**',
                        color: '#cc0000',
                        image: {
                            url: null
                        },
                        description: 'You dont have the permission **manage chanenls**'
                    }
                });
            }
        }
        if (Prefix == String(Prefix) + 'uptime') {
            s4dmessage.channel.send({
                embed: {
                    title: '**Uptime**',
                    color: null,
                    image: {
                        url: null
                    },
                    description: ('Ive been up for ' + String(online_time))
                }
            });
        }
    }

});

s4d.client.on('message', async (s4dmessage) => {
    if (!((s4dmessage.member).user.bot)) {
        if (((s4dmessage.mentions.members.first()).user.id) == '725027934875811962') {
            s4dmessage.channel.send({
                embed: {
                    title: null,
                    color: (colourRandom()),
                    image: {
                        url: null
                    },
                    description: (['Hello ', s4dmessage.member, ', My prefix in this server is "', Prefix, '"'].join(''))
                }
            });
        }
    }

});

s4d;
