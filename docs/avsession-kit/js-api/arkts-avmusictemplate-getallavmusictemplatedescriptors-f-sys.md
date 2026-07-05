# getAllAVMusicTemplateDescriptors

## getAllAVMusicTemplateDescriptors

```TypeScript
function getAllAVMusicTemplateDescriptors(userId?: int): AVMusicTemplateDescriptor[]
```

Get all AVMusicTemplate descriptors.

**Since:** 23

**Required permissions:** 

 ohos.permission.MANAGE_MEDIA_RESOURCES

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Multimedia.AVSession.AVMusicTemplate

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| userId | int | No |  |

**Return value:**

| Type | Description |
| --- | --- |
| AVMusicTemplateDescriptor[] | an AVMusicTemplate descriptor array |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission verify failed. |
| 202 | Not System App. |
| 801 | Capability not supported.function getAllAVMusicTemplateDescriptors  can not work correctly due to limited device capabilities. |

