# BatchUpdateFn

```TypeScript
type BatchUpdateFn = (
  operations: Record<string, Array<UpdateOperation>>,
  callback: AsyncCallback<Record<string, Array<int>>>
) => void
```

Callback function called when updating multiple data records in the database.

**Since:** 23

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.DistributedDataManager.DataShare.Provider

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| operations | Record&lt;string, Array&lt;UpdateOperation>> | Yes | Indicates the data to update. |
| callback | AsyncCallback&lt;Record&lt;string, Array&lt;int>>> | Yes | Callback used to return the result. |

