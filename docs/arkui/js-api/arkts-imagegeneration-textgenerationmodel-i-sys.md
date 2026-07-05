# TextGenerationModel

AI Text Model Abstract Interface.

**Since:** 23

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**System API:** This is a system API.

## Modules to Import

```TypeScript
import { imageGeneration } from '@kit.ArkUI';
```

## cancelTextGeneration

```TypeScript
cancelTextGeneration(sessionId: int): void
```

Cancel AI text generation task.

**Since:** 23

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| sessionId | int | Yes | The session id for canceling an AI text generation task.  Value range:[0, +∞] |

## onComplain

```TypeScript
onComplain(sessionId: int, request: string, result: GenerateTextTaskResult): void
```

User use complaint menu to complain the result of an AI-generated text task.

**Since:** 23

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| sessionId | int | Yes | The session id of AI text generation task.  Value: range: [0, +∞] |
| request | string | Yes | The origin request for AI-generated text task. |
| result | GenerateTextTaskResult | Yes | The result for AI-generated text task. |

## requestTextGeneration

```TypeScript
requestTextGeneration(sessionId: int, value: string,
      callback: Callback<GenerateTextTaskPartialResult>): void
```

Request AI text generation task to get the generated text.

**Since:** 23

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| sessionId | int | Yes | The session id for requesting an AI text generation task.  Value range: [0, +∞] |
| value | string | Yes | Parameters for requesting an AI text generation task. |
| callback | Callback&lt;GenerateTextTaskPartialResult> | Yes | the callback  used to return the GenerateTextTaskPartialResult. |

