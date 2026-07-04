# PlayMediaEntityEvent

```TypeScript
type PlayMediaEntityEvent = (mediaEntity: MediaEntity) => Promise<void>
```

The play media entity event.

**Since:** 23

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.Multimedia.AVSession.AVMusicTemplate

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| mediaEntity | MediaEntity | Yes | media entity |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | (void) returned through promise |

