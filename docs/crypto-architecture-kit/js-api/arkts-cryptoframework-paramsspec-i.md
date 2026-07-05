# ParamsSpec

加解密参数，在进行对称加解密时需要构造其子类对象，并将子类对象传入 [init()]cryptoFramework.Cipher.init(opMode: CryptoMode, key: Key, params: ParamsSpec | null)方法。 适用于需要iv等参数的对称加解密模式（对于无iv等参数的模式如ECB模式，无需构造，在 [init()]cryptoFramework.Cipher.init(opMode: CryptoMode, key: Key, params: ParamsSpec | null)中传入null即可）。 > **说明：** > > iv（Initialization Vector，初始化向量）是用于对称加密模式（如 CBC/CTR/OFB/CFB/GCM/CCM/ChaCha20-Poly1305）中引入随机性或 > 唯一性的字节序列，保证相同明文在相同密钥下产生不同密文。 > **说明：** > > 由于[init()]cryptoFramework.Cipher.init(opMode: CryptoMode, key: Key, params: ParamsSpec | null)的params > 参数是ParamsSpec类型（父类），而实际需要传入具体的子类对象（如[IvParamsSpec]cryptoFramework.IvParamsSpec），因此在 > 构造子类对象时应设置其父类ParamsSpec的algName参数，使算法库在init()时知道传入的是哪种子类对象。

**Since:** 9

**System capability:** SystemCapability.Security.CryptoFramework.Cipher

## Modules to Import

```TypeScript
import { cryptoFramework } from '@kit.CryptoArchitectureKit';
```

## algName

```TypeScript
algName: string
```

指明对称加解密参数的算法模式。可选值如下： - "IvParamsSpec"：适用于CBC|CTR|OFB|CFB模式。 - "GcmParamsSpec"：适用于GCM模式。 - "CcmParamsSpec"：适用于CCM模式。 - "AeadParamsSpec"：适用于AES-GCM，AES-CCM，SM4-GCM和ChaCha20-Poly1305算法。

**Type:** string

**Since:** 9

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.Security.CryptoFramework.Cipher

