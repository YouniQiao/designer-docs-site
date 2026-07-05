# enableCloud (System API)

## Modules to Import

```TypeScript
import { cloudSyncManager } from '@ohos.file.cloudSyncManager';
```

## enableCloud

```TypeScript
function enableCloud(accountId: string, switches: Record<string, boolean>): Promise<void>
```

Enables device-cloud sync. This API uses a promise to return the result.

**Since:** 10

**Required permissions:** ohos.permission.CLOUDFILE_SYNC_MANAGER

**System capability:** SystemCapability.FileManagement.DistributedFileService.CloudSyncManager

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| accountId | string | Yes | Account ID. |
| switches | Record&lt;string, boolean&gt; | Yes | Whether to enable the device-cloud sync feature. The applicationbundle name is a string. The switch status is a Boolean value. The value **true** means to enable this function; the value **false** means the opposite. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | Promise that returns no value. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission verification failed. |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | The caller is not a system application. |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | The input parameter is invalid.Possible causes:1.Mandatory parameters are leftunspecified;<br>2.Incorrect parameter types. |

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

Enables device-cloud sync. This API uses an asynchronous callback to return the result.

**Since:** 10

**Required permissions:** ohos.permission.CLOUDFILE_SYNC_MANAGER

**System capability:** SystemCapability.FileManagement.DistributedFileService.CloudSyncManager

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| accountId | string | Yes | Account ID. |
| switches | Record&lt;string, boolean&gt; | Yes | Whether to enable the device-cloud sync feature. The applicationbundle name is a string. The switch status is a Boolean value. The value **true** means to enable this function; the value **false** means the opposite. |
| callback | AsyncCallback&lt;void&gt; | Yes | Callback used to return the result of enabling device-cloud sync. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission verification failed. |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | The caller is not a system application. |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | The input parameter is invalid.Possible causes:1.Mandatory parameters are leftunspecified;<br>2.Incorrect parameter types. |

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

