# cancelAccessoryRight

## Modules to Import

```TypeScript
import { usbManager } from '@ohos.usbManager';
```

## cancelAccessoryRight

```TypeScript
function cancelAccessoryRight(accessory: USBAccessory): void
```

Cancels the permission of the current application to access USB accessories. You need to call [usbManager.getAccessoryList](arkts-basicservices-getaccessorylist-f.md#getaccessorylist-1) to obtain the accessory list and use [USBAccessory](arkts-basicservices-usbaccessory-i.md#usbaccessory) as a parameter.

**Since:** 14

**System capability:** SystemCapability.USB.USBManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| accessory | USBAccessory | Yes | USB accessory, which is obtained through[getAccessoryList](arkts-basicservices-getaccessorylist-f.md#getaccessorylist-1). |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes:<br>1. Mandatory parameters are left unspecified.<br>2. Incorrect parameter types. |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported.<br>**Applicable version:** 18 |
| [14401001](../../apis-basic-services-kit/errorcode-usb.md#14401001-target-usb-accessory-unmatched) | The target USBAccessory not matched. |
| [14400004](../../apis-basic-services-kit/errorcode-usb.md#14400004-service-exception) | Service exception. Possible causes:<br>1. No accessory is plugged in. |
| [14400005](../../apis-basic-services-kit/errorcode-usb.md#14400005-database-operation-exception) | Database operation exception. |

**Example**

```TypeScript
import { hilog } from '@kit.PerformanceAnalysisKit';
try {
  let accList: usbManager.USBAccessory[] = usbManager.getAccessoryList()
  let flag = usbManager.requestAccessoryRight(accList?.[0])
  usbManager.cancelAccessoryRight(accList?.[0])
  hilog.info(0, 'testTag ui', `cancelAccessoryRight success`)
} catch (error) {
  hilog.error(0, 'testTag ui', `cancelAccessoryRight error ${error.code}, message is ${error.message}`)
}

```

