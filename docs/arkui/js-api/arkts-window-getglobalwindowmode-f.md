# getGlobalWindowMode

## getGlobalWindowMode

```TypeScript
function getGlobalWindowMode(displayId?: long): Promise<int>
```

获取指定屏幕上生命周期位于前台的窗口对应的窗口模式，使用Promise异步回调。

**Since:** 20

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Window.SessionManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| displayId | long | No |  |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;int> | Promise对象。返回获取到的窗口模式。每一个二进制位代表一种窗口模式，当前支持的窗口模式见  [GlobalWindowMode](arkts-window-globalwindowmode-e.md#GlobalWindowMode)，返回值为对应窗口模式值按位进行或运算的结果。比如，当前屏幕上存在全屏窗口、悬浮窗和画中画三种窗口  ，则返回值为`0b1\|0b100\|0b1000 = 13`。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 801 | Capability not supported.  function getGlobalWindowMode can not work correctly due to limited device capabilities. |
| 1300003 | This window manager service works abnormally.  Possible cause: Internal task error. |
| 1300016 | Parameter error. Possible cause: 1. Invalid parameter range;  2. The parameter format is incorrect. |

**Example**

```TypeScript
import { window } from '@kit.ArkUI';
import { BusinessError } from '@kit.BasicServicesKit';

try {
  let displayId = 0;
  let promise = window.getGlobalWindowMode(displayId);
  promise.then((data) => {
    console.info(`Succeeded in obtaining global window mode. Data: ${data}`);
  }).catch((err: BusinessError) => {
    console.error(`Failed to obtain global window mode. Cause code: ${err.code}, message: ${err.message}`);
  });
} catch (exception) {
  console.error(`Failed to obtain global window mode. Cause code: ${exception.code}, message: ${exception.message}`);
}

```

