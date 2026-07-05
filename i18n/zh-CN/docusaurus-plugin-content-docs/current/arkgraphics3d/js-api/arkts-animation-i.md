# Animation

动画资源.

**继承实现关系：** Animation继承自：SceneResource。

**起始版本：** 12

**系统能力：** SystemCapability.ArkUi.Graphics3D

## finish

```TypeScript
finish(): void
```

结束动画并将位置设置到结尾.

**起始版本：** 12

**系统能力：** SystemCapability.ArkUi.Graphics3D

## onFinished

```TypeScript
onFinished(callback: Callback<void>): void
```

注册动画完成时的回调.

**起始版本：** 12

**系统能力：** SystemCapability.ArkUi.Graphics3D

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | Callback&lt;void> | 是 | 动画完成时调用的回调 |

## onStarted

```TypeScript
onStarted(callback: Callback<void>): void
```

注册动画开始时的回调.

**起始版本：** 12

**系统能力：** SystemCapability.ArkUi.Graphics3D

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | Callback&lt;void> | 是 | 动画开始时调用的回调 |

## pause

```TypeScript
pause(): void
```

暂停动画.

**起始版本：** 12

**系统能力：** SystemCapability.ArkUi.Graphics3D

## restart

```TypeScript
restart(): void
```

重新启动动画.

**起始版本：** 12

**系统能力：** SystemCapability.ArkUi.Graphics3D

## seek

```TypeScript
seek(position: double): void
```

将动画跳转到指定位置.

**起始版本：** 12

**系统能力：** SystemCapability.ArkUi.Graphics3D

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| position | double | 是 | 跳转到0~1之间的位置 |

## start

```TypeScript
start(): void
```

开始动画.

**起始版本：** 12

**系统能力：** SystemCapability.ArkUi.Graphics3D

## stop

```TypeScript
stop(): void
```

停止动画并将位置设置到开头.

**起始版本：** 12

**系统能力：** SystemCapability.ArkUi.Graphics3D

## running

```TypeScript
readonly running: boolean
```

动画是否正在运行.

**类型：** boolean

**起始版本：** 12

**系统能力：** SystemCapability.ArkUi.Graphics3D

## duration

```TypeScript
readonly duration: double
```

动画持续时间, 单位为秒.

**类型：** double

**起始版本：** 12

**系统能力：** SystemCapability.ArkUi.Graphics3D

## progress

```TypeScript
readonly progress: double
```

动画在0~1之间的进度.

**类型：** double

**起始版本：** 12

**系统能力：** SystemCapability.ArkUi.Graphics3D

## speed

```TypeScript
speed?: double
```

动画速度因子 负值使用给定速度因子反向播放动画

**类型：** double

**起始版本：** 20

**系统能力：** SystemCapability.ArkUi.Graphics3D

## enabled

```TypeScript
enabled: boolean
```

动画是否启用.

**类型：** boolean

**起始版本：** 12

**系统能力：** SystemCapability.ArkUi.Graphics3D

