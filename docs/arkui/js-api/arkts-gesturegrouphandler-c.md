# GestureGroupHandler

手势组处理器对象类型。

**Inheritance:** GestureGroupHandlerextends: GestureHandler<GestureGroupHandler>.

**Since:** 12

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## constructor

```TypeScript
constructor(options?: GestureGroupGestureHandlerOptions)
```

手势组处理器的构造函数。

**Since:** 12

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| options | GestureGroupGestureHandlerOptions | No | 手势组处理器配置参数。 |

## onCancel

```TypeScript
onCancel(event: Callback<void>): GestureGroupHandler
```

设置手势组处理器取消回调。顺序组合手势（[GestureMode](arkts-gesturemode-e.md#GestureMode).Sequence）取消后触发回调。

**Since:** 12

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| event | Callback&lt;void> | Yes | 手势组处理器取消回调。 |

**Return value:**

| Type | Description |
| --- | --- |
| GestureGroupHandler | 返回当前手势组处理器对象。 |

