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

以同步方法从文件读取数据。

**Since:** 6

**Deprecated since:** 9

**Substitute:** @ohos.file.fs:readSync

**System capability:** SystemCapability.FileManagement.File.FileIO

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| fd | number | Yes | 待读取文件的文件描述符。 |
| buffer | ArrayBuffer | Yes | 用于保存读取到的文件数据的缓冲区。 |
| options | {
    offset?: number;
    length?: number;
    position?: number;
  } | No |  |

**Return value:**

| Type | Description |
| --- | --- |
| number | 实际读取的长度，单位为Byte。 |

