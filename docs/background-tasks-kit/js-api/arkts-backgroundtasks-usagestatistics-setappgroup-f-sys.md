# setAppGroup (System API)

## Modules to Import

```TypeScript
import { usageStatistics } from '@kit.BackgroundTasksKit';
```

## setAppGroup

```TypeScript
function setAppGroup(bundleName: string, newGroup: GroupType, callback: AsyncCallback<void>): void
```

Set app group by bundleName.

**Since:** 9

**Required permissions:** ohos.permission.BUNDLE_ACTIVE_INFO

<!--Device-usageStatistics-function setAppGroup(bundleName: string, newGroup: GroupType, callback: AsyncCallback<void>): void--><!--Device-usageStatistics-function setAppGroup(bundleName: string, newGroup: GroupType, callback: AsyncCallback<void>): void-End-->

**System capability:** SystemCapability.ResourceSchedule.UsageStatistics.AppGroup

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| bundleName | string | Yes | name of the application. |
| newGroup | [GroupType](arkts-backgroundtasks-usagestatistics-grouptype-e-sys.md) | Yes | the group of the application whose name is bundleName. |
| callback | [AsyncCallback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-asynccallback-i.md)<void> | Yes | Callback used to return the result.If the query is successful, **err** is **undefined**. Otherwise, **err** is an error object. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied. |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Not System App. |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible cause: 1. Mandatory parameters are left unspecified;<br> 2. Incorrect parameters types; 3. Parameter verification failed. |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported. |
| [10000001](../../apis-backgroundtasks-kit/errorcode-DeviceUsageStatistics.md#10000001-memory-operation-failure) | Memory operation failed. |
| [10000002](../../apis-backgroundtasks-kit/errorcode-DeviceUsageStatistics.md#10000002-ipc-parcel-write-failure) | Failed to write data into parcel. Possible reasons: 1. Invalid parameters;<br> 2. Failed to apply for memory. |
| [10000003](../../apis-backgroundtasks-kit/errorcode-DeviceUsageStatistics.md#10000003-system-service-operation-failure) | Failed to get system ability manager. |
| [10000004](../../apis-backgroundtasks-kit/errorcode-DeviceUsageStatistics.md#10000004-ipc-failure) | Failed to access the device usage service. |
| [10000006](../../apis-backgroundtasks-kit/errorcode-DeviceUsageStatistics.md#10000006-failed-to-obtain-application-information) | Failed to get the application information. |
| [10100001](../../apis-backgroundtasks-kit/errorcode-DeviceUsageStatistics.md#10100001-duplicate-application-group-operation) | Repeated operation on the application group. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';
import { usageStatistics } from '@kit.BackgroundTasksKit';

let bundleName: string = "com.example.deviceUsageStatistics";
let newGroup = usageStatistics.GroupType.DAILY_GROUP;

usageStatistics.setAppGroup(bundleName, newGroup, (err: BusinessError) => {
  if(err) {
    console.error('BUNDLE_ACTIVE setAppGroup callback failed. code is: ' + err.code + ',message is: ' + err.message);
  } else {
    console.info('BUNDLE_ACTIVE setAppGroup callback succeeded.');
  }
});

```


## setAppGroup

```TypeScript
function setAppGroup(bundleName: string, newGroup: GroupType): Promise<void>
```

Set app group by bundleName.

**Since:** 9

**Required permissions:** ohos.permission.BUNDLE_ACTIVE_INFO

<!--Device-usageStatistics-function setAppGroup(bundleName: string, newGroup: GroupType): Promise<void>--><!--Device-usageStatistics-function setAppGroup(bundleName: string, newGroup: GroupType): Promise<void>-End-->

**System capability:** SystemCapability.ResourceSchedule.UsageStatistics.AppGroup

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| bundleName | string | Yes | name of the application. |
| newGroup | [GroupType](arkts-backgroundtasks-usagestatistics-grouptype-e-sys.md) | Yes | the group of the application whose name is bundleName. |

**Return value:**

| Type | Description |
| --- | --- |
| [Promise](../../apis-na/arkts-apis/arkts-na-lib-es5-promise-i.md)<void> | the promise returned by setAppGroup. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied. |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Not System App. |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible cause: 1. Mandatory parameters are left unspecified;<br> 2. Incorrect parameters types; 3. Parameter verification failed. |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported. |
| [10000001](../../apis-backgroundtasks-kit/errorcode-DeviceUsageStatistics.md#10000001-memory-operation-failure) | Memory operation failed. |
| [10000002](../../apis-backgroundtasks-kit/errorcode-DeviceUsageStatistics.md#10000002-ipc-parcel-write-failure) | Failed to write data into parcel. Possible reasons: 1. Invalid parameters;<br> 2. Failed to apply for memory. |
| [10000003](../../apis-backgroundtasks-kit/errorcode-DeviceUsageStatistics.md#10000003-system-service-operation-failure) | Failed to get system ability manager. |
| [10000004](../../apis-backgroundtasks-kit/errorcode-DeviceUsageStatistics.md#10000004-ipc-failure) | Failed to access the device usage service. |
| [10000006](../../apis-backgroundtasks-kit/errorcode-DeviceUsageStatistics.md#10000006-failed-to-obtain-application-information) | Failed to get the application information. |
| [10100001](../../apis-backgroundtasks-kit/errorcode-DeviceUsageStatistics.md#10100001-duplicate-application-group-operation) | Repeated operation on the application group. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';
import { usageStatistics } from '@kit.BackgroundTasksKit';

let bundleName: string = "com.example.deviceUsageStatistics";
let newGroup = usageStatistics.GroupType.DAILY_GROUP;

usageStatistics.setAppGroup(bundleName, newGroup).then( () => {
  console.info('BUNDLE_ACTIVE setAppGroup promise succeeded.');
}).catch((err: BusinessError) => {
  console.error('BUNDLE_ACTIVE setAppGroup promise failed. code is: ' + err.code + ',message is: ' + err.message);
});

```

