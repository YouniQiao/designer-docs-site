# NotificationRequestProxy

Notification request proxy.

**Since:** 26.0.0

**System capability:** SystemCapability.Notification.ReminderAgent

## Modules to Import

```TypeScript
import { reminderAgentManager } from '@kit.BackgroundTasksKit';
```

## appMessageId

```TypeScript
appMessageId?: string
```

Unique ID carried in a notification sent by an app, which is used for notification deduplication.
If an app publishes notifications with the same appMessageId locally or on the cloud,
the device displays only one message.
Repeated notifications received later will be silenced and deduplicated, and will not be displayed or notified.
The deduplication flag is valid only within 24 hours after the notification is published.
After 24 hours or the device is restarted,
the deduplication flag becomes invalid.

**Type:** string

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.Notification.ReminderAgent

## isAlertOnce

```TypeScript
isAlertOnce?: boolean
```

Whether to send a notification only once when the notification is published or updated.
- true: A notification is sent only when the notification is published for the first time. For subsequent update,
the notification mode is changed to LEVEL_MIN.
- false (default): A notification is sent based on the configured notification mode.

**Type:** boolean

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.Notification.ReminderAgent

