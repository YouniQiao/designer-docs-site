# AudioDeviceCallbackInfo (System API)

Indicates the information of the audio device.

**Since:** 10

<!--Device-call-export interface AudioDeviceCallbackInfo--><!--Device-call-export interface AudioDeviceCallbackInfo-End-->

**System capability:** SystemCapability.Telephony.CallManager

**System API:** This is a system API.

## Modules to Import

```TypeScript
import { call } from '@kit.TelephonyKit';
```

## audioDeviceList

```TypeScript
audioDeviceList: Array<AudioDevice>
```

Indicates the list of support audio device.

**Type:** Array<AudioDevice>

**Since:** 10

<!--Device-AudioDeviceCallbackInfo-audioDeviceList: Array<AudioDevice>--><!--Device-AudioDeviceCallbackInfo-audioDeviceList: Array<AudioDevice>-End-->

**System capability:** SystemCapability.Telephony.CallManager

**System API:** This is a system API.

## currentAudioDevice

```TypeScript
currentAudioDevice: AudioDevice
```

Indicates the type of current audio device.

**Type:** AudioDevice

**Since:** 10

<!--Device-AudioDeviceCallbackInfo-currentAudioDevice: AudioDevice--><!--Device-AudioDeviceCallbackInfo-currentAudioDevice: AudioDevice-End-->

**System capability:** SystemCapability.Telephony.CallManager

**System API:** This is a system API.

## isMicDisabled

```TypeScript
isMicDisabled?: boolean
```

Indicates the status of microphone disabled.

**Type:** boolean

**Since:** 24

<!--Device-AudioDeviceCallbackInfo-isMicDisabled?: boolean--><!--Device-AudioDeviceCallbackInfo-isMicDisabled?: boolean-End-->

**System capability:** SystemCapability.Telephony.CallManager

**System API:** This is a system API.

## isMuted

```TypeScript
isMuted: boolean
```

Indicates the status of mute.

**Type:** boolean

**Since:** 10

<!--Device-AudioDeviceCallbackInfo-isMuted: boolean--><!--Device-AudioDeviceCallbackInfo-isMuted: boolean-End-->

**System capability:** SystemCapability.Telephony.CallManager

**System API:** This is a system API.

