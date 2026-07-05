# PBKDF2Spec

密钥派生函数参数[KdfSpec]cryptoFramework.KdfSpec的子类，作为PBKDF2密钥派生函数进行密钥派生时的输入。 > **说明：** > > password 是原始密码。如果使用 string 类型，需直接传入用于密钥派生的数据，而不是 HexString 或 base64 等字符串类型，并确保该字符串 > 为 UTF-8 编码，否则派生结果会有差异。

**继承实现关系：** PBKDF2Spec继承自：KdfSpec。

**起始版本：** 11

**系统能力：** SystemCapability.Security.CryptoFramework.Kdf

## 导入模块

```TypeScript
import { cryptoFramework } from '@kit.CryptoArchitectureKit';
```

## password

```TypeScript
password: string | Uint8Array
```

用户输入的原始密码。

**类型：** string | Uint8Array

**起始版本：** 11

**原子化服务API：** 从API version 12开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Security.CryptoFramework.Kdf

## salt

```TypeScript
salt: Uint8Array
```

盐值。

**类型：** Uint8Array

**起始版本：** 11

**原子化服务API：** 从API version 12开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Security.CryptoFramework.Kdf

## keySize

```TypeScript
keySize: int
```

派生得到的密钥字节长度，单位为bytes。

**类型：** int

**起始版本：** 11

**原子化服务API：** 从API version 12开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Security.CryptoFramework.Kdf

## iterations

```TypeScript
iterations: int
```

迭代次数，需要为正整数。

**类型：** int

**起始版本：** 11

**原子化服务API：** 从API version 12开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Security.CryptoFramework.Kdf

