# CreateNativeMediaPlayerCallback

```TypeScript
type CreateNativeMediaPlayerCallback =
      (handler: NativeMediaPlayerHandler, mediaInfo: MediaInfo) => NativeMediaPlayerBridge
```

[onCreateNativeMediaPlayer](arkts-webview-webviewcontroller-c.md#onCreateNativeMediaPlayer) 方法的参数。一个回调函数，创建一个播放器，用于接管网页中的媒体播放。

**Since:** 12

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| handler | NativeMediaPlayerHandler | Yes | 通过该对象，将播放器的状态报告给 ArkWeb 内核。 |
| mediaInfo | MediaInfo | Yes | 网页媒体的信息。 |

**Return value:**

| Type | Description |
| --- | --- |
| NativeMediaPlayerBridge | 接管网页媒体的播放器和 ArkWeb 内核之间的一个接口类。 应用需要实现该接口类。 ArkWeb 内核通过该接口类的对象来控制应用创建的  用来接管网页媒体的播放器。 如果应用返回了 null，则表示应用不接管这个媒体的播放，由 ArkWeb 内核来播放该媒体。 |

