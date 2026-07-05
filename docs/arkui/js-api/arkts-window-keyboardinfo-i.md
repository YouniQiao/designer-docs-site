# KeyboardInfo

软键盘窗口信息。

**Since:** 18

**System capability:** SystemCapability.Window.SessionManager

## Modules to Import

```TypeScript
import { window } from '@kit.ArkUI';
```

## beginRect

```TypeScript
beginRect: Rect
```

动画开始前软键盘的位置和大小。

**Type:** Rect

**Since:** 18

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Window.SessionManager

## animated

```TypeScript
animated?: boolean
```

当前是否有显示/隐藏动画，true表示有动画，false表示没有。

**Type:** boolean

**Since:** 20

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Window.SessionManager

## config

```TypeScript
config?: WindowAnimationConfig
```

动画配置信息。

**Type:** WindowAnimationConfig

**Since:** 20

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Window.SessionManager

## endRect

```TypeScript
endRect: Rect
```

动画结束后软键盘的位置和大小。

**Type:** Rect

**Since:** 18

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Window.SessionManager

