# ImageGenerationModel (System API)

AI Image Model Abstract Interface.

**Since:** 23

<!--Device-imageGeneration-interface ImageGenerationModel--><!--Device-imageGeneration-interface ImageGenerationModel-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**System API:** This is a system API.

## Modules to Import

```TypeScript
import { imageGeneration } from '@kit.ArkUI';
```

<a id="cancelimagegeneration"></a>
## cancelImageGeneration

```TypeScript
cancelImageGeneration(sessionId: number): void
```

Cancel AI image generation task.

**Since:** 23

**Model restriction:** This API can be used only in the stage model.

<!--Device-ImageGenerationModel-cancelImageGeneration(sessionId: int): void--><!--Device-ImageGenerationModel-cancelImageGeneration(sessionId: int): void-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| sessionId | number | Yes | The session id for cancel an AI image generation task.<br>Value: range: [0, +∞] |

<a id="getmodelsupportstyles"></a>
## getModelSupportStyles

```TypeScript
getModelSupportStyles(): Array<ImageStyle>
```

Get the types of image styles supported by the AI model.

**Since:** 23

**Model restriction:** This API can be used only in the stage model.

<!--Device-ImageGenerationModel-getModelSupportStyles(): Array<ImageStyle>--><!--Device-ImageGenerationModel-getModelSupportStyles(): Array<ImageStyle>-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**System API:** This is a system API.

**Return value:**

| Type | Description |
| --- | --- |
| Array&lt;ImageStyle&gt; | image style information. |

<a id="oncomplain"></a>
## onComplain

```TypeScript
onComplain(sessionId: number, request: GenerateImageTaskParams, result: GenerateImageTaskResult): void
```

User use complaint menu to complain the result of an AI-generated image task.

**Since:** 23

**Model restriction:** This API can be used only in the stage model.

<!--Device-ImageGenerationModel-onComplain(sessionId: int, request: GenerateImageTaskParams, result: GenerateImageTaskResult): void--><!--Device-ImageGenerationModel-onComplain(sessionId: int, request: GenerateImageTaskParams, result: GenerateImageTaskResult): void-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| sessionId | number | Yes | The session id of AI image generation task.<br>Value: range: [0, +∞] |
| request | [GenerateImageTaskParams](arkts-arkui-imagegeneration-generateimagetaskparams-i-sys.md) | Yes | The origin request for AI-generated image task. |
| result | [GenerateImageTaskResult](arkts-arkui-imagegeneration-generateimagetaskresult-i-sys.md) | Yes | The result for AI-generated image task. |

<a id="requestimagegeneration"></a>
## requestImageGeneration

```TypeScript
requestImageGeneration(sessionId: number, params: GenerateImageTaskParams,
      callback: Callback<GenerateImageTaskPartialResult>): void
```

Request AI image generation task to get the generated image.

**Since:** 23

**Model restriction:** This API can be used only in the stage model.

<!--Device-ImageGenerationModel-requestImageGeneration(sessionId: int, params: GenerateImageTaskParams,
      callback: Callback<GenerateImageTaskPartialResult>): void--><!--Device-ImageGenerationModel-requestImageGeneration(sessionId: int, params: GenerateImageTaskParams,
      callback: Callback<GenerateImageTaskPartialResult>): void-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| sessionId | number | Yes | The session id for requesting an AI image generation task.<br>Value: range:[0, +∞] |
| params | [GenerateImageTaskParams](arkts-arkui-imagegeneration-generateimagetaskparams-i-sys.md) | Yes | Parameters for requesting an AI image generation task. |
| callback | [Callback](../arkts-components/arkts-arkui-callback-i.md)&lt;GenerateImageTaskPartialResult&gt; | Yes | the callback used to return the GenerateImageTaskPartialResult. |

