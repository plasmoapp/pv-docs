---
outline: deep
---

# Minestom
Plasmo Voice supports Minestom thanks to [#394](https://github.com/plasmoapp/plasmo-voice/pull/394).

## Setting up dependency

![Version](https://img.shields.io/badge/dynamic/xml?color=186EF0&label=version&query=/metadata/versioning/versions/version[not(contains(text(),'%2B'))][last()]&url=https://repo.plasmoverse.com/releases/su/plo/voice/api/server/maven-metadata.xml)

::: code-group
<<< @/snippets/minestom/dependency.kts{kotlin} [Gradle Kotlin DSL]

<<< @/snippets/minestom/dependency.groovy [Gradle Groovy DSL]

<<< @/snippets/minestom/dependency.xml [Maven POM]
:::

## Initializing voice server
::: code-group
<<< @/snippets/minestom/initializing-voice-server.java [java]
<<< @/snippets/minestom/initializing-voice-server.kt{kotlin} [kotlin]
:::

That's it. Configuration file will be created in the specified directory.

Unfortunately, there is currently no way to control configuration programmatically to change some values in the code (e.g. port).

## Using addons
Most of the official addons are not available at our maven repository. But [Modrinth Maven](https://support.modrinth.com/en/articles/8801191-modrinth-maven) can be used instead.

[pv-addon-spectator](https://modrinth.com/plugin/pv-addon-spectator) will be used as an example on how to load an official addon published to modrinth.

### Setting up dependency
![Version](https://img.shields.io/badge/dynamic/xml?color=186EF0&label=version&query=/metadata/versioning/versions/version[not(contains(text(),'%2B'))][last()]&url=https://api.modrinth.com/maven/maven/modrinth/pv-addon-spectator/maven-metadata.xml)
::: code-group
<<< @/snippets/minestom/addon-dependency.kts{kotlin} [Gradle Kotlin DSL]

<<< @/snippets/minestom/addon-dependency.groovy [Gradle Groovy DSL]

<<< @/snippets/minestom/addon-dependency.xml [Maven POM]
:::

### Loading an addon
::: code-group
<<< @/snippets/minestom/loading-addon.java [java]
<<< @/snippets/minestom/loading-addon.kt{kotlin} [kotlin]
:::

And that's it. pv-addon-spectator is now loaded after Plasmo Voice initialization.