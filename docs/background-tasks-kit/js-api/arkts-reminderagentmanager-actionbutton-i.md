# ActionButton

弹出的提醒中按钮的类型和标题。

**Since:** 9

**System capability:** SystemCapability.Notification.ReminderAgent

## Modules to Import

```TypeScript
import { reminderAgentManager } from '@kit.BackgroundTasksKit';
```

## wantAgent

```TypeScript
wantAgent?: WantAgent
```

点击按钮跳转的ability信息。

**Type:** WantAgent

**Since:** 10

**System capability:** SystemCapability.Notification.ReminderAgent

**System API:** This is a system API.

## titleResource

```TypeScript
titleResource?: string
```

标题的资源ID，用于切换系统语言后读取对应标题信息。

**Type:** string

**Since:** 11

**System capability:** SystemCapability.Notification.ReminderAgent

## dataShareUpdate

```TypeScript
dataShareUpdate?: DataShareUpdate
```

点击按钮将更新应用数据库。

**Type:** DataShareUpdate

**Since:** 11

**System capability:** SystemCapability.Notification.ReminderAgent

**System API:** This is a system API.

## type

```TypeScript
type: ActionButtonType
```

按钮的类型。

**Type:** ActionButtonType

**Since:** 9

**System capability:** SystemCapability.Notification.ReminderAgent

## title

```TypeScript
title: string
```

按钮显示的标题。

**Type:** string

**Since:** 9

**System capability:** SystemCapability.Notification.ReminderAgent

