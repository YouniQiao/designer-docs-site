# DBActionInfo

端云协同数据库级清除配置信息。

**Since:** 23

**System capability:** SystemCapability.DistributedDataManager.CloudSync.Config

**System API:** This is a system API.

## Modules to Import

```TypeScript
import { cloudData } from '@kit.ArkData';
```

## tableInfo

```TypeScript
tableInfo?: Record<string, ClearAction>
```

要清除数据的表信息及清除规则。键为表名称，值为该表的清除方式。当未配置该参数时，默认使用数据库的数据清除方式。

**Type:** Record<string, ClearAction>

**Since:** 23

**System capability:** SystemCapability.DistributedDataManager.CloudSync.Config

**System API:** This is a system API.

## action

```TypeScript
action: ClearAction
```

数据库默认数据清除方式。

**Type:** ClearAction

**Since:** 23

**System capability:** SystemCapability.DistributedDataManager.CloudSync.Config

**System API:** This is a system API.

