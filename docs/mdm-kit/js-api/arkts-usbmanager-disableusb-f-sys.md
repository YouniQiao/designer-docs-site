# disableUsb

## disableUsb

```TypeScript
function disableUsb(admin: Want, disable: boolean): void
```

设置禁用或启用USB。

**Since:** 11

**Deprecated since:** 26.0.0

**Substitute:** @ohos.enterprise.restrictions:restrictions.setDisallowedPolicy(admin:

**Required permissions:** 

 ohos.permission.ENTERPRISE_MANAGE_USB

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Customization.EnterpriseDeviceManager

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| admin | Want | Yes | 企业设备管理扩展组件。Want中必须包含企业设备管理扩展能力的abilityName和所在应用的bundleName。 |
| disable | boolean | Yes | 是否禁用USB设备，true表示禁用，false表示不禁用。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 9200001 | The application is not an administrator application of the device. |
| 9200002 | The administrator application does not have permission to manage the device. |
| 9200010 | A conflict policy has been configured. |
| 201 | Permission verification failed. The application does not have the permission  required to call the API. |
| 202 | Permission verification failed. A non-system application calls a system API. |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types; 3. Parameter verification failed. |

**Example**

```TypeScript
import { usbManager } from '@kit.MDMKit';
import { Want } from '@kit.AbilityKit';

let wantTemp: Want = {
  // Replace with actual values.
  bundleName: 'com.example.myapplication',
  abilityName: 'EnterpriseAdminAbility'
};
try {
  usbManager.disableUsb(wantTemp, true);
  console.info(`Succeeded in disabling USB`);
} catch (err) {
  console.error(`Failed to disable USB. Code: ${err.code}, message: ${err.message}`);
}

```

