# ContainerReaderInfo

Defines the configuration options for ContainerReader component. Used to specify the parameters for container dimension reading and breakpoint analysis.

**起始版本：** 26.0.0

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

## 导入模块

```TypeScript
import { BreakpointOptions,ContainerReader,ContainerReaderAttribute } from '@kit.ArkUI';
```

## size

```TypeScript
size: Size
```

The target container size for layout analysis. Defines the reference dimensions used for breakpoint calculation and layout adaptation.

**类型：** Size

**起始版本：** 26.0.0

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**卡片能力：** 该接口支持在ArkTS卡片中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

## heightBreakpoint

```TypeScript
heightBreakpoint?: HeightBreakpoint
```

Optional height breakpoint configuration for container height analysis. Defines the height thresholds that trigger different layout behaviors.

**类型：** HeightBreakpoint

**起始版本：** 26.0.0

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**卡片能力：** 该接口支持在ArkTS卡片中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

## widthBreakpoint

```TypeScript
widthBreakpoint?: WidthBreakpoint
```

Optional width breakpoint configuration for container width analysis. Defines the width thresholds that trigger different layout behaviors.

**类型：** WidthBreakpoint

**起始版本：** 26.0.0

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**卡片能力：** 该接口支持在ArkTS卡片中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

