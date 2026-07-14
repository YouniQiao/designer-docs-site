# innerBundleManager

The module provides APIs for the Home Screen application. > **NOTE** > > This module is deprecated since API version 9. You are advised to use > [launcherBundleManager](arkts-bundle-launcherbundlemanager.md) and > [bundleMonitor](arkts-bundle-bundlemonitor.md) instead. > > The APIs provided by this module are system APIs.

**Since:** 8

**Deprecated since:** 9

**Substitutes:** [launcherBundleManager:launcherBundleManager](arkts-bundle-launcherbundlemanager.md)

**System capability:** SystemCapability.BundleManager.BundleFramework

**System API:** This is a system API.

## Modules to Import

```TypeScript
import { BundleStatusCallback } from '@kit.AbilityKit';
```

## Summary

<!--Del-->
### Functions（系统接口）

| Name | Description |
| --- | --- |
| [getLauncherAbilityInfos](arkts-ability-getlauncherabilityinfos-f-sys.md#getlauncherabilityinfos-1) | Obtains an array of the launcher ability information based on a given bundle name. This API uses an asynchronous callback to return the result. &gt; **NOTE** &gt; &gt; This API has been supported since API version 8 and deprecated since API version 9. You are advised to use &gt; [getLauncherAbilityInfo](@ohos.bundle.launcherBundleManager:launcherBundleManager.getLauncherAbilityInfo(bundleName: string, userId: int, callback: AsyncCallback&lt;Array&lt;LauncherAbilityInfo&gt;&gt;)) &gt; instead. |
| [getLauncherAbilityInfos](arkts-ability-getlauncherabilityinfos-f-sys.md#getlauncherabilityinfos-2) | Obtains an array of the launcher ability information based on a given bundle name. This API uses a promise to return the result. &gt; **NOTE** &gt; &gt; This API has been supported since API version 8 and deprecated since API version 9. You are advised to use &gt; [getLauncherAbilityInfo](@ohos.bundle.launcherBundleManager:launcherBundleManager.getLauncherAbilityInfo(bundleName: string, userId: int, callback: AsyncCallback&lt;Array&lt;LauncherAbilityInfo&gt;&gt;)) &gt; instead. |
| [on](arkts-ability-on-f-sys.md#on-1) | Registers a callback to receive bundle status changes. This API uses an asynchronous callback to return the result. &gt; **NOTE** &gt; &gt; This API has been supported since API version 8 and deprecated since API version 9. You are advised to use &gt; [on](arkts-ability-on-f-sys.md#on-1) &gt; instead. |
| [on](arkts-ability-on-f-sys.md#on-2) | Registers a callback to receive bundle status changes. This API uses an asynchronous callback to return the result. &gt; **NOTE** &gt; &gt; This API has been supported since API version 8 and deprecated since API version 9. You are advised to use &gt; [on](arkts-ability-on-f-sys.md#on-1) &gt; instead. |
| [off](arkts-ability-off-f-sys.md#off-1) | Unregisters the callback that receives bundle status changes. This API uses an asynchronous callback to return the result. &gt; **NOTE** &gt; &gt; This API has been supported since API version 8 and deprecated since API version 9. You are advised to use &gt; [off](arkts-ability-off-f-sys.md#off-1) &gt; instead. |
| [off](arkts-ability-off-f-sys.md#off-2) | Unregisters the callback that receives bundle status changes. This API uses an asynchronous callback to return the result. &gt; **NOTE** &gt; &gt; This API has been supported since API version 8 and deprecated since API version 9. You are advised to use &gt; [off](arkts-ability-off-f-sys.md#off-1) &gt; instead. |
| [getAllLauncherAbilityInfos](arkts-ability-getalllauncherabilityinfos-f-sys.md#getalllauncherabilityinfos-1) | Obtains the information about all launcher abilities. This API uses an asynchronous callback to return the result. &gt; **NOTE** &gt; &gt; This API has been supported since API version 8 and deprecated since API version 9. You are advised to use &gt; [getAllLauncherAbilityInfo](@ohos.bundle.launcherBundleManager:launcherBundleManager.getAllLauncherAbilityInfo(userId: int, callback: AsyncCallback&lt;Array&lt;LauncherAbilityInfo&gt;&gt;)) &gt; instead. |
| [getAllLauncherAbilityInfos](arkts-ability-getalllauncherabilityinfos-f-sys.md#getalllauncherabilityinfos-2) | Obtains the information about all launcher abilities. This API uses a promise to return the result. &gt; **NOTE** &gt; &gt; This API has been supported since API version 8 and deprecated since API version 9. You are advised to use &gt; [getAllLauncherAbilityInfo](@ohos.bundle.launcherBundleManager:launcherBundleManager.getAllLauncherAbilityInfo(userId: int, callback: AsyncCallback&lt;Array&lt;LauncherAbilityInfo&gt;&gt;)) &gt; instead. |
| [getShortcutInfos](arkts-ability-getshortcutinfos-f-sys.md#getshortcutinfos-1) | Obtains an array of the shortcut information based on a given bundle name. This API uses an asynchronous callback to return the result. &gt; **NOTE** &gt; &gt; This API has been supported since API version 8 and deprecated since API version 9. You are advised to use &gt; [getShortcutInfo](@ohos.bundle.launcherBundleManager:launcherBundleManager.getShortcutInfo(bundleName :string, callback: AsyncCallback&lt;Array&lt;ShortcutInfo&gt;&gt;)) &gt; instead. |
| [getShortcutInfos](arkts-ability-getshortcutinfos-f-sys.md#getshortcutinfos-2) | Obtains an array of the shortcut information based on a given bundle name. This API uses a promise to return the result. &gt; **NOTE** &gt; &gt; This API has been supported since API version 8 and deprecated since API version 9. You are advised to use &gt; [getShortcutInfo](@ohos.bundle.launcherBundleManager:launcherBundleManager.getShortcutInfo(bundleName :string, callback: AsyncCallback&lt;Array&lt;ShortcutInfo&gt;&gt;)) &gt; instead. |
<!--DelEnd-->

