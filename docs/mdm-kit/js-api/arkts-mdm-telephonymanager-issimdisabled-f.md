# isSimDisabled

## Modules to Import

```TypeScript
import { telephonyManager } from '@kit.MDMKit';
```

## isSimDisabled

```TypeScript
function isSimDisabled(admin: Want, slotId: number): boolean
```

Checks whether the SIM card in a specified slot is disabled.

**Since:** 20

**Required permissions:** ohos.permission.ENTERPRISE_MANAGE_TELEPHONY

**Model restriction:** This API can be used only in the stage model.

<!--Device-telephonyManager-function isSimDisabled(admin: Want, slotId: number): boolean--><!--Device-telephonyManager-function isSimDisabled(admin: Want, slotId: number): boolean-End-->

**System capability:** SystemCapability.Customization.EnterpriseDeviceManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| admin | [Want](../../apis-arkui/arkts-apis/arkts-arkui-want-t-sys.md) | Yes | EnterpriseAdminExtensionAbility. **Want** must contain the ability name of the EnterpriseAdminExtensionAbility and the bundle name of the application. |
| slotId | number | Yes | Slot ID. Currently, only single-slot and dual-slot devices are supported. The value can be **0** or **1**, where **0** indicates slot 1 and **1** indicates slot 2. |

**Return value:**

| Type | Description |
| --- | --- |
| boolean | A Boolean value indicating the SIM card status in the specified slot. The value **true** means the SIM card in the specified slot is disabled; the value **false** means the opposite. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [9200001](../errorcode-enterpriseDeviceManager.md#9200001-deviceadmin-not-enabled) | The application is not an administrator application of the device. |
| [9200002](../errorcode-enterpriseDeviceManager.md#9200002-permission-denied) | The administrator application does not have permission to manage the device. |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission verification failed. The application does not have the permission required to call the API. |
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
  let result: boolean = telephonyManager.isSimDisabled(wantTemp, slotId);
  console.info(`Succeeded in querying slotId: ${slotId} is disabled or not, result: ${result}`);
} catch (err) {
  console.error(`Failed to query sim is disabled or not. Code: ${err.code}, message: ${err.message}`);
}

```

