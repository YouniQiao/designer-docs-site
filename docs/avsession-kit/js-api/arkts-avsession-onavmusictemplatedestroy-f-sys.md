# onAVMusicTemplateDestroy (System API)

## Modules to Import

```TypeScript
import { avMusicTemplate } from '@ohos.multimedia.avMusicTemplate';
```

## onAVMusicTemplateDestroy

```TypeScript
function onAVMusicTemplateDestroy(callback: Callback<AVMusicTemplateDescriptor>): void
```

Register session destroy event

**Since:** 23

**Required permissions:** ohos.permission.MANAGE_MEDIA_RESOURCES

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.Multimedia.AVSession.AVMusicTemplate

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | Callback&lt;AVMusicTemplateDescriptor&gt; | Yes | Used to handle 'sessionDestroy' command |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission verify failed. |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Not System App. |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported.function onAVMusicTemplateDestroycan not work correctly due to limited device capabilities. |

