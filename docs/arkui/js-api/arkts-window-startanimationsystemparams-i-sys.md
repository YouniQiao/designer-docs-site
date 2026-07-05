# StartAnimationSystemParams

启动动画配置，仅对全屏应用生效。 不同应用间跳转场景不生效，仍保持系统默认动效。

**Since:** 20

**System capability:** SystemCapability.Window.SessionManager

**System API:** This is a system API.

## Modules to Import

```TypeScript
import { window } from '@kit.ArkUI';
```

## animationConfig

```TypeScript
animationConfig?: WindowAnimationConfig
```

窗口动画参数配置。默认动画曲线为WindowAnimationCurve.LINEAR，duration为0。

**Type:** WindowAnimationConfig

**Since:** 20

**System capability:** SystemCapability.Window.SessionManager

**System API:** This is a system API.

## type

```TypeScript
type: AnimationType
```

窗口动画类型。

**Type:** AnimationType

**Since:** 20

**System capability:** SystemCapability.Window.SessionManager

**System API:** This is a system API.

