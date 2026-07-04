---
last_update:
  date: 2026-07-04
---

# Cipher

Defines the cipher functions.

**Since:** 3

**Deprecated since:** 9

**Substitutes:** Cipher

**System capability:** SystemCapability.Security.Cipher

## Modules to Import

```TypeScript
import { CipherAesOptions, CipherResponse, CipherRsaOptions } from '@system.cipher';
```

## aes

```TypeScript
static aes(options: CipherAesOptions): void
```

Encrypts or decrypts data using AES.

**Since:** 3

**Deprecated since:** 9

**Substitutes:** Cipher

**System capability:** SystemCapability.Security.Cipher

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| options | CipherAesOptions | Yes | AES options |

## rsa

```TypeScript
static rsa(options: CipherRsaOptions): void
```

Encrypts or decrypts data using RSA.

**Since:** 3

**Deprecated since:** 9

**Substitutes:** Cipher

**System capability:** SystemCapability.Security.Cipher

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| options | CipherRsaOptions | Yes | RSA options |

