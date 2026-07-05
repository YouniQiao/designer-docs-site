# NativeMediaPlayerHandler

[CreateNativeMediaPlayerCallback](arkts-webview-createnativemediaplayercallback-t.md#CreateNativeMediaPlayerCallback)回调函数的参数。应用通过该对象，将 播放器的状态通知给 ArkWeb 内核。 > **说明：** > > - 本Interface首批接口从API version 12开始支持。 > > - 示例效果请以真机运行为准。

**Since:** 12

**System capability:** SystemCapability.Web.Webview.Core

## Modules to Import

```TypeScript
import { webview } from '@kit.ArkWeb';
```

## handleBufferedEndTimeChanged

```TypeScript
handleBufferedEndTimeChanged(bufferedEndTime: number): void
```

当媒体的缓冲时长发生变化时，调用该方法将媒体的缓冲时长通知给 ArkWeb 内核。

**Since:** 12

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| bufferedEndTime | number | Yes | 媒体缓冲的时长。 单位：秒，取值范围：[0, duration] |

## handleDurationChanged

```TypeScript
handleDurationChanged(duration: number): void
```

当播放器解析出媒体的总时长时，调用该方法将媒体的总时长通知给 ArkWeb 内核。

**Since:** 12

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| duration | number | Yes | 媒体的总时长。 单位：秒，取值范围：[0, +∞) |

## handleEnded

```TypeScript
handleEnded(): void
```

当媒体播放结束时，调用该方法将播放结束事件通知给 ArkWeb 内核。

**Since:** 12

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Web.Webview.Core

## handleError

```TypeScript
handleError(error: MediaError, errorMessage: string): void
```

当播放器发生错误时，调用该方法将错误通知 ArkWeb 内核。

**Since:** 12

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| error | MediaError | Yes | 错误类型。 |
| errorMessage | string | Yes | 错误的详细描述。 |

## handleFullscreenChanged

```TypeScript
handleFullscreenChanged(fullscreen: boolean): void
```

当播放器的全屏状态发生变化时，调用该方法将播放器的全屏状态通知给 ArkWeb 内核。

**Since:** 12

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| fullscreen | boolean | Yes | 是否全屏。 true表示全屏，false表示未全屏。 |

## handleMutedChanged

```TypeScript
handleMutedChanged(muted: boolean): void
```

当播放器的静音状态发生变化时，调用该方法将静音状态通知给 ArkWeb 内核。

**Since:** 12

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| muted | boolean | Yes | 当前播放器是否静音。 true表示当前播放器静音，false表示当前播放器未静音。 |

## handleNetworkStateChanged

```TypeScript
handleNetworkStateChanged(state: NetworkState): void
```

当播放器的网络状态发生变化时，调用该方法将播放器的网络状态通知给 ArkWeb 内核。

**Since:** 12

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| state | NetworkState | Yes | 播放器的网络状态。 |

## handlePlaybackRateChanged

```TypeScript
handlePlaybackRateChanged(playbackRate: number): void
```

当播放器的播放速率发生变化时，调用该方法将播放速率通知给 ArkWeb 内核。

**Since:** 12

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| playbackRate | number | Yes | 播放速率，取值范围：[0, +∞) |

## handleReadyStateChanged

```TypeScript
handleReadyStateChanged(state: ReadyState): void
```

当播放器的缓存状态发生变化时，调用该方法将播放器的缓存状态通知给 ArkWeb 内核。

**Since:** 12

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| state | ReadyState | Yes | 播放器的缓存状态。 |

## handleSeekFinished

```TypeScript
handleSeekFinished(): void
```

当播放器seek完成后，调用该方法将seek完成事件通知 ArkWeb 内核。

**Since:** 12

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Web.Webview.Core

## handleSeeking

```TypeScript
handleSeeking(): void
```

当播放器进入seek状态时，调用该方法将seek进入事件通知 ArkWeb 内核。

**Since:** 12

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Web.Webview.Core

## handleStatusChanged

```TypeScript
handleStatusChanged(status: PlaybackStatus): void
```

当播放器的播放状态发生变化时，调用该方法将播放状态通知给 ArkWeb 内核。

**Since:** 12

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| status | PlaybackStatus | Yes | 播放器的播放状态。 |

## handleTimeUpdate

```TypeScript
handleTimeUpdate(currentPlayTime: number): void
```

当媒体的播放进度发生变化时，调用该方法将媒体的播放进度通知给 ArkWeb 内核。

**Since:** 12

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| currentPlayTime | number | Yes | 当前播放时间。 单位：秒，取值范围：[0, duration] |

## handleVideoSizeChanged

```TypeScript
handleVideoSizeChanged(width: number, height: number): void
```

当播放器解析出视频的尺寸时， 调用该方法将视频尺寸通知 ArkWeb 内核。

**Since:** 12

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| width | number | Yes | 视频的宽，单位：像素，取值范围：[0, +∞) |
| height | number | Yes | 视频的高，单位：像素，取值范围：[0, +∞) |

## handleVolumeChanged

```TypeScript
handleVolumeChanged(volume: number): void
```

当播放器的音量发生变化时，调用该方法将音量通知给 ArkWeb 内核。

**Since:** 12

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| volume | number | Yes | 播放器的音量，取值范围：[0, 1.0]。 |

