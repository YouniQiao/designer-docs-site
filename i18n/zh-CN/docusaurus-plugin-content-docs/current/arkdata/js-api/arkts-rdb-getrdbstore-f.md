# getRdbStore

## getRdbStore

```TypeScript
function getRdbStore(context: Context, config: StoreConfig, version: number, callback: AsyncCallback<RdbStore>): void
```

Obtains an RDB store. This API uses an asynchronous callback to return the result. You can set parameters for the RDB store based on service requirements and call APIs to perform data operations.

**起始版本：** 7

**废弃版本：** 9

**替代接口：** @ohos.data.relationalStore:relationalStore.getRdbStore

**系统能力：** SystemCapability.DistributedDataManager.RelationalStore.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| context | Context | 是 | Application context.  For details about the application context of the FA model, see [Context]./app/context.  For details about the application context of the stage model, see [Context]./app/context. |
| config | StoreConfig | 是 | Configuration of the RDB store. |
| version | number | 是 | RDB store version. Currently, automatic RDB upgrades and downgrades performed based  on version is not supported. |
| callback | AsyncCallback&lt;RdbStore> | 是 | Callback used to return the RDB store obtained. |

## getRdbStore

```TypeScript
function getRdbStore(context: Context, config: StoreConfig, version: number): Promise<RdbStore>
```

Obtains an RDB store. This API uses a promise to return the result. You can set parameters for the RDB store based on service requirements and call APIs to perform data operations.

**起始版本：** 7

**废弃版本：** 9

**系统能力：** SystemCapability.DistributedDataManager.RelationalStore.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| context | Context | 是 | Application context. For details about the application context of the FA model, see  [Context]./app/context.  For details about the application context of the stage model, see [Context]./app/context. |
| config | StoreConfig | 是 | Configuration of the RDB store. |
| version | number | 是 | RDB store version. Currently, automatic RDB upgrades and downgrades performed based  on version is not supported. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;RdbStore> | Promise used to return the RdbStore object. |

