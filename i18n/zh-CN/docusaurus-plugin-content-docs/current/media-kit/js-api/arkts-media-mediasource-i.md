# MediaSource

The MediaSource class defines the media data information, which is from [createMediaSourceWithUrl](arkts-media-createmediasourcewithurl-f.md#createMediaSourceWithUrl-1).

**起始版本：** 12

**系统能力：** SystemCapability.Multimedia.Media.Core

## 导入模块

```TypeScript
import { media } from '@kit.MediaKit';
```

## enableOfflineCache

```TypeScript
enableOfflineCache(enable: boolean): void
```

Sets whether to enable offline caching during video playback.

**起始版本：** 23

**系统能力：** SystemCapability.Multimedia.Media.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| enable | boolean | 是 | Whether to enable offline caching during video playback. true to enable, false  otherwise. |

## getID

```TypeScript
getID(): string
```

Gets the identifier of the media source.

**起始版本：** 26.0.0

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Multimedia.Media.Core

**返回值：**

| 类型 | 说明 |
| --- | --- |
| string | Identifier of the media source. Empty string means call failed. |

## setMediaResourceLoaderDelegate

```TypeScript
setMediaResourceLoaderDelegate(resourceLoader: MediaSourceLoader): void
```

Sets a MediaSourceLoader object, which is used to help the player request media data.

**起始版本：** 18

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Multimedia.Media.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| resourceLoader | MediaSourceLoader | 是 | MediaSourceLoader object used to obtain media data for the  player. |

## setMimeType

```TypeScript
setMimeType(mimeType: AVMimeTypes): void
```

Sets the MIME type to help the player process extended media sources.

**起始版本：** 12

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Multimedia.Media.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| mimeType | AVMimeTypes | 是 | MIME type. |

