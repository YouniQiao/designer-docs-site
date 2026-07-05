# SlotType

```TypeScript
export enum SlotType
```

通知渠道类型。

**Since:** 9

**System capability:** SystemCapability.Notification.Notification

## UNKNOWN_TYPE

```TypeScript
UNKNOWN_TYPE = 0
```

未知类型。该类型对应[SlotLevel]notificationManager.SlotLevel为LEVEL_MIN。

**Since:** 9

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.Notification.Notification

## SOCIAL_COMMUNICATION

```TypeScript
SOCIAL_COMMUNICATION = 1
```

社交通信。该类型对应[SlotLevel]notificationManager.SlotLevel为LEVEL_HIGH。

**Since:** 9

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.Notification.Notification

## SERVICE_INFORMATION

```TypeScript
SERVICE_INFORMATION = 2
```

服务提醒。该类型对应[SlotLevel]notificationManager.SlotLevel为LEVEL_HIGH。

**Since:** 9

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.Notification.Notification

## CONTENT_INFORMATION

```TypeScript
CONTENT_INFORMATION = 3
```

内容资讯。该类型对应[SlotLevel]notificationManager.SlotLevel为LEVEL_MIN。

**Since:** 9

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.Notification.Notification

## LIVE_VIEW

```TypeScript
LIVE_VIEW = 4
```

实况窗。不支持三方应用直接创建该渠道类型通知，可以由系统代理创建后，三方应用发布同ID的通知来更新指定内容。该类型对应[SlotLevel]notificationManager.SlotLevel为 LEVEL_DEFAULT。

**Since:** 11

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.Notification.Notification

## CUSTOMER_SERVICE

```TypeScript
CUSTOMER_SERVICE = 5
```

客服消息。该类型用于用户与商家之间的客服消息，需由用户主动发起。该类型对应[SlotLevel]notificationManager.SlotLevel为LEVEL_DEFAULT。

**Since:** 11

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.Notification.Notification

## EMERGENCY_INFORMATION

```TypeScript
EMERGENCY_INFORMATION = 10
```

紧急事件。

**Since:** 12

**System capability:** SystemCapability.Notification.Notification

**System API:** This is a system API.

## OTHER_TYPES

```TypeScript
OTHER_TYPES = 0xFFFF
```

其他。该类型对应[SlotLevel]notificationManager.SlotLevel为LEVEL_MIN。

**Since:** 9

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.Notification.Notification

