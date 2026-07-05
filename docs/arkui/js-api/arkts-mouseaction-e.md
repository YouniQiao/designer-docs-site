# MouseAction

```TypeScript
declare enum MouseAction
```

定义鼠标操作的动作类型。

**Since:** 8

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## Press

```TypeScript
Press
```

鼠标按键按下。

**Since:** 8

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## Release

```TypeScript
Release
```

鼠标按键释放。

**Since:** 8

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## Move

```TypeScript
Move
```

鼠标移动。

**Since:** 8

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## Hover

```TypeScript
Hover
```

鼠标悬浮。 **说明：** 该枚举值无效。

**Since:** 8

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## ENTER_WINDOW

```TypeScript
ENTER_WINDOW = 4
```

鼠标进入窗口。

**Since:** 23

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## LEAVE_WINDOW

```TypeScript
LEAVE_WINDOW = 5
```

鼠标离开窗口。

**Since:** 23

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## CANCEL

```TypeScript
CANCEL = 13
```

鼠标按键取消。通常在以下场景触发： 1. 组件失去焦点：当前持有焦点的组件因系统事件（如弹窗打断、应用切换）失去焦点时，会触发该动作。 2. 事件中断：鼠标操作过程中发生更高优先级事件（如系统级手势或强制回收事件流），导致当前鼠标操作被强制终止。 3. 异常状态退出：如组件销毁、渲染环境异常等场景下，未完成的鼠标事件会被标记为取消。

**Since:** 18

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

