# MaximizeOptions

最大化窗口时的可选配置。

**Since:** 26.0.0

**System capability:** SystemCapability.Window.SessionManager

## Modules to Import

```TypeScript
import { window } from '@kit.ArkUI';
```

## snapshotAnimationConfig

```TypeScript
snapshotAnimationConfig?: WindowSnapshotAnimationConfig
```

截图动效的配置。如果未指定，将使用系统默认动效。 当持续时间和延迟参数都设置为0时，表示截图动效被取消。

**Type:** WindowSnapshotAnimationConfig

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Window.SessionManager

## acrossDisplayPresentation

```TypeScript
acrossDisplayPresentation?: AcrossDisplayPresentation
```

参数控制主窗口的瀑布模式策略。 该参数只能在具有折叠功能的2in1设备上正确调用。 如果在其他设备类型上调用，则没有任何效果。

**Type:** AcrossDisplayPresentation

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Window.SessionManager

## maximizePresentation

```TypeScript
maximizePresentation?: MaximizePresentation
```

窗口最大化时的布局。

**Type:** MaximizePresentation

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Window.SessionManager

