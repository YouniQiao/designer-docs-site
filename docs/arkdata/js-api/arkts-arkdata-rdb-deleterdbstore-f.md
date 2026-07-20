# deleteRdbStore

## deleteRdbStore

```TypeScript
function deleteRdbStore(context: Context, name: string, callback: AsyncCallback<void>): void
```

Deletes an RDB store. This API uses an asynchronous callback to return the result.

**Since:** 7

**Deprecated since:** 9

**Substitutes:** [deleteRdbStore](arkts-arkdata-relationalstore-deleterdbstore-f.md#deleterdbstore-1)

<!--Device-rdb-function deleteRdbStore(context: Context, name: string, callback: AsyncCallback<void>): void--><!--Device-rdb-function deleteRdbStore(context: Context, name: string, callback: AsyncCallback<void>): void-End-->

**System capability:** SystemCapability.DistributedDataManager.RelationalStore.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| context | [Context](../../apis-arkui/arkts-components/arkts-arkui-context-t.md) | Yes | Application context.<br>For details about the application context of the FA model, see [Context](../../apis-ability-kit/arkts-apis/arkts-ability-context-context-depr-i.md).<br>For details about the application context of the stage model, see [Context](../../apis-ability-kit/arkts-apis/arkts-ability-context-context-depr-i.md). |
| name | string | Yes | Name of the RDB store to delete. |
| callback | [AsyncCallback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-asynccallback-i.md)<void> | Yes | Callback used to return the result. |


## deleteRdbStore

```TypeScript
function deleteRdbStore(context: Context, name: string): Promise<void>
```

Deletes an RDB store. This API uses a promise to return the result.

**Since:** 7

**Deprecated since:** 9

**Substitutes:** [deleteRdbStore](arkts-arkdata-relationalstore-deleterdbstore-f.md#deleterdbstore-1)

<!--Device-rdb-function deleteRdbStore(context: Context, name: string): Promise<void>--><!--Device-rdb-function deleteRdbStore(context: Context, name: string): Promise<void>-End-->

**System capability:** SystemCapability.DistributedDataManager.RelationalStore.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| context | [Context](../../apis-arkui/arkts-components/arkts-arkui-context-t.md) | Yes | Application context.<br>For details about the application context of the FA model, see [Context](../../apis-ability-kit/arkts-apis/arkts-ability-context-context-depr-i.md).<br>For details about the application context of the stage model, see [Context](../../apis-ability-kit/arkts-apis/arkts-ability-context-context-depr-i.md). |
| name | string | Yes | Name of the RDB store to delete. |

**Return value:**

| Type | Description |
| --- | --- |
| [Promise](../../apis-na/arkts-apis/arkts-na-lib-es5-promise-i.md)<void> | Promise that returns no value. |

