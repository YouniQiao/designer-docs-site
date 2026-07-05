# BreakpointOptions

Defines the breakpoint configuration options for container dimension analysis. Specifies threshold values that trigger different layout behaviors based on container size.

**起始版本：** 26.0.0

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

## 导入模块

```TypeScript
import { BreakpointOptions,ContainerReader,ContainerReaderAttribute } from '@kit.ArkUI';
```

## width

```TypeScript
width?: Array<double>
```

Optional array of width breakpoint values in vp units. Defines the width thresholds for container width analysis.

**类型：** Array<double>

**起始版本：** 26.0.0

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**卡片能力：** 该接口支持在ArkTS卡片中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

## height

```TypeScript
height?: Array<double>
```

Optional array of height breakpoint values in vp units. Defines the height thresholds for container height analysis.

**类型：** Array<double>

**起始版本：** 26.0.0

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**卡片能力：** 该接口支持在ArkTS卡片中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

