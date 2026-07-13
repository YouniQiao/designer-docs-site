# FontVariation

Describes a font variation.

**Since:** 12

**System capability:** SystemCapability.Graphics.Drawing

## Modules to Import

```TypeScript
import { text } from '@kit.ArkGraphics2D';
```

## axis

```TypeScript
axis: string
```

String identified by the keyword in the font variation key-value pair.

**Type:** string

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 22.

**System capability:** SystemCapability.Graphics.Drawing

## isNormalized

```TypeScript
isNormalized?: boolean
```

Whether to normalize. If the value is **true**, the value range of the value field is -1 to 1, which maps the
minimum value to the maximum value configured in the font file. The value **0** indicates the default value
configured in the font file. If the value is **false**, the value range of the value field is the adjustable
range supported by the font file itself. The default value is **false**.

**Type:** boolean

**Since:** 24

**Atomic service API:** This API can be used in atomic services since API version 24.

**System capability:** SystemCapability.Graphics.Drawing

## value

```TypeScript
value: number
```

Value in the font variation key-value pair.

**Type:** number

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 22.

**System capability:** SystemCapability.Graphics.Drawing

