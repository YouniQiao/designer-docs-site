# closeAccessory

## closeAccessory

```TypeScript
function closeAccessory(accessoryHandle: USBAccessoryHandle): void
```

关闭配件文件描述符。 需要调用[usbManager.openAccessory]usbManager.openAccessory(accessory: USBAccessory)获取配件列表，得到 [USBAccessoryHandle]usbManager.USBAccessoryHandle作为参数。

**Since:** 14

**System capability:** SystemCapability.USB.USBManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| accessoryHandle | USBAccessoryHandle | Yes | USB配件句柄。需要通过  [openAccessory]usbManager.openAccessory(accessory: USBAccessory)获取。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes:   1. Mandatory parameters are left unspecified.   2. Incorrect parameter types. |
| 801 | Capability not supported. [since 18] |
| 14400004 | Service exception. Possible causes:   1. No accessory is plugged in. |

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

