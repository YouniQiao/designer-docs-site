# Query

Provides methods to create a **Query** object, which defines different data query criteria. A **Query** object supports a maximum of 256 predicates.

**Since:** 9

<!--Device-distributedKVStore-class Query--><!--Device-distributedKVStore-class Query-End-->

**System capability:** SystemCapability.DistributedDataManager.KVStore.Core

## Modules to Import

```TypeScript
import { distributedKVStore } from '@kit.ArkData';
```

<a id="and"></a>
## and

```TypeScript
and(): Query
```

Creates a **Query** object with the AND condition.

**Since:** 9

**Model restriction:** This API can be used only in the stage model.

<!--Device-Query-and(): Query--><!--Device-Query-and(): Query-End-->

**System capability:** SystemCapability.DistributedDataManager.KVStore.Core

**Return value:**

| Type | Description |
| --- | --- |
| [Query](arkts-arkdata-distributeddata-query-c.md) | **Query** object created. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

try {
    let query: distributedKVStore.Query | null = new distributedKVStore.Query();
    if (query != null) {
      query.notEqualTo('field', 'value1');
      query.and();
      query.notEqualTo('field', 'value2');
      console.info('query is ' + query.getSqlLike());
    }
    query = null;
} catch (err) {
    let error = err as BusinessError;
    console.error(`An unexpected error occurred. Code: ${error.code}, message: ${error.message}`);
}

```

<a id="begingroup"></a>
## beginGroup

```TypeScript
beginGroup(): Query
```

Creates a **Query** object for a query condition group with a left parenthesis.

**Since:** 9

**Model restriction:** This API can be used only in the stage model.

<!--Device-Query-beginGroup(): Query--><!--Device-Query-beginGroup(): Query-End-->

**System capability:** SystemCapability.DistributedDataManager.KVStore.Core

**Return value:**

| Type | Description |
| --- | --- |
| [Query](arkts-arkdata-distributeddata-query-c.md) | **Query** object created. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

try {
    let query: distributedKVStore.Query | null = new distributedKVStore.Query();
    if (query != null) {
      query.beginGroup();
      query.isNotNull('field');
      query.endGroup();
      console.info('query is ' + query.getSqlLike());
    }
    query = null;
} catch (err) {
    let error = err as BusinessError;
    console.error(`An unexpected error occurred. Code: ${error.code}, message: ${error.message}`);
}

```

<a id="constructor"></a>
## constructor

```TypeScript
constructor()
```

Defines a constructor used to create a **Query** instance.

**Since:** 9

**Model restriction:** This API can be used only in the stage model.

<!--Device-Query-constructor()--><!--Device-Query-constructor()-End-->

**System capability:** SystemCapability.DistributedDataManager.KVStore.Core

<a id="deviceid"></a>
## deviceId

```TypeScript
deviceId(deviceId: string): Query
```

Creates a **Query** object with the device ID as the key prefix.

> **NOTE**  
>  
> **deviceId** can be obtained by  
> [deviceManager.getAvailableDeviceListSync](../../apis-distributed-service-kit/arkts-apis/arkts-distributedservice-distributeddevicemanager-devicemanager-i.md#getavailabledevicelistsync-1)  
> .  
> > For details about how to obtain **deviceId**, see [sync()](arkts-arkdata-distributedkvstore-syncmode-e.md).

**Since:** 9

**Model restriction:** This API can be used only in the stage model.

<!--Device-Query-deviceId(deviceId: string): Query--><!--Device-Query-deviceId(deviceId: string): Query-End-->

**System capability:** SystemCapability.DistributedDataManager.KVStore.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| deviceId | string | Yes | ID of the device to be queried. This parameter cannot be left empty. |

**Return value:**

| Type | Description |
| --- | --- |
| [Query](arkts-arkdata-distributeddata-query-c.md) | **Query** object created. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error.Possible causes:1.Mandatory parameters are left unspecified;<br>2.Incorrect parameters types;<br>3.Parameter verification failed. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

try {
    let query: distributedKVStore.Query | null = new distributedKVStore.Query();
    if (query != null) {
      query.deviceId('deviceId');
      console.info(`query is ${query.getSqlLike()}`);
    }
} catch (err) {
    let error = err as BusinessError;
    console.error(`An unexpected error occurred. Code: ${error.code}, message: ${error.message}`);
}

```

<a id="endgroup"></a>
## endGroup

```TypeScript
endGroup(): Query
```

Creates a **Query** object for a query condition group with a right parenthesis.

**Since:** 9

**Model restriction:** This API can be used only in the stage model.

<!--Device-Query-endGroup(): Query--><!--Device-Query-endGroup(): Query-End-->

**System capability:** SystemCapability.DistributedDataManager.KVStore.Core

**Return value:**

| Type | Description |
| --- | --- |
| [Query](arkts-arkdata-distributeddata-query-c.md) | **Query** object created. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

try {
    let query: distributedKVStore.Query | null = new distributedKVStore.Query();
    if (query != null) {
      query.beginGroup();
      query.isNotNull('field');
      query.endGroup();
      console.info('query is ' + query.getSqlLike());
    }
    query = null;
} catch (err) {
    let error = err as BusinessError;
    console.error(`An unexpected error occurred. Code: ${error.code}, message: ${error.message}`);
}

```

<a id="equalto"></a>
## equalTo

```TypeScript
equalTo(field: string, value: number | number | string | boolean): Query
```

Creates a **Query** object to match the specified field whose value is equal to the given value.

> **NOTE**  
>  
> This API should be used together with [Schema](arkts-arkdata-distributedkvstore-schema-c.md).  
>  
> For details about how to use **Schema** to create a database, see the example of creating and obtaining a KV  
> store using the **getKVStore()** method in  
> [Persisting KV Store Data](docroot://database/data-persistence-by-kv-store.md#how-to-develop).

**Since:** 9

**Model restriction:** This API can be used only in the stage model.

<!--Device-Query-equalTo(field: string, value: long | double | string | boolean): Query--><!--Device-Query-equalTo(field: string, value: long | double | string | boolean): Query-End-->

**System capability:** SystemCapability.DistributedDataManager.KVStore.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| field | string | Yes | Field to match. It cannot contain '^'. If the value contains '^', the predicate becomes invalid and all data in the KV store will be returned. |
| value | number \| number \| string \| boolean | Yes | Value specified. |

**Return value:**

| Type | Description |
| --- | --- |
| [Query](arkts-arkdata-distributeddata-query-c.md) | **Query** object created. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error.Possible causes:1.Mandatory parameters are left unspecified;<br>2.Incorrect parameters types;<br>3.Parameter verification failed. |

<a id="getsqllike"></a>
## getSqlLike

```TypeScript
getSqlLike(): string
```

Obtains the query statement of the **Query** object.

**Since:** 9

**Model restriction:** This API can be used only in the stage model.

<!--Device-Query-getSqlLike(): string--><!--Device-Query-getSqlLike(): string-End-->

**System capability:** SystemCapability.DistributedDataManager.KVStore.Core

**Return value:**

| Type | Description |
| --- | --- |
| string | Returns the query statement obtained. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

try {
    let query: distributedKVStore.Query | null = new distributedKVStore.Query();
    if (query != null) {
      let sql1 = query.getSqlLike();
      console.info(`GetSqlLike sql= ${sql1}`);
    }
} catch (err) {
    let error = err as BusinessError;
    console.error(`An unexpected error occurred. Code: ${error.code}, message: ${error.message}`);
}

```

<a id="greaterthan"></a>
## greaterThan

```TypeScript
greaterThan(field: string, value: number | number | string | boolean): Query
```

Creates a **Query** object to match the specified field whose value is greater than the specified value.

> **NOTE**  
>  
> This API should be used together with [Schema](arkts-arkdata-distributedkvstore-schema-c.md).  
>  
> For details about how to use **Schema** to create a database, see the example of creating and obtaining a KV  
> store using the **getKVStore()** method in  
> [Persisting KV Store Data](docroot://database/data-persistence-by-kv-store.md#how-to-develop).

**Since:** 9

**Model restriction:** This API can be used only in the stage model.

<!--Device-Query-greaterThan(field: string, value: long | double | string | boolean): Query--><!--Device-Query-greaterThan(field: string, value: long | double | string | boolean): Query-End-->

**System capability:** SystemCapability.DistributedDataManager.KVStore.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| field | string | Yes | Indicates the field, which cannot contain ^. |
| value | number \| number \| string \| boolean | Yes | Indicates the value to be compared. |

**Return value:**

| Type | Description |
| --- | --- |
| [Query](arkts-arkdata-distributeddata-query-c.md) | **Query** object created. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error.Possible causes:1.Mandatory parameters are left unspecified;<br>2.Incorrect parameters types;<br>3.Parameter verification failed. |

<a id="greaterthanorequalto"></a>
## greaterThanOrEqualTo

```TypeScript
greaterThanOrEqualTo(field: string, value: number | number | string): Query
```

Creates a **Query** object to match the specified field whose value is greater than or equal to the specified value.

> **NOTE**  
>  
> This API should be used together with [Schema](arkts-arkdata-distributedkvstore-schema-c.md).  
>  
> For details about how to use **Schema** to create a database, see the example of creating and obtaining a KV  
> store using the **getKVStore()** method in  
> [Persisting KV Store Data](docroot://database/data-persistence-by-kv-store.md#how-to-develop).

**Since:** 9

**Model restriction:** This API can be used only in the stage model.

<!--Device-Query-greaterThanOrEqualTo(field: string, value: long | double | string): Query--><!--Device-Query-greaterThanOrEqualTo(field: string, value: long | double | string): Query-End-->

**System capability:** SystemCapability.DistributedDataManager.KVStore.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| field | string | Yes | Field to match. It cannot contain '^'. If the value contains '^', the predicate becomes invalid and all data in the KV store will be returned. |
| value | number \| number \| string | Yes | Value specified. |

**Return value:**

| Type | Description |
| --- | --- |
| [Query](arkts-arkdata-distributeddata-query-c.md) | **Query** object created. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error.Possible causes:1.Mandatory parameters are left unspecified;<br>2.Incorrect parameters types;<br>3.Parameter verification failed. |

<a id="innumber"></a>
## inNumber

```TypeScript
inNumber(field: string, valueList: number[] | number[]): Query
```

Creates a **Query** object to match the specified field whose value is within the specified list of numbers.

> **NOTE**  
>  
> This API should be used together with [Schema](arkts-arkdata-distributedkvstore-schema-c.md).  
>  
> For details about how to use **Schema** to create a database, see the example of creating and obtaining a KV  
> store using the **getKVStore()** method in  
> [Persisting KV Store Data](docroot://database/data-persistence-by-kv-store.md#how-to-develop).

**Since:** 9

**Model restriction:** This API can be used only in the stage model.

<!--Device-Query-inNumber(field: string, valueList: long[] | double[]): Query--><!--Device-Query-inNumber(field: string, valueList: long[] | double[]): Query-End-->

**System capability:** SystemCapability.DistributedDataManager.KVStore.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| field | string | Yes | Field to match. It cannot contain '^'. If the value contains '^', the predicate becomes invalid and all data in the KV store will be returned. |
| valueList | number[] \| number[] | Yes | List of numbers. |

**Return value:**

| Type | Description |
| --- | --- |
| [Query](arkts-arkdata-distributeddata-query-c.md) | **Query** object created. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error.Possible causes:1.Mandatory parameters are left unspecified;<br>2.Incorrect parameters types;<br>3.Parameter verification failed. |

<a id="instring"></a>
## inString

```TypeScript
inString(field: string, valueList: string[]): Query
```

Creates a **Query** object to match the specified field whose value is within the specified list of strings.

> **NOTE**  
>  
> This API should be used together with [Schema](arkts-arkdata-distributedkvstore-schema-c.md).  
>  
> For details about how to use **Schema** to create a database, see the example of creating and obtaining a KV  
> store using the **getKVStore()** method in  
> [Persisting KV Store Data](docroot://database/data-persistence-by-kv-store.md#how-to-develop).

**Since:** 9

**Model restriction:** This API can be used only in the stage model.

<!--Device-Query-inString(field: string, valueList: string[]): Query--><!--Device-Query-inString(field: string, valueList: string[]): Query-End-->

**System capability:** SystemCapability.DistributedDataManager.KVStore.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| field | string | Yes | Field to match. It cannot contain '^'. If the value contains '^', the predicate becomes invalid and all data in the KV store will be returned. |
| valueList | string[] | Yes | List of strings. |

**Return value:**

| Type | Description |
| --- | --- |
| [Query](arkts-arkdata-distributeddata-query-c.md) | **Query** object created. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error.Possible causes:1.Mandatory parameters are left unspecified;<br>2.Incorrect parameters types;<br>3.Parameter verification failed. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

try {
    let query: distributedKVStore.Query | null = new distributedKVStore.Query();
    if (query != null) {
      query.inString('field', ['test1', 'test2']);
      console.info(`query is ${query.getSqlLike()}`);
    }
    query = null;
} catch (err) {
    let error = err as BusinessError;
    console.error(`An unexpected error occurred. Code: ${error.code}, message: ${error.message}`);
}

```

<a id="isnotnull"></a>
## isNotNull

```TypeScript
isNotNull(field: string): Query
```

Creates a **Query** object to match the specified field whose value is not **null**.

> **NOTE**  
>  
> This API should be used together with [Schema](arkts-arkdata-distributedkvstore-schema-c.md).  
>  
> For details about how to use **Schema** to create a database, see the example of creating and obtaining a KV  
> store using the **getKVStore()** method in  
> [Persisting KV Store Data](docroot://database/data-persistence-by-kv-store.md#how-to-develop).

**Since:** 9

**Model restriction:** This API can be used only in the stage model.

<!--Device-Query-isNotNull(field: string): Query--><!--Device-Query-isNotNull(field: string): Query-End-->

**System capability:** SystemCapability.DistributedDataManager.KVStore.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| field | string | Yes | Field to match. It cannot contain '^'. If the value contains '^', the predicate becomes invalid and all data in the KV store will be returned. |

**Return value:**

| Type | Description |
| --- | --- |
| [Query](arkts-arkdata-distributeddata-query-c.md) | **Query** object created. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error.Possible causes:1.Mandatory parameters are left unspecified;<br>2.Incorrect parameters types. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

try {
  let query: distributedKVStore.Query | null = new distributedKVStore.Query();
  if (query != null) {
    query.isNotNull('field');
    console.info(`query is ${query.getSqlLike()}`);
  }
  query = null;
} catch (err) {
  let error = err as BusinessError;
  console.error(`An unexpected error occurred. Code: ${error.code}, message: ${error.message}`);
}

```

<a id="isnull"></a>
## isNull

```TypeScript
isNull(field: string): Query
```

Creates a **Query** object to match the specified field whose value is **null**.

> **NOTE**  
>  
> This API should be used together with [Schema](arkts-arkdata-distributedkvstore-schema-c.md).  
>  
> For details about how to use **Schema** to create a database, see the example of creating and obtaining a KV  
> store using the **getKVStore()** method in  
> [Persisting KV Store Data](docroot://database/data-persistence-by-kv-store.md#how-to-develop).

**Since:** 9

**Model restriction:** This API can be used only in the stage model.

<!--Device-Query-isNull(field: string): Query--><!--Device-Query-isNull(field: string): Query-End-->

**System capability:** SystemCapability.DistributedDataManager.KVStore.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| field | string | Yes | Field to match. It cannot contain '^'. If the value contains '^', the predicate becomes invalid and all data in the KV store will be returned. |

**Return value:**

| Type | Description |
| --- | --- |
| [Query](arkts-arkdata-distributeddata-query-c.md) | **Query** object created. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error.Possible causes:1.Mandatory parameters are left unspecified;<br>2.Incorrect parameters types;<br>3.Parameter verification failed. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

try {
    let query: distributedKVStore.Query | null = new distributedKVStore.Query();
    if (query != null) {
      query.isNull('field');
      console.info(`query is ${query.getSqlLike()}`);
    }
    query = null;
} catch (err) {
    let error = err as BusinessError;
    console.error(`An unexpected error occurred. Code: ${error.code}, message: ${error.message}`);
}

```

<a id="lessthan"></a>
## lessThan

```TypeScript
lessThan(field: string, value: number | number | string): Query
```

Creates a **Query** object to match the specified field whose value is less than the specified value.

> **NOTE**  
>  
> This API should be used together with [Schema](arkts-arkdata-distributedkvstore-schema-c.md).  
>  
> For details about how to use **Schema** to create a database, see the example of creating and obtaining a KV  
> store using the **getKVStore()** method in  
> [Persisting KV Store Data](docroot://database/data-persistence-by-kv-store.md#how-to-develop).

**Since:** 9

**Model restriction:** This API can be used only in the stage model.

<!--Device-Query-lessThan(field: string, value: long | double | string): Query--><!--Device-Query-lessThan(field: string, value: long | double | string): Query-End-->

**System capability:** SystemCapability.DistributedDataManager.KVStore.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| field | string | Yes | Field to match. It cannot contain '^'. If the value contains '^', the predicate becomes invalid and all data in the KV store will be returned. |
| value | number \| number \| string | Yes | Value specified. |

**Return value:**

| Type | Description |
| --- | --- |
| [Query](arkts-arkdata-distributeddata-query-c.md) | **Query** object created. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error.Possible causes:1.Mandatory parameters are left unspecified;<br>2.Incorrect parameters types;<br>3.Parameter verification failed. |

<a id="lessthanorequalto"></a>
## lessThanOrEqualTo

```TypeScript
lessThanOrEqualTo(field: string, value: number | number | string): Query
```

Creates a **Query** object to match the specified field whose value is less than or equal to the specified value.

> **NOTE**  
>  
> This API should be used together with [Schema](arkts-arkdata-distributedkvstore-schema-c.md).  
>  
> For details about how to use **Schema** to create a database, see the example of creating and obtaining a KV  
> store using the **getKVStore()** method in  
> [Persisting KV Store Data](docroot://database/data-persistence-by-kv-store.md#how-to-develop).

**Since:** 9

**Model restriction:** This API can be used only in the stage model.

<!--Device-Query-lessThanOrEqualTo(field: string, value: long | double | string): Query--><!--Device-Query-lessThanOrEqualTo(field: string, value: long | double | string): Query-End-->

**System capability:** SystemCapability.DistributedDataManager.KVStore.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| field | string | Yes | Field to match. It cannot contain '^'. If the value contains '^', the predicate becomes invalid and all data in the KV store will be returned. |
| value | number \| number \| string | Yes | Value specified. |

**Return value:**

| Type | Description |
| --- | --- |
| [Query](arkts-arkdata-distributeddata-query-c.md) | **Query** object created. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error.Possible causes:1.Mandatory parameters are left unspecified;<br>2.Incorrect parameters types;<br>3.Parameter verification failed. |

<a id="like"></a>
## like

```TypeScript
like(field: string, value: string): Query
```

Creates a **Query** object to match the specified field whose value is similar to the specified string.

> **NOTE**  
>  
> This API should be used together with [Schema](arkts-arkdata-distributedkvstore-schema-c.md).  
>  
> For details about how to use **Schema** to create a database, see the example of creating and obtaining a KV  
> store using the **getKVStore()** method in  
> [Persisting KV Store Data](docroot://database/data-persistence-by-kv-store.md#how-to-develop).

**Since:** 9

**Model restriction:** This API can be used only in the stage model.

<!--Device-Query-like(field: string, value: string): Query--><!--Device-Query-like(field: string, value: string): Query-End-->

**System capability:** SystemCapability.DistributedDataManager.KVStore.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| field | string | Yes | Field to match. It cannot contain '^'. If the value contains '^', the predicate becomes invalid and all data in the KV store will be returned. |
| value | string | Yes | String specified. |

**Return value:**

| Type | Description |
| --- | --- |
| [Query](arkts-arkdata-distributeddata-query-c.md) | **Query** object created. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error.Possible causes:1.Mandatory parameters are left unspecified;<br>2.Incorrect parameters types;<br>3.Parameter verification failed. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

try {
    let query: distributedKVStore.Query | null = new distributedKVStore.Query();
    if (query != null) {
      query.like('field', 'value');
      console.info(`query is ${query.getSqlLike()}`);
    }
    query = null;
} catch (err) {
    let error = err as BusinessError;
    console.error(`An unexpected error occurred. Code: ${error.code}, message: ${error.message}`);
}

```

<a id="limit"></a>
## limit

```TypeScript
limit(total: number, offset: number): Query
```

Creates a **Query** object to specify the number of records of the query result and where to start. This API must be called after the invocation of the **orderByAsc()**, **orderByDesc()**, and the query APIs of the **Query** object.

**Since:** 9

**Model restriction:** This API can be used only in the stage model.

<!--Device-Query-limit(total: int, offset: int): Query--><!--Device-Query-limit(total: int, offset: int): Query-End-->

**System capability:** SystemCapability.DistributedDataManager.KVStore.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| total | number | Yes | Maximum number of results to query. The value must be a non-negative integer.<br>If the value is a negative number, the entire result set is queried. |
| offset | number | Yes | Start position of the query result. The value must be a non-negative integer.<br>If the value is a negative number, the entire result set is queried.<br>If **offset** exceeds the end of the result set, the query result is empty. |

**Return value:**

| Type | Description |
| --- | --- |
| [Query](arkts-arkdata-distributeddata-query-c.md) | **Query** object created. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error.Possible causes:1.Mandatory parameters are left unspecified;<br>2.Incorrect parameters types. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

let total = 10;
let offset = 1;
try {
  let query: distributedKVStore.Query | null = new distributedKVStore.Query();
  if (query != null) {
    query.notEqualTo('field', 'value');
    query.limit(total, offset);
    console.info(`query is ${query.getSqlLike()}`);
  }
  query = null;
} catch (err) {
  let error = err as BusinessError;
  console.error(`An unexpected error occurred. Code: ${error.code}, message: ${error.message}`);
}

```

<a id="notequalto"></a>
## notEqualTo

```TypeScript
notEqualTo(field: string, value: number | number | string | boolean): Query
```

Creates a **Query** object to match the specified field whose value is not equal to the specified value.

> **NOTE**  
>  
> This API should be used together with [Schema](arkts-arkdata-distributedkvstore-schema-c.md).  
>  
> For details about how to use **Schema** to create a database, see the example of creating and obtaining a KV  
> store using the **getKVStore()** method in  
> [Persisting KV Store Data](docroot://database/data-persistence-by-kv-store.md#how-to-develop).

**Since:** 9

**Model restriction:** This API can be used only in the stage model.

<!--Device-Query-notEqualTo(field: string, value: long | double | string | boolean): Query--><!--Device-Query-notEqualTo(field: string, value: long | double | string | boolean): Query-End-->

**System capability:** SystemCapability.DistributedDataManager.KVStore.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| field | string | Yes | Field to match. It cannot contain '^'. If the value contains '^', the predicate becomes invalid and all data in the KV store will be returned. |
| value | number \| number \| string \| boolean | Yes | Value specified. |

**Return value:**

| Type | Description |
| --- | --- |
| [Query](arkts-arkdata-distributeddata-query-c.md) | **Query** object created. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error.Possible causes:1.Mandatory parameters are left unspecified;<br>2.Incorrect parameters types;<br>3.Parameter verification failed. |

<a id="notinnumber"></a>
## notInNumber

```TypeScript
notInNumber(field: string, valueList: number[] | number[]): Query
```

Creates a **Query** object to match the specified field whose value is not within the specified list of numbers.

> **NOTE**  
>  
> This API should be used together with [Schema](arkts-arkdata-distributedkvstore-schema-c.md).  
>  
> For details about how to use **Schema** to create a database, see the example of creating and obtaining a KV  
> store using the **getKVStore()** method in  
> [Persisting KV Store Data](docroot://database/data-persistence-by-kv-store.md#how-to-develop).

**Since:** 9

**Model restriction:** This API can be used only in the stage model.

<!--Device-Query-notInNumber(field: string, valueList: long[] | double[]): Query--><!--Device-Query-notInNumber(field: string, valueList: long[] | double[]): Query-End-->

**System capability:** SystemCapability.DistributedDataManager.KVStore.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| field | string | Yes | Field to match. It cannot contain '^'. If the value contains '^', the predicate becomes invalid and all data in the KV store will be returned. |
| valueList | number[] \| number[] | Yes | List of numbers. |

**Return value:**

| Type | Description |
| --- | --- |
| [Query](arkts-arkdata-distributeddata-query-c.md) | **Query** object created. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error.Possible causes:1.Mandatory parameters are left unspecified;<br>2.Incorrect parameters types;<br>3.Parameter verification failed. |

<a id="notinstring"></a>
## notInString

```TypeScript
notInString(field: string, valueList: string[]): Query
```

Creates a **Query** object to match the specified field whose value is not within the specified list of strings.

> **NOTE**  
>  
> This API should be used together with [Schema](arkts-arkdata-distributedkvstore-schema-c.md).  
>  
> For details about how to use **Schema** to create a database, see the example of creating and obtaining a KV  
> store using the **getKVStore()** method in  
> [Persisting KV Store Data](docroot://database/data-persistence-by-kv-store.md#how-to-develop).

**Since:** 9

**Model restriction:** This API can be used only in the stage model.

<!--Device-Query-notInString(field: string, valueList: string[]): Query--><!--Device-Query-notInString(field: string, valueList: string[]): Query-End-->

**System capability:** SystemCapability.DistributedDataManager.KVStore.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| field | string | Yes | Field to match. It cannot contain '^'. If the value contains '^', the predicate becomes invalid and all data in the KV store will be returned. |
| valueList | string[] | Yes | List of strings. |

**Return value:**

| Type | Description |
| --- | --- |
| [Query](arkts-arkdata-distributeddata-query-c.md) | **Query** object created. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error.Possible causes:1.Mandatory parameters are left unspecified;<br>2.Incorrect parameters types;<br>3.Parameter verification failed. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

try {
    let query: distributedKVStore.Query | null = new distributedKVStore.Query();
    if (query != null) {
      query.notInString('field', ['test1', 'test2']);
      console.info(`query is ${query.getSqlLike()}`);
    }
    query = null;
} catch (err) {
    let error = err as BusinessError;
    console.error(`An unexpected error occurred. Code: ${error.code}, message: ${error.message}`);
}

```

<a id="or"></a>
## or

```TypeScript
or(): Query
```

Creates a **Query** object with the OR condition.

**Since:** 9

**Model restriction:** This API can be used only in the stage model.

<!--Device-Query-or(): Query--><!--Device-Query-or(): Query-End-->

**System capability:** SystemCapability.DistributedDataManager.KVStore.Core

**Return value:**

| Type | Description |
| --- | --- |
| [Query](arkts-arkdata-distributeddata-query-c.md) | **Query** object created. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

try {
    let query: distributedKVStore.Query | null = new distributedKVStore.Query();
    if (query != null) {
      query.notEqualTo('field', 'value1');
      query.or();
      query.notEqualTo('field', 'value2');
      console.info('query is ' + query.getSqlLike());
    }
    query = null;
} catch (err) {
    let error = err as BusinessError;
    console.error(`An unexpected error occurred. Code: ${error.code}, message: ${error.message}`);
}

```

<a id="orderbyasc"></a>
## orderByAsc

```TypeScript
orderByAsc(field: string): Query
```

Creates a **Query** object to sort the query results in ascending order.

> **NOTE**  
>  
> This API should be used together with [Schema](arkts-arkdata-distributedkvstore-schema-c.md).  
>  
> For details about how to use **Schema** to create a database, see the example of creating and obtaining a KV  
> store using the **getKVStore()** method in  
> [Persisting KV Store Data](docroot://database/data-persistence-by-kv-store.md#how-to-develop).

**Since:** 9

**Model restriction:** This API can be used only in the stage model.

<!--Device-Query-orderByAsc(field: string): Query--><!--Device-Query-orderByAsc(field: string): Query-End-->

**System capability:** SystemCapability.DistributedDataManager.KVStore.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| field | string | Yes | Field to match. It cannot contain '^'. If the value contains '^', the predicate becomes invalid and all data in the KV store will be returned. |

**Return value:**

| Type | Description |
| --- | --- |
| [Query](arkts-arkdata-distributeddata-query-c.md) | **Query** object created. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error.Possible causes:1.Mandatory parameters are left unspecified;<br>2.Incorrect parameters types;<br>3.Parameter verification failed. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

try {
    let query: distributedKVStore.Query | null = new distributedKVStore.Query();
    if (query != null) {
      query.notEqualTo('field', 'value');
      query.orderByAsc('field');
      console.info(`query is ${query.getSqlLike()}`);
    }
    query = null;
} catch (err) {
    let error = err as BusinessError;
    console.error(`An unexpected error occurred. Code: ${error.code}, message: ${error.message}`);
}

```

<a id="orderbydesc"></a>
## orderByDesc

```TypeScript
orderByDesc(field: string): Query
```

Creates a **Query** object to sort the query results in descending order.

> **NOTE**  
>  
> This API should be used together with [Schema](arkts-arkdata-distributedkvstore-schema-c.md).  
>  
> For details about how to use **Schema** to create a database, see the example of creating and obtaining a KV  
> store using the **getKVStore()** method in  
> [Persisting KV Store Data](docroot://database/data-persistence-by-kv-store.md#how-to-develop).

**Since:** 9

**Model restriction:** This API can be used only in the stage model.

<!--Device-Query-orderByDesc(field: string): Query--><!--Device-Query-orderByDesc(field: string): Query-End-->

**System capability:** SystemCapability.DistributedDataManager.KVStore.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| field | string | Yes | Field to match. It cannot contain '^'. If the value contains '^', the predicate becomes invalid and all data in the KV store will be returned. |

**Return value:**

| Type | Description |
| --- | --- |
| [Query](arkts-arkdata-distributeddata-query-c.md) | **Query** object created. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error.Possible causes:1.Mandatory parameters are left unspecified;<br>2.Incorrect parameters types;<br>3.Parameter verification failed. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

try {
    let query: distributedKVStore.Query | null = new distributedKVStore.Query();
    if (query != null) {
      query.notEqualTo('field', 'value');
      query.orderByDesc('field');
      console.info(`query is ${query.getSqlLike()}`);
    }
    query = null;
} catch (err) {
    let error = err as BusinessError;
    console.error(`An unexpected error occurred. Code: ${error.code}, message: ${error.message}`);
}

```

<a id="prefixkey"></a>
## prefixKey

```TypeScript
prefixKey(prefix: string): Query
```

Creates a **Query** object with a specified key prefix.

**Since:** 9

**Model restriction:** This API can be used only in the stage model.

<!--Device-Query-prefixKey(prefix: string): Query--><!--Device-Query-prefixKey(prefix: string): Query-End-->

**System capability:** SystemCapability.DistributedDataManager.KVStore.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| prefix | string | Yes | Key prefix, which cannot contain '^'. If the value contains '^', the predicate becomes invalid and all data in the KV store will be returned. |

**Return value:**

| Type | Description |
| --- | --- |
| [Query](arkts-arkdata-distributeddata-query-c.md) | **Query** object created. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error.Possible causes:1.Mandatory parameters are left unspecified;<br>2.Incorrect parameters types. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

try {
    let query: distributedKVStore.Query | null = new distributedKVStore.Query();
    if (query != null) {
      query.prefixKey('$.name');
      query.prefixKey('0');
      console.info(`query is ${query.getSqlLike()}`);
    }
    query = null;
} catch (err) {
    let error = err as BusinessError;
    console.error(`An unexpected error occurred. Code: ${error.code}, message: ${error.message}`);
}

```

<a id="reset"></a>
## reset

```TypeScript
reset(): Query
```

Resets the **Query** object.

**Since:** 9

**Model restriction:** This API can be used only in the stage model.

<!--Device-Query-reset(): Query--><!--Device-Query-reset(): Query-End-->

**System capability:** SystemCapability.DistributedDataManager.KVStore.Core

**Return value:**

| Type | Description |
| --- | --- |
| [Query](arkts-arkdata-distributeddata-query-c.md) | **Query** object reset. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

try {
  let query: distributedKVStore.Query | null = new distributedKVStore.Query();
  if (query != null) {
    query.equalTo('key', 'value');
    console.info('query is ' + query.getSqlLike());
    query.reset();
    console.info('query is ' + query.getSqlLike());
  }
  query = null;
} catch (err) {
  let error = err as BusinessError;
  console.error(`An unexpected error occurred. Code: ${error.code}, message: ${error.message}`);
}

```

<a id="setsuggestindex"></a>
## setSuggestIndex

```TypeScript
setSuggestIndex(index: string): Query
```

Creates a **Query** object with an index preferentially used for query.

**Since:** 9

**Model restriction:** This API can be used only in the stage model.

<!--Device-Query-setSuggestIndex(index: string): Query--><!--Device-Query-setSuggestIndex(index: string): Query-End-->

**System capability:** SystemCapability.DistributedDataManager.KVStore.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| index | string | Yes | Index to set, which cannot contain '^'. If the value contains '^', the predicate becomes invalid and all data in the KV store will be returned. |

**Return value:**

| Type | Description |
| --- | --- |
| [Query](arkts-arkdata-distributeddata-query-c.md) | **Query** object created. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error.Possible causes:1.Mandatory parameters are left unspecified;<br>2.Incorrect parameters types. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

try {
    let query: distributedKVStore.Query | null = new distributedKVStore.Query();
    if (query != null) {
      query.setSuggestIndex('$.name');
      query.setSuggestIndex('0');
      console.info(`query is ${query.getSqlLike()}`);
    }
    query = null;
} catch (err) {
    let error = err as BusinessError;
    console.error(`An unexpected error occurred. Code: ${error.code}, message: ${error.message}`);
}

```

<a id="unlike"></a>
## unlike

```TypeScript
unlike(field: string, value: string): Query
```

Creates a **Query** object to match the specified field whose value is not similar to the specified string.

> **NOTE**  
>  
> This API should be used together with [Schema](arkts-arkdata-distributedkvstore-schema-c.md).  
>  
> For details about how to use **Schema** to create a database, see the example of creating and obtaining a KV  
> store using the **getKVStore()** method in  
> [Persisting KV Store Data](docroot://database/data-persistence-by-kv-store.md#how-to-develop).

**Since:** 9

**Model restriction:** This API can be used only in the stage model.

<!--Device-Query-unlike(field: string, value: string): Query--><!--Device-Query-unlike(field: string, value: string): Query-End-->

**System capability:** SystemCapability.DistributedDataManager.KVStore.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| field | string | Yes | Field to match. It cannot contain '^'. If the value contains '^', the predicate becomes invalid and all data in the KV store will be returned. |
| value | string | Yes | String specified. |

**Return value:**

| Type | Description |
| --- | --- |
| [Query](arkts-arkdata-distributeddata-query-c.md) | **Query** object created. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error.Possible causes:1.Mandatory parameters are left unspecified;<br>2.Incorrect parameters types;<br>3.Parameter verification failed. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

try {
    let query: distributedKVStore.Query | null = new distributedKVStore.Query();
    if (query != null) {
      query.unlike('field', 'value');
      console.info(`query is ${query.getSqlLike()}`);
    }
    query = null;
} catch (err) {
    let error = err as BusinessError;
    console.error(`An unexpected error occurred. Code: ${error.code}, message: ${error.message}`);
}

```

