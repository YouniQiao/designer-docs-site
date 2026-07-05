# CcmParamsSpec

加解密参数[ParamsSpec]cryptoFramework.ParamsSpec的子类，封装使用CCM AEAD模式进行加密或解密的参数，需要IV、AAD和认证 标签。它是[ParamsSpec]cryptoFramework.ParamsSpec的子类，用于在对称加解密时作为 [init()]cryptoFramework.Cipher.init(opMode: CryptoMode, key: Key, params: ParamsSpec | null)方法的参数。 适用于CCM模式。 > **说明：** > > 传入[init()]cryptoFramework.Cipher.init(opMode: CryptoMode, key: Key, params: ParamsSpec | null)方法前需 > 要指定其algName属性（来源于父类[ParamsSpec]cryptoFramework.ParamsSpec）。

**Inheritance:** CcmParamsSpecextends: ParamsSpec.

**Since:** 9

**System capability:** SystemCapability.Security.CryptoFramework.Cipher

## Modules to Import

```TypeScript
import { cryptoFramework } from '@kit.CryptoArchitectureKit';
```

## authTag

```TypeScript
authTag: DataBlob
```

指明加解密参数authTag，长度为12字节。 采用CCM模式加密时，需从 [doFinal()]cryptoFramework.Cipher.doFinal(data: DataBlob | null, callback: AsyncCallback<DataBlob>)或 [doFinalSync()]cryptoFramework.Cipher.doFinalSync(data: DataBlob | null)输出的 [DataBlob]cryptoFramework.DataBlob中提取末尾12字节，作为解密时 [init()]cryptoFramework.Cipher.init(opMode: CryptoMode, key: Key, params: ParamsSpec | null)或 [initSync()]cryptoFramework.Cipher.initSync方法中CcmParamsSpec的authTag。

**Type:** DataBlob

**Since:** 9

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.Security.CryptoFramework.Cipher

## aad

```TypeScript
aad: DataBlob
```

指明加解密参数aad。aad最小长度为1字节，最大为2048字节。

**Type:** DataBlob

**Since:** 9

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.Security.CryptoFramework.Cipher

## iv

```TypeScript
iv: DataBlob
```

指明加解密参数iv，仅支持7字节。若传入iv长度超过7字节，超出范围将被截断。

**Type:** DataBlob

**Since:** 9

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.Security.CryptoFramework.Cipher

