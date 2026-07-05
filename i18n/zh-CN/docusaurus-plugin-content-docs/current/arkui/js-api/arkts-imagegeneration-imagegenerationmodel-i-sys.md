# ImageGenerationModel

AI Image Model Abstract Interface.

**起始版本：** 23

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**系统接口：** 此接口为系统接口。

## 导入模块

```TypeScript
import { imageGeneration } from '@kit.ArkUI';
```

## cancelImageGeneration

```TypeScript
cancelImageGeneration(sessionId: int): void
```

Cancel AI image generation task.

**起始版本：** 23

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| sessionId | int | 是 | The session id for cancel an AI image generation task.  Value: range: [0, +∞] |

## getModelSupportStyles

```TypeScript
getModelSupportStyles(): Array<ImageStyle>
```

Get the types of image styles supported by the AI model.

**起始版本：** 23

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**系统接口：** 此接口为系统接口。

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Array&lt;ImageStyle> | image style information. |

## onComplain

```TypeScript
onComplain(sessionId: int, request: GenerateImageTaskParams, result: GenerateImageTaskResult): void
```

User use complaint menu to complain the result of an AI-generated image task.

**起始版本：** 23

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| sessionId | int | 是 | The session id of AI image generation task.  Value: range: [0, +∞] |
| request | GenerateImageTaskParams | 是 | The origin request for AI-generated image task. |
| result | GenerateImageTaskResult | 是 | The result for AI-generated image task. |

## requestImageGeneration

```TypeScript
requestImageGeneration(sessionId: int, params: GenerateImageTaskParams,
      callback: Callback<GenerateImageTaskPartialResult>): void
```

Request AI image generation task to get the generated image.

**起始版本：** 23

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| sessionId | int | 是 | The session id for requesting an AI image generation task.  Value: range:[0, +∞] |
| params | GenerateImageTaskParams | 是 | Parameters for requesting an AI image generation task. |
| callback | Callback&lt;GenerateImageTaskPartialResult> | 是 | the callback used to return the GenerateImageTaskPartialResult. |

