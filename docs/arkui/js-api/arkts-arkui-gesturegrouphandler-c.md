# GestureGroupHandler

Defines a gesture group handler object.

**Inheritance/Implementation:** GestureGroupHandler extends [GestureHandler<GestureGroupHandler>](GestureHandler<GestureGroupHandler>)

**Since:** 12

<!--Device-unnamed-declare class GestureGroupHandler extends GestureHandler<GestureGroupHandler>--><!--Device-unnamed-declare class GestureGroupHandler extends GestureHandler<GestureGroupHandler>-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

<a id="constructor"></a>
## constructor

```TypeScript
constructor(options?: GestureGroupGestureHandlerOptions)
```

Constructor used to create a gesture group handler instance.

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-GestureGroupHandler-constructor(options?: GestureGroupGestureHandlerOptions)--><!--Device-GestureGroupHandler-constructor(options?: GestureGroupGestureHandlerOptions)-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| options | [GestureGroupGestureHandlerOptions](arkts-arkui-gesturegroupgesturehandleroptions-i.md) | No | Parameters of the gesture group handler. |

<a id="oncancel"></a>
## onCancel

```TypeScript
onCancel(event: Callback<void>): GestureGroupHandler
```

Sets the cancellation callback for the gesture group handler. The callback is triggered when a sequence gesture ([GestureMode](arkts-arkui-gesturemode-e.md).Sequence) is cancelled.

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-GestureGroupHandler-onCancel(event: Callback<void>): GestureGroupHandler--><!--Device-GestureGroupHandler-onCancel(event: Callback<void>): GestureGroupHandler-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| event | [Callback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-callback-i.md)&lt;void&gt; | Yes | Callback invoked when the gesture group is cancelled. |

**Return value:**

| Type | Description |
| --- | --- |
| [GestureGroupHandler](arkts-arkui-gesturegrouphandler-c.md) | Current gesture group handler object. |

