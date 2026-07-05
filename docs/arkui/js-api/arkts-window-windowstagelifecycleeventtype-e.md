# WindowStageLifecycleEventType

```TypeScript
enum WindowStageLifecycleEventType
```

WindowStage生命周期的状态类型枚举。

**Since:** 20

**System capability:** SystemCapability.Window.SessionManager

## SHOWN

```TypeScript
SHOWN = 1
```

切到前台，例如点击应用图标启动，无论是首次启动还是从后台启动均会触发。

**Since:** 20

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Window.SessionManager

## RESUMED

```TypeScript
RESUMED = 2
```

前台可交互状态，例如打开应用后，应用处于前台，且可以与用户交互的状态。

**Since:** 20

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Window.SessionManager

## PAUSED

```TypeScript
PAUSED = 3
```

前台不可交互状态，例如应用在前台时，进入多任务界面，应用依然处于前台但不可以与用户交互的状态。

**Since:** 20

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Window.SessionManager

## HIDDEN

```TypeScript
HIDDEN = 4
```

切到后台，例如应用上滑退出、应用窗口关闭。

**Since:** 20

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Window.SessionManager

