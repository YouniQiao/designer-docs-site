# FontFeature

表示字体特征。字体特征是字体内置的排版规则，用于控制字形的显示效果，具体包括连字、替代字形、上下标等功能。

**Since:** 20

**System capability:** SystemCapability.Graphics.Drawing

## Modules to Import

```TypeScript
import { drawing } from '@kit.ArkGraphics2D';
```

## name

```TypeScript
name: string
```

字体特征的名称。常见的字体特征名称包含liga、frac、case等，需要对应的ttf文件支持才能生效。

**Type:** string

**Since:** 20

**Atomic service API:** From API version 22 this API can be used in atomic services.

**System capability:** SystemCapability.Graphics.Drawing

## value

```TypeScript
value: double
```

字体特征的数值，浮点数。建议通过字体查看工具或查阅字体文档，确定具体的有效取值范围。

**Type:** double

**Since:** 20

**Atomic service API:** From API version 22 this API can be used in atomic services.

**System capability:** SystemCapability.Graphics.Drawing

