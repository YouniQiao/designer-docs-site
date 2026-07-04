# DSACommonParamsSpec

Defines a child class of [AsyKeySpec](arkts-cryptoarchitecture-asykeyspec-i.md#asykeyspec) used to specify the common parameters of the public and private keys in the DSA algorithm. It can be used to randomly generate a public or private key. To generate a key based on key parameters, pass it to [createAsyKeyGeneratorBySpec()](arkts-cryptoarchitecture-createasykeygeneratorbyspec-f.md#createasykeygeneratorbyspec-1) to create a key generator.

**Inheritance/Implementation:** DSACommonParamsSpec extends [AsyKeySpec](arkts-cryptoarchitecture-asykeyspec-i.md#asykeyspec)

**Since:** 10

**System capability:** 
- API version 12 and later: SystemCapability.Security.CryptoFramework.Key.AsymKey
- API version 10 to 11: SystemCapability.Security.CryptoFramework

## Modules to Import

```TypeScript
import { cryptoFramework } from '@ohos.security.cryptoFramework';
```

## g

```TypeScript
g: bigint
```

Parameter **g** in the DSA algorithm.

**Type:** bigint

**Since:** 10

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** 
- API version 12 and later: SystemCapability.Security.CryptoFramework.Key.AsymKey
- API version 10 to 11: SystemCapability.Security.CryptoFramework

## p

```TypeScript
p: bigint
```

Prime modulus **p** in the DSA algorithm.

**Type:** bigint

**Since:** 10

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** 
- API version 12 and later: SystemCapability.Security.CryptoFramework.Key.AsymKey
- API version 10 to 11: SystemCapability.Security.CryptoFramework

## q

```TypeScript
q: bigint
```

Parameter **q**, prime factor of (p - 1) in the DSA algorithm.

**Type:** bigint

**Since:** 10

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** 
- API version 12 and later: SystemCapability.Security.CryptoFramework.Key.AsymKey
- API version 10 to 11: SystemCapability.Security.CryptoFramework

