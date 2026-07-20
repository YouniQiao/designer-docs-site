# usbFunctionsFromString (System API)

## Modules to Import

```TypeScript
import { usbManager } from '@kit.BasicServicesKit';
```

## usbFunctionsFromString

```TypeScript
function usbFunctionsFromString(funcs: string): number
```

Converts the USB function list in the string format to a numeric mask in Device mode.

**Since:** 9

**Deprecated since:** 12

**Substitutes:** getFunctionsFromString(funcs:

<!--Device-usbManager-function usbFunctionsFromString(funcs: string): number--><!--Device-usbManager-function usbFunctionsFromString(funcs: string): number-End-->

**System capability:** SystemCapability.USB.USBManager

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| funcs | string | Yes | Function list in string format. |

**Return value:**

| Type | Description |
| --- | --- |
| number | Function list in numeric mask format after conversion. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes:* <br>1.Mandatory parameters are left unspecified.* <br>2.Incorrect parameter types. |

