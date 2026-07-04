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

## navigationButtonText

```TypeScript
navigationButtonText?: string
```

Text on the navigation button. It cannot exceed 60 characters. It is supported in single fingerprint or facial authentication before API version 18. Since API version 18, it is also supported in combined facial and fingerprint authentication. By default, the custom navigation button is not displayed. This API can be used in atomic services since API version 12.

**Type:** string

**Since:** 10

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.UserIAM.UserAuth.Core

## title

```TypeScript
title: string
```

Title of the user authentication page, which cannot be empty or exceed 500 characters. You are advised to set it to the authentication purpose, such as payment or application login. This API can be used in atomic services since API version 12.

**Type:** string

**Since:** 10

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.UserIAM.UserAuth.Core

## uiContext

```TypeScript
uiContext?: Context
```

Provide this parameter to display the authentication dialog box in modal application mode. This mode is applicable only to phone, tablet and 2-in-1 devices. If this mode is not used or other types of devices are used, the authentication dialog box is displayed in modal system mode. By default, the identity authentication dialog box is displayed in modal system mode. This API can be used in atomic services since API version 18.

**Type:** Context

**Since:** 18

**Atomic service API:** This API can be used in atomic services since API version 18.

**System capability:** SystemCapability.UserIAM.UserAuth.Core

