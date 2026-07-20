# getRdbStore

## getRdbStore

```TypeScript
function getRdbStore(context: Context, config: StoreConfig, version: number, callback: AsyncCallback<RdbStore>): void
```

Obtains an RDB store. This API uses an asynchronous callback to return the result. You can set parameters for the RDB store based on service requirements and call APIs to perform data operations.

**Since:** 7

**Deprecated since:** 9

**Substitutes:** [getRdbStore](arkts-arkdata-relationalstore-getrdbstore-f.md#getrdbstore-1)

<!--Device-rdb-function getRdbStore(context: Context, config: StoreConfig, version: number, callback: AsyncCallback<RdbStore>): void--><!--Device-rdb-function getRdbStore(context: Context, config: StoreConfig, version: number, callback: AsyncCallback<RdbStore>): void-End-->

**System capability:** SystemCapability.DistributedDataManager.RelationalStore.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| context | [Context](../../apis-arkui/arkts-components/arkts-arkui-context-t.md) | Yes | Application context.<br>For details about the application context of the FA model, see [Context](../../apis-ability-kit/arkts-apis/arkts-ability-context-context-depr-i.md).<br>For details about the application context of the stage model, see [Context](../../apis-ability-kit/arkts-apis/arkts-ability-context-context-depr-i.md). |
| config | [StoreConfig](arkts-arkdata-relationalstore-storeconfig-i.md) | Yes | Configuration of the RDB store. |
| version | number | Yes | RDB store version.<br>Currently, automatic RDB upgrades and downgrades performed based on **version** is not supported. |
| callback | [AsyncCallback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-asynccallback-i.md)<RdbStore> | Yes | Callback used to return the RDB store obtained. |


## getRdbStore

```TypeScript
function getRdbStore(context: Context, config: StoreConfig, version: number): Promise<RdbStore>
```

Obtains an RDB store. This API uses a promise to return the result. You can set parameters for the RDB store based on service requirements and call APIs to perform data operations.

**Since:** 7

**Deprecated since:** 9

<!--Device-rdb-function getRdbStore(context: Context, config: StoreConfig, version: number): Promise<RdbStore>--><!--Device-rdb-function getRdbStore(context: Context, config: StoreConfig, version: number): Promise<RdbStore>-End-->

**System capability:** SystemCapability.DistributedDataManager.RelationalStore.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| context | [Context](../../apis-arkui/arkts-components/arkts-arkui-context-t.md) | Yes | Application context.<br>For details about the application context of the FA model, see [Context](../../apis-ability-kit/arkts-apis/arkts-ability-context-context-depr-i.md).<br>For details about the application context of the stage model, see [Context](../../apis-ability-kit/arkts-apis/arkts-ability-context-context-depr-i.md). |
| config | [StoreConfig](arkts-arkdata-relationalstore-storeconfig-i.md) | Yes | Configuration of the RDB store. |
| version | number | Yes | RDB store version.<br>Currently, automatic RDB upgrades and downgrades performed based on **version** is not supported. |

**Return value:**

| Type | Description |
| --- | --- |
| [Promise](../../apis-na/arkts-apis/arkts-na-lib-es5-promise-i.md)<RdbStore> | Promise used to return the **RdbStore** object. |

