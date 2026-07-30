# getDisallowedPermissiveUsbDevices

## Modules to Import

```TypeScript
import { usbManager } from '@kit.MDMKit';
```

## getDisallowedPermissiveUsbDevices

```TypeScript
function getDisallowedPermissiveUsbDevices(admin: Want | null): Array<PermissiveUsbDeviceType>
```

Gets the list of disallowed USB devices.

**Since:** 26.0.0

**Required permissions:** ohos.permission.ENTERPRISE_MANAGE_USB

**Model restriction:** This API can be used only in the stage model.

<!--Device-usbManager-function getDisallowedPermissiveUsbDevices(admin: Want | null): Array<PermissiveUsbDeviceType>--><!--Device-usbManager-function getDisallowedPermissiveUsbDevices(admin: Want | null): Array<PermissiveUsbDeviceType>-End-->

**System capability:** SystemCapability.Customization.EnterpriseDeviceManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| admin | [Want](../../apis-arkui/arkts-apis/arkts-arkui-want-t-sys.md) \| null | Yes | admin indicates the enterprise admin extension ability information.The admin must have the corresponding permission. |

**Return value:**

| Type | Description |
| --- | --- |
| Array&lt;PermissiveUsbDeviceType&gt; | USB device types that are disallowed. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [9200001](../errorcode-enterpriseDeviceManager.md#9200001-deviceadmin-not-enabled) | The application is not an administrator application of the device. |
| [9200002](../errorcode-enterpriseDeviceManager.md#9200002-permission-denied) | The administrator application does not have permission to manage the device. |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission verification failed.The application does not have the permission required to call the API. |

