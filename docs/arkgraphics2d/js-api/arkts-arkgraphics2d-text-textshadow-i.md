# TextShadow

Describes the text shadow.

**Since:** 12

**ArkTS mode:** ArkTS-Dyn since version 12; ArkTS-Sta since version 23.

<!--Device-text-interface TextShadow--><!--Device-text-interface TextShadow-End-->

**System capability:** SystemCapability.Graphics.Drawing

## blurRadius

```TypeScript
blurRadius?: double
```

Blur radius, a floating-point value in physical pixels (px), with a default value of **0.0**.

**Type:** double

**Since:** 12

**ArkTS mode:** ArkTS-Dyn since version 12; ArkTS-Sta since version 23.

**Atomic service API:** This API can be used in atomic services since API version 22.

<!--Device-TextShadow-blurRadius?: double--><!--Device-TextShadow-blurRadius?: double-End-->

**System capability:** SystemCapability.Graphics.Drawing

## color

```TypeScript
color?: common2D.Color
```

Color of the text shadow. The default value is black (255, 0, 0, 0).

**Type:** common2D.Color

**Since:** 12

**ArkTS mode:** ArkTS-Dyn since version 12; ArkTS-Sta since version 23.

**Atomic service API:** This API can be used in atomic services since API version 22.

<!--Device-TextShadow-color?: common2D.Color--><!--Device-TextShadow-color?: common2D.Color-End-->

**System capability:** SystemCapability.Graphics.Drawing

## point

```TypeScript
point?: common2D.Point
```

Shadow offset position of the font based on the current text, in which the horizontal and vertical coordinates are greater than or equal to 0, with the unit being physical pixels (px).

**Type:** common2D.Point

**Since:** 12

**ArkTS mode:** ArkTS-Dyn since version 12; ArkTS-Sta since version 23.

**Atomic service API:** This API can be used in atomic services since API version 22.

<!--Device-TextShadow-point?: common2D.Point--><!--Device-TextShadow-point?: common2D.Point-End-->

**System capability:** SystemCapability.Graphics.Drawing

