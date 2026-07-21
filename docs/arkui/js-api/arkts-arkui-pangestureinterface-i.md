# PanGestureInterface

PanGesture is used to trigger a pan gesture when the movement distance of a finger on the screen reaches the minimum value.

**Inheritance/Implementation:** PanGestureInterface extends [GestureInterface<PanGestureInterface>](GestureInterface<PanGestureInterface>)

**Since:** 7

<!--Device-unnamed-interface PanGestureInterface extends GestureInterface<PanGestureInterface>--><!--Device-unnamed-interface PanGestureInterface extends GestureInterface<PanGestureInterface>-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

<a id="constructor"></a>
## constructor

```TypeScript
(value?: { fingers?: number; direction?: PanDirection; distance?: number } | PanGestureOptions): PanGestureInterface
```

Creates a pan gesture. Inherits from [GestureInterface<T>](arkts-arkui-gestureinterface-i.md).

**Since:** 7

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-PanGestureInterface-(value?: { fingers?: number; direction?: PanDirection; distance?: number } | PanGestureOptions): PanGestureInterface--><!--Device-PanGestureInterface-(value?: { fingers?: number; direction?: PanDirection; distance?: number } | PanGestureOptions): PanGestureInterface-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | { fingers?: number; direction?: PanDirection; distance?: number } \| PanGestureOptions | No |  |

**Return value:**

| Type | Description |
| --- | --- |
| [PanGestureInterface](arkts-arkui-pangestureinterface-i.md) | @syscap SystemCapability.ArkUI.ArkUI.Full@crossplatform |

<a id="constructor-1"></a>
## constructor

```TypeScript
(options?: PanGestureHandlerOptions): PanGestureInterface
```

Creates a pan gesture. Compared with [PanGesture](arkts-arkui-pangestureinterface-i.md) | PanGestureOptions)},this API adds the **isFingerCountLimited** and **distanceMap** parameters to **options**, which control whether to enforce the exact number of fingers touching the screen and specify the minimum pan distance required to trigger the gesture for different input sources, respectively.

**Since:** 15

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 15.

<!--Device-PanGestureInterface-(options?: PanGestureHandlerOptions): PanGestureInterface--><!--Device-PanGestureInterface-(options?: PanGestureHandlerOptions): PanGestureInterface-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| options | [PanGestureHandlerOptions](arkts-arkui-pangesturehandleroptions-i.md) | No | Parameters of the swipe gesture handler. |

**Return value:**

| Type | Description |
| --- | --- |
| [PanGestureInterface](arkts-arkui-pangestureinterface-i.md) | @syscap SystemCapability.ArkUI.ArkUI.Full@stagemodelonly@crossplatform@atomicservice |

<a id="onactioncancel"></a>
## onActionCancel

```TypeScript
onActionCancel(event: () => void): PanGestureInterface
```

Registers the callback for pan gesture cancellation. This callback is triggered when a touch cancellation event occurs after successful pan gesture recognition. No gesture event information is returned.

**Since:** 7

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-PanGestureInterface-onActionCancel(event: () => void): PanGestureInterface--><!--Device-PanGestureInterface-onActionCancel(event: () => void): PanGestureInterface-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| event | () =&gt; void | Yes | Callback for pan gesture cancellation. |

**Return value:**

| Type | Description |
| --- | --- |
| [PanGestureInterface](arkts-arkui-pangestureinterface-i.md) | @syscap SystemCapability.ArkUI.ArkUI.Full@crossplatform |

<a id="onactioncancel-1"></a>
## onActionCancel

```TypeScript
onActionCancel(event: Callback<GestureEvent>): PanGestureInterface
```

Registers the callback for pan gesture cancellation. This callback is triggered when a touch cancellation event occurs after successful pan gesture recognition. Gesture event information is returned.

**Since:** 18

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 18.

<!--Device-PanGestureInterface-onActionCancel(event: Callback<GestureEvent>): PanGestureInterface--><!--Device-PanGestureInterface-onActionCancel(event: Callback<GestureEvent>): PanGestureInterface-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| event | [Callback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-callback-i.md)&lt;GestureEvent&gt; | Yes | Callback for pan gesture cancellation. |

**Return value:**

| Type | Description |
| --- | --- |
| [PanGestureInterface](arkts-arkui-pangestureinterface-i.md) | @syscap SystemCapability.ArkUI.ArkUI.Full@stagemodelonly@crossplatform@atomicservice |

<a id="onactionend"></a>
## onActionEnd

```TypeScript
onActionEnd(event: (event: GestureEvent) => void): PanGestureInterface
```

Registers the callback for pan gesture completion. This callback is triggered when all fingers are lifted after successful pan gesture recognition.

**Since:** 7

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-PanGestureInterface-onActionEnd(event: (event: GestureEvent) => void): PanGestureInterface--><!--Device-PanGestureInterface-onActionEnd(event: (event: GestureEvent) => void): PanGestureInterface-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| event | (event: GestureEvent) =&gt; void | Yes | Callback for pan gesture completion. |

**Return value:**

| Type | Description |
| --- | --- |
| [PanGestureInterface](arkts-arkui-pangestureinterface-i.md) | @syscap SystemCapability.ArkUI.ArkUI.Full@crossplatform |

<a id="onactionstart"></a>
## onActionStart

```TypeScript
onActionStart(event: (event: GestureEvent) => void): PanGestureInterface
```

Registers the callback for successful pan gesture recognition.

**Since:** 7

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-PanGestureInterface-onActionStart(event: (event: GestureEvent) => void): PanGestureInterface--><!--Device-PanGestureInterface-onActionStart(event: (event: GestureEvent) => void): PanGestureInterface-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| event | (event: GestureEvent) =&gt; void | Yes | Callback for successful pan gesture recognition. |

**Return value:**

| Type | Description |
| --- | --- |
| [PanGestureInterface](arkts-arkui-pangestureinterface-i.md) | @syscap SystemCapability.ArkUI.ArkUI.Full@crossplatform |

<a id="onactionupdate"></a>
## onActionUpdate

```TypeScript
onActionUpdate(event: (event: GestureEvent) => void): PanGestureInterface
```

Registers the callback for pan gesture updates. If **fingerList** contains multiple fingers, this callback updates the location information of only one finger each time.

**Since:** 7

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-PanGestureInterface-onActionUpdate(event: (event: GestureEvent) => void): PanGestureInterface--><!--Device-PanGestureInterface-onActionUpdate(event: (event: GestureEvent) => void): PanGestureInterface-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| event | (event: GestureEvent) =&gt; void | Yes | Callback for pan gesture updates. |

**Return value:**

| Type | Description |
| --- | --- |
| [PanGestureInterface](arkts-arkui-pangestureinterface-i.md) | @syscap SystemCapability.ArkUI.ArkUI.Full@crossplatform |

