# addAccessoryRight

## addAccessoryRight

```TypeScript
function addAccessoryRight(tokenId: int, accessory: USBAccessory): void
```

为应用程序添加访问USB配requestAccessoryRight件权限。 [usbManager.]{(@link usbManager.requestAccessoryRight)}会触发弹窗请求用户授权；addAccessoryRight不会触发弹窗，而是直接添加应用程序访问设备的权限。

**Since:** 14

**Required permissions:** 

 ohos.permission.MANAGE_USB_CONFIG

**System capability:** SystemCapability.USB.USBManager

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| tokenId | int | Yes | 应用程序tokenId。 |
| accessory | USBAccessory | Yes | USB配件。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | The permission check failed. |
| 202 | Permission denied. Normal application do not have permission to use system api. |
| 401 | Parameter error. Possible causes:   1. Mandatory parameters are left unspecified.   2. Incorrect parameter types. |
| 801 | Capability not supported. [since 18] |
| 14400004 | Service exception. Possible causes:   1. No accessory is plugged in. |
| 14400005 | Database operation exception. |

