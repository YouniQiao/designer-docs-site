# offKey (System API)

## Modules to Import

```TypeScript
import { inputConsumer } from '@ohos.multimodalInput.inputConsumer';
```

## offKey

```TypeScript
function offKey(keyOptions: KeyOptions, callback?: KeyCommandCallback): void
```

Unsubscribe system keys.

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.MultimodalInput.Input.InputConsumer

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| keyOptions | KeyOptions | Yes | the key events about input which is to be subscribed. |
| callback | KeyCommandCallback | No | Callback function that receives reported data. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Permission denied, non-system app called system api. |

