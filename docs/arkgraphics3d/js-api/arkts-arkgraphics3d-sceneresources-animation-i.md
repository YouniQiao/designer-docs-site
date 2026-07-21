# Animation

Animation resource.

**Inheritance/Implementation:** Animation extends [SceneResource](arkts-arkgraphics3d-sceneresources-sceneresource-i.md)

**Since:** 12

<!--Device-unnamed-export interface Animation extends SceneResource--><!--Device-unnamed-export interface Animation extends SceneResource-End-->

**System capability:** SystemCapability.ArkUi.Graphics3D

<a id="finish"></a>
## finish

```TypeScript
finish(): void
```

Finish the animation and seek the position to the end.

**Since:** 12

<!--Device-Animation-finish(): void--><!--Device-Animation-finish(): void-End-->

**System capability:** SystemCapability.ArkUi.Graphics3D

<a id="onfinished"></a>
## onFinished

```TypeScript
onFinished(callback: Callback<void>): void
```

Register a callback when animation finished.

**Since:** 12

<!--Device-Animation-onFinished(callback: Callback<void>): void--><!--Device-Animation-onFinished(callback: Callback<void>): void-End-->

**System capability:** SystemCapability.ArkUi.Graphics3D

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | [Callback](../../apis-arkui/arkts-components/arkts-arkui-callback-i.md)&lt;void&gt; | Yes | the callback invoked when animation finished |

<a id="onstarted"></a>
## onStarted

```TypeScript
onStarted(callback: Callback<void>): void
```

Register a callback when animation started.

**Since:** 12

<!--Device-Animation-onStarted(callback: Callback<void>): void--><!--Device-Animation-onStarted(callback: Callback<void>): void-End-->

**System capability:** SystemCapability.ArkUi.Graphics3D

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | [Callback](../../apis-arkui/arkts-components/arkts-arkui-callback-i.md)&lt;void&gt; | Yes | the callback invoked when animation started |

<a id="pause"></a>
## pause

```TypeScript
pause(): void
```

Pause the animation.

**Since:** 12

<!--Device-Animation-pause(): void--><!--Device-Animation-pause(): void-End-->

**System capability:** SystemCapability.ArkUi.Graphics3D

<a id="restart"></a>
## restart

```TypeScript
restart(): void
```

Restart the animation.

**Since:** 12

<!--Device-Animation-restart(): void--><!--Device-Animation-restart(): void-End-->

**System capability:** SystemCapability.ArkUi.Graphics3D

<a id="seek"></a>
## seek

```TypeScript
seek(position: number): void
```

Seek the animation to the position.

**Since:** 12

<!--Device-Animation-seek(position: double): void--><!--Device-Animation-seek(position: double): void-End-->

**System capability:** SystemCapability.ArkUi.Graphics3D

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| position | number | Yes | the position seek between 0~1 |

<a id="start"></a>
## start

```TypeScript
start(): void
```

Start the animation.

**Since:** 12

<!--Device-Animation-start(): void--><!--Device-Animation-start(): void-End-->

**System capability:** SystemCapability.ArkUi.Graphics3D

<a id="stop"></a>
## stop

```TypeScript
stop(): void
```

Stop the animation and seek the position to the beginning.

**Since:** 12

<!--Device-Animation-stop(): void--><!--Device-Animation-stop(): void-End-->

**System capability:** SystemCapability.ArkUi.Graphics3D

## duration

```TypeScript
readonly duration: number
```

The duration of the animation, the unit is second.

**Type:** number

**Since:** 12

<!--Device-Animation-readonly duration: double--><!--Device-Animation-readonly duration: double-End-->

**System capability:** SystemCapability.ArkUi.Graphics3D

## enabled

```TypeScript
enabled: boolean
```

The animation is enabled.

**Type:** boolean

**Since:** 12

<!--Device-Animation-enabled: boolean--><!--Device-Animation-enabled: boolean-End-->

**System capability:** SystemCapability.ArkUi.Graphics3D

## progress

```TypeScript
readonly progress: number
```

The progress of the animation between 0~1.

**Type:** number

**Since:** 12

<!--Device-Animation-readonly progress: double--><!--Device-Animation-readonly progress: double-End-->

**System capability:** SystemCapability.ArkUi.Graphics3D

## running

```TypeScript
readonly running: boolean
```

Whether the animation is running.

**Type:** boolean

**Since:** 12

<!--Device-Animation-readonly running: boolean--><!--Device-Animation-readonly running: boolean-End-->

**System capability:** SystemCapability.ArkUi.Graphics3D

## speed

```TypeScript
speed?: number
```

Animation speed factor A negative value runs the animation in reverse using the given speed factor

**Type:** number

**Since:** 20

<!--Device-Animation-speed?: double--><!--Device-Animation-speed?: double-End-->

**System capability:** SystemCapability.ArkUi.Graphics3D

