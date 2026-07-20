# AudioDeviceEnhanceManager

Provides enhanced audio device management capabilities.

**Since:** 26.0.0

<!--Device-audio-interface AudioDeviceEnhanceManager--><!--Device-audio-interface AudioDeviceEnhanceManager-End-->

**System capability:** SystemCapability.Multimedia.Audio.DeviceEnhance

## Modules to Import

```TypeScript
import { audio } from '@kit.AudioKit';
```

## getSoundCardInfo

```TypeScript
getSoundCardInfo(): Promise<SoundCardInfo>
```

Obtains the sound card information. This method uses a Promise to return the query result.

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

<!--Device-AudioDeviceEnhanceManager-getSoundCardInfo(): Promise<SoundCardInfo>--><!--Device-AudioDeviceEnhanceManager-getSoundCardInfo(): Promise<SoundCardInfo>-End-->

**System capability:** SystemCapability.Multimedia.Audio.DeviceEnhance

**System API:** This is a system API.

**Return value:**

| Type | Description |
| --- | --- |
| [Promise](../../apis-na/arkts-apis/arkts-na-lib-es5-promise-i.md)<SoundCardInfo> | Promise used to return the sound card information. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Not system App. |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported.Failed to call the API due to limited device capabilities. |

