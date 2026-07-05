# GeneratorDialogOptions

Parameters used to open the ImageGeneratorDialog.

**起始版本：** 23

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**系统接口：** 此接口为系统接口。

## 导入模块

```TypeScript
import { imageGeneration } from '@kit.ArkUI';
```

## onAreaDidChange

```TypeScript
onAreaDidChange?: Callback<common2D.Rect>
```

Callback triggered when the ImageGeneratorDialog changes in size or position.

**类型：** Callback<common2D.Rect>

**起始版本：** 23

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**系统接口：** 此接口为系统接口。

## images

```TypeScript
images?: Array<ImageItem>
```

Initial image parameters used for AI-generated image tasks.

**类型：** Array<ImageItem>

**起始版本：** 23

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**系统接口：** 此接口为系统接口。

## minimizeDuringGeneration

```TypeScript
minimizeDuringGeneration?: boolean
```

Indicates whether to enable minimize during image generation.

**类型：** boolean

**起始版本：** 26.0.0

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**系统接口：** 此接口为系统接口。

## customIcons

```TypeScript
customIcons?: Array<GeneratorResultPageIcon>
```

Custom icons used on the AI generated image results page.

**类型：** Array<GeneratorResultPageIcon>

**起始版本：** 23

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**系统接口：** 此接口为系统接口。

## textGenerationModel

```TypeScript
textGenerationModel?: TextGenerationModel
```

Text polishing model used in AI generate image tasks.

**类型：** TextGenerationModel

**起始版本：** 23

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**系统接口：** 此接口为系统接口。

## liveViewInfo

```TypeScript
liveViewInfo?: LiveViewInfo
```

Information for LiveView in AI image generation.

**类型：** LiveViewInfo

**起始版本：** 26.0.0

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**系统接口：** 此接口为系统接口。

## customImportIcon

```TypeScript
customImportIcon?: CustomImportIcon
```

The following configuration parameters are used to customize the imported icon.

**类型：** CustomImportIcon

**起始版本：** 26.0.0

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**系统接口：** 此接口为系统接口。

## content

```TypeScript
content?: ResourceStr
```

Initial text information used for AI-generated image tasks.

**类型：** ResourceStr

**起始版本：** 23

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**系统接口：** 此接口为系统接口。

## imageGenerationModel

```TypeScript
imageGenerationModel?: ImageGenerationModel
```

Model used for AI generate image tasks.

**类型：** ImageGenerationModel

**起始版本：** 23

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**系统接口：** 此接口为系统接口。

