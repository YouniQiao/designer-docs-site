# getSupportedModes

## getSupportedModes

```TypeScript
function getSupportedModes(portId: number): PortModeType
```

获取指定的端口支持的模式列表的组合掩码。

**Since:** 9

**Deprecated since:** 12

**Substitute:** usbManager.getPortSupportModes(portId:

**System capability:** SystemCapability.USB.USBManager

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| portId | number | Yes | 端口号。 |

**Return value:**

| Type | Description |
| --- | --- |
| PortModeType | 支持的模式列表的组合掩码。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes:   1.Mandatory parameters are left unspecified.   2.Incorrect parameter types. |

