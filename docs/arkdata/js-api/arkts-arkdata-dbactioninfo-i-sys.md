# DBActionInfo (System API)

Defines the clearance information of a device-cloud synergy database.

**Since:** 23

**System capability:** SystemCapability.DistributedDataManager.CloudSync.Config

**System API:** This is a system API.

## Modules to Import

```TypeScript
import { cloudData } from '@kit.ArkData';
```

## action

```TypeScript
action: ClearAction
```

Default data clearance mode of the database.

**Type:** ClearAction

**Since:** 23

**System capability:** SystemCapability.DistributedDataManager.CloudSync.Config

**System API:** This is a system API.

## tableInfo

```TypeScript
tableInfo?: Record<string, ClearAction>
```

Information about the table whose data is to be cleared and the clearance rules. The key is the table name, and the value is the clearance mode of the table. If this parameter is not set, the data clearance mode of database is used by default.

**Type:** Record<string, ClearAction>

**Since:** 23

**System capability:** SystemCapability.DistributedDataManager.CloudSync.Config

**System API:** This is a system API.

