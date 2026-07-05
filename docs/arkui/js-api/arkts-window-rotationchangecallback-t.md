# RotationChangeCallback

```TypeScript
type RotationChangeCallback<T, U> = (info: T) => U
```

旋转事件通知通用回调函数。 开发者在使用时，回调函数参数类型为[RotationChangeInfo](arkts-window-rotationchangeinfo-i.md#RotationChangeInfo)，返回值类型为 [RotationChangeResult](arkts-window-rotationchangeresult-i.md#RotationChangeResult) \| void。

**Since:** 19

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Window.SessionManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| info | T | Yes | 回调函数调用时系统传入[RotationChangeInfo](arkts-window-rotationchangeinfo-i.md#RotationChangeInfo)类型的参数。 |

**Return value:**

| Type | Description |
| --- | --- |
| U | 回调函数需要返回[RotationChangeResult](arkts-window-rotationchangeresult-i.md#RotationChangeResult) \| void类型的返回值。 |

