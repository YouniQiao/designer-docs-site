# @ohos.app.ability.quickFixManager

The quickFixManager module provides APIs for quick fix. With quick fix, you can fix bugs in your application by applying patches, which is more efficient than by updating the entire application.

**Since:** 9

**System capability:** SystemCapability.Ability.AbilityRuntime.QuickFix

**System API:** This is a system API.

## Modules to Import

```TypeScript
import { quickFixManager } from '@ohos.app.ability.quickFixManager';
```

## Summary

<!--Del-->
### Functions（系统接口）

| Name | Description |
| --- | --- |
| [applyQuickFix](arkts-ability-applyquickfix-f-sys.md#applyquickfix-1) | Applies a quick fix patch. This API uses an asynchronous callback to return the result. |
| [applyQuickFix](arkts-ability-applyquickfix-f-sys.md#applyquickfix-2) | Applies a quick fix patch. This API uses a promise to return the result. |
| [getApplicationQuickFixInfo](arkts-ability-getapplicationquickfixinfo-f-sys.md#getapplicationquickfixinfo-1) | Obtains the quick fix information of the application. This API uses an asynchronous callback to return the result. |
| [getApplicationQuickFixInfo](arkts-ability-getapplicationquickfixinfo-f-sys.md#getapplicationquickfixinfo-2) | Obtains the quick fix information of the application. This API uses a promise to return the result. |
| [revokeQuickFix](arkts-ability-revokequickfix-f-sys.md#revokequickfix-1) | Revokes quick fix. This API uses an asynchronous callback to return the result. |
| [revokeQuickFix](arkts-ability-revokequickfix-f-sys.md#revokequickfix-2) | Revokes quick fix. This API uses a promise to return the result. |
<!--DelEnd-->

<!--Del-->
### Interfaces（系统接口）

| Name | Description |
| --- | --- |
| [ApplicationQuickFixInfo](arkts-ability-applicationquickfixinfo-i-sys.md) | Defines the quick fix information at the application level. |
| [HapModuleQuickFixInfo](arkts-ability-hapmodulequickfixinfo-i-sys.md) | Defines the quick fix information at the HAP file level. |
<!--DelEnd-->

