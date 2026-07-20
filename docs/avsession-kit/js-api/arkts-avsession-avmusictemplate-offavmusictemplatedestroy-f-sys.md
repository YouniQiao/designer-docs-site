# offAVMusicTemplateDestroy (System API)

## Modules to Import

```TypeScript
import { avMusicTemplate } from '@kit.AVSessionKit';
```

## offAVMusicTemplateDestroy

```TypeScript
function offAVMusicTemplateDestroy(callback?: Callback<AVMusicTemplateDescriptor>): void
```

UnRegister session destroy event

**Since:** 23

**Required permissions:** ohos.permission.MANAGE_MEDIA_RESOURCES

**Model restriction:** This API can be used only in the stage model.

<!--Device-avMusicTemplate-function offAVMusicTemplateDestroy(callback?: Callback<AVMusicTemplateDescriptor>): void--><!--Device-avMusicTemplate-function offAVMusicTemplateDestroy(callback?: Callback<AVMusicTemplateDescriptor>): void-End-->

**System capability:** SystemCapability.Multimedia.AVSession.AVMusicTemplate

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | [Callback](../../apis-arkui/arkts-components/arkts-arkui-common-callback-i.md)<AVMusicTemplateDescriptor> | No | Used to handle 'sessionDestroy' command |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission verify failed. |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Not System App. |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported.function offAVMusicTemplateDestroy can not work correctly due to limited device capabilities. |

