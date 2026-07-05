# MediaInfo

[CreateNativeMediaPlayerCallback](arkts-webview-createnativemediaplayercallback-t.md#CreateNativeMediaPlayerCallback)回调函数的一个参数。包含了网页中媒 体的信息。应用可以根据这些信息来创建接管网页媒体播放的播放器。

**Since:** 12

**System capability:** SystemCapability.Web.Webview.Core

## Modules to Import

```TypeScript
import { webview } from '@kit.ArkWeb';
```

## controlsShown

```TypeScript
controlsShown: boolean
```

Whether the **controls** attribute exists in **<video>** or **<audio>**. The value **true** means that the **controls** attribute exists in **<video>** or **<audio>**, and **false** means the opposite.

**Type:** boolean

**Since:** 12

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Web.Webview.Core

## headers

```TypeScript
headers: Record<string, string>
```

HTTP headers that need to be included in the player's request for media resources.

**Type:** Record<string, string>

**Since:** 12

**System capability:** SystemCapability.Web.Webview.Core

## posterUrl

```TypeScript
posterUrl: string
```

URL of a poster.

**Type:** string

**Since:** 12

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Web.Webview.Core

## controlList

```TypeScript
controlList: string[]
```

Value of the **controlslist** attribute in **<video>** or **<audio>**.

**Type:** string[]

**Since:** 12

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Web.Webview.Core

## surfaceInfo

```TypeScript
surfaceInfo: NativeMediaPlayerSurfaceInfo
```

Surface information used for same-layer rendering.

**Type:** NativeMediaPlayerSurfaceInfo

**Since:** 12

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Web.Webview.Core

## mediaSrcList

```TypeScript
mediaSrcList: MediaSourceInfo[]
```

Source of the media. There may be multiple sources. The application needs to select a supported source to play.

**Type:** MediaSourceInfo[]

**Since:** 12

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Web.Webview.Core

## attributes

```TypeScript
attributes: Record<string, string>
```

Attributes in **<video>** or **<audio>**.

**Type:** Record<string, string>

**Since:** 12

**System capability:** SystemCapability.Web.Webview.Core

## mediaType

```TypeScript
mediaType: MediaType
```

Type of the media.

**Type:** MediaType

**Since:** 12

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Web.Webview.Core

## preload

```TypeScript
preload: Preload
```

Whether preloading is required.

**Type:** Preload

**Since:** 12

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Web.Webview.Core

## muted

```TypeScript
muted: boolean
```

Whether to mute the player. The value **true** means to mute the player, and **false** means the opposite.

**Type:** boolean

**Since:** 12

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Web.Webview.Core

## embedID

```TypeScript
embedID: string
```

ID of **<video>** or **<audio>** on the web page.

**Type:** string

**Since:** 12

**System capability:** SystemCapability.Web.Webview.Core

