# TouchEvent

继承于[BaseEvent](arkts-baseevent-i.md#BaseEvent)。在非事件注入场景下，changedTouches是按屏幕刷新率重采样的点，而touches是按器件刷新率上报的点，因此changedTouches与touches的数据可 能不同。

**Inheritance:** TouchEventextends: BaseEvent.

**Since:** 7

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## getHistoricalPoints

```TypeScript
getHistoricalPoints(): Array<HistoricalPoint>
```

获取当前帧的所有历史点。不同设备每帧的触摸事件频率不同，且该接口仅能在[TouchEvent](arkts-touchevent-i.md#TouchEvent)中调用，用于获取触发 [onTouch](arkts-commonmethod-c.md#onTouch)时当前帧历史点的相关信息。[onTouch](arkts-commonmethod-c.md#onTouch)一帧通常只会调用一次，如果当前帧收到的 [TouchEvent](arkts-touchevent-i.md#TouchEvent)数目大于1，会将该帧最后一个点通过[onTouch](arkts-commonmethod-c.md#onTouch)返回，其余点作为历史点。如果多指在同一 帧上报事件，可能触发多次onTouch。

**Since:** 10

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Return value:**

| Type | Description |
| --- | --- |
| Array&lt;HistoricalPoint> | 由历史点组成的数组。 |

## touches

```TypeScript
touches: TouchObject[]
```

全部屏幕触点（多指）的信息，每个元素代表一个触点。在使用该属性时，需要校验是否为空。

**Type:** TouchObject[]

**Since:** 7

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## changedTouches

```TypeScript
changedTouches: TouchObject[]
```

发生变化而产生事件的手指信息。在使用该属性时，需要校验是否为空。

**Type:** TouchObject[]

**Since:** 7

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## eventHandleId

```TypeScript
eventHandleId?: number
```

用于事件处理的唯一标识。 取值范围：[0, +∞) **说明：** 在使用[postInputEventWithStrategy](arkts-buildernode-c.md#postInputEventWithStrategy)接口分发事件时会使用该字段，事件每分 发一次字段会增加100000。 多次使用相同的eventHandleId进行事件分发将导致事件响应异常。仅在构造事件的时候需要对此字段赋值，其余情况开发者无需处理。

**Type:** number

**Since:** 24

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## stopPropagation

```TypeScript
stopPropagation: () => void
```

阻塞[事件冒泡](docroot://ui/arkts-interaction-basic-principles.md#事件冒泡)。

**Type:** () => void

**Since:** 7

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## type

```TypeScript
type: TouchType
```

触摸事件的类型。

**Type:** TouchType

**Since:** 7

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## preventDefault

```TypeScript
preventDefault: () => void
```

阻止默认事件。 **说明：** 该接口仅支持部分组件使用，当前支持组件：[Hyperlink]hyperlink，不支持的组件在使用时会抛出异常。暂不支持异步调用和提供Modifier接口。

**Type:** () => void

**Since:** 12

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

