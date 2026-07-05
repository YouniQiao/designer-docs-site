# IvParamsSpec

加解密参数[ParamsSpec]cryptoFramework.ParamsSpec的子类，用于在对称加解密时作为 [init()]cryptoFramework.Cipher.init(opMode: CryptoMode, key: Key, params: ParamsSpec | null)方法的参数。 适用于CBC、CTR、OFB、CFB这些需要iv作为参数的加解密模式。 > **说明：** > > 传入[init()]cryptoFramework.Cipher.init(opMode: CryptoMode, key: Key, params: ParamsSpec | null)方法前需要 > 指定其algName属性（来源于父类[ParamsSpec]cryptoFramework.ParamsSpec）。

**继承实现关系：** IvParamsSpec继承自：ParamsSpec。

**起始版本：** 9

**系统能力：** SystemCapability.Security.CryptoFramework.Cipher

## 导入模块

```TypeScript
import { cryptoFramework } from '@kit.CryptoArchitectureKit';
```

## iv

```TypeScript
iv: DataBlob
```

加密和解密参数iv。常见取值如下： - AES的CBC|CTR|OFB|CFB模式：iv长度为16字节。 - 3DES的CBC|OFB|CFB模式：iv长度为8字节。 - SM4<sup>10+</sup>的CBC|CTR|OFB|CFB模式：iv长度为16字节。

**类型：** DataBlob

**起始版本：** 9

**原子化服务API：** 从API version 12开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Security.CryptoFramework.Cipher

