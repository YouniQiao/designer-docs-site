# @ohos.window.floatingBall

This module provides essential functionalities for floating balls. It lets you check whether the device supports
floating balls and create a controller to start, update, or stop them. It is ideal for tasks like comparing prices,
searching for answers, or grabbing orders. The floating ball appears as a floating widget above other application,
quickly showing important information.

> **NOTE**
>
> - For the system capability SystemCapability.Window.SessionManager, use
> [canIUse()](arkts-arkui-global-caniuse-f.md#caniuse-1) to check whether the device supports this system
> capability and the corresponding APIs.

**Since:** 20

**System capability:** SystemCapability.Window.SessionManager

## Modules to Import

```TypeScript
import { floatingBall } from '@kit.ArkUI';
```

## Summary

### Functions

| Name | Description |
| --- | --- |
| [create](arkts-arkui-create-f.md#create-1) | Creates a floating ball controller. This API uses a promise to return the result. |
| [isFloatingBallEnabled](arkts-arkui-isfloatingballenabled-f.md#isfloatingballenabled-1) | Checks whether the device supports floating balls. |

### Interfaces

| Name | Description |
| --- | --- |
| [FloatingBallConfiguration](arkts-arkui-floatingballconfiguration-i.md) | Describes the parameters for creating a floating ball controller. |
| [FloatingBallController](arkts-arkui-floatingballcontroller-i.md) | Implements a floating ball controller instance, which is used to start, update, and stop floating balls, andregister callbacks.Before calling any of the following APIs, you must use [floatingBall.create()](arkts-arkui-create-f.md#create-1) to createa floating ball controller instance. |
| [FloatingBallParams](arkts-arkui-floatingballparams-i.md) | Describes the parameters for starting and updating the floating ball. |
| [FloatingBallWindowInfo](arkts-arkui-floatingballwindowinfo-i.md) | Describes the floating ball window information. |

### Enums

| Name | Description |
| --- | --- |
| [FloatingBallState](arkts-arkui-floatingballstate-e.md) | Enumerates the lifecycle states of the floating ball. |
| [FloatingBallTemplate](arkts-arkui-floatingballtemplate-e.md) | Enumerates the types of the floating ball template. |
| [FloatingBallTextUpdateAnimationType](arkts-arkui-floatingballtextupdateanimationtype-e.md) | Enumerates the animation types used when the floating ball text is updated. |

