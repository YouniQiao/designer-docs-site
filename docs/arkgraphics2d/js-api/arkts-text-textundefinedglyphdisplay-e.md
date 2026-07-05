# TextUndefinedGlyphDisplay

```TypeScript
enum TextUndefinedGlyphDisplay
```

文本未定义字形时的显示方式枚举。

**Since:** 20

**System capability:** SystemCapability.Graphics.Drawing

## USE_DEFAULT

```TypeScript
USE_DEFAULT = 0
```

使用字体的内部.notdef字形。遵循字体的内部.notdef字形设计，可以是空框、空格或自定义符号。

**Since:** 20

**Atomic service API:** From API version 22 this API can be used in atomic services.

**System capability:** SystemCapability.Graphics.Drawing

## USE_TOFU

```TypeScript
USE_TOFU = 1
```

总是用显式的豆腐块替换未定义的字形，覆盖字体的默认行为。用于调试缺失字符或强制一致的缺失符号显示。

**Since:** 20

**Atomic service API:** From API version 22 this API can be used in atomic services.

**System capability:** SystemCapability.Graphics.Drawing

