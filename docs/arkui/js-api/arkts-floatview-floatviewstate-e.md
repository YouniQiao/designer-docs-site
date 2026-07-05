# FloatViewState

```TypeScript
enum FloatViewState
```

标准悬浮窗状态的枚举。

**Since:** 26.0.0

**System capability:** SystemCapability.Window.SessionManager

## STARTED

```TypeScript
STARTED = 1
```

标准悬浮窗已启动并显示。

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Window.SessionManager

## HIDDEN

```TypeScript
HIDDEN = 2
```

标准悬浮窗已隐藏。上滑进入多任务界面时触发、使用 [setFloatViewVisibilityInApp]floatView.FloatViewController.setFloatViewVisibilityInApp接口设置了应用在前台时隐藏标准悬浮窗且 应用处于前台时触发。

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Window.SessionManager

## STOPPED

```TypeScript
STOPPED = 3
```

标准悬浮窗已停止。

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Window.SessionManager

## IN_SIDEBAR

```TypeScript
IN_SIDEBAR = 4
```

标准悬浮窗在侧边栏中。

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Window.SessionManager

## IN_FLOATING_BALL

```TypeScript
IN_FLOATING_BALL = 5
```

标准悬浮窗切换为闪控球。

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Window.SessionManager

## ERROR

```TypeScript
ERROR = 6
```

标准悬浮窗发生异常。

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Window.SessionManager

