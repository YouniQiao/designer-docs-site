# GcmParamsSpec

Encapsulates the parameters for encryption or decryption using the GCM AEAD mode, which requires an IV, AAD, and an authentication tag. It is a child class of [ParamsSpec](arkts-cryptoarchitecture-paramsspec-i.md) and used as a parameter in [init()](arkts-cryptoarchitecture-cipher-i.md#init-4) for symmetric encryption or decryption. Applies to the GCM mode. > **NOTE** > > 1. Before passing a value to > [init()](arkts-cryptoarchitecture-cipher-i.md#init-4), specify > **algName** for its parent class [ParamsSpec](#paramsspec). > 2. If **aad** is not required or the **aad** length is 0, you can set its **data** attribute to an empty > Uint8Array in the **aad: { data: new Uint8Array() }** format when constructing **GcmParamsSpec**.

**Inheritance/Implementation:** GcmParamsSpec extends [ParamsSpec](arkts-cryptoarchitecture-paramsspec-i.md)

**Since:** 9

**System capability:** 
- API version 12 and later: SystemCapability.Security.CryptoFramework.Cipher
- API version 9 to 11: SystemCapability.Security.CryptoFramework

## Modules to Import

```TypeScript
import { cryptoFramework } from '@kit.CryptoArchitectureKit';
```

## aad

```TypeScript
aad: DataBlob
```

Additional authentication data (AAD), which is of 0 to INT_MAX bytes.

**Type:** DataBlob

**Since:** 9

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** 
- API version 12 and later: SystemCapability.Security.CryptoFramework.Cipher
- API version 9 to 11: SystemCapability.Security.CryptoFramework

## authTag

```TypeScript
authTag: DataBlob
```

Authentication tag, which is of 16 bytes. When GCM mode is used for encryption, you need to extract the last 16 bytes from the [DataBlob](arkts-cryptoarchitecture-datablob-i.md) returned by [doFinal()](arkts-cryptoarchitecture-cipher-i.md#dofinal-2) or [doFinalSync()](arkts-cryptoarchitecture-cipher-i.md#dofinalsync-1) and use them as **authTag** in **GcmParamsSpec** for [init()](arkts-cryptoarchitecture-cipher-i.md#init-4) or [initSync()](arkts-cryptoarchitecture-cipher-i.md#initsync-1).

**Type:** DataBlob

**Since:** 9

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** 
- API version 12 and later: SystemCapability.Security.CryptoFramework.Cipher
- API version 9 to 11: SystemCapability.Security.CryptoFramework

## iv

```TypeScript
iv: DataBlob
```

IV, which is of 1 to 128 bytes. A 12-byte IV is commonly used.

**Type:** DataBlob

**Since:** 9

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** 
- API version 12 and later: SystemCapability.Security.CryptoFramework.Cipher
- API version 9 to 11: SystemCapability.Security.CryptoFramework

