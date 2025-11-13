# Microphone not available

If your microphone is "Not Available" in Plasmo Voice menu, try these solutions.

## macOS launcher permissions

The official Minecraft launcher on macOS has issues with microphone permissions.

You should switch to [Prism Launcher](https://prismlauncher.org/) or another launcher that supports microphone permissions.

## Allow microphone access

Make sure your OS allows Minecraft to access the microphone.

**macOS**

Open System Settings -> Privacy & Security -> Microphone. Enable microphone access for your launcher.

**Windows**

Open Settings -> Privacy & Security -> Microphone. Make sure "Microphone access" is enabled and desktop apps can use the microphone.

## Check microphone sample rate and bit depth

Some microphones may not work if they are configured to use 24-bit depth.

Try changing your microphone to use 16-bit depth and 48000 Hz.

## Update audio drivers

Make sure you're using the latest available audio drivers for your system.

## Close other apps

Other apps might be using your microphone. Close Discord, Zoom, OBS, or other voice chat apps.

## Try a different launcher

Sometimes switching to a different launcher can help. Try [Prism Launcher](https://prismlauncher.org/) or other third-party launchers.

## Still not working?

If none of this helped, your microphone may not be supported by the audio backend used in the mod.

You can ask for help in [Discord](https://discord.com/invite/uueEqzwCJJ). Make sure to provide info about your system:
- OS
- Audio interface/driver
- Client logs with debug enabled

To enable debug mode, open Mod Menu -> Plasmo Voice -> Config, or manually edit `<minecraft folder>/config/plasmovoice/client.toml` and set `debug = true`.

After enabling debug, join the game and upload your logs to [mclo.gs](https://mclo.gs).