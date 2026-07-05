# FocusAxisEvent

焦点轴事件的对象说明，继承于[BaseEvent](arkts-baseevent-i.md#BaseEvent)。

**Inheritance:** FocusAxisEventextends: BaseEvent.

**Since:** 15

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## axisMap

```TypeScript
axisMap: Map<AxisModel, number>
```

焦点轴事件的轴值表。

**Type:** Map<AxisModel, number>

**Since:** 15

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## stopPropagation

```TypeScript
stopPropagation: Callback<void>
```

阻塞[事件冒泡](docroot://ui/arkts-interaction-basic-principles.md#事件冒泡)传递。

**Type:** Callback<void>

**Since:** 15

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

