# NativeMediaPlayerBridge

Instance of the API class between the web media player and the ArkWeb kernel.

The ArkWeb kernel uses an object of this interface class to control the player created by the application to take over web page media.

> **NOTE**  
>  
> - The sample effect is subject to the actual device.

**Since:** 12

<!--Device-webview-interface NativeMediaPlayerBridge--><!--Device-webview-interface NativeMediaPlayerBridge-End-->

**System capability:** SystemCapability.Web.Webview.Core

## Modules to Import

```TypeScript
import { webview } from '@kit.ArkWeb';
```

<a id="enterfullscreen"></a>
## enterFullscreen

```TypeScript
enterFullscreen(): void
```

Enables the player to enter full screen mode.

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-NativeMediaPlayerBridge-enterFullscreen(): void--><!--Device-NativeMediaPlayerBridge-enterFullscreen(): void-End-->

**System capability:** SystemCapability.Web.Webview.Core

<a id="exitfullscreen"></a>
## exitFullscreen

```TypeScript
exitFullscreen(): void
```

Enables the player to exit full screen mode.

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-NativeMediaPlayerBridge-exitFullscreen(): void--><!--Device-NativeMediaPlayerBridge-exitFullscreen(): void-End-->

**System capability:** SystemCapability.Web.Webview.Core

<a id="pause"></a>
## pause

```TypeScript
pause(): void
```

Pauses playback.

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-NativeMediaPlayerBridge-pause(): void--><!--Device-NativeMediaPlayerBridge-pause(): void-End-->

**System capability:** SystemCapability.Web.Webview.Core

<a id="play"></a>
## play

```TypeScript
play(): void
```

Plays this video.

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-NativeMediaPlayerBridge-play(): void--><!--Device-NativeMediaPlayerBridge-play(): void-End-->

**System capability:** SystemCapability.Web.Webview.Core

<a id="release"></a>
## release

```TypeScript
release(): void
```

Releases this player.

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-NativeMediaPlayerBridge-release(): void--><!--Device-NativeMediaPlayerBridge-release(): void-End-->

**System capability:** SystemCapability.Web.Webview.Core

<a id="resumeplayer"></a>
## resumePlayer

```TypeScript
resumePlayer?(): void
```

Resumes the player and its status information.

**Since:** 12

<!--Device-NativeMediaPlayerBridge-resumePlayer?(): void--><!--Device-NativeMediaPlayerBridge-resumePlayer?(): void-End-->

**System capability:** SystemCapability.Web.Webview.Core

<a id="seek"></a>
## seek

```TypeScript
seek(targetTime: number): void
```

Seeks to a specific time point in the media.

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-NativeMediaPlayerBridge-seek(targetTime: number): void--><!--Device-NativeMediaPlayerBridge-seek(targetTime: number): void-End-->

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| targetTime | number | Yes | Target time point, Unit: seconds. |

<a id="setmuted"></a>
## setMuted

```TypeScript
setMuted(muted: boolean): void
```

Sets the muted status.

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-NativeMediaPlayerBridge-setMuted(muted: boolean): void--><!--Device-NativeMediaPlayerBridge-setMuted(muted: boolean): void-End-->

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| muted | boolean | Yes | Whether to mute the player.The value **true** means to mute the player, and **false** means the opposite.* |

<a id="setplaybackrate"></a>
## setPlaybackRate

```TypeScript
setPlaybackRate(playbackRate: number): void
```

Sets the playback rate.

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-NativeMediaPlayerBridge-setPlaybackRate(playbackRate: number): void--><!--Device-NativeMediaPlayerBridge-setPlaybackRate(playbackRate: number): void-End-->

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| playbackRate | number | Yes | Playback rate.Value range: [0, 10.0]. The value **1** indicates the original speed of playback.* |

<a id="setvolume"></a>
## setVolume

```TypeScript
setVolume(volume: number): void
```

Sets the playback volume.

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-NativeMediaPlayerBridge-setVolume(volume: number): void--><!--Device-NativeMediaPlayerBridge-setVolume(volume: number): void-End-->

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| volume | number | Yes | Playback volume.Value range: [0, 1.0].The value **0** indicates mute, and the value **1.0** indicates the maximum volume.* |

<a id="suspendplayer"></a>
## suspendPlayer

```TypeScript
suspendPlayer?(type: SuspendType): void
```

Suspends the player and save its status information.

**Since:** 12

<!--Device-NativeMediaPlayerBridge-suspendPlayer?(type: SuspendType): void--><!--Device-NativeMediaPlayerBridge-suspendPlayer?(type: SuspendType): void-End-->

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | [SuspendType](arkts-arkweb-webview-suspendtype-e.md) | Yes | Suspension type of the player. |

<a id="updaterect"></a>
## updateRect

```TypeScript
updateRect(x: number, y: number, width: number, height: number): void
```

Updates the surface position information.

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-NativeMediaPlayerBridge-updateRect(x: number, y: number, width: number, height: number): void--><!--Device-NativeMediaPlayerBridge-updateRect(x: number, y: number, width: number, height: number): void-End-->

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| x | number | Yes | X coordinate of the surface relative to the **Web** component, Unit: px. |
| y | number | Yes |  |
| width | number | Yes | Width of the surface, Unit: px. |
| height | number | Yes | Height of the surface, Unit: px. |

