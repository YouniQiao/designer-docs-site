# @ohos.bundle.launcherBundleManager

The module providers APIs for launcher applications (applications with icons on the home screen) to obtain the [launcher ability information](arkts-ability-launcherabilityinfo-i.md).

**Since:** 9

<!--Device-unnamed-declare namespace launcherBundleManager--><!--Device-unnamed-declare namespace launcherBundleManager-End-->

**System capability:** SystemCapability.BundleManager.BundleFramework.Launcher

## Modules to Import

```TypeScript
import { launcherBundleManager } from '@kit.AbilityKit';
```

## Summary

### Functions

| Name | Description |
| --- | --- |
| [getLauncherAbilityInfoSync](arkts-ability-launcherbundlemanager-getlauncherabilityinfosync-f.md#getlauncherabilityinfosync) | Obtains the [launcher ability information](arkts-ability-launcherabilityinfo-i.md) based on the given bundle name and user ID. |

<!--Del-->
### Functions（系统接口）

| Name | Description |
| --- | --- |
| [getAllLauncherAbilityInfo](arkts-ability-launcherbundlemanager-getalllauncherabilityinfo-f-sys.md#getalllauncherabilityinfo) | Obtains the [launcher ability information](arkts-ability-launcherabilityinfo-i.md) of all applications based on the given user ID. This API uses an asynchronous callback to return the result. |
| [getAllLauncherAbilityInfo](arkts-ability-launcherbundlemanager-getalllauncherabilityinfo-f-sys.md#getalllauncherabilityinfo-1) | Obtains the [launcher ability information](arkts-ability-launcherabilityinfo-i.md) of all applications based on the given user ID. This API uses a promise to return the result. |
| [getLauncherAbilityInfo](arkts-ability-launcherbundlemanager-getlauncherabilityinfo-f-sys.md#getlauncherabilityinfo) | Obtains the [launcher ability information](arkts-ability-launcherabilityinfo-i.md) based on the given bundle name and user ID. This API uses an asynchronous callback to return the result. |
| [getLauncherAbilityInfo](arkts-ability-launcherbundlemanager-getlauncherabilityinfo-f-sys.md#getlauncherabilityinfo-1) | Obtains the [launcher ability information](arkts-ability-launcherabilityinfo-i.md) based on the given bundle name and user ID. This API uses a promise to return the result. |
| [getShortcutInfo](arkts-ability-launcherbundlemanager-getshortcutinfo-f-sys.md#getshortcutinfo) | Obtains the [shortcut information](arkts-ability-shortcutinfo-i-sys.md) of the current user based on the given bundle name of a main application. To obtain shortcut information about an application clone, use [getShortcutInfoByAppIndex](arkts-ability-launcherbundlemanager-getshortcutinfobyappindex-f-sys.md#getshortcutinfobyappindex-1). This API uses an asynchronous callback to return the result.  No permission is required for obtaining the caller's own information. |
| [getShortcutInfo](arkts-ability-launcherbundlemanager-getshortcutinfo-f-sys.md#getshortcutinfo-1) | Obtains the [shortcut information](arkts-ability-shortcutinfo-i-sys.md) of the current user based on the given bundle name of a main application. To obtain shortcut information about an application clone, use [getShortcutInfoByAppIndex](arkts-ability-launcherbundlemanager-getshortcutinfobyappindex-f-sys.md#getshortcutinfobyappindex-1). This API uses a promise to return the result.  No permission is required for obtaining the caller's own information. |
| [getShortcutInfoByAppIndex](arkts-ability-launcherbundlemanager-getshortcutinfobyappindex-f-sys.md#getshortcutinfobyappindex) | Obtains the [shortcut information](arkts-ability-shortcutinfo-i-sys.md) of the current user based on the index of an application clone.  No permission is required for obtaining the caller's own information. |
| [getShortcutInfoSync](arkts-ability-launcherbundlemanager-getshortcutinfosync-f-sys.md#getshortcutinfosync) | Obtains the [shortcut information](arkts-ability-shortcutinfo-i-sys.md) of the current user based on the given bundle name of a main application. To obtain shortcut information about an application clone, use [getShortcutInfoByAppIndex](arkts-ability-launcherbundlemanager-getshortcutinfobyappindex-f-sys.md#getshortcutinfobyappindex-1).  No permission is required for obtaining the caller's own information. |
| [getShortcutInfoSync](arkts-ability-launcherbundlemanager-getshortcutinfosync-f-sys.md#getshortcutinfosync-1) | Obtains the [shortcut information](arkts-ability-shortcutinfo-i-sys.md) of the specified user based on the given bundle name of a main application. To obtain shortcut information about an application clone, use [getShortcutInfoByAppIndex](arkts-ability-launcherbundlemanager-getshortcutinfobyappindex-f-sys.md#getshortcutinfobyappindex-1).  No permission is required for obtaining the caller's own information. |
| [startShortcut](arkts-ability-launcherbundlemanager-startshortcut-f-sys.md#startshortcut) | Starts an ability based on the specified [shortcut information](arkts-ability-shortcutinfo-i-sys.md). This API uses a promise to return the result. |
| [startShortcutWithReason](arkts-ability-launcherbundlemanager-startshortcutwithreason-f-sys.md#startshortcutwithreason) | Starts an ability based on the specified shortcut information, and carries the reason for the shortcut launch. This API uses a promise to return the result.  The launched ability can obtain the launch reason through the **launchReasonMessage** field of [LaunchParam](arkts-ability-abilityconstant-launchparam-i.md) and handle service logic accordingly. |
<!--DelEnd-->

### Types

| Name | Description |
| --- | --- |
| [LauncherAbilityInfo](arkts-ability-launcherbundlemanager-launcherabilityinfo-t.md) | Defines the information about the launcher ability. |

<!--Del-->
### Types（系统接口）

| Name | Description |
| --- | --- |
| [ParameterItem](arkts-ability-launcherbundlemanager-parameteritem-t-sys.md) | Defines the custom data in the shortcut configuration. |
| [ShortcutInfo](arkts-ability-launcherbundlemanager-shortcutinfo-t-sys.md) | Defines the shortcut information defined in the [module.json5](docroot://quick-start/module-configuration-file.md#shortcuts) file of the application. |
| [ShortcutWant](arkts-ability-launcherbundlemanager-shortcutwant-t-sys.md) | Defines the target [wants](docroot://quick-start/module-configuration-file.md#wants) defined in the shortcut configuration. |
<!--DelEnd-->

