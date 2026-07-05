# addDeviceAccessRight

## addDeviceAccessRight

```TypeScript
function addDeviceAccessRight(tokenId: string, deviceName: string): boolean
```

添加软件包访问设备的权限。系统应用默认拥有访问设备权限，调用此接口不会产生影响。 [usbManager.requestRight]{(@link usbManager.requestRight)}会触发弹框请求用户授权；addDeviceAccessRight不会触发弹框，而是直接添加软件包访问设备的权限。

**Since:** 12

**Required permissions:** 

 ohos.permission.MANAGE_USB_CONFIG

**System capability:** SystemCapability.USB.USBManager

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| tokenId | string | Yes | 软件包tokenId。 |
| deviceName | string | Yes | 设备名称。 |

**Return value:**

| Type | Description |
| --- | --- |
| boolean | 返回权限添加结果。返回true表示权限添加成功；返回false则表示权限添加失败。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission verification failed. The application does not have the permission required to  call the API. [since 18] |
| 202 | Permission denied. Normal application do not have permission to use system api. |
| 401 | Parameter error. Possible causes:   1.Mandatory parameters are left unspecified.   2.Incorrect parameter types. |
| 801 | Capability not supported. [since 18] |

