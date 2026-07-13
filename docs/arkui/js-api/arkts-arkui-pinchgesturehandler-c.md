# PinchGestureHandler

Defines a type of gesture handler object for pinch gestures.

**Inheritance/Implementation:** PinchGestureHandler extends [GestureHandler<PinchGestureHandler>](GestureHandler<PinchGestureHandler>)

**Since:** 12

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## constructor

```TypeScript
constructor(options?: PinchGestureHandlerOptions)
```

Constructor used to create a pinch gesture handler instance.

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| options | PinchGestureHandlerOptions | No | Parameters of the pinch gesture handler. |

## onActionCancel

```TypeScript
onActionCancel(event: Callback<void>): PinchGestureHandler
```

Sets the callback for pinch gesture cancellation. This callback is triggered when a touch cancellation event occurs
after successful recognition. No gesture event information is returned.

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| event | Callback&lt;void&gt; | Yes | Callback invoked when the pinch gesture is cancelled. No gesture eventinformation is returned. |

**Return value:**

| Type | Description |
| --- | --- |
| PinchGestureHandler | Pinch gesture handler object. |

## onActionCancel

```TypeScript
onActionCancel(event: Callback<GestureEvent>): PinchGestureHandler
```

Sets the callback for pinch gesture cancellation. This callback is triggered when a touch cancellation event occurs
after successful recognition. Compared with
[onActionCancel](arkts-arkui-pinchgesturehandler-c.md#onactioncancel-1), this API returns gesture
event information.

**Since:** 18

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 18.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| event | Callback&lt;GestureEvent&gt; | Yes | Callback invoked when the pinch gesture is cancelled. Gesture eventinformation is returned. |

**Return value:**

| Type | Description |
| --- | --- |
| PinchGestureHandler | Pinch gesture handler object. |

## onActionEnd

```TypeScript
onActionEnd(event: Callback<GestureEvent>): PinchGestureHandler
```

Sets the callback for pinch gesture recognition completion. This callback is triggered when all fingers are lifted
after successful recognition.

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| event | Callback&lt;GestureEvent&gt; | Yes | Callback invoked when pinch gesture recognition completes. |

**Return value:**

| Type | Description |
| --- | --- |
| PinchGestureHandler | Pinch gesture handler object. |

## onActionStart

```TypeScript
onActionStart(event: Callback<GestureEvent>): PinchGestureHandler
```

Sets the callback for successful pinch gesture recognition.

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| event | Callback&lt;GestureEvent&gt; | Yes | Callback invoked upon successful pinch gesture recognition. |

**Return value:**

| Type | Description |
| --- | --- |
| PinchGestureHandler | Pinch gesture handler object. |

## onActionUpdate

```TypeScript
onActionUpdate(event: Callback<GestureEvent>): PinchGestureHandler
```

Sets the callback for pinch gesture movement updates. The callback is triggered when the pinch gesture moves.

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| event | Callback&lt;GestureEvent&gt; | Yes | Callback invoked during pinch gesture movement. |

**Return value:**

| Type | Description |
| --- | --- |
| PinchGestureHandler | Pinch gesture handler object. |

