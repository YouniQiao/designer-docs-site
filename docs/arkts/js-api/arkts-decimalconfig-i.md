# DecimalConfig

提供Decimal的配置属性，可使用Decimal.set方法进行配置。

**Since:** 12

**System capability:** SystemCapability.Utils.Lang

## Modules to Import

```TypeScript
import { Decimal } from '@kit.ArkTS';
```

## minE

```TypeScript
minE?: double
```

负指数极限，若Decimal的指数值小于该值，会下溢到零。 默认值：-9e15。

**Type:** double

**Since:** 12

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

## maxE

```TypeScript
maxE?: double
```

正指数极限，若Decimal的指数值大于该值，会溢出至无穷大。 默认值：9e15。

**Type:** double

**Since:** 12

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

## defaults

```TypeScript
defaults?: boolean
```

表示未指定的属性是否被设置为默认值，true表示使用默认值。 默认值：false。

**Type:** boolean

**Since:** 12

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

## toExpNeg

```TypeScript
toExpNeg?: double
```

指数表示法的负指数值的极限值，若Decimal的负指数小于等于该值时，使用科学计数法表示。 默认值：-7。

**Type:** double

**Since:** 12

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

## precision

```TypeScript
precision?: double
```

运算结果的最大有效位数。 默认值：20。

**Type:** double

**Since:** 12

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

## rounding

```TypeScript
rounding?: Rounding
```

舍入模式，用于将运算结果舍入到precision位有效数字，以及作为round、toBinary、toDecimalPlaces、toExponential、toFixed、 toHexadecimal、toNearest、toOctal、toPrecision和toSignificantDigits方法返回值的默认舍入模式。 默认值：4（ROUND_HALF_UP）。

**Type:** Rounding

**Since:** 12

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

## toExpPos

```TypeScript
toExpPos?: double
```

指数表示法的正指数值的极限值，若Decimal的正指数大于等于该值时，使用科学计数法表示。 默认值：21。

**Type:** double

**Since:** 12

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

## modulo

```TypeScript
modulo?: Modulo
```

模计算时使用的舍入模式，即计算a mod n时的舍入模式。 默认值：1（ROUND_DOWN）。

**Type:** Modulo

**Since:** 12

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

## crypto

```TypeScript
crypto?: boolean
```

确定是否使用加密安全伪随机数生成的值。 默认值：false。

**Type:** boolean

**Since:** 12

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

