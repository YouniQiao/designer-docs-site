# usbFunctionsToString (System API)

## Modules to Import

```TypeScript
import { usb } from '@kit.BasicServicesKit';
```

<a id="usbfunctionstostring"></a>
## usbFunctionsToString

```TypeScript
function usbFunctionsToString(funcs: FunctionType): string
```

Converts the USB function list in the numeric mask format to a string in Device mode.

**Since:** 9

**Deprecated since:** 9

**Substitutes:** [usbFunctionsToString](arkts-basicservices-usbmanager-usbfunctionstostring-f-sys.md#usbfunctionstostring-1)

<!--Device-usb-function usbFunctionsToString(funcs: FunctionType): string--><!--Device-usb-function usbFunctionsToString(funcs: FunctionType): string-End-->

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

**Example**

```TypeScript
let funcs = usb.FunctionType.ACM | usb.FunctionType.ECM;
let ret = usb.usbFunctionsToString(funcs);

```

