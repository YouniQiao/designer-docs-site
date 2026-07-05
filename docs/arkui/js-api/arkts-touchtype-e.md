# TouchType

```TypeScript
declare enum TouchType
```

定义触摸操作的触发状态类型。

**Since:** 7

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## Down

```TypeScript
Down
```

手指按下时触发。

**Since:** 7

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## Up

```TypeScript
Up
```

手指抬起时触发。

**Since:** 7

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## Move

```TypeScript
Move
```

手指按压并在屏幕上移动时触发。

**Since:** 7

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## Cancel

```TypeScript
Cancel
```

触摸事件取消时触发。例如：1.手指按住屏幕同时点击Home键返回桌面，此时会触发Cancel；2.手指触摸过程中存在手写笔操作，手指的触摸操作会收到Cancel事件。

**Since:** 7

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## HOVER_ENTER

```TypeScript
HOVER_ENTER = 9
```

无障碍模式下，手指按下时触发。

**Since:** 20

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## HOVER_MOVE

```TypeScript
HOVER_MOVE = 10
```

无障碍模式下，触摸移动时触发。

**Since:** 20

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## HOVER_EXIT

```TypeScript
HOVER_EXIT = 11
```

无障碍模式下，抬手时触发。

**Since:** 20

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## HOVER_CANCEL

```TypeScript
HOVER_CANCEL = 12
```

无障碍模式下，取消当前触发的事件。

**Since:** 20

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

