# createAVMusicTemplateController (System API)

## Modules to Import

```TypeScript
import { avMusicTemplate } from '@ohos.multimedia.avMusicTemplate';
```

## createAVMusicTemplateController

```TypeScript
function createAVMusicTemplateController(sessionId: string): AVMusicTemplateController
```

Create AVMusicTemplate controller instance.

**Since:** 23

**Required permissions:** ohos.permission.MANAGE_MEDIA_RESOURCES

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.Multimedia.AVSession.AVMusicTemplate

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| sessionId | string | Yes | sessionId of the AVMusicTemplate instance |

**Return value:**

| Type | Description |
| --- | --- |
| AVMusicTemplateController | a controller instance |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission verify failed. |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Not System App. |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported.function createAVMusicTemplateControllercan not work correctly due to limited device capabilities. |
| [35000002](../errorcode-avmusictemplate.md#35000002-audio-template-controller-creation-failure) | Failed to create the AVMusicTemplate controller. |
| [35000005](../errorcode-avmusictemplate.md#35000005-audio-template-does-not-exist) | AVMusicTemplate does not exist. |

