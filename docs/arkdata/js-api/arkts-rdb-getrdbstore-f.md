# getRdbStore

## getRdbStore

```TypeScript
function getRdbStore(context: Context, config: StoreConfig, version: number, callback: AsyncCallback<RdbStore>): void
```

Obtains an RDB store. This API uses an asynchronous callback to return the result. You can set parameters for the RDB store based on service requirements and call APIs to perform data operations.

**Since:** 7

**Deprecated since:** 9

**Substitute:** @ohos.data.relationalStore:relationalStore.getRdbStore

**System capability:** SystemCapability.DistributedDataManager.RelationalStore.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| context | Context | Yes | Application context.  For details about the application context of the FA model, see [Context]./app/context.  For details about the application context of the stage model, see [Context]./app/context. |
| config | StoreConfig | Yes | Configuration of the RDB store. |
| version | number | Yes | RDB store version. Currently, automatic RDB upgrades and downgrades performed based  on version is not supported. |
| callback | AsyncCallback&lt;RdbStore> | Yes | Callback used to return the RDB store obtained. |

## getRdbStore

```TypeScript
function getRdbStore(context: Context, config: StoreConfig, version: number): Promise<RdbStore>
```

Obtains an RDB store. This API uses a promise to return the result. You can set parameters for the RDB store based on service requirements and call APIs to perform data operations.

**Since:** 7

**Deprecated since:** 9

**System capability:** SystemCapability.DistributedDataManager.RelationalStore.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| context | Context | Yes | Application context. For details about the application context of the FA model, see  [Context]./app/context.  For details about the application context of the stage model, see [Context]./app/context. |
| config | StoreConfig | Yes | Configuration of the RDB store. |
| version | number | Yes | RDB store version. Currently, automatic RDB upgrades and downgrades performed based  on version is not supported. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;RdbStore> | Promise used to return the RdbStore object. |

