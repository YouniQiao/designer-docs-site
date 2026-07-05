# InsertFn

```TypeScript
type InsertFn = (uri: string, valueBucket: ValuesBucket, callback: AsyncCallback<int>) => void
```

Callback function called when inserting a data record into the database.

**Since:** 23

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.DistributedDataManager.DataShare.Provider

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| uri | string | Yes | Indicates the position where the data is to insert. |
| valueBucket | ValuesBucket | Yes | Indicates the data to insert. |
| callback | AsyncCallback&lt;int> | Yes | Returns the index of the newly inserted data record. |

