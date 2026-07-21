# on (System API)

## Modules to Import

```TypeScript
import { inputConsumer } from '@kit.InputKit';
```

<a id="on"></a>
## on('key')

```TypeScript
function on(type: 'key', keyOptions: KeyOptions, callback: Callback<KeyOptions>): void
```

Enables listening for system hotkey change events. This API uses an asynchronous callback to return the system hotkey data when a system hotkey event that meets the specified condition occurs.

> **NOTE**  
>  
> - You can subscribe to only the Down event of a key, or subscribe to both the Down and Up events of a key.  
>  
> - If you subscribe to only the Up event of a key, the Down event may be consumed by the focus window, and the Up  
> event may not be closed. In this case, check whether the design and implementation are proper.

**Since:** 8

<!--Device-inputConsumer-function on(type: 'key', keyOptions: KeyOptions, callback: Callback<KeyOptions>): void--><!--Device-inputConsumer-function on(type: 'key', keyOptions: KeyOptions, callback: Callback<KeyOptions>): void-End-->

**System capability:** SystemCapability.MultimodalInput.Input.InputConsumer

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'key' | Yes | Event type. Currently, only **key** is supported. |
| keyOptions | [KeyOptions](../../apis-test-kit/arkts-apis/arkts-test-uitest-keyoptions-i.md) | Yes | Combination key options. |
| callback | [Callback](../../apis-arkui/arkts-components/arkts-arkui-callback-i.md)&lt;KeyOptions&gt; | Yes | Callback used to return the combination key data when a combination key event that meets the specified condition occurs. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;<br>2. Incorrect parameter types; 3. Parameter verification failed. |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Permission denied, non-system app called system api.<br>**Applicable version:** 12 and later |

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

