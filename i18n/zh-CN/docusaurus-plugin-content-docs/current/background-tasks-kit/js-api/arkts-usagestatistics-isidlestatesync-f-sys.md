# isIdleStateSync

## isIdleStateSync

```TypeScript
function isIdleStateSync(bundleName: string): boolean
```

查询指定的应用是否为常用应用（GroupType值≤30），使用同步方式返回。

**起始版本：** 10

**需要权限：** 

 ohos.permission.BUNDLE_ACTIVE_INFO

**系统能力：** SystemCapability.ResourceSchedule.UsageStatistics.AppGroup

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| bundleName | string | 是 | 应用的bundleName。 |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| boolean | 若应用为常用应用，返回true；若指定应用不是常用应用或bundleName无效，则返回false。 |

**错误码：**

| 错误码ID | 错误信息 |
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

**示例：**

```TypeScript
import { usageStatistics } from '@kit.BackgroundTasksKit';

let isIdleState: boolean = usageStatistics.isIdleStateSync("com.ohos.camera");

```

