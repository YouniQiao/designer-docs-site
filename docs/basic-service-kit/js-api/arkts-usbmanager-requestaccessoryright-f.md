# requestAccessoryRight

## requestAccessoryRight

```TypeScript
function requestAccessoryRight(accessory: USBAccessory): Promise<boolean>
```

为指定应用程序申请访问USB配件的访问权限。使用Promise异步回调。 需要调用[usbManager.getAccessoryList]usbManager.getAccessoryList()获取配件列表，得到 [USBAccessory]usbManager.USBAccessory作为参数。

**Since:** 14

**System capability:** SystemCapability.USB.USBManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| accessory | USBAccessory | Yes | USB配件，需要通过[getAccessoryList]usbManager.getAccessoryList()获取。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;boolean> | Promise对象，返回应用程序访问配件权限的申请结果。返回true表示权限申请成功；返回false表示权限申请失败。 |

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
  hilog.info(0, 'testTag ui', `requestAccessoryRight success, ret:${flag}`)
} catch (error) {
  hilog.error(0, 'testTag ui', `requestAccessoryRight error ${error.code}, message is ${error.message}`)
}

```

