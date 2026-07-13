# WidgetParam

Represents the information presented on the user authentication page. This API is used to configure the display
style and interaction mode of the authentication screen, including the title, navigation button text, and window
mode. By properly setting these parameters, you can provide clear authentication guidance and good interaction
experience for users.

**Since:** 10

**System capability:** SystemCapability.UserIAM.UserAuth.Core

## Modules to Import

```TypeScript
import { userAuth } from '@kit.UserAuthenticationKit';
```

## appWindow

```TypeScript
appWindow?: window.Window
```

This parameter is also provided to display the authentication dialog box in modal application mode.
If uiContext has been provided, this parameter would be ignored.

**Type:** window.Window

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 26.0.0.

**System capability:** SystemCapability.UserIAM.UserAuth.Core

**System API:** This is a system API.

## windowMode

```TypeScript
windowMode?: WindowModeType
```

Enumerates the window types of the authentication widget. This parameter is used to control the window style of
the system authentication widget. You can select the dialog box mode (**DIALOG_BOX**) or full-screen mode (
**FULLSCREEN**). The default value is **WindowModeType.DIALOG_BOX**.

**Type:** WindowModeType

**Default:** WindowModeType.DIALOG_BOX

**Since:** 10

**System capability:** SystemCapability.UserIAM.UserAuth.Core

**System API:** This is a system API.

