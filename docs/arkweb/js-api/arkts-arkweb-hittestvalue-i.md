# HitTestValue

Provides the element information of the area being clicked. For the sample code, see
[getLastHitTest](arkts-arkweb-webviewcontroller-c.md#getlasthittest-1).

**Since:** 9

**System capability:** SystemCapability.Web.Webview.Core

## Modules to Import

```TypeScript
import { webview } from '@kit.ArkWeb';
```

## extra

```TypeScript
extra: string
```

Extra information of the area being clicked. If the area being clicked is an image or a link, the extra
information is the URL of the image or link.

**Type:** string

**Since:** 9

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.Web.Webview.Core

## type

```TypeScript
type: WebHitTestType
```

Element type of the area being clicked.

**Type:** WebHitTestType

**Since:** 9

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.Web.Webview.Core

