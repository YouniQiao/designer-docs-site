# FieldNode

Represents a **Schema** instance, which provides the methods for defining the values stored in a KV store.

**起始版本：** 9

**系统能力：** SystemCapability.DistributedDataManager.KVStore.DistributedKVStore

## 导入模块

```TypeScript
import { distributedKVStore } from '@kit.ArkData';
```

## appendChild

```TypeScript
appendChild(child: FieldNode): boolean
```

Appends a child node to this **FieldNode**.

**起始版本：** 9

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.DistributedDataManager.KVStore.DistributedKVStore

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| child | FieldNode | 是 | Child node to append. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| boolean | Returns true if the operation is successful; returns false otherwise. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error.Possible causes:1.Mandatory parameters are left unspecified;  2.Incorrect parameters types. |

**示例：**

```TypeScript

try {
  let node: distributedKVStore.FieldNode | null = new distributedKVStore.FieldNode('root');
  let child1: distributedKVStore.FieldNode | null = new distributedKVStore.FieldNode('child1');
  let child2: distributedKVStore.FieldNode | null = new distributedKVStore.FieldNode('child2');
  let child3: distributedKVStore.FieldNode | null = new distributedKVStore.FieldNode('child3');
  node.appendChild(child1);
  node.appendChild(child2);
  node.appendChild(child3);
  console.info('appendNode ' + JSON.stringify(node));
  child1 = null;
  child2 = null;
  child3 = null;
  node = null;
} catch (err) {
  let error = err as BusinessError;
  console.error(`Failed to append child. Code: ${error.code}, message: ${error.message}`);
}

```

## constructor

```TypeScript
constructor(name: string)
```

Defines a constructor used to create a **FieldNode** instance with a string field.

**起始版本：** 9

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.DistributedDataManager.KVStore.DistributedKVStore

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| name | string | 是 | Value of FieldNode, with a maximum of 64 characters. This parameter cannot be left blank. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error.Possible causes:1.Mandatory parameters are left unspecified;  2.Parameter verification failed. |

## default

```TypeScript
default: string
```

Indicates the default value of field node.

**类型：** string

**起始版本：** 9

**系统能力：** SystemCapability.DistributedDataManager.KVStore.DistributedKVStore

## nullable

```TypeScript
get nullable(): boolean
```

Get the nullable of database field.

**类型：** boolean

**起始版本：** 9

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.DistributedDataManager.KVStore.DistributedKVStore

```TypeScript
set nullable(isnullable: boolean)
```

Set the nullable of database field.

**类型：** boolean

**起始版本：** 9

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.DistributedDataManager.KVStore.DistributedKVStore

## defaultValue

```TypeScript
get defaultValue(): string
```

Get the default value of field node.

**类型：** string

**起始版本：** 23

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.DistributedDataManager.KVStore.DistributedKVStore

```TypeScript
set defaultValue(defaultValue: string)
```

Set the default value of field node.

**类型：** string

**起始版本：** 23

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.DistributedDataManager.KVStore.DistributedKVStore

## type

```TypeScript
get type(): int
```

Get the type of value.

**类型：** int

**起始版本：** 9

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.DistributedDataManager.KVStore.DistributedKVStore

```TypeScript
set type(type: int)
```

Set the type of value.

**类型：** int

**起始版本：** 9

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.DistributedDataManager.KVStore.DistributedKVStore

