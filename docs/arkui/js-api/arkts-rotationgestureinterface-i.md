# RotationGestureInterface

用于触发旋转手势，最少需要2指，最多5指，最小改变度数为1度。该手势不支持通过触控板双指旋转操作触发。

**Inheritance:** RotationGestureInterfaceextends: GestureInterface<RotationGestureInterface>.

**Since:** 7

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## constructor

```TypeScript
(value?: { fingers?: number; angle?: number }): RotationGestureInterface
```

继承自[GestureInterface<T>](arkts-gesture.md#GestureInterface)，设置旋转手势事件。

**Since:** 7

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | { fingers?: number; angle?: number } | No | 设置旋转手势事件参数。  - fingers：触发旋转手势所需的最少手指数，&nbsp;最小为2指，最大为5指。 默认值：2 取值范围：[2, 5]。当设置的值小于2或大于5时，会被转化  为默认值。 触发手势时手指数量可以多于fingers参数值，但仅最先落下的两指参与手势计算。  - angle：触发旋转手势所需的最小角度变化，单位为deg。 默认值：1 说明： 当改变度数的值小于等于0或大于360时，会被转化为默认值。 |

**Return value:**

| Type | Description |
| --- | --- |
| RotationGestureInterface |  |

## constructor

```TypeScript
(options?: RotationGestureHandlerOptions): RotationGestureInterface
```

设置旋转手势事件。与[RotationGesture]RotationGestureInterface(value?: { fingers?: number; angle?: number )}相比， options参数新增了isFingerCountLimited参数，表示是否检查触摸屏幕的手指数量。

**Since:** 15

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| options | RotationGestureHandlerOptions | No | 旋转手势处理器配置参数。 |

**Return value:**

| Type | Description |
| --- | --- |
| RotationGestureInterface |  |

## onActionCancel

```TypeScript
onActionCancel(event: () => void): RotationGestureInterface
```

Rotation手势识别成功，接收到触摸取消事件触发的回调。该回调不返回手势事件信息。

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
| RotationGestureInterface |  |

## onActionCancel

```TypeScript
onActionCancel(event: Callback<GestureEvent>): RotationGestureInterface
```

Rotation手势识别成功，接收到触摸取消事件触发的回调。与[onActionCancel](arkts-rotationgestureinterface-i.md#onActionCancel)相 比，该回调返回手势事件信息。

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
| RotationGestureInterface |  |

## onActionEnd

```TypeScript
onActionEnd(event: (event: GestureEvent) => void): RotationGestureInterface
```

Rotation手势识别成功，当抬起最后一根满足手势触发条件的手指后触发的回调。

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
| RotationGestureInterface |  |

## onActionStart

```TypeScript
onActionStart(event: (event: GestureEvent) => void): RotationGestureInterface
```

Rotation手势识别成功后触发的回调。

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
| RotationGestureInterface |  |

## onActionUpdate

```TypeScript
onActionUpdate(event: (event: GestureEvent) => void): RotationGestureInterface
```

Rotation手势移动过程中触发的回调。

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
| RotationGestureInterface |  |

