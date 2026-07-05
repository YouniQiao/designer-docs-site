# MediaSource

媒体数据信息。来源于 [createMediaSourceWithUrl](arkts-media-createmediasourcewithurl-f.md#createMediaSourceWithUrl-1) 。 > **说明：** > > - 本Interface首批接口从API version 12开始支持。

**Since:** 12

**System capability:** SystemCapability.Multimedia.Media.Core

## Modules to Import

```TypeScript
import { media } from '@kit.MediaKit';
```

## enableOfflineCache

```TypeScript
enableOfflineCache(enable: boolean): void
```

是否在视频播放期间启用离线缓存。

**Since:** 23

**System capability:** SystemCapability.Multimedia.Media.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| enable | boolean | Yes | 是否在视频播放期间启用离线缓存。true表示启用，false表示不启用。 |

## getID

```TypeScript
getID(): string
```

获取媒体源的标识符。

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Multimedia.Media.Core

**Return value:**

| Type | Description |
| --- | --- |
| string | 返回媒体源的标识符，失败时返回空字符串。 |

## getTrackSelectionFilter

```TypeScript
getTrackSelectionFilter(): TrackSelectionFilter | undefined
```

Obtains the configured audio and video feature filtering values.

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Multimedia.Media.Core

**Return value:**

| Type | Description |
| --- | --- |
| TrackSelectionFilter | If the TrackSelectionFilter object exists,  the TrackSelectionFilter object is returned. Otherwise, the TrackSelectionFilter object is returned. |

## setMediaResourceLoaderDelegate

```TypeScript
setMediaResourceLoaderDelegate(resourceLoader: MediaSourceLoader): void
```

设置MediaSourceLoader，帮助播放器请求媒体数据。

**Since:** 18

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Multimedia.Media.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| resourceLoader | MediaSourceLoader | Yes | 应用实现的媒体数据获取接口，方便播放器获取数据。 |

## setMimeType

```TypeScript
setMimeType(mimeType: AVMimeTypes): void
```

设置媒体MIME类型，以帮助播放器处理扩展的媒体源。

**Since:** 12

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Multimedia.Media.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| mimeType | AVMimeTypes | Yes | 媒体MIME类型。 |

## setTrackSelectionFilter

```TypeScript
setTrackSelectionFilter(filter: TrackSelectionFilter): void
```

Set the audio and video feature filtering items of the MediaSource, After the user defines the audio and video filtering items of the MediaSource, When playing or downloading MediaSource data offline, Preferentially perform a corresponding operation in the filtering feature.

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Multimedia.Media.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| filter | TrackSelectionFilter | Yes | Specifies the audio and video features of the pre-downloaded streaming  media. |

