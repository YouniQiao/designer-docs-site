# RSACommonParamsSpec

密钥参数[AsyKeySpec]cryptoFramework.AsyKeySpec的子类，用于指定RSA算法中公私钥包含的公共参数，随机生成公/私钥。 在使用密钥参数生成密钥时，将其传入[createAsyKeyGeneratorBySpec()]cryptoFramework.createAsyKeyGeneratorBySpec方法 创建密钥生成器。

**Inheritance:** RSACommonParamsSpecextends: AsyKeySpec.

**Since:** 10

**System capability:** SystemCapability.Security.CryptoFramework.Key.AsymKey

## Modules to Import

```TypeScript
import { cryptoFramework } from '@kit.CryptoArchitectureKit';
```

## n

```TypeScript
n: bigint
```

指定模数n。

**Type:** bigint

**Since:** 10

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.Security.CryptoFramework.Key.AsymKey

