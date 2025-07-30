// ... on server startup
File voiceConfigDirectory = new File("plasmovoice");
MinestomVoiceServer voiceServer = new MinestomVoiceServer(voiceConfigDirectory);
voiceServer.onInitialize();

// ... on server shutdown
voiceServer.onShutdown();