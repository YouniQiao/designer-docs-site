---
last_update:
  date: 2026-07-04
---

# CmacSpec

Represents the child class of [MacSpec](arkts-cryptoarchitecture-macspec-i.md#macspec). It is used as an input parameter for CMAC generation. > **NOTE** > > **cipherName** specifies the CMAC symmetric encryption algorithm. It is mandatory.

**Inheritance/Implementation:** CmacSpec extends [MacSpec](arkts-cryptoarchitecture-macspec-i.md#macspec)

**Since:** 18

**System capability:** SystemCapability.Security.CryptoFramework.Mac

## Modules to Import

```TypeScript
import { cryptoFramework } from '@ohos.security.cryptoFramework';
```

## cipherName

```TypeScript
cipherName: string
```

Symmetric encryption algorithm to use.

**Type:** string

**Since:** 18

**Atomic service API:** This API can be used in atomic services since API version 18.

**System capability:** SystemCapability.Security.CryptoFramework.Mac

