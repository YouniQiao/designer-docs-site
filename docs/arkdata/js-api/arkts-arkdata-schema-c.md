# Schema

Defines the schema of a KV store. You can create a **Schema** object and pass it in [Options](arkts-arkdata-options-i.md#options) when creating or opening a KV store.

**Since:** 9

**System capability:** SystemCapability.DistributedDataManager.KVStore.DistributedKVStore

## Modules to Import

```TypeScript
import { distributedKVStore } from '@ohos.data.distributedKVStore';
```

## constructor

```TypeScript
constructor()
```

Defines a constructor used to create a **Schema** instance.

**Since:** 9

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.DistributedDataManager.KVStore.DistributedKVStore

**Example**

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

## indexes

```TypeScript
set indexes(indexes: Array<string>)
```

Set the string array of json.

**Type:** Array<string>

**Since:** 9

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.DistributedDataManager.KVStore.DistributedKVStore

## mode

```TypeScript
set mode(mode: number)
```

Set the mode of schema.

**Type:** number

**Since:** 9

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.DistributedDataManager.KVStore.DistributedKVStore

## root

```TypeScript
set root(root: FieldNode)
```

Set the root json object.

**Type:** FieldNode

**Since:** 9

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.DistributedDataManager.KVStore.DistributedKVStore

## skip

```TypeScript
set skip(skip: number)
```

Set the skip size of schema.

**Type:** number

**Since:** 9

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.DistributedDataManager.KVStore.DistributedKVStore

