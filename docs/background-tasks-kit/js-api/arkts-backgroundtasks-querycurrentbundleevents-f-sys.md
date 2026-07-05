# queryCurrentBundleEvents (System API)

## Modules to Import

```TypeScript
import { usageStatistics } from '@ohos.resourceschedule.usageStatistics';
```

## queryCurrentBundleEvents

```TypeScript
function queryCurrentBundleEvents(begin: number, end: number, callback: AsyncCallback<Array<BundleEvents>>): void
```

Queries state data of the current bundle within a specified period.

**Since:** 9

**System capability:** SystemCapability.ResourceSchedule.UsageStatistics.App

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| begin | number | Yes | Indicates the start time of the query period, in milliseconds.<br> Unit:ms |
| end | number | Yes | Indicates the end time of the query period, in milliseconds.<br> Unit:ms |
| callback | AsyncCallback&lt;Array&lt;BundleEvents&gt;&gt; | Yes | Callback used to return the result.If the query is successful, **err** is **undefined**, and data is the {@link BundleEvents} object Array containingthe state data of the current bundle. Otherwise, **err** is an error object. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Not System App. |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible cause: 1. Mandatory parameters are left unspecified;<br> 2. Incorrect parameters types; 3. Parameter verification failed. |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported. |
| [10000001](../../apis-backgroundtasks-kit/errorcode-DeviceUsageStatistics.md#10000001-memory-operation-failure) | Memory operation failed. |
| [10000002](../../apis-backgroundtasks-kit/errorcode-DeviceUsageStatistics.md#10000002-ipc-parcel-write-failure) | Failed to write data into parcel. Possible reasons: 1. Invalid parameters;<br> 2. Failed to apply for memory. |
| [10000003](../../apis-backgroundtasks-kit/errorcode-DeviceUsageStatistics.md#10000003-system-service-operation-failure) | Failed to get system ability manager. |
| [10000004](../../apis-backgroundtasks-kit/errorcode-DeviceUsageStatistics.md#10000004-ipc-failure) | Failed to access the device usage service. |
| [10000006](../../apis-backgroundtasks-kit/errorcode-DeviceUsageStatistics.md#10000006-failed-to-obtain-application-information) | Failed to get the application information. |
| [10000007](../../apis-backgroundtasks-kit/errorcode-DeviceUsageStatistics.md#10000007-time-operation-failure) | Failed to get the system time. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';
import { usageStatistics } from '@kit.BackgroundTasksKit';

usageStatistics.queryCurrentBundleEvents(0, 20000000000000, (err: BusinessError, res: Array<usageStatistics.BundleEvents>) => {
  if (err) {
    console.error('BUNDLE_ACTIVE queryCurrentBundleEvents callback failed. code is: ' + err.code + ',message is: ' + err.message);
  } else {
    console.info('BUNDLE_ACTIVE queryCurrentBundleEvents callback success.');
    for (let i = 0; i < res.length; i++) {
      console.info('BUNDLE_ACTIVE queryCurrentBundleEvents callback number : ' + (i + 1));
      console.info('BUNDLE_ACTIVE queryCurrentBundleEvents callback result ' + JSON.stringify(res[i]));
    }
  }
});

```


## queryCurrentBundleEvents

```TypeScript
function queryCurrentBundleEvents(begin: number, end: number): Promise<Array<BundleEvents>>
```

Queries state data of the current bundle within a specified period.

**Since:** 9

**System capability:** SystemCapability.ResourceSchedule.UsageStatistics.App

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| begin | number | Yes | Indicates the start time of the query period, in milliseconds.<br> Unit:ms |
| end | number | Yes | Indicates the end time of the query period, in milliseconds.<br> Unit:ms |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;Array&lt;BundleEvents&gt;&gt; | the promise returned by queryCurrentBundleEvents.the {@link BundleEvents} object Array containing the state data of the current bundle. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Not System App. |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible cause: 1. Mandatory parameters are left unspecified;<br> 2. Incorrect parameters types; 3. Parameter verification failed. |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported. |
| [10000001](../../apis-backgroundtasks-kit/errorcode-DeviceUsageStatistics.md#10000001-memory-operation-failure) | Memory operation failed. |
| [10000002](../../apis-backgroundtasks-kit/errorcode-DeviceUsageStatistics.md#10000002-ipc-parcel-write-failure) | Failed to write data into parcel. Possible reasons: 1. Invalid parameters;<br> 2. Failed to apply for memory. |
| [10000003](../../apis-backgroundtasks-kit/errorcode-DeviceUsageStatistics.md#10000003-system-service-operation-failure) | Failed to get system ability manager. |
| [10000004](../../apis-backgroundtasks-kit/errorcode-DeviceUsageStatistics.md#10000004-ipc-failure) | Failed to access the device usage service. |
| [10000006](../../apis-backgroundtasks-kit/errorcode-DeviceUsageStatistics.md#10000006-failed-to-obtain-application-information) | Failed to get the application information. |
| [10000007](../../apis-backgroundtasks-kit/errorcode-DeviceUsageStatistics.md#10000007-time-operation-failure) | Failed to get the system time. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';
import { usageStatistics } from '@kit.BackgroundTasksKit';

usageStatistics.queryCurrentBundleEvents(0, 20000000000000).then((res: Array<usageStatistics.BundleEvents>) => {
  console.info('BUNDLE_ACTIVE queryCurrentBundleEvents promise success.');
  for (let i = 0; i < res.length; i++) {
    console.info('BUNDLE_ACTIVE queryCurrentBundleEvents promise number : ' + (i + 1));
    console.info('BUNDLE_ACTIVE queryCurrentBundleEvents promise result ' + JSON.stringify(res[i]));
  }
}).catch((err: BusinessError) => {
  console.error('BUNDLE_ACTIVE queryCurrentBundleEvents promise failed. code is: ' + err.code + ',message is: ' + err.message);
});

```


## queryCurrentBundleEvents

```TypeScript
function queryCurrentBundleEvents(begin: number, end: number, maxNum: number): Promise<Array<BundleEvents>>
```

Queries state data of the current bundle within a specified period.

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.ResourceSchedule.UsageStatistics.App

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| begin | number | Yes | Indicates the start time of the query period, in milliseconds.<br> Unit:ms |
| end | number | Yes | Indicates the end time of the query period, in milliseconds.<br> Unit:ms |
| maxNum | number | Yes | Indicates max record number in result, max value is 1000, default value is 1000. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;Array&lt;BundleEvents&gt;&gt; | the promise returned by queryCurrentBundleEvents.the {@link BundleEvents} object Array containing the state data of the current bundle. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Not System App. |
| [10000001](../../apis-backgroundtasks-kit/errorcode-DeviceUsageStatistics.md#10000001-memory-operation-failure) | Memory operation failed. |
| [10000002](../../apis-backgroundtasks-kit/errorcode-DeviceUsageStatistics.md#10000002-ipc-parcel-write-failure) | Failed to write data into parcel. Possible reasons: 1. Invalid parameters;<br> 2. Failed to apply for memory. |
| [10000003](../../apis-backgroundtasks-kit/errorcode-DeviceUsageStatistics.md#10000003-system-service-operation-failure) | Failed to get system ability manager. |
| [10000004](../../apis-backgroundtasks-kit/errorcode-DeviceUsageStatistics.md#10000004-ipc-failure) | Failed to access the device usage service. |
| [10000006](../../apis-backgroundtasks-kit/errorcode-DeviceUsageStatistics.md#10000006-failed-to-obtain-application-information) | Failed to get the application information. |
| [10000007](../../apis-backgroundtasks-kit/errorcode-DeviceUsageStatistics.md#10000007-time-operation-failure) | Failed to get the system time. |
| [10000008](../../apis-backgroundtasks-kit/errorcode-DeviceUsageStatistics.md#10000008-parameter-check-failed) | Parameter error. Possible cause: 1. Mandatory parameters are left unspecified;<br> 2. Incorrect parameters types; 3. Parameter verification failed. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';
import { usageStatistics } from '@kit.BackgroundTasksKit';

usageStatistics.queryCurrentBundleEvents(0, 20000000000000, 100).then((res: Array<usageStatistics.BundleEvents>) => {
  console.info('BUNDLE_ACTIVE queryCurrentBundleEvents promise success.');
  for (let i = 0; i < res.length; i++) {
    console.info('BUNDLE_ACTIVE queryCurrentBundleEvents promise number : ' + (i + 1));
    console.info('BUNDLE_ACTIVE queryCurrentBundleEvents promise result ' + JSON.stringify(res[i]));
  }
}).catch((err: BusinessError) => {
  console.error('BUNDLE_ACTIVE queryCurrentBundleEvents promise failed. code is: ' + err.code + ',message is: ' + err.message);
});

```

