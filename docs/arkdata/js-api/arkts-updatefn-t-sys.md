# UpdateFn

```TypeScript
type UpdateFn = (
  uri: string,
  predicates: dataSharePredicates.DataSharePredicates,
  valueBucket: ValuesBucket,
  callback: AsyncCallback<int>
) => void
```

Callback function called when updating one or more data records in the database.

**Since:** 23

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.DistributedDataManager.DataShare.Provider

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| uri | string | Yes | Indicates the database table storing the data to update. |
| predicates | dataSharePredicates.DataSharePredicates | Yes | Indicates filter criteria. If this parameter is  null, all data records will be updated by default. |
| valueBucket | ValuesBucket | Yes | Indicates the data to update. This parameter can be null. |
| callback | AsyncCallback&lt;int> | Yes | Returns the number of data records updated. |

