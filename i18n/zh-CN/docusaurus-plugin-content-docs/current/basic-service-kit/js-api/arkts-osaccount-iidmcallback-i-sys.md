# IIdmCallback

表示身份管理回调类。

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

身份管理信息获取回调函数。

**类型：** (module: int, acquire: int, extraInfo: Uint8Array) => void

**起始版本：** 8

**系统能力：** SystemCapability.Account.OsAccount

**系统接口：** 此接口为系统接口。

## onResult

```TypeScript
onResult: (result: int, extraInfo: RequestResult) => void
```

身份管理操作结果回调函数，返回结果码和请求结果信息。

**类型：** (result: int, extraInfo: RequestResult) => void

**起始版本：** 8

**系统能力：** SystemCapability.Account.OsAccount

**系统接口：** 此接口为系统接口。

