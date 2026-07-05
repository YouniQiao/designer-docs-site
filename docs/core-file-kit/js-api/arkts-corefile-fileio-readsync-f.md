# readSync

## readSync

```TypeScript
declare function readSync(
  fd: number,
  buffer: ArrayBuffer,
  options?: {
    offset?: number;
    length?: number;
    position?: number;
  }
): number
```

Reads data from a file. This API returns the result synchronously.

**Since:** 6

**Deprecated since:** 9

**Substitutes:** [fs:readSync](arkts-corefile-file-fs-readsync-f.md#readsync-1)

**System capability:** SystemCapability.FileManagement.File.FileIO

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| fd | number | Yes | File descriptor of the file to read. |
| buffer | ArrayBuffer | Yes | Buffer used to store the file data read. |
| options | {    offset?: number;    length?: number;    position?: number;  } | No | The options are as follows:<br>- **offset** (number): position to store the data readin the buffer relative to the start address of the buffer, in bytes. This parameter is optional. The defaultvalue is **0**.<br>- **length** (number): length of the data to read. This parameter is optional. The defaultvalue is the buffer length minus the offset, in bytes.<br>- **position** (number): position of the data to readin the file. This parameter is optional. By default, data is read from the current position, in bytes.<br>Constraints: offset + length &lt;= Buffer size |

**Return value:**

| Type | Description |
| --- | --- |
| number | Length of the data read, in bytes. |

