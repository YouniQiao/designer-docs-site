# dup

## dup

```TypeScript
declare function dup(fd: number): File
```

复制文件描述符，并返回对应的File对象。

**Since:** 10

**System capability:** SystemCapability.FileManagement.File.FileIO

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| fd | number | Yes | 文件描述符。 |

**Return value:**

| Type | Description |
| --- | --- |
| File | 打开的File对象。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 13900004 | Interrupted system call |
| 13900005 | I/O error |
| 13900008 | Bad file descriptor |
| 13900014 | Device or resource busy |
| 13900020 | Invalid argument |
| 13900022 | Too many open files |
| 13900042 | Unknown error |

