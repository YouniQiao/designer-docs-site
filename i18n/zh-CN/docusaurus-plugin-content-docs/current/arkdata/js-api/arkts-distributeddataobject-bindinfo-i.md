# BindInfo

Represents the information about the joint asset in the RDB store to bind. Currently, only the RDB stores are supported.

**起始版本：** 11

**系统能力：** SystemCapability.DistributedDataManager.DataObject.DistributedObject

## 导入模块

```TypeScript
import { distributedDataObject } from '@kit.ArkData';
```

## field

```TypeScript
field: string
```

Column in which the target asset is located in the RDB store.

**类型：** string

**起始版本：** 11

**系统能力：** SystemCapability.DistributedDataManager.DataObject.DistributedObject

## assetName

```TypeScript
assetName: string
```

Name of the target asset in the RDB store.

**类型：** string

**起始版本：** 11

**系统能力：** SystemCapability.DistributedDataManager.DataObject.DistributedObject

## storeName

```TypeScript
storeName: string
```

RDB store to which the target asset (asset to bind) belongs.

**类型：** string

**起始版本：** 11

**系统能力：** SystemCapability.DistributedDataManager.DataObject.DistributedObject

## primaryKey

```TypeScript
primaryKey: commonType.ValuesBucket
```

Primary key of the target asset in the RDB store.

**类型：** commonType.ValuesBucket

**起始版本：** 11

**系统能力：** SystemCapability.DistributedDataManager.DataObject.DistributedObject

## tableName

```TypeScript
tableName: string
```

Table to which the target asset is located in the RDB store.

**类型：** string

**起始版本：** 11

**系统能力：** SystemCapability.DistributedDataManager.DataObject.DistributedObject

