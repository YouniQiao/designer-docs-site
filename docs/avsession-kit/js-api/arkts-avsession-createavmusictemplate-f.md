# createAVMusicTemplate

## Modules to Import

```TypeScript
import { avMusicTemplate } from '@ohos.multimedia.avMusicTemplate';
```

## createAVMusicTemplate

```TypeScript
function createAVMusicTemplate(accessType: AVMusicTemplateType): AVMusicTemplate
```

Create an AVMusicTemplate instance.

**Since:** 23

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.Multimedia.AVSession.AVMusicTemplate

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| accessType | AVMusicTemplateType | Yes | type of access, default is 'smartCar' |

**Return value:**

| Type | Description |
| --- | --- |
| AVMusicTemplate | an AVMusicTemplate instance |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported.function createAVMusicTemplatecan not work correctly due to limited device capabilities. |
| [35000001](../errorcode-avmusictemplate.md#35000001-audio-template-creation-failure) | Failed to create the AVMusicTemplate. |

