# @ohos.multimedia.systemSoundManager

This module provides basic capabilities for managing system sound effects, including defining system sound effect
types and obtaining system sound effect players.

**Since:** 23

**System capability:** SystemCapability.Multimedia.SystemSound.Core

**System API:** This is a system API.

## Modules to Import

```TypeScript
import { systemSoundManager } from '@kit.AudioKit';
```

## Summary

### Functions

| Name | Description |
| --- | --- |
| [createSystemSoundPlayer](arkts-audio-createsystemsoundplayer-f.md#createsystemsoundplayer-1) | Creates a SystemSoundPlayer instance. This function uses a promise to return the result.This player can be used to play some system sounds for media or camera actions. |

<!--Del-->
### Functions（系统接口）

| Name | Description |
| --- | --- |
| [createCustomizedToneAttrs](arkts-audio-createcustomizedtoneattrs-f-sys.md#createcustomizedtoneattrs-1) | Create customized tone attributes. |
| [getSystemSoundManager](arkts-audio-getsystemsoundmanager-f-sys.md#getsystemsoundmanager-1) | Gets system sound manager for all type sound. |
<!--DelEnd-->

<!--Del-->
### Interfaces（系统接口）

| Name | Description |
| --- | --- |
| [SystemSoundManager](arkts-audio-systemsoundmanager-i-sys.md) | System sound manager object. |
| [ToneAttrs](arkts-audio-toneattrs-i-sys.md) | Tone attributes. |
| [ToneHapticsAttrs](arkts-audio-tonehapticsattrs-i-sys.md) | Haptics attributes in tone scenario. |
| [ToneHapticsSettings](arkts-audio-tonehapticssettings-i-sys.md) | Haptics settings in tone scenario. |
<!--DelEnd-->

<!--Del-->
### Enums（系统接口）

| Name | Description |
| --- | --- |
| [MediaType](arkts-audio-mediatype-e-sys.md) | Enum for media type. |
| [RingtoneType](arkts-audio-ringtonetype-e-sys.md) | Enum for ringtone type. |
| [SystemSoundError](arkts-audio-systemsounderror-e-sys.md) | Error enum for system sound. |
| [SystemSoundType](arkts-audio-systemsoundtype-e.md) | Enumerates the system sound effect types. |
| [SystemToneType](arkts-audio-systemtonetype-e-sys.md) | Enum for system tone type. |
| [ToneCustomizedType](arkts-audio-tonecustomizedtype-e-sys.md) | Enum for tone customized type. |
| [ToneHapticsFeature](arkts-audio-tonehapticsfeature-e-sys.md) | Definition of haptics feature in tone scenario. |
| [ToneHapticsMode](arkts-audio-tonehapticsmode-e-sys.md) | Enum for haptics mode in tone scenario. |
| [ToneHapticsType](arkts-audio-tonehapticstype-e-sys.md) | Enum for haptics in tone scenario. |
<!--DelEnd-->

<!--Del-->
### Types（系统接口）

| Name | Description |
| --- | --- |
| [RingtoneOptions](arkts-audio-ringtoneoptions-t-sys.md) | Interface for ringtone options. |
| [RingtonePlayer](arkts-audio-ringtoneplayer-t-sys.md) | Ringtone player object. |
| [SystemSoundPlayer](arkts-audio-systemsoundplayer-t.md) | Represents the system sound effect player object. |
| [SystemToneOptions](arkts-audio-systemtoneoptions-t-sys.md) | System tone options. |
| [SystemTonePlayer](arkts-audio-systemtoneplayer-t-sys.md) | SystemTone player object. |
| [ToneAttrsArray](arkts-audio-toneattrsarray-t-sys.md) | Array of tone attributes. |
| [ToneHapticsAttrsArray](arkts-audio-tonehapticsattrsarray-t-sys.md) | Type definition of tone haptics array. |
<!--DelEnd-->

<!--Del-->
### Constants（系统接口）

| Name | Description |
| --- | --- |
| [TONE_CATEGORY_ALARM](arkts-audio-systemsoundmanager-con-sys.md#tone_category_alarm) | Define the alarm tone category. |
| [TONE_CATEGORY_CONTACTS](arkts-audio-systemsoundmanager-con-sys.md#tone_category_contacts) | Define the contact tone category. |
| [TONE_CATEGORY_NOTIFICATION](arkts-audio-systemsoundmanager-con-sys.md#tone_category_notification) | Define the notification tone category. |
| [TONE_CATEGORY_NOTIFICATION_APP](arkts-audio-systemsoundmanager-con-sys.md#tone_category_notification_app) | Define the app notification tone category. |
| [TONE_CATEGORY_RINGTONE](arkts-audio-systemsoundmanager-con-sys.md#tone_category_ringtone) | Define the ringtone category. |
| [TONE_CATEGORY_TEXT_MESSAGE](arkts-audio-systemsoundmanager-con-sys.md#tone_category_text_message) | Define the text message tone category. |
<!--DelEnd-->

