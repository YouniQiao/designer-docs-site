# TextTab

段落风格的文本制表符，储存了对齐方式和位置。

**Since:** 18

**System capability:** SystemCapability.Graphics.Drawing

## Modules to Import

```TypeScript
import { text } from '@kit.ArkGraphics2D';
```

## location

```TypeScript
location: double
```

制表符之后的文本对齐位置，浮点数，单位为物理像素px，最小值为1.0，当该值小于1.0时，该制表符会被替换为一个空格。

**Type:** double

**Since:** 18

**Atomic service API:** From API version 22 this API can be used in atomic services.

**System capability:** SystemCapability.Graphics.Drawing

## alignment

```TypeScript
alignment: TextAlign
```

段落中制表符之后的文本对齐方式，支持设置[TextAlign]text.TextAlign的LEFT左对齐、RIGHT右对齐和CENTER居中对齐方式，未列出的枚举值将视为左对齐，默认为左对齐。

**Type:** TextAlign

**Since:** 18

**Atomic service API:** From API version 22 this API can be used in atomic services.

**System capability:** SystemCapability.Graphics.Drawing

