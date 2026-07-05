# accessSync

## accessSync

```TypeScript
declare function accessSync(path: string, mode?: AccessModeType): boolean
```

以同步方法检查文件或目录是否存在，或校验操作权限。 校验读、写或读写权限不通过会抛出13900012（Permission denied）错误码。

**Since:** 9

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.FileManagement.File.FileIO

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| path | string | Yes | 文件或目录应用沙箱路径。 |
| mode | AccessModeType | No |  |

**Return value:**

| Type | Description |
| --- | --- |
| boolean | 返回true，表示文件存在；返回false，表示文件不存在。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 13900002 | No such file or directory |
| 13900005 | I/O error |
| 13900008 | Bad file descriptor |
| 13900011 | Out of memory |
| 13900012 | Permission denied |
| 13900013 | Bad address |
| 13900018 | Not a directory |
| 13900020 | Invalid argument |
| 13900023 | Text file busy |
| 13900030 | File name too long |
| 13900033 | Too many symbolic links encountered |
| 13900042 | Unknown error |

## accessSync

```TypeScript
declare function accessSync(path: string, mode: AccessModeType, flag: AccessFlagType): boolean
```

以同步方法检查文件或目录是否在本地，或校验操作权限。 校验读、写或读写权限不通过会抛出13900012（Permission denied）错误码。

**Since:** 12

**System capability:** SystemCapability.FileManagement.File.FileIO

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| path | string | Yes | 文件应用沙箱路径。 |
| mode | AccessModeType | Yes | 文件或目录校验的权限。 |
| flag | AccessFlagType | Yes | 文件或目录校验的位置。 |

**Return value:**

| Type | Description |
| --- | --- |
| boolean | 返回true，表示文件在本地且校验权限存在；返回false，表示文件不存在或者文件在云端或其他分布式设备上。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes:1.Mandatory parameters are left unspecified;  2.Incorrect parameter types. |
| 13900005 | I/O error |
| 13900011 | Out of memory |
| 13900012 | Permission denied |
| 13900013 | Bad address |
| 13900018 | Not a directory |
| 13900020 | Invalid argument |
| 13900023 | Text file busy |
| 13900030 | File name too long |
| 13900033 | Too many symbolic links encountered |

