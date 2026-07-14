# @ohos.screenshot

Provides the screen capture capability.

**Since:** 12

**System capability:** SystemCapability.WindowManager.WindowManager.Core

## Modules to Import

```TypeScript
import { screenshot } from '@kit.ArkUI';
```

## Summary

### Functions

| Name | Description |
| --- | --- |
| [capture](arkts-arkui-capture-f.md#capture-1) | Takes a screenshot of the entire screen. This API uses a promise to return the result. This API allows you to take screenshots of different screens by setting various **displayId** values, but only full -screen captures are supported. The [pick](arkts-arkui-pick-f.md#pick-1) API allows you to take screenshots of a specified region. |
| [pick](arkts-arkui-pick-f.md#pick-1) | Obtains this screenshot. Currently, only the screenshot of the display whose ID is **0** can be obtained. (If a screenshot of the extended screen is needed, you can use the [capture](arkts-arkui-capture-f.md#capture-1) API.) This API uses a promise to return the result. |

<!--Del-->
### Functions（系统接口）

| Name | Description |
| --- | --- |
| [save](arkts-arkui-save-f-sys.md#save-1) | Obtains a screenshot. This API uses an asynchronous callback to return the result. |
| [save](arkts-arkui-save-f-sys.md#save-2) | Obtains a screenshot. This API uses an asynchronous callback to return the result. |
| [save](arkts-arkui-save-f-sys.md#save-3) | Obtains a screenshot. This API uses a promise to return the result. |
| [saveHdrPicture](arkts-arkui-savehdrpicture-f-sys.md#savehdrpicture-1) | Obtains a screenshot. This API uses a promise to return the result. SDR stands for Standard Dynamic Range, and HDR stands for High Dynamic Range. - If the screen contains HDR resources (even if they are partially obscured), this API returns an array with both SDR and HDR PixelMaps, regardless of whether HDR is enabled. - If there are no HDR resources, it returns an array with a single SDR PixelMap. Unlike the [save](arkts-arkui-save-f-sys.md#save-1) API, which returns a single SDR PixelMap, this API always returns an array. Additionally, this API does not support cropping, stretching, or rotating features available in the [save](arkts-arkui-save-f-sys.md#save-1) API. |
<!--DelEnd-->

### Interfaces

| Name | Description |
| --- | --- |
| [CaptureOption](arkts-arkui-captureoption-i.md) | Describes the capture options. |
| [PickInfo](arkts-arkui-pickinfo-i.md) | Describes the screenshot options. |
| [Rect](arkts-arkui-rect-i.md) | Describes the region of the screen to capture. |

<!--Del-->
### Interfaces（系统接口）

| Name | Description |
| --- | --- |
| [HdrScreenshotOptions](arkts-arkui-hdrscreenshotoptions-i-sys.md) | Describes the HDR screenshot options. |
| [ScreenshotOptions](arkts-arkui-screenshotoptions-i-sys.md) | Describes the screenshot options. |
| [Size](arkts-arkui-size-i-sys.md) | Describes the size of the screen region to capture. |
<!--DelEnd-->

<!--Del-->
### Enums（系统接口）

| Name | Description |
| --- | --- |
| [DisplayIntentType](arkts-arkui-displayintenttype-e-sys.md) | Enumerates the screenshot display intent type. |
<!--DelEnd-->

