# clean

## clean

```TypeScript
function clean(accountId: string, appActions: Record<string, Action>): Promise<void>
```

异步方法清理本地云相关数据。使用Promise异步回调。

**Since:** 10

**Required permissions:** 

 ohos.permission.CLOUDFILE_SYNC_MANAGER

**System capability:** SystemCapability.FileManagement.DistributedFileService.CloudSyncManager

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| accountId | string | Yes | 账号Id。 |
| appActions | Record&lt;string, Action> | Yes | 清理动作类型，string类型为待清理应用包名， [Action]cloudSyncManager.Action为清理动  作类型。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | Promise对象，无返回结果。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission verification failed. |
| 202 | The caller is not a system application. |
| 401 | The input parameter is invalid.Possible causes:1.Mandatory parameters are left  unspecified;  2.Incorrect parameter types. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

let accountId: string = "testAccount";
let appActions: Record<string, cloudSyncManager.Action> = {
  'com.example.bundleName1': cloudSyncManager.Action.RETAIN_DATA,
  'com.example.bundleName2': cloudSyncManager.Action.CLEAR_DATA
};
cloudSyncManager.clean(accountId, appActions).then(() => {
  console.info("clean successfully");
}).catch((err: BusinessError) => {
  console.error("clean failed with error message: " + err.message + ", error code: " + err.code);
});

```

## clean

```TypeScript
function clean(accountId: string, appActions: Record<string, Action>, callback: AsyncCallback<void>): void
```

异步方法清理本地云相关数据。使用callback异步回调。

**Since:** 10

**Required permissions:** 

 ohos.permission.CLOUDFILE_SYNC_MANAGER

**System capability:** SystemCapability.FileManagement.DistributedFileService.CloudSyncManager

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| accountId | string | Yes | 账号Id。 |
| appActions | Record&lt;string, Action> | Yes | 清理动作类型，string类型为待清理应用包名， [Action]cloudSyncManager.Action为清理动  作类型。 |
| callback | AsyncCallback&lt;void> | Yes | 回调函数。异步方法清理本地云相关数据。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission verification failed. |
| 202 | The caller is not a system application. |
| 401 | The input parameter is invalid.Possible causes:1.Mandatory parameters are left  unspecified;  2.Incorrect parameter types. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

let accountId: string = "testAccount";
  let appActions: Record<string, cloudSyncManager.Action> = {
  'com.example.bundleName1': cloudSyncManager.Action.RETAIN_DATA,
  'com.example.bundleName2': cloudSyncManager.Action.CLEAR_DATA
};
cloudSyncManager.clean(accountId, appActions, (err: BusinessError) => {
  if (err) {
    console.error("clean failed with error message: " + err.message + ", error code: " + err.code);
  } else {
    console.info("clean successfully");
  }
});

```

