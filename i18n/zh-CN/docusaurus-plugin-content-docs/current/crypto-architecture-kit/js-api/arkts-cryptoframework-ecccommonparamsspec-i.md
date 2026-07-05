# ECCCommonParamsSpec

密钥参数[AsyKeySpec]cryptoFramework.AsyKeySpec的子类，用于指定ECC算法中公私钥包含的公共参数，随机生成公/私钥。 在使用密钥参数生成密钥时，将其传入[createAsyKeyGeneratorBySpec()]cryptoFramework.createAsyKeyGeneratorBySpec方法 创建密钥生成器。

**继承实现关系：** ECCCommonParamsSpec继承自：AsyKeySpec。

**起始版本：** 10

**系统能力：** SystemCapability.Security.CryptoFramework.Key.AsymKey

## 导入模块

```TypeScript
import { cryptoFramework } from '@kit.CryptoArchitectureKit';
```

## a

```TypeScript
a: bigint
```

指定椭圆曲线的第一个系数a。

**类型：** bigint

**起始版本：** 10

**原子化服务API：** 从API version 12开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Security.CryptoFramework.Key.AsymKey

## b

```TypeScript
b: bigint
```

指定椭圆曲线的第二个系数b。

**类型：** bigint

**起始版本：** 10

**原子化服务API：** 从API version 12开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Security.CryptoFramework.Key.AsymKey

## field

```TypeScript
field: ECField
```

指定椭圆曲线的域（当前只支持Fp域）。

**类型：** ECField

**起始版本：** 10

**原子化服务API：** 从API version 12开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Security.CryptoFramework.Key.AsymKey

## g

```TypeScript
g: Point
```

指定基点g。

**类型：** Point

**起始版本：** 10

**原子化服务API：** 从API version 12开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Security.CryptoFramework.Key.AsymKey

## h

```TypeScript
h: int
```

指定余因子h。

**类型：** int

**起始版本：** 10

**原子化服务API：** 从API version 12开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Security.CryptoFramework.Key.AsymKey

## n

```TypeScript
n: bigint
```

ECC算法中基点g的阶n。

**类型：** bigint

**起始版本：** 10

**原子化服务API：** 从API version 12开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Security.CryptoFramework.Key.AsymKey

