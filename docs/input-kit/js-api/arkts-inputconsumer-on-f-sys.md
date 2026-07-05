# on

## on('key')

```TypeScript
function on(type: 'key', keyOptions: KeyOptions, callback: Callback<KeyOptions>): void
```

订阅系统快捷键，使用callback异步回调。 > **说明：** > > - 支持仅订阅按键的down事件，或者同时订阅按键的down事件和up事件。 > > - 若需要仅订阅按键的up事件，会存在down事件被焦点窗口消费，而无up事件闭环的风险，需要排查设计实现是否合理。

**Since:** 8

**System capability:** SystemCapability.MultimodalInput.Input.InputConsumer

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'key' | Yes | 事件类型，目前仅支持'key'。 |
| keyOptions | KeyOptions | Yes | 组合键选项。从API版本26.0.0起keyOptions中新增参数  [KeyCommandTriggerType]inputConsumer.KeyCommandTriggerType，本接口无需关注此参数。 |
| callback | Callback&lt;KeyOptions> | Yes | 回调函数，返回组合按键数据。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types; 3. Parameter verification failed. |
| 202 | Permission denied, non-system app called system api. [since 12] |

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
          let leftAltKey = 2045;
          let tabKey = 2049;
          let keyOptions: inputConsumer.KeyOptions = {
            preKeys: [ leftAltKey ],
            finalKey: tabKey,
            isFinalKeyDown: true,
            finalKeyDownDuration: 0
          };
          let callback = (keyOptions: inputConsumer.KeyOptions) => {
            console.info(`keyOptions: ${JSON.stringify(keyOptions)}`);
          }
          try {
            inputConsumer.on("key", keyOptions, callback);
          } catch (error) {
            console.error(`Subscribe failed, error: ${JSON.stringify(error, [`code`, `message`])}`);
          }
        })
    }
  }
}

```

