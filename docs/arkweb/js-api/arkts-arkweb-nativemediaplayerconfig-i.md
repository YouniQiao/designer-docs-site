# NativeMediaPlayerConfig

Represents the configuration for [enabling the application to take over web page media playback](web:WebAttribute.enableNativeMediaPlayer).

**Since:** 12

**System capability:** SystemCapability.Web.Webview.Core

## enable

```TypeScript
enable: boolean
```

Whether to enable the application to take over web page media playback. The value **true** means to enable the application to take over web page media playback, and **false** means the opposite. Default value: **false**.

**Type:** boolean

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.Web.Webview.Core

## shouldOverlay

```TypeScript
shouldOverlay: boolean
```

Whether the video player's display overlays the web page content when the application takes over the web page's video player. The value **true** indicates that the video player's display overlays the web page content. This means that the height of the video layer is adjusted to cover the web page content. The value **false** indicates that the video player's display does not overlay the web page content. This means that the video player maintains its original height and is embedded within the web page. Default value: **false**.

**Type:** boolean

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.Web.Webview.Core

