# HmacSpec

消息认证码参数[MacSpec]cryptoFramework.MacSpec的子类，作为HMAC计算的输入。 > **说明：** > > mdName是必选参数，表示HMAC摘要算法。

**继承实现关系：** HmacSpec继承自：MacSpec。

**起始版本：** 18

**系统能力：** SystemCapability.Security.CryptoFramework.Mac

## 导入模块

```TypeScript
import { cryptoFramework } from '@kit.CryptoArchitectureKit';
```

## mdName

```TypeScript
mdName: string
```

摘要算法名。

**类型：** string

**起始版本：** 18

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Security.CryptoFramework.Mac

