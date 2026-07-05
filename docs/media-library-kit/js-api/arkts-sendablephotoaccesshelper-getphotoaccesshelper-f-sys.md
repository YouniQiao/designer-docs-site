# getPhotoAccessHelper

## getPhotoAccessHelper

```TypeScript
function getPhotoAccessHelper(context: Context, userId: number): PhotoAccessHelper
```

Returns an instance of PhotoAccessHelper

**Since:** 19

**Required permissions:** 

 ohos.permission.INTERACT_ACROSS_LOCAL_ACCOUNTS

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| context | Context | Yes | Hap context information |
| userId | number | Yes | Target userId |

**Return value:**

| Type | Description |
| --- | --- |
| PhotoAccessHelper | Instance of PhotoAccessHelper |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied |
| 202 | Called by non-system application |
| 13900020 | Invalid argument |

