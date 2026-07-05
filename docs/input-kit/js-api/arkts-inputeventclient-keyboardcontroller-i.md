# KeyboardController

提供模拟按键操作的功能。模拟按键操作序列必须满足以下要求： 1. 按键只能在抬起状态下被按下，或者在该按键是最近按下的按键且未抬起的情况下被按下。 2. 按键只能在被按下后才能抬起。 3. 最多可以同时按下并保持五个按键。

**Since:** 26.0.0

**System capability:** SystemCapability.MultimodalInput.Input.InputSimulator

## Modules to Import

```TypeScript
import { inputEventClient } from '@kit.InputKit';
```

## pressKey

```TypeScript
pressKey(keyCode: KeyCode): Promise<void>
```

按下按键。使用Promise异步回调。

**Since:** 26.0.0

**Required permissions:** 

 ohos.permission.CONTROL_DEVICE

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.MultimodalInput.Input.InputSimulator

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| keyCode | KeyCode | Yes | 要按下的按键键码。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | Promise对象，无返回结果。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission verification failed.  The application does not have the permission required to call the API. |
| 4300001 | The key is already pressed and is not the most recently  pressed key. |
| 3800001 | Input service exception. |

**Example**

```TypeScript
import { inputEventClient, KeyCode } from '@kit.InputKit';
import { BusinessError } from '@kit.BasicServicesKit';

@Entry
@Component
struct Index {
  build() {
    RelativeContainer() {
      Text()
        .onClick(() => {
          inputEventClient.createKeyboardController()
            .then((keyboardController: inputEventClient.KeyboardController) => {
              keyboardController.pressKey(KeyCode.KEYCODE_A);
              return keyboardController;
            })
            .then((keyboardController: inputEventClient.KeyboardController) => {
              keyboardController.releaseKey(KeyCode.KEYCODE_A);
            })
            .then(() => {
              console.info('Succeeded in releasing key');
            })
            .catch((error: BusinessError) => {
              console.error(`Failed to release key. Code: ${error.code}, message: ${error.message}.`);
            });
        })
    }
  }
}

```

## releaseKey

```TypeScript
releaseKey(keyCode: KeyCode): Promise<void>
```

抬起按键。使用Promise异步回调。

**Since:** 26.0.0

**Required permissions:** 

 ohos.permission.CONTROL_DEVICE

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.MultimodalInput.Input.InputSimulator

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| keyCode | KeyCode | Yes | 要抬起的按键键码。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | Promise对象，无返回结果。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission verification failed.  The application does not have the permission required to call the API. |
| 4300001 | The key is not pressed. |
| 3800001 | Input service exception. |

