# IUserAuthCallback

表示用户认证回调类。

**起始版本：** 8

**系统能力：** SystemCapability.Account.OsAccount

**系统接口：** 此接口为系统接口。

## 导入模块

```TypeScript
import { osAccount } from '@kit.BasicServicesKit';
```

## onAcquireInfo

```TypeScript
onAcquireInfo?: (module: int, acquire: int, extraInfo: Uint8Array) => void
```

身份认证信息获取回调函数。

**类型：** (module: int, acquire: int, extraInfo: Uint8Array) => void

**起始版本：** 8

**系统能力：** SystemCapability.Account.OsAccount

**系统接口：** 此接口为系统接口。

## onResult

```TypeScript
onResult: (result: int, extraInfo: AuthResult) => void
```

身份认证结果回调函数，返回结果码和认证结果信息。

**类型：** (result: int, extraInfo: AuthResult) => void

**起始版本：** 8

**系统能力：** SystemCapability.Account.OsAccount

**系统接口：** 此接口为系统接口。

