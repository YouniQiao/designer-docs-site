# ECFieldFp

Defines the prime field of the elliptic curve. It is a child class of [ECField](arkts-cryptoarchitecture-ecfield-i.md#ecfield).

**Inheritance/Implementation:** ECFieldFp extends [ECField](arkts-cryptoarchitecture-ecfield-i.md#ecfield)

**Since:** 10

**System capability:** 
- API version 12 and later: SystemCapability.Security.CryptoFramework.Key.AsymKey
- API version 10 to 11: SystemCapability.Security.CryptoFramework

## Modules to Import

```TypeScript
import { cryptoFramework } from '@ohos.security.cryptoFramework';
```

## p

```TypeScript
p: bigint
```

Value of the prime number **p**.

**Type:** bigint

**Since:** 10

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** 
- API version 12 and later: SystemCapability.Security.CryptoFramework.Key.AsymKey
- API version 10 to 11: SystemCapability.Security.CryptoFramework

