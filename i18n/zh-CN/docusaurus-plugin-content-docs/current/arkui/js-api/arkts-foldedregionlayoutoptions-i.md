# FoldedRegionLayoutOptions

Provides the layout information of the folded state.

**起始版本：** 12

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

## 导入模块

```TypeScript
import { HoverModeStatus,ExtraRegionPosition,OnHoverStatusChangeHandler,ExpandedRegionLayoutOptions,FoldSplitContainer,HoverModeRegionLayoutOptions,FoldedRegionLayoutOptions,PresetSplitRatio } from '@kit.ArkUI';
```

## verticalSplitRatio

```TypeScript
verticalSplitRatio?: number
```

Height ratio between the primary and extra regions. The value range is all integers. Default value: {@link.PresetSplitRatio}.LAYOUT_1V1.

**类型：** number

**起始版本：** 12

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

