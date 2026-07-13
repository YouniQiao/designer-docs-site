# addDeviceAccessRight (System API)

## Modules to Import

```TypeScript
import { usbManager } from '@kit.BasicServicesKit';
```

## addDeviceAccessRight

```TypeScript
function addDeviceAccessRight(tokenId: string, deviceName: string): boolean
```

Adds the device access permission for the application. System applications are granted the device access permission
by default, and calling this API will not revoke the permission.
[usbManager.requestRight]{(@link usbManager.requestRight)} triggers a dialog box to request for user authorization, whereas addDeviceAccessRight adds
the access permission directly without displaying a dialog box.

**Since:** 12

**Required permissions:** ohos.permission.MANAGE_USB_CONFIG

**System capability:** SystemCapability.USB.USBManager

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| tokenId | string | Yes | Token ID of the software package. |
| deviceName | string | Yes | Device name. |

**Return value:**

| Type | Description |
| --- | --- |
| boolean | Permission addition result. The value **true** indicates that the access permission is addedsuccessfully; and the value **false** indicates the opposite. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission verification failed. The application does not have the permission required tocall the API.<br>**Applicable version:** 18 and later |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Permission denied. Normal application do not have permission to use system api. |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes:<br>1.Mandatory parameters are left unspecified.<br>2.Incorrect parameter types. |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported.<br>**Applicable version:** 18 and later |

