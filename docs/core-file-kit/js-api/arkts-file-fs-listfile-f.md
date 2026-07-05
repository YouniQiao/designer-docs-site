# listFile

## listFile

```TypeScript
declare function listFile(
  path: string,
  options?: ListFileOptions
): Promise<string[]>
```

默认列出当前目录下所有文件名和目录名。支持过滤。使用promise异步回调。 可通过配置options中recursion参数实现递归列出所有文件的相对路径，相对路径以“/”开头。

**Since:** 9

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.FileManagement.File.FileIO

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| path | string | Yes | 目录的应用沙箱路径。 |
| options | ListFileOptions | No |  |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;string[]> | Promise对象。返回文件名数组，默认以'utf-8'编码。  default. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 13900002 | No such file or directory |
| 13900008 | Bad file descriptor |
| 13900011 | Out of memory |
| 13900018 | Not a directory |
| 13900042 | Unknown error |

## listFile

```TypeScript
declare function listFile(path: string, callback: AsyncCallback<string[]>): void
```

默认列出当前目录下所有文件名和目录名。支持过滤。使用callback异步回调。 可通过配置options中recursion参数实现递归列出所有文件的相对路径，相对路径以“/”开头。

**Since:** 9

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.FileManagement.File.FileIO

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| path | string | Yes | 目录的应用沙箱路径。 |
| callback | AsyncCallback&lt;string[]> | Yes | 异步列出文件名数组之后的回调，默认以'utf-8'编码。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 13900002 | No such file or directory |
| 13900008 | Bad file descriptor |
| 13900011 | Out of memory |
| 13900018 | Not a directory |
| 13900042 | Unknown error |

## listFile

```TypeScript
declare function listFile(
  path: string,
  options: ListFileOptions,
  callback: AsyncCallback<string[]>
): void
```

默认列出当前目录下所有文件名和目录名。支持过滤。使用callback异步回调。 可通过配置options中recursion参数实现递归列出所有文件的相对路径，相对路径以“/”开头。

**Since:** 9

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.FileManagement.File.FileIO

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| path | string | Yes | 目录的应用沙箱路径。 |
| options | ListFileOptions | Yes |  |
| callback | AsyncCallback&lt;string[]> | Yes | 异步列出文件名数组之后的回调，默认以'utf-8'编码。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 13900002 | No such file or directory |
| 13900008 | Bad file descriptor |
| 13900011 | Out of memory |
| 13900018 | Not a directory |
| 13900042 | Unknown error |

