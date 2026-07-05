# sound

Provides methods for setting the sound effect, including the ringtone, dial tone, alarm sound, notification tone, and haptic feedback.

**Since:** 7

**System capability:** SystemCapability.Applications.Settings.Core

## Modules to Import

```TypeScript
import { settings } from '@kit.BasicServicesKit';
```

## Summary

### Constants

| Name | Description |
| --- | --- |
| [AFFECTED_MODE_RINGER_STREAMS](arkts-sound-con.md#AFFECTED_MODE_RINGER_STREAMS) | Specifies which audio streams are affected by changes on the ringing mode and Do Not Disturb (DND) mode. <p>If you want a specific audio stream to be affected by changes of the ringing mode and DDN mode, set the corresponding bit to {@code 1}. |
| [AFFECTED_MUTE_STREAMS](arkts-sound-con.md#AFFECTED_MUTE_STREAMS) | Specifies which audio streams are affected by the mute mode. <p>If you want a specific audio stream to remain muted in mute mode, set the corresponding bit to {@code 1}. |
| [DEFAULT_ALARM_ALERT](arkts-sound-con.md#DEFAULT_ALARM_ALERT) | Indicates the storage area of the system default alarm. <p>You can obtain the URI of the system default alarm. |
| [DEFAULT_NOTIFICATION_SOUND](arkts-sound-con.md#DEFAULT_NOTIFICATION_SOUND) | Indicates the storage area of the system default notification tone. <p>You can obtain the URI of the system default notification tone. |
| [DEFAULT_RINGTONE](arkts-sound-con.md#DEFAULT_RINGTONE) | Indicates the storage area of the system default ringtone. <p>You can obtain the URI of the system default ringtone. |
| [DTMF_TONE_TYPE_WHILE_DIALING](arkts-sound-con.md#DTMF_TONE_TYPE_WHILE_DIALING) | Indicates the type of the dual-tone multifrequency (DTMF) tone played when dialing. <p>The value {@code 0} indicates the normal short sound effect, and {@code 1} indicates the long sound effect. |
| [DTMF_TONE_WHILE_DIALING](arkts-sound-con.md#DTMF_TONE_WHILE_DIALING) | Specifies whether the DTMF tone is played when dialing. <p>If the value is {@code 1}, the DTMF tone is played. If the value is {@code 0}, the DTMF tone is not played. |
| [HAPTIC_FEEDBACK_STATUS](arkts-sound-con.md#HAPTIC_FEEDBACK_STATUS) | Indicates whether the device enables haptic feedback. <p>The value is of the boolean type. |
| [SOUND_EFFECTS_STATUS](arkts-sound-con.md#SOUND_EFFECTS_STATUS) | Specifies whether the sound effects are enabled. <p>If the value is {@code 0}, the sound effects are disabled. If the value is {@code 1}, the sound effects are enabled. |
| [VIBRATE_STATUS](arkts-sound-con.md#VIBRATE_STATUS) | Specifies whether the device vibrates for an event. This parameter is used inside the system. <p>If the value is {@code 1}, the device vibrates for an event. If the value is {@code 0}, the device does not vibrate for an event. |
| [VIBRATE_WHILE_RINGING](arkts-sound-con.md#VIBRATE_WHILE_RINGING) | Indicates whether the device vibrates when it is ringing for an incoming call. <p>This constant will be used by Phone and Settings applications. The value is of the boolean type. This constant affects only the scenario where the device rings for an incoming call. It does not affect any other application or scenario. |

