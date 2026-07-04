---
last_update:
  date: 2026-07-04
---

# closeAccessory

## closeAccessory

```TypeScript
function closeAccessory(accessoryHandle: USBAccessoryHandle): void
```

关闭配件文件描述符。 需要调用[usbManager.openAccessory](arkts-basicservices-openaccessory-f.md#openaccessory-1)获取配件列表，得到 [USBAccessoryHandle](arkts-basicservices-usbaccessoryhandle-i.md#usbaccessoryhandle)作为参数。

**起始版本：** 14

**系统能力：** SystemCapability.USB.USBManager

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| accessoryHandle | USBAccessoryHandle | 是 | USB配件句柄。需要通过[openAccessory](arkts-basicservices-openaccessory-f.md#openaccessory-1)获取。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-请求广告参数错误) | Parameter error. Possible causes:<br>1. Mandatory parameters are left unspecified.<br>2. Incorrect parameter types. |
| [801](../../apis-ads-kit/errorcode-ads.md#801-请求广告返回错误码) | Capability not supported.<br>**适用版本：** 18 |
| [14400004](../../apis-basic-services-kit/errorcode-usb.md#14400004-服务异常) | Service exception. Possible causes:<br>1. No accessory is plugged in. |

**示例：**

```TypeScript
import { hilog } from '@kit.PerformanceAnalysisKit';
try {
  let accList: usbManager.USBAccessory[] = usbManager.getAccessoryList()
  let flag = usbManager.requestAccessoryRight(accList?.[0])
  if (!flag) {
    return
  }
  let handle = usbManager.openAccessory(accList?.[0])
  usbManager.closeAccessory(handle)
  hilog.info(0, 'testTag ui', `closeAccessory success`)
} catch (error) {
  hilog.error(0, 'testTag ui', `closeAccessory error ${error.code}, message is ${error.message}`)
}

```

