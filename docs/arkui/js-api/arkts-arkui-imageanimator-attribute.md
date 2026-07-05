# ImageAnimator properties/events

In addition to the [universal attributes](./common), the following attributes are supported. In addition to the [universal events](./common), the following events are supported.

**Inheritance/Implementation:** ImageAnimatorAttribute extends [CommonMethod<ImageAnimatorAttribute>](CommonMethod<ImageAnimatorAttribute>)

**Since:** 7

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## duration

```TypeScript
duration(value: number)
```

Sets the playback duration. This attribute does not take effect when a separate duration is set for any of the image frames.

**Since:** 7

**Atomic service API:** This API can be used in atomic services since API version 11.

**Widget capability:** This API can be used in ArkTS widgets since API version 10.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | number | Yes | Playback duration.<br>If the value is **0**, no image is played.<br>If the displayduration allocated per image is shorter than a single frame interval, playback anomalies may occur.<br>If it isset to a negative value, the default value is used.<br>The value change takes effect only at the start of thenext cycle.<br>Unit: ms<br>Default value: **1000** |

## fillMode

```TypeScript
fillMode(value: FillMode)
```

Sets the status before and after execution of the animation in the current playback direction. The status after execution of the animation is jointly determined by the **fillMode** and **reverse** attributes. For example, if **fillMode** is set to **Forwards**, the target will retain the state defined by the last keyframe encountered during execution. In this case, if **reverse** is set to **false**, the target will retain the state defined by the last keyframe encountered in the forward direction, that is, the last image; if **reverse** is set to **true**, the target will retain the state defined by the last keyframe encountered in the backward direction, that is, the first image.

**Since:** 7

**Atomic service API:** This API can be used in atomic services since API version 11.

**Widget capability:** This API can be used in ArkTS widgets since API version 10.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | FillMode | Yes | Status before and after execution of the animation in the current playback direction.&lt;br&gt;Default value: **FillMode.Forwards** |

## fixedSize

```TypeScript
fixedSize(value: boolean)
```

Sets whether the image size is fixed at the component size.

**Since:** 7

**Atomic service API:** This API can be used in atomic services since API version 11.

**Widget capability:** This API can be used in ArkTS widgets since API version 10.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | boolean | Yes | Whether the image size is fixed at the component size.<br> **true**: The image size isfixed at the component size. In this case, the width, height, top, and left attributes of the image areinvalid.<br> **false**: The width, height, top, and left attributes of each image must be set separately. Ifthe image size does not match the component size, the image will not be stretched.<br>Default value: **true** |

## images

```TypeScript
images(value: Array<ImageFrameInfo>)
```

Sets image frame information. Dynamic update is not supported.

**Since:** 7

**Atomic service API:** This API can be used in atomic services since API version 11.

**Widget capability:** This API can be used in ArkTS widgets since API version 10.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | Array&lt;ImageFrameInfo&gt; | Yes | Image frame information. The information of each frame includes the path,size, position, and playback duration of an image. For details, see [ImageFrameInfo](arkts-arkui-imageframeinfo-i.md#imageframeinfo).<br>Default value: **[]**<br> Note: If the input array is too large, memory usage may increase. Therefore, as thecontroller of memory usage, be sure to assess potential memory consumption before passing in the data to avoidissues such as insufficient memory. |

## iterations

```TypeScript
iterations(value: number)
```

Sets the number of times that the animation is played.

**Since:** 7

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | number | Yes | By default, the animation is played once. The value **-1** indicates that the animationis played for an unlimited number of times. Values less than **-1** are treated as the default value. When thevalue is a floating-point number, it is rounded down.<br>Default value: **1** |

## monitorInvisibleArea

```TypeScript
monitorInvisibleArea(monitorInvisibleArea: boolean) : ImageAnimatorAttribute
```

Sets whether the component should automatically pause or resume based on its visibility, using the system's [onVisibleAreaChange] {@link CommonMethod#onVisibleAreaChange(ratios: Array<number>, event: VisibleAreaChangeCallback)} event.

**Since:** 17

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 17.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| monitorInvisibleArea | boolean | Yes | Whether the component should automatically pause or resume based on itsvisibility, using the system's [onVisibleAreaChange](arkts-arkui-commonmethod-c.md#onvisibleareachange-1)event.<br> With the value **true**, when the component's [AnimationStatus](arkts-arkui-animationstatus-e.md#animationstatus) is**Running**, the component automatically pauses once it becomes invisible and resumes playback if it becomesvisible again, based on the **onVisibleAreaChange** event.<br>With the value **false**, the pause and playbackof the component are not affected by **onVisibleAreaChange**.<br>Default value: **false**<br> **NOTE**<br>Whenthis parameter is dynamically changed from **true** to **false**, the component will resume from its lastpaused state based on the current [AnimationStatus](arkts-arkui-animationstatus-e.md#animationstatus).<br>Changes to this propertydo not affect the custom [state](ImageAnimatorAttribute#state) value. |

## onCancel

```TypeScript
onCancel(event: () => void)
```

Triggered when the animation playback returns to the initial state.

**Since:** 7

**Atomic service API:** This API can be used in atomic services since API version 11.

**Widget capability:** This API can be used in ArkTS widgets since API version 10.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| event | () =&gt; void | Yes | Callback triggered when the animation playback returns to the initial state. |

## onFinish

```TypeScript
onFinish(event: () => void)
```

Triggered when the animation playback completes or stops.

**Since:** 7

**Atomic service API:** This API can be used in atomic services since API version 11.

**Widget capability:** This API can be used in ArkTS widgets since API version 10.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| event | () =&gt; void | Yes | Callback triggered when the animation playback completes or stops. |

## onPause

```TypeScript
onPause(event: () => void)
```

Triggered when the animation playback is paused.

**Since:** 7

**Atomic service API:** This API can be used in atomic services since API version 11.

**Widget capability:** This API can be used in ArkTS widgets since API version 10.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| event | () =&gt; void | Yes | Callback triggered when the animation playback is paused. |

## onRepeat

```TypeScript
onRepeat(event: () => void)
```

Triggered when the animation playback is repeated.

**Since:** 7

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| event | () =&gt; void | Yes | Callback triggered when the animation playback is repeated. |

## onStart

```TypeScript
onStart(event: () => void)
```

Triggered when the animation starts to play.

**Since:** 7

**Atomic service API:** This API can be used in atomic services since API version 11.

**Widget capability:** This API can be used in ArkTS widgets since API version 10.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| event | () =&gt; void | Yes | Callback triggered when the animation starts to play. |

## preDecode

```TypeScript
preDecode(value: number)
```

Sets the number of images to be pre-decoded. > **NOTE** > > This API is supported since API version 7 and deprecated since API version 9. Currently, no substitute is > available.

**Since:** 7

**Deprecated since:** 9

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | number | Yes | Number of images to be pre-decoded. For example, the value **2** indicates that twoimages following the currently playing one are pre-decoded.<br>Default value: **0** |

## reverse

```TypeScript
reverse(value: boolean)
```

Sets the playback direction.

**Since:** 7

**Atomic service API:** This API can be used in atomic services since API version 11.

**Widget capability:** This API can be used in ArkTS widgets since API version 10.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | boolean | Yes | Playback direction.<br>The value **false** indicates that images are played from thefirst one to the last one, and **true** indicates that images are played from the last one to the first one.<br>Default value: **false** |

## state

```TypeScript
state(value: AnimationStatus)
```

Sets the playback state of the animation.

**Since:** 7

**Atomic service API:** This API can be used in atomic services since API version 11.

**Widget capability:** This API can be used in ArkTS widgets since API version 10.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | AnimationStatus | Yes | Playback state of the animation.<br>Default value: **AnimationStatus.Initial** |

