# SlotType

Enumerates the notification slot types.

**Since:** 9

**System capability:** SystemCapability.Notification.Notification

## UNKNOWN_TYPE

```TypeScript
UNKNOWN_TYPE = 0
```

Unknown type. This type corresponds to [SlotLevel](arkts-notification-slotlevel-e.md) being **LEVEL_MIN**.

**Since:** 9

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.Notification.Notification

## SOCIAL_COMMUNICATION

```TypeScript
SOCIAL_COMMUNICATION = 1
```

Notification slot for social communication. This type corresponds to
[SlotLevel](arkts-notification-slotlevel-e.md) being **LEVEL_HIGH**.

**Since:** 9

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.Notification.Notification

## SERVICE_INFORMATION

```TypeScript
SERVICE_INFORMATION = 2
```

Notification slot for service information. This type corresponds to
[SlotLevel](arkts-notification-slotlevel-e.md) being **LEVEL_HIGH**.

**Since:** 9

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.Notification.Notification

## CONTENT_INFORMATION

```TypeScript
CONTENT_INFORMATION = 3
```

Notification slot for content consultation. This type corresponds to
[SlotLevel](arkts-notification-slotlevel-e.md) being **LEVEL_MIN**.

**Since:** 9

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.Notification.Notification

## LIVE_VIEW

```TypeScript
LIVE_VIEW = 4
```

Live view. A third-party application cannot directly create a notification of this slot type. After the system
proxy creates a system live view, the third-party application publishes a notification with the same ID to update
the specified content. This type corresponds to [SlotLevel](arkts-notification-slotlevel-e.md) being
**LEVEL_DEFAULT**.

**Since:** 11

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.Notification.Notification

## CUSTOMER_SERVICE

```TypeScript
CUSTOMER_SERVICE = 5
```

Notification slot for customer service message. This type is used for messages between users and customer service
providers. The messages must be initiated by users. This type corresponds to
[SlotLevel](arkts-notification-slotlevel-e.md) being **LEVEL_DEFAULT**.

**Since:** 11

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.Notification.Notification

## OTHER_TYPES

```TypeScript
OTHER_TYPES = 0xFFFF
```

Notification slot for other purposes. This type corresponds to [SlotLevel](arkts-notification-slotlevel-e.md)
being **LEVEL_MIN**.

**Since:** 9

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.Notification.Notification

