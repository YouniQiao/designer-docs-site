# ChipV2ImageIcon

ChipV2的icon属性

**继承实现关系：** ChipV2ImageIcon继承自：ChipV2Icon。

**起始版本：** 26.0.0

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

## 导入模块

```TypeScript
import { ChipV2SuffixSymbolIconConfig,ChipV2Label,ChipV2PrefixSymbolIconConfig,IChipV2OptionsConfig,ChipV2SymbolIcon,ChipV2SuffixImageIconConfig,ChipV2LocalizedLabelMarginConfig,ChipV2SymbolIconConfig,ChipV2LabelConfig,ChipV2SuffixSymbolIcon,ChipV2AccessibilityConfig,ChipV2Icon,ChipV2Size,ChipV2CloseConfig,ChipV2SuffixImageIcon,ChipV2Accessibility,ChipV2Options,ChipV2ImageIconConfig,ChipV2ImageIcon,ChipV2PrefixImageIcon,ChipV2LabelMarginConfig,ChipV2PrefixSymbolIcon,ChipV2,ChipV2CloseIcon,ChipV2PrefixImageIconConfig,ChipV2AccessibilitySelectedType } from '@kit.ArkUI';
```

## constructor

```TypeScript
constructor(config: ChipV2ImageIconConfig)
```

ChipV2ImageIcon的构造函数

**起始版本：** 26.0.0

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| config | ChipV2ImageIconConfig | 是 | 图标的公共选项 |

## fillColor

```TypeScript
public fillColor?: ColorMetrics
```

图像填充颜色。

**类型：** ColorMetrics

**起始版本：** 26.0.0

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

## activatedFillColor

```TypeScript
public activatedFillColor?: ColorMetrics
```

激活时的图像填充颜色。

**类型：** ColorMetrics

**起始版本：** 26.0.0

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

## size

```TypeScript
public size?: SizeT<LengthMetrics>
```

图片大小选项。

**类型：** SizeT<LengthMetrics>

**起始版本：** 26.0.0

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

## src

```TypeScript
public src: ResourceStr
```

图片资源。

**类型：** ResourceStr

**起始版本：** 26.0.0

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

## modifier

```TypeScript
public modifier?: ImageModifier
```

图标的修饰符。

**类型：** ImageModifier

**起始版本：** 26.0.0

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

