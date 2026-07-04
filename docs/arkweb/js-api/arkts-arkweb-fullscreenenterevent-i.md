---
last_update:
  date: 2026-07-04
---

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

The intrinsic height of the video if the fullscreen element contains video element, expressed in CSS pixels, Unit: px.

**Type:** number

**Since:** 18

**Atomic service API:** This API can be used in atomic services since API version 18.

**System capability:** SystemCapability.Web.Webview.Core

## videoWidth

```TypeScript
videoWidth?: number
```

Video width, in px. If the element that enters fulls screen mode is a **<video>** element, the value represents its width; if the element that enters fulls screen mode contains a **<video>** element, the value represents the width of the first sub-video element; in other cases, the value is **0**.

**Type:** number

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.Web.Webview.Core

