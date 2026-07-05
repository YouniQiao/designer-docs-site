# enableCloud

## enableCloud

```TypeScript
function enableCloud(accountId: string, switches: Record<string, boolean>): Promise<void>
```

异步方法使能端云协同能力。使用Promise异步回调。

**Since:** 10

**Required permissions:** 

 ohos.permission.CLOUDFILE_SYNC_MANAGER

**System capability:** SystemCapability.FileManagement.DistributedFileService.CloudSyncManager

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| accountId | string | Yes | 账号Id。 |
| switches | Record&lt;string, boolean> | Yes | 应用的端云协同特性使能开关，string类型为应用包名，boolean类型为开关状态。true为打开；false为关闭。 |

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
let switches: Record<string, boolean> = {
  'com.example.bundleName1': true,
  'com.example.bundleName2': false
}
cloudSyncManager.enableCloud(accountId, switches).then(() => {
  console.info("enableCloud successfully.");
}).catch((err: BusinessError) => {
  console.error("enableCloud failed with error message: " + err.message + ", error code: " + err.code);
});

```

## enableCloud

```TypeScript
function enableCloud(
    accountId: string,
    switches: Record<string, boolean>,
    callback: AsyncCallback<void>
  ): void
```

异步方法使能端云协同能力。使用callback异步回调。

**Since:** 10

**Required permissions:** 

 ohos.permission.CLOUDFILE_SYNC_MANAGER

**System capability:** SystemCapability.FileManagement.DistributedFileService.CloudSyncManager

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| accountId | string | Yes | 账号Id。 |
| switches | Record&lt;string, boolean> | Yes | 应用的端云协同特性使能开关，string类型为应用包名，boolean类型为开关状态。true为打开；false为关闭。 |
| callback | AsyncCallback&lt;void> | Yes |  |

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
let switches: Record<string, boolean> = {
  'com.example.bundleName1': true,
  'com.example.bundleName2': false
}
cloudSyncManager.enableCloud(accountId, switches, (err: BusinessError) => {
  if (err) {
    console.error("enableCloud failed with error message: " + err.message + ", error code: " + err.code);
  } else {
    console.info("enableCloud successfully");
  }
});

```

