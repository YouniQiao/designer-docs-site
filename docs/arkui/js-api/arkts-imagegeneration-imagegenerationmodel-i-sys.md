# ImageGenerationModel

AI Image Model Abstract Interface.

**Since:** 23

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**System API:** This is a system API.

## Modules to Import

```TypeScript
import { imageGeneration } from '@kit.ArkUI';
```

## cancelImageGeneration

```TypeScript
cancelImageGeneration(sessionId: int): void
```

Cancel AI image generation task.

**Since:** 23

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| sessionId | int | Yes | The session id for cancel an AI image generation task.  Value: range: [0, +∞] |

## getModelSupportStyles

```TypeScript
getModelSupportStyles(): Array<ImageStyle>
```

Get the types of image styles supported by the AI model.

**Since:** 23

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**System API:** This is a system API.

**Return value:**

| Type | Description |
| --- | --- |
| Array&lt;ImageStyle> | image style information. |

## onComplain

```TypeScript
onComplain(sessionId: int, request: GenerateImageTaskParams, result: GenerateImageTaskResult): void
```

User use complaint menu to complain the result of an AI-generated image task.

**Since:** 23

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| sessionId | int | Yes | The session id of AI image generation task.  Value: range: [0, +∞] |
| request | GenerateImageTaskParams | Yes | The origin request for AI-generated image task. |
| result | GenerateImageTaskResult | Yes | The result for AI-generated image task. |

## requestImageGeneration

```TypeScript
requestImageGeneration(sessionId: int, params: GenerateImageTaskParams,
      callback: Callback<GenerateImageTaskPartialResult>): void
```

Request AI image generation task to get the generated image.

**Since:** 23

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| sessionId | int | Yes | The session id for requesting an AI image generation task.  Value: range:[0, +∞] |
| params | GenerateImageTaskParams | Yes | Parameters for requesting an AI image generation task. |
| callback | Callback&lt;GenerateImageTaskPartialResult> | Yes | the callback used to return the GenerateImageTaskPartialResult. |

