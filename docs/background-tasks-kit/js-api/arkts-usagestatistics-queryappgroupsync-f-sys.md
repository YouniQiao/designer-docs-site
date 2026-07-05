# queryAppGroupSync

## queryAppGroupSync

```TypeScript
function queryAppGroupSync(): int
```

查询当前应用的优先级分组，使用同步方式返回。

**Since:** 10

**Required permissions:** 

 ohos.permission.BUNDLE_ACTIVE_INFO

**System capability:** SystemCapability.ResourceSchedule.UsageStatistics.AppGroup

**System API:** This is a system API.

**Return value:**

| Type | Description |
| --- | --- |
| int | 返回当前应用优先级分组结果，值越小，优先级越高。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 202 | Not System App. |
| 801 | Capability not supported. |
| 10000001 | Memory operation failed. |
| 10000002 | Failed to write data into parcel. Possible reasons: 1. Invalid parameters;  2. Failed to apply for memory. |
| 10000003 | Failed to get system ability manager. |
| 10000004 | Failed to access the device usage service. |
| 10000005 | Application is not installed. |
| 10000006 | Failed to get the application information. |
| 10100002 | Failed to get the application group information. |

**Example**

```TypeScript
import { usageStatistics } from '@kit.BackgroundTasksKit';

let priorityGroup: number = usageStatistics.queryAppGroupSync();

```

## queryAppGroupSync

```TypeScript
function queryAppGroupSync(bundleName: string): int
```

查询指定bundleName应用的优先级分组，使用同步方式返回。

**Since:** 10

**Required permissions:** 

 ohos.permission.BUNDLE_ACTIVE_INFO

**System capability:** SystemCapability.ResourceSchedule.UsageStatistics.AppGroup

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| bundleName | string | Yes | 应用的bundleName。 |

**Return value:**

| Type | Description |
| --- | --- |
| int | 返回应用的优先级分组结果，值越小，优先级越高。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 202 | Not System App. |
| 401 | Parameter error. Possible cause: Parameter verification failed. |
| 801 | Capability not supported. |
| 10000001 | Memory operation failed. |
| 10000002 | Failed to write data into parcel. Possible reasons: 1. Invalid parameters;  2. Failed to apply for memory. |
| 10000003 | Failed to get system ability manager. |
| 10000004 | Failed to access the device usage service. |
| 10000005 | Application is not installed. |
| 10000006 | Failed to get the application information. |
| 10100002 | Failed to get the application group information. |

**Example**

```TypeScript
import { usageStatistics } from '@kit.BackgroundTasksKit';

let priorityGroup: number = usageStatistics.queryAppGroupSync("com.ohos.camera");

```

