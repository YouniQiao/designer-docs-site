# addAccessoryRight

## addAccessoryRight

```TypeScript
function addAccessoryRight(tokenId: int, accessory: USBAccessory): void
```

为应用程序添加访问USB配requestAccessoryRight件权限。 [usbManager.]{(@link usbManager.requestAccessoryRight)}会触发弹窗请求用户授权；addAccessoryRight不会触发弹窗，而是直接添加应用程序访问设备的权限。

**起始版本：** 14

**需要权限：** 

 ohos.permission.MANAGE_USB_CONFIG

**系统能力：** SystemCapability.USB.USBManager

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| tokenId | int | 是 | 应用程序tokenId。 |
| accessory | USBAccessory | 是 | USB配件。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | The permission check failed. |
| 202 | Permission denied. Normal application do not have permission to use system api. |
| 401 | Parameter error. Possible causes:   1. Mandatory parameters are left unspecified.   2. Incorrect parameter types. |
| 801 | Capability not supported. [since 18] |
| 14400004 | Service exception. Possible causes:   1. No accessory is plugged in. |
| 14400005 | Database operation exception. |

