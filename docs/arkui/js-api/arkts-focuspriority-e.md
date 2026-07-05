# FocusPriority

```TypeScript
declare enum FocusPriority
```

设置组件焦点的优先级。

**Since:** 12

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## AUTO

```TypeScript
AUTO = 0
```

默认的优先级，缺省时组件的获焦优先级。

**Since:** 12

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## PRIOR

```TypeScript
PRIOR = 2000
```

容器内优先获焦的优先级。优先级高于AUTO。

**Since:** 12

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## PREVIOUS

```TypeScript
PREVIOUS = 3000
```

上一次容器整体失焦时获焦节点的优先级。优先级高于PRIOR。

**Since:** 12

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

