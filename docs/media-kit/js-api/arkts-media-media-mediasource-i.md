# MediaSource

The MediaSource class defines the media data information, which is from [createMediaSourceWithUrl](arkts-media-media-createmediasourcewithurl-f.md#createmediasourcewithurl-1).

**Since:** 12

<!--Device-media-interface MediaSource--><!--Device-media-interface MediaSource-End-->

**System capability:** SystemCapability.Multimedia.Media.Core

## Modules to Import

```TypeScript
import { media } from '@kit.MediaKit';
```

<a id="enableofflinecache"></a>
## enableOfflineCache

```TypeScript
enableOfflineCache(enable: boolean): void
```

Sets whether to enable offline caching during video playback.

**Since:** 23

<!--Device-MediaSource-enableOfflineCache(enable: boolean): void--><!--Device-MediaSource-enableOfflineCache(enable: boolean): void-End-->

**System capability:** SystemCapability.Multimedia.Media.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| enable | boolean | Yes | Whether to enable offline caching during video playback. **true** to enable, **false** otherwise. |

<a id="getid"></a>
## getID

```TypeScript
getID(): string
```

Gets the identifier of the media source.

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 26.0.0.

<!--Device-MediaSource-getID(): string--><!--Device-MediaSource-getID(): string-End-->

**System capability:** SystemCapability.Multimedia.Media.Core

**Return value:**

| Type | Description |
| --- | --- |
| string | Identifier of the media source. Empty string means call failed. |

<a id="setmediaresourceloaderdelegate"></a>
## setMediaResourceLoaderDelegate

```TypeScript
setMediaResourceLoaderDelegate(resourceLoader: MediaSourceLoader): void
```

Sets a MediaSourceLoader object, which is used to help the player request media data.

**Since:** 18

**Atomic service API:** This API can be used in atomic services since API version 18.

<!--Device-MediaSource-setMediaResourceLoaderDelegate(resourceLoader: MediaSourceLoader): void--><!--Device-MediaSource-setMediaResourceLoaderDelegate(resourceLoader: MediaSourceLoader): void-End-->

**System capability:** SystemCapability.Multimedia.Media.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| resourceLoader | [MediaSourceLoader](arkts-media-media-mediasourceloader-i.md) | Yes | **MediaSourceLoader** object used to obtain media data for the player. |

<a id="setmimetype"></a>
## setMimeType

```TypeScript
setMimeType(mimeType: AVMimeTypes): void
```

Sets the MIME type to help the player process extended media sources.

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-MediaSource-setMimeType(mimeType: AVMimeTypes): void--><!--Device-MediaSource-setMimeType(mimeType: AVMimeTypes): void-End-->

**System capability:** SystemCapability.Multimedia.Media.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| mimeType | [AVMimeTypes](arkts-media-media-avmimetypes-e.md) | Yes | MIME type. |

