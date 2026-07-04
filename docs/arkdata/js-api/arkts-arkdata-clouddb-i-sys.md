# CloudDB (System API)

Provides APIs for performing cloud database operations.

**Since:** 11

**System capability:** SystemCapability.DistributedDataManager.CloudSync.Server

**System API:** This is a system API.

## Modules to Import

```TypeScript
import { cloudExtension } from '@ohos.data.cloudExtension';
```

## delete

```TypeScript
delete(
      table: string,
      extensions: Array<Record<string, CloudType>>
    ): Promise<Array<Result<Record<string, CloudType>>>>
```

Deletes data from a cloud database table. This API uses a promise to return the result.

**Since:** 11

**System capability:** SystemCapability.DistributedDataManager.CloudSync.Server

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| table | string | Yes | Table name. |
| extensions | Array&lt;Record&lt;string, CloudType&gt;&gt; | Yes | Extended information about the current data. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;Array&lt;Result&lt;Record&lt;string, CloudType&gt;&gt;&gt;&gt; | Promise used to return the deleted data andoperation result. |

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
generateId(count: number): Promise<Result<Array<string>>>
```

Generates IDs for the data records inserted to the cloud database. The IDs are unique. This API uses a promise to return the result.

**Since:** 11

**System capability:** SystemCapability.DistributedDataManager.CloudSync.Server

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| count | number | Yes | Number of IDs to generate. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;Result&lt;Array&lt;string&gt;&gt;&gt; | Promise used to return the generated IDs in Result. |

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
heartbeat(lockId: number): Promise<Result<LockInfo>>
```

Extends the lock period of the database. This API uses a promise to return the result.

**Since:** 11

**System capability:** SystemCapability.DistributedDataManager.CloudSync.Server

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| lockId | number | Yes | Lock ID. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;Result&lt;LockInfo&gt;&gt; | Promise used to return the lock ID and lock period. |

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

Inserts data to a cloud database table. This API uses a promise to return the result.

**Since:** 11

**System capability:** SystemCapability.DistributedDataManager.CloudSync.Server

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| table | string | Yes | Table name. |
| values | Array&lt;Record&lt;string, CloudType&gt;&gt; | Yes | Data to insert. |
| extensions | Array&lt;Record&lt;string, CloudType&gt;&gt; | Yes | Extended information about the current data. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;Array&lt;Result&lt;Record&lt;string, CloudType&gt;&gt;&gt;&gt; | Promise used to return the inserted data andoperation result. |

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

Locks this cloud database. This API uses a promise to return the result.

**Since:** 11

**System capability:** SystemCapability.DistributedDataManager.CloudSync.Server

**System API:** This is a system API.

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;Result&lt;LockInfo&gt;&gt; | Promise used to return the lock ID and lock period. |

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
query(table: string, fields: Array<string>, queryCount: number, queryCursor: string): Promise<Result<CloudData>>
```

Queries data in a cloud database table. This API uses a promise to return the result.

**Since:** 11

**System capability:** SystemCapability.DistributedDataManager.CloudSync.Server

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| table | string | Yes | Table name. |
| fields | Array&lt;string&gt; | Yes | Name of the fields to query. |
| queryCount | number | Yes | Number of data records to query. |
| queryCursor | string | Yes | Cursor for the query. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;Result&lt;CloudData&gt;&gt; | Promise used to return the data and operation result. |

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
unlock(lockId: number): Promise<Result<boolean>>
```

Unlocks a cloud database. This API uses a promise to return the result.

**Since:** 11

**System capability:** SystemCapability.DistributedDataManager.CloudSync.Server

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| lockId | number | Yes | Lock ID to release. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;Result&lt;boolean&gt;&gt; | Promise used to return the result.The value true means the operation is successful; the value false means the opposite. |

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

Updates data in the cloud. This API uses a promise to return the result.

**Since:** 11

**System capability:** SystemCapability.DistributedDataManager.CloudSync.Server

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| table | string | Yes | Table name. |
| values | Array&lt;Record&lt;string, CloudType&gt;&gt; | Yes | Data to insert. |
| extensions | Array&lt;Record&lt;string, CloudType&gt;&gt; | Yes | Extended information about the current data. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;Array&lt;Result&lt;Record&lt;string, CloudType&gt;&gt;&gt;&gt; | Promise used to return the update result andupdated data. |

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

