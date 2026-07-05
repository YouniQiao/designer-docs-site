# turnOffWifi

## turnOffWifi

```TypeScript
function turnOffWifi(admin: Want): void
```

关闭Wi-Fi开关。 以下情况下，通过本接口关闭Wi-Fi开关，会提示"系统功能被禁用"： ?已经通过 [setDisallowedPolicy](arkts-restrictions-setdisallowedpolicy-f.md#setDisallowedPolicy-1) 接口禁用了Wi-Fi。需通过 [setDisallowedPolicy](arkts-restrictions-setdisallowedpolicy-f.md#setDisallowedPolicy-1) 接口启用Wi-Fi，解决"系统功能被禁用"报错。

**Since:** 20

**Required permissions:** 

 ohos.permission.ENTERPRISE_MANAGE_WIFI

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Customization.EnterpriseDeviceManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| admin | Want | Yes | 企业设备管理扩展组件。Want中必须包含企业设备管理扩展能力的abilityName和所在应用的bundleName。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 9200001 | The application is not an administrator application of the device. |
| 9200002 | The administrator application does not have permission to manage the device. |
| 201 | Permission verification failed. The application does not have the permission  required to call the API. |
| 203 | This function is prohibited by enterprise management policies. |

**Example**

```TypeScript
import { Want } from '@kit.AbilityKit';
import { wifiManager } from '@kit.MDMKit';

let wantTemp: Want = {
  // Replace with actual values.
  bundleName: 'com.example.myapplication',
  abilityName: 'EnterpriseAdminAbility'
};

try {
  wifiManager.turnOffWifi(wantTemp);
  console.info(`Succeeded in turning off Wi-Fi.`);
} catch (err) {
  console.error(`Failed to turn off Wi-Fi. Code: ${err.code}, message: ${err.message}`);
}

```

