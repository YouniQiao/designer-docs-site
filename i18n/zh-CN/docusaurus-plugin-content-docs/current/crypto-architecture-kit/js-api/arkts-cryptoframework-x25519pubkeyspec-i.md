# X25519PubKeySpec

密钥参数[AsyKeySpec]cryptoFramework.AsyKeySpec的子类，用于指定X25519算法中公钥包含的参数。 在使用密钥参数生成密钥时，将其传入[createAsyKeyGeneratorBySpec()]cryptoFramework.createAsyKeyGeneratorBySpec方法 创建密钥生成器。

**继承实现关系：** X25519PubKeySpec继承自：AsyKeySpec。

**起始版本：** 11

**系统能力：** SystemCapability.Security.CryptoFramework.Key.AsymKey

## 导入模块

```TypeScript
import { cryptoFramework } from '@kit.CryptoArchitectureKit';
```

## pk

```TypeScript
pk: bigint
```

X25519算法中的公钥pk。

**类型：** bigint

**起始版本：** 11

**原子化服务API：** 从API version 12开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Security.CryptoFramework.Key.AsymKey

