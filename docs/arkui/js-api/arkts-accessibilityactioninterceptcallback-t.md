# AccessibilityActionInterceptCallback

```TypeScript
declare type AccessibilityActionInterceptCallback = (action: AccessibilityAction) => AccessibilityActionInterceptResult
```

定义在可访问性操作拦截中使用的回调类型。 action的值表示可访问性动作类型。

**Since:** 20

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**Widget capability:** This API can be used in ArkTS widgets.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| action | AccessibilityAction | Yes | 可访问性操作类型的枚举。 |

**Return value:**

| Type | Description |
| --- | --- |
| AccessibilityActionInterceptResult | 继续执行操作、中断操作或事件冒泡的结果 |

