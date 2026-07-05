# ChangeNotification

Defines the content of a data change notification, including inserted data, updated data, deleted data, and device ID.

**起始版本：** 9

**系统能力：** SystemCapability.DistributedDataManager.KVStore.Core

## 导入模块

```TypeScript
import { distributedKVStore } from '@kit.ArkData';
```

## insertEntries

```TypeScript
insertEntries: Entry[]
```

Data inserted.

**类型：** Entry[]

**起始版本：** 9

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.DistributedDataManager.KVStore.Core

## deleteEntries

```TypeScript
deleteEntries: Entry[]
```

Data deleted.

**类型：** Entry[]

**起始版本：** 9

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.DistributedDataManager.KVStore.Core

## deviceId

```TypeScript
deviceId: string
```

UUID of the device.

**类型：** string

**起始版本：** 9

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.DistributedDataManager.KVStore.Core

## updateEntries

```TypeScript
updateEntries: Entry[]
```

Data updated.

**类型：** Entry[]

**起始版本：** 9

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.DistributedDataManager.KVStore.Core

