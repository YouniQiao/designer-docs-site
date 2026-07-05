# PinchGestureInterface

用于触发捏合手势，最少需要2指，最多5指，最小识别距离为5vp。在支持鼠标和键盘输入的设备上，通过“Ctrl+鼠标滚轮”也可以触发捏合手势。 > **说明：** > > 捏合手势触发成功后，抬起手指直至不再满足触发条件。再次满足条件时，可重新触发捏合手势。

**Inheritance:** PinchGestureInterfaceextends: GestureInterface<PinchGestureInterface>.

**Since:** 7

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## constructor

```TypeScript
(value?: { fingers?: number; distance?: number }): PinchGestureInterface
```

继承自[GestureInterface<T>](arkts-gesture.md#GestureInterface)，设置捏合手势事件。

**Since:** 7

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | { fingers?: number; distance?: number } | No | 设置捏合手势事件参数。 - fingers：触发捏合的最少手指数，最小为2指，最大为5指。 默认值：2 取值范围：[2, 5]。当设置的值不在该范围内时，会被转  化为默认值。 触发手势的手指数量可以多于fingers数目，但只有最先落下的与fingers相同数目的手指参与手势计算。  - distance：最小识别距离，单位为vp。该距离是指当前多根手指位置与手指中心位置的平均距离，与手指落下时的平均距离之间的差值。当这一差值大于或等于最小识别距离时，捏合手势被视为成功。  默认值：5 说明： 取值范围：[0, +∞)。当识别距离的值小于等于0时，会被转化为默认值。 |

**Return value:**

| Type | Description |
| --- | --- |
| PinchGestureInterface |  |

## constructor

```TypeScript
(options?: PinchGestureHandlerOptions): PinchGestureInterface
```

设置捏合手势事件。与[PinchGesture]PinchGestureInterface(value?: { fingers?: number; distance?: number )}相比， options参数新增isFingerCountLimited，表示是否检查触摸屏幕的手指数量。

**Since:** 15

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| options | PinchGestureHandlerOptions | No | 捏合手势处理器配置参数。 |

**Return value:**

| Type | Description |
| --- | --- |
| PinchGestureInterface |  |

## onActionCancel

```TypeScript
onActionCancel(event: () => void): PinchGestureInterface
```

Pinch手势识别成功，接收到触摸取消事件触发的回调，不返回手势事件信息。

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
| PinchGestureInterface |  |

## onActionCancel

```TypeScript
onActionCancel(event: Callback<GestureEvent>): PinchGestureInterface
```

Pinch手势识别成功并接收到触摸取消事件的回调。与[onActionCancel](arkts-pinchgestureinterface-i.md#onActionCancel)相比，该回调返回手势 事件信息。

**Since:** 18

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| event | Callback&lt;GestureEvent> | Yes | 手势事件回调函数。 |

**Return value:**

| Type | Description |
| --- | --- |
| PinchGestureInterface |  |

## onActionEnd

```TypeScript
onActionEnd(event: (event: GestureEvent) => void): PinchGestureInterface
```

Pinch手势识别成功，当抬起最后一根满足手势触发条件的手指后，触发回调。

**Since:** 7

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| event | (event: GestureEvent) => void | Yes | 手势事件回调函数。 |

**Return value:**

| Type | Description |
| --- | --- |
| PinchGestureInterface |  |

## onActionStart

```TypeScript
onActionStart(event: (event: GestureEvent) => void): PinchGestureInterface
```

Pinch手势识别成功后触发回调。

**Since:** 7

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| event | (event: GestureEvent) => void | Yes | 手势事件回调函数。 |

**Return value:**

| Type | Description |
| --- | --- |
| PinchGestureInterface |  |

## onActionUpdate

```TypeScript
onActionUpdate(event: (event: GestureEvent) => void): PinchGestureInterface
```

Pinch手势移动过程中回调。

**Since:** 7

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| event | (event: GestureEvent) => void | Yes | 手势事件回调函数。 |

**Return value:**

| Type | Description |
| --- | --- |
| PinchGestureInterface |  |

