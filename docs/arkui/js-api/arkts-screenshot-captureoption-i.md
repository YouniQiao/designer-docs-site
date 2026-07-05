# CaptureOption

设置截取图像的信息。

**Since:** 14

**System capability:** SystemCapability.WindowManager.WindowManager.Core

## Modules to Import

```TypeScript
import { screenshot } from '@kit.ArkUI';
```

## blackWindowIds

```TypeScript
blackWindowIds?: Array<int>
```

表示截取图像时不显示的窗口ID列表，默认为空。窗口ID应为大于0的整数，目前仅[闪控球窗口](arkts-window-floatingball.md#floatingBall)生效，窗口ID为非闪控球窗口、非整数、小于 等于0、或者不存在的窗口ID时报参数错误，错误码为401。推荐使用 [getFloatingBallWindowInfo()](arkts-floatingball-floatingballcontroller-i.md#getFloatingBallWindowInfo) 方法获取闪控球窗口ID属性。

**Type:** Array<int>

**Since:** 21

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.WindowManager.WindowManager.Core

## displayId

```TypeScript
displayId?: long
```

表示截取图像的显示设备[Display](arkts-display-displaystate-e.md#DisplayState)的ID号，默认为0，该参数应为大于或等于0的整数，非整数会报参数错误。

**Type:** long

**Since:** 14

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.WindowManager.WindowManager.Core

