# SwipeGestureInterface

用于触发快滑手势，滑动速度需大于速度阈值，默认最小速度为100vp/s。

**Inheritance:** SwipeGestureInterfaceextends: GestureInterface<SwipeGestureInterface>.

**Since:** 8

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## constructor

```TypeScript
(value?: { fingers?: number; direction?: SwipeDirection; speed?: number }): SwipeGestureInterface
```

继承自[GestureInterface<T>](arkts-gesture.md#GestureInterface)，设置快滑手势事件。

**Since:** 8

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | { fingers?: number; direction?: SwipeDirection; speed?: number } | No | 设置快滑事件参数。  - fingers：触发快滑的最少手指数。 默认值：1 取值范围：[1, 10]  - direction：触发快滑手势的滑动方向。 默认值：SwipeDirection.All  - speed：识别快滑的最小速度。 默认值：100VP/s 取值范围：(0, +∞) 说明： 当滑动速度的值小于等于0时，会被转化为默认值。 |

**Return value:**

| Type | Description |
| --- | --- |
| SwipeGestureInterface |  |

## constructor

```TypeScript
(options?: SwipeGestureHandlerOptions): SwipeGestureInterface
```

设置快滑手势事件。与[SwipeGesture]SwipeGestureInterface(value?: { fingers?: number; direction?: SwipeDirection; speed?: number )}相比， options参数新增了isFingerCountLimited，表示是否检查触摸屏幕的手指数量。

**Since:** 15

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| options | SwipeGestureHandlerOptions | No | 快滑事件处理器配置参数。 |

**Return value:**

| Type | Description |
| --- | --- |
| SwipeGestureInterface |  |

## onAction

```TypeScript
onAction(event: (event: GestureEvent) => void): SwipeGestureInterface
```

Swipe手势识别成功时触发回调。

**Since:** 8

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| event | (event: GestureEvent) => void | Yes | 手势事件回调函数。 |

**Return value:**

| Type | Description |
| --- | --- |
| SwipeGestureInterface |  |

