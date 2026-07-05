# NativeMediaPlayerSurfaceInfo

[应用接管网页媒体播放功能](docroot://reference/apis-arkweb/arkts-basic-components-web-attributes.md#enablenativemediaplayer12)中 用于同层渲染的 surface 信息。 > **说明：** > > - 本Class首批接口从API version 12开始支持。 > > - 示例效果请以真机运行为准。

**Since:** 12

**System capability:** SystemCapability.Web.Webview.Core

## Modules to Import

```TypeScript
import { webview } from '@kit.ArkWeb';
```

## rect

```TypeScript
rect: RectEvent
```

surface的位置信息。

**Type:** RectEvent

**Since:** 12

**System capability:** SystemCapability.Web.Webview.Core

## id

```TypeScript
id: string
```

surface的id，用于同层渲染的NativeImage的surfaceId。 详见[NativeEmbedDataInfo]./@internal/component/ets/web:NativeEmbedDataInfo。

**Type:** string

**Since:** 12

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Web.Webview.Core

