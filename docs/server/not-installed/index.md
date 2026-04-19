# "Plasmo Voice is not installed on this server"

This message appears in the Plasmo Voice menu when the client and the server fail to detect each other. It is **not** related to your UDP port configuration — if ports were the issue, you would see a different error.

There are a few known reasons this happens.

## Version mismatch

The server runs Plasmo Voice 1.x.x while the client is on 2.x.x (or vice versa). The protocols are not compatible.

Make sure both the server and the client use the same major version. The latest version is available on [Modrinth](https://modrinth.com/mod/plasmo-voice).

## A mod is hiding the client's mod list

Some mods (for example, `rebrand`) hide the list of registered plugin channels from the server. A channel has to be registered on the receiving side before a packet can be sent on it, so if the server never sees the client register the Plasmo Voice channel, it cannot send the handshake packet.

Remove or disable any mod that hides your mod list / channel list from the server.

## Handshake packet never reaches the client

There is a rare, unreproducible bug where the server logs sending the player info request, but the packet never arrives at the client (see [#466](https://github.com/plasmoapp/plasmo-voice/issues/466)). The root cause is still unknown.

Since **Plasmo Voice 2.1.9**, the server automatically retries the player info request up to 5 times after a player joins, which should work around the issue in almost all cases.

If you are still hitting this on 2.1.9 or later, please open an issue on [GitHub](https://github.com/plasmoapp/plasmo-voice/issues). Include your server and client versions, full mod lists, and logs with debug enabled.

To enable debug on the client, open Mod Menu -> Plasmo Voice -> Config, or edit `<minecraft folder>/config/plasmovoice/client.toml` and set `debug = true`.

To enable debug on the server, edit `plugins/PlasmoVoice/config.toml` (or `config/plasmovoice/server.toml` on Fabric/Forge) and set `debug = true`.
