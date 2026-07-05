# getStorageDataDir

## getStorageDataDir

```TypeScript
function getStorageDataDir(): Promise<string>
```

异步方法获取内存存储根目录，使用promise异步回调。

**Since:** 8

**System capability:** SystemCapability.FileManagement.File.Environment

**System API:** This is a system API.

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;string> | 返回存储根目录。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 202 | The caller is not a system application |
| 13900020 | Invalid argument |
| 13900042 | Unknown error |

## getStorageDataDir

```TypeScript
function getStorageDataDir(callback: AsyncCallback<string>): void
```

异步方法获取内存存储根目录，使用callback异步回调。

**Since:** 8

**System capability:** SystemCapability.FileManagement.File.Environment

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;string> | Yes |  |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 202 | The caller is not a system application |
| 13900020 | Invalid argument |
| 13900042 | Unknown error |

