# BreakpointOptions

Defines the breakpoint configuration options for container dimension analysis.Specifies threshold values that trigger different layout behaviors based on container size.

**Since:** 26.0.0

<!--Device-unnamed-export interface BreakpointOptions--><!--Device-unnamed-export interface BreakpointOptions-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## Modules to Import

```TypeScript
import { BreakpointOptions, ContainerReader, ContainerReaderAttribute } from '@kit.ArkUI';
```

## height

```TypeScript
height?: Array<number>
```

Optional array of height breakpoint values in vp units.Defines the height thresholds for container height analysis.

**Type:** Array<number>

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 26.0.0.

**Widget capability:** This API can be used in ArkTS widgets since API version 26.0.0.

<!--Device-BreakpointOptions-height?: Array<double>--><!--Device-BreakpointOptions-height?: Array<double>-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## width

```TypeScript
width?: Array<number>
```

Optional array of width breakpoint values in vp units.Defines the width thresholds for container width analysis.

**Type:** Array<number>

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 26.0.0.

**Widget capability:** This API can be used in ArkTS widgets since API version 26.0.0.

<!--Device-BreakpointOptions-width?: Array<double>--><!--Device-BreakpointOptions-width?: Array<double>-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

