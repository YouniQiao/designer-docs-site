# GeneratorDialogOptions (System API)

Parameters used to open the ImageGeneratorDialog.

**Since:** 23

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**System API:** This is a system API.

## Modules to Import

```TypeScript
import { imageGeneration } from '@ohos.arkui.intelligence.imageGeneration';
```

## content

```TypeScript
content?: ResourceStr
```

Initial text information used for AI-generated image tasks.

**Type:** ResourceStr

**Since:** 23

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**System API:** This is a system API.

## customIcons

```TypeScript
customIcons?: Array<GeneratorResultPageIcon>
```

Custom icons used on the AI generated image results page.

**Type:** Array<GeneratorResultPageIcon>

**Since:** 23

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**System API:** This is a system API.

## customImportIcon

```TypeScript
customImportIcon?: CustomImportIcon
```

The following configuration parameters are used to customize the imported icon.

**Type:** CustomImportIcon

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**System API:** This is a system API.

## imageGenerationModel

```TypeScript
imageGenerationModel?: ImageGenerationModel
```

Model used for AI generate image tasks.

**Type:** ImageGenerationModel

**Since:** 23

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**System API:** This is a system API.

## images

```TypeScript
images?: Array<ImageItem>
```

Initial image parameters used for AI-generated image tasks.

**Type:** Array<ImageItem>

**Since:** 23

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**System API:** This is a system API.

## liveViewInfo

```TypeScript
liveViewInfo?: LiveViewInfo
```

Information for LiveView in AI image generation.

**Type:** LiveViewInfo

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**System API:** This is a system API.

## minimizeDuringGeneration

```TypeScript
minimizeDuringGeneration?: boolean
```

Indicates whether to enable minimize during image generation.

**Type:** boolean

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**System API:** This is a system API.

## onAreaDidChange

```TypeScript
onAreaDidChange?: Callback<common2D.Rect>
```

Callback triggered when the ImageGeneratorDialog changes in size or position.

**Type:** Callback<common2D.Rect>

**Since:** 23

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**System API:** This is a system API.

## textGenerationModel

```TypeScript
textGenerationModel?: TextGenerationModel
```

Text polishing model used in AI generate image tasks.

**Type:** TextGenerationModel

**Since:** 23

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**System API:** This is a system API.

