# ChangeInfo

Defines a struct for the details about the device-cloud sync process.

**起始版本：** 10

**系统能力：** SystemCapability.DistributedDataManager.RelationalStore.Core

## 导入模块

```TypeScript
import { relationalStore } from '@kit.ArkData';
```

## deleted

```TypeScript
deleted: Array<string> | Array<long>
```

Location where data is deleted. If the primary key of the table is of the string type, it is the value of the primary key. Otherwise, it is the row number of the deleted data.

**类型：** Array<string> | Array<long>

**起始版本：** 10

**系统能力：** SystemCapability.DistributedDataManager.RelationalStore.Core

## inserted

```TypeScript
inserted: Array<string> | Array<long>
```

Location where data is inserted. If the primary key of the table is of the string type, it is the value of the primary key. Otherwise, it is the row number of the inserted data.

**类型：** Array<string> | Array<long>

**起始版本：** 10

**系统能力：** SystemCapability.DistributedDataManager.RelationalStore.Core

## type

```TypeScript
type: ChangeType
```

Type of the data changed, which can be data or asset.

**类型：** ChangeType

**起始版本：** 10

**系统能力：** SystemCapability.DistributedDataManager.RelationalStore.Core

## updated

```TypeScript
updated: Array<string> | Array<long>
```

Location where data is updated. If the primary key of the table is of the string type, it is the value of the primary key. Otherwise, it is the row number of the updated data.

**类型：** Array<string> | Array<long>

**起始版本：** 10

**系统能力：** SystemCapability.DistributedDataManager.RelationalStore.Core

## table

```TypeScript
table: string
```

Name of the table with data changes.

**类型：** string

**起始版本：** 10

**系统能力：** SystemCapability.DistributedDataManager.RelationalStore.Core

