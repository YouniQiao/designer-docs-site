# TapGestureHandler

点击手势处理器对象类型。

**Inheritance:** TapGestureHandlerextends: GestureHandler<TapGestureHandler>.

**Since:** 12

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## constructor

```TypeScript
constructor(options?: TapGestureHandlerOptions)
```

点击手势处理器的构造函数。

**Since:** 12

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| options | TapGestureHandlerOptions | No | 点击手势处理器配置参数。 |

## onAction

```TypeScript
onAction(event: Callback<GestureEvent>): TapGestureHandler
```

设置点击手势处理器识别成功回调。

**Since:** 12

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| event | Callback&lt;GestureEvent> | Yes | 点击手势处理器识别成功回调。 |

**Return value:**

| Type | Description |
| --- | --- |
| TapGestureHandler | 返回当前点击手势处理器对象。 |

