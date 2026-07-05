# getCurrentFunctions

## getCurrentFunctions

```TypeScript
function getCurrentFunctions(): FunctionType
```

在设备模式下，获取当前的USB功能列表的数字组合掩码。开发者模式关闭时，如果没有设备接入，接口可能返回`undefined`，注意需要对接口返回值做判空处理。

**Since:** 9

**Deprecated since:** 12

**Substitute:** usbManager.getDeviceFunctions()

**System capability:** SystemCapability.USB.USBManager

**System API:** This is a system API.

**Return value:**

| Type | Description |
| --- | --- |
| FunctionType | 当前的USB功能列表的数字组合掩码。 |

