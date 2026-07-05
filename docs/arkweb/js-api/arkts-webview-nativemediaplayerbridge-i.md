# NativeMediaPlayerBridge

[CreateNativeMediaPlayerCallback](arkts-webview-createnativemediaplayercallback-t.md#CreateNativeMediaPlayerCallback)回调函数的返回值类型。接管网页媒体 的播放器和ArkWeb内核之间的一个接口类。 ArkWeb内核通过该接口类的实例对象来控制应用创建的用来接管网页媒体的播放器。 > **说明：** > > - 本Interface首批接口从API version 12开始支持。 > > - 示例效果请以真机运行为准。

**Since:** 12

**System capability:** SystemCapability.Web.Webview.Core

## Modules to Import

```TypeScript
import { webview } from '@kit.ArkWeb';
```

## enterFullscreen

```TypeScript
enterFullscreen(): void
```

播放器进入全屏。

**Since:** 12

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Web.Webview.Core

## exitFullscreen

```TypeScript
exitFullscreen(): void
```

播放器退出全屏。

**Since:** 12

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Web.Webview.Core

## pause

```TypeScript
pause(): void
```

暂停播放。

**Since:** 12

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Web.Webview.Core

## play

```TypeScript
play(): void
```

播放媒体。

**Since:** 12

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Web.Webview.Core

## release

```TypeScript
release(): void
```

销毁播放器。

**Since:** 12

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Web.Webview.Core

## resumePlayer

```TypeScript
resumePlayer?(): void
```

通知应用重建播放器，并恢复播放器的状态信息。

**Since:** 12

**System capability:** SystemCapability.Web.Webview.Core

## seek

```TypeScript
seek(targetTime: number): void
```

跳转播放进度到指定时间点。

**Since:** 12

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| targetTime | number | Yes | 播放跳转到的时间点。 单位：秒。 |

## setMuted

```TypeScript
setMuted(muted: boolean): void
```

设置静音状态。

**Since:** 12

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| muted | boolean | Yes | 是否静音。 true表示静音，false表示未静音。 |

## setPlaybackRate

```TypeScript
setPlaybackRate(playbackRate: number): void
```

设置播放速率。

**Since:** 12

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| playbackRate | number | Yes | 播放速率。 取值范围：[0, 10.0]，其中1表示原速播放。 |

## setVolume

```TypeScript
setVolume(volume: number): void
```

设置播放器音量值。

**Since:** 12

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| volume | number | Yes | 播放器的音量。 取值范围：[0, 1.0]，其中0表示静音，1.0表示最大音量。 |

## suspendPlayer

```TypeScript
suspendPlayer?(type: SuspendType): void
```

通知应用销毁播放器，并保存播放器的状态信息。

**Since:** 12

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | SuspendType | Yes | 播放器挂起类型。 |

## updateRect

```TypeScript
updateRect(x: number, y: number, width: number, height: number): void
```

更新surface位置信息。

**Since:** 12

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| x | number | Yes | surface相对于Web组件的x坐标信息。 单位：px。 |
| y | number | Yes | surface相对于Web组件的y坐标信息。 单位：px。 |
| width | number | Yes | surface的宽度。 单位：px。 |
| height | number | Yes | surface的高度。 单位：px。 |

