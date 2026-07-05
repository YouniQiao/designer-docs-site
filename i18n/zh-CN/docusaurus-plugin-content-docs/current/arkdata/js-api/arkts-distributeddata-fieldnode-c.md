# FieldNode

Represents a **Schema** instance, which provides the APIs for defining the values stored in a KV store.

**起始版本：** 8

**废弃版本：** 9

**替代接口：** ohos.data.distributedKVStore.FieldNode

**系统能力：** SystemCapability.DistributedDataManager.KVStore.DistributedKVStore

## appendChild

```TypeScript
appendChild(child: FieldNode): boolean
```

Appends a child node to this **FieldNode**.

**起始版本：** 8

**废弃版本：** 9

**替代接口：** ohos.data.distributedKVStore.FieldNode#appendChild

**系统能力：** SystemCapability.DistributedDataManager.KVStore.DistributedKVStore

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| child | FieldNode | 是 | Child node to append. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| boolean | Returns true if the operation is successful; returns false otherwise. |

**示例：**

```TypeScript
import ddm from '@ohos.data.distributedData';
try {
    let node = new ddm.FieldNode("root");
    let child1 = new ddm.FieldNode("child1");
    let child2 = new ddm.FieldNode("child2");
    let child3 = new ddm.FieldNode("child3");
    node.appendChild(child1);
    node.appendChild(child2);
    node.appendChild(child3);
    console.log("appendNode " + JSON.stringify(node));
    child1 = null;
    child2 = null;
    child3 = null;
    node = null;
} catch (e) {
    console.log("AppendChild " + e);
}

```

## constructor

```TypeScript
constructor(name: string)
```

A constructor used to create a **FieldNode** instance with a string field.

**起始版本：** 8

**废弃版本：** 9

**替代接口：** ohos.data.distributedKVStore.FieldNode#constructor

**系统能力：** SystemCapability.DistributedDataManager.KVStore.DistributedKVStore

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| name | string | 是 | Value of FieldNode. |

## default

```TypeScript
default: string
```

Default value of a **FieldNode**.

**类型：** string

**起始版本：** 8

**废弃版本：** 9

**替代接口：** ohos.data.distributedKVStore.FieldNode#default

**系统能力：** SystemCapability.DistributedDataManager.KVStore.DistributedKVStore

## nullable

```TypeScript
nullable: boolean
```

Whether the database field can be null.

**类型：** boolean

**起始版本：** 8

**废弃版本：** 9

**替代接口：** ohos.data.distributedKVStore.FieldNode#nullable

**系统能力：** SystemCapability.DistributedDataManager.KVStore.DistributedKVStore

## type

```TypeScript
type: number
```

Value of the data type corresponding to the specified node.

**类型：** number

**起始版本：** 8

**废弃版本：** 9

**替代接口：** ohos.data.distributedKVStore.FieldNode#type

**系统能力：** SystemCapability.DistributedDataManager.KVStore.DistributedKVStore

