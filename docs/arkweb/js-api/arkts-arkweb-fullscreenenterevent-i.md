# FullScreenEnterEvent

Provides details about the event that the **Web** component to enter the full-screen mode.

**Since:** 12

**System capability:** SystemCapability.Web.Webview.Core

## handler

```TypeScript
handler: FullScreenExitHandler
```

Function handle for exiting full screen mode.

**Type:** FullScreenExitHandler

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.Web.Webview.Core

## videoHeight

```TypeScript
videoHeight?: number
```

Video height, in px. If the element that enters fulls screen mode is a **<video>** element, the value represents its
height; if the element that enters fulls screen mode contains a **<video>** element, the value represents the height
of the first sub-video element; in other cases, the value is **0**.

**Type:** number

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.Web.Webview.Core

## videoWidth

```TypeScript
videoWidth?: number
```

Video width, in px. If the element that enters fulls screen mode is a **<video>** element, the value represents its
width; if the element that enters fulls screen mode contains a **<video>** element, the value represents the width
of the first sub-video element; in other cases, the value is **0**.

**Type:** number

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.Web.Webview.Core

