# KeyboardController

Provides the capability of simulating key operations. The simulated key operation sequence must meet the following requirements: 1. A key can only be pressed when it is in the released state, or when it is the most recently pressed key and has not been released. 2. A key can only be released after it has been pressed. 3. A maximum of five keys can be pressed and held simultaneously.

**Since:** 26.0.0

**System capability:** SystemCapability.MultimodalInput.Input.InputSimulator

## Modules to Import

```TypeScript
import { inputEventClient } from '@ohos.multimodalInput.inputEventClient';
```

## pressKey

```TypeScript
pressKey(keyCode: KeyCode): Promise<void>
```

Presses a key. This API uses a promise to return the result.

**Since:** 26.0.0

**Required permissions:** ohos.permission.CONTROL_DEVICE

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.MultimodalInput.Input.InputSimulator

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| keyCode | KeyCode | Yes | Key code of the key to be pressed. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | Promise that returns no value. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission verification failed.The application does not have the permission required to call the API. |
| [4300001](../errorcode-inputeventclient.md#4300001-status-error) | The key is already pressed and is not the most recentlypressed key. |
| [3800001](../errorcode-infraredemitter.md#3800001-multimodal-input-service-internal-error) | Input service exception. |

## releaseKey

```TypeScript
releaseKey(keyCode: KeyCode): Promise<void>
```

Releases a key. This API uses a promise to return the result.

**Since:** 26.0.0

**Required permissions:** ohos.permission.CONTROL_DEVICE

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.MultimodalInput.Input.InputSimulator

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| keyCode | KeyCode | Yes | Key code of the key to be released. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | Promise that returns no value. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission verification failed.The application does not have the permission required to call the API. |
| [4300001](../errorcode-inputeventclient.md#4300001-status-error) | The key is not pressed. |
| [3800001](../errorcode-infraredemitter.md#3800001-multimodal-input-service-internal-error) | Input service exception. |

