# setSimDisabled

## Modules to Import

```TypeScript
import { telephonyManager } from '@ohos.enterprise.telephonyManager';
```

## setSimDisabled

```TypeScript
function setSimDisabled(admin: Want, slotId: number): void
```

Disables the SIM card in a specified slot.

**Since:** 20

**Required permissions:** ohos.permission.ENTERPRISE_MANAGE_TELEPHONY

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.Customization.EnterpriseDeviceManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| admin | Want | Yes | EnterpriseAdminExtensionAbility. **Want** must contain the ability name of theEnterpriseAdminExtensionAbility and the bundle name of the application. |
| slotId | number | Yes | Slot ID. Currently, only single-slot and dual-slot devices are supported. The value canbe **0** or **1**, where **0** indicates slot 1 and **1** indicates slot 2. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [9200001](../errorcode-enterpriseDeviceManager.md#9200001-deviceadmin-not-enabled) | The application is not an administrator application of the device. |
| [9200002](../errorcode-enterpriseDeviceManager.md#9200002-permission-denied) | The administrator application does not have permission to manage the device. |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission verification failed. The application does not have the permissionrequired to call the API. |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported.Failed to call the API due to limited device capabilities. |

**Example**

```TypeScript
import { Want } from '@kit.AbilityKit';
import { telephonyManager } from '@kit.MDMKit';

let wantTemp: Want = {
  // Replace the values as required.
  bundleName: 'com.example.myapplication',
  abilityName: 'EnterpriseAdminAbility'
};
try {
  let slotId: number = 0;
  telephonyManager.setSimDisabled(wantTemp, slotId);
  console.info(`Succeeded in setting slotId: ${slotId} disabled.`);
} catch (err) {
  console.error(`Failed to set slotId disabled. Code: ${err.code}, message: ${err.message}`);
}

```

