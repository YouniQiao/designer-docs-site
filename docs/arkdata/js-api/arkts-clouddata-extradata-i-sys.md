# ExtraData

透传数据，携带通知数据变更所需要的信息。

**Since:** 11

**System capability:** SystemCapability.DistributedDataManager.CloudSync.Config

**System API:** This is a system API.

## Modules to Import

```TypeScript
import { cloudData } from '@kit.ArkData';
```

## eventId

```TypeScript
eventId: string
```

事件标识。当前仅支持"cloud_data_change"，表示云数据变更，传入其他值视为无效参数。

**Type:** string

**Since:** 11

**System capability:** SystemCapability.DistributedDataManager.CloudSync.Config

**System API:** This is a system API.

## extraData

```TypeScript
extraData: string
```

透传数据，extraData为JSON结构的字符串，其中必须包括"data"字段，"data"中是通知变更所需要的信息，包含账号、应用包名、数据库名、数据库类型和数据库表名，所有字段均不能为空。

**Type:** string

**Since:** 11

**System capability:** SystemCapability.DistributedDataManager.CloudSync.Config

**System API:** This is a system API.

