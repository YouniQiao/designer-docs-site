# getAccessoryList

## Modules to Import

```TypeScript
import { usbManager } from '@ohos.usbManager';
```

## getAccessoryList

```TypeScript
function getAccessoryList(): Array<Readonly<USBAccessory>>
```

Obtains the list of USB accessories connected to the host.

**Since:** 14

**System capability:** SystemCapability.USB.USBManager

**Return value:**

| Type | Description |
| --- | --- |
| Array&lt;Readonly&lt;USBAccessory&gt;&gt; | List of USB accessories (read-only). Currently, only one USB accessory iscontained in the list. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported.<br>**Applicable version:** 18 |
| [14400004](../../apis-basic-services-kit/errorcode-usb.md#14400004-service-exception) | Service exception. Possible causes:<br>1. No accessory is plugged in. |

**Example**

```TypeScript
import { hilog } from '@kit.PerformanceAnalysisKit';
try {
  let accList: usbManager.USBAccessory[] = usbManager.getAccessoryList()
  hilog.info(0, 'testTag ui', `getAccessoryList success, accList: ${JSON.stringify(accList)}`)
} catch (error) {
  hilog.error(0, 'testTag ui', `getAccessoryList error ${error.code}, message is ${error.message}`)
}

```

