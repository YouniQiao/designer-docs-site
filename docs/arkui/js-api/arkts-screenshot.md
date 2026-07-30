# @ohos.screenshot

Provides the screen capture capability.

**Since:** 12

<!--Device-unnamed-declare namespace screenshot--><!--Device-unnamed-declare namespace screenshot-End-->

**System capability:** SystemCapability.WindowManager.WindowManager.Core

## Modules to Import

```TypeScript
import { screenshot } from '@kit.ArkUI';
```

## Summary

### Functions

| Name | Description |
| --- | --- |
| [capture](arkts-arkui-screenshot-capture-f.md#capture) | Takes a screenshot of the entire screen. This API uses a promise to return the result.  This API allows you to take screenshots of different screens by setting various **displayId** values, but only full  -screen captures are supported. The [pick](arkts-arkui-screenshot-pick-f.md#pick) API allows you to take screenshots of a specified region. |
| [pick](arkts-arkui-screenshot-pick-f.md#pick) | Obtains this screenshot. Currently, only the screenshot of the display whose ID is **0** can be obtained. (If a screenshot of the extended screen is needed, you can use the [capture](arkts-arkui-screenshot-capture-f.md#capture) API.) This API uses a promise to return the result. |

<!--Del-->
### Functions（系统接口）

| Name | Description |
| --- | --- |
| [save](arkts-arkui-screenshot-save-f-sys.md#save) | Obtains a screenshot. This API uses an asynchronous callback to return the result. |
| [save](arkts-arkui-screenshot-save-f-sys.md#save-1) | Obtains a screenshot. This API uses an asynchronous callback to return the result. |
| [save](arkts-arkui-screenshot-save-f-sys.md#save-2) | Obtains a screenshot. This API uses a promise to return the result. |
| [saveHdrPicture](arkts-arkui-screenshot-savehdrpicture-f-sys.md#savehdrpicture) | Obtains a screenshot. This API uses a promise to return the result. SDR stands for Standard Dynamic Range, and HDR stands for High Dynamic Range.  - If the screen contains HDR resources (even if they are partially obscured), this API returns an array with both SDR and HDR PixelMaps, regardless of whether HDR is enabled.  - If there are no HDR resources, it returns an array with a single SDR PixelMap. Unlike the [save](arkts-arkui-screenshot-save-f-sys.md#save) API, which returns a single SDR PixelMap, this API always returns an array. Additionally, this API does not support cropping,stretching, or rotating features available in the [save](arkts-arkui-screenshot-save-f-sys.md#save) API. |
<!--DelEnd-->

### Interfaces

| Name | Description |
| --- | --- |
| [CaptureOption](arkts-arkui-screenshot-captureoption-i.md) | Describes the capture options. |
| [PickInfo](arkts-arkui-screenshot-pickinfo-i.md) | Describes the screenshot options. |
| [Rect](arkts-arkui-screenshot-rect-i.md) | Describes the region of the screen to capture. |

<!--Del-->
### Interfaces（系统接口）

| Name | Description |
| --- | --- |
| [HdrScreenshotOptions](arkts-arkui-screenshot-hdrscreenshotoptions-i-sys.md) | Describes the HDR screenshot options. |
| [ScreenshotOptions](arkts-arkui-screenshot-screenshotoptions-i-sys.md) | Describes the screenshot options. |
| [Size](arkts-arkui-screenshot-size-i-sys.md) | Describes the size of the screen region to capture. |
<!--DelEnd-->

<!--Del-->
### Enums（系统接口）

| Name | Description |
| --- | --- |
| [DisplayIntentType](arkts-arkui-screenshot-displayintenttype-e-sys.md) | Enumerates the screenshot display intent type. |
<!--DelEnd-->

