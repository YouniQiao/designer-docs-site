# SwipeGestureHandler

快滑手势处理器对象类型。

**Inheritance:** SwipeGestureHandlerextends: GestureHandler<SwipeGestureHandler>.

**Since:** 12

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## constructor

```TypeScript
constructor(options?: SwipeGestureHandlerOptions)
```

快滑手势处理器的构造函数。

**Since:** 12

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| options | SwipeGestureHandlerOptions | No | 快滑手势处理器配置参数。 |

## onAction

```TypeScript
onAction(event: Callback<GestureEvent>): SwipeGestureHandler
```

设置快滑手势处理器识别成功回调。

**Since:** 12

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| event | Callback&lt;GestureEvent> | Yes | 快滑手势处理器识别成功回调。 |

**Return value:**

| Type | Description |
| --- | --- |
| SwipeGestureHandler | 返回当前快滑手势处理器对象。 |

