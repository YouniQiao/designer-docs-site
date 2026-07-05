# QueryMediaTabContentEvent

```TypeScript
type QueryMediaTabContentEvent = (tabId: string) => Promise<MediaTabContent>
```

The query media tab content event.

**Since:** 23

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Multimedia.AVSession.AVMusicTemplate

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| tabId | string | Yes | tab id |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;MediaTabContent> | (MediaTabContent) returned through promise |

