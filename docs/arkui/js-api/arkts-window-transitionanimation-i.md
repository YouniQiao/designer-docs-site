# TransitionAnimation

窗口转场动画配置。

**Since:** 20

**System capability:** SystemCapability.Window.SessionManager

## Modules to Import

```TypeScript
import { window } from '@kit.ArkUI';
```

## opacity

```TypeScript
opacity?: double
```

不透明度，转场动画作用的窗口属性，值为0时窗口完全透明，默认值为1.0。当动画类型为WindowTransitionType.DESTROY时，代表动画终点的不透明度。取值范围0~1.0，在动画结束时恢复为1.0。

**Type:** double

**Since:** 20

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Window.SessionManager

## config

```TypeScript
config: WindowAnimationConfig
```

本次转场动画配置。

**Type:** WindowAnimationConfig

**Since:** 20

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Window.SessionManager

