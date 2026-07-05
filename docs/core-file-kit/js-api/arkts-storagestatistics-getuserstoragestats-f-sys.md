# getUserStorageStats

## getUserStorageStats

```TypeScript
function getUserStorageStats(): Promise<StorageStats>
```

异步获取当前用户各类别存储空间大小（单位为Byte），以Promise方式返回。

**Since:** 9

**Required permissions:** 

 ohos.permission.STORAGE_MANAGER

**System capability:** SystemCapability.FileManagement.StorageService.SpatialStatistics

**System API:** This is a system API.

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;StorageStats> | Promise对象，返回当前用户各类别存储空间大小（单位为Byte）。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission verification failed. |
| 202 | The caller is not a system application. |
| 401 | The input parameter is invalid.Possible causes:  1.Mandatory parameters are left unspecified;  2.Incorrect parameter types. |
| 13600001 | IPC error. |
| 13900042 | Unknown error. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';
storageStatistics.getUserStorageStats().then((storageStats: storageStatistics.StorageStats) => {
  console.info("getUserStorageStats successfully:" + JSON.stringify(storageStats));
}).catch((err: BusinessError) => {
  console.error("getUserStorageStats failed with error:" + JSON.stringify(err));
});

```

## getUserStorageStats

```TypeScript
function getUserStorageStats(callback: AsyncCallback<StorageStats>): void
```

异步获取当前用户各类别存储空间大小（单位为Byte），以callback方式返回。

**Since:** 9

**Required permissions:** 

 ohos.permission.STORAGE_MANAGER

**System capability:** SystemCapability.FileManagement.StorageService.SpatialStatistics

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;StorageStats> | Yes | 返回用户各类别存储空间大小之后的回调。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission verification failed. |
| 202 | The caller is not a system application. |
| 401 | The input parameter is invalid.Possible causes:  1.Mandatory parameters are left unspecified;  2.Incorrect parameter types. |
| 13600001 | IPC error. |
| 13900042 | Unknown error. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';
storageStatistics.getUserStorageStats((error: BusinessError, storageStats: storageStatistics.StorageStats) => {
  if (error) {
    console.error("getUserStorageStats failed with error:" + JSON.stringify(error));
  } else {
    // Do something.
    console.info("getUserStorageStats successfully:" + JSON.stringify(storageStats));
  }
});

```

## getUserStorageStats

```TypeScript
function getUserStorageStats(userId: long): Promise<StorageStats>
```

异步获取指定用户各类别存储空间大小（单位为Byte），以Promise方式返回。

**Since:** 9

**Required permissions:** 

 ohos.permission.STORAGE_MANAGER

**System capability:** SystemCapability.FileManagement.StorageService.SpatialStatistics

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| userId | long | Yes | 用户id。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;StorageStats> | Promise对象，返回指定用户各类别存储空间大小（单位为Byte）。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission verification failed. |
| 202 | The caller is not a system application. |
| 401 | The input parameter is invalid.Possible causes:  1.Mandatory parameters are left unspecified;  2.Incorrect parameter types. |
| 13600001 | IPC error. |
| 13600009 | User if out of range. |
| 13900042 | Unknown error. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';
let userId: number = 100;
storageStatistics.getUserStorageStats(userId).then((storageStats: storageStatistics.StorageStats) => {
  console.info("getUserStorageStats successfully:" + JSON.stringify(storageStats));
}).catch((err: BusinessError) => {
  console.error("getUserStorageStats failed with error:" + JSON.stringify(err));
});

```

## getUserStorageStats

```TypeScript
function getUserStorageStats(userId: long, callback: AsyncCallback<StorageStats>): void
```

异步获取指定用户各类别存储空间大小（单位为Byte），以callback方式返回。

**Since:** 9

**Required permissions:** 

 ohos.permission.STORAGE_MANAGER

**System capability:** SystemCapability.FileManagement.StorageService.SpatialStatistics

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| userId | long | Yes | 用户id。 |
| callback | AsyncCallback&lt;StorageStats> | Yes | 返回指定用户各类别存储空间大小之后的回调。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission verification failed. |
| 202 | The caller is not a system application. |
| 401 | The input parameter is invalid.Possible causes:  1.Mandatory parameters are left unspecified;  2.Incorrect parameter types. |
| 13600001 | IPC error. |
| 13600009 | User if out of range. |
| 13900042 | Unknown error. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';
let userId: number = 100;
storageStatistics.getUserStorageStats(userId, (error: BusinessError, storageStats: storageStatistics.StorageStats) => {
  if (error) {
    console.error("getUserStorageStats failed with error:" + JSON.stringify(error));
  } else {
    // Do something.
    console.info("getUserStorageStats successfully:" + JSON.stringify(storageStats));
  }
});

```

