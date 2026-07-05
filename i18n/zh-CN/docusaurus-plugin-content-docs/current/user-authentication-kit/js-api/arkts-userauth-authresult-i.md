# AuthResult

表示认证结果的对象。

**起始版本：** 8

**废弃版本：** 9

**替代接口：** userAuth.AuthResultInfo

**系统能力：** SystemCapability.UserIAM.UserAuth.Core

## 导入模块

```TypeScript
import { userAuth } from '@kit.UserAuthenticationKit';
```

## remainTimes

```TypeScript
remainTimes?: number
```

剩余的认证操作次数。

**类型：** number

**起始版本：** 8

**废弃版本：** 9

**替代接口：** userAuth.AuthResultInfo.remainAttempts

**系统能力：** SystemCapability.UserIAM.UserAuth.Core

## freezingTime

```TypeScript
freezingTime?: number
```

认证操作的冻结时间。单位为毫秒。

**类型：** number

**起始版本：** 8

**废弃版本：** 9

**替代接口：** userAuth.AuthResultInfo.lockoutDuration

**系统能力：** SystemCapability.UserIAM.UserAuth.Core

## token

```TypeScript
token?: Uint8Array
```

认证通过的令牌信息。

**类型：** Uint8Array

**起始版本：** 8

**废弃版本：** 9

**替代接口：** userAuth.AuthResultInfo.token

**系统能力：** SystemCapability.UserIAM.UserAuth.Core

