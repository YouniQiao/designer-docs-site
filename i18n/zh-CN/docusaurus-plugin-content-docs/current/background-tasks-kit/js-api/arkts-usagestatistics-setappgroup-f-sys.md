# setAppGroup

## setAppGroup

```TypeScript
function setAppGroup(bundleName: string, newGroup: GroupType, callback: AsyncCallback<void>): void
```

将指定bundleName应用的分组设置为newGroup，仅支持当前应用为其他应用设置，使用CallBack异步回调。

**起始版本：** 9

**需要权限：** 

 ohos.permission.BUNDLE_ACTIVE_INFO

**系统能力：** SystemCapability.ResourceSchedule.UsageStatistics.AppGroup

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| bundleName | string | 是 | 应用的bundleName。 |
| newGroup | GroupType | 是 | 应用分组类型。 |
| callback | AsyncCallback&lt;void> | 是 | 回调函数。  当设置成功，err为undefined；否则为错误对象。 |

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
| 10100001 | Repeated operation on the application group. |

**示例：**

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

将指定bundleName应用的分组设置为newGroup，仅支持当前应用为其他应用设置，使用Promise异步回调。

**起始版本：** 9

**需要权限：** 

 ohos.permission.BUNDLE_ACTIVE_INFO

**系统能力：** SystemCapability.ResourceSchedule.UsageStatistics.AppGroup

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| bundleName | string | 是 | 应用的bundleName。 |
| newGroup | GroupType | 是 | 应用分组类型。 |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | 无返回结果的Promise对象。 |

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
| 10100001 | Repeated operation on the application group. |

**示例：**

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

