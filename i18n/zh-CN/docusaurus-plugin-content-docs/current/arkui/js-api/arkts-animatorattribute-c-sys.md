# AnimatorAttribute

Defines AnimatorAttribute.

**继承实现关系：** AnimatorAttribute继承自：CommonMethod<AnimatorAttribute>。

**起始版本：** 7

**废弃版本：** 22

**替代接口：** ohos.arkui.UIContext.UIContext#createAnimator

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**系统接口：** 此接口为系统接口。

## curve

```TypeScript
curve(value: Curve)
```

Animation curve, default to linear curve

**起始版本：** 7

**废弃版本：** 22

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| value | Curve | 是 |  |

## delay

```TypeScript
delay(value: number)
```

Delayed animation playback duration, in milliseconds. By default, the animation is not delayed.

**起始版本：** 7

**废弃版本：** 22

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| value | number | 是 |  |

## duration

```TypeScript
duration(value: number)
```

Animation duration, in milliseconds.

**起始版本：** 7

**废弃版本：** 22

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| value | number | 是 |  |

## fillMode

```TypeScript
fillMode(value: FillMode)
```

Sets the state before and after the animation starts.

**起始版本：** 7

**废弃版本：** 22

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| value | FillMode | 是 |  |

## iterations

```TypeScript
iterations(value: number)
```

The default playback is once. If the value is -1, the playback is unlimited.

**起始版本：** 7

**废弃版本：** 22

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| value | number | 是 |  |

## motion

```TypeScript
motion(value: SpringMotion | FrictionMotion | ScrollMotion)
```

Configure the physical animation algorithm.

**起始版本：** 7

**废弃版本：** 22

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| value | SpringMotion \| FrictionMotion \| ScrollMotion | 是 |  |

## onCancel

```TypeScript
onCancel(event: () => void)
```

Status callback, which is triggered when the animation is canceled.

**起始版本：** 7

**废弃版本：** 22

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| event | () => void | 是 |  |

## onFinish

```TypeScript
onFinish(event: () => void)
```

Status callback, which is triggered when the animation playback is complete.

**起始版本：** 7

**废弃版本：** 22

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| event | () => void | 是 |  |

## onFrame

```TypeScript
onFrame(event: (value: number) => void)
```

The callback input parameter is the interpolation during animation playback.

**起始版本：** 7

**废弃版本：** 22

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| event | (value: number) => void | 是 |  |

## onPause

```TypeScript
onPause(event: () => void)
```

Status callback, triggered when the animation pauses.

**起始版本：** 7

**废弃版本：** 22

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| event | () => void | 是 |  |

## onRepeat

```TypeScript
onRepeat(event: () => void)
```

Status callback, triggered when the animation is replayed.

**起始版本：** 7

**废弃版本：** 22

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| event | () => void | 是 |  |

## onStart

```TypeScript
onStart(event: () => void)
```

Status callback, which is triggered when the animation starts to play.

**起始版本：** 7

**废弃版本：** 22

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| event | () => void | 是 |  |

## playMode

```TypeScript
playMode(value: PlayMode)
```

Sets the animation playback mode. By default, the animation starts to play again after the playback is complete.

**起始版本：** 7

**废弃版本：** 22

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| value | PlayMode | 是 |  |

## state

```TypeScript
state(value: AnimationStatus)
```

Controls the playback status. The default value is the initial state.

**起始版本：** 7

**废弃版本：** 22

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| value | AnimationStatus | 是 |  |

