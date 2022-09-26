import { Client as DJSClient, GatewayIntentBits } from 'discord.js';

export interface ClientOptions {
  /**
   * Your Discord bot token
   * @see https://discord.com/developers/applications
   */
  token: string;
  channelID: string;
}

export class Client {
  private dJSClient: DJSClient;

  constructor(private options: ClientOptions) {
    this.dJSClient = new DJSClient({
      intents: [GatewayIntentBits.MessageContent, GatewayIntentBits.Guilds],
    });

    this.dJSClient.login(options.token);
  }
}
