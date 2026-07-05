# AuthenticationResult

```TypeScript
export enum AuthenticationResult
```

表示认证结果的枚举。

**Since:** 6

**Deprecated since:** 8

**Substitute:** userAuth.UserAuthResultCode

**System capability:** SystemCapability.UserIAM.UserAuth.Core

## NO_SUPPORT

```TypeScript
NO_SUPPORT = -1
```

设备不支持当前的认证方式。

**Since:** 6

**Deprecated since:** 8

**Substitute:** userAuth.ResultCode.TYPE_NOT_SUPPORT

**System capability:** SystemCapability.UserIAM.UserAuth.Core

## SUCCESS

```TypeScript
SUCCESS = 0
```

认证成功。

**Since:** 6

**Deprecated since:** 8

**Substitute:** userAuth.ResultCode.SUCCESS

**System capability:** SystemCapability.UserIAM.UserAuth.Core

## COMPARE_FAILURE

```TypeScript
COMPARE_FAILURE = 1
```

比对失败。

**Since:** 6

**Deprecated since:** 8

**Substitute:** userAuth.ResultCode.FAIL

**System capability:** SystemCapability.UserIAM.UserAuth.Core

## CANCELED

```TypeScript
CANCELED = 2
```

用户取消认证。

**Since:** 6

**Deprecated since:** 8

**Substitute:** userAuth.ResultCode.CANCELED

**System capability:** SystemCapability.UserIAM.UserAuth.Core

## TIMEOUT

```TypeScript
TIMEOUT = 3
```

认证超时。

**Since:** 6

**Deprecated since:** 8

**Substitute:** userAuth.ResultCode.TIMEOUT

**System capability:** SystemCapability.UserIAM.UserAuth.Core

## CAMERA_FAIL

```TypeScript
CAMERA_FAIL = 4
```

开启相机失败。

**Since:** 6

**Deprecated since:** 8

**System capability:** SystemCapability.UserIAM.UserAuth.Core

## BUSY

```TypeScript
BUSY = 5
```

认证服务忙，请稍后重试。

**Since:** 6

**Deprecated since:** 8

**Substitute:** userAuth.ResultCode.BUSY

**System capability:** SystemCapability.UserIAM.UserAuth.Core

## INVALID_PARAMETERS

```TypeScript
INVALID_PARAMETERS = 6
```

认证参数无效。

**Since:** 6

**Deprecated since:** 8

**Substitute:** userAuth.ResultCode.INVALID_PARAMETERS

**System capability:** SystemCapability.UserIAM.UserAuth.Core

## LOCKED

```TypeScript
LOCKED = 7
```

认证失败次数过多，已锁定。

**Since:** 6

**Deprecated since:** 8

**Substitute:** userAuth.ResultCode.LOCKED

**System capability:** SystemCapability.UserIAM.UserAuth.Core

## NOT_ENROLLED

```TypeScript
NOT_ENROLLED = 8
```

未录入认证凭据。

**Since:** 6

**Deprecated since:** 8

**Substitute:** userAuth.ResultCode.NOT_ENROLLED

**System capability:** SystemCapability.UserIAM.UserAuth.Core

## GENERAL_ERROR

```TypeScript
GENERAL_ERROR = 100
```

其他错误。

**Since:** 6

**Deprecated since:** 8

**Substitute:** userAuth.ResultCode.GENERAL_ERROR

**System capability:** SystemCapability.UserIAM.UserAuth.Core

