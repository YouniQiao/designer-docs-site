# addAllowedUsbDevices

## addAllowedUsbDevices

```TypeScript
function addAllowedUsbDevices(admin: Want, usbDeviceIds: Array<UsbDeviceId>): void
```

添加USB设备可用名单。 以下情况下，调用本接口会报策略冲突： 1. 已经通过[setDisallowedPolicy](arkts-restrictions-setdisallowedpolicy-f.md#setDisallowedPolicy-1)接口禁用了设备USB或者USB转串口能力。 2. 已经通过[setUsbStorageDeviceAccessPolicy]usbManager.setUsbStorageDeviceAccessPolicy接口设置了USB存储设备访问策略为禁用。 3. 已经通过[addDisallowedUsbDevices]usbManager.addDisallowedUsbDevices接口添加了禁止使用的USB设备类型。

**Since:** 12

**Required permissions:** 

 ohos.permission.ENTERPRISE_MANAGE_USB

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Customization.EnterpriseDeviceManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| admin | Want | Yes | 企业设备管理扩展组件。Want中必须包含企业设备管理扩展能力的abilityName和所在应用的bundleName。 |
| usbDeviceIds | Array&lt;UsbDeviceId> | Yes | USB设备ID数组，UsbDeviceId信息可以通过  [getDevices](../../apis-basic-service-kit/arkts-apis/arkts-usbmanager-getdevices-f.md#getDevices-1)接口获取。USB设备可用名单数组长度上限为1000，若当前允许名单中已有300个USB设备ID，则只允许再  添加700个。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 9200001 | The application is not an administrator application of the device. |
| 9200002 | The administrator application does not have permission to manage the device. |
| 9200007 | The system ability works abnormally. |
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
  let usbDeviceIds: Array<usbManager.UsbDeviceId> = [{
      vendorId: 1,
      productId: 1
  }];
  usbManager.addAllowedUsbDevices(wantTemp, usbDeviceIds);
  console.info(`Succeeded in adding allowed USB devices.`);
} catch (err) {
  console.error(`Failed to add allowed USB devices. Code: ${err.code}, message: ${err.message}`);
}

```

