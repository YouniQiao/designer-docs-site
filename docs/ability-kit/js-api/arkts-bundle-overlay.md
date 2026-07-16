# @ohos.bundle.overlay

The module provides APIs for querying the
[OverlayModuleInfo](arkts-ability-overlaymoduleinfo-i.md) of an application with the overlay
feature, and disabling and enabling the feature.

An application with the overlay feature contains an overlay resource package. For details about this package, see
[Overlay Mechanism](../../../../quick-start/resource-categories-and-access.md#overlay-mechanism).

> **NOTE**
>
> The APIs provided by this module apply only to the stage model and
> [static overlay](../../../../quick-start/resource-categories-and-access.md#using-overlay-in-static-mode) mode.

**Since:** 10

**System capability:** SystemCapability.BundleManager.BundleFramework.Overlay

## Modules to Import

```TypeScript
import { overlay } from '@kit.AbilityKit';
```

## Summary

### Functions

| Name | Description |
| --- | --- |
| [getOverlayModuleInfo](arkts-ability-getoverlaymoduleinfo-f.md#getoverlaymoduleinfo-1) | Obtains the OverlayModuleInfo about a module with the overlay feature in the current application. This API uses anasynchronous callback to return the result. |
| [getOverlayModuleInfo](arkts-ability-getoverlaymoduleinfo-f.md#getoverlaymoduleinfo-2) | Obtains the OverlayModuleInfo about a module with the overlay feature in the current application. This API uses apromise to return the result. |
| [getTargetOverlayModuleInfos](arkts-ability-gettargetoverlaymoduleinfos-f.md#gettargetoverlaymoduleinfos-1) | Obtains the OverlayModuleInfo associated with the specified target module. Modules with the overlay featuregenerally provide an overlay resource file for other modules (target module) on the device. This API uses anasynchronous callback to return the result. |
| [getTargetOverlayModuleInfos](arkts-ability-gettargetoverlaymoduleinfos-f.md#gettargetoverlaymoduleinfos-2) | Obtains the OverlayModuleInfo associated with the specified target module. Modules with the overlay featuregenerally provide an overlay resource file for other modules (target module) on the device. This API uses a promiseto return the result. |
| [setOverlayEnabled](arkts-ability-setoverlayenabled-f.md#setoverlayenabled-1) | Enables or disables a module with the overlay feature in the current application. This API uses an asynchronouscallback to return the result. |
| [setOverlayEnabled](arkts-ability-setoverlayenabled-f.md#setoverlayenabled-2) | Enables or disables a module with the overlay feature in the current application. This API uses a promise to returnthe result. |

<!--Del-->
### Functions（系统接口）

| Name | Description |
| --- | --- |
| [getOverlayModuleInfoByBundleName](arkts-ability-getoverlaymoduleinfobybundlename-f-sys.md#getoverlaymoduleinfobybundlename-1) | Obtains the information about all modules with the overlay feature in another application. This API uses anasynchronous callback to return the result.No permission is required when the specified application is the caller itself. |
| [getOverlayModuleInfoByBundleName](arkts-ability-getoverlaymoduleinfobybundlename-f-sys.md#getoverlaymoduleinfobybundlename-2) | Obtains the information about a module with the overlay feature in another application. This API uses anasynchronous callback to return the result.No permission is required when the specified application is the caller itself. |
| [getOverlayModuleInfoByBundleName](arkts-ability-getoverlaymoduleinfobybundlename-f-sys.md#getoverlaymoduleinfobybundlename-3) | Obtains the information about a module with the overlay feature in another application. This API uses a promise toreturn the result.No permission is required when the specified application is the caller itself. |
| [getTargetOverlayModuleInfosByBundleName](arkts-ability-gettargetoverlaymoduleinfosbybundlename-f-sys.md#gettargetoverlaymoduleinfosbybundlename-1) | Obtains the information about all modules with the overlay feature in another application. This API uses anasynchronous callback to return the result.No permission is required when the specified application is the caller itself. |
| [getTargetOverlayModuleInfosByBundleName](arkts-ability-gettargetoverlaymoduleinfosbybundlename-f-sys.md#gettargetoverlaymoduleinfosbybundlename-2) | Obtains the information about modules with the overlay feature in another application based on the target modulename. This API uses an asynchronous callback to return the result.No permission is required when the specified application is the caller itself. |
| [getTargetOverlayModuleInfosByBundleName](arkts-ability-gettargetoverlaymoduleinfosbybundlename-f-sys.md#gettargetoverlaymoduleinfosbybundlename-3) | Obtains the information about modules with the overlay feature in another application based on the target modulename. This API uses a promise to return the result.No permission is required when the specified application is the caller itself. |
| [setOverlayEnabledByBundleName](arkts-ability-setoverlayenabledbybundlename-f-sys.md#setoverlayenabledbybundlename-1) | Enables or disables a module with the overlay feature in another application. This API uses an asynchronouscallback to return the result.No permission is required when the specified application is the caller itself. |
| [setOverlayEnabledByBundleName](arkts-ability-setoverlayenabledbybundlename-f-sys.md#setoverlayenabledbybundlename-2) | Enables or disables a module with the overlay feature in another application. This API uses a promise to return theresult.No permission is required when the specified application is the caller itself. |
<!--DelEnd-->

### Types

| Name | Description |
| --- | --- |
| [OverlayModuleInfo](arkts-ability-overlaymoduleinfo-t.md) | Defines the information about a module with the overlay feature. |

