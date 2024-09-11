import {config} from 'dotenv';
import { SapphireClient } from '@sapphire/framework';
import { GatewayIntentBits } from 'discord.js';
import { configDotenv } from 'dotenv';

config();

const client = new SapphireClient({
  intents: [GatewayIntentBits.MessageContent, GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages],
  loadMessageCommandListeners: true
});

const TOKEN = process.env.TOKEN;
client.login(TOKEN);