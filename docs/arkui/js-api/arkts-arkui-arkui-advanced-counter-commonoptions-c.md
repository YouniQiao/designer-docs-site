# CommonOptions

Defines the common options.

**Since:** 11

<!--Device-unnamed-declare class CommonOptions--><!--Device-unnamed-declare class CommonOptions-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## Modules to Import

```TypeScript
import { CounterType, DateData, CounterComponent, CounterOptions } from '@kit.ArkUI';
```

## focusable

```TypeScript
focusable?: boolean
```

Set the focusable of the counter component.

**Type:** boolean

**Default:** true

**Since:** 11

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-CommonOptions-focusable?: boolean--><!--Device-CommonOptions-focusable?: boolean-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## onHoverDecrease

```TypeScript
onHoverDecrease?: (isHover: boolean) => void
```

Trigger a mouse hover event at the decrease button.

**Type:** (isHover: boolean) => void

**Since:** 11

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-CommonOptions-onHoverDecrease?: (isHover: boolean) => void--><!--Device-CommonOptions-onHoverDecrease?: (isHover: boolean) => void-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## onHoverIncrease

```TypeScript
onHoverIncrease?: (isHover: boolean) => void
```

Trigger a mouse hover event at the increase button.

**Type:** (isHover: boolean) => void

**Since:** 11

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-CommonOptions-onHoverIncrease?: (isHover: boolean) => void--><!--Device-CommonOptions-onHoverIncrease?: (isHover: boolean) => void-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## step

```TypeScript
step?: number
```

Set the step of the counter component, ranges greater than or equal to 1

**Type:** number

**Default:** 1

**Since:** 11

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-CommonOptions-step?: number--><!--Device-CommonOptions-step?: number-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

