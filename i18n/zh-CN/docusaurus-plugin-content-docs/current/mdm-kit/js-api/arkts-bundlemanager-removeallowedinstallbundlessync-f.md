# removeAllowedInstallBundlesSync

## removeAllowedInstallBundlesSync

```TypeScript
function removeAllowedInstallBundlesSync(admin: Want, appIds: Array<string>, accountId?: number): void
```

在应用程序包安装允许名单中移除应用，在允许名单存在的情况下，不在应用程序包安装允许名单中的应用不允许在当前/指定用户下安装。

**起始版本：** 12

**需要权限：** 

 ohos.permission.ENTERPRISE_SET_BUNDLE_INSTALL_POLICY

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Customization.EnterpriseDeviceManager

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| admin | Want | 是 | 企业设备管理扩展组件。Want中必须包含企业设备管理扩展能力的abilityName和所在应用的bundleName。 |
| appIds | Array&lt;string> | 是 | 应用ID数组。 说明： 从API version 21版本开始，数组中的元素支持使用  [appId](docroot://quick-start/common-problem-of-application.md#什么是appid)和  [appIdentifier](docroot://quick-start/common-problem-of-application.md#什么是appidentifier)，仅移除传入的  [appId](docroot://quick-start/common-problem-of-application.md#什么是appid)（或  [appIdentifier](docroot://quick-start/common-problem-of-application.md#什么是appidentifier)），不会移除同一应用的  [appIdentifier](docroot://quick-start/common-problem-of-application.md#什么是appidentifier)（或  [appId](docroot://quick-start/common-problem-of-application.md#什么是appid)）。API version 20及之前版本，数组中的元素只支持使用  [appId](docroot://quick-start/common-problem-of-application.md#什么是appid)。 |
| accountId | number | 否 |  |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 9200001 | The application is not an administrator application of the device. |
| 9200002 | The administrator application does not have permission to manage the device. |
| 201 | Permission verification failed.  The application does not have the permission required to call the API. |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types; 3. Parameter verification failed. |

**示例：**

```TypeScript
import { bundleManager } from '@kit.MDMKit';
import { Want } from '@kit.AbilityKit';

let wantTemp: Want = {
  // 需根据实际情况进行替换
  bundleName: 'com.example.myapplication',
  abilityName: 'EnterpriseAdminAbility'
};
// 需根据实际情况进行替换
let appIds: Array<string> = ['com.example.******_******/******5t5CoBM='];

try {
  bundleManager.removeAllowedInstallBundlesSync(wantTemp, appIds, 100);
  console.info('Succeeded in removing allowed install bundles.');
} catch (err) {
  console.error(`Failed to remove allowed install bundles. Code is ${err.code}, message is ${err.message}`);
}

```

