# UIGestureEvent

用于设置组件绑定的手势。

**Since:** 12

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## addGesture

```TypeScript
addGesture<T>(gesture: GestureHandler<T>, priority?: GesturePriority, mask?: GestureMask): void
```

添加手势。

**Since:** 12

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| gesture | GestureHandler&lt;T> | Yes | 手势处理器对象。 |
| priority | GesturePriority | No | 绑定手势的优先级。 默认值：GesturePriority.NORMAL |
| mask | GestureMask | No | 事件响应设置。 默认值：GestureMask.Normal |

## addParallelGesture

```TypeScript
addParallelGesture<T>(gesture: GestureHandler<T>, mask?: GestureMask): void
```

绑定可与子组件手势同时触发的手势。

**Since:** 12

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| gesture | GestureHandler&lt;T> | Yes | 手势处理器对象。 |
| mask | GestureMask | No | 事件响应设置。 默认值：GestureMask.Normal |

## clearGestures

```TypeScript
clearGestures(): void
```

清除该组件上通过modifier绑定的所有手势。

**Since:** 12

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## removeGestureByTag

```TypeScript
removeGestureByTag(tag: string): void
```

移除该组件上通过modifier绑定的设置为指定标志的手势。

**Since:** 12

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| tag | string | Yes | 手势处理器标志。 |

