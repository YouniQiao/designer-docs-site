# @ohos.PiPWindow

The module provides basic APIs for manipulating Picture in Picture (PiP). For example, you can use the APIs to check whether the PiP feature is supported and create a PiP controller to start or stop a PiP window. PiP is mainly used in video playback, video calls, or video meetings. > **NOTE** > > - Before <!--RP2-->OpenHarmony 6.0<!--RP2End-->, the PiP feature was supported only on phones and tablets. Starting > from <!--RP2-->OpenHarmony 6.0<!--RP2End-->, the PiP feature is supported on phones, PCs/2-in-1 devices, tablets, > but is unavailable on all other devices. > > - For the system capability SystemCapability.Window.SessionManager, use > [canIUse()](arkts-arkui-global-caniuse-f.md#caniuse-1) to check whether the device supports this system > capability and the corresponding APIs.

**Since:** 11

**System capability:** SystemCapability.Window.SessionManager

## Modules to Import

```TypeScript
import { PiPWindow } from '@kit.ArkUI';
```

## Summary

### Functions

| Name | Description |
| --- | --- |
| [create](arkts-arkui-create-f.md#create-1) | Creates a PiP controller. This API uses a promise to return the result. |
| [create](arkts-arkui-create-f.md#create-2) | Creates a PiP controller. This API uses **typeNode** to add a custom UI node for PiP. This API uses a promise to return the result. |
| [isPiPEnabled](arkts-arkui-ispipenabled-f.md#ispipenabled-1) | Checks whether the current device supports the PiP feature. |

### Interfaces

| Name | Description |
| --- | --- |
| [ControlEventParam](arkts-arkui-controleventparam-i.md) | Describes the parameters in the callback of the action event of the PiP controller. |
| [PiPConfiguration](arkts-arkui-pipconfiguration-i.md) | Defines the parameters for creating a PiP controller. |
| [PiPController](arkts-arkui-pipcontroller-i.md) | Implements a PiP controller that starts, stops, or updates a PiP window and registers callbacks. Before calling any of the following APIs, you must use [PiPWindow.create()](arkts-arkui-create-f.md#create-1) to create a PiPController instance. |
| [PiPWindowInfo](arkts-arkui-pipwindowinfo-i.md) | Describes the PiP window information. |
| [PiPWindowSize](arkts-arkui-pipwindowsize-i.md) | Describes the size of a PiP window. |

<!--Del-->
### Interfaces（系统接口）

| Name | Description |
| --- | --- |
| [PiPController](arkts-arkui-pipcontroller-i-sys.md) | Implements a PiP controller that starts, stops, or updates a PiP window and registers callbacks. Before calling any of the following APIs, you must use [PiPWindow.create()](arkts-arkui-create-f.md#create-1) to create a PiPController instance. |
<!--DelEnd-->

### Enums

| Name | Description |
| --- | --- |
| [PiPControlStatus](arkts-arkui-pipcontrolstatus-e.md) | Enumerates the statuses of components displayed on the PiP controller. |
| [PiPControlType](arkts-arkui-pipcontroltype-e.md) | Enumerates the types of components displayed on the PiP controller. |
| [PiPState](arkts-arkui-pipstate-e.md) | Enumerates the PiP states. |
| [PiPTemplateType](arkts-arkui-piptemplatetype-e.md) | Enumerates the PiP template types. |
| [VideoCallControlGroup](arkts-arkui-videocallcontrolgroup-e.md) | Enumerates the video call component groups. They are used only when [PiPTemplateType](arkts-arkui-piptemplatetype-e.md) is set to **VIDEO_CALL**. |
| [VideoLiveControlGroup](arkts-arkui-videolivecontrolgroup-e.md) | Enumerates the live video component groups. They are used only when [PiPTemplateType](arkts-arkui-piptemplatetype-e.md) is set to **VIDEO_LIVE**. |
| [VideoMeetingControlGroup](arkts-arkui-videomeetingcontrolgroup-e.md) | Enumerates the video meeting component groups. They are used only when [PiPTemplateType](arkts-arkui-piptemplatetype-e.md) is set to **VIDEO_MEETING**. |
| [VideoPlayControlGroup](arkts-arkui-videoplaycontrolgroup-e.md) | Enumerates the video playback component groups. They are used only when [PiPTemplateType](arkts-arkui-piptemplatetype-e.md) is set to **VIDEO_PLAY**. |

<!--Del-->
### Enums（系统接口）

| Name | Description |
| --- | --- |
| [PiPTemplateType](arkts-arkui-piptemplatetype-e-sys.md) | Enumerates the PiP template types. |
<!--DelEnd-->

### Types

| Name | Description |
| --- | --- |
| [ControlPanelActionEventCallback](arkts-arkui-controlpanelactioneventcallback-t.md) | Describes the action event callback of the PiP controller. |
| [PiPActionEventType](arkts-arkui-pipactioneventtype-t.md) | Enumerates the types of action events of the PiP controller. |
| [PiPCallActionEvent](arkts-arkui-pipcallactionevent-t.md) | Defines the PiP action event in a video call. |
| [PiPControlGroup](arkts-arkui-pipcontrolgroup-t.md) | Describes the optional component groups of the PiP controller. An application can configure whether to display these optional components. This API must match [PiPTemplateType](arkts-arkui-piptemplatetype-e.md) when being used. Otherwise, the [create](arkts-arkui-create-f.md#create-1) API returns error code 401. |
| [PiPLiveActionEvent](arkts-arkui-pipliveactionevent-t.md) | Defines the PiP action event in a live. |
| [PiPMeetingActionEvent](arkts-arkui-pipmeetingactionevent-t.md) | Defines the PiP action event in a video meeting. |
| [PiPVideoActionEvent](arkts-arkui-pipvideoactionevent-t.md) | Defines the PiP action event during video playback. |

