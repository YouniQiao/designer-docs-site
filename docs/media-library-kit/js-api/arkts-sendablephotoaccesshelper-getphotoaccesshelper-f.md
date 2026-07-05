# getPhotoAccessHelper

## getPhotoAccessHelper

```TypeScript
function getPhotoAccessHelper(context: Context): PhotoAccessHelper
```

Returns an instance of PhotoAccessHelper

**Since:** 12

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| context | Context | Yes | Hap context information |

**Return value:**

| Type | Description |
| --- | --- |
| PhotoAccessHelper | Instance of PhotoAccessHelper |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types; 3. Parameter verification failed. |

