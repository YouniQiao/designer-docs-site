# Video

The **Video** component is used to play a video and control its playback.
> **NOTE**
>
> The **Video** component provides only simple video playback features. For complex video playback control
> scenarios, consider using the [AVPlayer]{@link @ohos.multimedia.media:media.AVPlayer} APIs in conjunction with the
> [XComponent]{@link XComponent} component.
> When using **expandSafeArea** to extend into safe areas, the **Video** component's content display area does not
> support expansion.
>
> **Required Permissions**
>
> To use online videos, you must apply for the ohos.permission.INTERNET permission. For details about how to apply
> for a permission, see [Declaring Permissions](docroot://security/AccessToken/declare-permissions.md).
>
> **Child Components**
>
> Not supported.


## Video

```TypeScript
Video(value: VideoOptions)
```

Defines the constructor of video component.

**Since:** 7

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-VideoInterface-(value: VideoOptions): VideoAttribute--><!--Device-VideoInterface-(value: VideoOptions): VideoAttribute-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | VideoOptions | Yes | Video information. |

## Summary

- [FullscreenInfo](arkts-arkui-video-fullscreeninfo-i.md)
- [PlaybackInfo](arkts-arkui-video-playbackinfo-i.md)
- [PosterOptions](arkts-arkui-video-posteroptions-i.md)
- [PreparedInfo](arkts-arkui-video-preparedinfo-i.md)
- [VideoOptions](arkts-arkui-video-videooptions-i.md)
- [PlaybackSpeed](arkts-arkui-video-playbackspeed-e.md)
- [SeekMode](arkts-arkui-video-seekmode-e.md)
