# off (System API)

## Modules to Import

```TypeScript
import { inputConsumer } from '@kit.InputKit';
```

## off('key')

```TypeScript
function off(type: 'key', keyOptions: KeyOptions, callback?: Callback<KeyOptions>): void
```

Disables listening for system hotkey change events. This API uses an asynchronous callback to return the result.

**Since:** 8

<!--Device-inputConsumer-function off(type: 'key', keyOptions: KeyOptions, callback?: Callback<KeyOptions>): void--><!--Device-inputConsumer-function off(type: 'key', keyOptions: KeyOptions, callback?: Callback<KeyOptions>): void-End-->

**System capability:** SystemCapability.MultimodalInput.Input.InputConsumer

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'key' | Yes | Event type. Currently, only **key** is supported. |
| keyOptions | [KeyOptions](../../apis-test-kit/arkts-apis/arkts-test-uitest-keyoptions-i.md) | Yes | Combination key options. |
| callback | [Callback](../../apis-arkui/arkts-components/arkts-arkui-common-callback-i.md)<KeyOptions> | No | Callback to unregister. If this parameter is not specified, listening will be disabled for all callbacks registered by the current application. |

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
          // Disable listening for a single callback.
          let callback = (keyOptions: inputConsumer.KeyOptions) => {
            console.info(`keyOptions: ${JSON.stringify(keyOptions)}`);
          }
          let keyOption: inputConsumer.KeyOptions = {preKeys: [leftAltKey], finalKey: tabKey, isFinalKeyDown: true, finalKeyDownDuration: 0};
          try {
            inputConsumer.on("key", keyOption, callback);
            inputConsumer.off("key", keyOption, callback);
            console.info(`Unsubscribe success`);
          } catch (error) {
            console.error(`Execute failed, error: ${JSON.stringify(error, [`code`, `message`])}`);
          }
        })
    }
  }
}

```

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
          // Disable listening for all callbacks.
          let callback = (keyOptions: inputConsumer.KeyOptions) => {
            console.info(`keyOptions: ${JSON.stringify(keyOptions)}`);
          }
          let keyOption: inputConsumer.KeyOptions = {preKeys: [leftAltKey], finalKey: tabKey, isFinalKeyDown: true, finalKeyDownDuration: 0};
          try {
            inputConsumer.on("key", keyOption, callback);
            inputConsumer.off("key", keyOption);
            console.info(`Unsubscribe success`);
          } catch (error) {
            console.error(`Execute failed, error: ${JSON.stringify(error, [`code`, `message`])}`);
          }
        })
    }
  }
}

```

