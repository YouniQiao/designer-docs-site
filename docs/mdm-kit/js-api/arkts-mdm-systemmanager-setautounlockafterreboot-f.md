# setAutoUnlockAfterReboot

## Modules to Import

```TypeScript
import { systemManager } from '@kit.MDMKit';
```

## setAutoUnlockAfterReboot

```TypeScript
function setAutoUnlockAfterReboot(admin: Want, isAllowed: boolean): void
```

Sets automatic unlocking upon device reboot. This setting takes effect only on devices without a screen lock password.

**Since:** 20

**Required permissions:** ohos.permission.ENTERPRISE_MANAGE_SYSTEM

**Model restriction:** This API can be used only in the stage model.

<!--Device-systemManager-function setAutoUnlockAfterReboot(admin: Want, isAllowed: boolean): void--><!--Device-systemManager-function setAutoUnlockAfterReboot(admin: Want, isAllowed: boolean): void-End-->

**System capability:** SystemCapability.Customization.EnterpriseDeviceManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| admin | [Want](../../apis-arkui/arkts-apis/arkts-arkui-want-t-sys.md) | Yes | EnterpriseAdminExtensionAbility. **Want** must contain the ability name of the EnterpriseAdminExtensionAbility and the bundle name of the application. |
| isAllowed | boolean | Yes | The value **true** indicates that the device is automatically unlocked after reboot,and the value **false** indicates the opposite. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [9200001](../errorcode-enterpriseDeviceManager.md#9200001-deviceadmin-not-enabled) | The application is not an administrator application of the device. |
| [9200002](../errorcode-enterpriseDeviceManager.md#9200002-permission-denied) | The administrator application does not have permission to manage the device. |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission verification failed. The application does not have the permission required to call the API. |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported. Failed to call the API due to limited device capabilities. |

**Example**

```TypeScript
import { Want } from '@kit.AbilityKit';
import { systemManager } from '@kit.MDMKit';

let wantTemp: Want = {
  // Replace with actual values.
  bundleName: 'com.example.myapplication',
  abilityName: 'EnterpriseAdminAbility'
};
let isAllowed: boolean = true;
try {
  systemManager.setAutoUnlockAfterReboot(wantTemp, isAllowed);
  console.info('Succeeded in setting setAutoUnlockAfterReboot.');
} catch (err) {
  console.error(`Failed to set auto unlock after reboot. Code is ${err.code}, message is ${err.message}`);
}

```

