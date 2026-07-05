# ChipV2Accessibility

定义ChipV2无障碍

**起始版本：** 26.0.0

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

## 导入模块

```TypeScript
import { ChipV2SuffixSymbolIconConfig,ChipV2Label,ChipV2PrefixSymbolIconConfig,IChipV2OptionsConfig,ChipV2SymbolIcon,ChipV2SuffixImageIconConfig,ChipV2LocalizedLabelMarginConfig,ChipV2SymbolIconConfig,ChipV2LabelConfig,ChipV2SuffixSymbolIcon,ChipV2AccessibilityConfig,ChipV2Icon,ChipV2Size,ChipV2CloseConfig,ChipV2SuffixImageIcon,ChipV2Accessibility,ChipV2Options,ChipV2ImageIconConfig,ChipV2ImageIcon,ChipV2PrefixImageIcon,ChipV2LabelMarginConfig,ChipV2PrefixSymbolIcon,ChipV2,ChipV2CloseIcon,ChipV2PrefixImageIconConfig,ChipV2AccessibilitySelectedType } from '@kit.ArkUI';
```

## constructor

```TypeScript
constructor(config: ChipV2AccessibilityConfig)
```

ChipV2Accessibility的构造函数

**起始版本：** 26.0.0

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| config | ChipV2AccessibilityConfig | 是 | 无障碍配置 |

## accessibilityLevel

```TypeScript
public accessibilityLevel?: string
```

设置可访问级别。

**类型：** string

**起始版本：** 26.0.0

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

## accessibilityText

```TypeScript
public accessibilityText?: ResourceStr
```

设置辅助功能文本。

**类型：** ResourceStr

**起始版本：** 26.0.0

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

## accessibilityDescription

```TypeScript
public accessibilityDescription?: ResourceStr
```

设置辅助功能描述。

**类型：** ResourceStr

**起始版本：** 26.0.0

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

