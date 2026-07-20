# getSupportedModes (System API)

## Modules to Import

```TypeScript
import { usbManager } from '@kit.BasicServicesKit';
```

## getSupportedModes

```TypeScript
function getSupportedModes(portId: number): PortModeType
```

Obtains the mask combination for the supported mode list of a given USB port.

**Since:** 9

**Deprecated since:** 12

**Substitutes:** getPortSupportModes(portId:

<!--Device-usbManager-function getSupportedModes(portId: number): PortModeType--><!--Device-usbManager-function getSupportedModes(portId: number): PortModeType-End-->

**System capability:** SystemCapability.USB.USBManager

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| portId | number | Yes | Port number. |

**Return value:**

| Type | Description |
| --- | --- |
| [PortModeType](arkts-basicservices-usbmanager-portmodetype-e-sys.md) | Mask combination for the supported mode list. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes:* <br>1.Mandatory parameters are left unspecified.* <br>2.Incorrect parameter types. |

