# OnCameraCaptureStateChangeCallback

```TypeScript
type OnCameraCaptureStateChangeCallback = (event: CameraCaptureStateChangeInfo) => void
```

当页面摄像设备状态发生改变时触发此回调。

**Since:** 23

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| event | CameraCaptureStateChangeInfo | Yes | 网页摄像头状态发生改变时，返回原来的状态和改变后的状态。 |

