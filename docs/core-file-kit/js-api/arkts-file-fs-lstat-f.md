# lstat

## lstat

```TypeScript
declare function lstat(path: string): Promise<Stat>
```

获取符号链接文件信息，使用promise异步回调。

**Since:** 9

**System capability:** SystemCapability.FileManagement.File.FileIO

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| path | string | Yes | 文件的应用沙箱路径path或URI。 说明：从API version 22开始，支持传入URI。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;Stat> | Promise对象。返回Stat对象，表示文件的具体信息，详情见Stat。 |

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

## lstat

```TypeScript
declare function lstat(path: string, callback: AsyncCallback<Stat>): void
```

获取符号链接文件信息，使用callback异步回调。

**Since:** 9

**System capability:** SystemCapability.FileManagement.File.FileIO

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| path | string | Yes | 文件的应用沙箱路径path或URI。 说明：从API version 22开始，支持传入URI。 |
| callback | AsyncCallback&lt;Stat> | Yes | 异步获取文件具体信息之后的回调。 |

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

