# deleteRdbStore

## deleteRdbStore

```TypeScript
function deleteRdbStore(context: Context, name: string, callback: AsyncCallback<void>): void
```

Deletes an RDB store. This API uses an asynchronous callback to return the result.

**Since:** 7

**Deprecated since:** 9

**Substitute:** @ohos.data.relationalStore:relationalStore.deleteRdbStore

**System capability:** SystemCapability.DistributedDataManager.RelationalStore.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| context | Context | Yes | Application context. For details about the application context of the FA model, see  [Context]./app/context.  For details about the application context of the stage model, see [Context]./app/context. |
| name | string | Yes | Name of the RDB store to delete. |
| callback | AsyncCallback&lt;void> | Yes | Callback used to return the result. |

## deleteRdbStore

```TypeScript
function deleteRdbStore(context: Context, name: string): Promise<void>
```

Deletes an RDB store. This API uses a promise to return the result.

**Since:** 7

**Deprecated since:** 9

**Substitute:** @ohos.data.relationalStore:relationalStore.deleteRdbStore

**System capability:** SystemCapability.DistributedDataManager.RelationalStore.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| context | Context | Yes | Application context. For details about the application context of the FA model, see  [Context]./app/context.  For details about the application context of the stage model, see [Context]./app/context. |
| name | string | Yes | Name of the RDB store to delete. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | Promise that returns no value. |

