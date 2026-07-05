# getDisallowedPermissiveUsbDevices

## getDisallowedPermissiveUsbDevices

```TypeScript
function getDisallowedPermissiveUsbDevices(admin: Want | null): Array<PermissiveUsbDeviceType>
```

Gets the list of disallowed USB devices.

**起始版本：** 26.0.0

**需要权限：** 

 ohos.permission.ENTERPRISE_MANAGE_USB

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Customization.EnterpriseDeviceManager

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| admin | Want \| null | 是 | admin indicates the enterprise admin extension ability information.  The admin must have the corresponding permission. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Array&lt;PermissiveUsbDeviceType> | USB device types that are disallowed. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 9200001 | The application is not an administrator application of the device. |
| 9200002 | The administrator application does not have permission to manage the device. |
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
  let result: Array<usbManager.PermissiveUsbDeviceType> = usbManager.getDisallowedPermissiveUsbDevices(wantTemp);
  console.info(`Succeeded in getting disallowed permissive USB devices. Result: ${JSON.stringify(result)}`);
} catch (err) {
  console.error(`Failed to get disallowed permissive USB devices. Code: ${err.code}, message: ${err.message}`);
}

```

