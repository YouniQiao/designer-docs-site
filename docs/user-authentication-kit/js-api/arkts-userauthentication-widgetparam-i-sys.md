---
last_update:
  date: 2026-07-04
---

# WidgetParam

Represents the information presented on the user authentication page.

**Since:** 10

**System capability:** SystemCapability.UserIAM.UserAuth.Core

## Modules to Import

```TypeScript
import { userAuth } from '@ohos.userIAM.userAuth';
```

## appWindow

```TypeScript
appWindow?: window.Window
```

This parameter is also provided to display the authentication dialog box in modal application mode. If uiContext has been provided, this parameter would be ignored.

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

Display format of the user authentication page. The default value is **WindowModeType.DIALOG_BOX**. This is a system API.

**Type:** WindowModeType

**Default:** WindowModeType.DIALOG_BOX

**Since:** 10

**System capability:** SystemCapability.UserIAM.UserAuth.Core

**System API:** This is a system API.

