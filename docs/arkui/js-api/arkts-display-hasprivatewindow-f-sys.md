# hasPrivateWindow

## hasPrivateWindow

```TypeScript
function hasPrivateWindow(displayId: long): boolean
```

查询指定display对象上是否有可见的隐私窗口。可通过 [setWindowPrivacyMode()](docroot://reference/apis-arkui/arkts-apis-window-Window.md#setwindowprivacymode9)接口设置隐私窗口。 隐私窗口内容将无法被截屏或录屏。

**Since:** 9

**System capability:** SystemCapability.WindowManager.WindowManager.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| displayId | long | Yes | 屏幕ID，该参数仅支持整数输入。该参数大于等于0。 |

**Return value:**

| Type | Description |
| --- | --- |
| boolean | 查询的display对象上是否有可见的隐私窗口。true表示此display对象上有可见的隐私窗口，false表示此display对象上没有可见的隐私窗口。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 202 | Permission verification failed. A non-system application calls a system API. |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.  2. Incorrect parameter types. 3. Parameter verification failed. |
| 1400003 | This display manager service works abnormally. |

**Example**

```TypeScript
import { display } from '@kit.ArkUI';

let displayClass: display.Display | null = null;
try {
  // Obtain the default Display object.
  displayClass = display.getDefaultDisplaySync();

  let ret: boolean | undefined = undefined;
  try {
    // Check whether there is a privacy window on the default display.
    ret = display.hasPrivateWindow(displayClass.id);
  } catch (exception) {
    console.error(`Failed to check has privateWindow or not. Code: ${exception.code}, message: ${exception.message}`);
  }
  if (ret == undefined) {
    console.error('Failed to check has privateWindow or not.');
  }
  if (ret) {
    console.info('There has privateWindow.');
  } else if (!ret) {
    console.info('There has no privateWindow.');
  }
} catch (exception) {
  console.error(`Failed to obtain the default display object. Code: ${exception.code}, message: ${exception.message}`);
}

```

