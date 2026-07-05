# enableDeviceAdmin

## Modules to Import

```TypeScript
import { adminManager } from '@ohos.enterprise.adminManager';
```

## enableDeviceAdmin

```TypeScript
function enableDeviceAdmin(admin: Want): Promise<void>
```

Allows a [super device administrator application](../../../../mdm/mdm-kit-term.md#sda) to enable other [device administrator applications](../../../../mdm/mdm-kit-term.md#da). This API uses a promise to return the result. This API can be called only by super device administrator applications.

**Since:** 23

**Required permissions:** ohos.permission.ENTERPRISE_MANAGE_DEVICE_ADMIN

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.Customization.EnterpriseDeviceManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| admin | Want | Yes | EnterpriseAdminExtensionAbility. **Want** must contain the ability name of theEnterpriseAdminExtensionAbility and the bundle name of the application. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | Promise that returns no value. If the operation fails, an error object will be thrown. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [9200001](../errorcode-enterpriseDeviceManager.md#9200001-deviceadmin-not-enabled) | The application is not an administrator application of the device. |
| [9200002](../errorcode-enterpriseDeviceManager.md#9200002-permission-denied) | The administrator application does not have permission to manage the device. |
| [9200003](../errorcode-enterpriseDeviceManager.md#9200003-invalid-administrator-ability-component) | The administrator ability component is invalid. |
| [9200004](../errorcode-enterpriseDeviceManager.md#9200004-failed-to-enable-the-device-administrator-application) | Failed to activate the administrator application of the device. |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission verification failed.The application does not have the permission required to call the API. |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported.Failed to call the API due to limited device capabilities. |

**Example**

```TypeScript
import { Want } from '@kit.AbilityKit';
import { adminManager } from '@kit.MDMKit';
import { BusinessError } from '@kit.BasicServicesKit';

let wantTemp: Want = {
  // Replace with actual values.
  bundleName: 'com.example.myapplication',
  abilityName: 'EnterpriseAdminAbility'
};

adminManager.enableDeviceAdmin(wantTemp).catch((err: BusinessError) => {
  console.error(`Failed to enable device admin. Code: ${err.code}, message: ${err.message}`);
});

```

