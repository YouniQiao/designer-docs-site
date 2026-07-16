# @ohos.bundle.shortcutManager

This module provides the application's management capabilities for shortcuts, including setting whether a shortcut
is displayed. Through shortcuts, users can quickly launch specific features of an app from the home screen,
improving the app's ease of use and user retention. Typical usage scenarios include: providing users with quick
access to frequently used features, dynamically adjusting the display of shortcuts based on user habits, etc.

**Since:** 20

**System capability:** SystemCapability.BundleManager.BundleFramework.Launcher

**System API:** This is a system API.

## Modules to Import

```TypeScript
import { shortcutManager } from '@kit.AbilityKit';
```

## Summary

### Functions

| Name | Description |
| --- | --- |
| [getAllShortcutInfoForSelf](arkts-ability-getallshortcutinfoforself-f.md#getallshortcutinfoforself-1) | Obtains all the shortcut information defined in the[configuration](../../../../quick-start/module-configuration-file.md#shortcuts) file of the current application. ThisAPI uses a promise to return the result. |
| [isShortcutSupported](arkts-ability-isshortcutsupported-f.md#isshortcutsupported-1) | Checks whether the current device supports shortcuts. |
| [setShortcutVisibleForSelf](arkts-ability-setshortcutvisibleforself-f.md#setshortcutvisibleforself-1) | Sets whether to display the specified shortcut for the current application. This API uses a promise to return theresult. |

<!--Del-->
### Functions（系统接口）

| Name | Description |
| --- | --- |
| [addDesktopShortcutInfo](arkts-ability-adddesktopshortcutinfo-f-sys.md#adddesktopshortcutinfo-1) | Adds a shortcut for the given user. This API uses a promise to return the result. |
| [addDynamicShortcutInfos](arkts-ability-adddynamicshortcutinfos-f-sys.md#adddynamicshortcutinfos-1) | Adds dynamic shortcuts for the given user. |
| [deleteDesktopShortcutInfo](arkts-ability-deletedesktopshortcutinfo-f-sys.md#deletedesktopshortcutinfo-1) | Deletes a shortcut for the given user. This API uses a promise to return the result. |
| [deleteDynamicShortcutInfos](arkts-ability-deletedynamicshortcutinfos-f-sys.md#deletedynamicshortcutinfos-1) | Deletes dynamic shortcuts. |
| [getAllDesktopShortcutInfo](arkts-ability-getalldesktopshortcutinfo-f-sys.md#getalldesktopshortcutinfo-1) | Obtains the information about all shortcuts of the given user. |
| [getShortcutInfoByAbility](arkts-ability-getshortcutinfobyability-f-sys.md#getshortcutinfobyability-1) | Obtains shortcut info by bundleName, moduleName, abilityName, userId and appIndex.If you need to obtains shortcut info under the current user, ohos.permission.GET_BUNDLE_INFO_PRIVILEGEDneeds to be applied for.If you need to obtains shortcut info under other users, ohos.permission.GET_BUNDLE_INFO_PRIVILEGED andohos.permission.INTERACT_ACROSS_LOCAL_ACCOUNTS need to be applied for. |
| [setShortcutsEnabled](arkts-ability-setshortcutsenabled-f-sys.md#setshortcutsenabled-1) | Enables or disables the specified static shortcuts. This API uses a promise to return the result. |
<!--DelEnd-->

<!--Del-->
### Types（系统接口）

| Name | Description |
| --- | --- |
| [ParameterItem](arkts-ability-parameteritem-t-sys.md) | Defines the custom data in the shortcut configuration. |
| [ShortcutInfo](arkts-ability-shortcutinfo-t-sys.md) | Defines the shortcut information defined in the[module.json5](../../../../quick-start/module-configuration-file.md#shortcuts) file of the application. |
| [ShortcutWant](arkts-ability-shortcutwant-t-sys.md) | Defines the target [wants](../../../../quick-start/module-configuration-file.md#wants) defined in the shortcutconfiguration. |
<!--DelEnd-->

