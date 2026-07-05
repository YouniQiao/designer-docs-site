# listFileExt

## listFileExt

```TypeScript
declare function listFileExt(
  path: string,
  options?: ListFileExtOptions
): Promise<string[]>
```

列出目录下所有文件名，使用Promise异步回调。 该接口支持通过自定义过滤函数对文件名进行过滤。 可通过配置options中recursion参数实现递归列出所有文件的相对路径，相对路径以“/”开头。

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.FileManagement.File.FileIO

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| path | string | Yes | 目录的应用沙箱路径。 |
| options | ListFileExtOptions | No |  |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;string[]> | Promise used to return the file names listed. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 13900002 | No such file or directory |
| 13900011 | Out of memory |
| 13900018 | Not a directory |
| 13900020 | Invalid argument |

