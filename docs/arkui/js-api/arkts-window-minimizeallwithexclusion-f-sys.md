# minimizeAllWithExclusion

## minimizeAllWithExclusion

```TypeScript
function minimizeAllWithExclusion(displayId: long, excludeWindowId: int): Promise<void>
```

最小化指定ID的屏幕中除指定窗口之外的所有主窗口，使用Promise异步回调。

**Since:** 23

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.WindowManager.WindowManager.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| displayId | long | Yes | 屏幕ID，该参数仅支持整数输入，输入浮点数会向下取整。 |
| excludeWindowId | int | Yes | 窗口ID。可通过  [getWindowProperties](arkts-window-window-i.md#getWindowProperties)接口获取到相关窗口属性，其中属性id即对应为窗口ID。窗口ID小于等于0  ，或窗口ID为null或者undefined时，会抛出[401错误码](docroot://reference/errorcode-universal.md#401-参数检查失败)；窗口ID大于0但是不存在会抛出13000  02错误码；窗口ID大于0且窗口存在但是不在该屏幕，最小化指定屏幕上的所有主窗口。该参数仅支持整数输入，输入浮点数会向下取整。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | Promise对象，无返回结果。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 202 | Permission verification failed. A nonsystem application calls a system API. |
| 1300002 | This window state is abnormal.  Possible cause: 1. Window is nullptr;  2. Failed to find specified window by id. |
| 1300003 | This window manager service works abnormally. |

**Example**

```TypeScript
import { display, window } from '@kit.ArkUI';
import { BusinessError } from '@kit.BasicServicesKit';

let displayClass: display.Display | null = null;
displayClass = display.getDefaultDisplaySync();
let excludeWindowId = 1;

try {
  let promise = window.minimizeAllWithExclusion(displayClass.id, excludeWindowId);
  promise.then(() => {
    console.info('Succeeded in minimizing all windows.');
  }).catch((err: BusinessError) => {
    console.error(`Failed to minimize all windows. Cause code: ${err.code}, message: ${err.message}`);
  });
} catch (exception) {
  console.error(`Failed to minimize all windows. Cause code: ${exception.code}, message: ${exception.message}`);
}

```

