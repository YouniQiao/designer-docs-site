# Animation

Animation resource.

**Inheritance/Implementation:** Animation extends [SceneResource](arkts-arkgraphics3d-sceneresource-i.md)

**Since:** 12

**System capability:** SystemCapability.ArkUi.Graphics3D

## finish

```TypeScript
finish(): void
```

Finish the animation and seek the position to the end.

**Since:** 12

**System capability:** SystemCapability.ArkUi.Graphics3D

## onFinished

```TypeScript
onFinished(callback: Callback<void>): void
```

Register a callback when animation finished.

**Since:** 12

**System capability:** SystemCapability.ArkUi.Graphics3D

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | Callback&lt;void&gt; | Yes | the callback invoked when animation finished |

## onStarted

```TypeScript
onStarted(callback: Callback<void>): void
```

Register a callback when animation started.

**Since:** 12

**System capability:** SystemCapability.ArkUi.Graphics3D

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | Callback&lt;void&gt; | Yes | the callback invoked when animation started |

## pause

```TypeScript
pause(): void
```

Pause the animation.

**Since:** 12

**System capability:** SystemCapability.ArkUi.Graphics3D

## restart

```TypeScript
restart(): void
```

Restart the animation.

**Since:** 12

**System capability:** SystemCapability.ArkUi.Graphics3D

## seek

```TypeScript
seek(position: number): void
```

Seek the animation to the position.

**Since:** 12

**System capability:** SystemCapability.ArkUi.Graphics3D

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| position | number | Yes | the position seek between 0~1 |

## start

```TypeScript
start(): void
```

Start the animation.

**Since:** 12

**System capability:** SystemCapability.ArkUi.Graphics3D

## stop

```TypeScript
stop(): void
```

Stop the animation and seek the position to the beginning.

**Since:** 12

**System capability:** SystemCapability.ArkUi.Graphics3D

## duration

```TypeScript
readonly duration: number
```

The duration of the animation, the unit is second.

**Type:** number

**Since:** 12

**System capability:** SystemCapability.ArkUi.Graphics3D

## enabled

```TypeScript
enabled: boolean
```

The animation is enabled.

**Type:** boolean

**Since:** 12

**System capability:** SystemCapability.ArkUi.Graphics3D

## progress

```TypeScript
readonly progress: number
```

The progress of the animation between 0~1.

**Type:** number

**Since:** 12

**System capability:** SystemCapability.ArkUi.Graphics3D

## running

```TypeScript
readonly running: boolean
```

Whether the animation is running.

**Type:** boolean

**Since:** 12

**System capability:** SystemCapability.ArkUi.Graphics3D

## speed

```TypeScript
speed?: number
```

Animation speed factor
A negative value runs the animation in reverse using the given speed factor

**Type:** number

**Since:** 20

**System capability:** SystemCapability.ArkUi.Graphics3D

