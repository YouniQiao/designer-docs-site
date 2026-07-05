# OnMicrophoneCaptureStateChangeCallback

```TypeScript
type OnMicrophoneCaptureStateChangeCallback = (event: MicrophoneCaptureStateChangeInfo) => void
```

当页面麦克风状态发生改变时触发此回调。

**Since:** 23

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| event | MicrophoneCaptureStateChangeInfo | Yes | 网页麦克风状态发生改变时，返回原来的状态和改变后的状态。 |

