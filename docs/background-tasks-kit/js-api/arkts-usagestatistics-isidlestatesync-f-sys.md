# isIdleStateSync

## isIdleStateSync

```TypeScript
function isIdleStateSync(bundleName: string): boolean
```

查询指定的应用是否为常用应用（GroupType值≤30），使用同步方式返回。

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
| boolean | 若应用为常用应用，返回true；若指定应用不是常用应用或bundleName无效，则返回false。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 202 | Not System App. |
| 401 | Parameter error. Possible cause: 1. Mandatory parameters are left unspecified;  2. Incorrect parameters types; 3. Parameter verification failed. |
| 801 | Capability not supported. |
| 10000001 | Memory operation failed. |
| 10000002 | Failed to write data into parcel. Possible reasons: 1. Invalid parameters;  2. Failed to apply for memory. |
| 10000003 | Failed to get system ability manager. |
| 10000004 | Failed to access the device usage service. |
| 10000006 | Failed to get the application information. |

**Example**

```TypeScript
import { usageStatistics } from '@kit.BackgroundTasksKit';

let isIdleState: boolean = usageStatistics.isIdleStateSync("com.ohos.camera");

```

