# TapGestureHandler

Defines a type of gesture handler object for tap gestures.

**Inheritance/Implementation:** TapGestureHandler extends [GestureHandler<TapGestureHandler>](GestureHandler<TapGestureHandler>)

**Since:** 12

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## constructor

```TypeScript
constructor(options?: TapGestureHandlerOptions)
```

Constructor used to create a tap gesture handler instance.

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| options | TapGestureHandlerOptions | No | Parameters of the tap gesture handler. |

## onAction

```TypeScript
onAction(event: Callback<GestureEvent>): TapGestureHandler
```

Sets the callback for successful tap gesture recognition.

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| event | Callback&lt;GestureEvent&gt; | Yes | Callback invoked upon successful tap gesture recognition. |

**Return value:**

| Type | Description |
| --- | --- |
| TapGestureHandler | Tap gesture handler object. |

