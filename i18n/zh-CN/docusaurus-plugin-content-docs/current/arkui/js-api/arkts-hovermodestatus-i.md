# HoverModeStatus

Provides information about the device or application's folding, rotation, and window state.

**起始版本：** 12

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

## 导入模块

```TypeScript
import { HoverModeStatus,ExtraRegionPosition,OnHoverStatusChangeHandler,ExpandedRegionLayoutOptions,FoldSplitContainer,HoverModeRegionLayoutOptions,FoldedRegionLayoutOptions,PresetSplitRatio } from '@kit.ArkUI';
```

## appRotation

```TypeScript
appRotation: number
```

Rotation angle of the application.

**类型：** number

**起始版本：** 12

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

## foldStatus

```TypeScript
foldStatus: display.FoldStatus
```

Fold status of the device.

**类型：** display.FoldStatus

**起始版本：** 12

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

## windowStatusType

```TypeScript
windowStatusType: window.WindowStatusType
```

Window mode.

**类型：** window.WindowStatusType

**起始版本：** 12

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

## isHoverMode

```TypeScript
isHoverMode: boolean
```

Whether the application is in the hover state. The value **true** means that the application is in the hover state, and **false** means the opposite.

**类型：** boolean

**起始版本：** 12

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

