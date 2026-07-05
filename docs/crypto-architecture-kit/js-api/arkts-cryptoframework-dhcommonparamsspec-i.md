# DHCommonParamsSpec

密钥参数[AsyKeySpec]cryptoFramework.AsyKeySpec的子类，用于指定DH算法中公私钥包含的公共参数。 在使用密钥参数生成密钥时，将其传入[createAsyKeyGeneratorBySpec()]cryptoFramework.createAsyKeyGeneratorBySpec方法 创建密钥生成器。

**Inheritance:** DHCommonParamsSpecextends: AsyKeySpec.

**Since:** 11

**System capability:** SystemCapability.Security.CryptoFramework.Key.AsymKey

## Modules to Import

```TypeScript
import { cryptoFramework } from '@kit.CryptoArchitectureKit';
```

## p

```TypeScript
p: bigint
```

指定DH算法中大素数p。

**Type:** bigint

**Since:** 11

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.Security.CryptoFramework.Key.AsymKey

## g

```TypeScript
g: bigint
```

DH算法中的参数g。

**Type:** bigint

**Since:** 11

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.Security.CryptoFramework.Key.AsymKey

## l

```TypeScript
l: int
```

DH算法中私钥长度，单位为bits。

**Type:** int

**Since:** 11

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.Security.CryptoFramework.Key.AsymKey

