# createAVMusicTemplateController

## createAVMusicTemplateController

```TypeScript
function createAVMusicTemplateController(sessionId: string): AVMusicTemplateController
```

Create AVMusicTemplate controller instance.

**Since:** 23

**Required permissions:** 

 ohos.permission.MANAGE_MEDIA_RESOURCES

**Model restriction:** This API can be used only in the Stage model.

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
| 201 | Permission verify failed. |
| 202 | Not System App. |
| 801 | Capability not supported.function createAVMusicTemplateController  can not work correctly due to limited device capabilities. |
| 35000002 | Failed to create the AVMusicTemplate controller. |
| 35000005 | AVMusicTemplate does not exist. |

