# setControlledAppLists

## setControlledAppLists

```TypeScript
function setControlledAppLists(appLists: Array<string>, userId?: number): Promise<void>
```

Set the list of applications that are subject to enterprise DLP control.

**起始版本：** 26.0.0

**需要权限：** 

 ohos.permission.DLP_POLICY_MANAGER

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Security.DataLossPrevention

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| appLists | Array&lt;string> | 是 | The appIdentifiers of applications to be put under controlled  The maximum length is 100.  The value range of Array is [0, 100], and the value range of String is [0, 4096]. |
| userId | number | 否 |  |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | Promise that returns no value. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied. |
| 801 | Capability not supported. |
| 19100001 | Invalid parameter value. |
| 19100011 | The system ability works abnormally. |
| 19100023 | The specified userId is inconsistent with the current userId. |
| 19100024 | The specified userId belongs to a personal space user and  cannot be managed. |

**示例：**

```TypeScript
import { dlpPermission } from '@kit.DataProtectionKit';
import { BusinessError } from '@kit.BasicServicesKit';

let appList: Array<string> = ["appId1", "appId2"];
let userId: number = 100;
dlpPermission.setControlledAppLists(appList, userId).then(() => {
  console.info("Successfully set controlled appLists.");
}).catch((error: BusinessError) => {
  console.error(error.message);
}).finally(() => {
  console.info("Completed set controlled appLists operation.");
});

```

