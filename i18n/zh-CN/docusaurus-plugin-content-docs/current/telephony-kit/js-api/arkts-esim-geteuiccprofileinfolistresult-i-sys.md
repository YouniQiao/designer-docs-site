# GetEuiccProfileInfoListResult

Result of all eUICC profile information.

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

## profiles

```TypeScript
profiles: Array<EuiccProfile>
```

Gets the profile list (only upon success).

**类型：** Array<EuiccProfile>

**起始版本：** 18

**系统能力：** SystemCapability.Telephony.CoreService.Esim

**系统接口：** 此接口为系统接口。

## isRemovable

```TypeScript
isRemovable: boolean
```

Gets whether the eUICC can be removed.

**类型：** boolean

**起始版本：** 18

**系统能力：** SystemCapability.Telephony.CoreService.Esim

**系统接口：** 此接口为系统接口。

