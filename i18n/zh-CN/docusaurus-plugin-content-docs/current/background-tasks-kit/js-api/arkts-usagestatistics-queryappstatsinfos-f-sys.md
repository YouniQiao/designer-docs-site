# queryAppStatsInfos

## queryAppStatsInfos

```TypeScript
function queryAppStatsInfos(begin: long, end: long): Promise<AppStatsMap>
```

通过指定起始和结束时间，查询应用使用时长的具体信息（包含分身应用），统计的最小颗粒度是天。使用Promise异步回调。

**起始版本：** 15

**需要权限：** 

 ohos.permission.BUNDLE_ACTIVE_INFO

**系统能力：** SystemCapability.ResourceSchedule.UsageStatistics.App

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| begin | long | 是 | 起始时间，单位：ms。 |
| end | long | 是 | 结束时间，单位：ms。 |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;AppStatsMap> | Promise对象。返回指定时间段内应用使用的具体信息。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied. |
| 202 | Not System App. |
| 401 | Parameter error. Possible cause: Parameter verification failed. |
| 801 | Capability not supported. |
| 10000001 | Memory operation failed. |
| 10000002 | Failed to write data into parcel. Possible reasons: 1. Invalid parameters;  2. Failed to apply for memory. |
| 10000003 | Failed to get system ability manager. |
| 10000004 | Failed to access the device usage service. |
| 10000006 | Failed to get the application information. |
| 10000007 | Failed to get the system time. |

**示例：**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';
import { usageStatistics } from '@kit.BackgroundTasksKit';

usageStatistics.queryAppStatsInfos(0, 20000000000000).then((res:usageStatistics.AppStatsMap) => {
  console.info('queryAppStatsInfos promise success.');
  console.info('queryAppStatsInfos promise result ' + JSON.stringify(res));
}).catch((err: BusinessError) => {
  console.error('queryAppStatsInfos promise failed. code is: ' + err.code + ',message is: ' + err.message);
});

```

