# TextShadow

Describes the text shadow.

**Since:** 12

**System capability:** SystemCapability.Graphics.Drawing

## Modules to Import

```TypeScript
import { text } from '@kit.ArkGraphics2D';
```

## blurRadius

```TypeScript
blurRadius?: number
```

Blur radius, a floating-point value in physical pixels (px), with a default value of **0.0**.

**Type:** number

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 22.

**System capability:** SystemCapability.Graphics.Drawing

## color

```TypeScript
color?: common2D.Color
```

Color of the text shadow. The default value is black (255, 0, 0, 0).

**Type:** common2D.Color

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 22.

**System capability:** SystemCapability.Graphics.Drawing

## point

```TypeScript
point?: common2D.Point
```

Shadow offset position of the font based on the current text, in which the horizontal and vertical coordinates
are greater than or equal to 0, with the unit being physical pixels (px).

**Type:** common2D.Point

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 22.

**System capability:** SystemCapability.Graphics.Drawing

