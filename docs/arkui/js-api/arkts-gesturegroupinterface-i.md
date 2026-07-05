# GestureGroupInterface

手势识别组合，即两种及以上手势组合为复合手势，支持顺序识别、并发识别和互斥识别。

**Since:** 7

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## constructor

```TypeScript
(mode: GestureMode, ...gesture: GestureType[]): GestureGroupInterface
```

设置组合手势事件。

**Since:** 7

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| mode | GestureMode | Yes |  |
| gesture | GestureType[] | Yes |  |

**Return value:**

| Type | Description |
| --- | --- |
| GestureGroupInterface |  |

## onCancel

```TypeScript
onCancel(event: () => void): GestureGroupInterface
```

手势识别成功，接收到触摸取消事件，触发回调。

**Since:** 7

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| event | () => void | Yes | 手势事件回调函数。 |

**Return value:**

| Type | Description |
| --- | --- |
| GestureGroupInterface |  |

