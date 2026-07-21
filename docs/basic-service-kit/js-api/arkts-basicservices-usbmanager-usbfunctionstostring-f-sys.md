# usbFunctionsToString (System API)

## Modules to Import

```TypeScript
import { usbManager } from '@kit.BasicServicesKit';
```

<a id="usbfunctionstostring"></a>
## usbFunctionsToString

```TypeScript
function usbFunctionsToString(funcs: FunctionType): string
```

Converts the USB function list in the numeric mask format to a string in Device mode.

**Since:** 9

**Deprecated since:** 12

**Substitutes:** [getStringFromFunctions(funcs:](arkts-basicservices-usbmanager-getstringfromfunctions-f-sys.md#getstringfromfunctions-1)

<!--Device-usbManager-function usbFunctionsToString(funcs: FunctionType): string--><!--Device-usbManager-function usbFunctionsToString(funcs: FunctionType): string-End-->

**System capability:** SystemCapability.USB.USBManager

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| funcs | [FunctionType](arkts-basicservices-usb-functiontype-e-sys.md) | Yes | USB function list in numeric mask format. |

**Return value:**

| Type | Description |
| --- | --- |
| string | Function list in string format after conversion. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes:* <br>1.Mandatory parameters are left unspecified.* <br>2.Incorrect parameter types. |

