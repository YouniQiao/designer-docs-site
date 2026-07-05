# DataShareUpdate

更新数据库需要的参数信息。 数据提供方需要在module.json5中的proxyData节点定义要共享的表的标识，读写权限和基本信息。配置方式请见 [数据提供方应用的开发](docroot://database/share-data-by-silent-access-sys.md#数据提供方应用的开发)。

**Since:** 11

**System capability:** SystemCapability.Notification.ReminderAgent

**System API:** This is a system API.

## Modules to Import

```TypeScript
import { reminderAgentManager } from '@kit.BackgroundTasksKit';
```

## equalTo

```TypeScript
equalTo: Record<string, double | string | boolean>
```

指示筛选条件，当前仅支持通过等于筛选。

**Type:** Record<string, double | string | boolean>

**Since:** 11

**System capability:** SystemCapability.Notification.ReminderAgent

**System API:** This is a system API.

## value

```TypeScript
value: ValuesBucket
```

指示要更新的数据。

**Type:** ValuesBucket

**Since:** 11

**System capability:** SystemCapability.Notification.ReminderAgent

**System API:** This is a system API.

## uri

```TypeScript
uri: string
```

数据使用的URI，是跨应用数据访问的唯一标识。

**Type:** string

**Since:** 11

**System capability:** SystemCapability.Notification.ReminderAgent

**System API:** This is a system API.

