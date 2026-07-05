# createMediaSourceWithDirectory

## createMediaSourceWithDirectory

```TypeScript
function createMediaSourceWithDirectory(path: string): Promise< MediaSource | undefined>
```

Create a MediaSource object from the given directory.

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Multimedia.Media.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| path | string | Yes | Buffer path information for creating a media source |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt; MediaSource \| undefined> | If success, an MediaSource is returned. Otherwise returns null. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 5411007 | The directory specified by the path parameter does not exist or unaccessed. |

