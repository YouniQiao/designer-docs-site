# ED25519PriKeySpec

Defines a child class of [AsyKeySpec](arkts-cryptoarchitecture-asykeyspec-i.md) used to specify the parameters of the
private key in the Ed25519 algorithm.

To generate a key based on key parameters, pass it to
[createAsyKeyGeneratorBySpec()](arkts-cryptoarchitecture-createasykeygeneratorbyspec-f.md#createasykeygeneratorbyspec-1) to create a key generator.

**Inheritance/Implementation:** ED25519PriKeySpec extends [AsyKeySpec](arkts-cryptoarchitecture-asykeyspec-i.md)

**Since:** 11

**System capability:** 
- API version 12 and later: SystemCapability.Security.CryptoFramework.Key.AsymKey
- API version 11: SystemCapability.Security.CryptoFramework

## Modules to Import

```TypeScript
import { cryptoFramework } from '@kit.CryptoArchitectureKit';
```

## sk

```TypeScript
sk: bigint
```

Private key **sk** in the Ed25519 algorithm.

**Type:** bigint

**Since:** 11

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** 
- API version 12 and later: SystemCapability.Security.CryptoFramework.Key.AsymKey
- API version 11: SystemCapability.Security.CryptoFramework

