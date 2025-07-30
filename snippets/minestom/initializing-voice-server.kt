// ... on server startup
val voiceConfigDirectory = File("plasmovoice")
val voiceServer = MinestomVoiceServer(voiceConfigDirectory)
voiceServer.onInitialize()

// ... on server shutdown
voiceServer.onShutdown()