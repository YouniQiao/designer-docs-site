# createMediaSourceWithStreamData

## createMediaSourceWithStreamData

```TypeScript
function createMediaSourceWithStreamData(streams: Array<MediaStream>): MediaSource
```

创建流媒体多码率媒体来源实例方法，当前仅支持HTTP-FLV协议格式多码率。

**Since:** 19

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Multimedia.Media.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| streams | Array&lt;MediaStream> | Yes | 可设置MediaStream数组，支持的流媒体格式：HTTP-FLV。 |

**Return value:**

| Type | Description |
| --- | --- |
| MediaSource | 返回MediaSource，用于媒体资源设置。 |

**Example**

```TypeScript
let streams : Array<media.MediaStream> = [];
streams.push({url: "http://xxx/480p.flv", width: 854, height: 480, bitrate: 800000});
streams.push({url: "http://xxx/720p.flv", width: 1280, height: 720, bitrate: 2000000});
streams.push({url: "http://xxx/1080p.flv", width: 1920, height: 1080, bitrate: 2000000});
let mediaSource : media.MediaSource = media.createMediaSourceWithStreamData(streams);

```

