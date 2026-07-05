# FontVariation

可变字体属性。

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

可变字体属性键值对中的关键字标识的字符串。

**Type:** string

**Since:** 12

**Atomic service API:** From API version 22 this API can be used in atomic services.

**System capability:** SystemCapability.Graphics.Drawing

## isNormalized

```TypeScript
isNormalized?: boolean
```

是否归一化。值为true时，value字段取值范围为-1~1，映射字体文件中配置的最小值到最大值范围，0表示字体文件中配置的默认值；值为false时，value字段取值范围为字体文件本身支持调节的范围；默认为false。

**Type:** boolean

**Since:** 24

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Graphics.Drawing

## value

```TypeScript
value: double
```

可变字体属性键值对的值。

**Type:** double

**Since:** 12

**Atomic service API:** From API version 22 this API can be used in atomic services.

**System capability:** SystemCapability.Graphics.Drawing

