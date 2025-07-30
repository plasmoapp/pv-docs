repositories {
    maven {
        name = 'plasmoverse-releases'
        url = 'https://repo.plasmoverse.com/releases'
    }
}

dependencies {
    compileOnly 'su.plo.voice.api:${api_module}:${version}'
}
