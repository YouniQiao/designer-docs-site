# QueryMediaEntityByKeywordEvent

```TypeScript
type QueryMediaEntityByKeywordEvent = (keyword: string, searchType: EntityType,
    pageIndex: number) => Promise<PageMediaEntity>
```

The query media entity by keyword event.

**Since:** 23

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.Multimedia.AVSession.AVMusicTemplate

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| keyword | string | Yes | keyword |
| searchType | EntityType | Yes | search type |
| pageIndex | int | Yes | page index |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;PageMediaEntity&gt; | (PageMediaEntity) returned through promise |

