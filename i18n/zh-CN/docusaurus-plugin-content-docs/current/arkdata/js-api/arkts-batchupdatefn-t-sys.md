# BatchUpdateFn

```TypeScript
type BatchUpdateFn = (
  operations: Record<string, Array<UpdateOperation>>,
  callback: AsyncCallback<Record<string, Array<int>>>
) => void
```

Callback function called when updating multiple data records in the database.

**起始版本：** 23

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.DistributedDataManager.DataShare.Provider

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| operations | Record&lt;string, Array&lt;UpdateOperation>> | 是 | Indicates the data to update. |
| callback | AsyncCallback&lt;Record&lt;string, Array&lt;int>>> | 是 | Callback used to return the result. |

