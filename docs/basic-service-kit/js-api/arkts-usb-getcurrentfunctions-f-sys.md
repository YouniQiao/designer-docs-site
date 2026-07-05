# getCurrentFunctions

## getCurrentFunctions

```TypeScript
function getCurrentFunctions(): FunctionType
```

在设备模式下，获取当前的USB功能列表的数字组合掩码。

**Since:** 9

**Deprecated since:** 9

**Substitute:** @ohos.usbManager:usbManager.getCurrentFunctions

**System capability:** SystemCapability.USB.USBManager

**System API:** This is a system API.

**Return value:**

| Type | Description |
| --- | --- |
| FunctionType | 当前的USB功能列表的数字组合掩码。 |

**Example**

```TypeScript
let ret = usb.getCurrentFunctions();

```

