# PiPControlGroup

```TypeScript
type PiPControlGroup = VideoPlayControlGroup | VideoCallControlGroup | VideoMeetingControlGroup
    | VideoLiveControlGroup
```

画中画控制面板的可选控件组列表，应用可以配置是否显示可选控件。使用时必须和[PiPTemplateType]PiPWindow.PiPTemplateType对应，否则 [create]PiPWindow.create(config: PiPConfiguration)接口抛出401错误码。

**Since:** 12

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Window.SessionManager

| Type | Description |
| --- | --- |
| VideoPlayControlGroup | 视频播放控件组。 |
| VideoCallControlGroup | 视频通话控件组。 |
| VideoMeetingControlGroup | 视频会议控件组。 |
| VideoLiveControlGroup | 视频直播控件组。 |

