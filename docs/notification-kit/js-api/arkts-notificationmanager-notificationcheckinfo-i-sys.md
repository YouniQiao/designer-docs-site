# NotificationCheckInfo

通知校验参数。

**Since:** 10

**System capability:** SystemCapability.Notification.Notification

**System API:** This is a system API.

## Modules to Import

```TypeScript
import { notificationManager } from '@kit.NotificationKit';
```

## creatorUserId

```TypeScript
creatorUserId: int
```

通知的user ID。

**Type:** int

**Since:** 11

**Required permissions:** 

 ohos.permission.NOTIFICATION_CONTROLLER and ohos.permission.NOTIFICATION_AGENT_CONTROLLER

**System capability:** SystemCapability.Notification.Notification

**System API:** This is a system API.

## slotType

```TypeScript
slotType: SlotType
```

渠道类型。

**Type:** SlotType

**Since:** 11

**Required permissions:** 

 ohos.permission.NOTIFICATION_CONTROLLER and ohos.permission.NOTIFICATION_AGENT_CONTROLLER

**System capability:** SystemCapability.Notification.Notification

**System API:** This is a system API.

## bundleName

```TypeScript
bundleName: string
```

Bundle名称。

**Type:** string

**Since:** 10

**Required permissions:** 

 ohos.permission.NOTIFICATION_CONTROLLER and ohos.permission.NOTIFICATION_AGENT_CONTROLLER

**System capability:** SystemCapability.Notification.Notification

**System API:** This is a system API.

## notificationId

```TypeScript
notificationId: int
```

通知ID。

**Type:** int

**Since:** 10

**Required permissions:** 

 ohos.permission.NOTIFICATION_CONTROLLER and ohos.permission.NOTIFICATION_AGENT_CONTROLLER

**System capability:** SystemCapability.Notification.Notification

**System API:** This is a system API.

## label

```TypeScript
label?: string
```

通知标签。

**Type:** string

**Since:** 11

**Required permissions:** 

 ohos.permission.NOTIFICATION_CONTROLLER and ohos.permission.NOTIFICATION_AGENT_CONTROLLER

**System capability:** SystemCapability.Notification.Notification

**System API:** This is a system API.

## contentType

```TypeScript
contentType: ContentType
```

通知类型。

**Type:** ContentType

**Since:** 10

**Required permissions:** 

 ohos.permission.NOTIFICATION_CONTROLLER and ohos.permission.NOTIFICATION_AGENT_CONTROLLER

**System capability:** SystemCapability.Notification.Notification

**System API:** This is a system API.

## extraInfos

```TypeScript
extraInfos?: Record<string, Object>
```

实况通知的附加信息。

**Type:** Record<string, Object>

**Since:** 11

**Required permissions:** 

 ohos.permission.NOTIFICATION_CONTROLLER and ohos.permission.NOTIFICATION_AGENT_CONTROLLER

**System capability:** SystemCapability.Notification.Notification

**System API:** This is a system API.

```TypeScript
extraInfos?: Record<string, RecordData>
```

实况通知的附加信息。

**Type:** Record<string, RecordData>

**Since:** 23

**Required permissions:** 

 ohos.permission.NOTIFICATION_CONTROLLER and ohos.permission.NOTIFICATION_AGENT_CONTROLLER

**System capability:** SystemCapability.Notification.Notification

**System API:** This is a system API.

