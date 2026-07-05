# ToolBarV2SymbolGlyph

Defines toolBarV2 symbolGlyph.

**起始版本：** 18

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

## 导入模块

```TypeScript
import { ToolBarV2ItemImageOptions,ToolBarV2Item,ToolBarV2ItemText,ToolBarV2SymbolGlyphOptions,ToolBarV2ItemAction,ToolBarV2ItemOptions,ToolBarV2,ToolBarV2SymbolGlyph,ToolBarV2ItemIconType,ToolBarV2ItemImage,ToolBarV2ItemState,ToolBarV2ItemTextOptions,ToolBarV2Modifier } from '@kit.ArkUI';
```

## constructor

```TypeScript
constructor(options: ToolBarV2SymbolGlyphOptions)
```

The constructor used to create a ToolBarV2SymbolGlyph object.

**起始版本：** 18

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| options | ToolBarV2SymbolGlyphOptions | 是 | symbol info. |

## normal

```TypeScript
normal: SymbolGlyphModifier
```

Modifier of toolbarV2's normal symbol.

**类型：** SymbolGlyphModifier

**起始版本：** 18

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

## activated

```TypeScript
activated?: SymbolGlyphModifier
```

Modifier of toolbarV2's activated symbol.

**类型：** SymbolGlyphModifier

**起始版本：** 18

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

