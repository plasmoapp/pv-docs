repositories {
    // note that there is a better way to specify modrinth maven repository
    // see "Advanced repository declaration" https://support.modrinth.com/en/articles/8801191-modrinth-maven
    maven {
        name = 'Modrinth'
        url = 'https://api.modrinth.com/maven'
    }
}

dependencies {
    implementation 'maven.modrinth:pv-addon-spectator:${version}'
}
