# DataProxyChangeInfo

Defines a struct for notifying subscribers of the shared configuration changes, including data change type, URI, and content.

**起始版本：** 20

**系统能力：** SystemCapability.DistributedDataManager.DataShare.Consumer

## 导入模块

```TypeScript
import { dataShare } from '@kit.ArkData';
```

## values

```TypeScript
values?: ValueType[]
```

Changed data of the multi-value type. If the changed data is not multi-value type, the **values** is undefined.

**类型：** ValueType[]

**起始版本：** 26.0.0

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.DistributedDataManager.DataShare.Consumer

## type

```TypeScript
type: ChangeType
```

Data change type.

**类型：** ChangeType

**起始版本：** 20

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.DistributedDataManager.DataShare.Consumer

## value

```TypeScript
value: ValueType
```

Changed data.

**类型：** ValueType

**起始版本：** 20

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.DistributedDataManager.DataShare.Consumer

## uri

```TypeScript
uri: string
```

URI to change.

**类型：** string

**起始版本：** 20

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.DistributedDataManager.DataShare.Consumer

