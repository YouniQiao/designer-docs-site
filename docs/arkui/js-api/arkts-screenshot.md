# @ohos.screenshot

本模块提供屏幕截图的能力。

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
| [capture](arkts-screenshot-capture-f.md#capture-1) | 获取屏幕全屏截图，使用Promise异步回调。 此接口可以通过设置不同的displayId截取不同屏幕的截图，且只能截取全屏；[pick]{@link screenshot.pick}接口可实现区域截屏。 |
| [pick](arkts-screenshot-pick-f.md#pick-1) | 获取屏幕截图，当前仅支持获取displayId为0的屏幕截图（如果需要对扩展屏截图，可以通过[capture]{@link screenshot.capture}接口实现），使用Promise异步回调。 |
| <!--DelRow-->[save](arkts-screenshot-save-f-sys.md#save-1) | 获取屏幕截图，使用callback异步回调。 |
| <!--DelRow-->[save](arkts-screenshot-save-f-sys.md#save-2) | 获取屏幕截图，使用callback异步回调。 |
| <!--DelRow-->[save](arkts-screenshot-save-f-sys.md#save-3) | 获取屏幕截图，使用Promise异步回调。 |
| <!--DelRow-->[saveHdrPicture](arkts-screenshot-savehdrpicture-f-sys.md#saveHdrPicture-1) | 获取屏幕截图，使用Promise异步回调。SDR为标准动态范围图，HDR为高动态范围图。 - 当物理屏存在HDR资源（包括HDR资源被遮挡）时，无论HDR是否开启，该接口返回一个包含SDR和HDR的PixelMap数组。 - 当物理屏不存在HDR资源时，与[save]{@link screenshot.save(options: ScreenshotOptions, callback: AsyncCallback<image.PixelMap>)} 接口返回一个SDR的PixelMap不同，该接口返回包含一个SDR的PixelMap数组。同时该接口不具备 [save]{@link screenshot.save(options: ScreenshotOptions, callback: AsyncCallback<image.PixelMap>)}接口的裁剪、拉伸、旋转功能。 |

### Interfaces

| Name | Description |
| --- | --- |
| [CaptureOption](arkts-screenshot-captureoption-i.md) | 设置截取图像的信息。 |
| <!--DelRow-->[HdrScreenshotOptions](arkts-screenshot-hdrscreenshotoptions-i-sys.md) | 设置截取HDR图像的信息。 |
| [PickInfo](arkts-screenshot-pickinfo-i.md) | 截取图像的信息。 |
| [Rect](arkts-screenshot-rect-i.md) | 表示截取图像的区域。 |
| <!--DelRow-->[ScreenshotOptions](arkts-screenshot-screenshotoptions-i-sys.md) | 设置截取图像的信息。 |
| <!--DelRow-->[Size](arkts-screenshot-size-i-sys.md) | 表示截取图像的大小。 |

### Enums

| Name | Description |
| --- | --- |
| <!--DelRow-->[DisplayIntentType](arkts-screenshot-displayintenttype-e-sys.md) | 枚举截图显示意图类型。 |

