# DataAbilityHelper

A DataAbilityHelper object is obtained through
[acquireDataAbilityHelper](arkts-ability-acquiredataabilityhelper-f.md#acquiredataabilityhelper-1).

**Since:** 7

**System capability:** SystemCapability.Ability.AbilityRuntime.FAModel

## batchInsert

```TypeScript
batchInsert(uri: string, valuesBuckets: Array<rdb.ValuesBucket>, callback: AsyncCallback<number>): void
```

Inserts multiple data records into the database.
This API uses an asynchronous callback to return the result.

**Since:** 7

**Model restriction:** This API can be used only in the FA model.

**System capability:** SystemCapability.Ability.AbilityRuntime.FAModel

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| uri | string | Yes | URI of the data to insert. |
| valuesBuckets | Array&lt;rdb.ValuesBucket&gt; | Yes | Data records to insert. |
| callback | AsyncCallback&lt;number&gt; | Yes | Callback used to return the number of inserted data records. |

## batchInsert

```TypeScript
batchInsert(uri: string, valuesBuckets: Array<rdb.ValuesBucket>): Promise<number>
```

Inserts multiple data records into the database. This API uses a promise to return the result.

**Since:** 7

**Model restriction:** This API can be used only in the FA model.

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

## call

```TypeScript
call(uri: string, method: string, arg: string, extras: PacMap, callback: AsyncCallback<PacMap>): void
```

Calls an extended method defined by the DataAbility. This API uses an asynchronous callback to return the result.

**Since:** 7

**Model restriction:** This API can be used only in the FA model.

**System capability:** SystemCapability.Ability.AbilityRuntime.FAModel

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| uri | string | Yes | URI of the DataAbility. Example: 'dataability:///com.example.xxx.xxxx'. |
| method | string | Yes | Name of the API to call. |
| arg | string | Yes | Parameter to pass in. |
| extras | PacMap | Yes | Key-value pair parameter. |
| callback | AsyncCallback&lt;PacMap&gt; | Yes | Callback used to return the extended parameters in the format ofkey-value pairs. |

## call

```TypeScript
call(uri: string, method: string, arg: string, extras: PacMap): Promise<PacMap>
```

Calls an extended method defined by the DataAbility. This API uses a promise to return the result.

**Since:** 7

**Model restriction:** This API can be used only in the FA model.

**System capability:** SystemCapability.Ability.AbilityRuntime.FAModel

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| uri | string | Yes | URI of the DataAbility. Example: 'dataability:///com.example.xxx.xxxx'. |
| method | string | Yes | Name of the API to call. |
| arg | string | Yes | Parameter to pass in. |
| extras | PacMap | Yes | Key-value pair parameter. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;PacMap&gt; | Promise used to return the extended parameters in the format of key-value pairs. |

## delete

```TypeScript
delete(uri: string, predicates: dataAbility.DataAbilityPredicates, callback: AsyncCallback<number>): void
```

Deletes one or more data records from the database. This API uses an asynchronous callback to return the result.

**Since:** 7

**Model restriction:** This API can be used only in the FA model.

**System capability:** SystemCapability.Ability.AbilityRuntime.FAModel

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| uri | string | Yes | URI of the data to delete. |
| predicates | dataAbility.DataAbilityPredicates | Yes | Filter criteria. You should define the processing logicwhen this parameter is null. |
| callback | AsyncCallback&lt;number&gt; | Yes | Callback used to return the number of deleted data records. |

## delete

```TypeScript
delete(uri: string, predicates?: dataAbility.DataAbilityPredicates): Promise<number>
```

Deletes one or more data records from the database. This API uses a promise to return the result.

**Since:** 7

**Model restriction:** This API can be used only in the FA model.

**System capability:** SystemCapability.Ability.AbilityRuntime.FAModel

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| uri | string | Yes | URI of the data to delete. |
| predicates | dataAbility.DataAbilityPredicates | No | Filter criteria. You should define the processinglogic when this parameter is null. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;number&gt; | Returns the number of data records deleted. |

## delete

```TypeScript
delete(uri: string, callback: AsyncCallback<number>): void
```

Uses a custom processing logic to delete data records from the database.
This API uses an asynchronous callback to return the result.

**Since:** 7

**Model restriction:** This API can be used only in the FA model.

**System capability:** SystemCapability.Ability.AbilityRuntime.FAModel

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| uri | string | Yes | URI of the data to delete. |
| callback | AsyncCallback&lt;number&gt; | Yes | Callback used to return the number of deleted data records. |

## denormalizeUri

```TypeScript
denormalizeUri(uri: string, callback: AsyncCallback<string>): void
```

Converts a normalized URI generated by normalizeUri to a denormalized one.
This API uses an asynchronous callback to return the result.

**Since:** 7

**Model restriction:** This API can be used only in the FA model.

**System capability:** SystemCapability.Ability.AbilityRuntime.FAModel

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| uri | string | Yes | URI object to denormalize. |
| callback | AsyncCallback&lt;string&gt; | Yes | Callback used to return the denormalized URI object. |

## denormalizeUri

```TypeScript
denormalizeUri(uri: string): Promise<string>
```

Converts a normalized URI generated by normalizeUri to a denormalized one.
This API uses a promise to return the result.

**Since:** 7

**Model restriction:** This API can be used only in the FA model.

**System capability:** SystemCapability.Ability.AbilityRuntime.FAModel

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| uri | string | Yes | URI object to normalize. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;string&gt; | Promise used to return the denormalized URI object |

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

**System capability:** SystemCapability.Ability.AbilityRuntime.FAModel

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| uri | string | Yes | URI of the DataAbility. Example: 'dataability:///com.example.xxx.xxxx'. |
| operations | Array&lt;DataAbilityOperation&gt; | Yes | An array holding the data operations on the database. |
| callback | AsyncCallback&lt;Array&lt;DataAbilityResult&gt;&gt; | Yes | Callback used to return the result of each operationin the DataAbilityResult array. |

## executeBatch

```TypeScript
executeBatch(uri: string, operations: Array<DataAbilityOperation>): Promise<Array<DataAbilityResult>>
```

Operates data in the database in batches. This API uses a promise to return the result.

**Since:** 7

**Model restriction:** This API can be used only in the FA model.

**System capability:** SystemCapability.Ability.AbilityRuntime.FAModel

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| uri | string | Yes | URI of the DataAbility. Example: 'dataability:///com.example.xxx.xxxx'. |
| operations | Array&lt;DataAbilityOperation&gt; | Yes | An array holding the data operations on the database. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;Array&lt;DataAbilityResult&gt;&gt; | Promise used to return the result of each operation in theDataAbilityResult array. |

## getFileTypes

```TypeScript
getFileTypes(uri: string, mimeTypeFilter: string, callback: AsyncCallback<Array<string>>): void
```

Obtains the supported media resource types of a specified file.
This API uses an asynchronous callback to return the result.

**Since:** 7

**Model restriction:** This API can be used only in the FA model.

**System capability:** SystemCapability.Ability.AbilityRuntime.FAModel

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| uri | string | Yes | URI of the file. |
| mimeTypeFilter | string | Yes | Media resource type of the file to obtain. |
| callback | AsyncCallback&lt;Array&lt;string&gt;&gt; | Yes | Callback used to return an array holding the media resourcetypes. |

## getFileTypes

```TypeScript
getFileTypes(uri: string, mimeTypeFilter: string): Promise<Array<string>>
```

Obtains the supported media resource types of a specified file. This API uses a promise to return the result.

**Since:** 7

**Model restriction:** This API can be used only in the FA model.

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

## getType

```TypeScript
getType(uri: string, callback: AsyncCallback<string>): void
```

Obtains the media resource type of the data specified by a given URI.
This API uses an asynchronous callback to return the result.

**Since:** 7

**Model restriction:** This API can be used only in the FA model.

**System capability:** SystemCapability.Ability.AbilityRuntime.FAModel

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| uri | string | Yes | URI of the data. |
| callback | AsyncCallback&lt;string&gt; | Yes | Callback used to return the media resource type. |

## getType

```TypeScript
getType(uri: string): Promise<string>
```

Obtains the media resource type of the data specified by a given URI.
This API uses a promise to return the result.

**Since:** 7

**Model restriction:** This API can be used only in the FA model.

**System capability:** SystemCapability.Ability.AbilityRuntime.FAModel

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| uri | string | Yes | URI of the data. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;string&gt; | Promise used to return the media resource type. |

## insert

```TypeScript
insert(uri: string, valuesBucket: rdb.ValuesBucket, callback: AsyncCallback<number>): void
```

Inserts a single data record into the database. This API uses an asynchronous callback to return the result.

**Since:** 7

**Model restriction:** This API can be used only in the FA model.

**System capability:** SystemCapability.Ability.AbilityRuntime.FAModel

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| uri | string | Yes | URI of the data to insert. |
| valuesBucket | rdb.ValuesBucket | Yes | Data record to insert. If this parameter is null, a blank row will be inserted. |
| callback | AsyncCallback&lt;number&gt; | Yes | Callback used to return the index of the inserted data record. |

## insert

```TypeScript
insert(uri: string, valuesBucket: rdb.ValuesBucket): Promise<number>
```

Inserts a single data record into the database. This API uses a promise to return the result.

**Since:** 7

**Model restriction:** This API can be used only in the FA model.

**System capability:** SystemCapability.Ability.AbilityRuntime.FAModel

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| uri | string | Yes | URI of the data to insert. |
| valuesBucket | rdb.ValuesBucket | Yes | Data record to insert. If this parameter is null, a blank row willbe inserted. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;number&gt; | Promise used to return the index of the inserted data record. |

## normalizeUri

```TypeScript
normalizeUri(uri: string, callback: AsyncCallback<string>): void
```

Converts the URI that refers to a DataAbility into a normalized URI.
This API uses an asynchronous callback to return the result.

**Since:** 7

**Model restriction:** This API can be used only in the FA model.

**System capability:** SystemCapability.Ability.AbilityRuntime.FAModel

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| uri | string | Yes | URI object to normalize. |
| callback | AsyncCallback&lt;string&gt; | Yes | Callback used to return the normalized URI object if the DataAbilitysupports URI normalization. If the DataAbility does not support URI normalization, null is returned. |

## normalizeUri

```TypeScript
normalizeUri(uri: string): Promise<string>
```

Converts a normalized URI generated by normalizeUri to a denormalized one.
This API uses an asynchronous callback to return the result.

**Since:** 7

**Model restriction:** This API can be used only in the FA model.

**System capability:** SystemCapability.Ability.AbilityRuntime.FAModel

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| uri | string | Yes | URI object to denormalize. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;string&gt; | Promise used to return the normalized URI object if the DataAbility supports URInormalization. If the DataAbility does not support URI normalization, null is returned. |

## notifyChange

```TypeScript
notifyChange(uri: string, callback: AsyncCallback<void>): void
```

Notifies the registered observer of a change to the data specified by the URI.
This API uses an asynchronous callback to return the result.

**Since:** 7

**Model restriction:** This API can be used only in the FA model.

**System capability:** SystemCapability.Ability.AbilityRuntime.FAModel

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| uri | string | Yes | URI of the data that changes. |
| callback | AsyncCallback&lt;void&gt; | Yes | Callback used to return the result. If the observer is registered, erris undefined. Otherwise, err is an error object. |

## notifyChange

```TypeScript
notifyChange(uri: string): Promise<void>
```

Notifies the registered observer of a change to the data specified by the URI.
This API uses a promise to return the result.

**Since:** 7

**Model restriction:** This API can be used only in the FA model.

**System capability:** SystemCapability.Ability.AbilityRuntime.FAModel

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| uri | string | Yes | URI of the data that changes. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | Promise that returns no value. |

## off('dataChange')

```TypeScript
off(type: 'dataChange', uri: string, callback?: AsyncCallback<void>): void
```

Deregisters the observer that listens for changes in the data specified by a given URI.
This API uses an asynchronous callback to return the result.

**Since:** 7

**Model restriction:** This API can be used only in the FA model.

**System capability:** SystemCapability.Ability.AbilityRuntime.FAModel

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'dataChange' | Yes | The value 'dataChange' means data changes. |
| uri | string | Yes | URI of the data. |
| callback | AsyncCallback&lt;void&gt; | No | Callback used to return the result. If the observer is deregistered,err is undefined. Otherwise, err is an error object. |

## on('dataChange')

```TypeScript
on(type: 'dataChange', uri: string, callback: AsyncCallback<void>): void
```

Registers an observer to listen for changes in the data specified by a given URI.
This API uses an asynchronous callback to return the result.

**Since:** 7

**Model restriction:** This API can be used only in the FA model.

**System capability:** SystemCapability.Ability.AbilityRuntime.FAModel

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'dataChange' | Yes | The value 'dataChange' means data changes. |
| uri | string | Yes | URI of the data. |
| callback | AsyncCallback&lt;void&gt; | Yes | Callback used to return the result. If the observer is registered, erris undefined. Otherwise, err is an error object. |

## openFile

```TypeScript
openFile(uri: string, mode: string, callback: AsyncCallback<number>): void
```

Opens a file with a specified URI. This API uses an asynchronous callback to return the result.

**Since:** 7

**Model restriction:** This API can be used only in the FA model.

**System capability:** SystemCapability.Ability.AbilityRuntime.FAModel

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| uri | string | Yes | URI of the file to open. |
| mode | string | Yes | Mode for opening the file. The value r indicates read-only access, w indicates write-onlyaccess, and rw indicates read-write access. |
| callback | AsyncCallback&lt;number&gt; | Yes | Callback used to return the file descriptor. |

## openFile

```TypeScript
openFile(uri: string, mode: string): Promise<number>
```

Opens a file with a specified URI. This API uses a promise to return the result.

**Since:** 7

**Model restriction:** This API can be used only in the FA model.

**System capability:** SystemCapability.Ability.AbilityRuntime.FAModel

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| uri | string | Yes | URI of the file to open. |
| mode | string | Yes | Mode for opening the file. The value r indicates read-only access, w indicates write-onlyaccess, and rw indicates read-write access. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;number&gt; | Promise used to return the file descriptor. |

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

**System capability:** SystemCapability.Ability.AbilityRuntime.FAModel

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| uri | string | Yes | URI of the data to query. |
| columns | Array&lt;string&gt; | Yes | Columns to query. If this parameter is null, all columns will be queried. |
| predicates | dataAbility.DataAbilityPredicates | Yes | Filter criteria. When null is passed in, you need tocustomize the logic for querying data in the database. |
| callback | AsyncCallback&lt;ResultSet&gt; | Yes | Callback used to return the result. |

## query

```TypeScript
query(uri: string, callback: AsyncCallback<ResultSet>): void
```

Queries data in the database. This API uses an asynchronous callback to return the result.

**Since:** 7

**Model restriction:** This API can be used only in the FA model.

**System capability:** SystemCapability.Ability.AbilityRuntime.FAModel

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| uri | string | Yes | URI of the data to query. |
| callback | AsyncCallback&lt;ResultSet&gt; | Yes | Callback used to return the result. |

## query

```TypeScript
query(uri: string, columns: Array<string>, callback: AsyncCallback<ResultSet>): void
```

Queries data in the database. This API uses an asynchronous callback to return the result.

**Since:** 7

**Model restriction:** This API can be used only in the FA model.

**System capability:** SystemCapability.Ability.AbilityRuntime.FAModel

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| uri | string | Yes | URI of the data to query. |
| columns | Array&lt;string&gt; | Yes | Columns to query. If this parameter is null, all columns will be queried. |
| callback | AsyncCallback&lt;ResultSet&gt; | Yes | Callback used to return the result. |

## query

```TypeScript
query(uri: string, predicates: dataAbility.DataAbilityPredicates, callback: AsyncCallback<ResultSet>): void
```

Queries data in the database. This API uses an asynchronous callback to return the result.

**Since:** 7

**Model restriction:** This API can be used only in the FA model.

**System capability:** SystemCapability.Ability.AbilityRuntime.FAModel

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| uri | string | Yes | URI of the data to query. |
| predicates | dataAbility.DataAbilityPredicates | Yes | Filter criteria. When null is passed in, you need tocustomize the logic for querying data in the database. |
| callback | AsyncCallback&lt;ResultSet&gt; | Yes | Callback used to return the result. |

## query

```TypeScript
query(uri: string, columns?: Array<string>, predicates?: dataAbility.DataAbilityPredicates): Promise<ResultSet>
```

Queries data in the database. This API uses a promise to return the result.

**Since:** 7

**Model restriction:** This API can be used only in the FA model.

**System capability:** SystemCapability.Ability.AbilityRuntime.FAModel

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| uri | string | Yes | URI of the data to query. |
| columns | Array&lt;string&gt; | No | Columns to query. If this parameter is null, all columns will be queried. |
| predicates | dataAbility.DataAbilityPredicates | No | Filter criteria. When null is passed in, you need tocustomize the logic for querying data in the database. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;ResultSet&gt; | Returns the query result {@link ResultSet}. |

## update

```TypeScript
update(
    uri: string,
    valuesBucket: rdb.ValuesBucket,
    predicates: dataAbility.DataAbilityPredicates,
    callback: AsyncCallback<number>
  ): void
```

Updates data in the database.
This API uses an asynchronous callback to return the result.

**Since:** 7

**Model restriction:** This API can be used only in the FA model.

**System capability:** SystemCapability.Ability.AbilityRuntime.FAModel

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| uri | string | Yes | URI of the data to update. |
| valuesBucket | rdb.ValuesBucket | Yes | New values. |
| predicates | dataAbility.DataAbilityPredicates | Yes | Filter criteria. You should define the processing logicwhen this parameter is null. |
| callback | AsyncCallback&lt;number&gt; | Yes | Callback used to return the number of updated data records. |

## update

```TypeScript
update(uri: string, valuesBucket: rdb.ValuesBucket, predicates?: dataAbility.DataAbilityPredicates): Promise<number>
```

Updates data in the database. This API uses a promise to return the result.

**Since:** 7

**Model restriction:** This API can be used only in the FA model.

**System capability:** SystemCapability.Ability.AbilityRuntime.FAModel

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| uri | string | Yes | URI of the data to update. |
| valuesBucket | rdb.ValuesBucket | Yes | New values. |
| predicates | dataAbility.DataAbilityPredicates | No | Filter criteria. You should define the processinglogic when this parameter is null. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;number&gt; | Promise used to return the number of updated data records. |

## update

```TypeScript
update(uri: string, valuesBucket: rdb.ValuesBucket, callback: AsyncCallback<number>): void
```

Uses a custom processing logic to update data records in the database.
This API uses an asynchronous callback to return the result.

**Since:** 7

**Model restriction:** This API can be used only in the FA model.

**System capability:** SystemCapability.Ability.AbilityRuntime.FAModel

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| uri | string | Yes | URI of the data to update. |
| valuesBucket | rdb.ValuesBucket | Yes | New values. |
| callback | AsyncCallback&lt;number&gt; | Yes | Callback used to return the number of updated data records. |

