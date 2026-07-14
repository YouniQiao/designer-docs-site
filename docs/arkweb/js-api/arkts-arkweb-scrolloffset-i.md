# ScrollOffset

Represents the current scrolling offset of a web page.

**Since:** 13

**System capability:** SystemCapability.Web.Webview.Core

## Modules to Import

```TypeScript
import { webview } from '@kit.ArkWeb';
```

## x

```TypeScript
x: number
```

Horizontal scrolling offset of a web page. The value is the difference between the x-coordinate of the left boundary of the web page and that of the left boundary of the **Web** component. When the web page is scrolled rightwards, the value is negative. When the web page is not scrolled or scrolled leftwards, the value is **0** or positive. Unit: vp

**Type:** number

**Since:** 13

**Atomic service API:** This API can be used in atomic services since API version 13.

**System capability:** SystemCapability.Web.Webview.Core

## y

```TypeScript
y: number
```

Vertical scrolling offset of a web page. The value is the difference between the y-coordinate of the upper boundary of the web page and that of the upper boundary of the **Web** component. When the web page is scrolled downwards, the value is negative. When the web page is not scrolled or scrolled upwards, the value is **0** or positive. Unit: vp

**Type:** number

**Since:** 13

**Atomic service API:** This API can be used in atomic services since API version 13.

**System capability:** SystemCapability.Web.Webview.Core

