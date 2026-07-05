# ECCKeyPairSpec

密钥参数[AsyKeySpec]cryptoFramework.AsyKeySpec的子类，用于指定ECC算法中公私钥包含的全量参数。 在使用密钥参数生成密钥时，将其传入[createAsyKeyGeneratorBySpec()]cryptoFramework.createAsyKeyGeneratorBySpec方法 创建密钥生成器。

**继承实现关系：** ECCKeyPairSpec继承自：AsyKeySpec。

**起始版本：** 10

**系统能力：** SystemCapability.Security.CryptoFramework.Key.AsymKey

## 导入模块

```TypeScript
import { cryptoFramework } from '@kit.CryptoArchitectureKit';
```

## sk

```TypeScript
sk: bigint
```

ECC算法中的私钥sk。

**类型：** bigint

**起始版本：** 10

**原子化服务API：** 从API version 12开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Security.CryptoFramework.Key.AsymKey

## pk

```TypeScript
pk: Point
```

指定ECC算法的公钥pk。

**类型：** Point

**起始版本：** 10

**原子化服务API：** 从API version 12开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Security.CryptoFramework.Key.AsymKey

## params

```TypeScript
params: ECCCommonParamsSpec
```

指定ECC算法中公私钥都包含的公共参数。

**类型：** ECCCommonParamsSpec

**起始版本：** 10

**原子化服务API：** 从API version 12开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Security.CryptoFramework.Key.AsymKey

