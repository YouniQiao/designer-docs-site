# Decoration

文本装饰线。

**Since:** 12

**System capability:** SystemCapability.Graphics.Drawing

## Modules to Import

```TypeScript
import { text } from '@kit.ArkGraphics2D';
```

## decorationStyle

```TypeScript
decorationStyle?: TextDecorationStyle
```

装饰线样式，默认为SOLID。

**Type:** TextDecorationStyle

**Since:** 12

**Atomic service API:** From API version 22 this API can be used in atomic services.

**System capability:** SystemCapability.Graphics.Drawing

## color

```TypeScript
color?: common2D.Color
```

装饰线颜色，默认为跟随文本颜色。

**Type:** common2D.Color

**Since:** 12

**Atomic service API:** From API version 22 this API can be used in atomic services.

**System capability:** SystemCapability.Graphics.Drawing

## decorationThicknessScale

```TypeScript
decorationThicknessScale?: double
```

装饰线粗细系数，浮点数，默认为1.0。如果设置的值小于等于0，则不会绘制装饰线。

**Type:** double

**Since:** 12

**Atomic service API:** From API version 22 this API can be used in atomic services.

**System capability:** SystemCapability.Graphics.Drawing

## textDecoration

```TypeScript
textDecoration?: TextDecorationType
```

装饰线类型，默认为NONE。

**Type:** TextDecorationType

**Since:** 12

**Atomic service API:** From API version 22 this API can be used in atomic services.

**System capability:** SystemCapability.Graphics.Drawing

