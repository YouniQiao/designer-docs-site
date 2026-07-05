# usbFunctionsToString

## usbFunctionsToString

```TypeScript
function usbFunctionsToString(funcs: FunctionType): string
```

在设备模式下，将数字掩码形式的USB功能列表转化为字符串。

**Since:** 9

**Deprecated since:** 12

**Substitute:** usbManager.getStringFromFunctions(funcs:

**System capability:** SystemCapability.USB.USBManager

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| funcs | FunctionType | Yes | 功能列表对应的数字掩码。 |

**Return value:**

| Type | Description |
| --- | --- |
| string | 转化后的字符串形式的功能列表。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes:   1.Mandatory parameters are left unspecified.   2.Incorrect parameter types. |

