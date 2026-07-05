# getUriFromPath

## getUriFromPath

```TypeScript
function getUriFromPath(path: string): string
```

Get the uri from the path of file in app sandbox

**Since:** 15

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.FileManagement.AppFileService

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| path | string | Yes | the path of file in app sandbox |

**Return value:**

| Type | Description |
| --- | --- |
| string | Return the file uri |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | The input parameter is invalidPossible causes:1.Mandatory parameters are left unspecified;  2.Incorrect parameter types. |

**Example**

```TypeScript
let filePath = pathDir + "/test";
let uri = fileUri.getUriFromPath(filePath);

```

