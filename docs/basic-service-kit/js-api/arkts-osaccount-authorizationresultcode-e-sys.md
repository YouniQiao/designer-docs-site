# AuthorizationResultCode

```TypeScript
enum AuthorizationResultCode
```

表示授权结果码的枚举。

**Since:** 24

**System capability:** SystemCapability.Account.OsAccount

**System API:** This is a system API.

## AUTHORIZATION_SUCCESS

```TypeScript
AUTHORIZATION_SUCCESS = 0
```

表示授权成功。

**Since:** 24

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Account.OsAccount

**System API:** This is a system API.

## AUTHORIZATION_CANCELED

```TypeScript
AUTHORIZATION_CANCELED = 12300301
```

表示授权已取消。

**Since:** 24

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Account.OsAccount

**System API:** This is a system API.

## AUTHORIZATION_INTERACTION_NOT_ALLOWED

```TypeScript
AUTHORIZATION_INTERACTION_NOT_ALLOWED = 12300302
```

表示服务因不允许用户交互而拒绝授权。 可能原因： 1. 调用者位于后台； 2. isInteractionAllowed选项的值为false； 3. 指定的交互上下文无效。

**Since:** 24

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Account.OsAccount

**System API:** This is a system API.

## AUTHORIZATION_DENIED

```TypeScript
AUTHORIZATION_DENIED = 12300303
```

表示因不符合授权规则，如账号类型不是管理员、设备类型不支持等原因而拒绝授权。

**Since:** 24

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Account.OsAccount

**System API:** This is a system API.

## AUTHORIZATION_SERVICE_BUSY

```TypeScript
AUTHORIZATION_SERVICE_BUSY = 12300304
```

表示服务忙碌。 可能原因：正在处理其他授权。

**Since:** 24

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Account.OsAccount

**System API:** This is a system API.

