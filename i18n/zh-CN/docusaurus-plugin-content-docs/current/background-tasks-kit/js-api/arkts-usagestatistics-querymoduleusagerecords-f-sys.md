# queryModuleUsageRecords

## queryModuleUsageRecords

```TypeScript
function queryModuleUsageRecords(maxNum: int, callback: AsyncCallback<Array<HapModuleInfo>>): void
```

根据设置的maxNum，查询FA模型下各应用不用Hap包的使用记录。若Hap包中存在FA卡片，使用信息中也包含卡片信息。使用Callback异步回调。

**起始版本：** 9

**需要权限：** 

 ohos.permission.BUNDLE_ACTIVE_INFO

**系统能力：** SystemCapability.ResourceSchedule.UsageStatistics.App

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| maxNum | int | 是 | 使用记录的条数，取值范围为[1，1000]。 |
| callback | AsyncCallback&lt;Array&lt;HapModuleInfo>> | 是 | 回调方法。  当查询成功，err为undefined，data为FA模型下各应用不用Hap包的使用记录（不超过maxNum条）；否则为错误对象。 |

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

usageStatistics.queryModuleUsageRecords(1000, (err: BusinessError, res: Array<usageStatistics.HapModuleInfo>) => {
  if(err) {
    console.error('BUNDLE_ACTIVE queryModuleUsageRecords callback failed. code is: ' + err.code + ',message is: ' + err.message);
  } else {
    console.info('BUNDLE_ACTIVE queryModuleUsageRecords callback succeeded.');
    for (let i = 0; i < res.length; i++) {
      console.info('BUNDLE_ACTIVE queryModuleUsageRecords callback number : ' + (i + 1));
      console.info('BUNDLE_ACTIVE queryModuleUsageRecords callback result ' + JSON.stringify(res[i]));
    }
  }
});

```

## queryModuleUsageRecords

```TypeScript
function queryModuleUsageRecords(maxNum: int): Promise<Array<HapModuleInfo>>
```

根据设置的maxNum，查询FA模型下各应用不用Hap包的使用记录。若Hap包中存在FA卡片，使用信息中也包含卡片信息。使用Promise异步回调。

**起始版本：** 9

**需要权限：** 

 ohos.permission.BUNDLE_ACTIVE_INFO

**系统能力：** SystemCapability.ResourceSchedule.UsageStatistics.App

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| maxNum | int | 是 | 使用记录的条数，取值范围为[1，1000]。 |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;Array&lt;HapModuleInfo>> | Promise对象，返回不超过maxNum条，FA模型下各应用不用Hap包的使用记录。 |

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

usageStatistics.queryModuleUsageRecords(1000).then((res: Array<usageStatistics.HapModuleInfo>) => {
  console.info('BUNDLE_ACTIVE queryModuleUsageRecords promise succeeded');
  for (let i = 0; i < res.length; i++) {
    console.info('BUNDLE_ACTIVE queryModuleUsageRecords promise number : ' + (i + 1));
    console.info('BUNDLE_ACTIVE queryModuleUsageRecords promise result ' + JSON.stringify(res[i]));
  }
}).catch((err: BusinessError) => {
  console.error('BUNDLE_ACTIVE queryModuleUsageRecords promise failed. code is: ' + err.code + ',message is: ' + err.message);
});

```

## queryModuleUsageRecords

```TypeScript
function queryModuleUsageRecords(callback: AsyncCallback<Array<HapModuleInfo>>): void
```

查询FA模型下各应用不用Hap包的使用记录（不超过1000条）。若Hap包中存在FA卡片，使用信息中也包含卡片信息。使用CallBack异步回调。

**起始版本：** 9

**需要权限：** 

 ohos.permission.BUNDLE_ACTIVE_INFO

**系统能力：** SystemCapability.ResourceSchedule.UsageStatistics.App

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;Array&lt;HapModuleInfo>> | 是 | 回调函数。  当查询成功，err为undefined，data为FA模型下各应用不用Hap包的使用记录（不超过1000条）；否则为错误对象。 |

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

usageStatistics.queryModuleUsageRecords((err: BusinessError, res: Array<usageStatistics.HapModuleInfo>) => {
  if(err) {
    console.error('BUNDLE_ACTIVE queryModuleUsageRecords callback failed. code is: ' + err.code + ',message is: ' + err.message);
  } else {
    console.info('BUNDLE_ACTIVE queryModuleUsageRecords callback succeeded.');
    for (let i = 0; i < res.length; i++) {
      console.info('BUNDLE_ACTIVE queryModuleUsageRecords callback number : ' + (i + 1));
      console.info('BUNDLE_ACTIVE queryModuleUsageRecords callback result ' + JSON.stringify(res[i]));
    }
  }
});

```

## queryModuleUsageRecords

```TypeScript
function queryModuleUsageRecords(): Promise<Array<HapModuleInfo>>
```

查询FA模型下各应用不用Hap包的使用记录（不超过1000条）。若Hap包中存在FA卡片，使用信息中也包含卡片信息。使用Promise异步回调。 使用Promise形式返回不超过1000条FA使用记录，FA使用记录由近及远排序。

**起始版本：** 9

**需要权限：** 

 ohos.permission.BUNDLE_ACTIVE_INFO

**系统能力：** SystemCapability.ResourceSchedule.UsageStatistics.App

**系统接口：** 此接口为系统接口。

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;Array&lt;HapModuleInfo>> | Promise对象。返回FA模型下各应用不用Hap包的使用记录（不超过1000条）。 |

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
// 无maxNum参数调用方式
import { BusinessError } from '@kit.BasicServicesKit';
import { usageStatistics } from '@kit.BackgroundTasksKit';

usageStatistics.queryModuleUsageRecords().then((res: Array<usageStatistics.HapModuleInfo>) => {
  console.info('BUNDLE_ACTIVE queryModuleUsageRecords promise succeeded');
  for (let i = 0; i < res.length; i++) {
    console.info('BUNDLE_ACTIVE queryModuleUsageRecords promise number : ' + (i + 1));
    console.info('BUNDLE_ACTIVE queryModuleUsageRecords promise result ' + JSON.stringify(res[i]));
  }
}).catch((err: BusinessError) => {
  console.error('BUNDLE_ACTIVE queryModuleUsageRecords promise failed. code is: ' + err.code + ',message is: ' + err.message);
});

```

