# GenerateImageTaskParams (System API)

Configuration parameter options for AI-generated image tasks.

**Since:** 23

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**System API:** This is a system API.

## Modules to Import

```TypeScript
import { imageGeneration } from '@ohos.arkui.intelligence.imageGeneration';
```

## imageCount

```TypeScript
imageCount?: number
```

the number of AI-generated image in one task.

**Type:** number

**Since:** 23

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**System API:** This is a system API.

## imageSize

```TypeScript
imageSize: image.Size
```

the size information of AI-generated image in one task.

**Type:** image.Size

**Since:** 23

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**System API:** This is a system API.

## images

```TypeScript
images: Array<ImageItem>
```

image information used for AI-generated image tasks.

**Type:** Array<ImageItem>

**Since:** 23

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**System API:** This is a system API.

## positionImage

```TypeScript
positionImage?: image.PixelMap
```

Location reference map for multi-image generated tasks.

**Type:** image.PixelMap

**Since:** 23

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**System API:** This is a system API.

## prompt

```TypeScript
prompt: string
```

Description information for AI-generated image tasks.

**Type:** string

**Since:** 23

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**System API:** This is a system API.

## selectPath

```TypeScript
selectPath?: Array<common2D.Point>
```

Path information for lasso selection in AI-generated image tasks.

**Type:** Array<common2D.Point>

**Since:** 23

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**System API:** This is a system API.

## style

```TypeScript
style?: string
```

the style of AI-generated image in one task.

**Type:** string

**Since:** 23

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**System API:** This is a system API.

