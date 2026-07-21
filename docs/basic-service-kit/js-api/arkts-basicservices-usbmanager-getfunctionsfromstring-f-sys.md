# getFunctionsFromString (System API)

## Modules to Import

```TypeScript
import { usbManager } from '@kit.BasicServicesKit';
```

<a id="getfunctionsfromstring"></a>
## getFunctionsFromString

```TypeScript
function getFunctionsFromString(funcs: string): number
```

Converts the USB function list in the string format to a numeric mask in Device mode.

**Since:** 12

**Required permissions:** ohos.permission.MANAGE_USB_CONFIG

<!--Device-usbManager-function getFunctionsFromString(funcs: string): int--><!--Device-usbManager-function getFunctionsFromString(funcs: string): int-End-->

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
| [201](../../errorcode-universal.md#201-permission-denied) | Permission verification failed. The application does not have the permission required to call the API. .<br>**Applicable version:** 18 and later |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Permission denied. Normal application do not have permission to use system api. |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes:* <br>1.Mandatory parameters are left unspecified.* <br>2.Incorrect parameter types. |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported.<br>**Applicable version:** 18 and later |

