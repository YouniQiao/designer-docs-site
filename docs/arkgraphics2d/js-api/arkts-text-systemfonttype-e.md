# SystemFontType

```TypeScript
enum SystemFontType
```

字体类型枚举，通过位或运算可实现组合类型。

**Since:** 14

**System capability:** SystemCapability.Graphics.Drawing

## ALL

```TypeScript
ALL = 1 << 0
```

所有字体类型，包括系统字体类型、风格字体类型和用户已安装字体类型。

**Since:** 14

**Atomic service API:** From API version 22 this API can be used in atomic services.

**System capability:** SystemCapability.Graphics.Drawing

## GENERIC

```TypeScript
GENERIC = 1 << 1
```

系统字体类型。

**Since:** 14

**Atomic service API:** From API version 22 this API can be used in atomic services.

**System capability:** SystemCapability.Graphics.Drawing

## STYLISH

```TypeScript
STYLISH = 1 << 2
```

风格字体类型。风格字体类型是专为2in1设备设计的字体类型。

**Since:** 14

**Atomic service API:** From API version 22 this API can be used in atomic services.

**System capability:** SystemCapability.Graphics.Drawing

## INSTALLED

```TypeScript
INSTALLED = 1 << 3
```

用户已安装的字体类型。

**Since:** 14

**Atomic service API:** From API version 22 this API can be used in atomic services.

**System capability:** SystemCapability.Graphics.Drawing

## CUSTOMIZED

```TypeScript
CUSTOMIZED = 1 << 4
```

自定义字体类型。

**Since:** 18

**Atomic service API:** From API version 22 this API can be used in atomic services.

**System capability:** SystemCapability.Graphics.Drawing

