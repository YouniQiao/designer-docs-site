# AuthenticationResult

```TypeScript
export enum AuthenticationResult
```

表示认证结果的枚举。

**起始版本：** 6

**废弃版本：** 8

**替代接口：** userAuth.UserAuthResultCode

**系统能力：** SystemCapability.UserIAM.UserAuth.Core

## NO_SUPPORT

```TypeScript
NO_SUPPORT = -1
```

设备不支持当前的认证方式。

**起始版本：** 6

**废弃版本：** 8

**替代接口：** userAuth.ResultCode.TYPE_NOT_SUPPORT

**系统能力：** SystemCapability.UserIAM.UserAuth.Core

## SUCCESS

```TypeScript
SUCCESS = 0
```

认证成功。

**起始版本：** 6

**废弃版本：** 8

**替代接口：** userAuth.ResultCode.SUCCESS

**系统能力：** SystemCapability.UserIAM.UserAuth.Core

## COMPARE_FAILURE

```TypeScript
COMPARE_FAILURE = 1
```

比对失败。

**起始版本：** 6

**废弃版本：** 8

**替代接口：** userAuth.ResultCode.FAIL

**系统能力：** SystemCapability.UserIAM.UserAuth.Core

## CANCELED

```TypeScript
CANCELED = 2
```

用户取消认证。

**起始版本：** 6

**废弃版本：** 8

**替代接口：** userAuth.ResultCode.CANCELED

**系统能力：** SystemCapability.UserIAM.UserAuth.Core

## TIMEOUT

```TypeScript
TIMEOUT = 3
```

认证超时。

**起始版本：** 6

**废弃版本：** 8

**替代接口：** userAuth.ResultCode.TIMEOUT

**系统能力：** SystemCapability.UserIAM.UserAuth.Core

## CAMERA_FAIL

```TypeScript
CAMERA_FAIL = 4
```

开启相机失败。

**起始版本：** 6

**废弃版本：** 8

**系统能力：** SystemCapability.UserIAM.UserAuth.Core

## BUSY

```TypeScript
BUSY = 5
```

认证服务忙，请稍后重试。

**起始版本：** 6

**废弃版本：** 8

**替代接口：** userAuth.ResultCode.BUSY

**系统能力：** SystemCapability.UserIAM.UserAuth.Core

## INVALID_PARAMETERS

```TypeScript
INVALID_PARAMETERS = 6
```

认证参数无效。

**起始版本：** 6

**废弃版本：** 8

**替代接口：** userAuth.ResultCode.INVALID_PARAMETERS

**系统能力：** SystemCapability.UserIAM.UserAuth.Core

## LOCKED

```TypeScript
LOCKED = 7
```

认证失败次数过多，已锁定。

**起始版本：** 6

**废弃版本：** 8

**替代接口：** userAuth.ResultCode.LOCKED

**系统能力：** SystemCapability.UserIAM.UserAuth.Core

## NOT_ENROLLED

```TypeScript
NOT_ENROLLED = 8
```

未录入认证凭据。

**起始版本：** 6

**废弃版本：** 8

**替代接口：** userAuth.ResultCode.NOT_ENROLLED

**系统能力：** SystemCapability.UserIAM.UserAuth.Core

## GENERAL_ERROR

```TypeScript
GENERAL_ERROR = 100
```

其他错误。

**起始版本：** 6

**废弃版本：** 8

**替代接口：** userAuth.ResultCode.GENERAL_ERROR

**系统能力：** SystemCapability.UserIAM.UserAuth.Core

