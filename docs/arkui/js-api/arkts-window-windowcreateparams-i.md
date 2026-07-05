# WindowCreateParams

应用启动时的窗口参数配置。

**Since:** 20

**System capability:** SystemCapability.Window.SessionManager

## Modules to Import

```TypeScript
import { window } from '@kit.ArkUI';
```

## needAnimation

```TypeScript
needAnimation?: boolean
```

窗口拉起时是否需要动画 默认跟随产品配置，例如PC设备上拉起主窗默认有动画，Phone上拉起子窗默认无动画。当产品支持配置，跟随开发者设置的值。

**Type:** boolean

**Since:** 23

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Window.SessionManager

## systemAnimationParams

```TypeScript
systemAnimationParams?: StartAnimationSystemParams
```

启动动画配置，仅对全屏应用生效。 不同应用间跳转场景不生效，仍保持系统默认动效。

**Type:** StartAnimationSystemParams

**Since:** 20

**System capability:** SystemCapability.Window.SessionManager

**System API:** This is a system API.

## isWindowLimitsForcible

```TypeScript
isWindowLimitsForcible?: boolean
```

是否覆盖系统窗口尺寸限制。 如果为true，则当前主窗口可以设置超出系统限制的窗口尺寸限制。

**Type:** boolean

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Window.SessionManager

**System API:** This is a system API.

## animationParams

```TypeScript
animationParams?: StartAnimationParams
```

The params of start animation

**Type:** StartAnimationParams

**Since:** 20

**System capability:** SystemCapability.Window.SessionManager

