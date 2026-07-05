# BatchInsertFn

```TypeScript
type BatchInsertFn = (uri: string, valueBuckets: Array<ValuesBucket>, callback: AsyncCallback<int>) => void
```

Callback function called when inserting multiple data records into the database.

**Since:** 23

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.DistributedDataManager.DataShare.Provider

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| uri | string | Yes | Indicates the position where the data is to insert. |
| valueBuckets | Array&lt;ValuesBucket> | Yes | Indicates the data to insert. |
| callback | AsyncCallback&lt;int> | Yes | Returns the number of data records inserted. |

