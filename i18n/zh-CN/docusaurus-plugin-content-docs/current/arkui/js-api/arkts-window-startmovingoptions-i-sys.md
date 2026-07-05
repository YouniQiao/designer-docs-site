# StartMovingOptions

Optional configuration for startMovingWithOptions.

**起始版本：** 26.0.0

**系统能力：** SystemCapability.Window.SessionManager

**系统接口：** 此接口为系统接口。

## 导入模块

```TypeScript
import { window } from '@kit.ArkUI';
```

## avoidRect

```TypeScript
avoidRect?: Rect
```

The avoidance rect of window during drag-moving. If unspecified, the system defaults to the following avoidance behavior: Free window state: 1.Main windows, subWindows and dialog windows can be dragged beyond the screen bounds and will spring back on release. 2.Other windows can be dragged beyond the screen bounds without springing back. Non-free window state: 1.System windows can be dragged beyond the main window bounds and the screen bounds without springing back. 2.When the main window is fullscreen, subWindows and dialog windows can be dragged beyond it without springing back. 3.When the main window is not fullscreen, subWindows and dialog windows can be dragged beyond it and will spring back on release.

**类型：** Rect

**起始版本：** 26.0.0

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Window.SessionManager

**系统接口：** 此接口为系统接口。

## needFocused

```TypeScript
needFocused?: boolean
```

Indicates whether the window needs to be focused when moving starts.

**类型：** boolean

**起始版本：** 26.0.0

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Window.SessionManager

**系统接口：** 此接口为系统接口。

