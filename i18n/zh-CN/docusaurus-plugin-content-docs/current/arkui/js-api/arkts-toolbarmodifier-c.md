# ToolBarModifier

Declare ToolBarModifier use in ToolBar

**起始版本：** 18

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

## 导入模块

```TypeScript
import { ToolBarOption,ItemState,ToolBar,ToolBarOptions,ToolBarModifier } from '@kit.ArkUI';
```

## backgroundColor

```TypeScript
backgroundColor(backgroundColor: ResourceColor): ToolBarModifier
```

Sets the backgroundColor of the toolBar.

**起始版本：** 18

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| backgroundColor | ResourceColor | 是 | toolBar's backgroundColor. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| ToolBarModifier | returns the instance of the ToolBarModifier. |

## height

```TypeScript
height(height: LengthMetrics): ToolBarModifier
```

Sets the height of the toolBar.

**起始版本：** 18

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| height | LengthMetrics | 是 | toolBar's height. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| ToolBarModifier | returns the instance of the ToolBarModifier. |

## padding

```TypeScript
padding(padding: LengthMetrics): ToolBarModifier
```

Sets the left and right padding of the toolbar.

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
| ToolBarModifier | returns the instance of the ToolBarModifier. |

## stateEffect

```TypeScript
stateEffect(stateEffect: boolean): ToolBarModifier
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
| ToolBarModifier | returns the instance of the ToolBarModifier. |

