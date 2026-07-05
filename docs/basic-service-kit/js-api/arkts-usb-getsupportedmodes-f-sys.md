# getSupportedModes

## getSupportedModes

```TypeScript
function getSupportedModes(portId: number): PortModeType
```

获取指定的端口支持的模式列表的组合掩码。

**Since:** 9

**Deprecated since:** 9

**Substitute:** @ohos.usbManager:usbManager.getSupportedModes

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

**Example**

```TypeScript
let ret = usb.getSupportedModes(0);

```

