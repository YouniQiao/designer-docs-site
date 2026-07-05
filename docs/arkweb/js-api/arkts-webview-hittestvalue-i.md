# HitTestValue

提供点击区域的元素信息。示例代码参考 [getLastHitTest](arkts-webview-webviewcontroller-c.md#getLastHitTest).

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

点击区域的附加参数信息。若被点击区域为图片或链接，则附加参数信息为其url地址。

**Type:** string

**Since:** 9

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Web.Webview.Core

## type

```TypeScript
type: WebHitTestType
```

当前被点击区域的元素类型。

**Type:** WebHitTestType

**Since:** 9

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Web.Webview.Core

