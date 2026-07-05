# ECCKeyPairSpec

密钥参数[AsyKeySpec]cryptoFramework.AsyKeySpec的子类，用于指定ECC算法中公私钥包含的全量参数。 在使用密钥参数生成密钥时，将其传入[createAsyKeyGeneratorBySpec()]cryptoFramework.createAsyKeyGeneratorBySpec方法 创建密钥生成器。

**Inheritance:** ECCKeyPairSpecextends: AsyKeySpec.

**Since:** 10

**System capability:** SystemCapability.Security.CryptoFramework.Key.AsymKey

## Modules to Import

```TypeScript
import { cryptoFramework } from '@kit.CryptoArchitectureKit';
```

## sk

```TypeScript
sk: bigint
```

ECC算法中的私钥sk。

**Type:** bigint

**Since:** 10

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.Security.CryptoFramework.Key.AsymKey

## pk

```TypeScript
pk: Point
```

指定ECC算法的公钥pk。

**Type:** Point

**Since:** 10

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.Security.CryptoFramework.Key.AsymKey

## params

```TypeScript
params: ECCCommonParamsSpec
```

指定ECC算法中公私钥都包含的公共参数。

**Type:** ECCCommonParamsSpec

**Since:** 10

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.Security.CryptoFramework.Key.AsymKey

