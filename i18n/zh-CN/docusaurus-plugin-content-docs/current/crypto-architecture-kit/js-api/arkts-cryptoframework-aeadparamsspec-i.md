# AeadParamsSpec

用于AEAD（带附加数据的认证加密）对称加解密的 [init()]cryptoFramework.Cipher.init(opMode: CryptoMode, key: Key, params: ParamsSpec | null)方法参数，继承自 [ParamsSpec]cryptoFramework.ParamsSpec。 适用于[AES算法](docroot://security/CryptoArchitectureKit/crypto-sym-encrypt-decrypt-spec.md#aes)的CCM和GCM分组模式。 适用于[SM4算法](docroot://security/CryptoArchitectureKit/crypto-sym-encrypt-decrypt-spec.md#sm4)的GCM分组模式。 适用于[ChaCha20-Poly1305算法](docroot://security/CryptoArchitectureKit/crypto-sym-encrypt-decrypt-spec.md#chacha20) 分组模式。 > **说明：** > > 在AES-CCM模式下使用AeadParamsSpec加密时： > - 如果加密时指定了tag长度，解密时也必须传入相同的长度。 > > - CCM模式下[update]cryptoFramework.Cipher.update与[doFinal]cryptoFramework.Cipher.doFinal只能调用其 > 中一个进行加密或者解密，且每个方法只能调用一次。

**继承实现关系：** AeadParamsSpec继承自：ParamsSpec。

**起始版本：** 26.0.0

**系统能力：** SystemCapability.Security.CryptoFramework.Cipher

## 导入模块

```TypeScript
import { cryptoFramework } from '@kit.CryptoArchitectureKit';
```

## tagLen

```TypeScript
tagLen?: int
```

指定加解密参数authTag长度。 对于加密操作，tag将被添加到密文的末尾。 对于解密操作，tag应位于密文的末尾。 取值限定为整数。 <br>对于 AES-CCM，其默认值为12。支持的范围为4、6、8、10、12、14 和 16。 对于 AES-GCM，其默认值为16。支持的范围为4、8、12、13、14、15 和 16。 对于 SM4-GCM，其默认值为16。支持的范围为4、8、12、13、14、15 和 16。 对于 ChaCha20-Poly1305，其默认值为16。支持的范围为16。

**类型：** int

**起始版本：** 26.0.0

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Security.CryptoFramework.Cipher

## authenticatedData

```TypeScript
authenticatedData?: Uint8Array
```

指定可选的附加认证数据。

**类型：** Uint8Array

**起始版本：** 26.0.0

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Security.CryptoFramework.Cipher

## nonce

```TypeScript
nonce: Uint8Array
```

指明加解密参数nonce。 <br>对于AES-CCM，nonce长度的取值范围为7~13字节。 对于AES-GCM，nonce长度范围为1~128字节，推荐使用12字节。 对于SM4-GCM，nonce长度范围为1~128字节，推荐使用12字节。 对于ChaCha20-Poly1305，nonce长度必须为12字节。

**类型：** Uint8Array

**起始版本：** 26.0.0

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Security.CryptoFramework.Cipher

