# addAccessoryRight (System API)

## Modules to Import

```TypeScript
import { usbManager } from '@kit.BasicServicesKit';
```

## addAccessoryRight

```TypeScript
function addAccessoryRight(tokenId: number, accessory: USBAccessory): void
```

Adds the permission to applications for accessing USB accessories.[usbManager.requestAccessoryRight]{(@link usbManager.requestAccessoryRight)} triggers a dialog box to request user authorization. **addAccessoryRight** does not trigger a dialog box but directly adds the device access permission for the application.

**Since:** 14

**Required permissions:** ohos.permission.MANAGE_USB_CONFIG

<!--Device-usbManager-function addAccessoryRight(tokenId: int, accessory: USBAccessory): void--><!--Device-usbManager-function addAccessoryRight(tokenId: int, accessory: USBAccessory): void-End-->

**System capability:** SystemCapability.USB.USBManager

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| tokenId | number | Yes | Token ID of the application. |
| accessory | [USBAccessory](arkts-basicservices-usbmanager-usbaccessory-i.md) | Yes | USB accessory. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | The permission check failed. |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Permission denied. Normal application do not have permission to use system api. |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes:* <br>1. Mandatory parameters are left unspecified.* <br>2. Incorrect parameter types. |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported.<br>**Applicable version:** 18 and later |
| [14400004](../../apis-basic-services-kit/errorcode-usb.md#14400004-service-exception) | Service exception. Possible causes:* <br>1. No accessory is plugged in. |
| [14400005](../../apis-basic-services-kit/errorcode-usb.md#14400005-database-operation-exception) | Database operation exception. |

