# Schema

Defines the schema of a KV store. You can create a **Schema** object and pass it in [Options]distributedKVStore.Options when creating or opening a KV store.

**起始版本：** 9

**系统能力：** SystemCapability.DistributedDataManager.KVStore.DistributedKVStore

## 导入模块

```TypeScript
import { distributedKVStore } from '@kit.ArkData';
```

## constructor

```TypeScript
constructor()
```

Defines a constructor used to create a **Schema** instance.

**起始版本：** 9

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.DistributedDataManager.KVStore.DistributedKVStore

**示例：**

```TypeScript

let child1 = new distributedKVStore.FieldNode('id');
child1.type = distributedKVStore.ValueType.INTEGER;
child1.nullable = false;
child1.default = '1';
let child2 = new distributedKVStore.FieldNode('name');
child2.type = distributedKVStore.ValueType.STRING;
child2.nullable = false;
child2.default = 'zhangsan';

let schema = new distributedKVStore.Schema();
schema.root.appendChild(child1);
schema.root.appendChild(child2);
schema.indexes = ['$.id', '$.name'];
schema.mode = 1;
schema.skip = 0;

```

## mode

```TypeScript
get mode(): int
```

Get the mode of schema.

**类型：** int

**起始版本：** 9

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.DistributedDataManager.KVStore.DistributedKVStore

```TypeScript
set mode(mode: int)
```

Set the mode of schema.

**类型：** int

**起始版本：** 9

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.DistributedDataManager.KVStore.DistributedKVStore

## indexes

```TypeScript
get indexes(): Array<string>
```

Get the string array of json.

**类型：** Array<string>

**起始版本：** 9

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.DistributedDataManager.KVStore.DistributedKVStore

```TypeScript
set indexes(indexes: Array<string>)
```

Set the string array of json.

**类型：** Array<string>

**起始版本：** 9

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.DistributedDataManager.KVStore.DistributedKVStore

## root

```TypeScript
get root(): FieldNode
```

Get the root json object.

**类型：** FieldNode

**起始版本：** 9

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.DistributedDataManager.KVStore.DistributedKVStore

```TypeScript
set root(root: FieldNode)
```

Set the root json object.

**类型：** FieldNode

**起始版本：** 9

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.DistributedDataManager.KVStore.DistributedKVStore

## skip

```TypeScript
get skip(): int
```

Get the skip size of schema.

**类型：** int

**起始版本：** 9

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.DistributedDataManager.KVStore.DistributedKVStore

```TypeScript
set skip(skip: int)
```

Set the skip size of schema.

**类型：** int

**起始版本：** 9

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.DistributedDataManager.KVStore.DistributedKVStore

