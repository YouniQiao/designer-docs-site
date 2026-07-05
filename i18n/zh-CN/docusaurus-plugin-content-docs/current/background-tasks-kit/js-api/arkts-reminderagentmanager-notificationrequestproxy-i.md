# NotificationRequestProxy

Notification request proxy.

**起始版本：** 26.0.0

**系统能力：** SystemCapability.Notification.ReminderAgent

## 导入模块

```TypeScript
import { reminderAgentManager } from '@kit.BackgroundTasksKit';
```

## isAlertOnce

```TypeScript
isAlertOnce?: boolean
```

Whether to send a notification only once when the notification is published or updated. - true: A notification is sent only when the notification is published for the first time. For subsequent update, the notification mode is changed to LEVEL_MIN. - false (default): A notification is sent based on the configured notification mode.

**类型：** boolean

**起始版本：** 26.0.0

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Notification.ReminderAgent

## appMessageId

```TypeScript
appMessageId?: string
```

Unique ID carried in a notification sent by an app, which is used for notification deduplication. If an app publishes notifications with the same appMessageId locally or on the cloud, the device displays only one message. Repeated notifications received later will be silenced and deduplicated, and will not be displayed or notified. The deduplication flag is valid only within 24 hours after the notification is published. After 24 hours or the device is restarted, the deduplication flag becomes invalid.

**类型：** string

**起始版本：** 26.0.0

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Notification.ReminderAgent

