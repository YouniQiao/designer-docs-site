---
last_update:
  date: 2026-07-04
---

# TipInfo

Represents the tip information displayed during the authentication, which is used to provide feedback during the authentication process.

**Since:** 9

**Deprecated since:** 11

**Substitutes:** [AuthTipInfo](arkts-userauthentication-authtipinfo-i.md#authtipinfo)

**System capability:** SystemCapability.UserIAM.UserAuth.Core

## Modules to Import

```TypeScript
import { userAuth } from '@ohos.userIAM.userAuth';
```

## module

```TypeScript
module: number
```

ID of the module that sends the tip information.

**Type:** number

**Since:** 9

**Deprecated since:** 11

**Substitutes:** tipType

**System capability:** SystemCapability.UserIAM.UserAuth.Core

## tip

```TypeScript
tip: number
```

Tip to be given during the authentication process.

**Type:** number

**Since:** 9

**Deprecated since:** 11

**Substitutes:** tipCode

**System capability:** SystemCapability.UserIAM.UserAuth.Core

