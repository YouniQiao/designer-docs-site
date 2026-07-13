# NativeMediaPlayerHandler

Implements a **NativeMediaPlayerHandler** object used as a parameter of the
[CreateNativeMediaPlayerCallback](arkts-arkweb-createnativemediaplayercallback-t.md) callback. The
application uses this object to report the player status to the ArkWeb engine.

> **NOTE**
>
> - The sample effect is subject to the actual device.

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

Called to notify the ArkWeb engine of the buffer time when the buffer time changes.

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| bufferedEndTime | number | Yes | Duration of media data in the buffer.<br>Unit: second. Value range:[0, duration] |

## handleDurationChanged

```TypeScript
handleDurationChanged(duration: number): void
```

Called to notify the ArkWeb engine of the total duration of the media.

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| duration | number | Yes | Total duration of the media.<br>Unit: second. Value range: [0,+��) |

## handleEnded

```TypeScript
handleEnded(): void
```

Called to notify the ArkWeb engine that the media playback ends.

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.Web.Webview.Core

## handleError

```TypeScript
handleError(error: MediaError, errorMessage: string): void
```

Called to notify the ArkWeb engine that an error occurs with the player.

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| error | MediaError | Yes | Error object type. |
| errorMessage | string | Yes | Error message. |

## handleFullscreenChanged

```TypeScript
handleFullscreenChanged(fullscreen: boolean): void
```

Called to notify the ArkWeb engine of the full screen status of the player when the full screen status changes.

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| fullscreen | boolean | Yes | Whether the player is in full screen.<br>The value **true** means that the playeris in full screen, and **false** means the opposite. |

## handleMutedChanged

```TypeScript
handleMutedChanged(muted: boolean): void
```

Called to notify the ArkWeb engine of the muted status of the player when the muted status changes.

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| muted | boolean | Yes | Whether the player is muted.<br>The value **true** indicates that the player is muted,and **false** indicates the opposite. |

## handleNetworkStateChanged

```TypeScript
handleNetworkStateChanged(state: NetworkState): void
```

Called to notify the ArkWeb engine of the network status of the player when the network status changes.

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| state | NetworkState | Yes | Network status of the player. |

## handlePlaybackRateChanged

```TypeScript
handlePlaybackRateChanged(playbackRate: number): void
```

Called to notify the ArkWeb engine of the playback rate of the player when the playback rate changes.

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| playbackRate | number | Yes | Playback rate. The value range is [0, +��). |

## handleReadyStateChanged

```TypeScript
handleReadyStateChanged(state: ReadyState): void
```

Called to notify the ArkWeb engine of the cache status of the player when the cache status changes.

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| state | ReadyState | Yes | Cache status of the player. |

## handleSeekFinished

```TypeScript
handleSeekFinished(): void
```

Called to notify the ArkWeb engine that the seek operation is complete.

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.Web.Webview.Core

## handleSeeking

```TypeScript
handleSeeking(): void
```

Called to notify the ArkWeb engine that the player enters the seek state.

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.Web.Webview.Core

## handleStatusChanged

```TypeScript
handleStatusChanged(status: PlaybackStatus): void
```

Called to notify the ArkWeb engine of the playback status of the player when the playback status changes.

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| status | PlaybackStatus | Yes | Player status. |

## handleTimeUpdate

```TypeScript
handleTimeUpdate(currentPlayTime: number): void
```

Called to notify the ArkWeb engine of the playback progress when the playback progress changes.

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| currentPlayTime | number | Yes | Current progress.<br>Unit: second. Value range: [0, duration] |

## handleVideoSizeChanged

```TypeScript
handleVideoSizeChanged(width: number, height: number): void
```

Called to notify the ArkWeb engine of the video size of the player.

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| width | number | Yes | Video width, in pixels. Value range: [0,+��) |
| height | number | Yes | Video height, in pixels. Value range: [0,+��) |

## handleVolumeChanged

```TypeScript
handleVolumeChanged(volume: number): void
```

Called to notify the ArkWeb engine of the volume of the player when the volume changes.

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| volume | number | Yes | Volume of the player. The value range is [0, 1.0]. |

