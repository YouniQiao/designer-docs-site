# NativeMediaPlayerSurfaceInfo

Implements a **NativeMediaPlayerSurfaceInfo** object to provide the surface information used for same-layer rendering [when the application takes over the media playback of the web page] (../../../../reference/apis-arkweb/arkts-basic-components-web-attributes.md#enablenativemediaplayer12). > **NOTE** > > - The sample effect is subject to the actual device.

**Since:** 12

**System capability:** SystemCapability.Web.Webview.Core

## Modules to Import

```TypeScript
import { webview } from '@ohos.web.webview';
```

## id

```TypeScript
id: string
```

Surface ID, which is the **psurfaceid** of the native image used for rendering at the same layer. For details, see [NativeEmbedDataInfo](./arkts-basic-components-web-i.md#nativeembeddatainfo11).

**Type:** string

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.Web.Webview.Core

## rect

```TypeScript
rect: RectEvent
```

Position of the surface.

**Type:** RectEvent

**Since:** 12

**System capability:** SystemCapability.Web.Webview.Core

