# OnFrameFetched

```TypeScript
type OnFrameFetched = (frameInfo: FrameInfo, err?: BusinessError<void>) => void
```

批量获取缩略图回调函数。

**Since:** 23

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Multimedia.Media.AVMetadataExtractor

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| frameInfo | FrameInfo | Yes | 返回的缩略图信息。 |
| err | BusinessError&lt;void> | no |  |

