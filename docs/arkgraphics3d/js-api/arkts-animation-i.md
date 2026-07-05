# Animation

动画资源.

**Inheritance:** Animationextends: SceneResource.

**Since:** 12

**System capability:** SystemCapability.ArkUi.Graphics3D

## finish

```TypeScript
finish(): void
```

结束动画并将位置设置到结尾.

**Since:** 12

**System capability:** SystemCapability.ArkUi.Graphics3D

## onFinished

```TypeScript
onFinished(callback: Callback<void>): void
```

注册动画完成时的回调.

**Since:** 12

**System capability:** SystemCapability.ArkUi.Graphics3D

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | Callback&lt;void> | Yes | 动画完成时调用的回调 |

## onStarted

```TypeScript
onStarted(callback: Callback<void>): void
```

注册动画开始时的回调.

**Since:** 12

**System capability:** SystemCapability.ArkUi.Graphics3D

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | Callback&lt;void> | Yes | 动画开始时调用的回调 |

## pause

```TypeScript
pause(): void
```

暂停动画.

**Since:** 12

**System capability:** SystemCapability.ArkUi.Graphics3D

## restart

```TypeScript
restart(): void
```

重新启动动画.

**Since:** 12

**System capability:** SystemCapability.ArkUi.Graphics3D

## seek

```TypeScript
seek(position: double): void
```

将动画跳转到指定位置.

**Since:** 12

**System capability:** SystemCapability.ArkUi.Graphics3D

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| position | double | Yes | 跳转到0~1之间的位置 |

## start

```TypeScript
start(): void
```

开始动画.

**Since:** 12

**System capability:** SystemCapability.ArkUi.Graphics3D

## stop

```TypeScript
stop(): void
```

停止动画并将位置设置到开头.

**Since:** 12

**System capability:** SystemCapability.ArkUi.Graphics3D

## running

```TypeScript
readonly running: boolean
```

动画是否正在运行.

**Type:** boolean

**Since:** 12

**System capability:** SystemCapability.ArkUi.Graphics3D

## duration

```TypeScript
readonly duration: double
```

动画持续时间, 单位为秒.

**Type:** double

**Since:** 12

**System capability:** SystemCapability.ArkUi.Graphics3D

## progress

```TypeScript
readonly progress: double
```

动画在0~1之间的进度.

**Type:** double

**Since:** 12

**System capability:** SystemCapability.ArkUi.Graphics3D

## speed

```TypeScript
speed?: double
```

动画速度因子 负值使用给定速度因子反向播放动画

**Type:** double

**Since:** 20

**System capability:** SystemCapability.ArkUi.Graphics3D

## enabled

```TypeScript
enabled: boolean
```

动画是否启用.

**Type:** boolean

**Since:** 12

**System capability:** SystemCapability.ArkUi.Graphics3D

