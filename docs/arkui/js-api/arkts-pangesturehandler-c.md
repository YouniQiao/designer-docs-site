# PanGestureHandler

滑动手势处理器对象类型。

**Inheritance:** PanGestureHandlerextends: GestureHandler<PanGestureHandler>.

**Since:** 12

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## constructor

```TypeScript
constructor(options?: PanGestureHandlerOptions)
```

滑动手势处理器的构造函数。

**Since:** 12

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| options | PanGestureHandlerOptions | No | 滑动手势处理器配置参数。 |

## onActionCancel

```TypeScript
onActionCancel(event: Callback<void>): PanGestureHandler
```

设置滑动手势处理器取消回调。滑动手势处理器识别成功后，接收到触摸取消事件时触发回调。不返回手势事件信息。

**Since:** 12

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| event | Callback&lt;void> | Yes | 滑动手势处理器取消回调。 |

**Return value:**

| Type | Description |
| --- | --- |
| PanGestureHandler | 返回当前滑动手势处理器对象。 |

## onActionCancel

```TypeScript
onActionCancel(event: Callback<GestureEvent>): PanGestureHandler
```

设置滑动手势处理器取消回调。滑动手势处理器识别成功后，接收到触摸取消事件时触发回调。与 [onActionCancel](arkts-pangesturehandler-c.md#onActionCancel)接口相比，此接口返回手势事件信息。

**Since:** 18

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| event | Callback&lt;GestureEvent> | Yes | 滑动手势处理器取消回调。返回手势事件信息。 |

**Return value:**

| Type | Description |
| --- | --- |
| PanGestureHandler | 返回当前滑动手势处理器对象。 |

## onActionEnd

```TypeScript
onActionEnd(event: Callback<GestureEvent>): PanGestureHandler
```

设置滑动手势处理器结束回调。滑动手势处理器识别成功后，手指抬起时触发回调。

**Since:** 12

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| event | Callback&lt;GestureEvent> | Yes | 滑动手势处理器结束回调。 |

**Return value:**

| Type | Description |
| --- | --- |
| PanGestureHandler | 返回当前滑动手势处理器对象。 |

## onActionStart

```TypeScript
onActionStart(event: Callback<GestureEvent>): PanGestureHandler
```

设置滑动手势处理器识别成功回调。

**Since:** 12

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| event | Callback&lt;GestureEvent> | Yes | 滑动手势处理器识别成功回调。 |

**Return value:**

| Type | Description |
| --- | --- |
| PanGestureHandler | 返回当前滑动手势处理器对象。 |

## onActionUpdate

```TypeScript
onActionUpdate(event: Callback<GestureEvent>): PanGestureHandler
```

设置滑动手势处理器更新回调。滑动手势处理器移动过程中触发回调。

**Since:** 12

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| event | Callback&lt;GestureEvent> | Yes | 滑动手势处理器更新回调。 fingerList为多根手指时，该回调监听每次只会更新一根手指的位置信息。 |

**Return value:**

| Type | Description |
| --- | --- |
| PanGestureHandler | 返回当前滑动手势处理器对象。 |

