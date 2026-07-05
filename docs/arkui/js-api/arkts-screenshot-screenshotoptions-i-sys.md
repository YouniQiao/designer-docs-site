# ScreenshotOptions

设置截取图像的信息。

**Since:** 7

**System capability:** SystemCapability.WindowManager.WindowManager.Core

**System API:** This is a system API.

## Modules to Import

```TypeScript
import { screenshot } from '@kit.ArkUI';
```

## isCaptureFullOfScreen

```TypeScript
isCaptureFullOfScreen?: boolean
```

表示是否截取当前Screen上的所有display。对于一个Screen上有多个display的场景，为true表示截取整个Screen，false则只截取displayId所在逻辑屏的区域，默认值为false。

**Type:** boolean

**Since:** 20

**System capability:** SystemCapability.WindowManager.WindowManager.Core

**System API:** This is a system API.

## rotation

```TypeScript
rotation?: int
```

表示截取图像后要旋转的角度，当前仅支持输入值为0，默认值为0。

**Type:** int

**Since:** 7

**System capability:** SystemCapability.WindowManager.WindowManager.Core

**System API:** This is a system API.

## imageSize

```TypeScript
imageSize?: Size
```

表示截取图像的区域，不传值默认返回displayId所在逻辑屏的区域。

**Type:** Size

**Since:** 7

**System capability:** SystemCapability.WindowManager.WindowManager.Core

**System API:** This is a system API.

## displayId

```TypeScript
displayId?: long
```

表示截取图像的显示设备[Display](arkts-display-displaystate-e.md#DisplayState)的ID号，该参数应为整数。

**Type:** long

**Since:** 8

**System capability:** SystemCapability.WindowManager.WindowManager.Core

**System API:** This is a system API.

## isNotificationNeeded

```TypeScript
isNotificationNeeded?: boolean
```

表示截取图像之后是否发送截屏通知，true表示发送截屏通知，false表示不发送截屏通知，默认值为true。截屏通知可以通过 [captureStatusChange](arkts-display-on-f.md#on-6)接口 监听。

**Type:** boolean

**Since:** 14

**System capability:** SystemCapability.WindowManager.WindowManager.Core

**System API:** This is a system API.

## screenRect

```TypeScript
screenRect?: Rect
```

表示截取图像的区域，不传值默认返回displayId所在逻辑屏的区域。

**Type:** Rect

**Since:** 7

**System capability:** SystemCapability.WindowManager.WindowManager.Core

**System API:** This is a system API.

