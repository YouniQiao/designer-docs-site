# GcmParamsSpec

加解密参数[ParamsSpec]cryptoFramework.ParamsSpec的子类，封装使用GCM AEAD模式进行加密或解密的参数，需要IV、AAD和认证 标签。它是[ParamsSpec]cryptoFramework.ParamsSpec的子类，用于在对称加解密时作为 [init()]cryptoFramework.Cipher.init(opMode: CryptoMode, key: Key, params: ParamsSpec | null)方法的参数。 适用于GCM模式。 > **说明：** > > 1. 传入[init()]cryptoFramework.Cipher.init(opMode: CryptoMode, key: Key, params: ParamsSpec | null)方法前需 > 要指定其algName属性（来源于父类[ParamsSpec]cryptoFramework.ParamsSpec）。 > 2. 如果不需要aad或者aad长度为0，构造GcmParamsSpec时可以将aad的data属性设置为空的Uint8Array， > 即aad: { data: new Uint8Array() }。

**继承实现关系：** GcmParamsSpec继承自：ParamsSpec。

**起始版本：** 9

**系统能力：** SystemCapability.Security.CryptoFramework.Cipher

## 导入模块

```TypeScript
import { cryptoFramework } from '@kit.CryptoArchitectureKit';
```

## authTag

```TypeScript
authTag: DataBlob
```

指明加解密参数authTag，长度为16字节。 采用GCM模式加密时，需从 [doFinal()]cryptoFramework.Cipher.doFinal(data: DataBlob | null, callback: AsyncCallback<DataBlob>)或 [doFinalSync()]cryptoFramework.Cipher.doFinalSync(data: DataBlob | null)输出的 [DataBlob]cryptoFramework.DataBlob中提取末尾16字节，作为 [init()]cryptoFramework.Cipher.init(opMode: CryptoMode, key: Key, params: ParamsSpec | null)或 [initSync()]cryptoFramework.Cipher.initSync方法中GcmParamsSpec的authTag。

**类型：** DataBlob

**起始版本：** 9

**原子化服务API：** 从API version 12开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Security.CryptoFramework.Cipher

## aad

```TypeScript
aad: DataBlob
```

指明加解密参数aad，长度为0~INT_MAX字节。

**类型：** DataBlob

**起始版本：** 9

**原子化服务API：** 从API version 12开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Security.CryptoFramework.Cipher

## iv

```TypeScript
iv: DataBlob
```

指明加解密参数iv，长度为1~128字节，常用为12字节。

**类型：** DataBlob

**起始版本：** 9

**原子化服务API：** 从API version 12开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Security.CryptoFramework.Cipher

