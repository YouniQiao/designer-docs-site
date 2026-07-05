# JoinStyle

```TypeScript
enum JoinStyle
```

定义线条转角样式的枚举，即画笔在绘制折线段时，在折线转角处的样式。

**Since:** 12

**System capability:** SystemCapability.Graphics.Drawing

## MITER_JOIN

```TypeScript
MITER_JOIN = 0
```

转角类型为尖角，如果折线角度比较小，则尖角会很长，需要使用限制值（miter limit）进行限制。

**Since:** 12

**System capability:** SystemCapability.Graphics.Drawing

## ROUND_JOIN

```TypeScript
ROUND_JOIN = 1
```

转角类型为圆头。

**Since:** 12

**System capability:** SystemCapability.Graphics.Drawing

## BEVEL_JOIN

```TypeScript
BEVEL_JOIN = 2
```

转角类型为平头。

**Since:** 12

**System capability:** SystemCapability.Graphics.Drawing

