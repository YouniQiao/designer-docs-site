# KVStoreResultSet

Provides APIs for obtaining the distributed KV store result sets. A maximum of eight result sets can be opened at a time. The **KVStoreResultSet** instance is not refreshed in real time. After using the result set, if the data in the database is changed (by being added, deleted, or modified), you need to query the result set again to obtain the latest data. Before calling any API in **KVStoreResultSet**, you must use ** [getKVStore]distributedKVStore.KVManager.getKVStore<T>(storeId: string, options: Options, callback: AsyncCallback<T>) ** to construct a **SingleKVStore** or **DeviceKVStore** instance. > **NOTE** > > The cursor start position of **KVStoreResultSet** is **-1**.

**Since:** 9

**System capability:** SystemCapability.DistributedDataManager.KVStore.Core

## Modules to Import

```TypeScript
import { distributedKVStore } from '@kit.ArkData';
```

## getCount

```TypeScript
getCount(): int
```

Obtains the total number of rows in the result set.

**Since:** 9

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.DistributedDataManager.KVStore.Core

**Return value:**

| Type | Description |
| --- | --- |
| int | Total number of rows obtained. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

try {
  let resultSet: distributedKVStore.KVStoreResultSet;
  let count: number;
  kvStore.getResultSet('batch_test_string_key').then((result: distributedKVStore.KVStoreResultSet) => {
    console.info('getResultSet succeed.');
    resultSet = result;
    count = resultSet.getCount();
    console.info("getCount succeed:" + count);
  }).catch((err: BusinessError) => {
    console.error('getResultSet failed: ' + err);
  });
} catch (e) {
  console.error("getCount failed: " + e);
}

```

## getEntry

```TypeScript
getEntry(): Entry
```

Obtains the KV pair from the current position.

**Since:** 9

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.DistributedDataManager.KVStore.Core

**Return value:**

| Type | Description |
| --- | --- |
| Entry | KV pair obtained. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

try {
  let resultSet: distributedKVStore.KVStoreResultSet;
  kvStore.getResultSet('batch_test_string_key').then((result: distributedKVStore.KVStoreResultSet) => {
    console.info('getResultSet succeed.');
    resultSet = result;
    let entry = resultSet.getEntry();
    console.info("getEntry succeed:" + JSON.stringify(entry));
  }).catch((err: BusinessError) => {
    console.error('getResultSet failed: ' + err);
  });
} catch (e) {
  console.error("getEntry failed: " + e);
}

```

## getPosition

```TypeScript
getPosition(): int
```

Obtains the current data read position (position from which data is read) in the result set. The read position changes with the operations, such as [moveToFirst]distributedKVStore.KVStoreResultSet.moveToFirst and [moveToLast]distributedKVStore.KVStoreResultSet.moveToLast.

**Since:** 9

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.DistributedDataManager.KVStore.Core

**Return value:**

| Type | Description |
| --- | --- |
| int | Current data read position obtained. The value must be greater than or equal to -1. The value -1   means no data is read; the value 0 indicates the first row. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

try {
  let resultSet: distributedKVStore.KVStoreResultSet;
  let position: number;
  kvStore.getResultSet('batch_test_string_key').then((result: distributedKVStore.KVStoreResultSet) => {
    console.info('getResultSet succeeded.');
    resultSet = result;
    position = resultSet.getPosition();
    console.info("getPosition succeed:" + position);
  }).catch((err: BusinessError) => {
    console.error('getResultSet failed: ' + err);
  });
} catch (e) {
  console.error("getPosition failed: " + e);
}

```

## isAfterLast

```TypeScript
isAfterLast(): boolean
```

Checks whether the data read position is after the last row.

**Since:** 9

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.DistributedDataManager.KVStore.Core

**Return value:**

| Type | Description |
| --- | --- |
| boolean | Returns true if the data read position is after the last row; returns false otherwise. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

try {
  let resultSet: distributedKVStore.KVStoreResultSet;
  kvStore.getResultSet('batch_test_string_key').then((result: distributedKVStore.KVStoreResultSet) => {
    console.info('getResultSet succeed.');
    resultSet = result;
    let isAfterLast = resultSet.isAfterLast();
    console.info("Check isAfterLast succeed:" + isAfterLast);
  }).catch((err: BusinessError) => {
    console.error('getResultSet failed: ' + err);
  });
} catch (e) {
  console.error("Check isAfterLast failed: " + e);
}

```

## isBeforeFirst

```TypeScript
isBeforeFirst(): boolean
```

Checks whether the data read position is before the first row.

**Since:** 9

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.DistributedDataManager.KVStore.Core

**Return value:**

| Type | Description |
| --- | --- |
| boolean | Returns true if the data read position is before the first row; returns false otherwise. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

try {
  let resultSet: distributedKVStore.KVStoreResultSet;
  kvStore.getResultSet('batch_test_string_key').then((result: distributedKVStore.KVStoreResultSet) => {
    console.info('getResultSet succeed.');
    resultSet = result;
    let isBeforeFirst = resultSet.isBeforeFirst();
    console.info("Check isBeforeFirst succeed: " + isBeforeFirst);
  }).catch((err: BusinessError) => {
    console.error('getResultSet failed: ' + err);
  });
} catch (e) {
  console.error("Check isBeforeFirst failed: " + e);
}

```

## isFirst

```TypeScript
isFirst(): boolean
```

Checks whether the data read position is the first row.

**Since:** 9

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.DistributedDataManager.KVStore.Core

**Return value:**

| Type | Description |
| --- | --- |
| boolean | Returns true if the first row is being read; returns false otherwise. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

try {
  let resultSet: distributedKVStore.KVStoreResultSet;
  let isFirst: boolean;
  kvStore.getResultSet('batch_test_string_key').then((result: distributedKVStore.KVStoreResultSet) => {
    console.info('getResultSet succeed.');
    resultSet = result;
    isFirst = resultSet.isFirst();
    console.info("Check isFirst succeed:" + isFirst);
  }).catch((err: BusinessError) => {
    console.error('getResultSet failed: ' + err);
  });
} catch (e) {
  console.error("Check isFirst failed: " + e);
}

```

## isLast

```TypeScript
isLast(): boolean
```

Checks whether the data read position is the last row.

**Since:** 9

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.DistributedDataManager.KVStore.Core

**Return value:**

| Type | Description |
| --- | --- |
| boolean | Returns true if the last row is being read; returns false otherwise. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

try {
  let resultSet: distributedKVStore.KVStoreResultSet;
  let isLast: boolean;
  kvStore.getResultSet('batch_test_string_key').then((result: distributedKVStore.KVStoreResultSet) => {
    console.info('getResultSet succeed.');
    resultSet = result;
    isLast = resultSet.isLast();
    console.info("Check isLast succeed: " + isLast);
  }).catch((err: BusinessError) => {
    console.error('getResultSet failed: ' + err);
  });
} catch (e) {
  console.error("Check isLast failed: " + e);
}

```

## move

```TypeScript
move(offset: int): boolean
```

Moves the data read position with the specified offset from the current position. That is, moves the number of rows specified by **offset** from the current position.

**Since:** 9

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.DistributedDataManager.KVStore.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| offset | int | Yes | Offset to move the data read position. A positive value means to move forward; a negative value  means to move backward. If the cursor is beyond the start or end position of the result set, false is returned. |

**Return value:**

| Type | Description |
| --- | --- |
| boolean | Returns true if the operation is successful; returns false otherwise. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error.Possible causes:1.Mandatory parameters are left unspecified;  2.Incorrect parameters types. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

try {
  let resultSet: distributedKVStore.KVStoreResultSet;
  let moved: boolean;
  kvStore.getResultSet('batch_test_string_key').then((result: distributedKVStore.KVStoreResultSet) => {
    console.info('Succeeded in getting resultSet');
    resultSet = result;
    moved = resultSet.move(2); // If the current position is 0, move the read position forward by two rows, that is, move to row 3.
    console.info(`Succeeded in moving.moved = ${moved}`);
  }).catch((err: BusinessError) => {
    console.error(`Failed to get resultSet.code is ${err.code},message is ${err.message}`);
  });
} catch (e) {
  let error = e as BusinessError;
  console.error(`Failed to move.code is ${error.code},message is ${error.message}`);
}

```

## moveToFirst

```TypeScript
moveToFirst(): boolean
```

Moves the data read position to the first row. If the result set is empty, **false** will be returned.

**Since:** 9

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.DistributedDataManager.KVStore.Core

**Return value:**

| Type | Description |
| --- | --- |
| boolean | Returns true if the operation is successful; returns false otherwise. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

try {
  let resultSet: distributedKVStore.KVStoreResultSet;
  let moved: boolean;
  kvStore.getResultSet('batch_test_string_key').then((result: distributedKVStore.KVStoreResultSet) => {
    console.info('getResultSet succeed.');
    resultSet = result;
    moved = resultSet.moveToFirst();
    console.info("moveToFirst succeed: " + moved);
  }).catch((err: BusinessError) => {
    console.error('getResultSet failed: ' + err);
  });
} catch (e) {
  console.error("moveToFirst failed " + e);
}

```

## moveToLast

```TypeScript
moveToLast(): boolean
```

Moves the data read position to the last row. If the result set is empty, **false** will be returned.

**Since:** 9

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.DistributedDataManager.KVStore.Core

**Return value:**

| Type | Description |
| --- | --- |
| boolean | Returns true if the operation is successful; returns false otherwise. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

try {
  let resultSet: distributedKVStore.KVStoreResultSet;
  let moved: boolean;
  kvStore.getResultSet('batch_test_string_key').then((result: distributedKVStore.KVStoreResultSet) => {
    console.info('getResultSet succeed.');
    resultSet = result;
    moved = resultSet.moveToLast();
    console.info("moveToLast succeed:" + moved);
  }).catch((err: BusinessError) => {
    console.error('getResultSet failed: ' + err);
  });
} catch (e) {
  console.error("moveToLast failed: " + e);
}

```

## moveToNext

```TypeScript
moveToNext(): boolean
```

Moves the data read position to the next row. If the result set is empty, **false** will be returned. This API applies when the whole result set is obtained.

**Since:** 9

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.DistributedDataManager.KVStore.Core

**Return value:**

| Type | Description |
| --- | --- |
| boolean | Returns true if the operation is successful; returns false otherwise. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

try {
  let resultSet: distributedKVStore.KVStoreResultSet;
  let moved: boolean;
  kvStore.getResultSet('batch_test_string_key').then((result: distributedKVStore.KVStoreResultSet) => {
    console.info('getResultSet succeed.');
    resultSet = result;
    do {
      moved = resultSet.moveToNext();
      console.info("moveToNext succeed: " + moved);
    } while (moved)
  }).catch((err: BusinessError) => {
    console.error('getResultSet failed: ' + err);
  });
} catch (e) {
  console.error("moveToNext failed: " + e);
}

```

## moveToPosition

```TypeScript
moveToPosition(position: int): boolean
```

Moves the data read position from 0 to an absolute position.

**Since:** 9

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.DistributedDataManager.KVStore.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| position | int | Yes | Absolute position to move to. If the absolute position exceeds the start or end position of  the result set, false is returned. |

**Return value:**

| Type | Description |
| --- | --- |
| boolean | Returns true if the operation is successful; returns false otherwise. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error.Possible causes:1.Mandatory parameters are left unspecified;  2.Incorrect parameters types. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

try {
  let resultSet: distributedKVStore.KVStoreResultSet;
  let moved: boolean;
  kvStore.getResultSet('batch_test_string_key').then((result: distributedKVStore.KVStoreResultSet) => {
    console.info('Succeeded in getting resultSet');
    resultSet = result;
    moved = resultSet.moveToPosition(1);
    console.info(`Succeeded in moving to position.moved=${moved}`);
  }).catch((err: BusinessError) => {
    console.error(`Failed to get resultSet.code is ${err.code},message is ${err.message}`);
  });
} catch (e) {
  let error = e as BusinessError;
  console.error(`Failed to move to position.code is ${error.code},message is ${error.message}`);
}

```

## moveToPrevious

```TypeScript
moveToPrevious(): boolean
```

Moves the data read position to the previous row. If the result set is empty, **false** will be returned. This API applies when the whole result set is obtained.

**Since:** 9

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.DistributedDataManager.KVStore.Core

**Return value:**

| Type | Description |
| --- | --- |
| boolean | Returns true if the operation is successful; returns false otherwise. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

try {
  let resultSet: distributedKVStore.KVStoreResultSet;
  let moved: boolean;
  kvStore.getResultSet('batch_test_string_key').then((result: distributedKVStore.KVStoreResultSet) => {
    console.info('getResultSet succeed.');
    resultSet = result;
    moved = resultSet.moveToLast();
    moved = resultSet.moveToPrevious();
    console.info("moveToPrevious succeed:" + moved);
  }).catch((err: BusinessError) => {
    console.error('getResultSet failed: ' + err);
  });
} catch (e) {
  console.error("moveToPrevious failed: " + e);
}

```

