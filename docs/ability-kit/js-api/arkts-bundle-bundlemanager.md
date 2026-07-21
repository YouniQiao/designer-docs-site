# @ohos.bundle.bundleManager

The module provides APIs for obtaining application information, including [bundle information](bundleManager/BundleInfo),[application information](bundleManager/ApplicationInfo),[ability information](bundleManager/AbilityInfo) (information about a UIAbility), and [ExtensionAbility information](bundleManager/ExtensionAbilityInfo:ExtensionAbilityInfo).

**Since:** 9

<!--Device-unnamed-declare namespace bundleManager--><!--Device-unnamed-declare namespace bundleManager-End-->

**System capability:** SystemCapability.BundleManager.BundleFramework.Core

## Modules to Import

```TypeScript
import { bundleManager } from '@kit.AbilityKit';
```

## Summary

### Functions

| Name | Description |
| --- | --- |
| [canOpenLink](arkts-ability-bundlemanager-canopenlink-f.md#canopenlink) | Checks whether the target application can be accessed based on the provided link. The scheme specified in the link must be configured in the **querySchemes** field of the [module.json5](docroot://quick-start/module-configuration-file.md) file. |
| [cleanBundleCacheFilesForSelf](arkts-ability-bundlemanager-cleanbundlecachefilesforself-f.md#cleanbundlecachefilesforself) | Clears the application cache. This API uses a promise to return the result. |
| [getAbilityInfo](arkts-ability-bundlemanager-getabilityinfo-f.md#getabilityinfo) | Obtains the ability information based on the given resource identifier and ability flag. This API uses a promise to return the result. |
| [getAlternateIcons](arkts-ability-bundlemanager-getalternateicons-f.md#getalternateicons) | Queries the alternate icon information configured in the alternateIcons in the app.json5of the current application. This API uses a promise to return the result. |
| [getAppCloneIdentity](arkts-ability-bundlemanager-getappcloneidentity-f.md#getappcloneidentity) | Obtains the bundle name and clone index of a cloned application based on the given UID. This API uses a promise to return the result. |
| [getApplicationLabel](arkts-ability-bundlemanager-getapplicationlabel-f.md#getapplicationlabel) | Obtains the name of an application with the specified package name and clone index.This API uses a promise to return the result. |
| [getBundleInfo](arkts-ability-bundlemanager-getbundleinfo-f.md#getbundleinfo) | Obtains the bundle information based on the given bundle name and bundle flags. This API uses an asynchronous callback to return the result.  No permission is required for obtaining the caller's own information. |
| [getBundleInfo](arkts-ability-bundlemanager-getbundleinfo-f.md#getbundleinfo-1) | Obtains the [BundleInfo](bundleManager/BundleInfo) based on the given bundle name, bundle flags, and user ID. This API uses an asynchronous callback to return the result.  No permission is required for obtaining the caller's own information. |
| [getBundleInfo](arkts-ability-bundlemanager-getbundleinfo-f.md#getbundleinfo-2) | Obtains the bundle information based on the given bundle name, bundle flags, and user ID. This API uses a promise to return the result.  No permission is required for obtaining the caller's own information. |
| [getBundleInfoForSelf](arkts-ability-bundlemanager-getbundleinfoforself-f.md#getbundleinfoforself) | Obtains the bundle information of the current application based on the given bundle flags. This API uses a promise to return the result. |
| [getBundleInfoForSelf](arkts-ability-bundlemanager-getbundleinfoforself-f.md#getbundleinfoforself-1) | Obtains the bundle information of the current application based on the given bundle flags. This API uses an asynchronous callback to return the result. |
| [getBundleInfoForSelfSync](arkts-ability-bundlemanager-getbundleinfoforselfsync-f.md#getbundleinfoforselfsync) | Obtains the bundle information of the current application based on the given bundle flags. This API returns the result synchronously. |
| [getBundleInfoSync](arkts-ability-bundlemanager-getbundleinfosync-f.md#getbundleinfosync) | Obtains the bundle information based on the given bundle name, bundle flags, and user ID. This API returns the result synchronously.  No permission is required for obtaining the caller's own information. |
| [getBundleInfoSync](arkts-ability-bundlemanager-getbundleinfosync-f.md#getbundleinfosync-1) | Obtains the bundle information for the caller's user based on the given bundle name and bundle flags. This API returns the result synchronously.  No permission is required for obtaining the caller's own information. |
| [getBundleNameByUid](arkts-ability-bundlemanager-getbundlenamebyuid-f.md#getbundlenamebyuid) | Obtains the bundle name based on the given UID. This API uses an asynchronous callback to return the result. |
| [getBundleNameByUid](arkts-ability-bundlemanager-getbundlenamebyuid-f.md#getbundlenamebyuid-1) | Obtains the bundle name based on the given UID. This API uses a promise to return the result. |
| [getBundleNameByUidSync](arkts-ability-bundlemanager-getbundlenamebyuidsync-f.md#getbundlenamebyuidsync) | Obtains the bundle name based on the given UID. This API returns the result synchronously. |
| [getInstalledBundleList](arkts-ability-bundlemanager-getinstalledbundlelist-f.md#getinstalledbundlelist) | Obtains all the bundle information in the system based on the given bundle flags.This API uses a promise to return the result. |
| [getLaunchWant](arkts-ability-bundlemanager-getlaunchwant-f.md#getlaunchwant) | Obtains the **Want** parameters of the [entry UIAbility](docroot://quick-start/application-package-glossary.md#uiability) of the current application. |
| [getPluginBundlePathForSelf](arkts-ability-bundlemanager-getpluginbundlepathforself-f.md#getpluginbundlepathforself) | Obtains the installation path of a specified plugin in the current [application sandbox](docroot://file-management/app-sandbox-directory.md). |
| [getProfileByAbility](arkts-ability-bundlemanager-getprofilebyability-f.md#getprofilebyability) | Obtains the JSON string array of the current application's configuration file based on the given module name,ability name, and metadata name (name configured under **metadata** in [abilities](docroot://quick-start/module-configuration-file.md#abilities) of the **module.json5** file). This API uses an asynchronous callback to return the result.  > NOTE  >  > If the profile uses the resource reference format, the return value retains this format (for example,  > **$string:res_id**). You can obtain the referenced resources through related APIs of the  > [resource manager module](../../apis-localization-kit/arkts-apis/arkts-resourcemanager.md). |
| [getProfileByAbility](arkts-ability-bundlemanager-getprofilebyability-f.md#getprofilebyability-1) | Obtains the JSON string array of the current application's configuration file based on the given module name,ability name, and metadata name (name configured under **metadata** in [abilities](docroot://quick-start/module-configuration-file.md#abilities) of the **module.json5** file). This API uses a promise to return the result.  > NOTE  >  > If the profile uses the resource reference format, the return value retains this format (for example,  > **$string:res_id**). You can obtain the referenced resources through related APIs of the  > [resource manager module](../../apis-localization-kit/arkts-apis/arkts-resourcemanager.md). |
| [getProfileByAbilitySync](arkts-ability-bundlemanager-getprofilebyabilitysync-f.md#getprofilebyabilitysync) | Obtains the JSON string array of the current application's configuration file based on the given module name,ability name, and metadata name (name configured in [metadata](docroot://quick-start/module-configuration-file.md#metadata) of the **module.json5** file). This API returns the result synchronously. The result value is a string array. |
| [getProfileByExtensionAbility](arkts-ability-bundlemanager-getprofilebyextensionability-f.md#getprofilebyextensionability) | Obtains the JSON string array of the current application's configuration file based on the given module name,ExtensionAbility name, and metadata name (name configured in [metadata](docroot://quick-start/module-configuration-file.md#metadata) of the **module.json5** file). This API uses an asynchronous callback to return the result. |
| [getProfileByExtensionAbility](arkts-ability-bundlemanager-getprofilebyextensionability-f.md#getprofilebyextensionability-1) | Obtains the JSON string array of the current application's configuration file based on the given module name,ExtensionAbility name, and metadata name (name configured in [metadata](docroot://quick-start/module-configuration-file.md#metadata) of the **module.json5** file). This API uses a promise to return the result. |
| [getProfileByExtensionAbilitySync](arkts-ability-bundlemanager-getprofilebyextensionabilitysync-f.md#getprofilebyextensionabilitysync) | Obtains the JSON string array of the current application's configuration file based on the given module name,ExtensionAbility name, and metadata name (name configured in [metadata](docroot://quick-start/module-configuration-file.md#metadata) of the **module.json5** file). This API returns the result synchronously. The result value is a string array. |
| [getSignatureInfo](arkts-ability-bundlemanager-getsignatureinfo-f.md#getsignatureinfo) | Obtains the [signature information](bundleManager/BundleInfo:SignatureInfo) of an application based on the given UID. |
| [setAlternateIcon](arkts-ability-bundlemanager-setalternateicon-f.md#setalternateicon) | Sets the alternate icon of the caller based on the given alternate icon name.This API uses a promise to return the result. |

<!--Del-->
### Functions（系统接口）

| Name | Description |
| --- | --- |
| [cleanAllBundleCache](arkts-ability-bundlemanager-cleanallbundlecache-f-sys.md#cleanallbundlecache) | Clears the global cache. This API uses a promise to return the result. |
| [cleanBundleCacheFiles](arkts-ability-bundlemanager-cleanbundlecachefiles-f-sys.md#cleanbundlecachefiles) | Clears the bundle cache based on the given bundle name. This API uses an asynchronous callback to return the result.  No permission is required when the caller clears its own cache. |
| [cleanBundleCacheFiles](arkts-ability-bundlemanager-cleanbundlecachefiles-f-sys.md#cleanbundlecachefiles-1) | Clears the bundle cache based on the given bundle name. This API uses a promise to return the result.  No permission is required when the caller clears its own cache. |
| [cleanBundleCacheFiles](arkts-ability-bundlemanager-cleanbundlecachefiles-f-sys.md#cleanbundlecachefiles-2) | Clears the bundle cache based on the given bundle name and application index. This API uses a promise to return the result.  No permission is required when the caller clears its own cache. |
| [deleteAbc](arkts-ability-bundlemanager-deleteabc-f-sys.md#deleteabc) | Deletes an .abc file based on the specified file path. This API uses a promise to return the result. |
| [disableDynamicIcon](arkts-ability-bundlemanager-disabledynamicicon-f-sys.md#disabledynamicicon) | Disables the dynamic icon based on the given bundle name. This API uses a promise to return the result. |
| [disableDynamicIcon](arkts-ability-bundlemanager-disabledynamicicon-f-sys.md#disabledynamicicon-1) | Disables the dynamic icon based on the given bundle name and bundle options. This API uses a promise to return the result.  To disable the dynamic icon for the current user, you must request the ohos.permission.ACCESS_DYNAMIC_ICON permission.  To disable the dynamic icon for another user, you must request the ohos.permission.ACCESS_DYNAMIC_ICON and ohos.permission.INTERACT_ACROSS_LOCAL_ACCOUNTS permissions. |
| [enableDynamicIcon](arkts-ability-bundlemanager-enabledynamicicon-f-sys.md#enabledynamicicon) | Enables the dynamic icon based on the given bundle name and module name. This API uses a promise to return the result. |
| [enableDynamicIcon](arkts-ability-bundlemanager-enabledynamicicon-f-sys.md#enabledynamicicon-1) | Enables the dynamic icon based on the given bundle name, module name, and bundle options. This API uses a promise to return the result.  To enable the dynamic icon for the current user, you must request the ohos.permission.ACCESS_DYNAMIC_ICON permission.  To enable the dynamic icon for another user, you must request the ohos.permission.ACCESS_DYNAMIC_ICON and ohos.permission.INTERACT_ACROSS_LOCAL_ACCOUNTS permissions. |
| [getAbilityIcon](arkts-ability-bundlemanager-getabilityicon-f-sys.md#getabilityicon) | Obtains the PixelMap of an icon based on the bundle name, module name, and ability name.This API uses a promise to return the result. |
| [getAbilityIcon](arkts-ability-bundlemanager-getabilityicon-f-sys.md#getabilityicon-1) | Obtains the PixelMap of an icon based on the bundle name, module name, and ability name.This API uses a promise to return the result. |
| [getAbilityLabel](arkts-ability-bundlemanager-getabilitylabel-f-sys.md#getabilitylabel) | Obtains the ability label based on the given bundle name, module name, and ability name. This API uses an asynchronous callback to return the result.  No permission is required for obtaining the caller's own information. |
| [getAbilityLabel](arkts-ability-bundlemanager-getabilitylabel-f-sys.md#getabilitylabel-1) | Obtains the ability label based on the given bundle name, module name, and ability name. This API uses a promise to return the result.  No permission is required for obtaining the caller's own information. |
| [getAbilityLabelSync](arkts-ability-bundlemanager-getabilitylabelsync-f-sys.md#getabilitylabelsync) | Obtains the ability label based on the given bundle name, module name, and ability name. This API returns the result synchronously.  No permission is required for obtaining the caller's own information. |
| [getAdditionalInfo](arkts-ability-bundlemanager-getadditionalinfo-f-sys.md#getadditionalinfo) | Obtains additional information about a bundle in synchronous mode. The return value is the **additionalInfo** field value in [InstallParam](arkts-ability-installer-installparam-i-sys.md) passed when **install** is called. |
| [getAllAppCloneBundleInfo](arkts-ability-bundlemanager-getallappclonebundleinfo-f-sys.md#getallappclonebundleinfo) | Obtains all the bundle information of applications and application clones based on the given bundle name,[bundleFlags](arkts-ability-bundlemanager-bundleflag-e.md), and user ID. This API uses a promise to return the result.  No permission is required for obtaining the caller's own information. |
| [getAllAppProvisionInfo](arkts-ability-bundlemanager-getallappprovisioninfo-f-sys.md#getallappprovisioninfo) | Obtains the [provision](bundleManager/AppProvisionInfo) configuration file information of all applications based on the given user ID. This API uses a promise to return the result. |
| [getAllApplicationInfo](arkts-ability-bundlemanager-getallapplicationinfo-f-sys.md#getallapplicationinfo) | Obtains all the application information in the system based on the given application flags. This API uses an asynchronous callback to return the result. |
| [getAllApplicationInfo](arkts-ability-bundlemanager-getallapplicationinfo-f-sys.md#getallapplicationinfo-1) | Obtains all the application information in the system based on the given application flags and user ID. This API uses an asynchronous callback to return the result. |
| [getAllApplicationInfo](arkts-ability-bundlemanager-getallapplicationinfo-f-sys.md#getallapplicationinfo-2) | Obtains all the application information in the system based on the given application flags and user ID. This API uses a promise to return the result. |
| [getAllBundleCacheSize](arkts-ability-bundlemanager-getallbundlecachesize-f-sys.md#getallbundlecachesize) | Obtains the global cache size. This API uses a promise to return the result.  It is not possible to obtain the cache of applications that are currently running or have been granted the "AllowAppDataNotCleared" privilege as specified in the [application configuration guide](docroot://../device-dev/subsystems/subsys-app-privilege-config-guide.md). |
| [getAllBundleInfo](arkts-ability-bundlemanager-getallbundleinfo-f-sys.md#getallbundleinfo) | Obtains all the bundle information in the system based on the given bundle flags. This API uses an asynchronous callback to return the result. |
| [getAllBundleInfo](arkts-ability-bundlemanager-getallbundleinfo-f-sys.md#getallbundleinfo-1) | Obtains all the bundle information in the system based on the given bundle flags and user ID. This API uses an asynchronous callback to return the result. |
| [getAllBundleInfo](arkts-ability-bundlemanager-getallbundleinfo-f-sys.md#getallbundleinfo-2) | Obtains all the bundle information in the system based on the given bundle flags and user ID. This API uses a promise to return the result. |
| [getAllBundleInfoByDeveloperId](arkts-ability-bundlemanager-getallbundleinfobydeveloperid-f-sys.md#getallbundleinfobydeveloperid) | Obtains the information about all bundles of the current user based on the given developer ID. |
| [getAllBundleInstallInfo](arkts-ability-bundlemanager-getallbundleinstallinfo-f-sys.md#getallbundleinstallinfo) | Obtains the extended install information about all applications in the system.This API uses a promise to return the result. |
| [getAllDynamicIconInfo](arkts-ability-bundlemanager-getalldynamiciconinfo-f-sys.md#getalldynamiciconinfo) | Obtains the dynamic icon information of all applications and all application clones of a specified user. This API uses a promise to return the result.  To obtain the dynamic icon information of all applications and all application clones of the current user, you must request the ohos.permission.GET_BUNDLE_INFO_PRIVILEGED permission.  To obtain the dynamic icon information of all applications and all application clones of other users or all users,you must request the ohos.permission.GET_BUNDLE_INFO_PRIVILEGED and ohos.permission.INTERACT_ACROSS_LOCAL_ACCOUNTS permissions. |
| [getAllNewPreinstalledApplicationInfo](arkts-ability-bundlemanager-getallnewpreinstalledapplicationinfo-f-sys.md#getallnewpreinstalledapplicationinfo) | Obtains PreinstalledApplicationInfo of all newly added preinstalled applications during device OTA upgrade. |
| [getAllPluginInfo](arkts-ability-bundlemanager-getallplugininfo-f-sys.md#getallplugininfo) | Obtains all the plugin information in the system based on the given host bundle name and user ID. This API uses a promise to return the result. |
| [getAllPreinstalledApplicationInfo](arkts-ability-bundlemanager-getallpreinstalledapplicationinfo-f-sys.md#getallpreinstalledapplicationinfo) | Obtains information about all preinstalled applications. This API uses a promise to return the result. |
| [getAllSharedBundleInfo](arkts-ability-bundlemanager-getallsharedbundleinfo-f-sys.md#getallsharedbundleinfo) | Obtains all the shared bundle information. This API uses an asynchronous callback to return the result. |
| [getAllSharedBundleInfo](arkts-ability-bundlemanager-getallsharedbundleinfo-f-sys.md#getallsharedbundleinfo-1) | Obtains all the shared bundle information. This API uses a promise to return the result. |
| [getAppCloneBundleInfo](arkts-ability-bundlemanager-getappclonebundleinfo-f-sys.md#getappclonebundleinfo) | Obtains the bundle information of an application or an application clone based on the given bundle name, app index,[bundleFlags](arkts-ability-bundlemanager-bundleflag-e.md), and user ID. This API uses a promise to return the result.  No permission is required for obtaining the caller's own information. |
| [getAppCloneIdentityBySandboxDataDir](arkts-ability-bundlemanager-getappcloneidentitybysandboxdatadir-f-sys.md#getappcloneidentitybysandboxdatadir) | Obtains the identity information of an application, including the bundle name and clone index, based on the given sandbox directory name. |
| [getAppClonePreference](arkts-ability-bundlemanager-getappclonepreference-f-sys.md#getappclonepreference) | Obtains the application clone preference configuration based on the given bundle name. |
| [getAppProvisionInfo](arkts-ability-bundlemanager-getappprovisioninfo-f-sys.md#getappprovisioninfo) | Obtains the provision profile based on the given bundle name. This API uses an asynchronous callback to return the result.  No permission is required for obtaining the caller's own information. |
| [getAppProvisionInfo](arkts-ability-bundlemanager-getappprovisioninfo-f-sys.md#getappprovisioninfo-1) | Obtains the provision profile based on the given bundle name and user ID. This API uses an asynchronous callback to return the result.  No permission is required for obtaining the caller's own information. |
| [getAppProvisionInfo](arkts-ability-bundlemanager-getappprovisioninfo-f-sys.md#getappprovisioninfo-2) | Obtains the provision profile based on the given bundle name and user ID. This API uses a promise to return the result.  No permission is required for obtaining the caller's own information. |
| [getAppProvisionInfoSync](arkts-ability-bundlemanager-getappprovisioninfosync-f-sys.md#getappprovisioninfosync) | Obtains the provision profile based on the given bundle name and user ID. This API returns the result synchronously.  No permission is required for obtaining the caller's own information. |
| [getApplicationInfo](arkts-ability-bundlemanager-getapplicationinfo-f-sys.md#getapplicationinfo) | Obtains the application information based on the given bundle name and application flags. This API uses an asynchronous callback to return the result.  No permission is required for obtaining the caller's own information. |
| [getApplicationInfo](arkts-ability-bundlemanager-getapplicationinfo-f-sys.md#getapplicationinfo-1) | Obtains the application information based on the given bundle name, application flags, and user ID. This API uses an asynchronous callback to return the result.  No permission is required for obtaining the caller's own information. |
| [getApplicationInfo](arkts-ability-bundlemanager-getapplicationinfo-f-sys.md#getapplicationinfo-2) | Obtains the application information based on the given bundle name, application flags, and user ID. This API uses a promise to return the result.  No permission is required for obtaining the caller's own information. |
| [getApplicationInfoSync](arkts-ability-bundlemanager-getapplicationinfosync-f-sys.md#getapplicationinfosync) | Obtains the application information based on the given bundle name, application flags, and user ID. This API returns the result synchronously.  No permission is required for obtaining the caller's own information. |
| [getApplicationInfoSync](arkts-ability-bundlemanager-getapplicationinfosync-f-sys.md#getapplicationinfosync-1) | Obtains the application information based on the given bundle name and application flags. This API returns the result synchronously.  No permission is required for obtaining the caller's own information. |
| [getBundleArchiveInfo](arkts-ability-bundlemanager-getbundlearchiveinfo-f-sys.md#getbundlearchiveinfo) | Obtains the bundle information based on the given HAP file path and bundle flags. This API uses an asynchronous callback to return the result. |
| [getBundleArchiveInfo](arkts-ability-bundlemanager-getbundlearchiveinfo-f-sys.md#getbundlearchiveinfo-1) | Obtains the bundle information based on the given HAP file path and bundle flags. This API uses a promise to return the result. |
| [getBundleArchiveInfoSync](arkts-ability-bundlemanager-getbundlearchiveinfosync-f-sys.md#getbundlearchiveinfosync) | Obtains the bundle information based on the given HAP file path and bundle flags. This API returns the result synchronously. |
| [getBundleInstallStatus](arkts-ability-bundlemanager-getbundleinstallstatus-f-sys.md#getbundleinstallstatus) | Obtains the installation status of a specified application under a given user. |
| [getDeveloperIds](arkts-ability-bundlemanager-getdeveloperids-f-sys.md#getdeveloperids) | Obtains all the developer IDs of the current user based on the given application [distribution type](arkts-ability-bundlemanager-appdistributiontype-e-sys.md). |
| [getDynamicIcon](arkts-ability-bundlemanager-getdynamicicon-f-sys.md#getdynamicicon) | Obtains the module name corresponding to the dynamic icon based on the specified bundle name. This API uses a promise to return the result. |
| [getDynamicIconInfo](arkts-ability-bundlemanager-getdynamiciconinfo-f-sys.md#getdynamiciconinfo) | Obtains the dynamic icon information of all users and all application clones based on the given bundle name. This API uses a promise to return the result. |
| [getExtResource](arkts-ability-bundlemanager-getextresource-f-sys.md#getextresource) | Obtains the module names corresponding to the extended resources based on the given bundle name. This API uses a promise to return the result. |
| [getJsonProfile](arkts-ability-bundlemanager-getjsonprofile-f-sys.md#getjsonprofile) | Obtains the JSON strings of the profile based on the given profile type, bundle name, and module name. This API returns the result synchronously.  No permission is required for obtaining the caller's own profile. |
| [getLaunchWantForBundle](arkts-ability-bundlemanager-getlaunchwantforbundle-f-sys.md#getlaunchwantforbundle) | Obtains the Want used to launch the bundle based on the given bundle name and user ID. This API uses an asynchronous callback to return the result. |
| [getLaunchWantForBundle](arkts-ability-bundlemanager-getlaunchwantforbundle-f-sys.md#getlaunchwantforbundle-1) | Obtains the Want used to launch the bundle based on the given bundle name. This API uses an asynchronous callback to return the result. |
| [getLaunchWantForBundle](arkts-ability-bundlemanager-getlaunchwantforbundle-f-sys.md#getlaunchwantforbundle-2) | Obtains the Want used to launch the bundle based on the given bundle name and user ID. This API uses a promise to return the result. |
| [getLaunchWantForBundleSync](arkts-ability-bundlemanager-getlaunchwantforbundlesync-f-sys.md#getlaunchwantforbundlesync) | Obtains the Want used to launch the bundle based on the given bundle name and user ID. This API returns the result synchronously. |
| [getPermissionDef](arkts-ability-bundlemanager-getpermissiondef-f-sys.md#getpermissiondef) | Obtains the PermissionDef struct based on the given permission name. This API uses an asynchronous callback to return the result. |
| [getPermissionDef](arkts-ability-bundlemanager-getpermissiondef-f-sys.md#getpermissiondef-1) | Obtains the PermissionDef struct based on the given permission name. This API uses a promise to return the result. |
| [getPermissionDefSync](arkts-ability-bundlemanager-getpermissiondefsync-f-sys.md#getpermissiondefsync) | Obtains the **PermissionDef** struct based on the given permission name. This API returns the result synchronously. |
| [getRecoverableApplicationInfo](arkts-ability-bundlemanager-getrecoverableapplicationinfo-f-sys.md#getrecoverableapplicationinfo) | Obtains information about all preinstalled applications that can be restored. This API uses an asynchronous callback to return the result. |
| [getRecoverableApplicationInfo](arkts-ability-bundlemanager-getrecoverableapplicationinfo-f-sys.md#getrecoverableapplicationinfo-1) | Obtains information about all preinstalled applications that can be restored. This API uses a promise to return the result. |
| [getSandboxDataDir](arkts-ability-bundlemanager-getsandboxdatadir-f-sys.md#getsandboxdatadir) | Obtains the sandbox directory of an application based on the given bundle name and clone index. |
| [getSharedBundleInfo](arkts-ability-bundlemanager-getsharedbundleinfo-f-sys.md#getsharedbundleinfo) | Obtains the shared bundle information based on the given bundle name. This API uses an asynchronous callback to return the result.  No permission is required for obtaining the caller's own information. |
| [getSharedBundleInfo](arkts-ability-bundlemanager-getsharedbundleinfo-f-sys.md#getsharedbundleinfo-1) | Obtains the shared bundle information based on the given bundle name. This API uses a promise to return the result.  No permission is required for obtaining the caller's own information. |
| [getSpecifiedDistributionType](arkts-ability-bundlemanager-getspecifieddistributiontype-f-sys.md#getspecifieddistributiontype) | Obtains the [distribution type](docroot://security/app-provision-structure.md) of a bundle in synchronous mode. The return value is the **specifiedDistributionType** field value in [InstallParam](arkts-ability-installer-installparam-i-sys.md) passed when **install** is called.  No permission is required for obtaining the caller's own information. |
| [isAbilityEnabled](arkts-ability-bundlemanager-isabilityenabled-f-sys.md#isabilityenabled) | Checks whether an ability of an application or an application clone is enabled. This API uses a promise to return the result. |
| [isAbilityEnabled](arkts-ability-bundlemanager-isabilityenabled-f-sys.md#isabilityenabled-1) | Checks whether an ability is enabled. This API uses an asynchronous callback to return the result. |
| [isAbilityEnabled](arkts-ability-bundlemanager-isabilityenabled-f-sys.md#isabilityenabled-2) | Checks whether an ability is enabled. This API uses a promise to return the result. |
| [isAbilityEnabledSync](arkts-ability-bundlemanager-isabilityenabledsync-f-sys.md#isabilityenabledsync) | Checks whether an ability is enabled. This API returns the result synchronously. |
| [isApplicationDisableForbidden](arkts-ability-bundlemanager-isapplicationdisableforbidden-f-sys.md#isapplicationdisableforbidden) | Synchronously queries whether a specified application or application clone of a specified user is set to forbid being disabled.If you need to check whether an application is forbidden to be disabled under the current user,ohos.permission.GET_BUNDLE_INFO_PRIVILEGED needs to be applied for.If you need to check whether an application is forbidden to be disabled under other users,ohos.permission.GET_BUNDLE_INFO_PRIVILEGED and ohos.permission.INTERACT_ACROSS_LOCAL_ACCOUNTS need to be applied for. |
| [isApplicationEnabled](arkts-ability-bundlemanager-isapplicationenabled-f-sys.md#isapplicationenabled) | Checks whether an application or an application clone is enabled. This API uses a promise to return the result. |
| [isApplicationEnabled](arkts-ability-bundlemanager-isapplicationenabled-f-sys.md#isapplicationenabled-1) | Checks whether an application is enabled. This API uses an asynchronous callback to return the result. |
| [isApplicationEnabled](arkts-ability-bundlemanager-isapplicationenabled-f-sys.md#isapplicationenabled-2) | Checks whether an application is enabled. This API uses a promise to return the result. |
| [isApplicationEnabledSync](arkts-ability-bundlemanager-isapplicationenabledsync-f-sys.md#isapplicationenabledsync) | Checks whether an application is enabled. This API returns the result synchronously. |
| [migrateData](arkts-ability-bundlemanager-migratedata-f-sys.md#migratedata) | Migrates files from the source path to the destination path. This API uses a promise to return the result. |
| [queryAbilityInfo](arkts-ability-bundlemanager-queryabilityinfo-f-sys.md#queryabilityinfo) | Obtains the ability information based on the given want and ability flags. This API uses an asynchronous callback to return the result.  No permission is required for obtaining the caller's own information. |
| [queryAbilityInfo](arkts-ability-bundlemanager-queryabilityinfo-f-sys.md#queryabilityinfo-1) | Obtains the ability information based on the given want, ability flags, and user ID. This API uses an asynchronous callback to return the result.  No permission is required for obtaining the caller's own information. |
| [queryAbilityInfo](arkts-ability-bundlemanager-queryabilityinfo-f-sys.md#queryabilityinfo-2) | Obtains the ability information based on the given want, ability flags, and user ID. This API uses a promise to return the result.  No permission is required for obtaining the caller's own information. |
| [queryAbilityInfo](arkts-ability-bundlemanager-queryabilityinfo-f-sys.md#queryabilityinfo-3) | Obtains the ability information based on the given want list, ability flags, and user ID. This API uses a promise to return the result.  No permission is required for obtaining the caller's own information. |
| [queryAbilityInfoSync](arkts-ability-bundlemanager-queryabilityinfosync-f-sys.md#queryabilityinfosync) | Obtains the ability information based on the given want, ability flags, and user ID. This API returns the result synchronously.  No permission is required for obtaining the caller's own information. |
| [queryExtensionAbilityInfo](arkts-ability-bundlemanager-queryextensionabilityinfo-f-sys.md#queryextensionabilityinfo) | Obtains the ExtensionAbility information based on the given want, ExtensionAbility type, and ExtensionAbility flags. This API uses an asynchronous callback to return the result.  No permission is required for obtaining the caller's own information. |
| [queryExtensionAbilityInfo](arkts-ability-bundlemanager-queryextensionabilityinfo-f-sys.md#queryextensionabilityinfo-1) | Obtains the ExtensionAbility information based on the given want, ExtensionAbility type, ExtensionAbility flags,and user ID. This API uses an asynchronous callback to return the result.  No permission is required for obtaining the caller's own information. |
| [queryExtensionAbilityInfo](arkts-ability-bundlemanager-queryextensionabilityinfo-f-sys.md#queryextensionabilityinfo-2) | Obtains the ExtensionAbility information based on the given want, ExtensionAbility type, ExtensionAbility flags,and user ID. This API uses a promise to return the result.  No permission is required for obtaining the caller's own information. |
| [queryExtensionAbilityInfoSync](arkts-ability-bundlemanager-queryextensionabilityinfosync-f-sys.md#queryextensionabilityinfosync) | Obtains the ExtensionAbility information based on the given want, ExtensionAbility type, ExtensionAbility flags,and user ID. This API returns the result synchronously.  No permission is required for obtaining the caller's own information. |
| [queryExtensionAbilityInfoSync](arkts-ability-bundlemanager-queryextensionabilityinfosync-f-sys.md#queryextensionabilityinfosync-1) | Obtains the ExtensionAbility information based on the given Want, ExtensionAbility type, ExtensionAbility flags,and user ID. This API returns the result synchronously.  No permission is required for obtaining the caller's own information. |
| [queryExtensionAbilityInfoSync](arkts-ability-bundlemanager-queryextensionabilityinfosync-f-sys.md#queryextensionabilityinfosync-2) | Obtains the ExtensionAbility information based on the given ExtensionAbility type, ExtensionAbility flags, and user ID.  No permission is required for obtaining the caller's own information. |
| [recoverBackupBundleData](arkts-ability-bundlemanager-recoverbackupbundledata-f-sys.md#recoverbackupbundledata) | Restores the backup data for a specified application under a given user. This API uses a promise to return the result. |
| [removeBackupBundleData](arkts-ability-bundlemanager-removebackupbundledata-f-sys.md#removebackupbundledata) | Removes the backup data for a specified application under a given user. This API uses a promise to return the result. |
| [setAbilityEnabled](arkts-ability-bundlemanager-setabilityenabled-f-sys.md#setabilityenabled) | Enables or disables an ability of an application or an application clone. This API uses a promise to return the result. |
| [setAbilityEnabled](arkts-ability-bundlemanager-setabilityenabled-f-sys.md#setabilityenabled-1) | Enables or disables an ability. This API uses an asynchronous callback to return the result. |
| [setAbilityEnabled](arkts-ability-bundlemanager-setabilityenabled-f-sys.md#setabilityenabled-2) | Enables or disables an ability. This API uses a promise to return the result. |
| [setAbilityEnabledSync](arkts-ability-bundlemanager-setabilityenabledsync-f-sys.md#setabilityenabledsync) | Enables or disables an ability. This API returns the result synchronously. |
| [setAbilityFileTypesForSelf](arkts-ability-bundlemanager-setabilityfiletypesforself-f-sys.md#setabilityfiletypesforself) | Sets the file types that can be opened by the current application. |
| [setAdditionalInfo](arkts-ability-bundlemanager-setadditionalinfo-f-sys.md#setadditionalinfo) | Sets additional information for an application. This API can be called only by AppGallery. |
| [setAppClonePreference](arkts-ability-bundlemanager-setappclonepreference-f-sys.md#setappclonepreference) | Sets the application clone preference configuration. |
| [setApplicationEnabled](arkts-ability-bundlemanager-setapplicationenabled-f-sys.md#setapplicationenabled) | Enables or disables an application or an application clone. This API uses a promise to return the result. |
| [setApplicationEnabled](arkts-ability-bundlemanager-setapplicationenabled-f-sys.md#setapplicationenabled-1) | Sets the enabled or disabled state of a specified application or application clone, and controls whether to exit the application process when the application is disabled. This API uses a promise to return the result. |
| [setApplicationEnabled](arkts-ability-bundlemanager-setapplicationenabled-f-sys.md#setapplicationenabled-2) | Enables or disables an application. This API uses an asynchronous callback to return the result. |
| [setApplicationEnabled](arkts-ability-bundlemanager-setapplicationenabled-f-sys.md#setapplicationenabled-3) | Enables or disables an application. This API uses a promise to return the result. |
| [setApplicationEnabledSync](arkts-ability-bundlemanager-setapplicationenabledsync-f-sys.md#setapplicationenabledsync) | Enables or disables an application. This API returns the result synchronously. |
| [setApplicationEnabledSync](arkts-ability-bundlemanager-setapplicationenabledsync-f-sys.md#setapplicationenabledsync-1) | Set whether an application is enabled or disabled, with control over whether the process is killed when disabled. |
| [switchUninstallState](arkts-ability-bundlemanager-switchuninstallstate-f-sys.md#switchuninstallstate) | Switches the uninstall state of an application. This API is independent of EDM application interception control. |
| [verifyAbc](arkts-ability-bundlemanager-verifyabc-f-sys.md#verifyabc) | Verifies an .abc file. This API uses an asynchronous callback to return the result. |
| [verifyAbc](arkts-ability-bundlemanager-verifyabc-f-sys.md#verifyabc-1) | Verifies an .abc file. This API uses a promise to return the result. |
<!--DelEnd-->

### Enums

| Name | Description |
| --- | --- |
| [AbilityType](arkts-ability-bundlemanager-abilitytype-e.md) | Enumerates the types of ability components. |
| [BundleFlag](arkts-ability-bundlemanager-bundleflag-e.md) | Enumerates the bundle flags, which indicate the type of bundle information to obtain. |
| [BundleType](arkts-ability-bundlemanager-bundletype-e.md) | Enumerates the bundle types. |
| [CompatiblePolicy](arkts-ability-bundlemanager-compatiblepolicy-e.md) | Defines the version compatibility type of the dynamic shared library. |
| [DisplayOrientation](arkts-ability-bundlemanager-displayorientation-e.md) | Enumerates the display orientations of the ability. It is applicable only to [PageAbility](docroot://application-models/pageability-overview.md) in the FA model. |
| [ExtensionAbilityType](arkts-ability-bundlemanager-extensionabilitytype-e.md) | Enumerates the types of ExtensionAbility components.  <!--RP2--><!--RP2End--> |
| [LaunchType](arkts-ability-bundlemanager-launchtype-e.md) | Enumerates the [launch types](docroot://application-models/uiability-launch-type.md) of the UIAbility. |
| [ModuleType](arkts-ability-bundlemanager-moduletype-e.md) | Enumerates the module types. |
| [MultiAppModeType](arkts-ability-bundlemanager-multiappmodetype-e.md) | Enumerates the types of the multi-app mode. |
| [PermissionGrantState](arkts-ability-bundlemanager-permissiongrantstate-e.md) | Enumerates the permission grant states. |
| [SupportWindowMode](arkts-ability-bundlemanager-supportwindowmode-e.md) | Enumerates the window modes supported by the ability. |

<!--Del-->
### Enums（系统接口）

| Name | Description |
| --- | --- |
| [AbilityFlag](arkts-ability-bundlemanager-abilityflag-e-sys.md) | Enumerates the ability flags, which indicate the type of ability information to obtain. |
| [AppClonePreferenceMode](arkts-ability-bundlemanager-appclonepreferencemode-e-sys.md) | Enumerates the application clone preference modes. |
| [AppDistributionType](arkts-ability-bundlemanager-appdistributiontype-e-sys.md) | Enumerates the application [distribution types](docroot://security/app-provision-structure.md). |
| [ApplicationFlag](arkts-ability-bundlemanager-applicationflag-e-sys.md) | Enumerates the application flags, which indicate the type of application information to obtain. |
| [ApplicationInfoFlag](arkts-ability-bundlemanager-applicationinfoflag-e-sys.md) | Enumerates the application information flag, which describes the status between an application and user. |
| [BundleFlag](arkts-ability-bundlemanager-bundleflag-e-sys.md) | Enumerates the bundle flags, which indicate the type of bundle information to obtain. |
| [BundleInstallStatus](arkts-ability-bundlemanager-bundleinstallstatus-e-sys.md) | Enumerates the application installation statuses. |
| [ExtensionAbilityFlag](arkts-ability-bundlemanager-extensionabilityflag-e-sys.md) | Enumerates the ExtensionAbility flags, which indicate the type of ExtensionAbility information to obtain. |
| [ProfileType](arkts-ability-bundlemanager-profiletype-e-sys.md) | Enumerates the types of profiles (also called application files). |
<!--DelEnd-->

### Types

| Name | Description |
| --- | --- |
| [AbilityInfo](arkts-ability-bundlemanager-abilityinfo-t.md) | Defines the ability information. |
| [AlternateIconInfo](arkts-ability-bundlemanager-alternateiconinfo-t.md) | Describes the alternate icon information of an application. |
| [AppCloneIdentity](arkts-ability-bundlemanager-appcloneidentity-t.md) | Describes the identity information of an application clone. |
| [ApplicationInfo](arkts-ability-bundlemanager-applicationinfo-t.md) | Defines the application information. |
| [BundleInfo](arkts-ability-bundlemanager-bundleinfo-t.md) | Defines the bundle information. |
| [DataItem](arkts-ability-bundlemanager-dataitem-t.md) | Defines the user-defined data in the routing table configuration of the module. |
| [Dependency](arkts-ability-bundlemanager-dependency-t.md) | Defines the information about the dynamic shared libraries on which the module depends. |
| [ElementName](arkts-ability-bundlemanager-elementname-t.md) | Defines the element name. |
| [ExtensionAbilityInfo](arkts-ability-bundlemanager-extensionabilityinfo-t.md) | Defines the ExtensionAbility information. |
| [HapModuleInfo](arkts-ability-bundlemanager-hapmoduleinfo-t.md) | Defines the module information. |
| [Metadata](arkts-ability-bundlemanager-metadata-t.md) | Defines the metadata. |
| [ModuleMetadata](arkts-ability-bundlemanager-modulemetadata-t.md) | Defines the metadata of a module. |
| [PreloadItem](arkts-ability-bundlemanager-preloaditem-t.md) | Defines the preloaded module information in the atomic service. |
| [ReqPermissionDetail](arkts-ability-bundlemanager-reqpermissiondetail-t.md) | Defines the detailed information of the permissions to request from the system. |
| [RouterItem](arkts-ability-bundlemanager-routeritem-t.md) | Defines the router table configuration of the module. |
| [SignatureInfo](arkts-ability-bundlemanager-signatureinfo-t.md) | Defines the signature information of the bundle. |
| [Skill](arkts-ability-bundlemanager-skill-t.md) | Defines the skill information. |
| [SkillUrl](arkts-ability-bundlemanager-skillurl-t.md) | Defines the SkillUri information. |
| [UsedScene](arkts-ability-bundlemanager-usedscene-t.md) | Defines the use scenario and timing for using the permission. |
| [WindowSize](arkts-ability-bundlemanager-windowsize-t.md) | Defines the window size. |

<!--Del-->
### Types（系统接口）

| Name | Description |
| --- | --- |
| [AppClonePreference](arkts-ability-bundlemanager-appclonepreference-t-sys.md) | Defines the AppClonePreference information. |
| [AppProvisionInfo](arkts-ability-bundlemanager-appprovisioninfo-t-sys.md) | Defines the information in the [HarmonyAppProvision configuration file](docroot://security/app-provision-structure.md). |
| [BundleOptions](arkts-ability-bundlemanager-bundleoptions-t-sys.md) | Describes the bundle options used to set or query application information. |
| [DynamicIconInfo](arkts-ability-bundlemanager-dynamiciconinfo-t-sys.md) | Describes the information about the dynamic icon of an application. |
| [PermissionDef](arkts-ability-bundlemanager-permissiondef-t-sys.md) | Defines the detailed information about the permissions defined in the [module.json5](docroot://quick-start/module-configuration-file.md) file. |
| [PluginBundleInfo](arkts-ability-bundlemanager-pluginbundleinfo-t-sys.md) | Defines the plugin information. |
| [PluginModuleInfo](arkts-ability-bundlemanager-pluginmoduleinfo-t-sys.md) | Defines the module information of a plugin. |
| [PreinstalledApplicationInfo](arkts-ability-bundlemanager-preinstalledapplicationinfo-t-sys.md) | Defines the preinstalled application information. |
| [RecoverableApplicationInfo](arkts-ability-bundlemanager-recoverableapplicationinfo-t-sys.md) | Defines the information about a preinstalled application that can be restored after being uninstalled. |
| [SharedBundleInfo](arkts-ability-bundlemanager-sharedbundleinfo-t-sys.md) | Defines the shared bundle information. |
| [Validity](arkts-ability-bundlemanager-validity-t-sys.md) | Defines the validity period in the configuration file. |
<!--DelEnd-->

