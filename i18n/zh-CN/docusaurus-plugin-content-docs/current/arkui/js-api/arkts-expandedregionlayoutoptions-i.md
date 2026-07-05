# ExpandedRegionLayoutOptions

Layout information for the expanded state.

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

## horizontalSplitRatio

```TypeScript
horizontalSplitRatio?: number
```

Width ratio between the primary and extra regions. This setting takes effect only when **extra** is effective. The value should be an integer. Default value: {@link.PresetSplitRatio}.LAYOUT_3V2.

**类型：** number

**起始版本：** 12

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

## extraRegionPosition

```TypeScript
extraRegionPosition?: ExtraRegionPosition
```

Position information of the extra region. This setting takes effect only when **isExtraRegionPerpendicular** is set to **false**. Default value: **ExtraRegionPosition.top**.

**类型：** ExtraRegionPosition

**起始版本：** 12

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

## isExtraRegionPerpendicular

```TypeScript
isExtraRegionPerpendicular?: boolean
```

Whether the extra region extends perpendicularly through the entire component from top to bottom. The value **true** means that the extra region extends perpendicularly through the entire component from top to bottom, and **false** means the opposite. This setting takes effect only when **extra** is effective. Default value: **true**.

**类型：** boolean

**起始版本：** 12

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

