# closeAccessory

## Modules to Import

```TypeScript
import { usbManager } from '@kit.BasicServicesKit';
```

## closeAccessory

```TypeScript
function closeAccessory(accessoryHandle: USBAccessoryHandle): void
```

Closes the accessory file descriptor.You need to call [usbManager.openAccessory](arkts-basicservices-usbmanager-openaccessory-f.md#openaccessory-1) to obtain the accessory list and use [USBAccessoryHandle](arkts-basicservices-usbmanager-usbaccessoryhandle-i.md) as a parameter.

**Since:** 14

<!--Device-usbManager-function closeAccessory(accessoryHandle: USBAccessoryHandle): void--><!--Device-usbManager-function closeAccessory(accessoryHandle: USBAccessoryHandle): void-End-->

**System capability:** SystemCapability.USB.USBManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| accessoryHandle | [USBAccessoryHandle](arkts-basicservices-usbmanager-usbaccessoryhandle-i.md) | Yes | USB accessory handle, which is obtained through [openAccessory](arkts-basicservices-usbmanager-openaccessory-f.md#openaccessory-1). |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes:* <br>1. Mandatory parameters are left unspecified.* <br>2. Incorrect parameter types. |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported.<br>**Applicable version:** 18 and later |
| [14400004](../../apis-basic-services-kit/errorcode-usb.md#14400004-service-exception) | Service exception. Possible causes:* <br>1. No accessory is plugged in. |

**Example**

```TypeScript
import { hilog } from '@kit.PerformanceAnalysisKit';
try {
  let accList: usbManager.USBAccessory[] = usbManager.getAccessoryList()
  let flag = usbManager.requestAccessoryRight(accList?.[0])
  let handle = usbManager.openAccessory(accList?.[0])
  usbManager.closeAccessory(handle)
  hilog.info(0, 'testTag ui', `closeAccessory success`)
} catch (error) {
  hilog.error(0, 'testTag ui', `closeAccessory error ${error.code}, message is ${error.message}`)
}

```

