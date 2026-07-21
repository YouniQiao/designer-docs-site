# queryAppGroupSync (System API)

## Modules to Import

```TypeScript
import { usageStatistics } from '@kit.BackgroundTasksKit';
```

<a id="queryappgroupsync"></a>
## queryAppGroupSync

```TypeScript
function queryAppGroupSync(): number
```

Queries the app group of the calling application.

The priority defined in a priority group restricts the resource usage of an application,for example, restricting the running of background tasks.

**Since:** 10

**Required permissions:** ohos.permission.BUNDLE_ACTIVE_INFO

<!--Device-usageStatistics-function queryAppGroupSync(): int--><!--Device-usageStatistics-function queryAppGroupSync(): int-End-->

**System capability:** SystemCapability.ResourceSchedule.UsageStatistics.AppGroup

**System API:** This is a system API.

**Return value:**

| Type | Description |
| --- | --- |
| number | Returns the app group of the calling application. |

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
import { usageStatistics } from '@kit.BackgroundTasksKit';

let priorityGroup: number = usageStatistics.queryAppGroupSync();

```


<a id="queryappgroupsync-1"></a>
## queryAppGroupSync

```TypeScript
function queryAppGroupSync(bundleName: string): number
```

Queries the usage priority group by bundleName.

The priority defined in a priority group restricts the resource usage of an application,for example, restricting the running of background tasks.

**Since:** 10

**Required permissions:** ohos.permission.BUNDLE_ACTIVE_INFO

<!--Device-usageStatistics-function queryAppGroupSync(bundleName: string): int--><!--Device-usageStatistics-function queryAppGroupSync(bundleName: string): int-End-->

**System capability:** SystemCapability.ResourceSchedule.UsageStatistics.AppGroup

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| bundleName | string | Yes | name of the application. |

**Return value:**

| Type | Description |
| --- | --- |
| number | the usage priority group of the calling application. |

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
import { usageStatistics } from '@kit.BackgroundTasksKit';

let priorityGroup: number = usageStatistics.queryAppGroupSync("com.ohos.camera");

```

