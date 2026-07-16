# @ohos.app.ability.dialogSession

The dialogSession module provides APIs related to the dialog box.

**Since:** 11

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**System API:** This is a system API.

## Modules to Import

```TypeScript
import { dialogSession } from '@kit.AbilityKit';
```

## Summary

<!--Del-->
### Functions（系统接口）

| Name | Description |
| --- | --- |
| [getDialogSessionInfo](arkts-ability-getdialogsessioninfo-f-sys.md#getdialogsessioninfo-1) | Obtains the session information based on the session ID. |
| [sendDialogResult](arkts-ability-senddialogresult-f-sys.md#senddialogresult-1) | Sends a request for a dialog box. This API uses a promise to return the result. |
| [sendDialogResult](arkts-ability-senddialogresult-f-sys.md#senddialogresult-2) | Sends a request for a dialog box. This API uses an asynchronous callback to return the result. |
<!--DelEnd-->

<!--Del-->
### Interfaces（系统接口）

| Name | Description |
| --- | --- |
| [DialogAbilityInfo](arkts-ability-dialogabilityinfo-i-sys.md) | Provides DialogAbility information, including the bundle name, module name, and ability name. |
| [DialogSessionInfo](arkts-ability-dialogsessioninfo-i-sys.md) | Provides session information, including the requester information, target ability information list, and otherparameters. |
<!--DelEnd-->

