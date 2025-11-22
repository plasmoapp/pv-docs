# Commands & Permissions

List of all the commands & permissions.

Command and aliases | Description                                         | Permission                | Default
------------ |-----------------------------------------------------|---------------------------| ------------- 
`/vmute <player> [duration] [reason]` | Mute player on the server                           | `pv.mute`                 | op
`/vunmute <player>` | Unmute player on the server                         | `pv.unmute`               | op
`/vreload` | Reload the plugin                                   | `pv.reload`               | op
`/vreconnect` | Reconnect the client                                | `pv.reconnect`            | true
`/vlist` | Show the list of players with the mod installed     | `pv.list`                 | true
`none` | Allows player to use the default proximity voice chat | `pv.activation.proximity` | true
`none` | Allows player to hear from the camera position. With `false` player will hear audio from the player position. | `pv.allow_freecam` | true

::: tip

You can set `pv.activation.*` to `false` to prevent players from talking completely. 
