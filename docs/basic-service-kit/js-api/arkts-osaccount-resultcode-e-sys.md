# ResultCode

```TypeScript
enum ResultCode
```

表示身份验证结果码。

**Since:** 8

**System capability:** SystemCapability.Account.OsAccount

**System API:** This is a system API.

## SUCCESS

```TypeScript
SUCCESS = 0
```

表示身份验证成功或支持此功能。

**Since:** 8

**System capability:** SystemCapability.Account.OsAccount

**System API:** This is a system API.

## FAIL

```TypeScript
FAIL = 1
```

表示验证器无法识别用户。

**Since:** 8

**System capability:** SystemCapability.Account.OsAccount

**System API:** This is a system API.

## GENERAL_ERROR

```TypeScript
GENERAL_ERROR = 2
```

表示其他错误。

**Since:** 8

**System capability:** SystemCapability.Account.OsAccount

**System API:** This is a system API.

## CANCELED

```TypeScript
CANCELED = 3
```

表示身份验证已取消。

**Since:** 8

**System capability:** SystemCapability.Account.OsAccount

**System API:** This is a system API.

## TIMEOUT

```TypeScript
TIMEOUT = 4
```

表示身份验证已超时。

**Since:** 8

**System capability:** SystemCapability.Account.OsAccount

**System API:** This is a system API.

## TYPE_NOT_SUPPORT

```TypeScript
TYPE_NOT_SUPPORT = 5
```

表示不支持此身份验证类型。

**Since:** 8

**System capability:** SystemCapability.Account.OsAccount

**System API:** This is a system API.

## TRUST_LEVEL_NOT_SUPPORT

```TypeScript
TRUST_LEVEL_NOT_SUPPORT = 6
```

表示不支持身份验证信任级别。

**Since:** 8

**System capability:** SystemCapability.Account.OsAccount

**System API:** This is a system API.

## BUSY

```TypeScript
BUSY = 7
```

表示身份验证任务正忙。等待几秒钟，然后重试。

**Since:** 8

**System capability:** SystemCapability.Account.OsAccount

**System API:** This is a system API.

## INVALID_PARAMETERS

```TypeScript
INVALID_PARAMETERS = 8
```

表示参数不正确。

**Since:** 8

**System capability:** SystemCapability.Account.OsAccount

**System API:** This is a system API.

## LOCKED

```TypeScript
LOCKED = 9
```

指示身份验证器已锁定。

**Since:** 8

**System capability:** SystemCapability.Account.OsAccount

**System API:** This is a system API.

## NOT_ENROLLED

```TypeScript
NOT_ENROLLED = 10
```

表示用户尚未注册验证器。

**Since:** 8

**System capability:** SystemCapability.Account.OsAccount

**System API:** This is a system API.

