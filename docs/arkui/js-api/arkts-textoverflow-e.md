# TextOverflow

```TypeScript
declare enum TextOverflow
```

Declare how text overflows.

**Since:** 7

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## None

```TypeScript
None = 0
```

When the text overflows its dimensions, the text will not be cropped.

**Since:** 7

**Atomic service API:** From API version 11 this API can be used in atomic services.

**Widget capability:** From API version 9 this API can be used in ArkTS widgets.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## Clip

```TypeScript
Clip = 1
```

When the text overflows its dimensions, the text will be cropped and displayed.

**Since:** 7

**Atomic service API:** From API version 11 this API can be used in atomic services.

**Widget capability:** From API version 9 this API can be used in ArkTS widgets.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## Ellipsis

```TypeScript
Ellipsis = 2
```

If the text overflows its dimensions, the text that cannot be displayed shall be replaced by ellipsis.

**Since:** 7

**Atomic service API:** From API version 11 this API can be used in atomic services.

**Widget capability:** From API version 9 this API can be used in ArkTS widgets.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## MARQUEE

```TypeScript
MARQUEE = 3
```

When the text overflows its dimensions, the text will scroll for displaying.

**Since:** 10

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

