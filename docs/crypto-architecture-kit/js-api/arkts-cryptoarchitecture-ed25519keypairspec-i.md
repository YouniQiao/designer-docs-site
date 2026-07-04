# ED25519KeyPairSpec

Defines a child class of [AsyKeySpec](arkts-cryptoarchitecture-asykeyspec-i.md#asykeyspec) used to specify full parameters of the public and private keys in the Ed25519 algorithm. To generate a key based on key parameters, pass it to [createAsyKeyGeneratorBySpec()](arkts-cryptoarchitecture-createasykeygeneratorbyspec-f.md#createasykeygeneratorbyspec-1) to create a key generator.

**Inheritance/Implementation:** ED25519KeyPairSpec extends [AsyKeySpec](arkts-cryptoarchitecture-asykeyspec-i.md#asykeyspec)

**Since:** 11

**System capability:** 
- API version 12 and later: SystemCapability.Security.CryptoFramework.Key.AsymKey
- API version 11: SystemCapability.Security.CryptoFramework

## Modules to Import

```TypeScript
import { cryptoFramework } from '@ohos.security.cryptoFramework';
```

## pk

```TypeScript
pk: bigint
```

Public key **pk** in the Ed25519 algorithm.

**Type:** bigint

**Since:** 11

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** 
- API version 12 and later: SystemCapability.Security.CryptoFramework.Key.AsymKey
- API version 11: SystemCapability.Security.CryptoFramework

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

