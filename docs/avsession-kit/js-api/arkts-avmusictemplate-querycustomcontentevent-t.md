# QueryCustomContentEvent

```TypeScript
type QueryCustomContentEvent = (queryType: CustomType[]) => Promise<CustomElement>
```

The query custom content event.

**Since:** 23

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Multimedia.AVSession.AVMusicTemplate

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| queryType | CustomType[] | Yes | query type |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;CustomElement> | (CustomElement) returned through promise |

