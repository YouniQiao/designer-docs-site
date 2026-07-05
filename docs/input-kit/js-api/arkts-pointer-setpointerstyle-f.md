# setPointerStyle

## setPointerStyle

```TypeScript
function setPointerStyle(windowId: int, pointerStyle: PointerStyle, callback: AsyncCallback<void>): void
```

设置指定窗口的鼠标样式类型，此接口仅支持设置本应用进程内窗口的鼠标样式类型，如需通过UIExtensionAbility进程设置宿主窗口的鼠标样式类型，请参阅 [setCursor](docroot://reference/apis-arkui/arkts-apis-uicontext-cursorcontroller.md#setcursor12)，使用callback异步回调。

**Since:** 9

**System capability:** SystemCapability.MultimodalInput.Input.Pointer

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| windowId | int | Yes | 窗口ID。取值范围为大于等于0的整数。 窗口ID合法并且对应窗口存在时，可以设置窗口的鼠标光标样式。 窗口ID合法但窗口不存在时，也可以设置鼠标光标样式。 设置  结果可通过[getPointerStyle]pointer.getPointerStyle(windowId: int, callback: AsyncCallback)获取。 |
| pointerStyle | PointerStyle | Yes | 鼠标样式。 不能传入DEVELOPER_DEFINED_ICON作为参数。 |
| callback | AsyncCallback&lt;void> | Yes | 回调函数。当设置鼠标样式类型成功，err为undefined，否则为错误对象。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types; 3. Parameter verification failed. |
| 202 | Permission denied, non-system app called system api. [staticonly]  When the windowId value is -1, the system permission is required to set the global style. [staticonly] |

**Example**

```TypeScript
import { pointer } from '@kit.InputKit';
import { BusinessError } from '@kit.BasicServicesKit';
import { window } from '@kit.ArkUI';

@Entry
@Component
struct Index {
  build() {
    RelativeContainer() {
      Text()
        .onClick(() => {
          // Obtains the most recent window in the application.
          window.getLastWindow(this.getUIContext().getHostContext(), (error: BusinessError, win: window.Window) => {
            if (error.code) {
              console.error(`Failed to obtain the top window, Code: ${(error as BusinessError).code}, message: ${(error as BusinessError).message}.`);
              return;
            }
            let windowId = win.getWindowProperties().id;
            if (windowId < 0) {
              console.info(`Invalid windowId.`);
              return;
            }
            try {
              // Sets the mouse pointer style.
              pointer.setPointerStyle(windowId, pointer.PointerStyle.CROSS, error => {
                console.info(`Succeeded in setting pointer style.`);
              });
            } catch (error) {
              console.error(`Failed to set pointer style, Code: ${(error as BusinessError).code}, message: ${(error as BusinessError).message}.`);
            }
          });
        })
    }
  }
}

```

## setPointerStyle

```TypeScript
function setPointerStyle(windowId: int, pointerStyle: PointerStyle): Promise<void>
```

设置指定窗口的鼠标样式类型，此接口仅支持设置本应用进程内窗口的鼠标样式类型，如需通过UIExtensionAbility进程设置宿主窗口的鼠标样式类型，请参阅 [setCursor](docroot://reference/apis-arkui/arkts-apis-uicontext-cursorcontroller.md#setcursor12)，使用Promise异步回调。

**Since:** 9

**System capability:** SystemCapability.MultimodalInput.Input.Pointer

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| windowId | int | Yes | 窗口ID。取值范围为大于等于0的整数。 窗口ID合法并且对应窗口存在时，可以设置窗口的鼠标光标样式。 窗口ID合法但窗口不存在时，也可以设置鼠标光标样式。 设置  结果可通过[getPointerStyle]pointer.getPointerStyle(windowId: int)获取。 |
| pointerStyle | PointerStyle | Yes | 鼠标样式。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | Promise对象，无返回结果。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types; 3. Parameter verification failed. |
| 202 | Permission denied, non-system app called system api. [staticonly]  When the windowId value is -1, the system permission is required to set the global style. [staticonly] |

**Example**

```TypeScript
import { pointer } from '@kit.InputKit';
import { BusinessError } from '@kit.BasicServicesKit';
import { window } from '@kit.ArkUI';

@Entry
@Component
struct Index {
  build() {
    RelativeContainer() {
      Text()
        .onClick(() => {
          // Obtains the most recent window in the application.
          window.getLastWindow(this.getUIContext().getHostContext(), (error: BusinessError, win: window.Window) => {
            if (error.code) {
              console.error(`Failed to obtain the top window, Code: ${(error as BusinessError).code}, message: ${(error as BusinessError).message}.`);
              return;
            }
            let windowId = win.getWindowProperties().id;
            if (windowId < 0) {
              console.info(`Invalid windowId.`);
              return;
            }
            try {
              // Sets the mouse pointer style.
              pointer.setPointerStyle(windowId, pointer.PointerStyle.CROSS).then(() => {
                console.info(`Succeeded in setting pointer style.`);
              }).catch((error: BusinessError) => {
                console.error(`Failed to set pointer style, Code: ${(error as BusinessError).code}, message: ${(error as BusinessError).message}.`);
              });
            } catch (error) {
              console.error(`Failed to set pointer style, Code: ${(error as BusinessError).code}, message: ${(error as BusinessError).message}.`);
            }
          });
        })
    }
  }
}

```

