# setKeyboardRepeatDelay

## setKeyboardRepeatDelay

```TypeScript
function setKeyboardRepeatDelay(delay: int, callback: AsyncCallback<void>): void
```

设置键盘按键的重复时延，使用callback异步回调。

**Since:** 10

**System capability:** SystemCapability.MultimodalInput.Input.InputDevice

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| delay | int | Yes | 键盘按键重复延迟时间，默认值500ms，调节范围[300ms，1000ms]。 |
| callback | AsyncCallback&lt;void> | Yes | 回调函数。当设置键盘按键重复延迟时间成功，err为undefined，否则为错误对象。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 202 | SystemAPI permission error. |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types; 3. Parameter verification failed. |

**Example**

```TypeScript
import { inputDevice } from '@kit.InputKit';
import { BusinessError } from '@kit.BasicServicesKit';

@Entry
@Component
struct Index {
  build() {
    RelativeContainer() {
      Text()
        .onClick(() => {
          try {
            // Set Keyboard Repeat Delay
            inputDevice.setKeyboardRepeatDelay(350, (error: BusinessError) => {
              if (error) {
                console.error(`Failed to set keyboard repeat delay, Code: ${(error as BusinessError).code}, message: ${(error as BusinessError).message}.`);
                return;
              }
              console.info(`Succeeded in setting keyboard repeat delay.`);
            });
          } catch (error) {
            console.error(`Failed to set keyboard repeat delay, Code: ${(error as BusinessError).code}, message: ${(error as BusinessError).message}.`);
          }
        })
    }
  }
}

```

## setKeyboardRepeatDelay

```TypeScript
function setKeyboardRepeatDelay(delay: int): Promise<void>
```

设置键盘按键的重复时延，使用Promise异步回调。

**Since:** 10

**System capability:** SystemCapability.MultimodalInput.Input.InputDevice

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| delay | int | Yes | 键盘按键重复延迟时间，默认值500ms，调节范围[300ms，1000ms]。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | Promise对象，无返回结果。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 202 | SystemAPI permission error. |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types; 3. Parameter verification failed. |

**Example**

```TypeScript
import { inputDevice } from '@kit.InputKit';
import { BusinessError } from '@kit.BasicServicesKit';

@Entry
@Component
struct Index {
  build() {
    RelativeContainer() {
      Text()
        .onClick(() => {
          try {
            // Set the key repeat delay to 350 ms
            inputDevice.setKeyboardRepeatDelay(350).then(() => {
              console.info(`Succeeded in setting keyboard repeat delay.`);
            }).catch((error: BusinessError) => {
              console.error(`Failed to set keyboard, Code: ${(error as BusinessError).code}, message: ${(error as BusinessError).message}.`);
            })
          } catch (error) {
            console.error(`Failed to set keyboard, Code: ${(error as BusinessError).code}, message: ${(error as BusinessError).message}.`);
          }
        })
    }
  }
}

```

