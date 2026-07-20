# TypographicBounds

Describes the typographic boundaries of a text line. These boundaries depend on the typographic font and font size,but not on the characters themselves. For example, for the string " a b " (which has a space before "a" and a space after "b"), the typographic boundaries include the spaces at the beginning and end of the line. Similarly, the strings "j" and "E" have identical typographic boundaries, independent of the characters themselves.

> **NOTE**  
>  
> The following figure shows the layout parameters of a text line: width (width of the text line including the left  
> and right spaces), ascent (highest point of the rising height), descent (lowest point of the falling height),  
> leading (line spacing), top (highest point of the current line), baseline (character baseline), bottom (lowest  
> point of the current line), and next line top (highest point of the next line).  
>  
> ![image_Typographic.png](../../../../reference/apis-arkgraphics2d/figures/image_Typographic.png)  
>  
> The following figure shows the typographic boundaries of the string " a b ".  
>  
> ![image_TypographicBounds.png](../../../../reference/apis-arkgraphics2d/figures/image_TypographicBounds.png)  
>  
> The following figure shows the typographic boundaries of the strings "j" and "E".  
>  
> !  
> [image_TypographicBounds_Character.png](../../../../reference/apis-arkgraphics2d/figures/image_TypographicBounds_Character.png)

**Since:** 18

<!--Device-text-interface TypographicBounds--><!--Device-text-interface TypographicBounds-End-->

**System capability:** SystemCapability.Graphics.Drawing

## Modules to Import

```TypeScript
import { text } from '@kit.ArkGraphics2D';
```

## ascent

```TypeScript
ascent: number
```

Ascent height of a text line, which is a floating-point value in physical pixels (px).

**Type:** number

**Since:** 18

**Atomic service API:** This API can be used in atomic services since API version 22.

<!--Device-TypographicBounds-ascent: double--><!--Device-TypographicBounds-ascent: double-End-->

**System capability:** SystemCapability.Graphics.Drawing

## descent

```TypeScript
descent: number
```

Descent height of a text line, which is a floating-point value in physical pixels (px).

**Type:** number

**Since:** 18

**Atomic service API:** This API can be used in atomic services since API version 22.

<!--Device-TypographicBounds-descent: double--><!--Device-TypographicBounds-descent: double-End-->

**System capability:** SystemCapability.Graphics.Drawing

## leading

```TypeScript
leading: number
```

Leading of a text line, which is a floating-point value in physical pixels (px).

**Type:** number

**Since:** 18

**Atomic service API:** This API can be used in atomic services since API version 22.

<!--Device-TypographicBounds-leading: double--><!--Device-TypographicBounds-leading: double-End-->

**System capability:** SystemCapability.Graphics.Drawing

## width

```TypeScript
width: number
```

Total width of the layout boundary, which is a floating-point value in physical pixels (px).

**Type:** number

**Since:** 18

**Atomic service API:** This API can be used in atomic services since API version 22.

<!--Device-TypographicBounds-width: double--><!--Device-TypographicBounds-width: double-End-->

**System capability:** SystemCapability.Graphics.Drawing

