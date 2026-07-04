# HmacSpec

Represents the child class of [MacSpec](arkts-cryptoarchitecture-macspec-i.md#macspec). It is used as an input parameter for HMAC generation. > **NOTE** > > **mdName** specifies the HMAC message digest algorithm. It is mandatory.

**Inheritance/Implementation:** HmacSpec extends [MacSpec](arkts-cryptoarchitecture-macspec-i.md#macspec)

**Since:** 18

**System capability:** SystemCapability.Security.CryptoFramework.Mac

## Modules to Import

```TypeScript
import { cryptoFramework } from '@ohos.security.cryptoFramework';
```

## mdName

```TypeScript
mdName: string
```

Message digest algorithm.

**Type:** string

**Since:** 18

**Atomic service API:** This API can be used in atomic services since API version 18.

**System capability:** SystemCapability.Security.CryptoFramework.Mac

