# BadgeNumberCallbackData (System API)

Describes the badge number of the application has changed.

**Since:** 10

**System capability:** SystemCapability.Notification.Notification

**System API:** This is a system API.

## appInstanceKey

```TypeScript
readonly appInstanceKey?: string
```

Key value of an application instance.

**Type:** string

**Since:** 15

**System capability:** SystemCapability.Notification.Notification

**System API:** This is a system API.

## badgeNumber

```TypeScript
readonly badgeNumber: number
```

Number of notifications displayed on the application icon.

**Type:** number

**Since:** 10

**System capability:** SystemCapability.Notification.Notification

**System API:** This is a system API.

## bundle

```TypeScript
readonly bundle: string
```

Bundle name of the application.

**Type:** string

**Since:** 10

**System capability:** SystemCapability.Notification.Notification

**System API:** This is a system API.

## instanceKey

```TypeScript
readonly instanceKey?: number
```

Key value of an application instance. This parameter is supported since API version 12 and deprecated since API version 15.You are advised to use **appInstanceKey** instead.

**Type:** number

**Since:** 12

**Deprecated since:** 15

**Substitutes:** [appInstanceKey](arkts-notification-badgenumbercallbackdata-i-sys.md#appinstancekey)

**System capability:** SystemCapability.Notification.Notification

**System API:** This is a system API.

## uid

```TypeScript
readonly uid: number
```

UID of the application.

**Type:** number

**Since:** 10

**System capability:** SystemCapability.Notification.Notification

**System API:** This is a system API.

