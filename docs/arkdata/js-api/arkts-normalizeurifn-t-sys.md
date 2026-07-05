# NormalizeUriFn

```TypeScript
type NormalizeUriFn = (uri: string, callback: AsyncCallback<string>) => void
```

Callback function called when converting the given URI into a normalized URI.

**Since:** 23

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.DistributedDataManager.DataShare.Provider

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| uri | string | Yes | Indicates the uri to normalize. |
| callback | AsyncCallback&lt;string> | Yes | Returns the normalized uri if the data share supports URI normalization. |

