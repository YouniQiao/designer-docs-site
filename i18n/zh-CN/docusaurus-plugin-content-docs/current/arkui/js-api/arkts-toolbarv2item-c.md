# ToolBarV2Item

Declare type ToolBarV2Item

**起始版本：** 18

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

## 导入模块

```TypeScript
import { ToolBarV2ItemImageOptions,ToolBarV2Item,ToolBarV2ItemText,ToolBarV2SymbolGlyphOptions,ToolBarV2ItemAction,ToolBarV2ItemOptions,ToolBarV2,ToolBarV2SymbolGlyph,ToolBarV2ItemIconType,ToolBarV2ItemImage,ToolBarV2ItemState,ToolBarV2ItemTextOptions,ToolBarV2Modifier } from '@kit.ArkUI';
```

## constructor

```TypeScript
constructor(options: ToolBarV2ItemOptions)
```

The constructor used to create a ToolBarV2Item object.

**起始版本：** 18

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| options | ToolBarV2ItemOptions | 是 | item info. |

## icon

```TypeScript
icon?: ToolBarV2ItemIconType
```

Define icon resource.

**类型：** ToolBarV2ItemIconType

**起始版本：** 18

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

## action

```TypeScript
action?: ToolBarV2ItemAction
```

Define the action event.

**类型：** ToolBarV2ItemAction

**起始版本：** 18

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

## accessibilityLevel

```TypeScript
accessibilityLevel?: string
```

The accessibilityLevel of item.

**类型：** string

**起始版本：** 18

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

## state

```TypeScript
state?: ToolBarV2ItemState
```

Define item type.

**类型：** ToolBarV2ItemState

**起始版本：** 18

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

## accessibilityText

```TypeScript
accessibilityText?: ResourceStr
```

The accessibilityText of item.

**类型：** ResourceStr

**起始版本：** 18

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

## content

```TypeScript
content: ToolBarV2ItemText
```

Define text content.

**类型：** ToolBarV2ItemText

**起始版本：** 18

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

## accessibilityDescription

```TypeScript
accessibilityDescription?: ResourceStr
```

The accessibilityDescription of item.

**类型：** ResourceStr

**起始版本：** 18

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

