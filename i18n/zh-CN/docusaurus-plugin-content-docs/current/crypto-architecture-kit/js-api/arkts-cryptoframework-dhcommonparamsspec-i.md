# DHCommonParamsSpec

密钥参数[AsyKeySpec]cryptoFramework.AsyKeySpec的子类，用于指定DH算法中公私钥包含的公共参数。 在使用密钥参数生成密钥时，将其传入[createAsyKeyGeneratorBySpec()]cryptoFramework.createAsyKeyGeneratorBySpec方法 创建密钥生成器。

**继承实现关系：** DHCommonParamsSpec继承自：AsyKeySpec。

**起始版本：** 11

**系统能力：** SystemCapability.Security.CryptoFramework.Key.AsymKey

## 导入模块

```TypeScript
import { cryptoFramework } from '@kit.CryptoArchitectureKit';
```

## p

```TypeScript
p: bigint
```

指定DH算法中大素数p。

**类型：** bigint

**起始版本：** 11

**原子化服务API：** 从API version 12开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Security.CryptoFramework.Key.AsymKey

## g

```TypeScript
g: bigint
```

DH算法中的参数g。

**类型：** bigint

**起始版本：** 11

**原子化服务API：** 从API version 12开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Security.CryptoFramework.Key.AsymKey

## l

```TypeScript
l: int
```

DH算法中私钥长度，单位为bits。

**类型：** int

**起始版本：** 11

**原子化服务API：** 从API version 12开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Security.CryptoFramework.Key.AsymKey

