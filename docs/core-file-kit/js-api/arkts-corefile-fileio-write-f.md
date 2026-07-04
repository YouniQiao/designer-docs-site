# write

## write

```TypeScript
declare function write(
  fd: number,
  buffer: ArrayBuffer | string,
  options?: {
    offset?: number;
    length?: number;
    position?: number;
    encoding?: string;
  }
): Promise<number>
```

Writes data into a file. This API uses a promise to return the result.

**Since:** 6

**Deprecated since:** 9

**Substitutes:** [fs:write](arkts-corefile-file-fs-write-f.md#write-1)

**System capability:** SystemCapability.FileManagement.File.FileIO

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| fd | number | Yes | File descriptor of the file to write. |
| buffer | ArrayBuffer \| string | Yes | Data to write. It can be a string or data from a buffer. |
| options | {    offset?: number;    length?: number;    position?: number;    encoding?: string;  } | No | The options are as follows:<br>- **offset** (number): offset of the write positionrelative to the start address of the data, in bytes. This parameter is optional. The default value is **0**.<br>-**length** (number): length of the data to write, in bytes. This parameter is optional. The default value is thebuffer length minus the offset.<br>- **position** (number): start position to write the data into the file, inbytes. This parameter is optional. By default, data is written from the current position.<br>- **encoding** (string): format of the data to be encoded when the data is a string. The default value is **'utf-8'**, which isthe only value supported.<br>Constraints: offset + length &lt;= Buffer size |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;number&gt; | Promise that returns the length of the data written, in bytes. |


## write

```TypeScript
declare function write(fd: number, buffer: ArrayBuffer | string, callback: AsyncCallback<number>): void
```

Writes data to a file. This API uses an asynchronous callback to return the result.

**Since:** 6

**Deprecated since:** 9

**Substitutes:** [fs:write](arkts-corefile-file-fs-write-f.md#write-1)

**System capability:** SystemCapability.FileManagement.File.FileIO

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| fd | number | Yes | File descriptor of the file to write. |
| buffer | ArrayBuffer \| string | Yes | Data to write. It can be a string or data from a buffer. |
| callback | AsyncCallback&lt;number&gt; | Yes | Callback invoked when the data is written asynchronously. return thelength of the data written, in bytes. |


## write

```TypeScript
declare function write(
  fd: number,
  buffer: ArrayBuffer | string,
  options: {
    offset?: number;
    length?: number;
    position?: number;
    encoding?: string;
  },
  callback: AsyncCallback<number>
): void
```

Writes data to a file. This API uses an asynchronous callback to return the result.

**Since:** 6

**Deprecated since:** 9

**Substitutes:** [fs:write](arkts-corefile-file-fs-write-f.md#write-1)

**System capability:** SystemCapability.FileManagement.File.FileIO

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| fd | number | Yes | File descriptor of the file to write. |
| buffer | ArrayBuffer \| string | Yes | Data to write. It can be a string or data from a buffer. |
| options | {    offset?: number;    length?: number;    position?: number;    encoding?: string;  } | Yes | The options are as follows:<br>- **offset** (number): offset of the write positionrelative to the start address of the data, in bytes. This parameter is optional. The default value is **0**.<br>-**length** (number): length of the data to write, in bytes. This parameter is optional. The default value is thebuffer length minus the offset.<br>- **position** (number): start position to write the data into the file, inbytes. This parameter is optional. By default, data is written from the current position.<br>- **encoding** (string): format of the data to be encoded when the data is a string. The default value is **'utf-8'**, which isthe only value supported.<br>Constraints: offset + length &lt;= Buffer size |
| callback | AsyncCallback&lt;number&gt; | Yes | Callback invoked when the data is written asynchronously. return thelength of the data written, in bytes. |

