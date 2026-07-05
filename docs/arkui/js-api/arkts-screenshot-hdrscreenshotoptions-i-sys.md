# HdrScreenshotOptions

设置截取HDR图像的信息。

**Since:** 20

**System capability:** SystemCapability.Window.SessionManager

**System API:** This is a system API.

## Modules to Import

```TypeScript
import { screenshot } from '@kit.ArkUI';
```

## isCaptureFullOfScreen

```TypeScript
isCaptureFullOfScreen?: boolean
```

表示是否截取当前物理屏上所有DisplayId对应的逻辑屏。对于一个物理屏上有多个DisplayId的场景，true表示截取整个物理屏，false表示只截取DisplayId所在区域的逻辑屏。默认值为false。

**Type:** boolean

**Since:** 20

**System capability:** SystemCapability.Window.SessionManager

**System API:** This is a system API.

## displayIntent

```TypeScript
displayIntent?: DisplayIntentType
```

截取图像的显示类型。

**Type:** DisplayIntentType

**Since:** 24

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Window.SessionManager

**System API:** This is a system API.

## displayId

```TypeScript
displayId?: long
```

表示截取图像的显示设备[Display](arkts-display-displaystate-e.md#DisplayState)的ID号，该参数应为整数。默认为0。

**Type:** long

**Since:** 20

**System capability:** SystemCapability.Window.SessionManager

**System API:** This is a system API.

## isNotificationNeeded

```TypeScript
isNotificationNeeded?: boolean
```

表示截取图像之后是否发送截屏通知，true表示发送截屏通知，false表示不发送截屏通知，默认值为true。截屏通知可以通过 [captureStatusChange](arkts-display-on-f.md#on-6)接口 监听。

**Type:** boolean

**Since:** 20

**System capability:** SystemCapability.Window.SessionManager

**System API:** This is a system API.

