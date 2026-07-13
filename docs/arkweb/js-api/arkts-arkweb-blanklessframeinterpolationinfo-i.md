# BlanklessFrameInterpolationInfo

Defines the frame interpolation state information in the scenario where the ArkWeb blankless loading
optimization is enabled.

Device behavior differences: Only the mobile phone is supported. For other devices, 801 is returned.

**Since:** 23

**System capability:** SystemCapability.Web.Webview.Core

## Modules to Import

```TypeScript
import { webview } from '@kit.ArkWeb';
```

## key

```TypeScript
key: string
```

Key value that uniquely identifies the page.

Device behavior differences: Only the mobile phone is supported. For other devices, 801 is returned.

**Type:** string

**Since:** 23

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.Web.Webview.Core

## reason

```TypeScript
reason: string
```

Reason for the frame interpolation failure.

Device behavior differences: Only the mobile phone is supported. For other devices, 801 is returned.

**Type:** string

**Since:** 23

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.Web.Webview.Core

## state

```TypeScript
state: BlanklessFrameInterpolationState
```

Current frame interpolation state.

Device behavior differences: Only the mobile phone is supported. For other devices, 801 is returned.

**Type:** BlanklessFrameInterpolationState

**Since:** 23

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.Web.Webview.Core

## timestamp

```TypeScript
timestamp: number
```

Time when a frame is interpolated or removed.

Device behavior differences: Only the mobile phone is supported. For other devices, 801 is returned.
The value must be an integer.
<br>Unit: ms.

**Type:** number

**Since:** 23

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.Web.Webview.Core

