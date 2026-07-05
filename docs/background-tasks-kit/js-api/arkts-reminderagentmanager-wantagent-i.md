# WantAgent

跳转目标的ability信息。

**Since:** 9

**System capability:** SystemCapability.Notification.ReminderAgent

## Modules to Import

```TypeScript
import { reminderAgentManager } from '@kit.BackgroundTasksKit';
```

## abilityName

```TypeScript
abilityName: string
```

指明跳转目标的ability名称。

**Type:** string

**Since:** 9

**System capability:** SystemCapability.Notification.ReminderAgent

## pkgName

```TypeScript
pkgName: string
```

指明跳转目标的包名。

**Type:** string

**Since:** 9

**System capability:** SystemCapability.Notification.ReminderAgent

## parameters

```TypeScript
parameters?: Record<string, Object>
```

需要传递到目标的参数。

**Type:** Record<string, Object>

**Since:** 12

**System capability:** SystemCapability.Notification.ReminderAgent

```TypeScript
parameters?: RecordData
```

The description of the WantParams object in an Want

**Type:** RecordData

**Since:** 23

**System capability:** SystemCapability.Notification.ReminderAgent

## uri

```TypeScript
uri?: string
```

指明跳转目标的uri信息。

**Type:** string

**Since:** 12

**System capability:** SystemCapability.Notification.ReminderAgent

