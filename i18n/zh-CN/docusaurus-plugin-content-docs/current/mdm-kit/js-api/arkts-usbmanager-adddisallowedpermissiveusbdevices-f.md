# addDisallowedPermissiveUsbDevices

## addDisallowedPermissiveUsbDevices

```TypeScript
function addDisallowedPermissiveUsbDevices(admin: Want, usbDevices: Array<PermissiveUsbDeviceType>): void
```

Adds disallowed USB devices via an array of {@link PermissiveUsbDeviceType}.

**起始版本：** 26.0.0

**需要权限：** 

 ohos.permission.ENTERPRISE_MANAGE_USB

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Customization.EnterpriseDeviceManager

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| admin | Want | 是 | admin indicates the enterprise admin extension ability information.  The admin must have the corresponding permission. |
| usbDevices | Array&lt;PermissiveUsbDeviceType> | 是 | list of USB device types. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 9200001 | The application is not an administrator application of the device. |
| 9200002 | The administrator application does not have permission to manage the device. |
| 9200010 | A conflict policy has been configured. |
| 9200012 | Parameter verification failed. |
| 201 | Permission verification failed.  The application does not have the permission required to call the API. |

**示例：**

```TypeScript
import { usbManager } from '@kit.MDMKit';
import { Want } from '@kit.AbilityKit';

let wantTemp: Want = {
  // 需根据实际情况进行替换
  bundleName: 'com.example.myapplication',
  abilityName: 'EnterpriseAdminAbility'
};
try {
  // 禁用USB存储设备（以实际USB设备类型参数为准）
  let usbDevices1: Array<usbManager.PermissiveUsbDeviceType> = [{
    baseClass: 8
  }];
  usbManager.addDisallowedPermissiveUsbDevices(wantTemp, usbDevices1);

  // 禁用USB线控耳机（以实际USB设备类型参数为准）
  let usbDevices2: Array<usbManager.PermissiveUsbDeviceType> = [{
    baseClass: 0,
    subClass: 0,
    protocol: 0,
    descriptor: usbManager.Descriptor.DEVICE
  }];
  usbManager.addDisallowedPermissiveUsbDevices(wantTemp, usbDevices2);

  // 禁用USB线控键盘输入（以实际USB设备类型参数为准）
  let usbDevices3: Array<usbManager.PermissiveUsbDeviceType> = [{
    baseClass: 3,
    subClass: 1,
    protocol: 1,
    descriptor: usbManager.Descriptor.INTERFACE
  }];
  usbManager.addDisallowedPermissiveUsbDevices(wantTemp, usbDevices3);
  console.info(`Succeeded in adding disallowed permissive USB devices.`);
} catch (err) {
  console.error(`Failed to add disallowed permissive USB devices. Code: ${err.code}, message: ${err.message}`);
}

```

