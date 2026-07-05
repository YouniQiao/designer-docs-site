# BatchInsertFn

```TypeScript
type BatchInsertFn = (uri: string, valueBuckets: Array<ValuesBucket>, callback: AsyncCallback<int>) => void
```

Callback function called when inserting multiple data records into the database.

**起始版本：** 23

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.DistributedDataManager.DataShare.Provider

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| uri | string | 是 | Indicates the position where the data is to insert. |
| valueBuckets | Array&lt;ValuesBucket> | 是 | Indicates the data to insert. |
| callback | AsyncCallback&lt;int> | 是 | Returns the number of data records inserted. |

