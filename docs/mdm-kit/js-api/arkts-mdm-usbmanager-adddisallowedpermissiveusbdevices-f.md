# addDisallowedPermissiveUsbDevices

## Modules to Import

```TypeScript
import { usbManager } from '@kit.MDMKit';
```

## addDisallowedPermissiveUsbDevices

```TypeScript
function addDisallowedPermissiveUsbDevices(admin: Want, usbDevices: Array<PermissiveUsbDeviceType>): void
```

Adds disallowed USB devices via an array of {@link PermissiveUsbDeviceType}.

**Since:** 26.0.0

**Required permissions:** ohos.permission.ENTERPRISE_MANAGE_USB

**Model restriction:** This API can be used only in the stage model.

<!--Device-usbManager-function addDisallowedPermissiveUsbDevices(admin: Want, usbDevices: Array<PermissiveUsbDeviceType>): void--><!--Device-usbManager-function addDisallowedPermissiveUsbDevices(admin: Want, usbDevices: Array<PermissiveUsbDeviceType>): void-End-->

**System capability:** SystemCapability.Customization.EnterpriseDeviceManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| admin | [Want](../../apis-arkui/arkts-apis/arkts-arkui-want-t-sys.md) | Yes | admin indicates the enterprise admin extension ability information.The admin must have the corresponding permission. |
| usbDevices | Array&lt;PermissiveUsbDeviceType&gt; | Yes | list of USB device types. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [9200001](../errorcode-enterpriseDeviceManager.md#9200001-deviceadmin-not-enabled) | The application is not an administrator application of the device. |
| [9200002](../errorcode-enterpriseDeviceManager.md#9200002-permission-denied) | The administrator application does not have permission to manage the device. |
| [9200010](../errorcode-enterpriseDeviceManager.md#9200010-policy-conflict) | A conflict policy has been configured. |
| [9200012](../errorcode-enterpriseDeviceManager.md#9200012-parameter-verification-failed) | Parameter verification failed. |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission verification failed.The application does not have the permission required to call the API. |

