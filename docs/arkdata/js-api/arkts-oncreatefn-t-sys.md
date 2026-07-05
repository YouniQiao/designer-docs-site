# OnCreateFn

```TypeScript
type OnCreateFn = (want: Want, callback: AsyncCallback<void>) => void
```

Callback function called when a datashare extension ability is started for initialization.

**Since:** 23

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.DistributedDataManager.DataShare.Provider

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| want | Want | Yes | Indicates connection information about the datashare extension ability. |
| callback | AsyncCallback&lt;void> | Yes | callback function, no return value. |

