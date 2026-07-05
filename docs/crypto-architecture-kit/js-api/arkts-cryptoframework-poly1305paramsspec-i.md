# Poly1305ParamsSpec

加解密参数[ParamsSpec]cryptoFramework.ParamsSpec的子类，封装使用ChaCha20-Poly1305 AEAD模式进行加密或解密的参数， 需要nonce、AAD和认证标签。它是 [ParamsSpec]cryptoFramework.ParamsSpec的子类，用于在对称加解密时作为 [init()]cryptoFramework.Cipher.init(opMode: CryptoMode, key: Key, params: ParamsSpec | null)方法的参数。 适用于[ChaCha20-Poly1305](docroot://security/CryptoArchitectureKit/crypto-sym-encrypt-decrypt-spec.md#chacha20)。 > **说明：** > > 传入[init()]cryptoFramework.Cipher.init(opMode: CryptoMode, key: Key, params: ParamsSpec | null)方法前需要 > 指定其algName属性（来源于父类[ParamsSpec]cryptoFramework.ParamsSpec）。 > > 在ChaCha20-Poly1305加密时，需从 > [doFinal()]cryptoFramework.Cipher.doFinal(data: DataBlob | null, callback: AsyncCallback<DataBlob>)或 > [doFinalSync()]cryptoFramework.Cipher.doFinalSync(data: DataBlob | null)输出的 > [DataBlob]cryptoFramework.DataBlob末尾提取16字节，作为解密时 > [init()]cryptoFramework.Cipher.init(opMode: CryptoMode, key: Key, params: ParamsSpec | null)或 > [initSync()]cryptoFramework.Cipher.initSync方法的参数 > [Poly1305ParamsSpec]cryptoFramework.Poly1305ParamsSpec中的authTag。

**Inheritance:** Poly1305ParamsSpecextends: ParamsSpec.

**Since:** 22

**System capability:** SystemCapability.Security.CryptoFramework.Cipher

## Modules to Import

```TypeScript
import { cryptoFramework } from '@kit.CryptoArchitectureKit';
```

## authTag

```TypeScript
authTag: DataBlob
```

指定加解密参数authTag，长度为16字节。

**Type:** DataBlob

**Since:** 22

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Security.CryptoFramework.Cipher

## aad

```TypeScript
aad: DataBlob
```

指明加解密参数aad。

**Type:** DataBlob

**Since:** 22

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Security.CryptoFramework.Cipher

## iv

```TypeScript
iv: DataBlob
```

Nonce（通过iv字段传入），长度为12字节。

**Type:** DataBlob

**Since:** 22

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Security.CryptoFramework.Cipher

