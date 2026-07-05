# createAVMusicTemplate

## createAVMusicTemplate

```TypeScript
function createAVMusicTemplate(accessType: AVMusicTemplateType): AVMusicTemplate
```

Create an AVMusicTemplate instance.

**Since:** 23

**Model restriction:** This API can be used only in the Stage model.

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
| 801 | Capability not supported.function createAVMusicTemplate  can not work correctly due to limited device capabilities. |
| 35000001 | Failed to create the AVMusicTemplate. |

