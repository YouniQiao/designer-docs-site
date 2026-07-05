# disableCloud

## disableCloud

```TypeScript
function disableCloud(accountId: string): Promise<void>
```

异步方法去使能端云协同能力。使用Promise异步回调。

**Since:** 10

**Required permissions:** 

 ohos.permission.CLOUDFILE_SYNC_MANAGER

**System capability:** SystemCapability.FileManagement.DistributedFileService.CloudSyncManager

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| accountId | string | Yes | 账号Id。 |

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
cloudSyncManager.disableCloud(accountId).then(() => {
  console.info("disableCloud successfully");
}).catch((err: BusinessError) => {
  console.error("disableCloud failed with error message: " + err.message + ", error code: " + err.code);
});

```

## disableCloud

```TypeScript
function disableCloud(accountId: string, callback: AsyncCallback<void>): void
```

异步方法去使能端云协同能力。使用callback异步回调。

**Since:** 10

**Required permissions:** 

 ohos.permission.CLOUDFILE_SYNC_MANAGER

**System capability:** SystemCapability.FileManagement.DistributedFileService.CloudSyncManager

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| accountId | string | Yes | 账号Id。 |
| callback | AsyncCallback&lt;void> | Yes | 回调函数。异步去使能端云协同能力之后。 |

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
cloudSyncManager.disableCloud(accountId, (err: BusinessError) => {
  if (err) {
    console.error("disableCloud failed with error message: " + err.message + ", error code: " + err.code);
  } else {
    console.info("disableCloud successfully");
  }
});

```

