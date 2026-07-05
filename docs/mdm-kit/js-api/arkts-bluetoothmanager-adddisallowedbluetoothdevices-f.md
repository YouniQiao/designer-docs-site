# addDisallowedBluetoothDevices

## addDisallowedBluetoothDevices

```TypeScript
function addDisallowedBluetoothDevices(admin: Want, deviceIds: Array<string>): void
```

添加蓝牙设备禁用名单。添加禁用名单后当前设备不允许连接该名单下的蓝牙设备。从API version 22开始，数组中的MAC地址必须符合蓝牙MAC规范（例如：00:1A:2B:3C:4D:5E），添加时会移除不合法的MAC地址，仅 添加合法的MAC地址。 以下情况下，通过本接口添加蓝牙设备禁用名单，会报策略冲突： 1. 已经通过[setDisallowedPolicy](arkts-restrictions-setdisallowedpolicy-f.md#setDisallowedPolicy-1)接口禁用了蓝牙。通过[setDisallowedPolicy](arkts-restrictions-setdisallowedpolicy-f.md#setDisallowedPolicy-1)接口启用蓝牙后，可解除冲突。 2. 已经通过[addAllowedBluetoothDevices]bluetoothManager.addAllowedBluetoothDevices接口添加了蓝牙设备可用名单。通过[removeAllowedBluetoothDevices]bluetoothManager.removeAllowedBluetoothDevices移除蓝牙设备可用名单后，可解除冲突。

**Since:** 20

**Required permissions:** 

 ohos.permission.ENTERPRISE_MANAGE_BLUETOOTH

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Customization.EnterpriseDeviceManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| admin | Want | Yes | 企业设备管理扩展组件。Want中必须包含企业设备管理扩展能力的abilityName和所在应用的bundleName。 |
| deviceIds | Array&lt;string> | Yes | 蓝牙设备MAC地址的数组。蓝牙设备禁用名单数组长度上限为1000，若当前禁用名单中已有300个蓝牙设备MAC地址，则只允许再添加700个。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 9200001 | The application is not an administrator application of the device. |
| 9200002 | The administrator application does not have permission to manage the device. |
| 9200010 | A conflict policy has been configured. |
| 201 | Permission verification failed. The application does not have the permission  required to call the API. |

**Example**

```TypeScript
import { bluetoothManager } from '@kit.MDMKit';
import { Want } from '@kit.AbilityKit';

let wantTemp: Want = {
  // Replace it as required.
  bundleName: 'com.example.myapplication',
  abilityName: 'EnterpriseAdminAbility'
};
// Replace it as required.
let deviceIds: Array<string> = ["00:1A:2B:3C:4D:5E","AA:BB:CC:DD:EE:FF"];
try {
    bluetoothManager.addDisallowedBluetoothDevices(wantTemp,deviceIds);
    console.info(`Succeeded in adding disallowed bluetooth devices.`);
} catch(err) {
    console.error(`Failed to add disallowed bluetooth devices. Code: ${err.code}, message: ${err.message}`);
}

```

