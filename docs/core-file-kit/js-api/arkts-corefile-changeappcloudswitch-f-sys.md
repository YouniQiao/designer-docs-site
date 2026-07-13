# changeAppCloudSwitch (System API)

## Modules to Import

```TypeScript
import { cloudSyncManager } from '@kit.CoreFileKit';
```

## changeAppCloudSwitch

```TypeScript
function changeAppCloudSwitch(accountId: string, bundleName: string, status: boolean): Promise<void>
```

Changes the device-cloud file sync switch for an application. This API uses a promise to return the result.

**Since:** 10

**System capability:** SystemCapability.FileManagement.DistributedFileService.CloudSyncManager

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| accountId | string | Yes | Account ID. |
| bundleName | string | Yes | Bundle name. |
| status | boolean | Yes | State of the cloud-device file sync switch to set. The value **true** means to enablethis function; the value **false** means the opposite. |

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
let bundleName: string = "com.example.bundle";
cloudSyncManager.changeAppCloudSwitch(accountId, bundleName, true).then(() => {
  console.info("changeAppCloudSwitch successfully");
}).catch((err: BusinessError) => {
  console.error("changeAppCloudSwitch failed with error message: " + err.message + ", error code: " + err.code);
});

```


## changeAppCloudSwitch

```TypeScript
function changeAppCloudSwitch(accountId: string, bundleName: string, status: boolean, callback: AsyncCallback<void>): void
```

Changes the device-cloud file sync switch for an application. This API uses an asynchronous callback to return the
result.

**Since:** 10

**System capability:** SystemCapability.FileManagement.DistributedFileService.CloudSyncManager

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| accountId | string | Yes | Account ID. |
| bundleName | string | Yes | Bundle name of the application. |
| status | boolean | Yes | State of the cloud-device file sync switch to set. The value **true** means to enablethis function; the value **false** means the opposite. |
| callback | AsyncCallback&lt;void&gt; | Yes | Callback used to return the result of changing the device-cloud filesync switch for an application. |

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
let bundleName: string = "com.example.bundle";
cloudSyncManager.changeAppCloudSwitch(accountId, bundleName, true, (err: BusinessError) => {
  if (err) {
    console.error("changeAppCloudSwitch failed with error message: " + err.message + ", error code: " + err.code);
  } else {
    console.info("changeAppCloudSwitch successfully");
  }
});

```

