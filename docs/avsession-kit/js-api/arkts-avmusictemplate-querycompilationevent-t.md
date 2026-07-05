# QueryCompilationEvent

```TypeScript
type QueryCompilationEvent = (compilationId: string, pageIndex: int) => Promise<PageMediaEntity>
```

The query compilation event.

**Since:** 23

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Multimedia.AVSession.AVMusicTemplate

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| compilationId | string | Yes | compilation id |
| pageIndex | int | Yes | page index |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;PageMediaEntity> | (PageMediaEntity) returned through promise |

