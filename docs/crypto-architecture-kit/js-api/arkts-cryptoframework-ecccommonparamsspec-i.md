# ECCCommonParamsSpec

密钥参数[AsyKeySpec]cryptoFramework.AsyKeySpec的子类，用于指定ECC算法中公私钥包含的公共参数，随机生成公/私钥。 在使用密钥参数生成密钥时，将其传入[createAsyKeyGeneratorBySpec()]cryptoFramework.createAsyKeyGeneratorBySpec方法 创建密钥生成器。

**Inheritance:** ECCCommonParamsSpecextends: AsyKeySpec.

**Since:** 10

**System capability:** SystemCapability.Security.CryptoFramework.Key.AsymKey

## Modules to Import

```TypeScript
import { cryptoFramework } from '@kit.CryptoArchitectureKit';
```

## a

```TypeScript
a: bigint
```

指定椭圆曲线的第一个系数a。

**Type:** bigint

**Since:** 10

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.Security.CryptoFramework.Key.AsymKey

## b

```TypeScript
b: bigint
```

指定椭圆曲线的第二个系数b。

**Type:** bigint

**Since:** 10

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.Security.CryptoFramework.Key.AsymKey

## field

```TypeScript
field: ECField
```

指定椭圆曲线的域（当前只支持Fp域）。

**Type:** ECField

**Since:** 10

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.Security.CryptoFramework.Key.AsymKey

## g

```TypeScript
g: Point
```

指定基点g。

**Type:** Point

**Since:** 10

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.Security.CryptoFramework.Key.AsymKey

## h

```TypeScript
h: int
```

指定余因子h。

**Type:** int

**Since:** 10

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.Security.CryptoFramework.Key.AsymKey

## n

```TypeScript
n: bigint
```

ECC算法中基点g的阶n。

**Type:** bigint

**Since:** 10

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.Security.CryptoFramework.Key.AsymKey

