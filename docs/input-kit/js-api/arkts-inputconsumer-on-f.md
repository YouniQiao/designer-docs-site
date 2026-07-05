# on

## on('hotkeyChange')

```TypeScript
function on(type: 'hotkeyChange', hotkeyOptions: HotkeyOptions, callback: Callback<HotkeyOptions>): void
```

订阅应用快捷键。获取满足条件的组合按键输入事件，使用callback异步回调。

**Since:** 14

**System capability:** SystemCapability.MultimodalInput.Input.InputConsumer

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'hotkeyChange' | Yes | 事件类型，固定取值为'hotkeyChange'。 |
| hotkeyOptions | HotkeyOptions | Yes | 快捷键选项。 |
| callback | Callback&lt;HotkeyOptions> | Yes | 回调函数，返回满足条件的组合按键输入事件。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types; 3. Parameter verification failed. |
| 801 | Capability not supported. |
| 4200002 | The hotkey has been used by the system. |
| 4200003 | The hotkey has been subscribed to by another. |

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
          let hotkeyOptions: inputConsumer.HotkeyOptions = {
            preKeys: [leftCtrlKey],
            finalKey: zKey,
            isRepeat: true
          };
          let hotkeyCallback = (hotkeyOptions: inputConsumer.HotkeyOptions) => {
            console.info(`Succeeded in consuming hotkey, hotkeyOptions: ${JSON.stringify(hotkeyOptions)}.`);
          }
          try {
            // Subscribe to shortcut key change events.
            inputConsumer.on("hotkeyChange", hotkeyOptions, hotkeyCallback);
          } catch (error) {
            console.error(`Failed to Subscribe hot key, Code: ${(error as BusinessError).code}, message: ${(error as BusinessError).message}.`);
          }
        })
    }
  }
}

```

## on('keyPressed')

```TypeScript
function on(type: 'keyPressed', options: KeyPressedConfig, callback: Callback<KeyEvent>): void
```

订阅按键按下事件。若当前应用窗口为前台焦点窗口，用户按下指定按键，会触发回调。使用callback异步回调。 订阅成功后，该按键事件的系统默认行为将被屏蔽，即不会再触发系统级的响应，如音量调节。要恢复系统响应，请使用 [off]inputConsumer.off(type: 'keyPressed', callback?: Callback<KeyEvent>)方法取消订阅。

**Since:** 16

**System capability:** SystemCapability.MultimodalInput.Input.InputConsumer

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'keyPressed' | Yes | 事件类型，固定取值为'keyPressed'。 |
| options | KeyPressedConfig | Yes | 按键事件消费设置。 |
| callback | Callback&lt;KeyEvent> | Yes | 回调函数，返回按键事件。订阅不同的按键事件需要使用不同的callback，否则订阅不生效。 |

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
            let options: inputConsumer.KeyPressedConfig = {
              key: 16,
              action: 1,
              isRepeat: false,
            }
            // Subscribe to key press events.
            inputConsumer.on('keyPressed', options, (event: KeyEvent) => {
              console.info(`Succeeded in subscribing ${JSON.stringify(event)}.`);
            });
          } catch (error) {
            console.error(`Failed to subscribe , Code: ${(error as BusinessError).code}, message: ${(error as BusinessError).message}.`);
          }
        })
    }
  }
}

```

