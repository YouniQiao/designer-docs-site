# lseek

## lseek

```TypeScript
declare function lseek(fd: number, offset: number, whence?: WhenceType): number
```

调整文件偏移指针位置。

**Since:** 11

**System capability:** SystemCapability.FileManagement.File.FileIO

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| fd | number | Yes | 文件描述符。 |
| offset | number | Yes | 相对偏移位置，单位为Byte。 |
| whence | WhenceType | No |  |

**Return value:**

| Type | Description |
| --- | --- |
| number | 当前文件偏移指针位置（相对于文件头的偏移量，单位为Byte）。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 13900008 | Bad file descriptor |
| 13900020 | Invalid argument |
| 13900026 | Illegal seek |
| 13900038 | Value too large for defined data type |
| 13900042 | Unknown error |

