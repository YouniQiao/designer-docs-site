# TapGestureInterface

TapGesture is used to trigger a tap gesture with one, two, or more taps.

> **NOTE**  
>  
> When both double-tap and single-tap gestures are bound to a component with the double-tap gesture bound first, the  
> single-tap gesture will have a 300 ms delay.

**Inheritance/Implementation:** TapGestureInterface extends [GestureInterface<TapGestureInterface>](GestureInterface<TapGestureInterface>)

**Since:** 7

<!--Device-unnamed-interface TapGestureInterface extends GestureInterface<TapGestureInterface>--><!--Device-unnamed-interface TapGestureInterface extends GestureInterface<TapGestureInterface>-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

<a id="constructor"></a>
## constructor

```TypeScript
(value?: TapGestureParameters): TapGestureInterface
```

Creates a tap gesture. Inherits from [GestureInterface<T>](arkts-arkui-gestureinterface-i.md).

When triggered by keyboard or gamepad input, the gesture event's [SourceTool](../arkts-components/arkts-arkui-sourcetool-e.md) is **Unknown**, and [SourceType](../../apis-input-kit/arkts-apis/arkts-input-multimodalinput-touchevent-sourcetype-e.md) is **KEY** or **JOYSTICK**.

**Since:** 7

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-TapGestureInterface-(value?: TapGestureParameters): TapGestureInterface--><!--Device-TapGestureInterface-(value?: TapGestureParameters): TapGestureInterface-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | [TapGestureParameters](arkts-arkui-tapgestureparameters-i.md) | No | Parameters for the tap gesture.<br>**Since:** 12 |

**Return value:**

| Type | Description |
| --- | --- |
| [TapGestureInterface](arkts-arkui-tapgestureinterface-i.md) | @syscap SystemCapability.ArkUI.ArkUI.Full@crossplatform |

<a id="onaction"></a>
## onAction

```TypeScript
onAction(event: (event: GestureEvent) => void): TapGestureInterface
```

Triggered when the tap gesture is recognized.

**Since:** 7

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-TapGestureInterface-onAction(event: (event: GestureEvent) => void): TapGestureInterface--><!--Device-TapGestureInterface-onAction(event: (event: GestureEvent) => void): TapGestureInterface-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| event | (event: GestureEvent) =&gt; void | Yes | Callback for the tap event. |

**Return value:**

| Type | Description |
| --- | --- |
| [TapGestureInterface](arkts-arkui-tapgestureinterface-i.md) | @syscap SystemCapability.ArkUI.ArkUI.Full@crossplatform |

