# FullScreenEnterEvent

Web组件进入全屏回调事件的详情。

**Since:** 12

**System capability:** SystemCapability.Web.Webview.Core

## videoWidth

```TypeScript
videoWidth?: number
```

视频的宽度，单位：px。如果进入全屏的是 `<video>` 元素，表示其宽度；如果进入全屏的子元素中包含 `<video>` 元素，表示第一个子视频元素的宽度；其他情况下，为0。

**Type:** number

**Since:** 12

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Web.Webview.Core

## handler

```TypeScript
handler: FullScreenExitHandler
```

用于退出全屏模式的函数句柄。

**Type:** FullScreenExitHandler

**Since:** 12

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Web.Webview.Core

## videoHeight

```TypeScript
videoHeight?: number
```

视频的高度，单位：px。如果进入全屏的是 `<video>` 元素，表示其高度；如果进入全屏的子元素中包含 `<video>` 元素，表示第一个子视频元素的高度；其他情况下，为0。

**Type:** number

**Since:** 18

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Web.Webview.Core

