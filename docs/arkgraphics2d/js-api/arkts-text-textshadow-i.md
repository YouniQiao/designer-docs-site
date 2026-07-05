# TextShadow

字体阴影。

**Since:** 12

**System capability:** SystemCapability.Graphics.Drawing

## Modules to Import

```TypeScript
import { text } from '@kit.ArkGraphics2D';
```

## color

```TypeScript
color?: common2D.Color
```

字体阴影的颜色，默认为黑色Color(255, 0, 0, 0)。

**Type:** common2D.Color

**Since:** 12

**Atomic service API:** From API version 22 this API can be used in atomic services.

**System capability:** SystemCapability.Graphics.Drawing

## blurRadius

```TypeScript
blurRadius?: double
```

模糊半径，浮点数，单位为物理像素px，默认为0.0。

**Type:** double

**Since:** 12

**Atomic service API:** From API version 22 this API can be used in atomic services.

**System capability:** SystemCapability.Graphics.Drawing

## point

```TypeScript
point?: common2D.Point
```

字体阴影基于当前文本的偏移位置，横、纵坐标要大于等于零，单位为物理像素px。

**Type:** common2D.Point

**Since:** 12

**Atomic service API:** From API version 22 this API can be used in atomic services.

**System capability:** SystemCapability.Graphics.Drawing

