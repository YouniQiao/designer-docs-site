# AnimationResult

**起始版本：** 4

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

## cancel

```TypeScript
cancel(): void
```

Cancels the animation.

**起始版本：** 4

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

## finish

```TypeScript
finish(): void
```

Ends the animation.

**起始版本：** 4

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

## pause

```TypeScript
pause(): void
```

Pauses the animation.

**起始版本：** 4

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

## play

```TypeScript
play(): void
```

Starts the animation.

**起始版本：** 4

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

## reverse

```TypeScript
reverse(): void
```

Plays the animation in reverse direction.

**起始版本：** 4

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

## onstart

```TypeScript
onstart: () => void
```

The animation is started.

**类型：** () => void

**起始版本：** 4

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

## oncancel

```TypeScript
oncancel: () => void
```

The animation is canceled.

**类型：** () => void

**起始版本：** 4

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

## onrepeat

```TypeScript
onrepeat: () => void
```

The animation is repeated.

**类型：** () => void

**起始版本：** 4

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

## pending

```TypeScript
pending: boolean
```

Read-only attribute, which indicates whether an animation is waiting for the completion of other asynchronous operations (for example, start an animation with a delay).

**类型：** boolean

**起始版本：** 4

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

## startTime

```TypeScript
startTime: number
```

Animation start time. This attribute is similar to that of delay in the options parameters.

**类型：** number

**起始版本：** 4

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

## finished

```TypeScript
finished: boolean
```

Read-only attribute, which indicates whether the animation playback is complete.

**类型：** boolean

**起始版本：** 4

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

## onfinish

```TypeScript
onfinish: () => void
```

The animation is finished.

**类型：** () => void

**起始版本：** 4

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

## playstate

```TypeScript
playstate: string
```

Animation running state: idle: The animation is not running (playback ended or not started). running: The animation is running. paused: The animation is paused. finished: Animation playback ends.

**类型：** string

**起始版本：** 4

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

