# queryBundleEvents

## queryBundleEvents

```TypeScript
function queryBundleEvents(begin: long, end: long, callback: AsyncCallback<Array<BundleEvents>>): void
```

通过指定起始和结束时间，查询所有应用的事件集合，使用Callback异步回调。

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
| callback | AsyncCallback&lt;Array&lt;BundleEvents>> | Yes | 回调方法。  当查询成功，err为undefined，data为起始和结束时间段内，所有应用的事件集合；否则为错误对象。 |

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

usageStatistics.queryBundleEvents(0, 20000000000000, (err: BusinessError, res: Array<usageStatistics.BundleEvents>) => {
  if (err) {
    console.error('BUNDLE_ACTIVE queryBundleEvents callback failed. code is: ' + err.code + ',message is: ' + err.message);
  } else {
    console.info('BUNDLE_ACTIVE queryBundleEvents callback success.');
    for (let i = 0; i < res.length; i++) {
      console.info('BUNDLE_ACTIVE queryBundleEvents callback number : ' + (i + 1));
      console.info('BUNDLE_ACTIVE queryBundleEvents callback result ' + JSON.stringify(res[i]));
    }
  }
});

```

## queryBundleEvents

```TypeScript
function queryBundleEvents(begin: long, end: long): Promise<Array<BundleEvents>>
```

通过指定起始和结束时间，查询所有应用的事件集合，使用Promise异步回调。

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
| Promise&lt;Array&lt;BundleEvents>> | Promise对象。返回起始和结束时间段内，所有应用的事件集合。 |

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

usageStatistics.queryBundleEvents(0, 20000000000000).then((res: Array<usageStatistics.BundleEvents>) => {
  console.info('BUNDLE_ACTIVE queryBundleEvents promise success.');
  for (let i = 0; i < res.length; i++) {
    console.info('BUNDLE_ACTIVE queryBundleEvents promise number : ' + (i + 1));
    console.info('BUNDLE_ACTIVE queryBundleEvents promise result ' + JSON.stringify(res[i]));
  }
}).catch((err: BusinessError) => {
  console.error('BUNDLE_ACTIVE queryBundleEvents promise failed. code is: ' + err.code + ',message is: ' + err.message);
});

```

## queryBundleEvents

```TypeScript
function queryBundleEvents(begin: long, end: long, maxNum: int): Promise<Array<BundleEvents>>
```

通过指定起始时间、结束时间及最大返回条数，查询指定时间段内所有应用的事件集合。若条数大于maxNum，则按事件发生时间降序排列，返回前maxNum条，否则返回所有数据。使用Promise异步回调。

**Since:** 26.0.0

**Required permissions:** 

 ohos.permission.BUNDLE_ACTIVE_INFO

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.ResourceSchedule.UsageStatistics.App

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| begin | long | Yes | 起始时间。 单位：ms |
| end | long | Yes | 结束时间。 单位：ms |
| maxNum | int | Yes | 返回的事件的条数。 取值范围：[1, 1000]。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;Array&lt;BundleEvents>> | Promise对象，返回起始和结束时间段内，所有应用的事件集合。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 202 | Not System App. |
| 10000001 | Memory operation failed. |
| 10000002 | Failed to write data into parcel. Possible reasons: 1. Invalid parameters;  2. Failed to apply for memory. |
| 10000003 | Failed to get system ability manager. |
| 10000004 | Failed to access the device usage service. |
| 10000006 | Failed to get the application information. |
| 10000007 | Failed to get the system time. |
| 10000008 | Parameter error. Possible cause: 1. Mandatory parameters are left  unspecified;  2. Incorrect parameters types; 3. Parameter verification failed. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';
import { usageStatistics } from '@kit.BackgroundTasksKit';

usageStatistics.queryBundleEvents(0, 20000000000000, 100).then((res: Array<usageStatistics.BundleEvents>) => {
  console.info('BUNDLE_ACTIVE queryBundleEvents promise success.');
  for (let i = 0; i < res.length; i++) {
    console.info('BUNDLE_ACTIVE queryBundleEvents promise number : ' + (i + 1));
    console.info('BUNDLE_ACTIVE queryBundleEvents promise result ' + JSON.stringify(res[i]));
  }
}).catch((err: BusinessError) => {
  console.error('BUNDLE_ACTIVE queryBundleEvents promise failed. code is: ' + err.code + ',message is: ' + err.message);
});

```

