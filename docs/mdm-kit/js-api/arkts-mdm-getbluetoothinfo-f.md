# getBluetoothInfo

## Modules to Import

```TypeScript
import { bluetoothManager } from '@ohos.enterprise.bluetoothManager';
```

## getBluetoothInfo

```TypeScript
function getBluetoothInfo(admin: Want): BluetoothInfo
```

Obtains device Bluetooth information.

**Since:** 12

**Required permissions:** ohos.permission.ENTERPRISE_MANAGE_BLUETOOTH

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.Customization.EnterpriseDeviceManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| admin | Want | Yes | EnterpriseAdminExtensionAbility. **Want** must contain the ability name of theEnterpriseAdminExtensionAbility and the bundle name of the application. |

**Return value:**

| Type | Description |
| --- | --- |
| BluetoothInfo | Bluetooth information, including the Bluetooth name, state, and profile connectionstate. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [9200001](../errorcode-enterpriseDeviceManager.md#9200001-deviceadmin-not-enabled) | The application is not an administrator application of the device. |
| [9200002](../errorcode-enterpriseDeviceManager.md#9200002-permission-denied) | The administrator application does not have permission to manage the device. |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission verification failed. The application does not have the permissionrequired to call the API. |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;2. Incorrect parameter types; 3. Parameter verification failed. |

**Example**

```TypeScript
import { bluetoothManager } from '@kit.MDMKit';
import { Want } from '@kit.AbilityKit';

let wantTemp: Want = {
  // Replace it as required.
  bundleName: 'com.example.myapplication',
  abilityName: 'EnterpriseAdminAbility'
};

try {
    let result: bluetoothManager.BluetoothInfo = bluetoothManager.getBluetoothInfo(wantTemp);
    console.info(`Succeeded in getting bluetooth info: ${JSON.stringify(result)}`);
} catch(err) {
    console.error(`Failed to get bluetooth info. Code: ${err.code}, message: ${err.message}`);
}

```

