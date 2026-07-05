# PinchGestureInterface

**PinchGesture** is used to trigger a pinch gesture, which requires two to five fingers with a minimum 5 vp distance between the fingers. > **NOTE** > > To trigger the pinch gesture again after successful recognition, all fingers must be lifted and then make > contact again to satisfy the recognition criteria.

**Inheritance/Implementation:** PinchGestureInterface extends [GestureInterface<PinchGestureInterface>](GestureInterface<PinchGestureInterface>)

**Since:** 7

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## constructor

```TypeScript
(value?: { fingers?: number; distance?: number }): PinchGestureInterface
```

Sets the parameters for the pinch gesture. Inherits from [GestureInterface<T>](arkts-arkui-gestureinterface-i.md#gestureinterface).

**Since:** 7

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | { fingers?: number; distance?: number } | No | Parameters for the pinch gesture.<br> - **fingers**: minimum number of fingers to trigger a pinch. The value ranges from 2 to 5.<br>Defaultvalue: **2** <br>Value range: [2, 5]. Values outside this range are automatically adjusted to the defaultvalue.<br>While more fingers than the minimum number can be pressed to trigger the gesture, only the firstfingers of the minimum number participate in gesture calculation.<br> - **distance**: minimum recognition distance, in vp. This distance refers to the difference between thecurrent average distance from the multiple finger positions to their center point and the average distancewhen the fingers first made contact. If this difference meets or exceeds the minimum recognition distance,the pinch gesture is recognized.<br>Default value: **5**<br>**NOTE**<br>Value range: [0, +∞). If the value isless than or equal to 0, it will be converted to the default value. |

**Return value:**

| Type | Description |
| --- | --- |
| PinchGestureInterface | @syscap SystemCapability.ArkUI.ArkUI.Full@crossplatform |

## constructor

```TypeScript
(options?: PinchGestureHandlerOptions): PinchGestureInterface
```

Sets the parameters for the pinch gesture. Compared with [PinchGesture](PinchGestureInterface(value?: { fingers?: number; distance?: number ))}, this API adds the **isFingerCountLimited** parameter to **options**, which determines whether to enforce the exact number of fingers touching the screen.

**Since:** 15

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 15.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| options | PinchGestureHandlerOptions | No | Parameters of the pinch gesture handler. |

**Return value:**

| Type | Description |
| --- | --- |
| PinchGestureInterface | @syscap SystemCapability.ArkUI.ArkUI.Full@stagemodelonly@crossplatform@atomicservice |

## onActionCancel

```TypeScript
onActionCancel(event: () => void): PinchGestureInterface
```

Triggered when a touch cancellation event occurs after successful pinch gesture recognition. No gesture event information is returned.

**Since:** 7

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| event | () =&gt; void | Yes | Callback for the pinch event. |

**Return value:**

| Type | Description |
| --- | --- |
| PinchGestureInterface | @syscap SystemCapability.ArkUI.ArkUI.Full@crossplatform |

## onActionCancel

```TypeScript
onActionCancel(event: Callback<GestureEvent>): PinchGestureInterface
```

Triggered when a touch cancellation event occurs after successful pinch gesture recognition. Compared with [onActionCancel](arkts-arkui-pinchgestureinterface-i.md#onactioncancel-1), this callback returns gesture event information.

**Since:** 18

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 18.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| event | Callback&lt;GestureEvent&gt; | Yes | Callback for the pinch event. |

**Return value:**

| Type | Description |
| --- | --- |
| PinchGestureInterface | @syscap SystemCapability.ArkUI.ArkUI.Full@stagemodelonly@crossplatform@atomicservice |

## onActionEnd

```TypeScript
onActionEnd(event: (event: GestureEvent) => void): PinchGestureInterface
```

Triggered when all fingers are lifted after successful pinch gesture recognition.

**Since:** 7

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| event | (event: GestureEvent) =&gt; void | Yes | Callback for the pinch event. |

**Return value:**

| Type | Description |
| --- | --- |
| PinchGestureInterface | @syscap SystemCapability.ArkUI.ArkUI.Full@crossplatform |

## onActionStart

```TypeScript
onActionStart(event: (event: GestureEvent) => void): PinchGestureInterface
```

Triggered after the pinch gesture is recognized.

**Since:** 7

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| event | (event: GestureEvent) =&gt; void | Yes | Callback for the pinch event. |

**Return value:**

| Type | Description |
| --- | --- |
| PinchGestureInterface | @syscap SystemCapability.ArkUI.ArkUI.Full@crossplatform |

## onActionUpdate

```TypeScript
onActionUpdate(event: (event: GestureEvent) => void): PinchGestureInterface
```

Triggered when the user moves the finger in the pinch gesture on the screen.

**Since:** 7

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| event | (event: GestureEvent) =&gt; void | Yes | Callback for the pinch event. |

**Return value:**

| Type | Description |
| --- | --- |
| PinchGestureInterface | @syscap SystemCapability.ArkUI.ArkUI.Full@crossplatform |

