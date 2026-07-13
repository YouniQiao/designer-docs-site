# @ohos.bundle.launcherBundleManager

The module providers APIs for launcher applications (applications with icons on the home screen) to obtain the
[launcher ability information](arkts-ability-launcherabilityinfo-i.md).

**Since:** 9

**System capability:** SystemCapability.BundleManager.BundleFramework.Launcher

## Modules to Import

```TypeScript
import { launcherBundleManager } from '@kit.AbilityKit';
```

## Summary

### Functions

| Name | Description |
| --- | --- |
| [getLauncherAbilityInfoSync](arkts-ability-getlauncherabilityinfosync-f.md#getlauncherabilityinfosync-1) | Obtains the [launcher ability information](arkts-ability-launcherabilityinfo-i.md) based onthe given bundle name and user ID. |

<!--Del-->
### Functions（系统接口）

| Name | Description |
| --- | --- |
| [getAllLauncherAbilityInfo](arkts-ability-getalllauncherabilityinfo-f-sys.md#getalllauncherabilityinfo-1) | Obtains the [launcher ability information](arkts-ability-launcherabilityinfo-i.md) of allapplications based on the given user ID. This API uses an asynchronous callback to return the result. |
| [getAllLauncherAbilityInfo](arkts-ability-getalllauncherabilityinfo-f-sys.md#getalllauncherabilityinfo-2) | Obtains the [launcher ability information](arkts-ability-launcherabilityinfo-i.md) of allapplications based on the given user ID. This API uses a promise to return the result. |
| [getLauncherAbilityInfo](arkts-ability-getlauncherabilityinfo-f-sys.md#getlauncherabilityinfo-1) | Obtains the [launcher ability information](arkts-ability-launcherabilityinfo-i.md) based onthe given bundle name and user ID. This API uses an asynchronous callback to return the result. |
| [getLauncherAbilityInfo](arkts-ability-getlauncherabilityinfo-f-sys.md#getlauncherabilityinfo-2) | Obtains the [launcher ability information](arkts-ability-launcherabilityinfo-i.md) based onthe given bundle name and user ID. This API uses a promise to return the result. |
| [getShortcutInfo](arkts-ability-getshortcutinfo-f-sys.md#getshortcutinfo-1) | Obtains the [shortcut information](arkts-ability-shortcutinfo-i.md) of the current user based on the givenbundle name of a main application. To obtain shortcut information about an application clone, use[getShortcutInfoByAppIndex](arkts-ability-getshortcutinfobyappindex-f-sys.md#getshortcutinfobyappindex-1). This API uses an asynchronouscallback to return the result.No permission is required for obtaining the caller's own information. |
| [getShortcutInfo](arkts-ability-getshortcutinfo-f-sys.md#getshortcutinfo-2) | Obtains the [shortcut information](arkts-ability-shortcutinfo-i.md) of the current user based on the givenbundle name of a main application. To obtain shortcut information about an application clone, use[getShortcutInfoByAppIndex](arkts-ability-getshortcutinfobyappindex-f-sys.md#getshortcutinfobyappindex-1). This API uses a promise toreturn the result.No permission is required for obtaining the caller's own information. |
| [getShortcutInfoByAppIndex](arkts-ability-getshortcutinfobyappindex-f-sys.md#getshortcutinfobyappindex-1) | Obtains the [shortcut information](arkts-ability-shortcutinfo-i.md) of the current user based on the index of anapplication clone.No permission is required for obtaining the caller's own information. |
| [getShortcutInfoSync](arkts-ability-getshortcutinfosync-f-sys.md#getshortcutinfosync-1) | Obtains the [shortcut information](arkts-ability-shortcutinfo-i.md) of the current user based on the givenbundle name of a main application. To obtain shortcut information about an application clone, use[getShortcutInfoByAppIndex](arkts-ability-getshortcutinfobyappindex-f-sys.md#getshortcutinfobyappindex-1).No permission is required for obtaining the caller's own information. |
| [getShortcutInfoSync](arkts-ability-getshortcutinfosync-f-sys.md#getshortcutinfosync-2) | Obtains the [shortcut information](arkts-ability-shortcutinfo-i.md) of the specified user based on the givenbundle name of a main application. To obtain shortcut information about an application clone, use[getShortcutInfoByAppIndex](arkts-ability-getshortcutinfobyappindex-f-sys.md#getshortcutinfobyappindex-1).No permission is required for obtaining the caller's own information. |
| [startShortcut](arkts-ability-startshortcut-f-sys.md#startshortcut-1) | Starts an ability based on the specified [shortcut information](arkts-ability-shortcutinfo-i.md). This API usesa promise to return the result. |
| [startShortcutWithReason](arkts-ability-startshortcutwithreason-f-sys.md#startshortcutwithreason-1) | Starts an ability based on the specified shortcut information, and carries the reason for the shortcut launch. ThisAPI uses a promise to return the result.The launched ability can obtain the launch reason through the **launchReasonMessage** field of[LaunchParam](arkts-ability-launchparam-i.md) and handle service logicaccordingly. |
<!--DelEnd-->

### Types

| Name | Description |
| --- | --- |
| [LauncherAbilityInfo](arkts-ability-launcherabilityinfo-t.md) | Defines the information about the launcher ability. |

<!--Del-->
### Types（系统接口）

| Name | Description |
| --- | --- |
| [ParameterItem](arkts-ability-parameteritem-t-sys.md) | Defines the custom data in the shortcut configuration. |
| [ShortcutInfo](arkts-ability-shortcutinfo-t-sys.md) | Defines the shortcut information defined in the[module.json5](../../../../quick-start/module-configuration-file.md#shortcuts) file of the application. |
| [ShortcutWant](arkts-ability-shortcutwant-t-sys.md) | Defines the target [wants](../../../../quick-start/module-configuration-file.md#wants) defined in the shortcutconfiguration. |
<!--DelEnd-->

