# queryNotificationEventStats

## queryNotificationEventStats

```TypeScript
function queryNotificationEventStats(
    begin: long,
    end: long,
    callback: AsyncCallback<Array<DeviceEventStats>>
  ): void
```

通过指定起始和结束时间，查询所有应用的通知次数，使用Callback异步回调。

**Since:** 9

**Required permissions:** 

 ohos.permission.BUNDLE_ACTIVE_INFO

**System capability:** SystemCapability.ResourceSchedule.UsageStatistics.App

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| begin | long | Yes | 起始时间，单位：ms。 |
| end | long | Yes | 结束时间，单位：ms。 |
| callback | AsyncCallback&lt;Array&lt;DeviceEventStats>> | Yes | 回调函数。  当查询成功，err为undefined，data为指定起始和结束时间段内，所有应用的通知次数；否则为错误对象。 |

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
| 10000007 | Failed to get the system time. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';
import { usageStatistics } from '@kit.BackgroundTasksKit';

usageStatistics.queryNotificationEventStats(0, 20000000000000, (err: BusinessError, res: Array<usageStatistics.DeviceEventStats>) => {
  if(err) {
    console.error('BUNDLE_ACTIVE queryNotificationEventStats callback failed. code is: ' + err.code + ',message is: ' + err.message);
  } else {
    console.info('BUNDLE_ACTIVE queryNotificationEventStats callback success.');
    console.info('BUNDLE_ACTIVE queryNotificationEventStats callback result ' + JSON.stringify(res));
  }
});

```

## queryNotificationEventStats

```TypeScript
function queryNotificationEventStats(begin: long, end: long): Promise<Array<DeviceEventStats>>
```

通过指定起始和结束时间，查询所有应用的通知次数，使用Promise异步回调。

**Since:** 9

**Required permissions:** 

 ohos.permission.BUNDLE_ACTIVE_INFO

**System capability:** SystemCapability.ResourceSchedule.UsageStatistics.App

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| begin | long | Yes | 起始时间，单位：ms。 |
| end | long | Yes | 结束时间，单位：ms。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;Array&lt;DeviceEventStats>> | Promise对象。返回指定起始和结束时间段内，所有应用的通知次数。 |

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
| 10000007 | Failed to get the system time. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';
import { usageStatistics } from '@kit.BackgroundTasksKit';

usageStatistics.queryNotificationEventStats(0, 20000000000000).then((res: Array<usageStatistics.DeviceEventStats>) => {
  console.info('BUNDLE_ACTIVE queryNotificationEventStats promise success.');
  console.info('BUNDLE_ACTIVE queryNotificationEventStats promise result ' + JSON.stringify(res));
}).catch((err: BusinessError) => {
  console.error('BUNDLE_ACTIVE queryNotificationEventStats promise failed. code is: ' + err.code + ',message is: ' + err.message);
});

```

