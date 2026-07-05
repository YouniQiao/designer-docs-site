# CloudDB

提供云数据库操作接口的类。

**Since:** 11

**System capability:** SystemCapability.DistributedDataManager.CloudSync.Server

**System API:** This is a system API.

## Modules to Import

```TypeScript
import { cloudExtension } from '@kit.ArkData';
```

## delete

```TypeScript
delete(
      table: string,
      extensions: Array<Record<string, CloudType>>
    ): Promise<Array<Result<Record<string, CloudType>>>>
```

删除云数据库表中的指定数据。使用Promise异步回调。

**Since:** 11

**System capability:** SystemCapability.DistributedDataManager.CloudSync.Server

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| table | string | Yes | 表名。 |
| extensions | Array&lt;Record&lt;string, CloudType>> | Yes | 表示当前数据的扩展信息。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;Array&lt;Result&lt;Record&lt;string, CloudType>>>> | Promise对象，返回被删除的数据和删除结果。 |

**Example**

```TypeScript
class MyCloudDB implements cloudExtension.CloudDB {
  // ...
  async delete(table: string, extensions: Array<Record<string, cloudExtension.CloudType>>): Promise<Array<cloudExtension.Result<Record<string, cloudExtension.CloudType>>>> {
    console.info(`delete, table: ${table}`);
    let deleteRes: Array<cloudExtension.Result<Record<string, cloudExtension.CloudType>>> = [];
    // ...
    // Returns the result of deleting data.
    return deleteRes;
  }
  // ...
}

```

## generateId

```TypeScript
generateId(count: int): Promise<Result<Array<string>>>
```

为插入的云数据生成具有唯一性的ID。使用Promise异步回调。

**Since:** 11

**System capability:** SystemCapability.DistributedDataManager.CloudSync.Server

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| count | int | Yes | 表示要生成ID的数量。取值范围大于等于1。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;Result&lt;Array&lt;string>>> | Promise对象，以Result结构将生成的ID以数组形式返回。 |

**Example**

```TypeScript
class MyCloudDB implements cloudExtension.CloudDB {
  async generateId(count: number): Promise<cloudExtension.Result<Array<string>>> {
    console.info(`generate id, count: ${count}`);
    let result = new Array<string>();
    // ...
    return {
      code: cloudExtension.ErrorCode.SUCCESS,
      description: 'generateId succeeded',
      value: result
    };
  }
  // ...
}

```

## heartbeat

```TypeScript
heartbeat(lockId: int): Promise<Result<LockInfo>>
```

延长数据库的加锁时效。使用Promise异步回调。

**Since:** 11

**System capability:** SystemCapability.DistributedDataManager.CloudSync.Server

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| lockId | int | Yes | 表示需要延时的锁ID，取值为lock方法返回的LockInfo中的lockId。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;Result&lt;LockInfo>> | Promise对象，返回锁的信息，包含加锁时长和锁的ID。 |

**Example**

```TypeScript
let test_lockId: number = 1;
let test_time: number = 10;
class MyCloudDB implements cloudExtension.CloudDB {
  // ...
  async heartbeat(lockId: number): Promise<cloudExtension.Result<cloudExtension.LockInfo>> {
    console.info(`heartbeat lock`);
    // ...
    // Return the heartbeat check result.
    return {
      code: cloudExtension.ErrorCode.SUCCESS,
      description: 'heartbeat succeeded',
      value: {
        interval: test_time,
        lockId: test_lockId
      }
    };
  }
  // ...
}

```

## insert

```TypeScript
insert(
      table: string,
      values: Array<Record<string, CloudType>>,
      extensions: Array<Record<string, CloudType>>
    ): Promise<Array<Result<Record<string, CloudType>>>>
```

将数据插入云数据库表中。使用Promise异步回调。

**Since:** 11

**System capability:** SystemCapability.DistributedDataManager.CloudSync.Server

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| table | string | Yes | 表名。 |
| values | Array&lt;Record&lt;string, CloudType>> | Yes | 表示要插入的数据。 |
| extensions | Array&lt;Record&lt;string, CloudType>> | Yes | 表示当前数据的扩展信息。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;Array&lt;Result&lt;Record&lt;string, CloudType>>>> | Promise对象，返回插入的数据和插入结果。 |

**Example**

```TypeScript
class MyCloudDB implements cloudExtension.CloudDB {
  // ...
  async insert(table: string, values: Array<Record<string, cloudExtension.CloudType>>, extensions: Array<Record<string, cloudExtension.CloudType>>): Promise<Array<cloudExtension.Result<Record<string, cloudExtension.CloudType>>>> {
    console.info(`insert, table: ${table}`);
    let insertRes: Array<cloudExtension.Result<Record<string, cloudExtension.CloudType>>> = [];
    // ...
    // Return the operation result.
    return insertRes;
  }
  // ...
}

```

## lock

```TypeScript
lock(): Promise<Result<LockInfo>>
```

为云数据库加锁。使用Promise异步回调。

**Since:** 11

**System capability:** SystemCapability.DistributedDataManager.CloudSync.Server

**System API:** This is a system API.

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;Result&lt;LockInfo>> | Promise对象，返回加锁的信息，包含加锁时长和锁的ID。 |

**Example**

```TypeScript
let test_time: number = 10;
let test_lockId: number = 1;
class MyCloudDB implements cloudExtension.CloudDB {
  // ...
  async lock(): Promise<cloudExtension.Result<cloudExtension.LockInfo>> {
    console.info(`DB lock`);
    // ...
    // Returns the result of locking data.
    return {
      code: cloudExtension.ErrorCode.SUCCESS,
      description: 'lock succeeded',
      value: {
        interval: test_time,
        lockId: test_lockId
      }
    };
  }
  // ...
}

```

## query

```TypeScript
query(table: string, fields: Array<string>, queryCount: int, queryCursor: string): Promise<Result<CloudData>>
```

在云数据库表中查询数据。使用Promise异步回调。

**Since:** 11

**System capability:** SystemCapability.DistributedDataManager.CloudSync.Server

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| table | string | Yes | 表名。 |
| fields | Array&lt;string> | Yes | 表示要查询的字段名数组。 |
| queryCount | int | Yes | 表示要查询的数据记录条数。取值范围大于等于1。 |
| queryCursor | string | Yes | 表示要查询的游标。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;Result&lt;CloudData>> | Promise对象，返回被查询的数据和查询结果。 |

**Example**

```TypeScript
class MyCloudDB implements cloudExtension.CloudDB {
  // ...
  async query(table: string, fields: Array<string>, queryCount: number, queryCursor: string): Promise<cloudExtension.Result<cloudExtension.CloudData>> {
    console.info(`query, table: ${table}`);
    // ...
    // Return the result of querying data.
    return {
      code: cloudExtension.ErrorCode.SUCCESS,
      description: 'query succeeded',
      value: {
        nextCursor: "test_nextCursor",
        hasMore: true,
        values: []
      }
    };
  }
  // ...
}

```

## unlock

```TypeScript
unlock(lockId: int): Promise<Result<boolean>>
```

为云数据库解锁。使用Promise异步回调。

**Since:** 11

**System capability:** SystemCapability.DistributedDataManager.CloudSync.Server

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| lockId | int | Yes | 表示锁的ID，取值为lock方法返回的LockInfo中的lockId。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;Result&lt;boolean>> | Promise对象，返回解锁结果，true表示解锁成功，false表示解锁失败。 |

**Example**

```TypeScript
class MyCloudDB implements cloudExtension.CloudDB {
    // ...
  async unlock(lockId: number): Promise<cloudExtension.Result<boolean>> {
    console.info(`unlock`);
    // ...
    // Returns the result of unlocking data.
    return {
      code: cloudExtension.ErrorCode.SUCCESS,
      description: 'unlock succeeded',
      value: false
    };
  }
  // ...
}

```

## update

```TypeScript
update(
      table: string,
      values: Array<Record<string, CloudType>>,
      extensions: Array<Record<string, CloudType>>
    ): Promise<Array<Result<Record<string, CloudType>>>>
```

通过该接口更新云上的数据。使用Promise异步回调。

**Since:** 11

**System capability:** SystemCapability.DistributedDataManager.CloudSync.Server

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| table | string | Yes | 表名。 |
| values | Array&lt;Record&lt;string, CloudType>> | Yes | 表示要更新的数据。 |
| extensions | Array&lt;Record&lt;string, CloudType>> | Yes | 表示当前数据的扩展信息。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;Array&lt;Result&lt;Record&lt;string, CloudType>>>> | Promise对象，返回更新的数据和更新结果。 |

**Example**

```TypeScript
class MyCloudDB implements cloudExtension.CloudDB {
  // ...
  async update(table: string, values: Array<Record<string, cloudExtension.CloudType>>, extensions: Array<Record<string, cloudExtension.CloudType>>): Promise<Array<cloudExtension.Result<Record<string, cloudExtension.CloudType>>>> {
    console.info(`update, table: ${table}`);
    let updateRes: Array<cloudExtension.Result<Record<string, cloudExtension.CloudType>>> = [];
    // ...
    // Return the data update result.
    return updateRes;
  }
  // ...
}

```

