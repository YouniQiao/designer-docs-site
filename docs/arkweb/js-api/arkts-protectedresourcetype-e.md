# ProtectedResourceType

```TypeScript
declare enum ProtectedResourceType
```

定义可访问的资源类型，与 {@link onPermissionRequest} 方法相关。

**Since:** 9

**System capability:** SystemCapability.Web.Webview.Core

## MidiSysex

```TypeScript
MidiSysex = "TYPE_MIDI_SYSEX"
```

MIDI SYSEX资源。 目前仅支持权限事件上报，MIDI设备的使用还未支持。

**Since:** 9

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Web.Webview.Core

## VIDEO_CAPTURE

```TypeScript
VIDEO_CAPTURE = "TYPE_VIDEO_CAPTURE"
```

视频捕获资源，例如相机。

**Since:** 10

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Web.Webview.Core

## AUDIO_CAPTURE

```TypeScript
AUDIO_CAPTURE = "TYPE_AUDIO_CAPTURE"
```

音频捕获资源，例如麦克风。

**Since:** 10

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Web.Webview.Core

## SENSOR

```TypeScript
SENSOR = 'TYPE_SENSOR'
```

传感器资源，例如加速度传感器。

**Since:** 12

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Web.Webview.Core

