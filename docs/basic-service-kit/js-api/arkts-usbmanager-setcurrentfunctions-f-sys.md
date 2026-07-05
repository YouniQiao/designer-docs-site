# setCurrentFunctions

## setCurrentFunctions

```TypeScript
function setCurrentFunctions(funcs: FunctionType): Promise<void>
```

在设备模式下，设置当前的USB功能列表。使用Promise异步回调。

**Since:** 9

**Deprecated since:** 12

**Substitute:** usbManager.setDeviceFunctions(funcs:

**System capability:** SystemCapability.USB.USBManager

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| funcs | FunctionType | Yes | 功能列表对应的数字掩码。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | Promise对象。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes:   1.Mandatory parameters are left unspecified.   2.Incorrect parameter types. |
| 14400002 | Permission denied. The HDC is disabled by the system. |

