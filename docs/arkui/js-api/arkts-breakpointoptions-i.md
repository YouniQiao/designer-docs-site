# BreakpointOptions

Defines the breakpoint configuration options for container dimension analysis. Specifies threshold values that trigger different layout behaviors based on container size.

**Since:** 26.0.0

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## Modules to Import

```TypeScript
import { BreakpointOptions,ContainerReader,ContainerReaderAttribute } from '@kit.ArkUI';
```

## width

```TypeScript
width?: Array<double>
```

Optional array of width breakpoint values in vp units. Defines the width thresholds for container width analysis.

**Type:** Array<double>

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**Widget capability:** This API can be used in ArkTS widgets.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## height

```TypeScript
height?: Array<double>
```

Optional array of height breakpoint values in vp units. Defines the height thresholds for container height analysis.

**Type:** Array<double>

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**Widget capability:** This API can be used in ArkTS widgets.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

