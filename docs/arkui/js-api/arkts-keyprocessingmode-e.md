# KeyProcessingMode

```TypeScript
declare enum KeyProcessingMode
```

设置按键事件处理的优先级。

**Since:** 15

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## FOCUS_NAVIGATION

```TypeScript
FOCUS_NAVIGATION = 0
```

默认值，当前组件不消费按键时，tab/方向键优先在当前容器内走焦。

**Since:** 15

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## ANCESTOR_EVENT

```TypeScript
ANCESTOR_EVENT = 1
```

当前组件不消费按键时，tab/方向键优先冒泡给父组件。

**Since:** 15

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

