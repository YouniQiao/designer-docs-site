# getTotalSize

## getTotalSize

```TypeScript
function getTotalSize(callback: AsyncCallback<long>): void
```

获取内置存储的总空间大小（单位为Byte），以callback方式返回。

**Since:** 9

**Required permissions:** 

- API version9  to  14: ohos.permission.STORAGE_MANAGER

**System capability:** SystemCapability.FileManagement.StorageService.SpatialStatistics

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;long> | Yes | 获取内置存储的总空间大小之后的回调。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission verification failed. [since 9 - 14] |
| 202 | The caller is not a system application. [since 9 - 14] |
| 401 | The input parameter is invalid.Possible causes:Mandatory  parameters are left unspecified; |
| 13600001 | IPC error. |
| 13900042 | Unknown error. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';
storageStatistics.getTotalSize((error: BusinessError, number: number) => {
  if (error) {
    console.error("getTotalSize failed with error:" + JSON.stringify(error));
  } else {
    // Do something.
    console.info("getTotalSize successfully:" + number);
  }
});

```

