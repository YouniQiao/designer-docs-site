# offAVMusicTemplateDestroy

## offAVMusicTemplateDestroy

```TypeScript
function offAVMusicTemplateDestroy(callback?: Callback<AVMusicTemplateDescriptor>): void
```

UnRegister session destroy event

**Since:** 23

**Required permissions:** 

 ohos.permission.MANAGE_MEDIA_RESOURCES

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Multimedia.AVSession.AVMusicTemplate

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | Callback&lt;AVMusicTemplateDescriptor> | No |  |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission verify failed. |
| 202 | Not System App. |
| 801 | Capability not supported.function offAVMusicTemplateDestroy  can not work correctly due to limited device capabilities. |

