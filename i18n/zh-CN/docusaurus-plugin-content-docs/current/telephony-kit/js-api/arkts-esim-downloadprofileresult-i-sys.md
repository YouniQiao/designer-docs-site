# DownloadProfileResult

Result of the given downloadable Profile.

**起始版本：** 18

**系统能力：** SystemCapability.Telephony.CoreService.Esim

**系统接口：** 此接口为系统接口。

## 导入模块

```TypeScript
import { eSIM } from '@kit.TelephonyKit';
```

## responseResult

```TypeScript
responseResult: ResultCode
```

Gets the result of the operation.

**类型：** ResultCode

**起始版本：** 18

**系统能力：** SystemCapability.Telephony.CoreService.Esim

**系统接口：** 此接口为系统接口。

## cardId

```TypeScript
cardId: int
```

Gets the card Id. This value comes from EuiccService and is used when resolving solvable errors.

**类型：** int

**起始版本：** 18

**系统能力：** SystemCapability.Telephony.CoreService.Esim

**系统接口：** 此接口为系统接口。

## solvableErrors

```TypeScript
solvableErrors: SolvableErrors
```

Gets the solvable errors.

**类型：** SolvableErrors

**起始版本：** 18

**系统能力：** SystemCapability.Telephony.CoreService.Esim

**系统接口：** 此接口为系统接口。

