# PiPControlGroup

```TypeScript
type PiPControlGroup = VideoPlayControlGroup | VideoCallControlGroup | VideoMeetingControlGroup
    | VideoLiveControlGroup
```

Describes the optional component groups of the PiP controller. An application can configure whether to display
these optional components. This API must match [PiPTemplateType](arkts-arkui-piptemplatetype-e.md) when being used.
Otherwise, the [create](arkts-arkui-create-f.md#create-1) API returns error code 401.

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.Window.SessionManager

| Type | Description |
| --- | --- |
| VideoPlayControlGroup | Video playback component group. |
| VideoCallControlGroup | Video call component group. |
| VideoMeetingControlGroup | Video meeting component group. |
| VideoLiveControlGroup | Live video component group. |

