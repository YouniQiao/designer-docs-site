# startAdminProvision

## Modules to Import

```TypeScript
import { adminManager } from '@ohos.enterprise.adminManager';
```

## startAdminProvision

```TypeScript
function startAdminProvision(admin: Want, type: AdminType, context: common.Context, parameters: Record<string, string>): void
```

Enables the device administrator application to open a page for the BYOD administrator to perform activation.

**Since:** 15

**Required permissions:** ohos.permission.START_PROVISIONING_MESSAGE

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.Customization.EnterpriseDeviceManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| admin | Want | Yes | EnterpriseAdminExtensionAbility. **Want** must contain the ability name of theEnterpriseAdminExtensionAbility and the bundle name of the application. |
| type | AdminType | Yes | Type of the activated device administrator application. Only the **ADMIN_TYPE_BYOD**type is supported. |
| context | common.Context | Yes | Context information of the administrator application. |
| parameters | Record&lt;string, string&gt; | Yes | Custom parameters. The key value must contain **activateId** and mayoptionally include **customizedInfo** and **localDeactivationPolicy**.<br>- **activateId**: project activationID.<br>- **customizedInfo**: enterprise-defined information.<br>- **localDeactivationPolicy**: localdeactivation delay (unit: hour). This parameter is supported since API version 22&lt;!--RP1--&gt;&lt;!--RP1End--&gt;. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission verification failed. The application does not have the permissionrequired to call the API. |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;2. Incorrect parameter types; 3. Parameter verification failed. |

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

