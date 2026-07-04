# DSAPubKeySpec

Defines a child class of [AsyKeySpec](arkts-cryptoarchitecture-asykeyspec-i.md#asykeyspec) used to specify the parameters of the public key in the DSA algorithm. To generate a key based on key parameters, pass it to [createAsyKeyGeneratorBySpec()](arkts-cryptoarchitecture-createasykeygeneratorbyspec-f.md#createasykeygeneratorbyspec-1) to create a key generator.

**Inheritance/Implementation:** DSAPubKeySpec extends [AsyKeySpec](arkts-cryptoarchitecture-asykeyspec-i.md#asykeyspec)

**Since:** 10

**System capability:** 
- API version 12 and later: SystemCapability.Security.CryptoFramework.Key.AsymKey
- API version 10 to 11: SystemCapability.Security.CryptoFramework

## Modules to Import

```TypeScript
import { cryptoFramework } from '@ohos.security.cryptoFramework';
```

## params

```TypeScript
params: DSACommonParamsSpec
```

Common parameters of the public and private keys in the DSA algorithm.

**Type:** DSACommonParamsSpec

**Since:** 10

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** 
- API version 12 and later: SystemCapability.Security.CryptoFramework.Key.AsymKey
- API version 10 to 11: SystemCapability.Security.CryptoFramework

## pk

```TypeScript
pk: bigint
```

Public key **pk** in the DSA algorithm.

**Type:** bigint

**Since:** 10

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** 
- API version 12 and later: SystemCapability.Security.CryptoFramework.Key.AsymKey
- API version 10 to 11: SystemCapability.Security.CryptoFramework

