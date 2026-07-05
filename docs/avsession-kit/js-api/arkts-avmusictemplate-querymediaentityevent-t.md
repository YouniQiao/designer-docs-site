# QueryMediaEntityEvent

```TypeScript
type QueryMediaEntityEvent = (params: QueryMediaEntityParam) => Promise<PageMediaEntity>
```

The query media entity event.

**Since:** 23

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Multimedia.AVSession.AVMusicTemplate

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| params | QueryMediaEntityParam | Yes | query params |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;PageMediaEntity> | (PageMediaEntity) returned through promise |

