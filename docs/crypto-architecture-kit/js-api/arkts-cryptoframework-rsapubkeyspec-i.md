# RSAPubKeySpec

密钥参数[AsyKeySpec]cryptoFramework.AsyKeySpec的子类，用于指定RSA算法中公钥包含的参数。 在使用密钥参数生成密钥时，将其传入[createAsyKeyGeneratorBySpec()]cryptoFramework.createAsyKeyGeneratorBySpec方法 创建密钥生成器。

**Inheritance:** RSAPubKeySpecextends: AsyKeySpec.

**Since:** 10

**System capability:** SystemCapability.Security.CryptoFramework.Key.AsymKey

## Modules to Import

```TypeScript
import { cryptoFramework } from '@kit.CryptoArchitectureKit';
```

## pk

```TypeScript
pk: bigint
```

指定RSA算法的公钥pk。

**Type:** bigint

**Since:** 10

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.Security.CryptoFramework.Key.AsymKey

## params

```TypeScript
params: RSACommonParamsSpec
```

指定RSA算法中公私钥都包含的公共参数。

**Type:** RSACommonParamsSpec

**Since:** 10

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.Security.CryptoFramework.Key.AsymKey

