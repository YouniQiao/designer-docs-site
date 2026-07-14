# @ohos.bundle

The module provides APIs for obtaining information about an application, including [bundle information](arkts-ability-bundleinfo-depr-i.md), [application information](arkts-ability-applicationinfo-depr-i.md), and [ability information](arkts-ability-abilityinfo-depr-i.md). It also provides APIs to obtain and set the application disabling state. > **NOTE** > > The APIs of this module have been deprecated since API version 9. You are advised to use > [@ohos.bundle.bundleManager](arkts-bundle-bundlemanager.md) instead.

**Since:** 7

**Deprecated since:** 9

**Substitutes:** [bundleManager:bundleManager](arkts-bundle-bundlemanager.md)

**System capability:** SystemCapability.BundleManager.BundleFramework

## Modules to Import

```TypeScript
import { bundle } from '@kit.AbilityKit';
```

## Summary

### Functions

| Name | Description |
| --- | --- |
| [getAbilityIcon](arkts-ability-getabilityicon-f.md#getabilityicon-1) | Obtains the [PixelMap](../../apis-image-kit/arkts-apis/arkts-multimedia-image.md) of the icon corresponding to a given bundle name and ability name. This API uses an asynchronous callback to return the result. No permission is required for obtaining the caller's own information. |
| [getAbilityIcon](arkts-ability-getabilityicon-f.md#getabilityicon-2) | Obtains the [PixelMap](../../apis-image-kit/arkts-apis/arkts-multimedia-image.md) of the icon corresponding to a given bundle name and ability name. This API uses a promise to return the result. No permission is required for obtaining the caller's own information. |
| [getAbilityInfo](arkts-ability-getabilityinfo-f.md#getabilityinfo-1) | Obtains the ability information based on a given bundle name and ability name. This API uses an asynchronous callback to return the result. No permission is required for obtaining the caller's own information. |
| [getAbilityInfo](arkts-ability-getabilityinfo-f.md#getabilityinfo-2) | Obtains the ability information based on a given bundle name and ability name. This API uses a promise to return the result. No permission is required for obtaining the caller's own information. |
| [getAbilityLabel](arkts-ability-getabilitylabel-f.md#getabilitylabel-1) | Obtains the application name based on a given bundle name and ability name. This API uses an asynchronous callback to return the result. No permission is required for obtaining the caller's own information. |
| [getAbilityLabel](arkts-ability-getabilitylabel-f.md#getabilitylabel-2) | Obtains the application name based on a given bundle name and ability name. This API uses a promise to return the result. No permission is required for obtaining the caller's own information. |
| [getAllApplicationInfo](arkts-ability-getallapplicationinfo-f.md#getallapplicationinfo-1) | Obtains the information about all applications. This API uses an asynchronous callback to return the result. |
| [getAllApplicationInfo](arkts-ability-getallapplicationinfo-f.md#getallapplicationinfo-2) | Obtains the information about all applications of the current user. This API uses an asynchronous callback to return the result. |
| [getAllApplicationInfo](arkts-ability-getallapplicationinfo-f.md#getallapplicationinfo-3) | Obtains the information about all applications of the specified user. This API uses a promise to return the result. |
| [getAllBundleInfo](arkts-ability-getallbundleinfo-f.md#getallbundleinfo-1) | Obtains the information of all bundles of the specified user. This API uses an asynchronous callback to return the result. |
| [getAllBundleInfo](arkts-ability-getallbundleinfo-f.md#getallbundleinfo-2) | Obtains the information of all bundles of the current user. This API uses an asynchronous callback to return the result. |
| [getAllBundleInfo](arkts-ability-getallbundleinfo-f.md#getallbundleinfo-3) | Obtains the information of all bundles of the specified user. This API uses a promise to return the result. |
| [getApplicationInfo](arkts-ability-getapplicationinfo-f.md#getapplicationinfo-1) | Obtains the application information of the specified user based on a given bundle name. This API uses an asynchronous callback to return the result. No permission is required for obtaining the caller's own information. |
| [getApplicationInfo](arkts-ability-getapplicationinfo-f.md#getapplicationinfo-2) | Obtains the application information based on a given bundle name. This API uses an asynchronous callback to return the result. No permission is required for obtaining the caller's own information. |
| [getApplicationInfo](arkts-ability-getapplicationinfo-f.md#getapplicationinfo-3) | Obtains the application information based on a given bundle name. This API uses a promise to return the result. No permission is required for obtaining the caller's own information. |
| [getBundleArchiveInfo](arkts-ability-getbundlearchiveinfo-f.md#getbundlearchiveinfo-1) | Obtains information about the bundles contained in a HAP file. This API uses an asynchronous callback to return the result. |
| [getBundleArchiveInfo](arkts-ability-getbundlearchiveinfo-f.md#getbundlearchiveinfo-2) | Obtains information about the bundles contained in a HAP file. This API uses a promise to return the result. |
| [getBundleInfo](arkts-ability-getbundleinfo-f.md#getbundleinfo-1) | Obtains the bundle information based on a given bundle name and bundle options. This API uses an asynchronous callback to return the result. No permission is required for obtaining the caller's own information. |
| [getBundleInfo](arkts-ability-getbundleinfo-f.md#getbundleinfo-2) | Obtains the bundle information based on a given bundle name. This API uses an asynchronous callback to return the result. No permission is required for obtaining the caller's own information. |
| [getBundleInfo](arkts-ability-getbundleinfo-f.md#getbundleinfo-3) | Obtains the bundle information based on a given bundle name. This API uses a promise to return the result. No permission is required for obtaining the caller's own information. |
| [getLaunchWantForBundle](arkts-ability-getlaunchwantforbundle-f.md#getlaunchwantforbundle-1) | Obtains the Want object that launches the specified application. This API uses an asynchronous callback to return the result. |
| [getLaunchWantForBundle](arkts-ability-getlaunchwantforbundle-f.md#getlaunchwantforbundle-2) | Obtains the Want object that launches the specified application. This API uses a promise to return the result. |
| [getNameForUid](arkts-ability-getnameforuid-f.md#getnameforuid-1) | Obtains bundle name by the given uid. |
| [getNameForUid](arkts-ability-getnameforuid-f.md#getnameforuid-2) | Obtains the bundle name based on a UID. This API uses a promise to return the result. |
| [isAbilityEnabled](arkts-ability-isabilityenabled-f.md#isabilityenabled-1) | Checks whether the ability that matches a given AbilityInfo object is enabled. This API uses an asynchronous callback to return the result. |
| [isAbilityEnabled](arkts-ability-isabilityenabled-f.md#isabilityenabled-2) | Checks whether the ability that matches a given AbilityInfo object is enabled. This API uses a promise to return the result. |
| [isApplicationEnabled](arkts-ability-isapplicationenabled-f.md#isapplicationenabled-1) | Checks whether an application is enabled based on a given bundle name. This API uses an asynchronous callback to return the result. |
| [isApplicationEnabled](arkts-ability-isapplicationenabled-f.md#isapplicationenabled-2) | Checks whether an application is enabled based on a given bundle name. This API uses a promise to return the result. |
| [queryAbilityByWant](arkts-ability-queryabilitybywant-f.md#queryabilitybywant-1) | Obtains the ability information of the specified user based on given Want. This API uses an asynchronous callback to return the result. No permission is required for obtaining the caller's own information. |
| [queryAbilityByWant](arkts-ability-queryabilitybywant-f.md#queryabilitybywant-2) | Obtains the ability information based on given Want. This API uses an asynchronous callback to return the result. No permission is required for obtaining the caller's own information. |
| [queryAbilityByWant](arkts-ability-queryabilitybywant-f.md#queryabilitybywant-3) | Obtains the ability information based on given Want. This API uses a promise to return the result. No permission is required for obtaining the caller's own information. |

<!--Del-->
### Functions（系统接口）

| Name | Description |
| --- | --- |
| [cleanBundleCacheFiles](arkts-ability-cleanbundlecachefiles-f-sys.md#cleanbundlecachefiles-1) | Clears the cache data of an application. This API uses an asynchronous callback to return the result. |
| [cleanBundleCacheFiles](arkts-ability-cleanbundlecachefiles-f-sys.md#cleanbundlecachefiles-2) | Clears the cache data of an application. This API uses a promise to return the result. |
| [getApplicationInfos](arkts-ability-getapplicationinfos-f-sys.md#getapplicationinfos-1) | Obtains information about all installed apps for a specified user. This API uses an asynchronous callback to return the result. |
| [getApplicationInfos](arkts-ability-getapplicationinfos-f-sys.md#getapplicationinfos-2) | Obtains information about installed apps for the user to which the caller belongs. This API uses an asynchronous callback to return the result. |
| [getApplicationInfos](arkts-ability-getapplicationinfos-f-sys.md#getapplicationinfos-3) | Obtains information about all installed apps for a specified user. This API uses a promise to return the result. |
| [getBundleInfos](arkts-ability-getbundleinfos-f-sys.md#getbundleinfos-1) | Obtains all BundleInfo for a specified user in the system. This API uses an asynchronous callback to return the result. |
| [getBundleInfos](arkts-ability-getbundleinfos-f-sys.md#getbundleinfos-2) | Obtains all BundleInfo for the current user. This API uses an asynchronous callback to return the result. |
| [getBundleInfos](arkts-ability-getbundleinfos-f-sys.md#getbundleinfos-3) | Obtains all BundleInfo for a specified user. This API uses a promise to return the result. |
| [getBundleInstaller](arkts-ability-getbundleinstaller-f-sys.md#getbundleinstaller-1) | Obtains the installation package. This API uses an asynchronous callback to return the result. |
| [getBundleInstaller](arkts-ability-getbundleinstaller-f-sys.md#getbundleinstaller-2) | Obtains the installation package. This API uses a promise to return the result. |
| [getPermissionDef](arkts-ability-getpermissiondef-f-sys.md#getpermissiondef-1) | Obtains the permission details by permission name. This API uses an asynchronous callback to return the result. |
| [getPermissionDef](arkts-ability-getpermissiondef-f-sys.md#getpermissiondef-2) | Obtains the permission details by permission name. This API uses a promise to return the result. |
| [setAbilityEnabled](arkts-ability-setabilityenabled-f-sys.md#setabilityenabled-1) | Sets whether to enable an ability. This API uses an asynchronous callback to return the result. |
| [setAbilityEnabled](arkts-ability-setabilityenabled-f-sys.md#setabilityenabled-2) | Sets whether to enable an ability. This API uses a promise to return the result. |
| [setApplicationEnabled](arkts-ability-setapplicationenabled-f-sys.md#setapplicationenabled-1) | Sets whether to enable an application. This API uses an asynchronous callback to return the result. |
| [setApplicationEnabled](arkts-ability-setapplicationenabled-f-sys.md#setapplicationenabled-2) | Sets whether to enable an application. This API uses a promise to return the result. |
<!--DelEnd-->

### Interfaces

| Name | Description |
| --- | --- |
| [BundleOptions](arkts-ability-bundleoptions-i.md) | &gt; **NOTE** &gt; &gt; This API has been supported since API version 7 and deprecated since API version 9. No substitute is provided. Options that contain the user ID. |

### Enums

| Name | Description |
| --- | --- |
| [AbilitySubType](arkts-ability-abilitysubtype-e.md) | &gt; **NOTE** &gt; &gt; This API has been supported since API version 7 and deprecated since API version 9. No substitute is provided. Enumerates the ability subtypes. |
| [AbilityType](arkts-ability-abilitytype-e.md) | &gt; **NOTE** &gt; &gt; This API has been supported since API version 7 and deprecated since API version 9. You are advised to use &gt; [bundleManager.AbilityType](arkts-ability-abilitytype-e.md) instead. Enumerates the ability types. |
| [BundleFlag](arkts-ability-bundleflag-e.md) | &gt; **NOTE** &gt; &gt; This API has been supported since API version 7 and deprecated since API version 9. You are advised to use &gt; [bundleManager.BundleFlag](arkts-ability-bundleflag-e.md) instead. Enumerates the bundle flags, which indicate the type of bundle information to obtain. If an API does not match the flag, the flag is ignored. For example, using **GET_ABILITY_INFO_WITH_PERMISSION** to obtain the application information does not affect the result. Flags can be used together. For example, you can use the combination of **GET_APPLICATION_INFO_WITH_PERMISSION** and **GET_APPLICATION_INFO_WITH_DISABLE** to obtain the result that contains both application permission information and disabled application information. |
| [ColorMode](arkts-ability-colormode-e.md) | &gt; **NOTE** &gt; &gt; This API has been supported since API version 7 and deprecated since API version 9. No substitute is provided. Enumerates the color modes of applications and widgets. |
| [DisplayOrientation](arkts-ability-displayorientation-e.md) | &gt; **NOTE** &gt; &gt; This API has been supported since API version 7 and deprecated since API version 9. You are advised to use &gt; [bundleManager.DisplayOrientation](arkts-ability-displayorientation-e.md) instead. Enumerates display orientations. |
| [GrantStatus](arkts-ability-grantstatus-e.md) | &gt; **NOTE** &gt; &gt; This API has been supported since API version 7 and deprecated since API version 9. You are advised to use &gt; [bundleManager.PermissionGrantState](arkts-ability-permissiongrantstate-e.md) &gt; instead. Enumerates the permission grant states. |
| [InstallErrorCode](arkts-ability-installerrorcode-e.md) | &gt; **NOTE** &gt; &gt; This API has been supported since API version 7 and deprecated since API version 9. You are advised to use &gt; [errorcode-bundle](../../../../reference/apis-ability-kit/errorcode-bundle.md) instead. |
| [LaunchMode](arkts-ability-launchmode-e.md) | &gt; **NOTE** &gt; &gt; This API has been supported since API version 7 and deprecated since API version 9. You are advised to use &gt; [bundleManager.LaunchType](arkts-ability-launchtype-e.md) instead. Enumerates the ability launch modes. |

<!--Del-->
### Enums（系统接口）

| Name | Description |
| --- | --- |
| [ModuleRemoveFlag](arkts-ability-moduleremoveflag-e-sys.md) | Flag indicating whether a module is associated with a widget or shortcut when it is removed. |
| [QueryShortCutFlag](arkts-ability-queryshortcutflag-e-sys.md) | Flag used to specify the query scope for shortcuts. |
| [ShortcutExistence](arkts-ability-shortcutexistence-e-sys.md) | Result returned when querying whether a shortcut exists. |
| [SignatureCompareResult](arkts-ability-signaturecompareresult-e-sys.md) | Signature verification result. |
<!--DelEnd-->

