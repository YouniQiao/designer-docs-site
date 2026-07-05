# setSpecificSystemWindowZIndex

## setSpecificSystemWindowZIndex

```TypeScript
function setSpecificSystemWindowZIndex(windowType: WindowType, zIndex: int): Promise<void>
```

设置系统窗口的窗口层级。使用Promise异步回调。 将所有该类型系统窗口zIndex调整为所设置的值，调整前后，该类型窗口之间相对层级保持不变，焦点窗口不发生变化。当应用关闭之后该类型窗口层级恢复默认值。 推荐不同类型窗口设置不同的zIndex，如果已经存在相同zIndex的窗口，设置前后，窗口之间的相对层级保持不变。

**Since:** 23

**System capability:** SystemCapability.Window.SessionManager

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| windowType | WindowType | Yes | 窗口类型。仅支持TYPE_WALLET_SWIPE_CARD、TYPE_VOICE_INTERACTION、TYPE_SCREENSHOT、  TYPE_SCREEN_CONTROL、TYPE_FLOAT_NAVIGATION和TYPE_MUTISCREEN_COLLABORATION。 |
| zIndex | int | Yes | 系统窗口的层级。该参数仅支持整数输入，浮点数输入将向下取整。0和负数会使窗口在桌面以下。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | Promise对象，无返回结果。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 202 | Permission verification failed, non-system application uses system API. |
| 801 | Capability not supported. Failed to call the API due to limited device  capabilities. |
| 1300003 | This window manager service works abnormally. |
| 1300004 | Unauthorized operation. Possible cause: Invalid window type. |

**Example**

```TypeScript
import { window } from '@kit.ArkUI';
import { BusinessError } from '@kit.BasicServicesKit';
try {
  window.setSpecificSystemWindowZIndex(window.WindowType.TYPE_WALLET_SWIPE_CARD, 200).then(() => {
    console.info('Succeeded in setting zIndex');
  }).catch((err: BusinessError) => {
    console.error(`Failed to set zIndex. Cause code: ${err.code}, message: ${err.message}`);
  });
} catch (exception) {
  console.error(`Failed to set zIndex. Cause code: ${exception.code}, message: ${exception.message}`);
}

```

