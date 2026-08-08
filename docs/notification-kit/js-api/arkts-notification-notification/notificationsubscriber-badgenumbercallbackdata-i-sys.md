# BadgeNumberCallbackData (System API)

Returns the changes of the application badge number.

**Since:** 10

**ArkTS mode:** ArkTS-Dyn since version 10; ArkTS-Sta since version 23.

<!--Device-unnamed-export interface BadgeNumberCallbackData--><!--Device-unnamed-export interface BadgeNumberCallbackData-End-->

**System capability:** SystemCapability.Notification.Notification

**System API:** This is a system API.

## appInstanceKey

```TypeScript
readonly appInstanceKey?: string
```

Key value of an application instance.

**Type:** string

**Since:** 15

**ArkTS mode:** ArkTS-Dyn since version 15; ArkTS-Sta since version 23.

<!--Device-BadgeNumberCallbackData-readonly appInstanceKey?: string--><!--Device-BadgeNumberCallbackData-readonly appInstanceKey?: string-End-->

**System capability:** SystemCapability.Notification.Notification

**System API:** This is a system API.

## badgeNumber

```TypeScript
readonly badgeNumber: int
```

Number of notifications displayed on the application icon.

**Type:** int

**Since:** 10

**ArkTS mode:** ArkTS-Dyn since version 10; ArkTS-Sta since version 23.

<!--Device-BadgeNumberCallbackData-readonly badgeNumber: int--><!--Device-BadgeNumberCallbackData-readonly badgeNumber: int-End-->

**System capability:** SystemCapability.Notification.Notification

**System API:** This is a system API.

## bundle

```TypeScript
readonly bundle: string
```

Bundle name of the application.

**Type:** string

**Since:** 10

**ArkTS mode:** ArkTS-Dyn since version 10; ArkTS-Sta since version 23.

<!--Device-BadgeNumberCallbackData-readonly bundle: string--><!--Device-BadgeNumberCallbackData-readonly bundle: string-End-->

**System capability:** SystemCapability.Notification.Notification

**System API:** This is a system API.

## instanceKey

```TypeScript
readonly instanceKey?: number
```

Key value of an application instance. This parameter is supported since API version 12 and deprecated since API version 15.You are advised to use **appInstanceKey** instead.

**Type:** number

**Since:** 12

**ArkTS mode:** ArkTS-Dyn only, since version 12.

**Deprecated since:** 15

**Substitutes:** [BadgeNumberCallbackData#appInstanceKey](notificationsubscriber-badgenumbercallbackdata-i-sys.md#appinstancekey)

<!--Device-BadgeNumberCallbackData-readonly instanceKey?: number--><!--Device-BadgeNumberCallbackData-readonly instanceKey?: number-End-->

**System capability:** SystemCapability.Notification.Notification

**System API:** This is a system API.

## uid

```TypeScript
readonly uid: int
```

UID of the application.

**Type:** int

**Since:** 10

**ArkTS mode:** ArkTS-Dyn since version 10; ArkTS-Sta since version 23.

<!--Device-BadgeNumberCallbackData-readonly uid: int--><!--Device-BadgeNumberCallbackData-readonly uid: int-End-->

**System capability:** SystemCapability.Notification.Notification

**System API:** This is a system API.

