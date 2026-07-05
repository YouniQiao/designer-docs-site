# VideoPlayControlGroup

```TypeScript
enum VideoPlayControlGroup
```

视频播放控件组枚举。仅当[PiPTemplateType]PiPWindow.PiPTemplateType为VIDEO_PLAY时使用。

**Since:** 12

**System capability:** SystemCapability.Window.SessionManager

## VIDEO_PREVIOUS_NEXT

```TypeScript
VIDEO_PREVIOUS_NEXT = 101
```

视频上一个/下一个控件组。 与视频快进/后退控件组为互斥控件组。如添加视频快进/后退控件组，则不可添加该控件组。

**Since:** 12

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Window.SessionManager

## FAST_FORWARD_BACKWARD

```TypeScript
FAST_FORWARD_BACKWARD = 102
```

视频快进/后退控件组。 与视频上一个/下一个控件组为互斥控件组。如添加视频上一个/下一个控件组，则不可添加该控件组。

**Since:** 12

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Window.SessionManager

