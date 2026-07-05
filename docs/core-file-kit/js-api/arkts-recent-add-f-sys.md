# add

## add

```TypeScript
function add(uri: string): void
```

将uri对应的文件加入最近访问列表。

**Since:** 10

**Deprecated since:** 23

**Required permissions:** 

 ohos.permission.FILE_ACCESS_MANAGER

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.FileManagement.UserFileService

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| uri | string | Yes | 公共目录文件类URI。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 13900002 | No such file or directory |
| 13900020 | Invalid argument |
| 13900042 | Unknown error |

**Example**

```TypeScript
let uri = 'file://docs/storage/Users/currentUser/<publicPath>';
recent.add(uri);

```

