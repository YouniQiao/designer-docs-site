# DHPriKeySpec

密钥参数[AsyKeySpec]cryptoFramework.AsyKeySpec的子类，用于指定DH算法中私钥包含的参数。 在使用密钥参数生成密钥时，将其传入[createAsyKeyGeneratorBySpec()]cryptoFramework.createAsyKeyGeneratorBySpec方法 创建密钥生成器。

**Inheritance:** DHPriKeySpecextends: AsyKeySpec.

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

DH算法中的私钥sk。

**Type:** bigint

**Since:** 11

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.Security.CryptoFramework.Key.AsymKey

## params

```TypeScript
params: DHCommonParamsSpec
```

指定DH算法中公私钥都包含的公共参数。

**Type:** DHCommonParamsSpec

**Since:** 11

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.Security.CryptoFramework.Key.AsymKey

