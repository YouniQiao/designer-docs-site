# queryAppGroup (System API)

## Modules to Import

```TypeScript
import { usageStatistics } from '@kit.BackgroundTasksKit';
```

<a id="queryappgroup"></a>
## queryAppGroup

```TypeScript
function queryAppGroup(callback: AsyncCallback<number>): void
```

Queries the app group of the calling application.

The priority defined in a priority group restricts the resource usage of an application,for example, restricting the running of background tasks.

**Since:** 9

**Required permissions:** ohos.permission.BUNDLE_ACTIVE_INFO

<!--Device-usageStatistics-function queryAppGroup(callback: AsyncCallback<int>): void--><!--Device-usageStatistics-function queryAppGroup(callback: AsyncCallback<int>): void-End-->

**System capability:** SystemCapability.ResourceSchedule.UsageStatistics.AppGroup

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | [AsyncCallback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-asynccallback-i.md)&lt;number&gt; | Yes | Callback used to return the result.If the query is successful, **err** is **undefined**, and data is the app group of the calling application.Otherwise, **err** is an error object. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied. |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Not System App. |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible cause: Parameter verification failed. |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported. |
| [10000001](../../apis-backgroundtasks-kit/errorcode-DeviceUsageStatistics.md#10000001-memory-operation-failure) | Memory operation failed. |
| [10000002](../../apis-backgroundtasks-kit/errorcode-DeviceUsageStatistics.md#10000002-ipc-parcel-write-failure) | Failed to write data into parcel. Possible reasons: 1. Invalid parameters;<br> 2. Failed to apply for memory. |
| [10000003](../../apis-backgroundtasks-kit/errorcode-DeviceUsageStatistics.md#10000003-system-service-operation-failure) | Failed to get system ability manager. |
| [10000004](../../apis-backgroundtasks-kit/errorcode-DeviceUsageStatistics.md#10000004-ipc-failure) | Failed to access the device usage service. |
| [10000005](../../apis-backgroundtasks-kit/errorcode-DeviceUsageStatistics.md#10000005-application-not-installed) | Application is not installed. |
| [10000006](../../apis-backgroundtasks-kit/errorcode-DeviceUsageStatistics.md#10000006-failed-to-obtain-application-information) | Failed to get the application information. |
| [10100002](../../apis-backgroundtasks-kit/errorcode-DeviceUsageStatistics.md#10100002-failed-to-obtain-application-group-information) | Failed to get the application group information. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';
import { usageStatistics } from '@kit.BackgroundTasksKit';

usageStatistics.queryAppGroup((err: BusinessError, res: number) => {
  if(err) {
    console.error('BUNDLE_ACTIVE queryAppGroup callback failed. code is: ' + err.code + ',message is: ' + err.message);
  } else {
    console.info('BUNDLE_ACTIVE queryAppGroup callback succeeded. result: ' + JSON.stringify(res));
  }
});

```


<a id="queryappgroup-1"></a>
## queryAppGroup

```TypeScript
function queryAppGroup(): Promise<number>
```

Queries the app group of the calling application.

The priority defined in a priority group restricts the resource usage of an application,for example, restricting the running of background tasks.

**Since:** 9

**Required permissions:** ohos.permission.BUNDLE_ACTIVE_INFO

<!--Device-usageStatistics-function queryAppGroup(): Promise<int>--><!--Device-usageStatistics-function queryAppGroup(): Promise<int>-End-->

**System capability:** SystemCapability.ResourceSchedule.UsageStatistics.AppGroup

**System API:** This is a system API.

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;number&gt; | the promise returned by queryAppGroup.Returns the app group of the calling application. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied. |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Not System App. |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported. |
| [10000001](../../apis-backgroundtasks-kit/errorcode-DeviceUsageStatistics.md#10000001-memory-operation-failure) | Memory operation failed. |
| [10000002](../../apis-backgroundtasks-kit/errorcode-DeviceUsageStatistics.md#10000002-ipc-parcel-write-failure) | Failed to write data into parcel. Possible reasons: 1. Invalid parameters;<br> 2. Failed to apply for memory. |
| [10000003](../../apis-backgroundtasks-kit/errorcode-DeviceUsageStatistics.md#10000003-system-service-operation-failure) | Failed to get system ability manager. |
| [10000004](../../apis-backgroundtasks-kit/errorcode-DeviceUsageStatistics.md#10000004-ipc-failure) | Failed to access the device usage service. |
| [10000005](../../apis-backgroundtasks-kit/errorcode-DeviceUsageStatistics.md#10000005-application-not-installed) | Application is not installed. |
| [10000006](../../apis-backgroundtasks-kit/errorcode-DeviceUsageStatistics.md#10000006-failed-to-obtain-application-information) | Failed to get the application information. |
| [10100002](../../apis-backgroundtasks-kit/errorcode-DeviceUsageStatistics.md#10100002-failed-to-obtain-application-group-information) | Failed to get the application group information. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';
import { usageStatistics } from '@kit.BackgroundTasksKit';

usageStatistics.queryAppGroup().then((res: number) => {
  console.info('BUNDLE_ACTIVE queryAppGroup promise succeeded. result: ' + JSON.stringify(res));
}).catch((err: BusinessError) => {
  console.error('BUNDLE_ACTIVE queryAppGroup promise failed. code is: ' + err.code + ',message is: ' + err.message);
});

```


<a id="queryappgroup-2"></a>
## queryAppGroup

```TypeScript
function queryAppGroup(bundleName: string, callback: AsyncCallback<number>): void
```

Queries the usage priority group by bundleName.

The priority defined in a priority group restricts the resource usage of an application,for example, restricting the running of background tasks.

**Since:** 9

**Required permissions:** ohos.permission.BUNDLE_ACTIVE_INFO

<!--Device-usageStatistics-function queryAppGroup(bundleName: string, callback: AsyncCallback<int>): void--><!--Device-usageStatistics-function queryAppGroup(bundleName: string, callback: AsyncCallback<int>): void-End-->

**System capability:** SystemCapability.ResourceSchedule.UsageStatistics.AppGroup

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| bundleName | string | Yes | name of the application. |
| callback | [AsyncCallback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-asynccallback-i.md)&lt;number&gt; | Yes | Callback used to return the result.If the query is successful, **err** is **undefined**, and data is the usage priority group of the calling application. Otherwise, **err** is an error object. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied. |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Not System App. |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible cause: Parameter verification failed. |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported. |
| [10000001](../../apis-backgroundtasks-kit/errorcode-DeviceUsageStatistics.md#10000001-memory-operation-failure) | Memory operation failed. |
| [10000002](../../apis-backgroundtasks-kit/errorcode-DeviceUsageStatistics.md#10000002-ipc-parcel-write-failure) | Failed to write data into parcel. Possible reasons: 1. Invalid parameters;<br> 2. Failed to apply for memory. |
| [10000003](../../apis-backgroundtasks-kit/errorcode-DeviceUsageStatistics.md#10000003-system-service-operation-failure) | Failed to get system ability manager. |
| [10000004](../../apis-backgroundtasks-kit/errorcode-DeviceUsageStatistics.md#10000004-ipc-failure) | Failed to access the device usage service. |
| [10000005](../../apis-backgroundtasks-kit/errorcode-DeviceUsageStatistics.md#10000005-application-not-installed) | Application is not installed. |
| [10000006](../../apis-backgroundtasks-kit/errorcode-DeviceUsageStatistics.md#10000006-failed-to-obtain-application-information) | Failed to get the application information. |
| [10100002](../../apis-backgroundtasks-kit/errorcode-DeviceUsageStatistics.md#10100002-failed-to-obtain-application-group-information) | Failed to get the application group information. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';
import { usageStatistics } from '@kit.BackgroundTasksKit';

let bundleName: string = "com.ohos.camera";
usageStatistics.queryAppGroup(bundleName, (err: BusinessError, res: number) => {
  if(err) {
    console.error('BUNDLE_ACTIVE queryAppGroup callback failed. code is: ' + err.code + ',message is: ' + err.message);
  } else {
    console.info('BUNDLE_ACTIVE queryAppGroup callback succeeded. result: ' + JSON.stringify(res));
  }
});

```


<a id="queryappgroup-3"></a>
## queryAppGroup

```TypeScript
function queryAppGroup(bundleName: string): Promise<number>
```

Queries the usage priority group by bundleName.

The priority defined in a priority group restricts the resource usage of an application,for example, restricting the running of background tasks.

**Since:** 9

**Required permissions:** ohos.permission.BUNDLE_ACTIVE_INFO

<!--Device-usageStatistics-function queryAppGroup(bundleName: string): Promise<int>--><!--Device-usageStatistics-function queryAppGroup(bundleName: string): Promise<int>-End-->

**System capability:** SystemCapability.ResourceSchedule.UsageStatistics.AppGroup

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| bundleName | string | Yes | name of the application. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;number&gt; | Promise used to return the calling application. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied. |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Not System App. |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible cause: Parameter verification failed. |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported. |
| [10000001](../../apis-backgroundtasks-kit/errorcode-DeviceUsageStatistics.md#10000001-memory-operation-failure) | Memory operation failed. |
| [10000002](../../apis-backgroundtasks-kit/errorcode-DeviceUsageStatistics.md#10000002-ipc-parcel-write-failure) | Failed to write data into parcel. Possible reasons: 1. Invalid parameters;<br> 2. Failed to apply for memory. |
| [10000003](../../apis-backgroundtasks-kit/errorcode-DeviceUsageStatistics.md#10000003-system-service-operation-failure) | Failed to get system ability manager. |
| [10000004](../../apis-backgroundtasks-kit/errorcode-DeviceUsageStatistics.md#10000004-ipc-failure) | Failed to access the device usage service. |
| [10000005](../../apis-backgroundtasks-kit/errorcode-DeviceUsageStatistics.md#10000005-application-not-installed) | Application is not installed. |
| [10000006](../../apis-backgroundtasks-kit/errorcode-DeviceUsageStatistics.md#10000006-failed-to-obtain-application-information) | Failed to get the application information. |
| [10100002](../../apis-backgroundtasks-kit/errorcode-DeviceUsageStatistics.md#10100002-failed-to-obtain-application-group-information) | Failed to get the application group information. |

**Example**

```TypeScript
// Promise mode when bundleName is specified
import { BusinessError } from '@kit.BasicServicesKit';
import { usageStatistics } from '@kit.BackgroundTasksKit';

let bundleName: string = "com.ohos.camera";
usageStatistics.queryAppGroup(bundleName).then((res: number) => {
  console.info('BUNDLE_ACTIVE queryAppGroup promise succeeded. result: ' + JSON.stringify(res));
}).catch((err: BusinessError) => {
  console.error('BUNDLE_ACTIVE queryAppGroup promise failed. code is: ' + err.code + ',message is: ' + err.message);
});

```

