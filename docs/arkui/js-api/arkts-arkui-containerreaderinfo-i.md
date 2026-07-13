# ContainerReaderInfo

Defines the configuration options for ContainerReader component.
Used to specify the parameters for container dimension reading and breakpoint analysis.

**Since:** 26.0.0

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## Modules to Import

```TypeScript
import { BreakpointOptions, ContainerReader, ContainerReaderAttribute } from '@kit.ArkUI';
```

## heightBreakpoint

```TypeScript
heightBreakpoint?: HeightBreakpoint
```

Optional height breakpoint configuration for container height analysis.
Defines the height thresholds that trigger different layout behaviors.

**Type:** HeightBreakpoint

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 26.0.0.

**Widget capability:** This API can be used in ArkTS widgets since API version 26.0.0.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## size

```TypeScript
size: Size
```

The target container size for layout analysis.
Defines the reference dimensions used for breakpoint calculation and layout adaptation.

**Type:** Size

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 26.0.0.

**Widget capability:** This API can be used in ArkTS widgets since API version 26.0.0.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## widthBreakpoint

```TypeScript
widthBreakpoint?: WidthBreakpoint
```

Optional width breakpoint configuration for container width analysis.
Defines the width thresholds that trigger different layout behaviors.

**Type:** WidthBreakpoint

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 26.0.0.

**Widget capability:** This API can be used in ArkTS widgets since API version 26.0.0.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

