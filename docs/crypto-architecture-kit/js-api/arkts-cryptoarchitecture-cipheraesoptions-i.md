---
last_update:
  date: 2026-07-04
---

# CipherAesOptions

Defines the aes cipher options.

**Since:** 3

**Deprecated since:** 11

**Substitutes:** Cipher

**System capability:** SystemCapability.Security.Cipher

## Modules to Import

```TypeScript
import { CipherAesOptions, CipherResponse, CipherRsaOptions } from '@system.cipher';
```

## action

```TypeScript
action: string
```

Action type. The options are as follows: encrypt: Encrypts data. decrypt: Decrypts data.

**Type:** string

**Since:** 3

**Deprecated since:** 11

**Substitutes:** Cipher

**System capability:** SystemCapability.Security.Cipher

## complete

```TypeScript
complete: () => void
```

Called when the execution is completed.

**Type:** () => void

**Since:** 3

**Deprecated since:** 11

**Substitutes:** Cipher

**System capability:** SystemCapability.Security.Cipher

## fail

```TypeScript
fail: (data: string, code: number) => void
```

Called when data fails to be encrypted or decrypted.

**Type:** (data: string, code: number) => void

**Since:** 3

**Deprecated since:** 11

**Substitutes:** Cipher

**System capability:** SystemCapability.Security.Cipher

## iv

```TypeScript
iv?: string
```

Initial vector for AES-based encryption and decryption. The value is a character string encoded using Base64. The default value is the key value.

**Type:** string

**Since:** 3

**Deprecated since:** 11

**Substitutes:** Cipher

**System capability:** SystemCapability.Security.Cipher

## ivLen

```TypeScript
ivLen?: string
```

Length of the initial vector for AES-based encryption and decryption. The default value is 16.

**Type:** string

**Since:** 3

**Deprecated since:** 11

**Substitutes:** Cipher

**System capability:** SystemCapability.Security.Cipher

## ivOffset

```TypeScript
ivOffset?: string
```

Offset of the initial vector for AES-based encryption and decryption. The default value is 0.

**Type:** string

**Since:** 3

**Deprecated since:** 11

**Substitutes:** Cipher

**System capability:** SystemCapability.Security.Cipher

## key

```TypeScript
key: string
```

Key used for encryption or decryption, which is a character string encrypted using Base64.

**Type:** string

**Since:** 3

**Deprecated since:** 11

**Substitutes:** Cipher

**System capability:** SystemCapability.Security.Cipher

## success

```TypeScript
success: (data: CipherResponse) => void
```

Called when data is encrypted or decrypted successfully.

**Type:** (data: CipherResponse) => void

**Since:** 3

**Deprecated since:** 11

**Substitutes:** Cipher

**System capability:** SystemCapability.Security.Cipher

## text

```TypeScript
text: string
```

Text content to be encrypted or decrypted. The text to be encrypted must be a common text. The text content to be decrypted must be a binary value encoded using Base64. The default format is used for Base64 encoding.

**Type:** string

**Since:** 3

**Deprecated since:** 11

**Substitutes:** Cipher

**System capability:** SystemCapability.Security.Cipher

## transformation

```TypeScript
transformation?: string
```

Encryption mode and padding of the AES algorithm. The default value is AES/CBC/PKCS5Padding.

**Type:** string

**Since:** 3

**Deprecated since:** 11

**Substitutes:** Cipher

**System capability:** SystemCapability.Security.Cipher

