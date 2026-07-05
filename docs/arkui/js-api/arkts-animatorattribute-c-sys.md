# AnimatorAttribute

Defines AnimatorAttribute.

**Inheritance:** AnimatorAttributeextends: CommonMethod<AnimatorAttribute>.

**Since:** 7

**Deprecated since:** 22

**Substitute:** ohos.arkui.UIContext.UIContext#createAnimator

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**System API:** This is a system API.

## curve

```TypeScript
curve(value: Curve)
```

Animation curve, default to linear curve

**Since:** 7

**Deprecated since:** 22

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | Curve | Yes |  |

## delay

```TypeScript
delay(value: number)
```

Delayed animation playback duration, in milliseconds. By default, the animation is not delayed.

**Since:** 7

**Deprecated since:** 22

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | number | Yes |  |

## duration

```TypeScript
duration(value: number)
```

Animation duration, in milliseconds.

**Since:** 7

**Deprecated since:** 22

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | number | Yes |  |

## fillMode

```TypeScript
fillMode(value: FillMode)
```

Sets the state before and after the animation starts.

**Since:** 7

**Deprecated since:** 22

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | FillMode | Yes |  |

## iterations

```TypeScript
iterations(value: number)
```

The default playback is once. If the value is -1, the playback is unlimited.

**Since:** 7

**Deprecated since:** 22

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | number | Yes |  |

## motion

```TypeScript
motion(value: SpringMotion | FrictionMotion | ScrollMotion)
```

Configure the physical animation algorithm.

**Since:** 7

**Deprecated since:** 22

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | SpringMotion \| FrictionMotion \| ScrollMotion | Yes |  |

## onCancel

```TypeScript
onCancel(event: () => void)
```

Status callback, which is triggered when the animation is canceled.

**Since:** 7

**Deprecated since:** 22

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| event | () => void | Yes |  |

## onFinish

```TypeScript
onFinish(event: () => void)
```

Status callback, which is triggered when the animation playback is complete.

**Since:** 7

**Deprecated since:** 22

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| event | () => void | Yes |  |

## onFrame

```TypeScript
onFrame(event: (value: number) => void)
```

The callback input parameter is the interpolation during animation playback.

**Since:** 7

**Deprecated since:** 22

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| event | (value: number) => void | Yes |  |

## onPause

```TypeScript
onPause(event: () => void)
```

Status callback, triggered when the animation pauses.

**Since:** 7

**Deprecated since:** 22

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| event | () => void | Yes |  |

## onRepeat

```TypeScript
onRepeat(event: () => void)
```

Status callback, triggered when the animation is replayed.

**Since:** 7

**Deprecated since:** 22

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| event | () => void | Yes |  |

## onStart

```TypeScript
onStart(event: () => void)
```

Status callback, which is triggered when the animation starts to play.

**Since:** 7

**Deprecated since:** 22

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| event | () => void | Yes |  |

## playMode

```TypeScript
playMode(value: PlayMode)
```

Sets the animation playback mode. By default, the animation starts to play again after the playback is complete.

**Since:** 7

**Deprecated since:** 22

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | PlayMode | Yes |  |

## state

```TypeScript
state(value: AnimationStatus)
```

Controls the playback status. The default value is the initial state.

**Since:** 7

**Deprecated since:** 22

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | AnimationStatus | Yes |  |

