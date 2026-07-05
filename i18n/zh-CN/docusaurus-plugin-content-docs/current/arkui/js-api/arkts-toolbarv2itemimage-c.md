# ToolBarV2ItemImage

Declare type ToolBarV2ItemImage

**起始版本：** 18

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

## 导入模块

```TypeScript
import { ToolBarV2ItemImageOptions,ToolBarV2Item,ToolBarV2ItemText,ToolBarV2SymbolGlyphOptions,ToolBarV2ItemAction,ToolBarV2ItemOptions,ToolBarV2,ToolBarV2SymbolGlyph,ToolBarV2ItemIconType,ToolBarV2ItemImage,ToolBarV2ItemState,ToolBarV2ItemTextOptions,ToolBarV2Modifier } from '@kit.ArkUI';
```

## constructor

```TypeScript
constructor(options: ToolBarV2ItemImageOptions)
```

The constructor used to create a ToolBarV2ItemImage object.

**起始版本：** 18

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| options | ToolBarV2ItemImageOptions | 是 | image info. |

## color

```TypeScript
color?: ColorMetrics
```

Define icon fillColor.

**类型：** ColorMetrics

**起始版本：** 18

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

## src

```TypeScript
src: ResourceStr
```

Define icon resource.

**类型：** ResourceStr

**起始版本：** 18

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

## activatedColor

```TypeScript
activatedColor?: ColorMetrics
```

Icon fillColor when the item is activated.

**类型：** ColorMetrics

**起始版本：** 18

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

