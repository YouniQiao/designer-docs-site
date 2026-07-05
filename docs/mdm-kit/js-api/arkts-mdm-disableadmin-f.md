# disableAdmin

## Modules to Import

```TypeScript
import { adminManager } from '@ohos.enterprise.adminManager';
```

## disableAdmin

```TypeScript
function disableAdmin(admin: Want, userId?: number): Promise<void>
```

Disables a device administrator application for the specified user. This API uses a promise to return the result.

**Since:** 12

**Required permissions:** 
- API version 23+: ohos.permission.MANAGE_ENTERPRISE_DEVICE_ADMIN or ohos.permission.START_PROVISIONING_MESSAGE or ohos.permission.ENTERPRISE_DEACTIVATE_DEVICE_ADMIN
- API version 20 - 22: ohos.permission.MANAGE_ENTERPRISE_DEVICE_ADMIN or ohos.permission.START_PROVISIONING_MESSAGE
- API version 12 - 19: ohos.permission.MANAGE_ENTERPRISE_DEVICE_ADMIN

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.Customization.EnterpriseDeviceManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| admin | Want | Yes | EnterpriseAdminExtensionAbility. **Want** must contain the ability name of theEnterpriseAdminExtensionAbility and the bundle name of the application. When deactivating the BYOD deviceadministrator application, you can pass only the **EnterpriseAdminExtensionAbility** component of the currentapplication. |
| userId | number | No | User ID, which must be greater than or equal to 0.<br> - If **userId** is passed in,this API applies to the specified user.<br> - If **userId** is not passed in, this API applies to the currentuser. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | Promise that returns no value. If the operation fails, an error object will be thrown. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [9200005](../errorcode-enterpriseDeviceManager.md#9200005-failed-to-disable-the-device-administrator-application) | Failed to deactivate the administrator application of the device. |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission verification failed.The application does not have the permission required to call the API. |

**Example**

```TypeScript
import { adminManager } from '@kit.MDMKit';
import { Want } from '@kit.AbilityKit';
import { BusinessError } from '@kit.BasicServicesKit';

let wantTemp: Want = {
  // Replace with actual values.
  bundleName: 'com.example.myapplication',
  abilityName: 'EnterpriseAdminAbility'
};

adminManager.disableAdmin(wantTemp, 100).catch((err: BusinessError) => {
  console.error(`Failed to disable admin. Code: ${err.code}, message: ${err.message}`);
});

```

