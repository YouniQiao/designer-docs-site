# setCurrentFunctions (System API)

## Modules to Import

```TypeScript
import { usbManager } from '@ohos.usbManager';
```

## setCurrentFunctions

```TypeScript
function setCurrentFunctions(funcs: FunctionType): Promise<void>
```

Sets the current USB function list in Device mode. This API uses a promise to return the result.

**Since:** 9

**Deprecated since:** 12

**Substitutes:** setDeviceFunctions(funcs:

**System capability:** SystemCapability.USB.USBManager

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| funcs | FunctionType | Yes | USB function list in numeric mask format. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | Promise used to return the result. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes:<br>1.Mandatory parameters are left unspecified.<br>2.Incorrect parameter types. |
| [14400002](../../apis-basic-services-kit/errorcode-usb.md#14400002-hdc-disabled) | Permission denied. The HDC is disabled by the system. |

