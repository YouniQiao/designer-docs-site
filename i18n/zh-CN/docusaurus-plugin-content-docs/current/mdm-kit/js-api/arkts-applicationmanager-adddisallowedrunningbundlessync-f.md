# addDisallowedRunningBundlesSync

## addDisallowedRunningBundlesSync

```TypeScript
function addDisallowedRunningBundlesSync(
    admin: Want,
    appIds: Array<string>,
    accountId?: number
  ): void
```

添加应用至应用运行禁止名单，添加至禁止名单的应用不允许在当前/指定用户下运行。从API version 21开始，如果应用运行允许名单 [addallowedRunningBundles]applicationManager.addAllowedRunningBundles非空，就不能再通过本接口添加应用运行禁止名单，否则会报9200010冲突错误 码。

**起始版本：** 12

**需要权限：** 

 ohos.permission.ENTERPRISE_MANAGE_APPLICATION

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Customization.EnterpriseDeviceManager

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| admin | Want | 是 | 企业设备管理扩展组件。Want中必须包含企业设备管理扩展能力的abilityName和所在应用的bundleName。 |
| appIds | Array&lt;string> | 是 | 应用ID数组，指定具体应用。 说明： 从API version 21版本开始，支持传入应用的  [appId](docroot://quick-start/common-problem-of-application.md#什么是appid)和  [appIdentifier](docroot://quick-start/common-problem-of-application.md#什么是appidentifier)，推荐使用  [appIdentifier](docroot://quick-start/common-problem-of-application.md#什么是appidentifier)。API version 20及之前版本，仅支  持[appId](docroot://quick-start/common-problem-of-application.md#什么是appid)。 |
| accountId | number | 否 |  |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 9200001 | The application is not an administrator application of the device. |
| 9200002 | The administrator application does not have permission to manage the device. |
| 201 | Permission verification failed.  The application does not have the permission required to call the API. |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types; 3. Parameter verification failed. |
| 9200010 | A conflict policy has been configured. [since 21] |

**示例：**

```TypeScript
import { applicationManager } from '@kit.MDMKit';
import { Want } from '@kit.AbilityKit';

let wantTemp: Want = {
  // 需根据实际情况进行替换
  bundleName: 'com.example.myapplication',
  abilityName: 'EnterpriseAdminAbility'
};
// 需根据实际情况进行替换
let appIds: Array<string> = ['com.example.******_******/******5t5CoBM='];

try {
  applicationManager.addDisallowedRunningBundlesSync(wantTemp, appIds);
  console.info('Succeeded in adding disallowed running bundles.');
} catch (err) {
  console.error(`Failed to add disallowed running bundles. Code is ${err.code}, message is ${err.message}`);
}

```

