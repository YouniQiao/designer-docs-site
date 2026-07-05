# HoverModeRegionLayoutOptions

Layout information for the semi-folded state. > **NOTE** > > 1. In semi-folded state, the device contains an avoidance area, and layout calculations must account for > the impact of this avoidance area on the overall layout. > 2. In semi-folded mode, the upper screen is dedicated to content display, and the lower screen is > reserved for interaction.

**起始版本：** 12

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

## 导入模块

```TypeScript
import { HoverModeStatus,ExtraRegionPosition,OnHoverStatusChangeHandler,ExpandedRegionLayoutOptions,FoldSplitContainer,HoverModeRegionLayoutOptions,FoldedRegionLayoutOptions,PresetSplitRatio } from '@kit.ArkUI';
```

## horizontalSplitRatio

```TypeScript
horizontalSplitRatio?: number
```

Width ratio between the primary and extra regions. This setting takes effect only when **extra** is effective. The value range is all integers. Default value: {@link.PresetSplitRatio}.LAYOUT_3V2.

**类型：** number

**起始版本：** 12

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

## showExtraRegion

```TypeScript
showExtraRegion?: boolean
```

Whether to display the extra region in the half-folded state. The value **true** means to display the extra region in the half-folded state, and **false** means the opposite. Default value: **false**.

**类型：** boolean

**起始版本：** 12

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

## extraRegionPosition

```TypeScript
extraRegionPosition?: ExtraRegionPosition
```

Position information of the extra region. This setting takes effect only when **showExtraRegion** is set to **true**. Default value: **ExtraRegionPosition.top**.

**类型：** ExtraRegionPosition

**起始版本：** 12

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

