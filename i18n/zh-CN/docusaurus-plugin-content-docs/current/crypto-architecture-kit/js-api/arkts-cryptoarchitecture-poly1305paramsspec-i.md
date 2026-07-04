---
last_update:
  date: 2026-07-04
---

# Poly1305ParamsSpec

加解密参数[ParamsSpec](arkts-cryptoarchitecture-paramsspec-i.md#paramsspec)的子类，用于在对称加解密时作为 [init()](arkts-cryptoarchitecture-cipher-i.md#init-4)方法的参数。 适用于[ChaCha20-Poly1305](../../../../security/CryptoArchitectureKit/crypto-sym-encrypt-decrypt-spec.md#chacha20)。 > **说明：** > > 传入[init()](arkts-cryptoarchitecture-cipher-i.md#init-4)方法前需要 > 指定其algName属性（来源于父类[ParamsSpec](arkts-cryptoarchitecture-paramsspec-i.md#paramsspec)）。 > > 在ChaCha20-Poly1305加密时，需从 > [doFinal()](arkts-cryptoarchitecture-cipher-i.md#dofinal-2)或 > [doFinalSync()](arkts-cryptoarchitecture-cipher-i.md#dofinalsync-1)输出的 > [DataBlob](arkts-cryptoarchitecture-datablob-i.md#datablob)末尾提取16字节，作为解密时 > [init()](arkts-cryptoarchitecture-cipher-i.md#init-4)或 > [initSync()](arkts-cryptoarchitecture-cipher-i.md#initsync-1)方法的参数 > [Poly1305ParamsSpec](arkts-cryptoarchitecture-poly1305paramsspec-i.md#poly1305paramsspec)中的authTag。

**继承/实现关系：** Poly1305ParamsSpec extends [ParamsSpec](arkts-cryptoarchitecture-paramsspec-i.md#paramsspec)

**起始版本：** 22

**系统能力：** SystemCapability.Security.CryptoFramework.Cipher

## aad

```TypeScript
aad: DataBlob
```

指明加解密参数aad，长度为任意字节。

**类型：** DataBlob

**起始版本：** 22

**元服务API：** 从API版本22开始，该接口支持在元服务API中使用。

**系统能力：** SystemCapability.Security.CryptoFramework.Cipher

## authTag

```TypeScript
authTag: DataBlob
```

指定加解密参数authTag，长度为16字节。

**类型：** DataBlob

**起始版本：** 22

**元服务API：** 从API版本22开始，该接口支持在元服务API中使用。

**系统能力：** SystemCapability.Security.CryptoFramework.Cipher

## iv

```TypeScript
iv: DataBlob
```

指明加解密参数iv，长度为12字节。

**类型：** DataBlob

**起始版本：** 22

**元服务API：** 从API版本22开始，该接口支持在元服务API中使用。

**系统能力：** SystemCapability.Security.CryptoFramework.Cipher

