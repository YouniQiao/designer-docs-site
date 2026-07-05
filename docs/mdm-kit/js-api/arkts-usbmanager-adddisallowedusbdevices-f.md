# addDisallowedUsbDevices

## addDisallowedUsbDevices

```TypeScript
function addDisallowedUsbDevices(admin: Want, usbDevices: Array<UsbDeviceType>): void
```

添加禁止使用的USB设备类型。 以下情况下，调用本接口会报策略冲突： 1. 已经通过[setDisallowedPolicy](arkts-restrictions-setdisallowedpolicy-f.md#setDisallowedPolicy-1)接口禁用了设备USB能力。 2. 已经通过[addAllowedUsbDevices]usbManager.addAllowedUsbDevices接口添加了USB设备可用名单。 3. 已经通过[setDisallowedPolicyForAccount](arkts-restrictions-setdisallowedpolicyforaccount-f.md#setDisallowedPolicyForAccount-1)接口禁用了某用户USB存储设备写入能力。

**Since:** 14

**Required permissions:** 

 ohos.permission.ENTERPRISE_MANAGE_USB

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Customization.EnterpriseDeviceManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| admin | Want | Yes | 企业设备管理扩展组件。Want中必须包含企业设备管理扩展能力的abilityName和所在应用的bundleName。 |
| usbDevices | Array&lt;UsbDeviceType> | Yes | 要添加的USB设备类型的数组，UsbDeviceType信息可以通过  [getDevices](../../apis-basic-service-kit/arkts-apis/arkts-usbmanager-getdevices-f.md#getDevices-1)接口获取。USB设备禁用名单数组长度上限为200，若当前禁用名单中已有100个USB设备ID，则只允许再添  加100个。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 9200001 | The application is not an administrator application of the device. |
| 9200002 | The administrator application does not have permission to manage the device. |
| 9200010 | A conflict policy has been configured. |
| 201 | Permission verification failed. The application does not have the permission  required to call the API. |
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
  let usbDevices: Array<usbManager.UsbDeviceType> = [{
      baseClass: 8,
      subClass: 0,
      protocol: 0,
      descriptor: usbManager.Descriptor.INTERFACE
  }];
  usbManager.addDisallowedUsbDevices(wantTemp, usbDevices);
  console.info(`Succeeded in adding disallowed USB devices.`);
} catch (err) {
  console.error(`Failed to add disallowed USB devices. Code: ${err.code}, message: ${err.message}`);
}

```

