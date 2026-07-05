# BadgeNumberCallbackData

应用通知角标数量状态变化的回调函数类型。

**Since:** 10

**System capability:** SystemCapability.Notification.Notification

**System API:** This is a system API.

## uid

```TypeScript
readonly uid: int
```

应用的uid。

**Type:** int

**Since:** 10

**System capability:** SystemCapability.Notification.Notification

**System API:** This is a system API.

## badgeNumber

```TypeScript
readonly badgeNumber: int
```

角标个数。

**Type:** int

**Since:** 10

**System capability:** SystemCapability.Notification.Notification

**System API:** This is a system API.

## appInstanceKey

```TypeScript
readonly appInstanceKey?: string
```

应用实例键值。

**Type:** string

**Since:** 15

**System capability:** SystemCapability.Notification.Notification

**System API:** This is a system API.

## bundle

```TypeScript
readonly bundle: string
```

应用的包名。

**Type:** string

**Since:** 10

**System capability:** SystemCapability.Notification.Notification

**System API:** This is a system API.

## instanceKey

```TypeScript
readonly instanceKey?: number
```

应用实例键值。从API version 12开始支持，从API version 15开始废弃，建议使用appInstanceKey替代。

**Type:** number

**Since:** 12

**Deprecated since:** 15

**Substitute:** BadgeNumberCallbackData#appInstanceKey

**System capability:** SystemCapability.Notification.Notification

**System API:** This is a system API.

