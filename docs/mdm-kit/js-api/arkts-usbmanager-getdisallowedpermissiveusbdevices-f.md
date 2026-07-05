# getDisallowedPermissiveUsbDevices

## getDisallowedPermissiveUsbDevices

```TypeScript
function getDisallowedPermissiveUsbDevices(admin: Want | null): Array<PermissiveUsbDeviceType>
```

Gets the list of disallowed USB devices.

**Since:** 26.0.0

**Required permissions:** 

 ohos.permission.ENTERPRISE_MANAGE_USB

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Customization.EnterpriseDeviceManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| admin | Want \| null | Yes | admin indicates the enterprise admin extension ability information.  The admin must have the corresponding permission. |

**Return value:**

| Type | Description |
| --- | --- |
| Array&lt;PermissiveUsbDeviceType> | USB device types that are disallowed. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 9200001 | The application is not an administrator application of the device. |
| 9200002 | The administrator application does not have permission to manage the device. |
| 201 | Permission verification failed.  The application does not have the permission required to call the API. |

