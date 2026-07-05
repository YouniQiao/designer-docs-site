# DragStartRequestStatus

```TypeScript
const enum DragStartRequestStatus
```

定义应用是否可以发起拖拽的枚举类型。仅在[onDragStart]CommonMethod#onDragStart调用时有效。

**Since:** 18

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## WAITING

```TypeScript
WAITING = 0
```

应用在准备数据阶段，无法发起拖拽。

**Since:** 18

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## READY

```TypeScript
READY = 1
```

应用数据准备完成，可以发起拖拽。

**Since:** 18

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

