# CustomImportIcon (System API)

Customize the import icon, which is used to add images and text from the application side.

**Since:** 26.0.0

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**System API:** This is a system API.

## Modules to Import

```TypeScript
import { imageGeneration } from '@ohos.arkui.intelligence.imageGeneration';
```

## callback

```TypeScript
callback: CustomImportCallback
```

Async callback function for import operation.

**Type:** CustomImportCallback

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**System API:** This is a system API.

## image

```TypeScript
image: image.PixelMap | ResourceStr
```

Icon image information.

**Type:** image.PixelMap | ResourceStr

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**System API:** This is a system API.

## text

```TypeScript
text: ResourceStr
```

Icon text description.

**Type:** ResourceStr

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**System API:** This is a system API.

