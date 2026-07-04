# CipherRsaOptions

Defines the rsa cipher options.

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

## key

```TypeScript
key: string
```

Keys encrypted using RSA. During encryption, this parameter is a public key. During decryption, it is a private key.

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

Text content to be encrypted or decrypted. The text to be encrypted must be a common text and cannot exceed the length calculated based on the formula (keySize/8 - 66). keySize indicates the key length. For example, if the key length is 1024 bytes, the text cannot exceed 62 bytes (1024/8 - 66 = 62). The text content to be decrypted must be a binary value encoded using Base64. The default format is used for Base64 encoding.

**Type:** string

**Since:** 3

**Deprecated since:** 11

**Substitutes:** Cipher

**System capability:** SystemCapability.Security.Cipher

## transformation

```TypeScript
transformation?: string
```

RSA algorithm padding. The default value is RSA/None/OAEPWithSHA256AndMGF1Padding.

**Type:** string

**Since:** 3

**Deprecated since:** 11

**Substitutes:** Cipher

**System capability:** SystemCapability.Security.Cipher

