# onAVMusicTemplateCreate

## onAVMusicTemplateCreate

```TypeScript
function onAVMusicTemplateCreate(callback: Callback<AVMusicTemplateDescriptor>): void
```

Register session create event

**Since:** 23

**Required permissions:** 

 ohos.permission.MANAGE_MEDIA_RESOURCES

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Multimedia.AVSession.AVMusicTemplate

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | Callback&lt;AVMusicTemplateDescriptor> | Yes | Used to handle 'sessionCreate' command |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission verify failed. |
| 202 | Not System App. |
| 801 | Capability not supported.function onAVMusicTemplateCreate  can not work correctly due to limited device capabilities. |

