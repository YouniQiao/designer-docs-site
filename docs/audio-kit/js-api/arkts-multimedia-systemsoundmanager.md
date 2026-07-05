# @ohos.multimedia.systemSoundManager

This module provides basic capabilities for managing system sound effects, including defining system sound effect types and obtaining system sound effect players.

**Since:** 10

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
| <!--DelRow-->[createCustomizedToneAttrs](arkts-systemsoundmanager-createcustomizedtoneattrs-f-sys.md#createCustomizedToneAttrs-1) | Create customized tone attributes. |
| [createSystemSoundPlayer](arkts-systemsoundmanager-createsystemsoundplayer-f.md#createSystemSoundPlayer-1) | Creates a SystemSoundPlayer instance. This function uses a promise to return the result. This player can be used to play some system sounds for media or camera actions. |
| <!--DelRow-->[getSystemSoundManager](arkts-systemsoundmanager-getsystemsoundmanager-f-sys.md#getSystemSoundManager-1) | Gets system sound manager for all type sound. |

### Interfaces

| Name | Description |
| --- | --- |
| <!--DelRow-->[SystemSoundManager](arkts-systemsoundmanager-systemsoundmanager-i-sys.md) | System sound manager object. |
| <!--DelRow-->[ToneAttrs](arkts-systemsoundmanager-toneattrs-i-sys.md) | Tone attributes. |
| <!--DelRow-->[ToneHapticsAttrs](arkts-systemsoundmanager-tonehapticsattrs-i-sys.md) | Haptics attributes in tone scenario. |
| <!--DelRow-->[ToneHapticsSettings](arkts-systemsoundmanager-tonehapticssettings-i-sys.md) | Haptics settings in tone scenario. |

### Types

| Name | Description |
| --- | --- |
| <!--DelRow-->[RingtoneOptions](arkts-systemsoundmanager-ringtoneoptions-t-sys.md) | Interface for ringtone options. |
| <!--DelRow-->[RingtonePlayer](arkts-systemsoundmanager-ringtoneplayer-t-sys.md) | Ringtone player object. |
| [SystemSoundPlayer](arkts-systemsoundmanager-systemsoundplayer-t.md) | Represents the system sound effect player object. |
| <!--DelRow-->[SystemToneOptions](arkts-systemsoundmanager-systemtoneoptions-t-sys.md) | System tone options. |
| <!--DelRow-->[SystemTonePlayer](arkts-systemsoundmanager-systemtoneplayer-t-sys.md) | SystemTone player object. |
| <!--DelRow-->[ToneAttrsArray](arkts-systemsoundmanager-toneattrsarray-t-sys.md) | Array of tone attributes. |
| <!--DelRow-->[ToneHapticsAttrsArray](arkts-systemsoundmanager-tonehapticsattrsarray-t-sys.md) | Type definition of tone haptics array. |

### Enums

| Name | Description |
| --- | --- |
| <!--DelRow-->[MediaType](arkts-systemsoundmanager-mediatype-e-sys.md) | Enum for media type. |
| <!--DelRow-->[RingtoneType](arkts-systemsoundmanager-ringtonetype-e-sys.md) | Enum for ringtone type. |
| <!--DelRow-->[SystemSoundError](arkts-systemsoundmanager-systemsounderror-e-sys.md) | Error enum for system sound. |
| [SystemSoundType](arkts-systemsoundmanager-systemsoundtype-e.md) | Enumerates the system sound effect types. |
| <!--DelRow-->[SystemToneType](arkts-systemsoundmanager-systemtonetype-e-sys.md) | Enum for system tone type. |
| <!--DelRow-->[ToneCustomizedType](arkts-systemsoundmanager-tonecustomizedtype-e-sys.md) | Enum for tone customized type. |
| <!--DelRow-->[ToneHapticsFeature](arkts-systemsoundmanager-tonehapticsfeature-e-sys.md) | Definition of haptics feature in tone scenario. |
| <!--DelRow-->[ToneHapticsMode](arkts-systemsoundmanager-tonehapticsmode-e-sys.md) | Enum for haptics mode in tone scenario. |
| <!--DelRow-->[ToneHapticsType](arkts-systemsoundmanager-tonehapticstype-e-sys.md) | Enum for haptics in tone scenario. |

### Constants

| Name | Description |
| --- | --- |
| <!--DelRow-->[TONE_CATEGORY_ALARM](arkts-systemsoundmanager-con-sys.md#TONE_CATEGORY_ALARM) | Define the alarm tone category. |
| <!--DelRow-->[TONE_CATEGORY_CONTACTS](arkts-systemsoundmanager-con-sys.md#TONE_CATEGORY_CONTACTS) | Define the contact tone category. |
| <!--DelRow-->[TONE_CATEGORY_CONTACTS](arkts-systemsoundmanager-con-sys.md#TONE_CATEGORY_CONTACTS) | Define the contact tone category. |
| <!--DelRow-->[TONE_CATEGORY_NOTIFICATION](arkts-systemsoundmanager-con-sys.md#TONE_CATEGORY_NOTIFICATION) | Define the notification tone category. |
| <!--DelRow-->[TONE_CATEGORY_NOTIFICATION_APP](arkts-systemsoundmanager-con-sys.md#TONE_CATEGORY_NOTIFICATION_APP) | Define the app notification tone category. |
| <!--DelRow-->[TONE_CATEGORY_RINGTONE](arkts-systemsoundmanager-con-sys.md#TONE_CATEGORY_RINGTONE) | Define the ringtone category. |
| <!--DelRow-->[TONE_CATEGORY_TEXT_MESSAGE](arkts-systemsoundmanager-con-sys.md#TONE_CATEGORY_TEXT_MESSAGE) | Define the text message tone category. |

