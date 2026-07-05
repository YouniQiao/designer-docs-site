# startAdminProvision

## startAdminProvision

```TypeScript
function startAdminProvision(admin: Want, type: AdminType, context: common.Context, parameters: Record<string, string>): void
```

设备管理应用拉起BYOD管理员激活页面进行激活。

**Since:** 15

**Required permissions:** 

 ohos.permission.START_PROVISIONING_MESSAGE

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Customization.EnterpriseDeviceManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| admin | Want | Yes | 企业设备管理扩展组件。Want中必须包含企业设备管理扩展能力的abilityName和所在应用的bundleName。 |
| type | AdminType | Yes | 激活的设备管理应用类型，仅支持ADMIN_TYPE_BYOD类型。 |
| context | common.Context | Yes | 管理应用的上下文信息。 |
| parameters | Record&lt;string, string> | Yes | 自定义参数信息，其中Key值必须包含："activateId"，可以包含"customizedInfo"、"  localDeactivationPolicy"。 - activateId：项目激活ID。 - customizedInfo：企业自定义信息。 - localDeactivationPolicy：  从API version 22开始支持，本地延迟取消激活时间（单位：小时）。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission verification failed. The application does not have the permission  required to call the API. |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types; 3. Parameter verification failed. |

**Example**

```TypeScript
import { adminManager } from '@kit.MDMKit';
import { common, Want } from '@kit.AbilityKit';

let wantTemp: Want = {
  // Replace with actual values.
  bundleName: 'com.example.myapplication',
  abilityName: 'EnterpriseAdminAbility'
};
let recordParameters: Record<string, string> = {
  // Replace with actual values.
  "activateId": "activateId testValue",
  "customizedInfo": "customizedInfo testValue"
};
// Obtain the context from the component and ensure that the return value of this.getUIContext().getHostContext() is UIAbilityContext.
const context = this.getUIContext().getHostContext() as common.UIAbilityContext;
try {
  console.info('context:' + JSON.stringify(context));
  adminManager.startAdminProvision(wantTemp, adminManager.AdminType.ADMIN_TYPE_BYOD, context, recordParameters);
  console.info('startAdminProvision::success');
} catch (error) {
  console.error('startAdminProvision::errorCode: ' + error.code + ' errorMessage: ' + error.message);
}

```

