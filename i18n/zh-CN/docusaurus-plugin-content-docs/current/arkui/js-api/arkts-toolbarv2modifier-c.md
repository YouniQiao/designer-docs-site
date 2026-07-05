# ToolBarV2Modifier

Declare ToolBarV2Modifier used in ToolBar

**起始版本：** 18

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

## 导入模块

```TypeScript
import { ToolBarV2ItemImageOptions,ToolBarV2Item,ToolBarV2ItemText,ToolBarV2SymbolGlyphOptions,ToolBarV2ItemAction,ToolBarV2ItemOptions,ToolBarV2,ToolBarV2SymbolGlyph,ToolBarV2ItemIconType,ToolBarV2ItemImage,ToolBarV2ItemState,ToolBarV2ItemTextOptions,ToolBarV2Modifier } from '@kit.ArkUI';
```

## backgroundColor

```TypeScript
backgroundColor(backgroundColor: ColorMetrics): ToolBarV2Modifier
```

Sets the backgroundColor of the toolBarV2.

**起始版本：** 18

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| backgroundColor | ColorMetrics | 是 | toolBarV2's backgroundColor. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| ToolBarV2Modifier | returns the instance of the ToolBarV2Modifier. |

## height

```TypeScript
height(height: LengthMetrics): ToolBarV2Modifier
```

Sets the height of the toolBarV2.

**起始版本：** 18

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| height | LengthMetrics | 是 | toolBarV2's height. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| ToolBarV2Modifier | returns the instance of the ToolBarV2Modifier. |

## padding

```TypeScript
padding(padding: LengthMetrics): ToolBarV2Modifier
```

Sets the left and right padding of the toolbarV2.

**起始版本：** 18

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| padding | LengthMetrics | 是 | left and right padding. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| ToolBarV2Modifier | returns the instance of the ToolBarV2Modifier. |

## stateEffect

```TypeScript
stateEffect(stateEffect: boolean): ToolBarV2Modifier
```

Sets whether or not to display the press status effect.

**起始版本：** 18

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| stateEffect | boolean | 是 | press status effect. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| ToolBarV2Modifier | returns the instance of the ToolBarV2Modifier. |

