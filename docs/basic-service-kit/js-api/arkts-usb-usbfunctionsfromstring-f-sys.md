# usbFunctionsFromString

## usbFunctionsFromString

```TypeScript
function usbFunctionsFromString(funcs: string): number
```

在设备模式下，将字符串形式的USB功能列表转化为数字掩码。

**Since:** 9

**Deprecated since:** 9

**Substitute:** @ohos.usbManager:usbManager.usbFunctionsFromString

**System capability:** SystemCapability.USB.USBManager

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| funcs | string | Yes | 字符串形式的功能列表。 |

**Return value:**

| Type | Description |
| --- | --- |
| number | 转化后的功能列表对应的数字掩码。 |

**Example**

```TypeScript
let funcs = "acm";
let ret = usb.usbFunctionsFromString(funcs);

```

