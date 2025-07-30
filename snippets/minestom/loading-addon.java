import su.plo.voice.spectator.SpectatorAddon;

// ... on server startup
voiceServer.onInitialize();
// ... after voice server initialization
PlasmoVoiceServer.getAddonsLoader().load(new SpectatorAddon());