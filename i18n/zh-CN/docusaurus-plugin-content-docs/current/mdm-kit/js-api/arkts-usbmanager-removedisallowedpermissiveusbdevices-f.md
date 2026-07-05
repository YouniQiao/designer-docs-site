# removeDisallowedPermissiveUsbDevices

## removeDisallowedPermissiveUsbDevices

```TypeScript
function removeDisallowedPermissiveUsbDevices(admin: Want, usbDevices: Array<PermissiveUsbDeviceType>): void
```

Removes disallowed USB devices via an array of {@link PermissiveUsbDeviceType}.

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
  let usbDevices: Array<usbManager.PermissiveUsbDeviceType> = [{
    baseClass: 8
  }];
  usbManager.removeDisallowedPermissiveUsbDevices(wantTemp, usbDevices);
  console.info(`Succeeded in removing disallowed permissive USB devices.`);
} catch (err) {
  console.error(`Failed to remove disallowed permissive USB devices. Code: ${err.code}, message: ${err.message}`);
}

```

