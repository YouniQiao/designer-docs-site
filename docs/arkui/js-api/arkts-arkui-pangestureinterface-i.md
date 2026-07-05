# PanGestureInterface

PanGesture is used to trigger a pan gesture when the movement distance of a finger on the screen reaches the minimum value.

**Inheritance/Implementation:** PanGestureInterface extends [GestureInterface<PanGestureInterface>](GestureInterface<PanGestureInterface>)

**Since:** 7

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## constructor

```TypeScript
(value?: { fingers?: number; direction?: PanDirection; distance?: number } | PanGestureOptions): PanGestureInterface
```

Creates a pan gesture. Inherits from [GestureInterface<T>](arkts-arkui-gestureinterface-i.md#gestureinterface).

**Since:** 7

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | { fingers?: number; direction?: PanDirection; distance?: number } \| PanGestureOptions | No |  |

**Return value:**

| Type | Description |
| --- | --- |
| PanGestureInterface | @syscap SystemCapability.ArkUI.ArkUI.Full@crossplatform |

## constructor

```TypeScript
(options?: PanGestureHandlerOptions): PanGestureInterface
```

Creates a pan gesture. Compared with [PanGesture](PanGestureInterface(value?: { fingers?: number; direction?: PanDirection; distance?: number ) | PanGestureOptions)}, this API adds the **isFingerCountLimited** and **distanceMap** parameters to **options**, which control whether to enforce the exact number of fingers touching the screen and specify the minimum pan distance required to trigger the gesture for different input sources, respectively.

**Since:** 15

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 15.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| options | PanGestureHandlerOptions | No | Parameters of the swipe gesture handler. |

**Return value:**

| Type | Description |
| --- | --- |
| PanGestureInterface | @syscap SystemCapability.ArkUI.ArkUI.Full@stagemodelonly@crossplatform@atomicservice |

## onActionCancel

```TypeScript
onActionCancel(event: () => void): PanGestureInterface
```

Registers the callback for pan gesture cancellation. This callback is triggered when a touch cancellation event occurs after successful pan gesture recognition. No gesture event information is returned.

**Since:** 7

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| event | () =&gt; void | Yes | Callback for pan gesture cancellation. |

**Return value:**

| Type | Description |
| --- | --- |
| PanGestureInterface | @syscap SystemCapability.ArkUI.ArkUI.Full@crossplatform |

## onActionCancel

```TypeScript
onActionCancel(event: Callback<GestureEvent>): PanGestureInterface
```

Registers the callback for pan gesture cancellation. This callback is triggered when a touch cancellation event occurs after successful pan gesture recognition. Gesture event information is returned.

**Since:** 18

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 18.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| event | Callback&lt;GestureEvent&gt; | Yes | Callback for pan gesture cancellation. |

**Return value:**

| Type | Description |
| --- | --- |
| PanGestureInterface | @syscap SystemCapability.ArkUI.ArkUI.Full@stagemodelonly@crossplatform@atomicservice |

## onActionEnd

```TypeScript
onActionEnd(event: (event: GestureEvent) => void): PanGestureInterface
```

Registers the callback for pan gesture completion. This callback is triggered when all fingers are lifted after successful pan gesture recognition.

**Since:** 7

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| event | (event: GestureEvent) =&gt; void | Yes | Callback for pan gesture completion. |

**Return value:**

| Type | Description |
| --- | --- |
| PanGestureInterface | @syscap SystemCapability.ArkUI.ArkUI.Full@crossplatform |

## onActionStart

```TypeScript
onActionStart(event: (event: GestureEvent) => void): PanGestureInterface
```

Registers the callback for successful pan gesture recognition.

**Since:** 7

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| event | (event: GestureEvent) =&gt; void | Yes | Callback for successful pan gesture recognition. |

**Return value:**

| Type | Description |
| --- | --- |
| PanGestureInterface | @syscap SystemCapability.ArkUI.ArkUI.Full@crossplatform |

## onActionUpdate

```TypeScript
onActionUpdate(event: (event: GestureEvent) => void): PanGestureInterface
```

Registers the callback for pan gesture updates. If **fingerList** contains multiple fingers, this callback updates the location information of only one finger each time.

**Since:** 7

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| event | (event: GestureEvent) =&gt; void | Yes | Callback for pan gesture updates. |

**Return value:**

| Type | Description |
| --- | --- |
| PanGestureInterface | @syscap SystemCapability.ArkUI.ArkUI.Full@crossplatform |

