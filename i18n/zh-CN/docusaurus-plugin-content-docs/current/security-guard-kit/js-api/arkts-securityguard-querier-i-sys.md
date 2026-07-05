# Querier

Definition callback of receiving the query data.

**起始版本：** 12

**系统能力：** SystemCapability.Security.SecurityGuard

**系统接口：** 此接口为系统接口。

## 导入模块

```TypeScript
import { securityGuard } from '@kit.SecurityGuardKit';
```

## onError

```TypeScript
onError: (message: string) => void
```

Triggered when error.

**类型：** (message: string) => void

**起始版本：** 12

**系统能力：** SystemCapability.Security.SecurityGuard

**系统接口：** 此接口为系统接口。

## onComplete

```TypeScript
onComplete: () => void
```

Triggered when data is complete.

**类型：** () => void

**起始版本：** 12

**系统能力：** SystemCapability.Security.SecurityGuard

**系统接口：** 此接口为系统接口。

## onQuery

```TypeScript
onQuery: (events: Array<SecurityEvent>) => void
```

Triggered when data is returned.

**类型：** (events: Array<SecurityEvent>) => void

**起始版本：** 12

**系统能力：** SystemCapability.Security.SecurityGuard

**系统接口：** 此接口为系统接口。

