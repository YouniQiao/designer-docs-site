# Poly1305ParamsSpec

Encapsulates the parameters for encryption or decryption using the ChaCha20-Poly1305 AEAD mode, which requires a
nonce, AAD, and an authentication tag. It is a child class of
[ParamsSpec](arkts-cryptoarchitecture-paramsspec-i.md) and used as a parameter in
[init()](arkts-cryptoarchitecture-cipher-i.md#init-4) for symmetric
encryption or decryption.

Applicable to [ChaCha20-Poly1305](../../../../security/CryptoArchitectureKit/crypto-sym-encrypt-decrypt-spec.md#chacha20).

> **NOTE**
>
> Before passing a value to
> [init()](arkts-cryptoarchitecture-cipher-i.md#init-4), specify
> **algName** for its parent class [ParamsSpec](arkts-cryptoarchitecture-paramsspec-i.md).
>
> When the Poly1305 mode is used for encryption, you need to extract the last 16 bytes from the
> [DataBlob](arkts-cryptoarchitecture-datablob-i.md) returned by
> [doFinal()](arkts-cryptoarchitecture-cipher-i.md#dofinal-2) or
> [doFinalSync()](arkts-cryptoarchitecture-cipher-i.md#dofinalsync-1) and use them as **authTag** in
> [Poly1305ParamsSpec](arkts-cryptoarchitecture-poly1305paramsspec-i.md) for
> [init()](arkts-cryptoarchitecture-cipher-i.md#init-4) or
> [initSync()](arkts-cryptoarchitecture-cipher-i.md#initsync-1) during decryption.

**Inheritance/Implementation:** Poly1305ParamsSpec extends [ParamsSpec](arkts-cryptoarchitecture-paramsspec-i.md)

**Since:** 22

**System capability:** SystemCapability.Security.CryptoFramework.Cipher

## Modules to Import

```TypeScript
import { cryptoFramework } from '@kit.CryptoArchitectureKit';
```

## aad

```TypeScript
aad: DataBlob
```

Additional authenticated data.

**Type:** DataBlob

**Since:** 22

**Atomic service API:** This API can be used in atomic services since API version 22.

**System capability:** SystemCapability.Security.CryptoFramework.Cipher

## authTag

```TypeScript
authTag: DataBlob
```

Authentication tag, which is of 16 bytes.

**Type:** DataBlob

**Since:** 22

**Atomic service API:** This API can be used in atomic services since API version 22.

**System capability:** SystemCapability.Security.CryptoFramework.Cipher

## iv

```TypeScript
iv: DataBlob
```

Nonce (passed as the **iv** field), which is of 12 bytes.

**Type:** DataBlob

**Since:** 22

**Atomic service API:** This API can be used in atomic services since API version 22.

**System capability:** SystemCapability.Security.CryptoFramework.Cipher

