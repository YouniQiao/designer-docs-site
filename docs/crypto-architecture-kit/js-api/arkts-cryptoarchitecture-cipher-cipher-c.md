# Cipher

Defines the cipher functions.

**Since:** 3

**Deprecated since:** 9

**Substitutes:** Cipher

<!--Device-unnamed-export default class Cipher--><!--Device-unnamed-export default class Cipher-End-->

**System capability:** SystemCapability.Security.Cipher

## Modules to Import

```TypeScript
import { CipherAesOptions, CipherResponse, CipherRsaOptions } from '@kit.CryptoArchitectureKit';
```

<a id="aes"></a>
## aes

```TypeScript
static aes(options: CipherAesOptions): void
```

Encrypts or decrypts data using AES.

**Since:** 3

**Deprecated since:** 9

**Substitutes:** Cipher

<!--Device-Cipher-static aes(options: CipherAesOptions): void--><!--Device-Cipher-static aes(options: CipherAesOptions): void-End-->

**System capability:** SystemCapability.Security.Cipher

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| options | [CipherAesOptions](arkts-cryptoarchitecture-cipher-cipheraesoptions-i.md) | Yes | AES options. |

<a id="rsa"></a>
## rsa

```TypeScript
static rsa(options: CipherRsaOptions): void
```

Encrypts or decrypts data using RSA.

**Since:** 3

**Deprecated since:** 9

**Substitutes:** Cipher

<!--Device-Cipher-static rsa(options: CipherRsaOptions): void--><!--Device-Cipher-static rsa(options: CipherRsaOptions): void-End-->

**System capability:** SystemCapability.Security.Cipher

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| options | [CipherRsaOptions](arkts-cryptoarchitecture-cipher-cipherrsaoptions-i.md) | Yes | RSA options. |

