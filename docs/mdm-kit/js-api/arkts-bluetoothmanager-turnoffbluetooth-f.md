# turnOffBluetooth

## turnOffBluetooth

```TypeScript
function turnOffBluetooth(admin: Want): void
```

关闭蓝牙。蓝牙关闭后用户可以手动打开。

**Since:** 20

**Required permissions:** 

 ohos.permission.ENTERPRISE_MANAGE_BLUETOOTH

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
import { bluetoothManager } from '@kit.MDMKit';

let wantTemp: Want = {
  // Replace it as required.
  bundleName: 'com.example.myapplication',
  abilityName: 'EnterpriseAdminAbility'
};
try {
    bluetoothManager.turnOffBluetooth(wantTemp);
    console.info('Succeeded in turning off bluetooth.');
} catch(err) {
    console.error(`Failed to turn off bluetooth. Code: ${err.code}, message: ${err.message}`);
}

```

