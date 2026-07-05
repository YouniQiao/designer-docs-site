# LongPressGestureHandler

长按手势处理器对象类型。

**Inheritance:** LongPressGestureHandlerextends: GestureHandler<LongPressGestureHandler>.

**Since:** 12

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## constructor

```TypeScript
constructor(options?: LongPressGestureHandlerOptions)
```

长按手势处理器的构造函数。

**Since:** 12

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| options | LongPressGestureHandlerOptions | No | 长按手势处理器配置参数。 |

## onAction

```TypeScript
onAction(event: Callback<GestureEvent>): LongPressGestureHandler
```

设置长按手势处理器识别成功回调。

**Since:** 12

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| event | Callback&lt;GestureEvent> | Yes | 长按手势处理器识别成功回调。 |

**Return value:**

| Type | Description |
| --- | --- |
| LongPressGestureHandler | 返回当前长按手势处理器对象。 |

## onActionCancel

```TypeScript
onActionCancel(event: Callback<void>): LongPressGestureHandler
```

设置长按手势处理器取消回调。长按手势处理器识别成功后，接收到触摸取消事件时触发回调。不返回手势事件信息。

**Since:** 12

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| event | Callback&lt;void> | Yes | 长按手势处理器取消回调。 |

**Return value:**

| Type | Description |
| --- | --- |
| LongPressGestureHandler | 返回当前长按手势处理器对象。 |

## onActionCancel

```TypeScript
onActionCancel(event: Callback<GestureEvent>): LongPressGestureHandler
```

设置长按手势处理器取消回调。长按手势处理器识别成功后，接收到触摸取消事件时触发回调。与 [onActionCancel](arkts-longpressgesturehandler-c.md#onActionCancel)接口相比，此接口返回手势事件信息。

**Since:** 18

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| event | Callback&lt;GestureEvent> | Yes | 长按手势处理器取消回调。该回调会返回手势事件信息。 |

**Return value:**

| Type | Description |
| --- | --- |
| LongPressGestureHandler | 返回当前长按手势处理器对象。 |

## onActionEnd

```TypeScript
onActionEnd(event: Callback<GestureEvent>): LongPressGestureHandler
```

设置长按手势处理器结束回调。长按手势处理器识别成功后，最后一根手指抬起时触发回调。

**Since:** 12

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| event | Callback&lt;GestureEvent> | Yes | 长按手势处理器结束回调。 |

**Return value:**

| Type | Description |
| --- | --- |
| LongPressGestureHandler | 返回当前长按手势处理器对象。 |

