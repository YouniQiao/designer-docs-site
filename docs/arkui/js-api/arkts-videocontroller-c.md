# VideoController

一个VideoController对象可以控制一个或多个Video。 ###### 导入对象 ```ts let controller: VideoController = new VideoController(); ```

**Since:** 7

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## constructor

```TypeScript
constructor()
```

VideoController的构造函数。

**Since:** 7

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## exitFullscreen

```TypeScript
exitFullscreen()
```

退出全屏播放。

**Since:** 7

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## pause

```TypeScript
pause()
```

暂停播放，显示当前帧，再次播放时从当前位置继续播放。

**Since:** 7

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## requestFullscreen

```TypeScript
requestFullscreen(value: boolean)
```

请求全屏播放。

**Since:** 7

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | boolean | Yes | 是否全屏（填充满应用窗口）播放。 true：请求全屏播放；false：不请求全屏播放。 默认值：false |

## reset

```TypeScript
reset(): void
```

Video组件重置AVPlayer。显示当前帧，再次播放时从头开始播放。

**Since:** 12

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## setCurrentTime

```TypeScript
setCurrentTime(value: number)
```

指定视频播放的进度位置。 > **说明：** > > 若用户需要从视频内的某一时间点开始播放，应关闭自动播放，在视频准备完成后先跳转再播放。

**Since:** 7

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | number | Yes | 视频播放进度位置。 取值范围：[0, [duration](arkts-preparedinfo-i.md#PreparedInfo)] 当设置value大于duration时，进度跳转至最后；当设置  value小于0时，不会进行进度跳转。 单位：秒 从API version 8开始，支持设置视频的跳转模式，详见  [setCurrentTime8+](arkts-videocontroller-c.md#setCurrentTime)。 |

## setCurrentTime

```TypeScript
setCurrentTime(value: number, seekMode: SeekMode)
```

指定视频播放的进度位置，并指定跳转模式。

**Since:** 8

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | number | Yes | 视频播放进度位置。 取值范围：[0, [duration](arkts-preparedinfo-i.md#PreparedInfo)] 当设置value大于duration时，进度跳转至最后；当设置  value小于0时，不会进行进度跳转。 单位：秒 |
| seekMode | SeekMode | Yes | 跳转模式。 |

## start

```TypeScript
start()
```

开始播放。

**Since:** 7

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## stop

```TypeScript
stop()
```

停止播放，显示当前帧，再次播放时从头开始播放。

**Since:** 7

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

