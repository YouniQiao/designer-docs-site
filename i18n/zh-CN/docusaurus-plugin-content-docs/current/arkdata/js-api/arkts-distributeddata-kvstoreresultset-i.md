# KvStoreResultSet

Provides APIs to obtain the KV store result sets, and query and move the data read position. Before calling any method in **KvStoreResultSet**, you must use [getKVStore]distributedData.KVManager.getKVStore<T extends KVStore>(storeId: string, options: Options, callback: AsyncCallback<T>) to obtain a **KVStore** object.

**起始版本：** 7

**废弃版本：** 9

**替代接口：** ohos.data.distributedKVStore.KVStoreResultSet

**系统能力：** SystemCapability.DistributedDataManager.KVStore.Core

## getCount

```TypeScript
getCount(): number
```

Obtains the total number of rows in the result set.

**起始版本：** 8

**废弃版本：** 9

**替代接口：** ohos.data.distributedKVStore.KVStoreResultSet#getCount

**系统能力：** SystemCapability.DistributedDataManager.KVStore.Core

**返回值：**

| 类型 | 说明 |
| --- | --- |
| number | Total number of rows obtained. |

**示例：**

```TypeScript
let kvStore;
try {
    let resultSet;
    kvStore.getResultSet('batch_test_string_key').then((result) => {
        console.log('getResultSet succeed.');
        resultSet = result;
    }).catch((err) => {
        console.log('getResultSet failed: ' + err);
    });
    const count = resultSet.getCount();
    console.log("getCount succeed:" + count);
} catch (e) {
    console.log("getCount failed: " + e);
}

```

## getEntry

```TypeScript
getEntry(): Entry
```

Obtains the KV pair from the current position.

**起始版本：** 8

**废弃版本：** 9

**替代接口：** ohos.data.distributedKVStore.KVStoreResultSet#getEntry

**系统能力：** SystemCapability.DistributedDataManager.KVStore.Core

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Entry | KV pair obtained. |

**示例：**

```TypeScript
let kvStore;
try {
    let resultSet;
    kvStore.getResultSet('batch_test_string_key').then((result) => {
        console.log('getResultSet succeed.');
        resultSet = result;
    }).catch((err) => {
        console.log('getResultSet failed: ' + err);
    });
    const entry  = resultSet.getEntry();
    console.log("getEntry succeed:" + JSON.stringify(entry));
} catch (e) {
    console.log("getEntry failed: " + e);
}

```

## getPosition

```TypeScript
getPosition(): number
```

Obtains the current data read position (position from which data is read) in the result set.

**起始版本：** 8

**废弃版本：** 9

**替代接口：** ohos.data.distributedKVStore.KVStoreResultSet#getPosition

**系统能力：** SystemCapability.DistributedDataManager.KVStore.Core

**返回值：**

| 类型 | 说明 |
| --- | --- |
| number | Current data read position obtained. |

**示例：**

```TypeScript
let kvStore;
try {
    let resultSet;
    kvStore.getResultSet('batch_test_string_key').then((result) => {
        console.log('getResultSet succeeded.');
        resultSet = result;
    }).catch((err) => {
        console.log('getResultSet failed: ' + err);
    });
    const position = resultSet.getPosition();
    console.log("getPosition succeed:" + position);
} catch (e) {
    console.log("getPosition failed: " + e);
}

```

## isAfterLast

```TypeScript
isAfterLast(): boolean
```

Checks whether the data read position is after the last row.

**起始版本：** 8

**废弃版本：** 9

**替代接口：** ohos.data.distributedKVStore.KVStoreResultSet#isAfterLast

**系统能力：** SystemCapability.DistributedDataManager.KVStore.Core

**返回值：**

| 类型 | 说明 |
| --- | --- |
| boolean | Returns true if the data read position is after the last row; returns false otherwise. |

**示例：**

```TypeScript
let kvStore;
try {
    let resultSet;
    kvStore.getResultSet('batch_test_string_key').then((result) => {
        console.log('getResultSet succeed.');
        resultSet = result;
    }).catch((err) => {
        console.log('getResultSet failed: ' + err);
    });
    const isafterlast = resultSet.isAfterLast();
    console.log("Check isAfterLast succeed:" + isafterlast);
} catch (e) {
    console.log("Check isAfterLast failed: " + e);
}

```

## isBeforeFirst

```TypeScript
isBeforeFirst(): boolean
```

Checks whether the data read position is before the first row.

**起始版本：** 8

**废弃版本：** 9

**替代接口：** ohos.data.distributedKVStore.KVStoreResultSet#isBeforeFirst

**系统能力：** SystemCapability.DistributedDataManager.KVStore.Core

**返回值：**

| 类型 | 说明 |
| --- | --- |
| boolean | Returns true if the data read position is before the first row; returns false otherwise. |

**示例：**

```TypeScript
let kvStore;
try {
    let resultSet;
    kvStore.getResultSet('batch_test_string_key').then((result) => {
        console.log('getResultSet succeed.');
        resultSet = result;
    }).catch((err) => {
        console.log('getResultSet failed: ' + err);
    });
    const isbeforefirst = resultSet.isBeforeFirst();
    console.log("Check isBeforeFirst succeed: " + isbeforefirst);
} catch (e) {
    console.log("Check isBeforeFirst failed: " + e);
}

```

## isFirst

```TypeScript
isFirst(): boolean
```

Checks whether the data read position is the first row.

**起始版本：** 8

**废弃版本：** 9

**替代接口：** ohos.data.distributedKVStore.KVStoreResultSet#isFirst

**系统能力：** SystemCapability.DistributedDataManager.KVStore.Core

**返回值：**

| 类型 | 说明 |
| --- | --- |
| boolean | Returns true if the first row is being read; returns false otherwise. |

**示例：**

```TypeScript
let kvStore;
try {
    let resultSet;
    kvStore.getResultSet('batch_test_string_key').then((result) => {
        console.log('getResultSet succeed.');
        resultSet = result;
    }).catch((err) => {
        console.log('getResultSet failed: ' + err);
    });
    const isfirst = resultSet.isFirst();
    console.log("Check isFirst succeed:" + isfirst);
} catch (e) {
    console.log("Check isFirst failed: " + e);
}

```

## isLast

```TypeScript
isLast(): boolean
```

Checks whether the data read position is the last row.

**起始版本：** 8

**废弃版本：** 9

**替代接口：** ohos.data.distributedKVStore.KVStoreResultSet#isLast

**系统能力：** SystemCapability.DistributedDataManager.KVStore.Core

**返回值：**

| 类型 | 说明 |
| --- | --- |
| boolean | Returns true if the last row is being read; returns false otherwise. |

**示例：**

```TypeScript
let kvStore;
try {
    let resultSet;
    kvStore.getResultSet('batch_test_string_key').then((result) => {
        console.log('getResultSet succeed.');
        resultSet = result;
    }).catch((err) => {
        console.log('getResultSet failed: ' + err);
    });
    const islast = resultSet.isLast();
    console.log("Check isLast succeed: " + islast);
} catch (e) {
    console.log("Check isLast failed: " + e);
}

```

## move

```TypeScript
move(offset: number): boolean
```

Moves the data read position with the specified offset from the current position.

**起始版本：** 8

**废弃版本：** 9

**替代接口：** ohos.data.distributedKVStore.KVStoreResultSet#move

**系统能力：** SystemCapability.DistributedDataManager.KVStore.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| offset | number | 是 | Offset to move the data read position. A negative value means to move backward, and a  positive value means to move forward. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| boolean | Returns true if the operation is successful; returns false otherwise. |

**示例：**

```TypeScript
let kvStore;
try {
    let resultSet;
    kvStore.getResultSet('batch_test_string_key').then((result) => {
        console.log('getResultSet succeed.');
        resultSet = result;
    }).catch((err) => {
        console.log('getResultSet failed: ' + err);
    });
    const moved5 = resultSet.move(1);
    console.log("move succeed:" + moved5);
} catch (e) {
    console.log("move failed: " + e);
}

```

## moveToFirst

```TypeScript
moveToFirst(): boolean
```

Moves the data read position to the first row. If the result set is empty, **false** will be returned.

**起始版本：** 8

**废弃版本：** 9

**替代接口：** ohos.data.distributedKVStore.KVStoreResultSet#moveToFirst

**系统能力：** SystemCapability.DistributedDataManager.KVStore.Core

**返回值：**

| 类型 | 说明 |
| --- | --- |
| boolean | Returns true if the operation is successful; returns false otherwise. |

**示例：**

```TypeScript
let kvStore;
try {
    let resultSet;
    kvStore.getResultSet('batch_test_string_key').then((result) => {
        console.log('getResultSet succeed.');
        resultSet = result;
    }).catch((err) => {
        console.log('getResultSet failed: ' + err);
    });
    const moved1 = resultSet.moveToFirst();
    console.log("moveToFirst succeed: " + moved1);
} catch (e) {
    console.log("moveToFirst failed " + e);
}

```

## moveToLast

```TypeScript
moveToLast(): boolean
```

Moves the data read position to the last row. If the result set is empty, **false** will be returned.

**起始版本：** 8

**废弃版本：** 9

**替代接口：** ohos.data.distributedKVStore.KVStoreResultSet#moveToLast

**系统能力：** SystemCapability.DistributedDataManager.KVStore.Core

**返回值：**

| 类型 | 说明 |
| --- | --- |
| boolean | Returns true if the operation is successful; returns false otherwise. |

**示例：**

```TypeScript
let kvStore;
try {
    let resultSet;
    kvStore.getResultSet('batch_test_string_key').then((result) => {
        console.log('getResultSet succeed.');
        resultSet = result;
    }).catch((err) => {
        console.log('getResultSet failed: ' + err);
    });
    const moved2 = resultSet.moveToLast();
    console.log("moveToLast succeed:" + moved2);
} catch (e) {
    console.log("moveToLast failed: " + e);
}

```

## moveToNext

```TypeScript
moveToNext(): boolean
```

Moves the data read position to the next row. If the result set is empty, **false** will be returned.

**起始版本：** 8

**废弃版本：** 9

**替代接口：** ohos.data.distributedKVStore.KVStoreResultSet#moveToNext

**系统能力：** SystemCapability.DistributedDataManager.KVStore.Core

**返回值：**

| 类型 | 说明 |
| --- | --- |
| boolean | Returns true if the operation is successful; returns false otherwise. |

**示例：**

```TypeScript
let kvStore;
try {
    let resultSet;
    kvStore.getResultSet('batch_test_string_key').then((result) => {
        console.log('getResultSet succeed.');
        resultSet = result;
    }).catch((err) => {
        console.log('getResultSet failed: ' + err);
    });
    const moved3 = resultSet.moveToNext();
    console.log("moveToNext succeed: " + moved3);
} catch (e) {
    console.log("moveToNext failed: " + e);
}

```

## moveToPosition

```TypeScript
moveToPosition(position: number): boolean
```

Moves the data read position from 0 to an absolute position.

**起始版本：** 8

**废弃版本：** 9

**替代接口：** ohos.data.distributedKVStore.KVStoreResultSet#moveToPosition

**系统能力：** SystemCapability.DistributedDataManager.KVStore.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| position | number | 是 | Absolute position to move to. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| boolean | Returns true if the operation is successful; returns false otherwise. |

**示例：**

```TypeScript
let kvStore;
try {
    let resultSet;
    kvStore.getResultSet('batch_test_string_key').then((result) => {
        console.log('getResultSet succeed.');
        resultSet = result;
    }).catch((err) => {
        console.log('getResultSet failed: ' + err);
    });
    const moved6 = resultSet.moveToPosition(1);
    console.log("moveToPosition succeed: " + moved6);
} catch (e) {
    console.log("moveToPosition failed: " + e);
}

```

## moveToPrevious

```TypeScript
moveToPrevious(): boolean
```

Moves the data read position to the previous row. If the result set is empty, **false** will be returned.

**起始版本：** 8

**废弃版本：** 9

**替代接口：** ohos.data.distributedKVStore.KVStoreResultSet#moveToPrevious

**系统能力：** SystemCapability.DistributedDataManager.KVStore.Core

**返回值：**

| 类型 | 说明 |
| --- | --- |
| boolean | Returns true if the operation is successful; returns false otherwise. |

**示例：**

```TypeScript
let kvStore;
try {
    let resultSet;
    kvStore.getResultSet('batch_test_string_key').then((result) => {
        console.log('getResultSet succeed.');
        resultSet = result;
    }).catch((err) => {
        console.log('getResultSet failed: ' + err);
    });
    const moved4 = resultSet.moveToPrevious();
    console.log("moveToPrevious succeed:" + moved4);
} catch (e) {
    console.log("moveToPrevious failed: " + e);
}

```

