# getPortSupportModes

## getPortSupportModes

```TypeScript
function getPortSupportModes(portId: int): PortModeType
```

获取指定的端口支持的模式列表的组合掩码。

**Since:** 12

**Required permissions:** 

 ohos.permission.MANAGE_USB_CONFIG

**System capability:** SystemCapability.USB.USBManager

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| portId | int | Yes | 端口号。 |

**Return value:**

| Type | Description |
| --- | --- |
| PortModeType | 支持的模式列表的组合掩码。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission verification failed. The application does not have the permission required to  call the API. [since 18] |
| 202 | Permission denied. Normal application do not have permission to use system api. |
| 401 | Parameter error. Possible causes:   1.Mandatory parameters are left unspecified.   2.Incorrect parameter types. |
| 801 | Capability not supported. [since 18] |

