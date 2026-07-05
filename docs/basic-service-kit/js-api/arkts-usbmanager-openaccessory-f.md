# openAccessory

## openAccessory

```TypeScript
function openAccessory(accessory: USBAccessory): USBAccessoryHandle
```

获取配件句柄并打开配件文件描述符。之后可以通过CoreFileKit提供的read/write接口和配件进行通信。 需要调用[usbManager.getAccessoryList]usbManager.getAccessoryList()获取配件列表，得到 [USBAccessory]usbManager.USBAccessory作为参数。

**Since:** 14

**System capability:** SystemCapability.USB.USBManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| accessory | USBAccessory | Yes | USB配件，需要通过[getAccessoryList]usbManager.getAccessoryList()获取。 |

**Return value:**

| Type | Description |
| --- | --- |
| USBAccessoryHandle | USB配件句柄。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes:   1. Mandatory parameters are left unspecified.   2. Incorrect parameter types. |
| 801 | Capability not supported. [since 18] |
| 14400001 | Access right denied. Call requestRight to get the USBDevicePipe access right first. |
| 14400004 | Service exception. Possible causes:   1. No accessory is plugged in. |
| 14401001 | The target USBAccessory not matched. |
| 14401002 | Failed to open the native accessory node. |
| 14401003 | Cannot reopen the accessory. |

**Example**

```TypeScript
import { hilog } from '@kit.PerformanceAnalysisKit';
import { fileIo } from '@kit.CoreFileKit';
try {
  let accList: usbManager.USBAccessory[] = usbManager.getAccessoryList()
  let flag = usbManager.requestAccessoryRight(accList?.[0])
  let handle = usbManager.openAccessory(accList?.[0])
  hilog.info(0, 'testTag ui', `openAccessory success`)
  let arrayBuffer = new ArrayBuffer(4096);
  let readLength = fileIo.readSync(handle.accessoryFd, arrayBuffer, {offset: 0, length: 4096});
  hilog.info(0, 'testTag ui', 'readSync ret: ' + readLength.toString(10));
} catch (error) {
  hilog.error(0, 'testTag ui', `openAccessory error ${error.code}, message is ${error.message}`)
}

```

