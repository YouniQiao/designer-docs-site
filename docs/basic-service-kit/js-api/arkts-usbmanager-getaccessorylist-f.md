# getAccessoryList

## getAccessoryList

```TypeScript
function getAccessoryList(): Array<Readonly<USBAccessory>>
```

获取当前已接入主机的USB配件列表。

**Since:** 14

**System capability:** SystemCapability.USB.USBManager

**Return value:**

| Type | Description |
| --- | --- |
| Array&lt;Readonly&lt;USBAccessory>> | 只读的USB配件列表。当前仅支持列表中包含1个USB配件。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 801 | Capability not supported. [since 18] |
| 14400004 | Service exception. Possible causes:   1. No accessory is plugged in. |

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

