# readTextSync

## readTextSync

```TypeScript
declare function readTextSync(
  filePath: string,
  options?: {
    position?: number;
    length?: number;
    encoding?: string;
  }
): string
```

Reads the text content of a file. This API returns the result synchronously.

**Since:** 7

**Deprecated since:** 9

**Substitutes:** [fs:readTextSync](arkts-corefile-file-fs-readtextsync-f.md#readtextsync-1)

**System capability:** SystemCapability.FileManagement.File.FileIO

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| filePath | string | Yes | Application sandbox path of the file to read. |
| options | {    position?: number;    length?: number;    encoding?: string;  } | No | The options are as follows:<br>- **position** (number): position of the data to read inthe file, in bytes. This parameter is optional. By default, data is read from the current position.<br>-**length** (number): length of the data to read, in bytes. This parameter is optional. The default value is thebuffer length minus the offset.<br>- **encoding** (string): format of the data to be encoded.<br>It is valid onlywhen the data is of the string type.<br>The default value is **'utf-8'**, which is the only value supported. |

**Return value:**

| Type | Description |
| --- | --- |
| string | File content read. |

