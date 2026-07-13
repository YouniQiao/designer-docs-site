# @ohos.bundle.appControl

The module provides APIs for setting, obtaining, and deleting the disposed status of an application. An application
in the disposed status is forbidden to run. When a user clicks the application icon on the home screen, the
corresponding page is displayed based on the disposal intent.

> **NOTE**
>
> The APIs provided by this module are system APIs.

**Since:** 9

**System capability:** SystemCapability.BundleManager.BundleFramework.AppControl

**System API:** This is a system API.

## Modules to Import

```TypeScript
import { appControl } from '@kit.AbilityKit';
```

## Summary

<!--Del-->
### Functions（系统接口）

| Name | Description |
| --- | --- |
| [deleteDisposedStatus](arkts-ability-deletedisposedstatus-f-sys.md#deletedisposedstatus-1) | Deletes the disposed status for an application. This API uses an asynchronous callback to return the result. If theoperation is successful, **null** is returned. If the operation fails, an error message is returned. |
| [deleteDisposedStatus](arkts-ability-deletedisposedstatus-f-sys.md#deletedisposedstatus-2) | Deletes the disposed status for an application. This API uses a promise to return the result. If the operation issuccessful, **null** is returned. If the operation fails, an error message is returned. |
| [deleteDisposedStatusSync](arkts-ability-deletedisposedstatussync-f-sys.md#deletedisposedstatussync-1) | Deletes the disposed status for an application or an application clone. This API returns the result synchronously.If the operation is successful, **null** is returned. If the operation fails, an error message is returned. |
| [deleteUninstallDisposedRule](arkts-ability-deleteuninstalldisposedrule-f-sys.md#deleteuninstalldisposedrule-1) | Deletes an uninstallation disposed rule for an application or an application clone. |
| [getAllDisposedRules](arkts-ability-getalldisposedrules-f-sys.md#getalldisposedrules-1) | Obtains all the disposed rules set for the current user. |
| [getDisposedRule](arkts-ability-getdisposedrule-f-sys.md#getdisposedrule-1) | Obtains the disposed rule of an application or an application clone. |
| [getDisposedRulesByBundle](arkts-ability-getdisposedrulesbybundle-f-sys.md#getdisposedrulesbybundle-1) | Query all disposed rules under the current user for the specified bundle name. |
| [getDisposedStatus](arkts-ability-getdisposedstatus-f-sys.md#getdisposedstatus-1) | Obtains the disposed status of an application. This API uses an asynchronous callback to return the result. If theoperation is successful, the disposed status of the application is returned. If the operation fails, an errormessage is returned. |
| [getDisposedStatus](arkts-ability-getdisposedstatus-f-sys.md#getdisposedstatus-2) | Obtains the disposed status of an application. This API uses a promise to return the result. If the operation issuccessful, the disposed status of the application is returned. If the operation fails, an error message isreturned. |
| [getDisposedStatusSync](arkts-ability-getdisposedstatussync-f-sys.md#getdisposedstatussync-1) | Obtains the disposed status of an application. This API returns the result synchronously. If the operation issuccessful, the disposed status of the application is returned. If the operation fails, an error message isreturned. |
| [getUninstallDisposedRule](arkts-ability-getuninstalldisposedrule-f-sys.md#getuninstalldisposedrule-1) | Obtains the uninstallation disposed rule of an application or an application clone. |
| [setDisposedRule](arkts-ability-setdisposedrule-f-sys.md#setdisposedrule-1) | Sets the disposed rule for an application or an application clone. |
| [setDisposedRules](arkts-ability-setdisposedrules-f-sys.md#setdisposedrules-1) | Sets disposed rules in batches for an application or an application clone. |
| [setDisposedStatus](arkts-ability-setdisposedstatus-f-sys.md#setdisposedstatus-1) | Sets the disposed status for an application. This API uses an asynchronous callback to return the result. If theoperation is successful, **null** is returned. If the operation fails, an error message is returned. |
| [setDisposedStatus](arkts-ability-setdisposedstatus-f-sys.md#setdisposedstatus-2) | Sets the disposed status for an application. This API uses a promise to return the result. If the operation issuccessful, **null** is returned. If the operation fails, an error message is returned. |
| [setDisposedStatusSync](arkts-ability-setdisposedstatussync-f-sys.md#setdisposedstatussync-1) | Sets the disposed status for an application. This API returns the result synchronously. If the operation issuccessful, **null** is returned. If the operation fails, an error message is returned. |
| [setUninstallDisposedRule](arkts-ability-setuninstalldisposedrule-f-sys.md#setuninstalldisposedrule-1) | Sets an uninstallation disposed rule for an application or an application clone. |
<!--DelEnd-->

<!--Del-->
### Interfaces（系统接口）

| Name | Description |
| --- | --- |
| [DisposedRule](arkts-ability-disposedrule-i-sys.md) | Defines a disposed rule. |
| [DisposedRuleConfiguration](arkts-ability-disposedruleconfiguration-i-sys.md) | Describes the configurations for setting disposed rules in batches. |
| [UninstallDisposedRule](arkts-ability-uninstalldisposedrule-i-sys.md) | Describes an uninstallation disposed rule. |
<!--DelEnd-->

<!--Del-->
### Enums（系统接口）

| Name | Description |
| --- | --- |
| [ComponentType](arkts-ability-componenttype-e-sys.md) | Enumerates the types of application components that function as the displayed page. |
| [ControlType](arkts-ability-controltype-e-sys.md) | Enumerates the control type of application disposal. |
| [DisposedType](arkts-ability-disposedtype-e-sys.md) | Enumerates the types of application disposals. |
| [PageJumpMode](arkts-ability-pagejumpmode-e-sys.md) | Enumerates the page jump modes used when an application is blocked. |
| [UninstallComponentType](arkts-ability-uninstallcomponenttype-e-sys.md) | Enumerates the types of abilities during uninstallation. |
<!--DelEnd-->

