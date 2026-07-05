# off

## off('hotkeyChange')

```TypeScript
function off(type: 'hotkeyChange', hotkeyOptions: HotkeyOptions, callback?: Callback<HotkeyOptions>): void
```

取消订阅应用快捷键。使用callback异步回调。

**Since:** 14

**System capability:** SystemCapability.MultimodalInput.Input.InputConsumer

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'hotkeyChange' | Yes | 事件类型，固定取值为'hotkeyChange'。 |
| hotkeyOptions | HotkeyOptions | Yes | 快捷键选项。 |
| callback | Callback&lt;HotkeyOptions> | No | 需要取消订阅的回调函数。若缺省，则取消当前应用快捷键选项已订阅的所有回调函数。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types; 3. Parameter verification failed. |
| 801 | Capability not supported. |

**Example**

```TypeScript
import { inputConsumer } from '@kit.InputKit';

@Entry
@Component
struct Index {
  build() {
    RelativeContainer() {
      Text()
        .onClick(() => {
          let leftCtrlKey = 2072;
          let zKey = 2042;
          // Disable listening for a single callback.
          let hotkeyCallback = (hotkeyOptions: inputConsumer.HotkeyOptions) => {
            console.info(`Succeeded in consuming hotkey, hotkeyOptions: ${JSON.stringify(hotkeyOptions)}.`);
          }
          let hotkeyOption: inputConsumer.HotkeyOptions = { preKeys: [leftCtrlKey], finalKey: zKey, isRepeat: true };
          try {
            // Subscribe to shortcut key change events.
            inputConsumer.on("hotkeyChange", hotkeyOption, hotkeyCallback);
            // Unsubscribe from shortcut key change events.
            inputConsumer.off("hotkeyChange", hotkeyOption, hotkeyCallback);
            console.info(`Succeeded in unsubscribing.`);
          } catch (error) {
            console.error(`Failed to unsubscribe, Code: ${(error as BusinessError).code}, message: ${(error as BusinessError).message}.`);
          }
        })
    }
  }
}


import { inputConsumer } from '@kit.InputKit';

@Entry
@Component
struct Index {
  build() {
    RelativeContainer() {
      Text()
        .onClick(() => {
          let leftCtrlKey = 2072;
          let zKey = 2042;
          // Disable listening for all callbacks.
          let hotkeyCallback = (hotkeyOptions: inputConsumer.HotkeyOptions) => {
            console.info(`Succeeded in consuming hotkey, hotkeyOptions: ${JSON.stringify(hotkeyOptions)}.`);
          }
          let hotkeyOption: inputConsumer.HotkeyOptions = { preKeys: [leftCtrlKey], finalKey: zKey, isRepeat: true };
          try {
            // Subscribe to shortcut key change events.
            inputConsumer.on("hotkeyChange", hotkeyOption, hotkeyCallback);
            // Unsubscribe from shortcut key change events.
            inputConsumer.off("hotkeyChange", hotkeyOption);
            console.info(`Succeeded in unsubscribing.`);
          } catch (error) {
            console.error(`Failed to unsubscribe, Code: ${(error as BusinessError).code}, message: ${(error as BusinessError).message}.`);
          }
        })
    }
  }
}

```

## off('keyPressed')

```TypeScript
function off(type: 'keyPressed', callback?: Callback<KeyEvent>): void
```

取消对'keyPressed'事件的订阅，使用callback异步回调。调用该方法后，被屏蔽的系统按键默认行为将恢复，即系统对音量调节等默认响应将恢复。

**Since:** 16

**System capability:** SystemCapability.MultimodalInput.Input.InputConsumer

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'keyPressed' | Yes | 事件类型，固定取值为'keyPressed'。 |
| callback | Callback&lt;KeyEvent> | No | 需要取消订阅的回调函数。若缺省，则取消当前已订阅的所有回调函数。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types; 3. Parameter verification failed. |
| 801 | Capability not supported. |

**Example**

```TypeScript
import { inputConsumer, KeyEvent } from '@kit.InputKit';

@Entry
@Component
struct Index {
  build() {
    RelativeContainer() {
      Text()
        .onClick(() => {
          try {
            // Disable listening for a single callback.
            let options: inputConsumer.KeyPressedConfig = {
              key: 16,
              action: 1,
              isRepeat: false,
            }
            let callback = (event: KeyEvent) => {
              console.info(`Succeeded in unsubscribing ${JSON.stringify(event)}.`);
            }
            // Subscribe to key press events.
            inputConsumer.on('keyPressed', options, callback);
            // Unsubscribe from key press events.
            inputConsumer.off('keyPressed', callback);
            // Disable listening for all callbacks.
            inputConsumer.off("keyPressed");
          } catch (error) {
            console.error(`Failed to unsubscribe, Code: ${(error as BusinessError).code}, message: ${(error as BusinessError).message}.`);
          }
        })
    }
  }
}

```

