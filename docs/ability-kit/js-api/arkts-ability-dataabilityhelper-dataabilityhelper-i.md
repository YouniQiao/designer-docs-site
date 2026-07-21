# DataAbilityHelper

A DataAbilityHelper object is obtained through [acquireDataAbilityHelper](arkts-ability-featureability-acquiredataabilityhelper-f.md#acquiredataabilityhelper-1).

**Since:** 7

<!--Device-unnamed-export interface DataAbilityHelper--><!--Device-unnamed-export interface DataAbilityHelper-End-->

**System capability:** SystemCapability.Ability.AbilityRuntime.FAModel

<a id="batchinsert"></a>
## batchInsert

```TypeScript
batchInsert(uri: string, valuesBuckets: Array<rdb.ValuesBucket>, callback: AsyncCallback<number>): void
```

Inserts multiple data records into the database.This API uses an asynchronous callback to return the result.

**Since:** 7

**Model restriction:** This API can be used only in the FA model.

<!--Device-DataAbilityHelper-batchInsert(uri: string, valuesBuckets: Array<rdb.ValuesBucket>, callback: AsyncCallback<number>): void--><!--Device-DataAbilityHelper-batchInsert(uri: string, valuesBuckets: Array<rdb.ValuesBucket>, callback: AsyncCallback<number>): void-End-->

**System capability:** SystemCapability.Ability.AbilityRuntime.FAModel

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| uri | string | Yes | URI of the data to insert. |
| valuesBuckets | Array&lt;rdb.ValuesBucket&gt; | Yes | Data records to insert. |
| callback | [AsyncCallback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-asynccallback-i.md)&lt;number&gt; | Yes | Callback used to return the number of inserted data records. |

<a id="batchinsert-1"></a>
## batchInsert

```TypeScript
batchInsert(uri: string, valuesBuckets: Array<rdb.ValuesBucket>): Promise<number>
```

Inserts multiple data records into the database. This API uses a promise to return the result.

**Since:** 7

**Model restriction:** This API can be used only in the FA model.

<!--Device-DataAbilityHelper-batchInsert(uri: string, valuesBuckets: Array<rdb.ValuesBucket>): Promise<number>--><!--Device-DataAbilityHelper-batchInsert(uri: string, valuesBuckets: Array<rdb.ValuesBucket>): Promise<number>-End-->

**System capability:** SystemCapability.Ability.AbilityRuntime.FAModel

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| uri | string | Yes | URI of the data to insert. |
| valuesBuckets | Array&lt;rdb.ValuesBucket&gt; | Yes | Data records to insert. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;number&gt; | Promise used to return the number of inserted data records. |

<a id="call"></a>
## call

```TypeScript
call(uri: string, method: string, arg: string, extras: PacMap, callback: AsyncCallback<PacMap>): void
```

Calls an extended method defined by the DataAbility. This API uses an asynchronous callback to return the result.

**Since:** 7

**Model restriction:** This API can be used only in the FA model.

<!--Device-DataAbilityHelper-call(uri: string, method: string, arg: string, extras: PacMap, callback: AsyncCallback<PacMap>): void--><!--Device-DataAbilityHelper-call(uri: string, method: string, arg: string, extras: PacMap, callback: AsyncCallback<PacMap>): void-End-->

**System capability:** SystemCapability.Ability.AbilityRuntime.FAModel

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| uri | string | Yes | URI of the DataAbility. Example: 'dataability:///com.example.xxx.xxxx'. |
| method | string | Yes | Name of the API to call. |
| arg | string | Yes | Parameter to pass in. |
| extras | [PacMap](arkts-ability-dataabilityhelper-pacmap-i.md) | Yes | Key-value pair parameter. |
| callback | [AsyncCallback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-asynccallback-i.md)&lt;PacMap&gt; | Yes | Callback used to return the extended parameters in the format of key-value pairs. |

<a id="call-1"></a>
## call

```TypeScript
call(uri: string, method: string, arg: string, extras: PacMap): Promise<PacMap>
```

Calls an extended method defined by the DataAbility. This API uses a promise to return the result.

**Since:** 7

**Model restriction:** This API can be used only in the FA model.

<!--Device-DataAbilityHelper-call(uri: string, method: string, arg: string, extras: PacMap): Promise<PacMap>--><!--Device-DataAbilityHelper-call(uri: string, method: string, arg: string, extras: PacMap): Promise<PacMap>-End-->

**System capability:** SystemCapability.Ability.AbilityRuntime.FAModel

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| uri | string | Yes | URI of the DataAbility. Example: 'dataability:///com.example.xxx.xxxx'. |
| method | string | Yes | Name of the API to call. |
| arg | string | Yes | Parameter to pass in. |
| extras | [PacMap](arkts-ability-dataabilityhelper-pacmap-i.md) | Yes | Key-value pair parameter. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;PacMap&gt; | Promise used to return the extended parameters in the format of key-value pairs. |

<a id="delete"></a>
## delete

```TypeScript
delete(uri: string, predicates: dataAbility.DataAbilityPredicates, callback: AsyncCallback<number>): void
```

Deletes one or more data records from the database. This API uses an asynchronous callback to return the result.

**Since:** 7

**Model restriction:** This API can be used only in the FA model.

<!--Device-DataAbilityHelper-delete(uri: string, predicates: dataAbility.DataAbilityPredicates, callback: AsyncCallback<number>): void--><!--Device-DataAbilityHelper-delete(uri: string, predicates: dataAbility.DataAbilityPredicates, callback: AsyncCallback<number>): void-End-->

**System capability:** SystemCapability.Ability.AbilityRuntime.FAModel

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| uri | string | Yes | URI of the data to delete. |
| predicates | dataAbility.DataAbilityPredicates | Yes | Filter criteria. You should define the processing logic when this parameter is null. |
| callback | [AsyncCallback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-asynccallback-i.md)&lt;number&gt; | Yes | Callback used to return the number of deleted data records. |

<a id="delete-1"></a>
## delete

```TypeScript
delete(uri: string, predicates?: dataAbility.DataAbilityPredicates): Promise<number>
```

Deletes one or more data records from the database. This API uses a promise to return the result.

**Since:** 7

**Model restriction:** This API can be used only in the FA model.

<!--Device-DataAbilityHelper-delete(uri: string, predicates?: dataAbility.DataAbilityPredicates): Promise<number>--><!--Device-DataAbilityHelper-delete(uri: string, predicates?: dataAbility.DataAbilityPredicates): Promise<number>-End-->

**System capability:** SystemCapability.Ability.AbilityRuntime.FAModel

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| uri | string | Yes | URI of the data to delete. |
| predicates | dataAbility.DataAbilityPredicates | No | Filter criteria. You should define the processing logic when this parameter is null. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;number&gt; | Returns the number of data records deleted. |

<a id="delete-2"></a>
## delete

```TypeScript
delete(uri: string, callback: AsyncCallback<number>): void
```

Uses a custom processing logic to delete data records from the database.This API uses an asynchronous callback to return the result.

**Since:** 7

**Model restriction:** This API can be used only in the FA model.

<!--Device-DataAbilityHelper-delete(uri: string, callback: AsyncCallback<number>): void--><!--Device-DataAbilityHelper-delete(uri: string, callback: AsyncCallback<number>): void-End-->

**System capability:** SystemCapability.Ability.AbilityRuntime.FAModel

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| uri | string | Yes | URI of the data to delete. |
| callback | [AsyncCallback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-asynccallback-i.md)&lt;number&gt; | Yes | Callback used to return the number of deleted data records. |

<a id="denormalizeuri"></a>
## denormalizeUri

```TypeScript
denormalizeUri(uri: string, callback: AsyncCallback<string>): void
```

Converts a normalized URI generated by normalizeUri to a denormalized one.This API uses an asynchronous callback to return the result.

**Since:** 7

**Model restriction:** This API can be used only in the FA model.

<!--Device-DataAbilityHelper-denormalizeUri(uri: string, callback: AsyncCallback<string>): void--><!--Device-DataAbilityHelper-denormalizeUri(uri: string, callback: AsyncCallback<string>): void-End-->

**System capability:** SystemCapability.Ability.AbilityRuntime.FAModel

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| uri | string | Yes | URI object to denormalize. |
| callback | [AsyncCallback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-asynccallback-i.md)&lt;string&gt; | Yes | Callback used to return the denormalized URI object. |

<a id="denormalizeuri-1"></a>
## denormalizeUri

```TypeScript
denormalizeUri(uri: string): Promise<string>
```

Converts a normalized URI generated by normalizeUri to a denormalized one.This API uses a promise to return the result.

**Since:** 7

**Model restriction:** This API can be used only in the FA model.

<!--Device-DataAbilityHelper-denormalizeUri(uri: string): Promise<string>--><!--Device-DataAbilityHelper-denormalizeUri(uri: string): Promise<string>-End-->

**System capability:** SystemCapability.Ability.AbilityRuntime.FAModel

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| uri | string | Yes | URI object to normalize. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;string&gt; | Promise used to return the denormalized URI object |

<a id="executebatch"></a>
## executeBatch

```TypeScript
executeBatch(
    uri: string,
    operations: Array<DataAbilityOperation>,
    callback: AsyncCallback<Array<DataAbilityResult>>
  ): void
```

Operates data in the database in batches. This API uses an asynchronous callback to return the result.

**Since:** 7

**Model restriction:** This API can be used only in the FA model.

<!--Device-DataAbilityHelper-executeBatch(
    uri: string,
    operations: Array<DataAbilityOperation>,
    callback: AsyncCallback<Array<DataAbilityResult>>
  ): void--><!--Device-DataAbilityHelper-executeBatch(
    uri: string,
    operations: Array<DataAbilityOperation>,
    callback: AsyncCallback<Array<DataAbilityResult>>
  ): void-End-->

**System capability:** SystemCapability.Ability.AbilityRuntime.FAModel

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| uri | string | Yes | URI of the DataAbility. Example: 'dataability:///com.example.xxx.xxxx'. |
| operations | Array&lt;DataAbilityOperation&gt; | Yes | An array holding the data operations on the database. |
| callback | [AsyncCallback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-asynccallback-i.md)&lt;Array&lt;DataAbilityResult&gt;&gt; | Yes | Callback used to return the result of each operation in the DataAbilityResult array. |

<a id="executebatch-1"></a>
## executeBatch

```TypeScript
executeBatch(uri: string, operations: Array<DataAbilityOperation>): Promise<Array<DataAbilityResult>>
```

Operates data in the database in batches. This API uses a promise to return the result.

**Since:** 7

**Model restriction:** This API can be used only in the FA model.

<!--Device-DataAbilityHelper-executeBatch(uri: string, operations: Array<DataAbilityOperation>): Promise<Array<DataAbilityResult>>--><!--Device-DataAbilityHelper-executeBatch(uri: string, operations: Array<DataAbilityOperation>): Promise<Array<DataAbilityResult>>-End-->

**System capability:** SystemCapability.Ability.AbilityRuntime.FAModel

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| uri | string | Yes | URI of the DataAbility. Example: 'dataability:///com.example.xxx.xxxx'. |
| operations | Array&lt;DataAbilityOperation&gt; | Yes | An array holding the data operations on the database. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;Array&lt;DataAbilityResult&gt;&gt; | Promise used to return the result of each operation in the DataAbilityResult array. |

<a id="getfiletypes"></a>
## getFileTypes

```TypeScript
getFileTypes(uri: string, mimeTypeFilter: string, callback: AsyncCallback<Array<string>>): void
```

Obtains the supported media resource types of a specified file.This API uses an asynchronous callback to return the result.

**Since:** 7

**Model restriction:** This API can be used only in the FA model.

<!--Device-DataAbilityHelper-getFileTypes(uri: string, mimeTypeFilter: string, callback: AsyncCallback<Array<string>>): void--><!--Device-DataAbilityHelper-getFileTypes(uri: string, mimeTypeFilter: string, callback: AsyncCallback<Array<string>>): void-End-->

**System capability:** SystemCapability.Ability.AbilityRuntime.FAModel

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| uri | string | Yes | URI of the file. |
| mimeTypeFilter | string | Yes | Media resource type of the file to obtain. |
| callback | [AsyncCallback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-asynccallback-i.md)&lt;Array&lt;string&gt;&gt; | Yes | Callback used to return an array holding the media resource types. |

<a id="getfiletypes-1"></a>
## getFileTypes

```TypeScript
getFileTypes(uri: string, mimeTypeFilter: string): Promise<Array<string>>
```

Obtains the supported media resource types of a specified file. This API uses a promise to return the result.

**Since:** 7

**Model restriction:** This API can be used only in the FA model.

<!--Device-DataAbilityHelper-getFileTypes(uri: string, mimeTypeFilter: string): Promise<Array<string>>--><!--Device-DataAbilityHelper-getFileTypes(uri: string, mimeTypeFilter: string): Promise<Array<string>>-End-->

**System capability:** SystemCapability.Ability.AbilityRuntime.FAModel

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| uri | string | Yes | URI of the file. |
| mimeTypeFilter | string | Yes | Media resource type of the file to obtain. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;Array&lt;string&gt;&gt; | Promise used to return an array holding the media resource types. |

<a id="gettype"></a>
## getType

```TypeScript
getType(uri: string, callback: AsyncCallback<string>): void
```

Obtains the media resource type of the data specified by a given URI.This API uses an asynchronous callback to return the result.

**Since:** 7

**Model restriction:** This API can be used only in the FA model.

<!--Device-DataAbilityHelper-getType(uri: string, callback: AsyncCallback<string>): void--><!--Device-DataAbilityHelper-getType(uri: string, callback: AsyncCallback<string>): void-End-->

**System capability:** SystemCapability.Ability.AbilityRuntime.FAModel

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| uri | string | Yes | URI of the data. |
| callback | [AsyncCallback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-asynccallback-i.md)&lt;string&gt; | Yes | Callback used to return the media resource type. |

<a id="gettype-1"></a>
## getType

```TypeScript
getType(uri: string): Promise<string>
```

Obtains the media resource type of the data specified by a given URI.This API uses a promise to return the result.

**Since:** 7

**Model restriction:** This API can be used only in the FA model.

<!--Device-DataAbilityHelper-getType(uri: string): Promise<string>--><!--Device-DataAbilityHelper-getType(uri: string): Promise<string>-End-->

**System capability:** SystemCapability.Ability.AbilityRuntime.FAModel

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| uri | string | Yes | URI of the data. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;string&gt; | Promise used to return the media resource type. |

<a id="insert"></a>
## insert

```TypeScript
insert(uri: string, valuesBucket: rdb.ValuesBucket, callback: AsyncCallback<number>): void
```

Inserts a single data record into the database. This API uses an asynchronous callback to return the result.

**Since:** 7

**Model restriction:** This API can be used only in the FA model.

<!--Device-DataAbilityHelper-insert(uri: string, valuesBucket: rdb.ValuesBucket, callback: AsyncCallback<number>): void--><!--Device-DataAbilityHelper-insert(uri: string, valuesBucket: rdb.ValuesBucket, callback: AsyncCallback<number>): void-End-->

**System capability:** SystemCapability.Ability.AbilityRuntime.FAModel

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| uri | string | Yes | URI of the data to insert. |
| valuesBucket | rdb.ValuesBucket | Yes | Data record to insert. If this parameter is null, a blank row will be inserted. |
| callback | [AsyncCallback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-asynccallback-i.md)&lt;number&gt; | Yes | Callback used to return the index of the inserted data record. |

<a id="insert-1"></a>
## insert

```TypeScript
insert(uri: string, valuesBucket: rdb.ValuesBucket): Promise<number>
```

Inserts a single data record into the database. This API uses a promise to return the result.

**Since:** 7

**Model restriction:** This API can be used only in the FA model.

<!--Device-DataAbilityHelper-insert(uri: string, valuesBucket: rdb.ValuesBucket): Promise<number>--><!--Device-DataAbilityHelper-insert(uri: string, valuesBucket: rdb.ValuesBucket): Promise<number>-End-->

**System capability:** SystemCapability.Ability.AbilityRuntime.FAModel

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| uri | string | Yes | URI of the data to insert. |
| valuesBucket | rdb.ValuesBucket | Yes | Data record to insert. If this parameter is null, a blank row will be inserted. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;number&gt; | Promise used to return the index of the inserted data record. |

<a id="normalizeuri"></a>
## normalizeUri

```TypeScript
normalizeUri(uri: string, callback: AsyncCallback<string>): void
```

Converts the URI that refers to a DataAbility into a normalized URI.This API uses an asynchronous callback to return the result.

**Since:** 7

**Model restriction:** This API can be used only in the FA model.

<!--Device-DataAbilityHelper-normalizeUri(uri: string, callback: AsyncCallback<string>): void--><!--Device-DataAbilityHelper-normalizeUri(uri: string, callback: AsyncCallback<string>): void-End-->

**System capability:** SystemCapability.Ability.AbilityRuntime.FAModel

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| uri | string | Yes | URI object to normalize. |
| callback | [AsyncCallback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-asynccallback-i.md)&lt;string&gt; | Yes | Callback used to return the normalized URI object if the DataAbility supports URI normalization. If the DataAbility does not support URI normalization, null is returned. |

<a id="normalizeuri-1"></a>
## normalizeUri

```TypeScript
normalizeUri(uri: string): Promise<string>
```

Converts a normalized URI generated by normalizeUri to a denormalized one.This API uses an asynchronous callback to return the result.

**Since:** 7

**Model restriction:** This API can be used only in the FA model.

<!--Device-DataAbilityHelper-normalizeUri(uri: string): Promise<string>--><!--Device-DataAbilityHelper-normalizeUri(uri: string): Promise<string>-End-->

**System capability:** SystemCapability.Ability.AbilityRuntime.FAModel

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| uri | string | Yes | URI object to denormalize. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;string&gt; | Promise used to return the normalized URI object if the DataAbility supports URI normalization. If the DataAbility does not support URI normalization, null is returned. |

<a id="notifychange"></a>
## notifyChange

```TypeScript
notifyChange(uri: string, callback: AsyncCallback<void>): void
```

Notifies the registered observer of a change to the data specified by the URI.This API uses an asynchronous callback to return the result.

**Since:** 7

**Model restriction:** This API can be used only in the FA model.

<!--Device-DataAbilityHelper-notifyChange(uri: string, callback: AsyncCallback<void>): void--><!--Device-DataAbilityHelper-notifyChange(uri: string, callback: AsyncCallback<void>): void-End-->

**System capability:** SystemCapability.Ability.AbilityRuntime.FAModel

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| uri | string | Yes | URI of the data that changes. |
| callback | [AsyncCallback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-asynccallback-i.md)&lt;void&gt; | Yes | Callback used to return the result. If the observer is registered, err is undefined. Otherwise, err is an error object. |

<a id="notifychange-1"></a>
## notifyChange

```TypeScript
notifyChange(uri: string): Promise<void>
```

Notifies the registered observer of a change to the data specified by the URI.This API uses a promise to return the result.

**Since:** 7

**Model restriction:** This API can be used only in the FA model.

<!--Device-DataAbilityHelper-notifyChange(uri: string): Promise<void>--><!--Device-DataAbilityHelper-notifyChange(uri: string): Promise<void>-End-->

**System capability:** SystemCapability.Ability.AbilityRuntime.FAModel

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| uri | string | Yes | URI of the data that changes. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | Promise that returns no value. |

<a id="off"></a>
## off('dataChange')

```TypeScript
off(type: 'dataChange', uri: string, callback?: AsyncCallback<void>): void
```

Deregisters the observer that listens for changes in the data specified by a given URI.This API uses an asynchronous callback to return the result.

**Since:** 7

**Model restriction:** This API can be used only in the FA model.

<!--Device-DataAbilityHelper-off(type: 'dataChange', uri: string, callback?: AsyncCallback<void>): void--><!--Device-DataAbilityHelper-off(type: 'dataChange', uri: string, callback?: AsyncCallback<void>): void-End-->

**System capability:** SystemCapability.Ability.AbilityRuntime.FAModel

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'dataChange' | Yes | The value 'dataChange' means data changes. |
| uri | string | Yes | URI of the data. |
| callback | [AsyncCallback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-asynccallback-i.md)&lt;void&gt; | No | Callback used to return the result. If the observer is deregistered,err is undefined. Otherwise, err is an error object. |

<a id="on"></a>
## on('dataChange')

```TypeScript
on(type: 'dataChange', uri: string, callback: AsyncCallback<void>): void
```

Registers an observer to listen for changes in the data specified by a given URI.This API uses an asynchronous callback to return the result.

**Since:** 7

**Model restriction:** This API can be used only in the FA model.

<!--Device-DataAbilityHelper-on(type: 'dataChange', uri: string, callback: AsyncCallback<void>): void--><!--Device-DataAbilityHelper-on(type: 'dataChange', uri: string, callback: AsyncCallback<void>): void-End-->

**System capability:** SystemCapability.Ability.AbilityRuntime.FAModel

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'dataChange' | Yes | The value 'dataChange' means data changes. |
| uri | string | Yes | URI of the data. |
| callback | [AsyncCallback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-asynccallback-i.md)&lt;void&gt; | Yes | Callback used to return the result. If the observer is registered, err is undefined. Otherwise, err is an error object. |

<a id="openfile"></a>
## openFile

```TypeScript
openFile(uri: string, mode: string, callback: AsyncCallback<number>): void
```

Opens a file with a specified URI. This API uses an asynchronous callback to return the result.

**Since:** 7

**Model restriction:** This API can be used only in the FA model.

<!--Device-DataAbilityHelper-openFile(uri: string, mode: string, callback: AsyncCallback<number>): void--><!--Device-DataAbilityHelper-openFile(uri: string, mode: string, callback: AsyncCallback<number>): void-End-->

**System capability:** SystemCapability.Ability.AbilityRuntime.FAModel

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| uri | string | Yes | URI of the file to open. |
| mode | string | Yes | Mode for opening the file. The value r indicates read-only access, w indicates write-only access, and rw indicates read-write access. |
| callback | [AsyncCallback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-asynccallback-i.md)&lt;number&gt; | Yes | Callback used to return the file descriptor. |

<a id="openfile-1"></a>
## openFile

```TypeScript
openFile(uri: string, mode: string): Promise<number>
```

Opens a file with a specified URI. This API uses a promise to return the result.

**Since:** 7

**Model restriction:** This API can be used only in the FA model.

<!--Device-DataAbilityHelper-openFile(uri: string, mode: string): Promise<number>--><!--Device-DataAbilityHelper-openFile(uri: string, mode: string): Promise<number>-End-->

**System capability:** SystemCapability.Ability.AbilityRuntime.FAModel

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| uri | string | Yes | URI of the file to open. |
| mode | string | Yes | Mode for opening the file. The value r indicates read-only access, w indicates write-only access, and rw indicates read-write access. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;number&gt; | Promise used to return the file descriptor. |

<a id="query"></a>
## query

```TypeScript
query(
    uri: string,
    columns: Array<string>,
    predicates: dataAbility.DataAbilityPredicates,
    callback: AsyncCallback<ResultSet>
  ): void
```

Queries data in the database. This API uses an asynchronous callback to return the result.

**Since:** 7

**Model restriction:** This API can be used only in the FA model.

<!--Device-DataAbilityHelper-query(
    uri: string,
    columns: Array<string>,
    predicates: dataAbility.DataAbilityPredicates,
    callback: AsyncCallback<ResultSet>
  ): void--><!--Device-DataAbilityHelper-query(
    uri: string,
    columns: Array<string>,
    predicates: dataAbility.DataAbilityPredicates,
    callback: AsyncCallback<ResultSet>
  ): void-End-->

**System capability:** SystemCapability.Ability.AbilityRuntime.FAModel

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| uri | string | Yes | URI of the data to query. |
| columns | Array&lt;string&gt; | Yes | Columns to query. If this parameter is null, all columns will be queried. |
| predicates | dataAbility.DataAbilityPredicates | Yes | Filter criteria. When null is passed in, you need to customize the logic for querying data in the database. |
| callback | [AsyncCallback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-asynccallback-i.md)&lt;ResultSet&gt; | Yes | Callback used to return the result. |

<a id="query-1"></a>
## query

```TypeScript
query(uri: string, callback: AsyncCallback<ResultSet>): void
```

Queries data in the database. This API uses an asynchronous callback to return the result.

**Since:** 7

**Model restriction:** This API can be used only in the FA model.

<!--Device-DataAbilityHelper-query(uri: string, callback: AsyncCallback<ResultSet>): void--><!--Device-DataAbilityHelper-query(uri: string, callback: AsyncCallback<ResultSet>): void-End-->

**System capability:** SystemCapability.Ability.AbilityRuntime.FAModel

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| uri | string | Yes | URI of the data to query. |
| callback | [AsyncCallback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-asynccallback-i.md)&lt;ResultSet&gt; | Yes | Callback used to return the result. |

<a id="query-2"></a>
## query

```TypeScript
query(uri: string, columns: Array<string>, callback: AsyncCallback<ResultSet>): void
```

Queries data in the database. This API uses an asynchronous callback to return the result.

**Since:** 7

**Model restriction:** This API can be used only in the FA model.

<!--Device-DataAbilityHelper-query(uri: string, columns: Array<string>, callback: AsyncCallback<ResultSet>): void--><!--Device-DataAbilityHelper-query(uri: string, columns: Array<string>, callback: AsyncCallback<ResultSet>): void-End-->

**System capability:** SystemCapability.Ability.AbilityRuntime.FAModel

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| uri | string | Yes | URI of the data to query. |
| columns | Array&lt;string&gt; | Yes | Columns to query. If this parameter is null, all columns will be queried. |
| callback | [AsyncCallback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-asynccallback-i.md)&lt;ResultSet&gt; | Yes | Callback used to return the result. |

<a id="query-3"></a>
## query

```TypeScript
query(uri: string, predicates: dataAbility.DataAbilityPredicates, callback: AsyncCallback<ResultSet>): void
```

Queries data in the database. This API uses an asynchronous callback to return the result.

**Since:** 7

**Model restriction:** This API can be used only in the FA model.

<!--Device-DataAbilityHelper-query(uri: string, predicates: dataAbility.DataAbilityPredicates, callback: AsyncCallback<ResultSet>): void--><!--Device-DataAbilityHelper-query(uri: string, predicates: dataAbility.DataAbilityPredicates, callback: AsyncCallback<ResultSet>): void-End-->

**System capability:** SystemCapability.Ability.AbilityRuntime.FAModel

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| uri | string | Yes | URI of the data to query. |
| predicates | dataAbility.DataAbilityPredicates | Yes | Filter criteria. When null is passed in, you need to customize the logic for querying data in the database. |
| callback | [AsyncCallback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-asynccallback-i.md)&lt;ResultSet&gt; | Yes | Callback used to return the result. |

<a id="query-4"></a>
## query

```TypeScript
query(uri: string, columns?: Array<string>, predicates?: dataAbility.DataAbilityPredicates): Promise<ResultSet>
```

Queries data in the database. This API uses a promise to return the result.

**Since:** 7

**Model restriction:** This API can be used only in the FA model.

<!--Device-DataAbilityHelper-query(uri: string, columns?: Array<string>, predicates?: dataAbility.DataAbilityPredicates): Promise<ResultSet>--><!--Device-DataAbilityHelper-query(uri: string, columns?: Array<string>, predicates?: dataAbility.DataAbilityPredicates): Promise<ResultSet>-End-->

**System capability:** SystemCapability.Ability.AbilityRuntime.FAModel

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| uri | string | Yes | URI of the data to query. |
| columns | Array&lt;string&gt; | No | Columns to query. If this parameter is null, all columns will be queried. |
| predicates | dataAbility.DataAbilityPredicates | No | Filter criteria. When null is passed in, you need to customize the logic for querying data in the database. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;ResultSet&gt; | Returns the query result {@link ResultSet}. |

<a id="update"></a>
## update

```TypeScript
update(
    uri: string,
    valuesBucket: rdb.ValuesBucket,
    predicates: dataAbility.DataAbilityPredicates,
    callback: AsyncCallback<number>
  ): void
```

Updates data in the database.This API uses an asynchronous callback to return the result.

**Since:** 7

**Model restriction:** This API can be used only in the FA model.

<!--Device-DataAbilityHelper-update(
    uri: string,
    valuesBucket: rdb.ValuesBucket,
    predicates: dataAbility.DataAbilityPredicates,
    callback: AsyncCallback<number>
  ): void--><!--Device-DataAbilityHelper-update(
    uri: string,
    valuesBucket: rdb.ValuesBucket,
    predicates: dataAbility.DataAbilityPredicates,
    callback: AsyncCallback<number>
  ): void-End-->

**System capability:** SystemCapability.Ability.AbilityRuntime.FAModel

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| uri | string | Yes | URI of the data to update. |
| valuesBucket | rdb.ValuesBucket | Yes | New values. |
| predicates | dataAbility.DataAbilityPredicates | Yes | Filter criteria. You should define the processing logic when this parameter is null. |
| callback | [AsyncCallback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-asynccallback-i.md)&lt;number&gt; | Yes | Callback used to return the number of updated data records. |

<a id="update-1"></a>
## update

```TypeScript
update(uri: string, valuesBucket: rdb.ValuesBucket, predicates?: dataAbility.DataAbilityPredicates): Promise<number>
```

Updates data in the database. This API uses a promise to return the result.

**Since:** 7

**Model restriction:** This API can be used only in the FA model.

<!--Device-DataAbilityHelper-update(uri: string, valuesBucket: rdb.ValuesBucket, predicates?: dataAbility.DataAbilityPredicates): Promise<number>--><!--Device-DataAbilityHelper-update(uri: string, valuesBucket: rdb.ValuesBucket, predicates?: dataAbility.DataAbilityPredicates): Promise<number>-End-->

**System capability:** SystemCapability.Ability.AbilityRuntime.FAModel

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| uri | string | Yes | URI of the data to update. |
| valuesBucket | rdb.ValuesBucket | Yes | New values. |
| predicates | dataAbility.DataAbilityPredicates | No | Filter criteria. You should define the processing logic when this parameter is null. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;number&gt; | Promise used to return the number of updated data records. |

<a id="update-2"></a>
## update

```TypeScript
update(uri: string, valuesBucket: rdb.ValuesBucket, callback: AsyncCallback<number>): void
```

Uses a custom processing logic to update data records in the database.This API uses an asynchronous callback to return the result.

**Since:** 7

**Model restriction:** This API can be used only in the FA model.

<!--Device-DataAbilityHelper-update(uri: string, valuesBucket: rdb.ValuesBucket, callback: AsyncCallback<number>): void--><!--Device-DataAbilityHelper-update(uri: string, valuesBucket: rdb.ValuesBucket, callback: AsyncCallback<number>): void-End-->

**System capability:** SystemCapability.Ability.AbilityRuntime.FAModel

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| uri | string | Yes | URI of the data to update. |
| valuesBucket | rdb.ValuesBucket | Yes | New values. |
| callback | [AsyncCallback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-asynccallback-i.md)&lt;number&gt; | Yes | Callback used to return the number of updated data records. |

