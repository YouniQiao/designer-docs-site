# QueryCompilationEvent

```TypeScript
type QueryCompilationEvent = (compilationId: string, pageIndex: number) => Promise<PageMediaEntity>
```

The query compilation event.

**Since:** 23

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.Multimedia.AVSession.AVMusicTemplate

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| compilationId | string | Yes | compilation id |
| pageIndex | int | Yes | page index |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;PageMediaEntity&gt; | (PageMediaEntity) returned through promise |

