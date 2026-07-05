# QueryCompilationByKeywordEvent

```TypeScript
type QueryCompilationByKeywordEvent = (keyword: string) => Promise<Compilation[]>
```

The query compilation by keyword event.

**Since:** 23

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Multimedia.AVSession.AVMusicTemplate

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| keyword | string | Yes | keyword |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;Compilation[]> | (Compilation[]) returned through promise |

