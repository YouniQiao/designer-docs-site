# cancelAccessoryRight

## cancelAccessoryRight

```TypeScript
function cancelAccessoryRight(accessory: USBAccessory): void
```

取消当前应用程序访问USB配件的权限。 需要调用[usbManager.getAccessoryList]usbManager.getAccessoryList()获取配件列表，得到 [USBAccessory]usbManager.USBAccessory作为参数。

**Since:** 14

**System capability:** SystemCapability.USB.USBManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| accessory | USBAccessory | Yes | USB配件，需要通过[getAccessoryList]usbManager.getAccessoryList()获取。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes:   1. Mandatory parameters are left unspecified.   2. Incorrect parameter types. |
| 801 | Capability not supported. [since 18] |
| 14401001 | The target USBAccessory not matched. |
| 14400004 | Service exception. Possible causes:   1. No accessory is plugged in. |
| 14400005 | Database operation exception. |

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

