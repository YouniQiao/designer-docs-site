# queryBundleEvents

## queryBundleEvents

```TypeScript
function queryBundleEvents(begin: long, end: long, callback: AsyncCallback<Array<BundleEvents>>): void
```

通过指定起始和结束时间，查询所有应用的事件集合，使用Callback异步回调。

**起始版本：** 9

**需要权限：** 

 ohos.permission.BUNDLE_ACTIVE_INFO

**系统能力：** SystemCapability.ResourceSchedule.UsageStatistics.App

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| begin | long | 是 | 起始时间，单位：ms。 |
| end | long | 是 | 结束时间，单位：ms。 |
| callback | AsyncCallback&lt;Array&lt;BundleEvents>> | 是 | 回调方法。  当查询成功，err为undefined，data为起始和结束时间段内，所有应用的事件集合；否则为错误对象。 |

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
| 10000007 | Failed to get the system time. |

**示例：**

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

**起始版本：** 9

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
| Promise&lt;Array&lt;BundleEvents>> | Promise对象。返回起始和结束时间段内，所有应用的事件集合。 |

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
| 10000007 | Failed to get the system time. |

**示例：**

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

**起始版本：** 26.0.0

**需要权限：** 

 ohos.permission.BUNDLE_ACTIVE_INFO

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.ResourceSchedule.UsageStatistics.App

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| begin | long | 是 | 起始时间。 单位：ms |
| end | long | 是 | 结束时间。 单位：ms |
| maxNum | int | 是 | 返回的事件的条数。 取值范围：[1, 1000]。 |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;Array&lt;BundleEvents>> | Promise对象，返回起始和结束时间段内，所有应用的事件集合。 |

**错误码：**

| 错误码ID | 错误信息 |
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

**示例：**

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

