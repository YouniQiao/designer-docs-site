# statSync

## statSync

```TypeScript
declare function statSync(file: string | number): Stat
```

以同步方法获取文件或目录详细属性信息。

**Since:** 9

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.FileManagement.File.FileIO

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| file | string \| number | Yes | 文件或目录的应用沙箱路径path、URI或已打开的文件描述符fd。 说明：从API version 22开始，支持传入URI。 |

**Return value:**

| Type | Description |
| --- | --- |
| Stat | 表示文件或目录的具体信息。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 13900002 | No such file or directory |
| 13900004 | Interrupted system call |
| 13900005 | I/O error |
| 13900008 | Bad file descriptor |
| 13900011 | Out of memory |
| 13900012 | Permission denied |
| 13900013 | Bad address |
| 13900018 | Not a directory |
| 13900030 | File name too long |
| 13900031 | Function not implemented |
| 13900033 | Too many symbolic links encountered |
| 13900038 | Value too large for defined data type |
| 13900042 | Unknown error |

