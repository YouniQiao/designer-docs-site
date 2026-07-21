# requestAccessoryRight

## Modules to Import

```TypeScript
import { usbManager } from '@kit.BasicServicesKit';
```

<a id="requestaccessoryright"></a>
## requestAccessoryRight

```TypeScript
function requestAccessoryRight(accessory: USBAccessory): Promise<boolean>
```

Requests the permission to access a USB accessory for a specified application. This API uses a promise to return the result.You need to call [usbManager.getAccessoryList](arkts-basicservices-usbmanager-getaccessorylist-f.md#getaccessorylist-1) to obtain the accessory list and use [USBAccessory](arkts-basicservices-usbmanager-usbaccessory-i.md) as a parameter.

**Since:** 14

<!--Device-usbManager-function requestAccessoryRight(accessory: USBAccessory): Promise<boolean>--><!--Device-usbManager-function requestAccessoryRight(accessory: USBAccessory): Promise<boolean>-End-->

**System capability:** SystemCapability.USB.USBManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| accessory | [USBAccessory](arkts-basicservices-usbmanager-usbaccessory-i.md) | Yes | USB accessory, which is obtained through [getAccessoryList](arkts-basicservices-usbmanager-getaccessorylist-f.md#getaccessorylist-1). |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;boolean&gt; | Promise used to return the application result. The value **true** indicates that the device access permissions are granted; **false** indicates the opposite. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes:* <br>1. Mandatory parameters are left unspecified.* <br>2. Incorrect parameter types. |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported.<br>**Applicable version:** 18 and later |
| [14401001](../../apis-basic-services-kit/errorcode-usb.md#14401001-target-usb-accessory-unmatched) | The target USBAccessory not matched. |
| [14400004](../../apis-basic-services-kit/errorcode-usb.md#14400004-service-exception) | Service exception. Possible causes:* <br>1. No accessory is plugged in. |
| [14400005](../../apis-basic-services-kit/errorcode-usb.md#14400005-database-operation-exception) | Database operation exception. |

**Example**

```TypeScript
import { hilog } from '@kit.PerformanceAnalysisKit';
try {
  let accList: usbManager.USBAccessory[] = usbManager.getAccessoryList()
  let flag = usbManager.requestAccessoryRight(accList?.[0])
  hilog.info(0, 'testTag ui', `requestAccessoryRight success, ret:${flag}`)
} catch (error) {
  hilog.error(0, 'testTag ui', `requestAccessoryRight error ${error.code}, message is ${error.message}`)
}

```

