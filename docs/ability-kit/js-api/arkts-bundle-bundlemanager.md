# @ohos.bundle.bundleManager

The module provides APIs for obtaining application information, including [bundle information](bundleManager/BundleInfo), [application information](bundleManager/ApplicationInfo), [ability information](bundleManager/AbilityInfo) (information about a UIAbility), and [ExtensionAbility information](bundleManager/ExtensionAbilityInfo:ExtensionAbilityInfo).

**Since:** 9

**System capability:** SystemCapability.BundleManager.BundleFramework.Core

## Modules to Import

```TypeScript
import { bundleManager } from '@kit.AbilityKit';
```

## Summary

### Functions

| Name | Description |
| --- | --- |
| [canOpenLink](arkts-ability-canopenlink-f.md#canopenlink-1) | Checks whether the target application can be accessed based on the provided link. The scheme specified in the link must be configured in the **querySchemes** field of the [module.json5](../../../../quick-start/module-configuration-file.md) file. |
| [cleanBundleCacheFilesForSelf](arkts-ability-cleanbundlecachefilesforself-f.md#cleanbundlecachefilesforself-1) | Clears the application cache. This API uses a promise to return the result. |
| [getAbilityInfo](arkts-ability-getabilityinfo-f.md#getabilityinfo-1) | Obtains the ability information based on the given resource identifier and ability flag. This API uses a promise to return the result. |
| [getAlternateIcons](arkts-ability-getalternateicons-f.md#getalternateicons-1) | Queries the alternate icon information configured in the alternateIcons in the app.json5 of the current application. This API uses a promise to return the result. |
| [getAppCloneIdentity](arkts-ability-getappcloneidentity-f.md#getappcloneidentity-1) | Obtains the bundle name and clone index of a cloned application based on the given UID. This API uses a promise to return the result. |
| [getApplicationLabel](arkts-ability-getapplicationlabel-f.md#getapplicationlabel-1) | Obtains the name of an application with the specified package name and clone index. This API uses a promise to return the result. |
| [getBundleInfo](arkts-ability-getbundleinfo-f.md#getbundleinfo-1) | Obtains the bundle information based on the given bundle name and bundle flags. This API uses an asynchronous callback to return the result. No permission is required for obtaining the caller's own information. |
| [getBundleInfo](arkts-ability-getbundleinfo-f.md#getbundleinfo-2) | Obtains the [BundleInfo](bundleManager/BundleInfo) based on the given bundle name, bundle flags, and user ID. This API uses an asynchronous callback to return the result. No permission is required for obtaining the caller's own information. |
| [getBundleInfo](arkts-ability-getbundleinfo-f.md#getbundleinfo-3) | Obtains the bundle information based on the given bundle name, bundle flags, and user ID. This API uses a promise to return the result. No permission is required for obtaining the caller's own information. |
| [getBundleInfoForSelf](arkts-ability-getbundleinfoforself-f.md#getbundleinfoforself-1) | Obtains the bundle information of the current application based on the given bundle flags. This API uses a promise to return the result. |
| [getBundleInfoForSelf](arkts-ability-getbundleinfoforself-f.md#getbundleinfoforself-2) | Obtains the bundle information of the current application based on the given bundle flags. This API uses an asynchronous callback to return the result. |
| [getBundleInfoForSelfSync](arkts-ability-getbundleinfoforselfsync-f.md#getbundleinfoforselfsync-1) | Obtains the bundle information of the current application based on the given bundle flags. This API returns the result synchronously. |
| [getBundleInfoSync](arkts-ability-getbundleinfosync-f.md#getbundleinfosync-1) | Obtains the bundle information based on the given bundle name, bundle flags, and user ID. This API returns the result synchronously. No permission is required for obtaining the caller's own information. |
| [getBundleInfoSync](arkts-ability-getbundleinfosync-f.md#getbundleinfosync-2) | Obtains the bundle information for the caller's user based on the given bundle name and bundle flags. This API returns the result synchronously. No permission is required for obtaining the caller's own information. |
| [getBundleNameByUid](arkts-ability-getbundlenamebyuid-f.md#getbundlenamebyuid-1) | Obtains the bundle name based on the given UID. This API uses an asynchronous callback to return the result. |
| [getBundleNameByUid](arkts-ability-getbundlenamebyuid-f.md#getbundlenamebyuid-2) | Obtains the bundle name based on the given UID. This API uses a promise to return the result. |
| [getBundleNameByUidSync](arkts-ability-getbundlenamebyuidsync-f.md#getbundlenamebyuidsync-1) | Obtains the bundle name based on the given UID. This API returns the result synchronously. |
| [getInstalledBundleList](arkts-ability-getinstalledbundlelist-f.md#getinstalledbundlelist-1) | Obtains all the bundle information in the system based on the given bundle flags. This API uses a promise to return the result. |
| [getLaunchWant](arkts-ability-getlaunchwant-f.md#getlaunchwant-1) | Obtains the **Want** parameters of the [entry UIAbility](../../../../quick-start/application-package-glossary.md#uiability) of the current application. |
| [getPluginBundlePathForSelf](arkts-ability-getpluginbundlepathforself-f.md#getpluginbundlepathforself-1) | Obtains the installation path of a specified plugin in the current [application sandbox](../../../../file-management/app-sandbox-directory.md). |
| [getProfileByAbility](arkts-ability-getprofilebyability-f.md#getprofilebyability-1) | Obtains the JSON string array of the current application's configuration file based on the given module name, ability name, and metadata name (name configured under **metadata** in [abilities](../../../../quick-start/module-configuration-file.md#abilities) of the **module.json5** file). This API uses an asynchronous callback to return the result. &gt; NOTE &gt; &gt; If the profile uses the resource reference format, the return value retains this format (for example, &gt; **$string:res_id**). You can obtain the referenced resources through related APIs of the &gt; [resource manager module](../../apis-localization-kit/arkts-apis/arkts-resourcemanager.md). |
| [getProfileByAbility](arkts-ability-getprofilebyability-f.md#getprofilebyability-2) | Obtains the JSON string array of the current application's configuration file based on the given module name, ability name, and metadata name (name configured under **metadata** in [abilities](../../../../quick-start/module-configuration-file.md#abilities) of the **module.json5** file). This API uses a promise to return the result. &gt; NOTE &gt; &gt; If the profile uses the resource reference format, the return value retains this format (for example, &gt; **$string:res_id**). You can obtain the referenced resources through related APIs of the &gt; [resource manager module](../../apis-localization-kit/arkts-apis/arkts-resourcemanager.md). |
| [getProfileByAbilitySync](arkts-ability-getprofilebyabilitysync-f.md#getprofilebyabilitysync-1) | Obtains the JSON string array of the current application's configuration file based on the given module name, ability name, and metadata name (name configured in [metadata](../../../../quick-start/module-configuration-file.md#metadata) of the **module.json5** file). This API returns the result synchronously. The result value is a string array. |
| [getProfileByExtensionAbility](arkts-ability-getprofilebyextensionability-f.md#getprofilebyextensionability-1) | Obtains the JSON string array of the current application's configuration file based on the given module name, ExtensionAbility name, and metadata name (name configured in [metadata](../../../../quick-start/module-configuration-file.md#metadata) of the **module.json5** file). This API uses an asynchronous callback to return the result. |
| [getProfileByExtensionAbility](arkts-ability-getprofilebyextensionability-f.md#getprofilebyextensionability-2) | Obtains the JSON string array of the current application's configuration file based on the given module name, ExtensionAbility name, and metadata name (name configured in [metadata](../../../../quick-start/module-configuration-file.md#metadata) of the **module.json5** file). This API uses a promise to return the result. |
| [getProfileByExtensionAbilitySync](arkts-ability-getprofilebyextensionabilitysync-f.md#getprofilebyextensionabilitysync-1) | Obtains the JSON string array of the current application's configuration file based on the given module name, ExtensionAbility name, and metadata name (name configured in [metadata](../../../../quick-start/module-configuration-file.md#metadata) of the **module.json5** file). This API returns the result synchronously. The result value is a string array. |
| [getSignatureInfo](arkts-ability-getsignatureinfo-f.md#getsignatureinfo-1) | Obtains the [signature information](bundleManager/BundleInfo:SignatureInfo) of an application based on the given UID. |
| [setAlternateIcon](arkts-ability-setalternateicon-f.md#setalternateicon-1) | Sets the alternate icon of the caller based on the given alternate icon name. This API uses a promise to return the result. |

<!--Del-->
### Functions（系统接口）

| Name | Description |
| --- | --- |
| [cleanAllBundleCache](arkts-ability-cleanallbundlecache-f-sys.md#cleanallbundlecache-1) | Clears the global cache. This API uses a promise to return the result. |
| [cleanBundleCacheFiles](arkts-ability-cleanbundlecachefiles-f-sys.md#cleanbundlecachefiles-1) | Clears the bundle cache based on the given bundle name. This API uses an asynchronous callback to return the result. No permission is required when the caller clears its own cache. |
| [cleanBundleCacheFiles](arkts-ability-cleanbundlecachefiles-f-sys.md#cleanbundlecachefiles-2) | Clears the bundle cache based on the given bundle name. This API uses a promise to return the result. No permission is required when the caller clears its own cache. |
| [cleanBundleCacheFiles](arkts-ability-cleanbundlecachefiles-f-sys.md#cleanbundlecachefiles-3) | Clears the bundle cache based on the given bundle name and application index. This API uses a promise to return the result. No permission is required when the caller clears its own cache. |
| [deleteAbc](arkts-ability-deleteabc-f-sys.md#deleteabc-1) | Deletes an .abc file based on the specified file path. This API uses a promise to return the result. |
| [disableDynamicIcon](arkts-ability-disabledynamicicon-f-sys.md#disabledynamicicon-1) | Disables the dynamic icon based on the given bundle name. This API uses a promise to return the result. |
| [disableDynamicIcon](arkts-ability-disabledynamicicon-f-sys.md#disabledynamicicon-2) | Disables the dynamic icon based on the given bundle name and bundle options. This API uses a promise to return the result. To disable the dynamic icon for the current user, you must request the ohos.permission.ACCESS_DYNAMIC_ICON permission. To disable the dynamic icon for another user, you must request the ohos.permission.ACCESS_DYNAMIC_ICON and ohos.permission.INTERACT_ACROSS_LOCAL_ACCOUNTS permissions. |
| [enableDynamicIcon](arkts-ability-enabledynamicicon-f-sys.md#enabledynamicicon-1) | Enables the dynamic icon based on the given bundle name and module name. This API uses a promise to return the result. |
| [enableDynamicIcon](arkts-ability-enabledynamicicon-f-sys.md#enabledynamicicon-2) | Enables the dynamic icon based on the given bundle name, module name, and bundle options. This API uses a promise to return the result. To enable the dynamic icon for the current user, you must request the ohos.permission.ACCESS_DYNAMIC_ICON permission. To enable the dynamic icon for another user, you must request the ohos.permission.ACCESS_DYNAMIC_ICON and ohos.permission.INTERACT_ACROSS_LOCAL_ACCOUNTS permissions. |
| [getAbilityIcon](arkts-ability-getabilityicon-f-sys.md#getabilityicon-1) | Obtains the PixelMap of an icon based on the bundle name, module name, and ability name. This API uses a promise to return the result. |
| [getAbilityIcon](arkts-ability-getabilityicon-f-sys.md#getabilityicon-2) | Obtains the PixelMap of an icon based on the bundle name, module name, and ability name. This API uses a promise to return the result. |
| [getAbilityLabel](arkts-ability-getabilitylabel-f-sys.md#getabilitylabel-1) | Obtains the ability label based on the given bundle name, module name, and ability name. This API uses an asynchronous callback to return the result. No permission is required for obtaining the caller's own information. |
| [getAbilityLabel](arkts-ability-getabilitylabel-f-sys.md#getabilitylabel-2) | Obtains the ability label based on the given bundle name, module name, and ability name. This API uses a promise to return the result. No permission is required for obtaining the caller's own information. |
| [getAbilityLabelSync](arkts-ability-getabilitylabelsync-f-sys.md#getabilitylabelsync-1) | Obtains the ability label based on the given bundle name, module name, and ability name. This API returns the result synchronously. No permission is required for obtaining the caller's own information. |
| [getAdditionalInfo](arkts-ability-getadditionalinfo-f-sys.md#getadditionalinfo-1) | Obtains additional information about a bundle in synchronous mode. The return value is the **additionalInfo** field value in [InstallParam](arkts-ability-installparam-i-sys.md) passed when **install** is called. |
| [getAllAppCloneBundleInfo](arkts-ability-getallappclonebundleinfo-f-sys.md#getallappclonebundleinfo-1) | Obtains all the bundle information of applications and application clones based on the given bundle name, [bundleFlags](arkts-ability-bundleflag-e.md), and user ID. This API uses a promise to return the result. No permission is required for obtaining the caller's own information. |
| [getAllAppProvisionInfo](arkts-ability-getallappprovisioninfo-f-sys.md#getallappprovisioninfo-1) | Obtains the [provision](bundleManager/AppProvisionInfo) configuration file information of all applications based on the given user ID. This API uses a promise to return the result. |
| [getAllApplicationInfo](arkts-ability-getallapplicationinfo-f-sys.md#getallapplicationinfo-1) | Obtains all the application information in the system based on the given application flags. This API uses an asynchronous callback to return the result. |
| [getAllApplicationInfo](arkts-ability-getallapplicationinfo-f-sys.md#getallapplicationinfo-2) | Obtains all the application information in the system based on the given application flags and user ID. This API uses an asynchronous callback to return the result. |
| [getAllApplicationInfo](arkts-ability-getallapplicationinfo-f-sys.md#getallapplicationinfo-3) | Obtains all the application information in the system based on the given application flags and user ID. This API uses a promise to return the result. |
| [getAllBundleCacheSize](arkts-ability-getallbundlecachesize-f-sys.md#getallbundlecachesize-1) | Obtains the global cache size. This API uses a promise to return the result. It is not possible to obtain the cache of applications that are currently running or have been granted the " AllowAppDataNotCleared" privilege as specified in the [application configuration guide](../../../../../device-dev/subsystems/subsys-app-privilege-config-guide.md). |
| [getAllBundleInfo](arkts-ability-getallbundleinfo-f-sys.md#getallbundleinfo-1) | Obtains all the bundle information in the system based on the given bundle flags. This API uses an asynchronous callback to return the result. |
| [getAllBundleInfo](arkts-ability-getallbundleinfo-f-sys.md#getallbundleinfo-2) | Obtains all the bundle information in the system based on the given bundle flags and user ID. This API uses an asynchronous callback to return the result. |
| [getAllBundleInfo](arkts-ability-getallbundleinfo-f-sys.md#getallbundleinfo-3) | Obtains all the bundle information in the system based on the given bundle flags and user ID. This API uses a promise to return the result. |
| [getAllBundleInfoByDeveloperId](arkts-ability-getallbundleinfobydeveloperid-f-sys.md#getallbundleinfobydeveloperid-1) | Obtains the information about all bundles of the current user based on the given developer ID. |
| [getAllBundleInstallInfo](arkts-ability-getallbundleinstallinfo-f-sys.md#getallbundleinstallinfo-1) | Obtains the extended install information about all applications in the system. This API uses a promise to return the result. |
| [getAllDynamicIconInfo](arkts-ability-getalldynamiciconinfo-f-sys.md#getalldynamiciconinfo-1) | Obtains the dynamic icon information of all applications and all application clones of a specified user. This API uses a promise to return the result. To obtain the dynamic icon information of all applications and all application clones of the current user, you must request the ohos.permission.GET_BUNDLE_INFO_PRIVILEGED permission. To obtain the dynamic icon information of all applications and all application clones of other users or all users, you must request the ohos.permission.GET_BUNDLE_INFO_PRIVILEGED and ohos.permission.INTERACT_ACROSS_LOCAL_ACCOUNTS permissions. |
| [getAllNewPreinstalledApplicationInfo](arkts-ability-getallnewpreinstalledapplicationinfo-f-sys.md#getallnewpreinstalledapplicationinfo-1) | Obtains PreinstalledApplicationInfo of all newly added preinstalled applications during device OTA upgrade. |
| [getAllPluginInfo](arkts-ability-getallplugininfo-f-sys.md#getallplugininfo-1) | Obtains all the plugin information in the system based on the given host bundle name and user ID. This API uses a promise to return the result. |
| [getAllPreinstalledApplicationInfo](arkts-ability-getallpreinstalledapplicationinfo-f-sys.md#getallpreinstalledapplicationinfo-1) | Obtains information about all preinstalled applications. This API uses a promise to return the result. |
| [getAllSharedBundleInfo](arkts-ability-getallsharedbundleinfo-f-sys.md#getallsharedbundleinfo-1) | Obtains all the shared bundle information. This API uses an asynchronous callback to return the result. |
| [getAllSharedBundleInfo](arkts-ability-getallsharedbundleinfo-f-sys.md#getallsharedbundleinfo-2) | Obtains all the shared bundle information. This API uses a promise to return the result. |
| [getAppCloneBundleInfo](arkts-ability-getappclonebundleinfo-f-sys.md#getappclonebundleinfo-1) | Obtains the bundle information of an application or an application clone based on the given bundle name, app index, [bundleFlags](arkts-ability-bundleflag-e.md), and user ID. This API uses a promise to return the result. No permission is required for obtaining the caller's own information. |
| [getAppCloneIdentityBySandboxDataDir](arkts-ability-getappcloneidentitybysandboxdatadir-f-sys.md#getappcloneidentitybysandboxdatadir-1) | Obtains the identity information of an application, including the bundle name and clone index, based on the given sandbox directory name. |
| [getAppClonePreference](arkts-ability-getappclonepreference-f-sys.md#getappclonepreference-1) | Obtains the application clone preference configuration based on the given bundle name. |
| [getAppProvisionInfo](arkts-ability-getappprovisioninfo-f-sys.md#getappprovisioninfo-1) | Obtains the provision profile based on the given bundle name. This API uses an asynchronous callback to return the result. No permission is required for obtaining the caller's own information. |
| [getAppProvisionInfo](arkts-ability-getappprovisioninfo-f-sys.md#getappprovisioninfo-2) | Obtains the provision profile based on the given bundle name and user ID. This API uses an asynchronous callback to return the result. No permission is required for obtaining the caller's own information. |
| [getAppProvisionInfo](arkts-ability-getappprovisioninfo-f-sys.md#getappprovisioninfo-3) | Obtains the provision profile based on the given bundle name and user ID. This API uses a promise to return the result. No permission is required for obtaining the caller's own information. |
| [getAppProvisionInfoSync](arkts-ability-getappprovisioninfosync-f-sys.md#getappprovisioninfosync-1) | Obtains the provision profile based on the given bundle name and user ID. This API returns the result synchronously. No permission is required for obtaining the caller's own information. |
| [getApplicationInfo](arkts-ability-getapplicationinfo-f-sys.md#getapplicationinfo-1) | Obtains the application information based on the given bundle name and application flags. This API uses an asynchronous callback to return the result. No permission is required for obtaining the caller's own information. |
| [getApplicationInfo](arkts-ability-getapplicationinfo-f-sys.md#getapplicationinfo-2) | Obtains the application information based on the given bundle name, application flags, and user ID. This API uses an asynchronous callback to return the result. No permission is required for obtaining the caller's own information. |
| [getApplicationInfo](arkts-ability-getapplicationinfo-f-sys.md#getapplicationinfo-3) | Obtains the application information based on the given bundle name, application flags, and user ID. This API uses a promise to return the result. No permission is required for obtaining the caller's own information. |
| [getApplicationInfoSync](arkts-ability-getapplicationinfosync-f-sys.md#getapplicationinfosync-1) | Obtains the application information based on the given bundle name, application flags, and user ID. This API returns the result synchronously. No permission is required for obtaining the caller's own information. |
| [getApplicationInfoSync](arkts-ability-getapplicationinfosync-f-sys.md#getapplicationinfosync-2) | Obtains the application information based on the given bundle name and application flags. This API returns the result synchronously. No permission is required for obtaining the caller's own information. |
| [getBundleArchiveInfo](arkts-ability-getbundlearchiveinfo-f-sys.md#getbundlearchiveinfo-1) | Obtains the bundle information based on the given HAP file path and bundle flags. This API uses an asynchronous callback to return the result. |
| [getBundleArchiveInfo](arkts-ability-getbundlearchiveinfo-f-sys.md#getbundlearchiveinfo-2) | Obtains the bundle information based on the given HAP file path and bundle flags. This API uses a promise to return the result. |
| [getBundleArchiveInfoSync](arkts-ability-getbundlearchiveinfosync-f-sys.md#getbundlearchiveinfosync-1) | Obtains the bundle information based on the given HAP file path and bundle flags. This API returns the result synchronously. |
| [getBundleInstallStatus](arkts-ability-getbundleinstallstatus-f-sys.md#getbundleinstallstatus-1) | Obtains the installation status of a specified application under a given user. |
| [getDeveloperIds](arkts-ability-getdeveloperids-f-sys.md#getdeveloperids-1) | Obtains all the developer IDs of the current user based on the given application [distribution type](arkts-ability-appdistributiontype-e-sys.md). |
| [getDynamicIcon](arkts-ability-getdynamicicon-f-sys.md#getdynamicicon-1) | Obtains the module name corresponding to the dynamic icon based on the specified bundle name. This API uses a promise to return the result. |
| [getDynamicIconInfo](arkts-ability-getdynamiciconinfo-f-sys.md#getdynamiciconinfo-1) | Obtains the dynamic icon information of all users and all application clones based on the given bundle name. This API uses a promise to return the result. |
| [getExtResource](arkts-ability-getextresource-f-sys.md#getextresource-1) | Obtains the module names corresponding to the extended resources based on the given bundle name. This API uses a promise to return the result. |
| [getJsonProfile](arkts-ability-getjsonprofile-f-sys.md#getjsonprofile-1) | Obtains the JSON strings of the profile based on the given profile type, bundle name, and module name. This API returns the result synchronously. No permission is required for obtaining the caller's own profile. |
| [getLaunchWantForBundle](arkts-ability-getlaunchwantforbundle-f-sys.md#getlaunchwantforbundle-1) | Obtains the Want used to launch the bundle based on the given bundle name and user ID. This API uses an asynchronous callback to return the result. |
| [getLaunchWantForBundle](arkts-ability-getlaunchwantforbundle-f-sys.md#getlaunchwantforbundle-2) | Obtains the Want used to launch the bundle based on the given bundle name. This API uses an asynchronous callback to return the result. |
| [getLaunchWantForBundle](arkts-ability-getlaunchwantforbundle-f-sys.md#getlaunchwantforbundle-3) | Obtains the Want used to launch the bundle based on the given bundle name and user ID. This API uses a promise to return the result. |
| [getLaunchWantForBundleSync](arkts-ability-getlaunchwantforbundlesync-f-sys.md#getlaunchwantforbundlesync-1) | Obtains the Want used to launch the bundle based on the given bundle name and user ID. This API returns the result synchronously. |
| [getPermissionDef](arkts-ability-getpermissiondef-f-sys.md#getpermissiondef-1) | Obtains the PermissionDef struct based on the given permission name. This API uses an asynchronous callback to return the result. |
| [getPermissionDef](arkts-ability-getpermissiondef-f-sys.md#getpermissiondef-2) | Obtains the PermissionDef struct based on the given permission name. This API uses a promise to return the result. |
| [getPermissionDefSync](arkts-ability-getpermissiondefsync-f-sys.md#getpermissiondefsync-1) | Obtains the **PermissionDef** struct based on the given permission name. This API returns the result synchronously. |
| [getRecoverableApplicationInfo](arkts-ability-getrecoverableapplicationinfo-f-sys.md#getrecoverableapplicationinfo-1) | Obtains information about all preinstalled applications that can be restored. This API uses an asynchronous callback to return the result. |
| [getRecoverableApplicationInfo](arkts-ability-getrecoverableapplicationinfo-f-sys.md#getrecoverableapplicationinfo-2) | Obtains information about all preinstalled applications that can be restored. This API uses a promise to return the result. |
| [getSandboxDataDir](arkts-ability-getsandboxdatadir-f-sys.md#getsandboxdatadir-1) | Obtains the sandbox directory of an application based on the given bundle name and clone index. |
| [getSharedBundleInfo](arkts-ability-getsharedbundleinfo-f-sys.md#getsharedbundleinfo-1) | Obtains the shared bundle information based on the given bundle name. This API uses an asynchronous callback to return the result. No permission is required for obtaining the caller's own information. |
| [getSharedBundleInfo](arkts-ability-getsharedbundleinfo-f-sys.md#getsharedbundleinfo-2) | Obtains the shared bundle information based on the given bundle name. This API uses a promise to return the result. No permission is required for obtaining the caller's own information. |
| [getSpecifiedDistributionType](arkts-ability-getspecifieddistributiontype-f-sys.md#getspecifieddistributiontype-1) | Obtains the [distribution type](../../../../security/app-provision-structure.md) of a bundle in synchronous mode. The return value is the **specifiedDistributionType** field value in [InstallParam](arkts-ability-installparam-i-sys.md) passed when **install** is called. No permission is required for obtaining the caller's own information. |
| [isAbilityEnabled](arkts-ability-isabilityenabled-f-sys.md#isabilityenabled-1) | Checks whether an ability of an application or an application clone is enabled. This API uses a promise to return the result. |
| [isAbilityEnabled](arkts-ability-isabilityenabled-f-sys.md#isabilityenabled-2) | Checks whether an ability is enabled. This API uses an asynchronous callback to return the result. |
| [isAbilityEnabled](arkts-ability-isabilityenabled-f-sys.md#isabilityenabled-3) | Checks whether an ability is enabled. This API uses a promise to return the result. |
| [isAbilityEnabledSync](arkts-ability-isabilityenabledsync-f-sys.md#isabilityenabledsync-1) | Checks whether an ability is enabled. This API returns the result synchronously. |
| [isApplicationDisableForbidden](arkts-ability-isapplicationdisableforbidden-f-sys.md#isapplicationdisableforbidden-1) | Synchronously queries whether a specified application or application clone of a specified user is set to forbid being disabled. If you need to check whether an application is forbidden to be disabled under the current user, ohos.permission.GET_BUNDLE_INFO_PRIVILEGED needs to be applied for. If you need to check whether an application is forbidden to be disabled under other users, ohos.permission.GET_BUNDLE_INFO_PRIVILEGED and ohos.permission.INTERACT_ACROSS_LOCAL_ACCOUNTS need to be applied for. |
| [isApplicationEnabled](arkts-ability-isapplicationenabled-f-sys.md#isapplicationenabled-1) | Checks whether an application or an application clone is enabled. This API uses a promise to return the result. |
| [isApplicationEnabled](arkts-ability-isapplicationenabled-f-sys.md#isapplicationenabled-2) | Checks whether an application is enabled. This API uses an asynchronous callback to return the result. |
| [isApplicationEnabled](arkts-ability-isapplicationenabled-f-sys.md#isapplicationenabled-3) | Checks whether an application is enabled. This API uses a promise to return the result. |
| [isApplicationEnabledSync](arkts-ability-isapplicationenabledsync-f-sys.md#isapplicationenabledsync-1) | Checks whether an application is enabled. This API returns the result synchronously. |
| [migrateData](arkts-ability-migratedata-f-sys.md#migratedata-1) | Migrates files from the source path to the destination path. This API uses a promise to return the result. |
| [queryAbilityInfo](arkts-ability-queryabilityinfo-f-sys.md#queryabilityinfo-1) | Obtains the ability information based on the given want and ability flags. This API uses an asynchronous callback to return the result. No permission is required for obtaining the caller's own information. |
| [queryAbilityInfo](arkts-ability-queryabilityinfo-f-sys.md#queryabilityinfo-2) | Obtains the ability information based on the given want, ability flags, and user ID. This API uses an asynchronous callback to return the result. No permission is required for obtaining the caller's own information. |
| [queryAbilityInfo](arkts-ability-queryabilityinfo-f-sys.md#queryabilityinfo-3) | Obtains the ability information based on the given want, ability flags, and user ID. This API uses a promise to return the result. No permission is required for obtaining the caller's own information. |
| [queryAbilityInfo](arkts-ability-queryabilityinfo-f-sys.md#queryabilityinfo-4) | Obtains the ability information based on the given want list, ability flags, and user ID. This API uses a promise to return the result. No permission is required for obtaining the caller's own information. |
| [queryAbilityInfoSync](arkts-ability-queryabilityinfosync-f-sys.md#queryabilityinfosync-1) | Obtains the ability information based on the given want, ability flags, and user ID. This API returns the result synchronously. No permission is required for obtaining the caller's own information. |
| [queryExtensionAbilityInfo](arkts-ability-queryextensionabilityinfo-f-sys.md#queryextensionabilityinfo-1) | Obtains the ExtensionAbility information based on the given want, ExtensionAbility type, and ExtensionAbility flags. This API uses an asynchronous callback to return the result. No permission is required for obtaining the caller's own information. |
| [queryExtensionAbilityInfo](arkts-ability-queryextensionabilityinfo-f-sys.md#queryextensionabilityinfo-2) | Obtains the ExtensionAbility information based on the given want, ExtensionAbility type, ExtensionAbility flags, and user ID. This API uses an asynchronous callback to return the result. No permission is required for obtaining the caller's own information. |
| [queryExtensionAbilityInfo](arkts-ability-queryextensionabilityinfo-f-sys.md#queryextensionabilityinfo-3) | Obtains the ExtensionAbility information based on the given want, ExtensionAbility type, ExtensionAbility flags, and user ID. This API uses a promise to return the result. No permission is required for obtaining the caller's own information. |
| [queryExtensionAbilityInfoSync](arkts-ability-queryextensionabilityinfosync-f-sys.md#queryextensionabilityinfosync-1) | Obtains the ExtensionAbility information based on the given want, ExtensionAbility type, ExtensionAbility flags, and user ID. This API returns the result synchronously. No permission is required for obtaining the caller's own information. |
| [queryExtensionAbilityInfoSync](arkts-ability-queryextensionabilityinfosync-f-sys.md#queryextensionabilityinfosync-2) | Obtains the ExtensionAbility information based on the given Want, ExtensionAbility type, ExtensionAbility flags, and user ID. This API returns the result synchronously. No permission is required for obtaining the caller's own information. |
| [queryExtensionAbilityInfoSync](arkts-ability-queryextensionabilityinfosync-f-sys.md#queryextensionabilityinfosync-3) | Obtains the ExtensionAbility information based on the given ExtensionAbility type, ExtensionAbility flags, and user ID. No permission is required for obtaining the caller's own information. |
| [recoverBackupBundleData](arkts-ability-recoverbackupbundledata-f-sys.md#recoverbackupbundledata-1) | Restores the backup data for a specified application under a given user. This API uses a promise to return the result. |
| [removeBackupBundleData](arkts-ability-removebackupbundledata-f-sys.md#removebackupbundledata-1) | Removes the backup data for a specified application under a given user. This API uses a promise to return the result. |
| [setAbilityEnabled](arkts-ability-setabilityenabled-f-sys.md#setabilityenabled-1) | Enables or disables an ability of an application or an application clone. This API uses a promise to return the result. |
| [setAbilityEnabled](arkts-ability-setabilityenabled-f-sys.md#setabilityenabled-2) | Enables or disables an ability. This API uses an asynchronous callback to return the result. |
| [setAbilityEnabled](arkts-ability-setabilityenabled-f-sys.md#setabilityenabled-3) | Enables or disables an ability. This API uses a promise to return the result. |
| [setAbilityEnabledSync](arkts-ability-setabilityenabledsync-f-sys.md#setabilityenabledsync-1) | Enables or disables an ability. This API returns the result synchronously. |
| [setAbilityFileTypesForSelf](arkts-ability-setabilityfiletypesforself-f-sys.md#setabilityfiletypesforself-1) | Sets the file types that can be opened by the current application. |
| [setAdditionalInfo](arkts-ability-setadditionalinfo-f-sys.md#setadditionalinfo-1) | Sets additional information for an application. This API can be called only by AppGallery. |
| [setAppClonePreference](arkts-ability-setappclonepreference-f-sys.md#setappclonepreference-1) | Sets the application clone preference configuration. |
| [setApplicationEnabled](arkts-ability-setapplicationenabled-f-sys.md#setapplicationenabled-1) | Enables or disables an application or an application clone. This API uses a promise to return the result. |
| [setApplicationEnabled](arkts-ability-setapplicationenabled-f-sys.md#setapplicationenabled-2) | Sets the enabled or disabled state of a specified application or application clone, and controls whether to exit the application process when the application is disabled. This API uses a promise to return the result. |
| [setApplicationEnabled](arkts-ability-setapplicationenabled-f-sys.md#setapplicationenabled-3) | Enables or disables an application. This API uses an asynchronous callback to return the result. |
| [setApplicationEnabled](arkts-ability-setapplicationenabled-f-sys.md#setapplicationenabled-4) | Enables or disables an application. This API uses a promise to return the result. |
| [setApplicationEnabledSync](arkts-ability-setapplicationenabledsync-f-sys.md#setapplicationenabledsync-1) | Enables or disables an application. This API returns the result synchronously. |
| [setApplicationEnabledSync](arkts-ability-setapplicationenabledsync-f-sys.md#setapplicationenabledsync-2) | Set whether an application is enabled or disabled, with control over whether the process is killed when disabled. |
| [switchUninstallState](arkts-ability-switchuninstallstate-f-sys.md#switchuninstallstate-1) | Switches the uninstall state of an application. This API is independent of EDM application interception control. |
| [verifyAbc](arkts-ability-verifyabc-f-sys.md#verifyabc-1) | Verifies an .abc file. This API uses an asynchronous callback to return the result. |
| [verifyAbc](arkts-ability-verifyabc-f-sys.md#verifyabc-2) | Verifies an .abc file. This API uses a promise to return the result. |
<!--DelEnd-->

### Enums

| Name | Description |
| --- | --- |
| [AbilityType](arkts-ability-abilitytype-e.md) | Enumerates the types of ability components. |
| [BundleFlag](arkts-ability-bundleflag-e.md) | Enumerates the bundle flags, which indicate the type of bundle information to obtain. |
| [BundleType](arkts-ability-bundletype-e.md) | Enumerates the bundle types. |
| [CompatiblePolicy](arkts-ability-compatiblepolicy-e.md) | Defines the version compatibility type of the dynamic shared library. |
| [DisplayOrientation](arkts-ability-displayorientation-e.md) | Enumerates the display orientations of the ability. It is applicable only to [PageAbility](../../../../application-models/pageability-overview.md) in the FA model. |
| [ExtensionAbilityType](arkts-ability-extensionabilitytype-e.md) | Enumerates the types of ExtensionAbility components. &lt;!--RP2--&gt;&lt;!--RP2End--&gt; |
| [LaunchType](arkts-ability-launchtype-e.md) | Enumerates the [launch types](../../../../application-models/uiability-launch-type.md) of the UIAbility. |
| [ModuleType](arkts-ability-moduletype-e.md) | Enumerates the module types. |
| [MultiAppModeType](arkts-ability-multiappmodetype-e.md) | Enumerates the types of the multi-app mode. |
| [PermissionGrantState](arkts-ability-permissiongrantstate-e.md) | Enumerates the permission grant states. |
| [SupportWindowMode](arkts-ability-supportwindowmode-e.md) | Enumerates the window modes supported by the ability. |

<!--Del-->
### Enums（系统接口）

| Name | Description |
| --- | --- |
| [AbilityFlag](arkts-ability-abilityflag-e-sys.md) | Enumerates the ability flags, which indicate the type of ability information to obtain. |
| [AppClonePreferenceMode](arkts-ability-appclonepreferencemode-e-sys.md) | Enumerates the application clone preference modes. |
| [AppDistributionType](arkts-ability-appdistributiontype-e-sys.md) | Enumerates the application [distribution types](../../../../security/app-provision-structure.md). |
| [ApplicationFlag](arkts-ability-applicationflag-e-sys.md) | Enumerates the application flags, which indicate the type of application information to obtain. |
| [ApplicationInfoFlag](arkts-ability-applicationinfoflag-e-sys.md) | Enumerates the application information flag, which describes the status between an application and user. |
| [BundleFlag](arkts-ability-bundleflag-e-sys.md) | Enumerates the bundle flags, which indicate the type of bundle information to obtain. |
| [BundleInstallStatus](arkts-ability-bundleinstallstatus-e-sys.md) | Enumerates the application installation statuses. |
| [ExtensionAbilityFlag](arkts-ability-extensionabilityflag-e-sys.md) | Enumerates the ExtensionAbility flags, which indicate the type of ExtensionAbility information to obtain. |
| [ProfileType](arkts-ability-profiletype-e-sys.md) | Enumerates the types of profiles (also called application files). |
<!--DelEnd-->

### Types

| Name | Description |
| --- | --- |
| [AbilityInfo](arkts-ability-abilityinfo-t.md) | Defines the ability information. |
| [AlternateIconInfo](arkts-ability-alternateiconinfo-t.md) | Describes the alternate icon information of an application. |
| [AppCloneIdentity](arkts-ability-appcloneidentity-t.md) | Describes the identity information of an application clone. |
| [ApplicationInfo](arkts-ability-applicationinfo-t.md) | Defines the application information. |
| [BundleInfo](arkts-ability-bundleinfo-t.md) | Defines the bundle information. |
| [DataItem](arkts-ability-dataitem-t.md) | Defines the user-defined data in the routing table configuration of the module. |
| [Dependency](arkts-ability-dependency-t.md) | Defines the information about the dynamic shared libraries on which the module depends. |
| [ElementName](arkts-ability-elementname-t.md) | Defines the element name. |
| [ExtensionAbilityInfo](arkts-ability-extensionabilityinfo-t.md) | Defines the ExtensionAbility information. |
| [HapModuleInfo](arkts-ability-hapmoduleinfo-t.md) | Defines the module information. |
| [Metadata](arkts-ability-metadata-t.md) | Defines the metadata. |
| [ModuleMetadata](arkts-ability-modulemetadata-t.md) | Defines the metadata of a module. |
| [PreloadItem](arkts-ability-preloaditem-t.md) | Defines the preloaded module information in the atomic service. |
| [ReqPermissionDetail](arkts-ability-reqpermissiondetail-t.md) | Defines the detailed information of the permissions to request from the system. |
| [RouterItem](arkts-ability-routeritem-t.md) | Defines the router table configuration of the module. |
| [SignatureInfo](arkts-ability-signatureinfo-t.md) | Defines the signature information of the bundle. |
| [Skill](arkts-ability-skill-t.md) | Defines the skill information. |
| [SkillUrl](arkts-ability-skillurl-t.md) | Defines the SkillUri information. |
| [UsedScene](arkts-ability-usedscene-t.md) | Defines the use scenario and timing for using the permission. |
| [WindowSize](arkts-ability-windowsize-t.md) | Defines the window size. |

<!--Del-->
### Types（系统接口）

| Name | Description |
| --- | --- |
| [AppClonePreference](arkts-ability-appclonepreference-t-sys.md) | Defines the AppClonePreference information. |
| [AppProvisionInfo](arkts-ability-appprovisioninfo-t-sys.md) | Defines the information in the [HarmonyAppProvision configuration file](../../../../security/app-provision-structure.md). |
| [BundleOptions](arkts-ability-bundleoptions-t-sys.md) | Describes the bundle options used to set or query application information. |
| [DynamicIconInfo](arkts-ability-dynamiciconinfo-t-sys.md) | Describes the information about the dynamic icon of an application. |
| [PermissionDef](arkts-ability-permissiondef-t-sys.md) | Defines the detailed information about the permissions defined in the [module.json5](../../../../quick-start/module-configuration-file.md) file. |
| [PluginBundleInfo](arkts-ability-pluginbundleinfo-t-sys.md) | Defines the plugin information. |
| [PluginModuleInfo](arkts-ability-pluginmoduleinfo-t-sys.md) | Defines the module information of a plugin. |
| [PreinstalledApplicationInfo](arkts-ability-preinstalledapplicationinfo-t-sys.md) | Defines the preinstalled application information. |
| [RecoverableApplicationInfo](arkts-ability-recoverableapplicationinfo-t-sys.md) | Defines the information about a preinstalled application that can be restored after being uninstalled. |
| [SharedBundleInfo](arkts-ability-sharedbundleinfo-t-sys.md) | Defines the shared bundle information. |
| [Validity](arkts-ability-validity-t-sys.md) | Defines the validity period in the configuration file. |
<!--DelEnd-->

