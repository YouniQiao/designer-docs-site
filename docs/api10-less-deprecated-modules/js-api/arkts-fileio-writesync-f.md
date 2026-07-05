# writeSync

## writeSync

```TypeScript
declare function writeSync(
  fd: number,
  buffer: ArrayBuffer | string,
  options?: {
    offset?: number;
    length?: number;
    position?: number;
    encoding?: string;
  }
): number
```

以同步方法将数据写入文件。

**Since:** 6

**Deprecated since:** 9

**Substitute:** @ohos.file.fs:writeSync

**System capability:** SystemCapability.FileManagement.File.FileIO

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| fd | number | Yes | 待写入文件的文件描述符。 |
| buffer | ArrayBuffer \| string | Yes | 待写入文件的数据，可来自缓冲区或字符串。 |
| options | {
    offset?: number;
    length?: number;
    position?: number;
    encoding?: string;
  } | No |  |

**Return value:**

| Type | Description |
| --- | --- |
| number | 实际写入的长度，单位为Byte。 |

