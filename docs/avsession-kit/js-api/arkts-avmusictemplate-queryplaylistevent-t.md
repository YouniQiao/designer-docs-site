# QueryPlaylistEvent

```TypeScript
type QueryPlaylistEvent = (pageIndex: int, sort: Sort) => Promise<PageMediaEntity>
```

The query play list event.

**Since:** 23

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Multimedia.AVSession.AVMusicTemplate

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| pageIndex | int | Yes | page index |
| sort | Sort | Yes | sort |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;PageMediaEntity> | (PageMediaEntity) returned through promise |

