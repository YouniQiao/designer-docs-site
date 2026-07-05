# deleteRdbStore

## deleteRdbStore

```TypeScript
function deleteRdbStore(context: Context, name: string, callback: AsyncCallback<void>): void
```

Deletes an RDB store. This API uses an asynchronous callback to return the result.

**起始版本：** 7

**废弃版本：** 9

**替代接口：** @ohos.data.relationalStore:relationalStore.deleteRdbStore

**系统能力：** SystemCapability.DistributedDataManager.RelationalStore.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| context | Context | 是 | Application context. For details about the application context of the FA model, see  [Context]./app/context.  For details about the application context of the stage model, see [Context]./app/context. |
| name | string | 是 | Name of the RDB store to delete. |
| callback | AsyncCallback&lt;void> | 是 | Callback used to return the result. |

## deleteRdbStore

```TypeScript
function deleteRdbStore(context: Context, name: string): Promise<void>
```

Deletes an RDB store. This API uses a promise to return the result.

**起始版本：** 7

**废弃版本：** 9

**替代接口：** @ohos.data.relationalStore:relationalStore.deleteRdbStore

**系统能力：** SystemCapability.DistributedDataManager.RelationalStore.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| context | Context | 是 | Application context. For details about the application context of the FA model, see  [Context]./app/context.  For details about the application context of the stage model, see [Context]./app/context. |
| name | string | 是 | Name of the RDB store to delete. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | Promise that returns no value. |

