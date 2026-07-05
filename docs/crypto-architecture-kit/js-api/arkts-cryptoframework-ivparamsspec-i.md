# IvParamsSpec

加解密参数[ParamsSpec]cryptoFramework.ParamsSpec的子类，用于在对称加解密时作为 [init()]cryptoFramework.Cipher.init(opMode: CryptoMode, key: Key, params: ParamsSpec | null)方法的参数。 适用于CBC、CTR、OFB、CFB这些需要iv作为参数的加解密模式。 > **说明：** > > 传入[init()]cryptoFramework.Cipher.init(opMode: CryptoMode, key: Key, params: ParamsSpec | null)方法前需要 > 指定其algName属性（来源于父类[ParamsSpec]cryptoFramework.ParamsSpec）。

**Inheritance:** IvParamsSpecextends: ParamsSpec.

**Since:** 9

**System capability:** SystemCapability.Security.CryptoFramework.Cipher

## Modules to Import

```TypeScript
import { cryptoFramework } from '@kit.CryptoArchitectureKit';
```

## iv

```TypeScript
iv: DataBlob
```

加密和解密参数iv。常见取值如下： - AES的CBC|CTR|OFB|CFB模式：iv长度为16字节。 - 3DES的CBC|OFB|CFB模式：iv长度为8字节。 - SM4<sup>10+</sup>的CBC|CTR|OFB|CFB模式：iv长度为16字节。

**Type:** DataBlob

**Since:** 9

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.Security.CryptoFramework.Cipher

