# WindowSnapshotAnimationConfig

窗口截图动效的配置。

**Since:** 26.0.0

**System capability:** SystemCapability.Window.SessionManager

## Modules to Import

```TypeScript
import { window } from '@kit.ArkUI';
```

## duration

```TypeScript
duration?: long
```

窗口截图淡出动效的持续时间（毫秒）。 如果未指定，则该参数默认为由系统动效上下文确定的值： 窗口状态在WindowStatusType.FLOING和WindowStatusType.FULLSCREEN之间转换为250。 400适用于所有其他屏幕截图动效场景。 此参数的有效范围为0-400。

**Type:** long

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Window.SessionManager

## delay

```TypeScript
delay?: long
```

窗口截图淡出动效开始前的延迟时间（毫秒）。 如果未指定，则该参数默认为由系统动效上下文确定的值： 窗口状态在WindowStatusType.FLOATING和WindowStatusType.FULLSCREEN之间转换为50。 350适用于所有其他截图动效场景。 此参数的有效范围为0-350。

**Type:** long

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Window.SessionManager

