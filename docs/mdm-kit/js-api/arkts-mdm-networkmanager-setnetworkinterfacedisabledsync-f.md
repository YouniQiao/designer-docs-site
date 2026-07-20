# setNetworkInterfaceDisabledSync

## Modules to Import

```TypeScript
import { networkManager } from '@kit.MDMKit';
```

## setNetworkInterfaceDisabledSync

```TypeScript
function setNetworkInterfaceDisabledSync(admin: Want, networkInterface: string, isDisabled: boolean): void
```

Disables the device from using the specified network interface.

**Since:** 12

**Required permissions:** ohos.permission.ENTERPRISE_MANAGE_NETWORK

**Model restriction:** This API can be used only in the stage model.

<!--Device-networkManager-function setNetworkInterfaceDisabledSync(admin: Want, networkInterface: string, isDisabled: boolean): void--><!--Device-networkManager-function setNetworkInterfaceDisabledSync(admin: Want, networkInterface: string, isDisabled: boolean): void-End-->

**System capability:** SystemCapability.Customization.EnterpriseDeviceManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| admin | [Want](../../apis-arkui/arkts-apis/arkts-arkui-want-t-sys.md) | Yes | EnterpriseAdminExtensionAbility. **Want** must contain the ability name of the EnterpriseAdminExtensionAbility and the bundle name of the application. |
| networkInterface | string | Yes | Network port. |
| isDisabled | boolean | Yes | Network port status to set. The value **true** means to disable the network port,and **false** means to enable the network port. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [9200001](../errorcode-enterpriseDeviceManager.md#9200001-deviceadmin-not-enabled) | The application is not an administrator application of the device. |
| [9200002](../errorcode-enterpriseDeviceManager.md#9200002-permission-denied) | The administrator application does not have permission to manage the device. |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission verification failed. The application does not have the permission required to call the API. |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;2. Incorrect parameter types; 3. Parameter verification failed. |

**Example**

```TypeScript
import { networkManager } from '@kit.MDMKit';
import { Want } from '@kit.AbilityKit';

let wantTemp: Want = {
  // Replace with actual values.
  bundleName: 'com.example.myapplication',
  abilityName: 'EnterpriseAdminAbility'
};

try {
  // Replace parameters with actual values.
  networkManager.setNetworkInterfaceDisabledSync(wantTemp, 'eth0', true);
  console.info(`Succeeded in setting network interface disabled`);
} catch (err) {
  console.error(`Failed to set network interface disabled. Code: ${err.code}, message: ${err.message}`);
}

```

