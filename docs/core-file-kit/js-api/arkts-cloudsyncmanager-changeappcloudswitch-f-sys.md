# changeAppCloudSwitch

## changeAppCloudSwitch

```TypeScript
function changeAppCloudSwitch(accountId: string, bundleName: string, status: boolean): Promise<void>
```

异步方法修改应用的端云文件同步开关。使用Promise异步回调。

**Since:** 10

**System capability:** SystemCapability.FileManagement.DistributedFileService.CloudSyncManager

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| accountId | string | Yes | 账号Id。 |
| bundleName | string | Yes | 应用包名。 |
| status | boolean | Yes | 修改的应用云同步开关状态。true为打开；false为关闭。 |

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

异步方法修改应用的端云文件同步开关。使用callback异步回调。

**Since:** 10

**System capability:** SystemCapability.FileManagement.DistributedFileService.CloudSyncManager

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| accountId | string | Yes | 账号Id。 |
| bundleName | string | Yes | 应用包名 |
| status | boolean | Yes | 修改的应用云同步开关状态。true为打开；false为关闭。 |
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
let bundleName: string = "com.example.bundle";
cloudSyncManager.changeAppCloudSwitch(accountId, bundleName, true, (err: BusinessError) => {
  if (err) {
    console.error("changeAppCloudSwitch failed with error message: " + err.message + ", error code: " + err.code);
  } else {
    console.info("changeAppCloudSwitch successfully");
  }
});

```

