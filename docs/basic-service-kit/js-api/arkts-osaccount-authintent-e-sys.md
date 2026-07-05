# AuthIntent

```TypeScript
enum AuthIntent
```

表示认证意图的枚举。

**Since:** 12

**System capability:** SystemCapability.Account.OsAccount

**System API:** This is a system API.

## UNLOCK

```TypeScript
UNLOCK = 1
```

解锁意图。

**Since:** 12

**System capability:** SystemCapability.Account.OsAccount

**System API:** This is a system API.

## SILENT_AUTH

```TypeScript
SILENT_AUTH = 2
```

静默认证意图。

**Since:** 14

**System capability:** SystemCapability.Account.OsAccount

**System API:** This is a system API.

## QUESTION_AUTH

```TypeScript
QUESTION_AUTH = 3
```

密保问题认证意图。

**Since:** 14

**System capability:** SystemCapability.Account.OsAccount

**System API:** This is a system API.

## ABANDONED_PIN_AUTH

```TypeScript
ABANDONED_PIN_AUTH = 4
```

废弃PIN码认证意图。用户修改锁屏密码后，旧的PIN码被废弃。废弃PIN存在期间，用户如果忘记密码可以通过废弃PIN认证通过后重置锁屏密码。

**Since:** 20

**System capability:** SystemCapability.Account.OsAccount

**System API:** This is a system API.

