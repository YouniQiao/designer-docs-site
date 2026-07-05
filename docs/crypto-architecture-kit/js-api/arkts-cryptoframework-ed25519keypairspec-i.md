# ED25519KeyPairSpec

密钥参数[AsyKeySpec]cryptoFramework.AsyKeySpec的子类，用于指定Ed25519算法中公私钥包含的全量参数。 在使用密钥参数生成密钥时，将其传入[createAsyKeyGeneratorBySpec()]cryptoFramework.createAsyKeyGeneratorBySpec方法 创建密钥生成器。

**Inheritance:** ED25519KeyPairSpecextends: AsyKeySpec.

**Since:** 11

**System capability:** SystemCapability.Security.CryptoFramework.Key.AsymKey

## Modules to Import

```TypeScript
import { cryptoFramework } from '@kit.CryptoArchitectureKit';
```

## sk

```TypeScript
sk: bigint
```

Ed25519算法中的私钥sk。

**Type:** bigint

**Since:** 11

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.Security.CryptoFramework.Key.AsymKey

## pk

```TypeScript
pk: bigint
```

Ed25519算法中的公钥pk。

**Type:** bigint

**Since:** 11

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.Security.CryptoFramework.Key.AsymKey

