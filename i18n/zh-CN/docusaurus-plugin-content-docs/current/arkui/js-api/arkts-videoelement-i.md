# VideoElement

The <video> component provides a video player.

**继承实现关系：** VideoElement继承自：Element。

**起始版本：** 4

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

## exitFullscreen

```TypeScript
exitFullscreen(): void
```

Requests to exit the full screen mode.

**起始版本：** 4

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

## pause

```TypeScript
pause(): void
```

Requests to pause a video.

**起始版本：** 4

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

## requestFullscreen

```TypeScript
requestFullscreen(param: { screenOrientation: "default" }): void
```

Requests to enter the full screen mode.

**起始版本：** 4

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| param | { screenOrientation: "default" } | 是 |  |

## setCurrentTime

```TypeScript
setCurrentTime(param: { currenttime: number }): void
```

Specifies the video playing position.

**起始版本：** 4

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| param | { currenttime: number } | 是 |  |

## start

```TypeScript
start(): void
```

Requests to start playing a video.

**起始版本：** 4

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

## stop

```TypeScript
stop(): void
```

Requests to stop playing a video.

**起始版本：** 6

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

