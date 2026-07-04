# DownloadMediaEntityEvent

```TypeScript
type DownloadMediaEntityEvent = (controlType: DownloadControlType, mediaEntity: MediaEntity) => Promise<OperResult>
```

The download media entity event.

**Since:** 23

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.Multimedia.AVSession.AVMusicTemplate

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| controlType | DownloadControlType | Yes | control type |
| mediaEntity | MediaEntity | Yes | media entity |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;OperResult&gt; | (OperResult) returned through promise |

