# MaxScreenWantAgent

全屏显示提醒到达时自动拉起的目标ability信息，该接口预留。

**Since:** 7

**Deprecated since:** 9

**Substitute:** @ohos.reminderAgentManager:reminderAgentManager.MaxScreenWantAgent

**System capability:** SystemCapability.Notification.ReminderAgent

## Modules to Import

```TypeScript
import { reminderAgent } from '@kit.BackgroundTasksKit';
```

## abilityName

```TypeScript
abilityName: string
```

指明提醒到达时自动拉起的目标ability名（如果设备在使用中，则只弹出通知横幅框）。

**Type:** string

**Since:** 7

**Deprecated since:** 9

**Substitute:** reminderAgentManager.MaxScreenWantAgent.abilityName

**System capability:** SystemCapability.Notification.ReminderAgent

## pkgName

```TypeScript
pkgName: string
```

指明提醒到达时自动拉起的目标HAP名（如果设备在使用中，则只弹出通知横幅框）。

**Type:** string

**Since:** 7

**Deprecated since:** 9

**Substitute:** reminderAgentManager.MaxScreenWantAgent.pkgName

**System capability:** SystemCapability.Notification.ReminderAgent

