# KvStoreResultSet

Provides APIs to obtain the KV store result sets, and query and move the data read position.Before calling any method in **KvStoreResultSet**, you must use [getKVStore](arkts-arkdata-distributeddata-kvmanager-i.md#getkvstore-2)to obtain a **KVStore** object.

**Since:** 7

**Deprecated since:** 9

**Substitutes:** KVStoreResultSet

<!--Device-distributedData-interface KvStoreResultSet--><!--Device-distributedData-interface KvStoreResultSet-End-->

**System capability:** SystemCapability.DistributedDataManager.KVStore.Core

## getCount

```TypeScript
getCount(): number
```

Obtains the total number of rows in the result set.

**Since:** 8

**Deprecated since:** 9

**Substitutes:** getCount

<!--Device-KvStoreResultSet-getCount(): number--><!--Device-KvStoreResultSet-getCount(): number-End-->

**System capability:** SystemCapability.DistributedDataManager.KVStore.Core

**Return value:**

| Type | Description |
| --- | --- |
| number | Total number of rows obtained. |

**Example**

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

**Since:** 8

**Deprecated since:** 9

**Substitutes:** getEntry

<!--Device-KvStoreResultSet-getEntry(): Entry--><!--Device-KvStoreResultSet-getEntry(): Entry-End-->

**System capability:** SystemCapability.DistributedDataManager.KVStore.Core

**Return value:**

| Type | Description |
| --- | --- |
| [Entry](arkts-arkdata-distributeddata-entry-i.md) | KV pair obtained. |

**Example**

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

**Since:** 8

**Deprecated since:** 9

**Substitutes:** getPosition

<!--Device-KvStoreResultSet-getPosition(): number--><!--Device-KvStoreResultSet-getPosition(): number-End-->

**System capability:** SystemCapability.DistributedDataManager.KVStore.Core

**Return value:**

| Type | Description |
| --- | --- |
| number | Current data read position obtained. |

**Example**

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

**Since:** 8

**Deprecated since:** 9

**Substitutes:** isAfterLast

<!--Device-KvStoreResultSet-isAfterLast(): boolean--><!--Device-KvStoreResultSet-isAfterLast(): boolean-End-->

**System capability:** SystemCapability.DistributedDataManager.KVStore.Core

**Return value:**

| Type | Description |
| --- | --- |
| boolean | Returns **true** if the data read position is after the last row; returns **false** otherwise. |

**Example**

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

**Since:** 8

**Deprecated since:** 9

**Substitutes:** isBeforeFirst

<!--Device-KvStoreResultSet-isBeforeFirst(): boolean--><!--Device-KvStoreResultSet-isBeforeFirst(): boolean-End-->

**System capability:** SystemCapability.DistributedDataManager.KVStore.Core

**Return value:**

| Type | Description |
| --- | --- |
| boolean | Returns **true** if the data read position is before the first row; returns **false** otherwise. |

**Example**

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

**Since:** 8

**Deprecated since:** 9

**Substitutes:** isFirst

<!--Device-KvStoreResultSet-isFirst(): boolean--><!--Device-KvStoreResultSet-isFirst(): boolean-End-->

**System capability:** SystemCapability.DistributedDataManager.KVStore.Core

**Return value:**

| Type | Description |
| --- | --- |
| boolean | Returns **true** if the first row is being read; returns **false** otherwise. |

**Example**

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

**Since:** 8

**Deprecated since:** 9

**Substitutes:** isLast

<!--Device-KvStoreResultSet-isLast(): boolean--><!--Device-KvStoreResultSet-isLast(): boolean-End-->

**System capability:** SystemCapability.DistributedDataManager.KVStore.Core

**Return value:**

| Type | Description |
| --- | --- |
| boolean | Returns **true** if the last row is being read; returns **false** otherwise. |

**Example**

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

**Since:** 8

**Deprecated since:** 9

**Substitutes:** move

<!--Device-KvStoreResultSet-move(offset: number): boolean--><!--Device-KvStoreResultSet-move(offset: number): boolean-End-->

**System capability:** SystemCapability.DistributedDataManager.KVStore.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| offset | number | Yes | Offset to move the data read position. A negative value means to move backward, and a positive value means to move forward. |

**Return value:**

| Type | Description |
| --- | --- |
| boolean | Returns **true** if the operation is successful; returns **false** otherwise. |

**Example**

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

**Since:** 8

**Deprecated since:** 9

**Substitutes:** moveToFirst

<!--Device-KvStoreResultSet-moveToFirst(): boolean--><!--Device-KvStoreResultSet-moveToFirst(): boolean-End-->

**System capability:** SystemCapability.DistributedDataManager.KVStore.Core

**Return value:**

| Type | Description |
| --- | --- |
| boolean | Returns **true** if the operation is successful; returns **false** otherwise. |

**Example**

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

**Since:** 8

**Deprecated since:** 9

**Substitutes:** moveToLast

<!--Device-KvStoreResultSet-moveToLast(): boolean--><!--Device-KvStoreResultSet-moveToLast(): boolean-End-->

**System capability:** SystemCapability.DistributedDataManager.KVStore.Core

**Return value:**

| Type | Description |
| --- | --- |
| boolean | Returns **true** if the operation is successful; returns **false** otherwise. |

**Example**

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

**Since:** 8

**Deprecated since:** 9

**Substitutes:** moveToNext

<!--Device-KvStoreResultSet-moveToNext(): boolean--><!--Device-KvStoreResultSet-moveToNext(): boolean-End-->

**System capability:** SystemCapability.DistributedDataManager.KVStore.Core

**Return value:**

| Type | Description |
| --- | --- |
| boolean | Returns **true** if the operation is successful; returns **false** otherwise. |

**Example**

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

**Since:** 8

**Deprecated since:** 9

**Substitutes:** moveToPosition

<!--Device-KvStoreResultSet-moveToPosition(position: number): boolean--><!--Device-KvStoreResultSet-moveToPosition(position: number): boolean-End-->

**System capability:** SystemCapability.DistributedDataManager.KVStore.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| position | number | Yes | Absolute position to move to. |

**Return value:**

| Type | Description |
| --- | --- |
| boolean | Returns **true** if the operation is successful; returns **false** otherwise. |

**Example**

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

**Since:** 8

**Deprecated since:** 9

**Substitutes:** moveToPrevious

<!--Device-KvStoreResultSet-moveToPrevious(): boolean--><!--Device-KvStoreResultSet-moveToPrevious(): boolean-End-->

**System capability:** SystemCapability.DistributedDataManager.KVStore.Core

**Return value:**

| Type | Description |
| --- | --- |
| boolean | Returns **true** if the operation is successful; returns **false** otherwise. |

**Example**

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

