# lstatSync

## lstatSync

```TypeScript
declare function lstatSync(path: string): Stat
```

以同步方法获取符号链接文件信息。

**Since:** 9

**System capability:** SystemCapability.FileManagement.File.FileIO

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| path | string | Yes | 文件的应用沙箱路径path或URI。 说明：从API version 22开始，支持传入URI。 |

**Return value:**

| Type | Description |
| --- | --- |
| Stat | 表示文件的具体信息。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 13900002 | No such file or directory |
| 13900008 | Bad file descriptor |
| 13900011 | Out of memory |
| 13900012 | Permission denied |
| 13900013 | Bad address |
| 13900018 | Not a directory |
| 13900030 | File name too long |
| 13900033 | Too many symbolic links encountered |
| 13900038 | Value too large for defined data type |
| 13900042 | Unknown error |

