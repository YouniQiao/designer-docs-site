# usbFunctionsToString

## usbFunctionsToString

```TypeScript
function usbFunctionsToString(funcs: FunctionType): string
```

在设备模式下，将数字掩码形式的USB功能列表转化为字符串。

**Since:** 9

**Deprecated since:** 9

**Substitute:** @ohos.usbManager:usbManager.usbFunctionsToString

**System capability:** SystemCapability.USB.USBManager

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| funcs | FunctionType | Yes | 功能列表对应数字掩码。 |

**Return value:**

| Type | Description |
| --- | --- |
| string | 转化后的字符串形式的功能列表。 |

**Example**

```TypeScript
let funcs = usb.FunctionType.ACM | usb.FunctionType.ECM;
let ret = usb.usbFunctionsToString(funcs);

```

