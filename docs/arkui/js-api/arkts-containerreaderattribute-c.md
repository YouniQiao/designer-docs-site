# ContainerReaderAttribute

Defines the ContainerReader attribute functions. Provides methods for configuring container reading parameters and breakpoint analysis properties.

**Inheritance:** ContainerReaderAttributeextends: CommonMethod<ContainerReaderAttribute>.

**Since:** 26.0.0

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## Modules to Import

```TypeScript
import { BreakpointOptions,ContainerReader,ContainerReaderAttribute } from '@kit.ArkUI';
```

## breakpointConfig

```TypeScript
breakpointConfig(value?: BreakpointOptions): ContainerReaderAttribute
```

Sets the breakpoint configuration for container dimension analysis. Defines a set of threshold values that trigger different layout behaviors based on container size.

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**Widget capability:** This API can be used in ArkTS widgets.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | BreakpointOptions | No |  |

**Return value:**

| Type | Description |
| --- | --- |
| ContainerReaderAttribute |  |

