# @ohos.bundle.bundleManager

本模块提供应用信息的查询能力，支持应用包信息[BundleInfo]{@link bundleManager/BundleInfo}、应用程序信息 [ApplicationInfo]{@link bundleManager/ApplicationInfo}、UIAbility组件信息 [AbilityInfo]{@link bundleManager/AbilityInfo}、ExtensionAbility组件信息 [ExtensionAbilityInfo]{@link bundleManager/ExtensionAbilityInfo:ExtensionAbilityInfo}等信息的查询。

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
| [canOpenLink](arkts-bundlemanager-canopenlink-f.md#canOpenLink-1) | 根据给定的链接判断目标应用是否可访问，链接中的scheme需要在[module.json5文件](docroot://quick-start/module-configuration-file.md)的querySchemes字段 下配置。 |
| <!--DelRow-->[cleanAllBundleCache](arkts-bundlemanager-cleanallbundlecache-f-sys.md#cleanAllBundleCache-1) | 清理全局缓存。使用Promise异步回调。 |
| <!--DelRow-->[cleanBundleCacheFiles](arkts-bundlemanager-cleanbundlecachefiles-f-sys.md#cleanBundleCacheFiles-1) | 根据给定的bundleName清理BundleCache。使用callback异步回调。 调用方清理自身缓存数据时不需要权限。 |
| <!--DelRow-->[cleanBundleCacheFiles](arkts-bundlemanager-cleanbundlecachefiles-f-sys.md#cleanBundleCacheFiles-2) | 根据给定的bundleName清理BundleCache。使用Promise异步回调。 调用方清理自身缓存数据时不需要权限。 |
| <!--DelRow-->[cleanBundleCacheFiles](arkts-bundlemanager-cleanbundlecachefiles-f-sys.md#cleanBundleCacheFiles-3) | 根据给定的bundleName和appIndex清理BundleCache。使用Promise异步回调。 调用方清理自身缓存数据时不需要权限。 |
| [cleanBundleCacheFilesForSelf](arkts-bundlemanager-cleanbundlecachefilesforself-f.md#cleanBundleCacheFilesForSelf-1) | 清理应用自身的缓存。使用Promise异步回调。 |
| <!--DelRow-->[deleteAbc](arkts-bundlemanager-deleteabc-f-sys.md#deleteAbc-1) | 根据给定的abcPath删除.abc文件。使用Promise异步回调。 |
| <!--DelRow-->[disableDynamicIcon](arkts-bundlemanager-disabledynamicicon-f-sys.md#disableDynamicIcon-1) | 根据给定的bundleName禁用动态图标。使用Promise异步回调。 |
| <!--DelRow-->[disableDynamicIcon](arkts-bundlemanager-disabledynamicicon-f-sys.md#disableDynamicIcon-2) | 根据给定的bundleName和option禁用动态图标。使用Promise异步回调。 禁用当前用户下的动态图标信息时需要申请权限ohos.permission.ACCESS_DYNAMIC_ICON。 禁用其他用户下的动态图标信息时需要申请权限ohos.permission.ACCESS_DYNAMIC_ICON 和 ohos.permission.INTERACT_ACROSS_LOCAL_ACCOUNTS。 |
| <!--DelRow-->[enableDynamicIcon](arkts-bundlemanager-enabledynamicicon-f-sys.md#enableDynamicIcon-1) | 根据给定的bundleName、moduleName使能动态图标。使用Promise异步回调。 |
| <!--DelRow-->[enableDynamicIcon](arkts-bundlemanager-enabledynamicicon-f-sys.md#enableDynamicIcon-2) | 根据给定的bundleName、moduleName和option使能动态图标。使用Promise异步回调。 使能当前用户下的动态图标信息时需要申请权限ohos.permission.ACCESS_DYNAMIC_ICON。 使能其他用户下的动态图标信息时需要申请权限ohos.permission.ACCESS_DYNAMIC_ICON 和 ohos.permission.INTERACT_ACROSS_LOCAL_ACCOUNTS。 |
| <!--DelRow-->[getAbilityIcon](arkts-bundlemanager-getabilityicon-f-sys.md#getAbilityIcon-1) | 通过bundleName、moduleName和abilityName获取对应Icon的[PixelMap]{@link @ohos.multimedia.image:image}，使用callback异步回调。 获取调用方信息时不需要权限。 > **说明：** > > 从API version 9开始支持，从API version 10开始废弃，建议使用 > [getMediaContent]{@link @ohos.resourceManager:resourceManager.ResourceManager.getMediaContent(resId: long, callback: _AsyncCallback<Uint8Array>)} > 替代。 |
| <!--DelRow-->[getAbilityIcon](arkts-bundlemanager-getabilityicon-f-sys.md#getAbilityIcon-2) | 通过bundleName、moduleName和abilityName获取对应Icon的[PixelMap]{@link @ohos.multimedia.image:image}，使用Promise异步回调。 获取调用方信息时不需要权限。 > **说明：** > > 从API version 9开始支持，从API version 10开始废弃，建议使用 > [getMediaContent]{@link @ohos.resourceManager:resourceManager.ResourceManager.getMediaContent(resId: long, callback: _AsyncCallback<Uint8Array>)} > 替代。 |
| [getAbilityInfo](arkts-bundlemanager-getabilityinfo-f.md#getAbilityInfo-1) | 获取指定资源标识符和组件信息标志对应的Ability信息。使用Promise异步回调。 |
| <!--DelRow-->[getAbilityLabel](arkts-bundlemanager-getabilitylabel-f-sys.md#getAbilityLabel-1) | 获取指定bundleName、moduleName和abilityName的label。使用callback异步回调。 获取调用方自身的信息时不需要权限。 |
| <!--DelRow-->[getAbilityLabel](arkts-bundlemanager-getabilitylabel-f-sys.md#getAbilityLabel-2) | 获取指定bundleName、moduleName和abilityName的label。使用Promise异步回调。 获取调用方自身的信息时不需要权限。 |
| <!--DelRow-->[getAbilityLabelSync](arkts-bundlemanager-getabilitylabelsync-f-sys.md#getAbilityLabelSync-1) | 以同步的方法获取指定bundleName、moduleName和abilityName的label。 获取调用方自身的信息时不需要权限。 |
| <!--DelRow-->[getAdditionalInfo](arkts-bundlemanager-getadditionalinfo-f-sys.md#getAdditionalInfo-1) | 以同步接口查询指定bundleName的额外信息。该返回值是在调用install接口时传入的[InstallParam]{@link @ohos.bundle.installer:installer.InstallParam}中的 additionalInfo字段。 |
| <!--DelRow-->[getAllAppCloneBundleInfo](arkts-bundlemanager-getallappclonebundleinfo-f-sys.md#getAllAppCloneBundleInfo-1) | 根据bundleName、[bundleFlags]{@link @ohos.bundle.bundleManager:bundleManager.BundleFlag}以及用户ID查询主应用和分身应用的BundleInfo列表。 使用Promise异步回调。 获取调用方自身的信息时不需要权限。 |
| <!--DelRow-->[getAllAppProvisionInfo](arkts-bundlemanager-getallappprovisioninfo-f-sys.md#getAllAppProvisionInfo-1) | 根据userId获取指定用户下所有应用的[Provision]{@link bundleManager/AppProvisionInfo}配置文件信息。使用Promise异步回调。 |
| <!--DelRow-->[getAllApplicationInfo](arkts-bundlemanager-getallapplicationinfo-f-sys.md#getAllApplicationInfo-1) | 根据给定的appFlags获取系统中所有的ApplicationInfo。使用callback异步回调。 |
| <!--DelRow-->[getAllApplicationInfo](arkts-bundlemanager-getallapplicationinfo-f-sys.md#getAllApplicationInfo-2) | 根据给定的appFlags和userId获取系统中所有的ApplicationInfo。使用callback异步回调。 |
| <!--DelRow-->[getAllApplicationInfo](arkts-bundlemanager-getallapplicationinfo-f-sys.md#getAllApplicationInfo-3) | 根据给定的appFlags和userId获取系统中所有的ApplicationInfo。使用Promise异步回调。 |
| <!--DelRow-->[getAllBundleCacheSize](arkts-bundlemanager-getallbundlecachesize-f-sys.md#getAllBundleCacheSize-1) | 获取全局缓存大小，单位：字节。使用Promise异步回调。 有程序运行时的应用的缓存、或者在[应用配置指南](docroot://../device-dev/subsystems/subsys-app-privilege-config-guide.md)中已配置“ AllowAppDataNotCleared”特权的应用的缓存，无法被获取。 |
| <!--DelRow-->[getAllBundleInfo](arkts-bundlemanager-getallbundleinfo-f-sys.md#getAllBundleInfo-1) | 根据给定的bundleFlags获取系统中所有的BundleInfo。使用callback异步回调。 |
| <!--DelRow-->[getAllBundleInfo](arkts-bundlemanager-getallbundleinfo-f-sys.md#getAllBundleInfo-2) | 根据给定的bundleFlags和userId获取系统中所有的BundleInfo。使用callback异步回调。 |
| <!--DelRow-->[getAllBundleInfo](arkts-bundlemanager-getallbundleinfo-f-sys.md#getAllBundleInfo-3) | 根据给定的bundleFlags和userId获取系统中所有的BundleInfo。使用Promise异步回调。 |
| <!--DelRow-->[getAllBundleInfoByDeveloperId](arkts-bundlemanager-getallbundleinfobydeveloperid-f-sys.md#getAllBundleInfoByDeveloperId-1) | 根据给定的developerId获取当前用户下的包信息列表。 |
| <!--DelRow-->[getAllBundleInstallInfo](arkts-bundlemanager-getallbundleinstallinfo-f-sys.md#getAllBundleInstallInfo-1) | 获取系统内所有应用的扩展安装信息。使用Promise异步回调。 |
| <!--DelRow-->[getAllBundleInstallInfo](arkts-bundlemanager-getallbundleinstallinfo-f-sys.md#getAllBundleInstallInfo-2) | 获取系统内所有应用的扩展安装信息。使用Promise异步回调。 |
| <!--DelRow-->[getAllDynamicIconInfo](arkts-bundlemanager-getalldynamiciconinfo-f-sys.md#getAllDynamicIconInfo-1) | 查询指定用户下所有应用和所有分身的动态图标信息。使用Promise异步回调。 查询当前用户下所有应用和所有分身的动态图标信息时需要申请权限ohos.permission.GET_BUNDLE_INFO_PRIVILEGED。 查询其他用户或者所有用户下所有应用和所有分身的动态图标信息时需要申请权限ohos.permission.GET_BUNDLE_INFO_PRIVILEGED 和 ohos.permission.INTERACT_ACROSS_LOCAL_ACCOUNTS。 |
| <!--DelRow-->[getAllNewPreinstalledApplicationInfo](arkts-bundlemanager-getallnewpreinstalledapplicationinfo-f-sys.md#getAllNewPreinstalledApplicationInfo-1) | 获取设备OTA升级期间当前用户下新增的所有预置应用信息。使用Promise异步回调。 |
| <!--DelRow-->[getAllPluginInfo](arkts-bundlemanager-getallplugininfo-f-sys.md#getAllPluginInfo-1) | 根据给定的hostBundleName和userId获取所有的PluginBundleInfo。使用Promise异步回调。 |
| <!--DelRow-->[getAllPreinstalledApplicationInfo](arkts-bundlemanager-getallpreinstalledapplicationinfo-f-sys.md#getAllPreinstalledApplicationInfo-1) | 获取所有预置应用信息。使用Promise异步回调。 |
| <!--DelRow-->[getAllSharedBundleInfo](arkts-bundlemanager-getallsharedbundleinfo-f-sys.md#getAllSharedBundleInfo-1) | 获取所有的共享包信息。使用callback异步回调。 |
| <!--DelRow-->[getAllSharedBundleInfo](arkts-bundlemanager-getallsharedbundleinfo-f-sys.md#getAllSharedBundleInfo-2) | 获取所有的共享包信息。使用Promise异步回调。 |
| [getAlternateIcons](arkts-bundlemanager-getalternateicons-f.md#getAlternateIcons-1) | 查询当前应用在app.json5中[alternateIcons标签](docroot://quick-start/app-configuration-file.md#alternateicons标签)配置的备用图标信息。使用 Promise异步回调。 |
| <!--DelRow-->[getAppCloneBundleInfo](arkts-bundlemanager-getappclonebundleinfo-f-sys.md#getAppCloneBundleInfo-1) | 根据bundleName、分身索引、[bundleFlags]{@link @ohos.bundle.bundleManager:bundleManager.BundleFlag}以及用户ID查询主应用或分身应用的 BundleInfo。使用Promise异步回调。 获取调用方自身的信息时不需要权限。 |
| [getAppCloneIdentity](arkts-bundlemanager-getappcloneidentity-f.md#getAppCloneIdentity-1) | 根据uid查询分身应用的包名和分身索引。使用Promise异步回调。 |
| <!--DelRow-->[getAppCloneIdentityBySandboxDataDir](arkts-bundlemanager-getappcloneidentitybysandboxdatadir-f-sys.md#getAppCloneIdentityBySandboxDataDir-1) | 根据应用的沙箱目录名称获取应用的身份信息，包括应用包名和分身索引信息。 |
| <!--DelRow-->[getAppProvisionInfo](arkts-bundlemanager-getappprovisioninfo-f-sys.md#getAppProvisionInfo-1) | 获取指定bundleName的provision配置文件信息。使用callback异步回调。 获取调用方自身的信息时不需要权限。 |
| <!--DelRow-->[getAppProvisionInfo](arkts-bundlemanager-getappprovisioninfo-f-sys.md#getAppProvisionInfo-2) | 获取指定bundleName和userId的provision配置文件信息。使用callback异步回调。 获取调用方自身的信息时不需要权限。 |
| <!--DelRow-->[getAppProvisionInfo](arkts-bundlemanager-getappprovisioninfo-f-sys.md#getAppProvisionInfo-3) | 根据bundleName和userId获取应用的provision配置文件信息。使用Promise异步回调。 获取调用方自身的信息时不需要权限。 |
| <!--DelRow-->[getAppProvisionInfoSync](arkts-bundlemanager-getappprovisioninfosync-f-sys.md#getAppProvisionInfoSync-1) | 以同步方法根据bundleName和userId获取应用的provision配置文件信息并返回结果。 获取调用方自身的信息时不需要权限。 |
| <!--DelRow-->[getApplicationInfo](arkts-bundlemanager-getapplicationinfo-f-sys.md#getApplicationInfo-1) | 根据给定的bundleName和appFlags获取ApplicationInfo。使用callback异步回调。 获取调用方自身的信息时不需要权限。 |
| <!--DelRow-->[getApplicationInfo](arkts-bundlemanager-getapplicationinfo-f-sys.md#getApplicationInfo-2) | 根据给定的bundleName、appFlags和userId获取ApplicationInfo。使用callback异步回调。 获取调用方自身的信息时不需要权限。 |
| <!--DelRow-->[getApplicationInfo](arkts-bundlemanager-getapplicationinfo-f-sys.md#getApplicationInfo-3) | 根据给定的bundleName、appFlags和userId获取ApplicationInfo。使用Promise异步回调。 获取调用方自身的信息时不需要权限。 |
| <!--DelRow-->[getApplicationInfoSync](arkts-bundlemanager-getapplicationinfosync-f-sys.md#getApplicationInfoSync-1) | 以同步方法根据给定的bundleName、applicationFlags和userId获取ApplicationInfo。 获取调用方自身的信息时不需要权限。 |
| <!--DelRow-->[getApplicationInfoSync](arkts-bundlemanager-getapplicationinfosync-f-sys.md#getApplicationInfoSync-2) | 以同步方法根据给定的bundleName、applicationFlags获取ApplicationInfo。 获取调用方自身的信息时不需要权限。 |
| [getApplicationLabel](arkts-bundlemanager-getapplicationlabel-f.md#getApplicationLabel-1) | 获取指定包名和分身索引的应用名称。使用Promise异步回调。 |
| <!--DelRow-->[getBundleArchiveInfo](arkts-bundlemanager-getbundlearchiveinfo-f-sys.md#getBundleArchiveInfo-1) | 根据给定的hapFilePath和bundleFlags获取BundleInfo。使用callback异步回调。 |
| <!--DelRow-->[getBundleArchiveInfo](arkts-bundlemanager-getbundlearchiveinfo-f-sys.md#getBundleArchiveInfo-2) | 根据给定的hapFilePath和bundleFlags获取BundleInfo。使用Promise异步回调。 |
| <!--DelRow-->[getBundleArchiveInfoSync](arkts-bundlemanager-getbundlearchiveinfosync-f-sys.md#getBundleArchiveInfoSync-1) | 以同步方法根据给定的hapFilePath和bundleFlags获取BundleInfo对象。 |
| [getBundleInfo](arkts-bundlemanager-getbundleinfo-f.md#getBundleInfo-1) | 根据给定的bundleName和bundleFlags获取BundleInfo。使用callback异步回调。 获取调用方自身的信息时不需要权限。 |
| [getBundleInfo](arkts-bundlemanager-getbundleinfo-f.md#getBundleInfo-2) | 根据给定的bundleName、bundleFlags和userId获取[BundleInfo]{@link bundleManager/BundleInfo}。使用callback异步回调。 获取调用方自身信息时不需要权限。 |
| [getBundleInfo](arkts-bundlemanager-getbundleinfo-f.md#getBundleInfo-3) | 根据给定的bundleName、bundleFlags和userId获取BundleInfo。使用Promise异步回调。 获取调用方自身的信息时不需要权限。 |
| [getBundleInfoForSelf](arkts-bundlemanager-getbundleinfoforself-f.md#getBundleInfoForSelf-1) | 根据给定的bundleFlags获取当前应用的BundleInfo。使用Promise异步回调。 |
| [getBundleInfoForSelf](arkts-bundlemanager-getbundleinfoforself-f.md#getBundleInfoForSelf-2) | 根据给定的bundleFlags获取当前应用的BundleInfo。使用callback异步回调。 |
| [getBundleInfoForSelfSync](arkts-bundlemanager-getbundleinfoforselfsync-f.md#getBundleInfoForSelfSync-1) | 以同步方法根据给定的bundleFlags获取当前应用的BundleInfo。 |
| [getBundleInfoSync](arkts-bundlemanager-getbundleinfosync-f.md#getBundleInfoSync-1) | 以同步方法根据给定的bundleName、bundleFlags和userId获取BundleInfo。 获取调用方自身的信息时不需要权限。 |
| [getBundleInfoSync](arkts-bundlemanager-getbundleinfosync-f.md#getBundleInfoSync-2) | 以同步方法根据给定的bundleName、bundleFlags获取调用方所在用户下的BundleInfo。 获取调用方自身的信息时不需要权限。 |
| <!--DelRow-->[getBundleInstallStatus](arkts-bundlemanager-getbundleinstallstatus-f-sys.md#getBundleInstallStatus-1) | 查询当前用户下指定应用的安装状态。 |
| [getBundleNameByUid](arkts-bundlemanager-getbundlenamebyuid-f.md#getBundleNameByUid-1) | 根据给定的uid获取对应应用的bundleName。使用callback异步回调。 |
| [getBundleNameByUid](arkts-bundlemanager-getbundlenamebyuid-f.md#getBundleNameByUid-2) | 根据给定的uid获取对应应用的bundleName。使用Promise异步回调。 |
| [getBundleNameByUidSync](arkts-bundlemanager-getbundlenamebyuidsync-f.md#getBundleNameByUidSync-1) | 以同步方法根据给定的uid获取对应应用的bundleName。 |
| <!--DelRow-->[getDeveloperIds](arkts-bundlemanager-getdeveloperids-f-sys.md#getDeveloperIds-1) | 根据给定的应用[appDistributionType]{@link bundleManager.AppDistributionType}获取当前用户下的所有开发者ID列表。 |
| <!--DelRow-->[getDynamicIcon](arkts-bundlemanager-getdynamicicon-f-sys.md#getDynamicIcon-1) | 根据给定的bundleName获得动态图标对应的moduleName。使用Promise异步回调。 |
| <!--DelRow-->[getDynamicIconInfo](arkts-bundlemanager-getdynamiciconinfo-f-sys.md#getDynamicIconInfo-1) | 根据指定的bundleName获取所有用户和所有分身下的动态图标信息。使用Promise异步回调。 |
| <!--DelRow-->[getExtResource](arkts-bundlemanager-getextresource-f-sys.md#getExtResource-1) | 根据给定的bundleName获得扩展资源对应的moduleNames。使用Promise异步回调。 |
| [getInstalledBundleList](arkts-bundlemanager-getinstalledbundlelist-f.md#getInstalledBundleList-1) | 根据给定的bundleFlags获取系统中所有的BundleInfo。使用Promise异步回调。 |
| <!--DelRow-->[getJsonProfile](arkts-bundlemanager-getjsonprofile-f-sys.md#getJsonProfile-1) | 以同步的方法根据给定的profileType、bundleName和moduleName查询相应配置文件的JSON字符串。 获取调用方自己的配置文件时不需要权限。 |
| [getLaunchWant](arkts-bundlemanager-getlaunchwant-f.md#getLaunchWant-1) | 获取本应用[入口UIAbility](docroot://quick-start/application-package-glossary.md#uiability)的Want参数。 |
| <!--DelRow-->[getLaunchWantForBundle](arkts-bundlemanager-getlaunchwantforbundle-f-sys.md#getLaunchWantForBundle-1) | 根据给定的bundleName和userId获取用于启动应用程序的Want参数。使用callback异步回调。 |
| <!--DelRow-->[getLaunchWantForBundle](arkts-bundlemanager-getlaunchwantforbundle-f-sys.md#getLaunchWantForBundle-2) | 根据给定的bundleName获取用于启动应用程序的Want参数。使用callback异步回调。 |
| <!--DelRow-->[getLaunchWantForBundle](arkts-bundlemanager-getlaunchwantforbundle-f-sys.md#getLaunchWantForBundle-3) | 根据给定的bundleName和userId获取用于启动应用程序的Want参数。使用Promise异步回调。 |
| <!--DelRow-->[getLaunchWantForBundleSync](arkts-bundlemanager-getlaunchwantforbundlesync-f-sys.md#getLaunchWantForBundleSync-1) | 根据给定的包名和用户ID，获取用于启动应用程序的Want参数。 |
| <!--DelRow-->[getPermissionDef](arkts-bundlemanager-getpermissiondef-f-sys.md#getPermissionDef-1) | 根据给定的permissionName获取权限定义结构体PermissionDef信息。使用callback异步回调。 |
| <!--DelRow-->[getPermissionDef](arkts-bundlemanager-getpermissiondef-f-sys.md#getPermissionDef-2) | 根据给定的permissionName获取权限定义结构体PermissionDef信息。使用Promise异步回调。 |
| <!--DelRow-->[getPermissionDefSync](arkts-bundlemanager-getpermissiondefsync-f-sys.md#getPermissionDefSync-1) | 以同步方法根据给定的permissionName获取权限定义结构体PermissionDef信息。 |
| [getPluginBundlePathForSelf](arkts-bundlemanager-getpluginbundlepathforself-f.md#getPluginBundlePathForSelf-1) | 获取指定插件在当前[应用沙箱](docroot://file-management/app-sandbox-directory.md)内的安装路径。 |
| [getProfileByAbility](arkts-bundlemanager-getprofilebyability-f.md#getProfileByAbility-1) | 根据给定的moduleName、abilityName和metadataName（module.json5中 [abilities标签](docroot://quick-start/module-configuration-file.md#abilities标签)下的metadata标签的name）获取自身相应配置文件的json格式字符串 。使用callback异步回调。 > 说明： > > 如果配置文件信息采用了资源引用格式，则返回值将保持资源引用格式（例如 $string:res_id），开发者可以通过[资源管理]{@link @ohos.resourceManager:resourceManager}的相 > 关接口，来获取引用的资源。 |
| [getProfileByAbility](arkts-bundlemanager-getprofilebyability-f.md#getProfileByAbility-2) | 根据给定的moduleName、abilityName和metadataName（module.json5中 [abilities标签](docroot://quick-start/module-configuration-file.md#abilities标签)下的metadata标签的name）获取自身相应配置文件的json格式字符串 。使用Promise异步回调。 > 说明： > > 如果配置文件信息采用了资源引用格式，则返回值将保持资源引用格式（例如 $string:res_id），开发者可以通过[资源管理]{@link @ohos.resourceManager:resourceManager}的相 > 关接口，来获取引用的资源。 |
| [getProfileByAbilitySync](arkts-bundlemanager-getprofilebyabilitysync-f.md#getProfileByAbilitySync-1) | 以同步方法根据给定的moduleName、abilityName和metadataName（module.json5中 [metadata标签](docroot://quick-start/module-configuration-file.md#metadata标签)下的name）获取自身相应配置文件的json格式字符串，返回对象为string数 组。 |
| [getProfileByExtensionAbility](arkts-bundlemanager-getprofilebyextensionability-f.md#getProfileByExtensionAbility-1) | 根据给定的moduleName、extensionAbilityName和metadataName（module.json5中 [metadata标签](docroot://quick-start/module-configuration-file.md#metadata标签)下的name）获取自身相应配置文件的json格式字符串。使用callback异步 回调。 |
| [getProfileByExtensionAbility](arkts-bundlemanager-getprofilebyextensionability-f.md#getProfileByExtensionAbility-2) | 根据给定的moduleName、extensionAbilityName和metadataName（module.json5中 [metadata标签](docroot://quick-start/module-configuration-file.md#metadata标签)下的name）获取自身相应配置文件的json格式字符串。使用Promise异步回 调。 |
| [getProfileByExtensionAbilitySync](arkts-bundlemanager-getprofilebyextensionabilitysync-f.md#getProfileByExtensionAbilitySync-1) | 以同步方法根据给定的moduleName、extensionAbilityName和metadataName（module.json5中 [metadata标签](docroot://quick-start/module-configuration-file.md#metadata标签)下的name）获取自身相应配置文件的json格式字符串，返回对象为string数 组。 |
| <!--DelRow-->[getRecoverableApplicationInfo](arkts-bundlemanager-getrecoverableapplicationinfo-f-sys.md#getRecoverableApplicationInfo-1) | 获取所有可恢复的预置应用信息。使用callback异步回调。 |
| <!--DelRow-->[getRecoverableApplicationInfo](arkts-bundlemanager-getrecoverableapplicationinfo-f-sys.md#getRecoverableApplicationInfo-2) | 获取所有可恢复的预置应用信息。使用Promise异步回调。 |
| <!--DelRow-->[getSandboxDataDir](arkts-bundlemanager-getsandboxdatadir-f-sys.md#getSandboxDataDir-1) | 根据应用包名和分身索引获取对应的沙箱目录。 |
| <!--DelRow-->[getSharedBundleInfo](arkts-bundlemanager-getsharedbundleinfo-f-sys.md#getSharedBundleInfo-1) | 获取指定的共享包信息。使用callback异步回调。 获取调用方自身的信息时不需要权限。 |
| <!--DelRow-->[getSharedBundleInfo](arkts-bundlemanager-getsharedbundleinfo-f-sys.md#getSharedBundleInfo-2) | 获取指定的共享包信息。使用Promise异步回调。 获取调用方自身的信息时不需要权限。 |
| [getSignatureInfo](arkts-bundlemanager-getsignatureinfo-f.md#getSignatureInfo-1) | 根据给定的uid获取对应应用的[签名信息]{@link bundleManager/BundleInfo:SignatureInfo}。 |
| <!--DelRow-->[getSpecifiedDistributionType](arkts-bundlemanager-getspecifieddistributiontype-f-sys.md#getSpecifiedDistributionType-1) | 以同步的方法查询指定bundleName的[HarmonyAppProvision配置文件说明](docroot://security/app-provision-structure.md)，该返回值是在调用install接口时传 入的[InstallParam]{@link @ohos.bundle.installer:installer.InstallParam}中的specifiedDistributionType字段。 获取调用方自身的信息时不需要权限。 |
| <!--DelRow-->[isAbilityEnabled](arkts-bundlemanager-isabilityenabled-f-sys.md#isAbilityEnabled-1) | 获取应用或指定分身应用组件的禁用或使能状态。使用Promise异步回调。 |
| <!--DelRow-->[isAbilityEnabled](arkts-bundlemanager-isabilityenabled-f-sys.md#isAbilityEnabled-2) | 获取指定组件的禁用或使能状态。使用callback异步回调。 |
| <!--DelRow-->[isAbilityEnabled](arkts-bundlemanager-isabilityenabled-f-sys.md#isAbilityEnabled-3) | 获取指定组件的禁用或使能状态。使用Promise异步回调。 |
| <!--DelRow-->[isAbilityEnabledSync](arkts-bundlemanager-isabilityenabledsync-f-sys.md#isAbilityEnabledSync-1) | 以同步方法获取指定组件的禁用或使能状态。 |
| <!--DelRow-->[isApplicationDisableForbidden](arkts-bundlemanager-isapplicationdisableforbidden-f-sys.md#isApplicationDisableForbidden-1) | 以同步方法查询指定用户下指定应用或分身应用是否被设置禁止停用。 |
| <!--DelRow-->[isApplicationEnabled](arkts-bundlemanager-isapplicationenabled-f-sys.md#isApplicationEnabled-1) | 获取指定应用或分身应用的禁用或使能状态。使用Promise异步回调。 |
| <!--DelRow-->[isApplicationEnabled](arkts-bundlemanager-isapplicationenabled-f-sys.md#isApplicationEnabled-2) | 获取指定应用的禁用或使能状态。使用callback异步回调。 |
| <!--DelRow-->[isApplicationEnabled](arkts-bundlemanager-isapplicationenabled-f-sys.md#isApplicationEnabled-3) | 获取指定应用的禁用或使能状态。使用Promise异步回调。 |
| <!--DelRow-->[isApplicationEnabledSync](arkts-bundlemanager-isapplicationenabledsync-f-sys.md#isApplicationEnabledSync-1) | 以同步方法获取指定应用的禁用或使能状态。 |
| <!--DelRow-->[migrateData](arkts-bundlemanager-migratedata-f-sys.md#migrateData-1) | 拷贝文件，将文件从源路径拷贝到目标路径。使用Promise异步回调。 |
| <!--DelRow-->[queryAbilityInfo](arkts-bundlemanager-queryabilityinfo-f-sys.md#queryAbilityInfo-1) | 根据给定的want和abilityFlags获取一个或多个AbilityInfo。使用callback异步回调。 获取调用方自身的信息时不需要权限。 |
| <!--DelRow-->[queryAbilityInfo](arkts-bundlemanager-queryabilityinfo-f-sys.md#queryAbilityInfo-2) | 根据给定的want、abilityFlags和userId获取多个AbilityInfo。使用callback异步回调。 获取调用方自身的信息时不需要权限。 |
| <!--DelRow-->[queryAbilityInfo](arkts-bundlemanager-queryabilityinfo-f-sys.md#queryAbilityInfo-3) | 根据给定的want、abilityFlags和userId获取一个或多个AbilityInfo。使用Promise异步回调。 获取调用方自身的信息时不需要权限。 |
| <!--DelRow-->[queryAbilityInfo](arkts-bundlemanager-queryabilityinfo-f-sys.md#queryAbilityInfo-4) | 根据给定的want列表、abilityFlags和userId获取一个或多个AbilityInfo。使用Promise异步回调。 获取调用方自身的信息时不需要权限。 |
| <!--DelRow-->[queryAbilityInfoSync](arkts-bundlemanager-queryabilityinfosync-f-sys.md#queryAbilityInfoSync-1) | 以同步方法根据给定的want、abilityFlags和userId获取一个或多个AbilityInfo。 获取调用方自身的信息时不需要权限。 |
| <!--DelRow-->[queryExtensionAbilityInfo](arkts-bundlemanager-queryextensionabilityinfo-f-sys.md#queryExtensionAbilityInfo-1) | 根据给定的want、extensionAbilityType和extensionAbilityFlags获取一个或多个ExtensionAbilityInfo。使用callback异步回调。 获取调用方自身的信息时不需要权限。 |
| <!--DelRow-->[queryExtensionAbilityInfo](arkts-bundlemanager-queryextensionabilityinfo-f-sys.md#queryExtensionAbilityInfo-2) | 根据给定的want、extensionAbilityType、extensionAbilityFlags和userId获取一个或多个ExtensionAbilityInfo。使用callback异步回调。 获取调用方自身的信息时不需要权限。 |
| <!--DelRow-->[queryExtensionAbilityInfo](arkts-bundlemanager-queryextensionabilityinfo-f-sys.md#queryExtensionAbilityInfo-3) | 根据给定的want、extensionAbilityType、extensionAbilityFlags和userId获取ExtensionAbilityInfo。使用Promise异步回调。 获取调用方自身的信息时不需要权限。 |
| <!--DelRow-->[queryExtensionAbilityInfoSync](arkts-bundlemanager-queryextensionabilityinfosync-f-sys.md#queryExtensionAbilityInfoSync-1) | 以同步方法根据给定的want、extensionAbilityType、extensionAbilityFlags和userId获取ExtensionAbilityInfo。 获取调用方自身的信息时不需要权限。 |
| <!--DelRow-->[queryExtensionAbilityInfoSync](arkts-bundlemanager-queryextensionabilityinfosync-f-sys.md#queryExtensionAbilityInfoSync-2) | 根据给定的want、extensionAbilityType、extensionAbilityFlags和userId获取ExtensionAbilityInfo，使用同步方式返回结果。 获取调用方自身的信息时不需要权限。 |
| <!--DelRow-->[queryExtensionAbilityInfoSync](arkts-bundlemanager-queryextensionabilityinfosync-f-sys.md#queryExtensionAbilityInfoSync-3) | 根据给定的extensionAbilityType、extensionAbilityFlags和userId获取ExtensionAbilityInfo。 获取调用方自身的信息时不需要权限。 |
| <!--DelRow-->[recoverBackupBundleData](arkts-bundlemanager-recoverbackupbundledata-f-sys.md#recoverBackupBundleData-1) | 恢复指定用户下指定应用或分身应用的备份数据。使用Promise异步回调。 |
| <!--DelRow-->[removeBackupBundleData](arkts-bundlemanager-removebackupbundledata-f-sys.md#removeBackupBundleData-1) | 删除指定用户下指定应用或分身应用的备份数据。使用Promise异步回调。 |
| <!--DelRow-->[setAbilityEnabled](arkts-bundlemanager-setabilityenabled-f-sys.md#setAbilityEnabled-1) | 设置指定应用或分身应用组件的禁用或使能状态。使用Promise异步回调。 |
| <!--DelRow-->[setAbilityEnabled](arkts-bundlemanager-setabilityenabled-f-sys.md#setAbilityEnabled-2) | 设置指定组件的禁用或使能状态。使用callback异步回调。 |
| <!--DelRow-->[setAbilityEnabled](arkts-bundlemanager-setabilityenabled-f-sys.md#setAbilityEnabled-3) | 设置指定组件的禁用或使能状态。使用Promise异步回调。 |
| <!--DelRow-->[setAbilityEnabledSync](arkts-bundlemanager-setabilityenabledsync-f-sys.md#setAbilityEnabledSync-1) | 以同步方法设置指定组件的禁用或使能状态。 |
| <!--DelRow-->[setAbilityFileTypesForSelf](arkts-bundlemanager-setabilityfiletypesforself-f-sys.md#setAbilityFileTypesForSelf-1) | 设置当前应用支持打开的文件类型。 |
| <!--DelRow-->[setAdditionalInfo](arkts-bundlemanager-setadditionalinfo-f-sys.md#setAdditionalInfo-1) | 设置指定应用的额外信息。此接口仅供应用市场调用。 |
| [setAlternateIcon](arkts-bundlemanager-setalternateicon-f.md#setAlternateIcon-1) | 根据给定的备用图标名称设置调用方自身的备用图标。使用Promise异步回调。 |
| <!--DelRow-->[setApplicationEnabled](arkts-bundlemanager-setapplicationenabled-f-sys.md#setApplicationEnabled-1) | 设置指定应用或分身应用的禁用或使能状态。使用Promise异步回调。 |
| <!--DelRow-->[setApplicationEnabled](arkts-bundlemanager-setapplicationenabled-f-sys.md#setApplicationEnabled-2) | 设置应用程序是启用还是禁用，并控制在禁用时是否杀死进程。 |
| <!--DelRow-->[setApplicationEnabled](arkts-bundlemanager-setapplicationenabled-f-sys.md#setApplicationEnabled-3) | 设置指定应用的禁用或使能状态。使用callback异步回调。 |
| <!--DelRow-->[setApplicationEnabled](arkts-bundlemanager-setapplicationenabled-f-sys.md#setApplicationEnabled-4) | 设置指定应用的禁用或使能状态。使用Promise异步回调。 |
| <!--DelRow-->[setApplicationEnabledSync](arkts-bundlemanager-setapplicationenabledsync-f-sys.md#setApplicationEnabledSync-1) | 以同步方法设置指定应用的禁用或使能状态。 |
| <!--DelRow-->[setApplicationEnabledSync](arkts-bundlemanager-setapplicationenabledsync-f-sys.md#setApplicationEnabledSync-2) | 设置应用程序是启用还是禁用，并控制在禁用时是否杀死进程。 |
| <!--DelRow-->[switchUninstallState](arkts-bundlemanager-switchuninstallstate-f-sys.md#switchUninstallState-1) | 切换指定应用的可卸载状态，此接口与EDM应用拦截管控机制不互相影响。 |
| <!--DelRow-->[verifyAbc](arkts-bundlemanager-verifyabc-f-sys.md#verifyAbc-1) | 根据给定的abcPaths和deleteOriginalFiles校验.abc文件。使用callback异步回调。 |
| <!--DelRow-->[verifyAbc](arkts-bundlemanager-verifyabc-f-sys.md#verifyAbc-2) | 根据给定的abcPaths和deleteOriginalFiles校验.abc文件。使用Promise异步回调。 |

### Types

| Name | Description |
| --- | --- |
| [AbilityInfo](arkts-bundlemanager-abilityinfo-t.md) | Ability信息。 |
| [AbilityInfo](arkts-bundlemanager-abilityinfo-t.md) | Ability信息。 |
| [AlternateIconInfo](arkts-bundlemanager-alternateiconinfo-t.md) | 应用备用图标信息。 |
| [AlternateIconInfo](arkts-bundlemanager-alternateiconinfo-t.md) | 应用备用图标信息。 |
| [AppCloneIdentity](arkts-bundlemanager-appcloneidentity-t.md) | 描述应用包的身份信息。 |
| [AppCloneIdentity](arkts-bundlemanager-appcloneidentity-t.md) | 描述应用包的身份信息。 |
| [ApplicationInfo](arkts-bundlemanager-applicationinfo-t.md) | 应用程序信息。 |
| <!--DelRow-->[AppProvisionInfo](arkts-bundlemanager-appprovisioninfo-t-sys.md) | 应用[HarmonyAppProvision配置文件](docroot://security/app-provision-structure.md)中的信息。 |
| <!--DelRow-->[AppProvisionInfo](arkts-bundlemanager-appprovisioninfo-t-sys.md) | 应用[HarmonyAppProvision配置文件](docroot://security/app-provision-structure.md)中的信息。 |
| [BundleInfo](arkts-bundlemanager-bundleinfo-t.md) | 应用包信息。 |
| [BundleInfo](arkts-bundlemanager-bundleinfo-t.md) | 应用包信息。 |
| <!--DelRow-->[BundleOptions](arkts-bundlemanager-bundleoptions-t-sys.md) | 应用包选项，用于设置或查询应用相关信息。 |
| <!--DelRow-->[BundleOptions](arkts-bundlemanager-bundleoptions-t-sys.md) | 应用包选项，用于设置或查询应用相关信息。 |
| [DataItem](arkts-bundlemanager-dataitem-t.md) | 模块配置的路由表中的自定义数据。 |
| [DataItem](arkts-bundlemanager-dataitem-t.md) | 模块配置的路由表中的自定义数据。 |
| [Dependency](arkts-bundlemanager-dependency-t.md) | 模块所依赖的动态共享库信息。 |
| [Dependency](arkts-bundlemanager-dependency-t.md) | 模块所依赖的动态共享库信息。 |
| <!--DelRow-->[DynamicIconInfo](arkts-bundlemanager-dynamiciconinfo-t-sys.md) | 应用的动态图标信息。 |
| <!--DelRow-->[DynamicIconInfo](arkts-bundlemanager-dynamiciconinfo-t-sys.md) | 应用的动态图标信息。 |
| [ElementName](arkts-bundlemanager-elementname-t.md) | ElementName信息。 |
| [ExtensionAbilityInfo](arkts-bundlemanager-extensionabilityinfo-t.md) | ExtensionAbility信息。 |
| [ExtensionAbilityInfo](arkts-bundlemanager-extensionabilityinfo-t.md) | ExtensionAbility信息。 |
| [HapModuleInfo](arkts-bundlemanager-hapmoduleinfo-t.md) | 模块信息。 |
| [HapModuleInfo](arkts-bundlemanager-hapmoduleinfo-t.md) | 模块信息。 |
| [Metadata](arkts-bundlemanager-metadata-t.md) | 元数据信息。 |
| [ModuleMetadata](arkts-bundlemanager-modulemetadata-t.md) | 模块的元数据信息。 |
| <!--DelRow-->[PermissionDef](arkts-bundlemanager-permissiondef-t-sys.md) | [module.json5配置文件](docroot://quick-start/module-configuration-file.md)中定义的权限详细信息。 |
| <!--DelRow-->[PluginBundleInfo](arkts-bundlemanager-pluginbundleinfo-t-sys.md) | 插件信息。 |
| <!--DelRow-->[PluginModuleInfo](arkts-bundlemanager-pluginmoduleinfo-t-sys.md) | 插件的模块信息。 |
| <!--DelRow-->[PreinstalledApplicationInfo](arkts-bundlemanager-preinstalledapplicationinfo-t-sys.md) | 预置应用信息。 |
| [PreloadItem](arkts-bundlemanager-preloaditem-t.md) | 原子化服务中模块的预加载模块信息。 |
| [PreloadItem](arkts-bundlemanager-preloaditem-t.md) | 原子化服务中模块的预加载模块信息。 |
| <!--DelRow-->[RecoverableApplicationInfo](arkts-bundlemanager-recoverableapplicationinfo-t-sys.md) | 预置应用被卸载后可以恢复的预置应用信息。 |
| [ReqPermissionDetail](arkts-bundlemanager-reqpermissiondetail-t.md) | 应用运行时需向系统申请的权限集合的详细信息。 |
| [ReqPermissionDetail](arkts-bundlemanager-reqpermissiondetail-t.md) | 应用运行时需向系统申请的权限集合的详细信息。 |
| [RouterItem](arkts-bundlemanager-routeritem-t.md) | 模块配置的路由表信息。 |
| [RouterItem](arkts-bundlemanager-routeritem-t.md) | 模块配置的路由表信息。 |
| <!--DelRow-->[SharedBundleInfo](arkts-bundlemanager-sharedbundleinfo-t-sys.md) | 共享包信息。 |
| [SignatureInfo](arkts-bundlemanager-signatureinfo-t.md) | 应用包的签名信息。 |
| [SignatureInfo](arkts-bundlemanager-signatureinfo-t.md) | 应用包的签名信息。 |
| [Skill](arkts-bundlemanager-skill-t.md) | skill信息。 |
| [Skill](arkts-bundlemanager-skill-t.md) | skill信息。 |
| [SkillUrl](arkts-bundlemanager-skillurl-t.md) | SkillUri信息。 |
| [SkillUrl](arkts-bundlemanager-skillurl-t.md) | SkillUri信息。 |
| [UsedScene](arkts-bundlemanager-usedscene-t.md) | 权限使用的场景和时机。 |
| [UsedScene](arkts-bundlemanager-usedscene-t.md) | 权限使用的场景和时机。 |
| <!--DelRow-->[Validity](arkts-bundlemanager-validity-t-sys.md) | 配置文件中的有效期。 |
| <!--DelRow-->[Validity](arkts-bundlemanager-validity-t-sys.md) | 配置文件中的有效期。 |
| [WindowSize](arkts-bundlemanager-windowsize-t.md) | 窗口尺寸。 |
| [WindowSize](arkts-bundlemanager-windowsize-t.md) | 窗口尺寸。 |

### Enums

| Name | Description |
| --- | --- |
| <!--DelRow-->[AbilityFlag](arkts-bundlemanager-abilityflag-e-sys.md) | Ability组件信息标志，指示需要获取的Ability组件信息的内容。 |
| [AbilityType](arkts-bundlemanager-abilitytype-e.md) | 标识Ability组件的类型。 |
| <!--DelRow-->[AppDistributionType](arkts-bundlemanager-appdistributiontype-e-sys.md) | 标识应用[HarmonyAppProvision配置文件说明](docroot://security/app-provision-structure.md)。 |
| <!--DelRow-->[ApplicationFlag](arkts-bundlemanager-applicationflag-e-sys.md) | 应用信息标志，指示需要获取的应用信息的内容。 |
| <!--DelRow-->[ApplicationInfoFlag](arkts-bundlemanager-applicationinfoflag-e-sys.md) | 标识应用和用户之间的各种状态类型。 |
| [BundleFlag](arkts-bundlemanager-bundleflag-e.md) | 包信息标志，指示需要获取的包信息的内容。 |
| <!--DelRow-->[BundleInstallStatus](arkts-bundlemanager-bundleinstallstatus-e-sys.md) | 标识应用的安装状态。 |
| [BundleType](arkts-bundlemanager-bundletype-e.md) | 标识应用的类型。 |
| [CompatiblePolicy](arkts-bundlemanager-compatiblepolicy-e.md) | 标识动态共享库的版本兼容类型。 |
| [DisplayOrientation](arkts-bundlemanager-displayorientation-e.md) | 标识该Ability的显示模式。仅适用于FA模型的[PageAbility](docroot://application-models/pageability-overview.md)。 <!--Table: 40%; 10%; 50%--> |
| <!--DelRow-->[ExtensionAbilityFlag](arkts-bundlemanager-extensionabilityflag-e-sys.md) | 扩展组件信息标志，指示需要获取的扩展组件信息的内容。 |
| [ExtensionAbilityType](arkts-bundlemanager-extensionabilitytype-e.md) | 扩展组件的类型。 <!--Table: 30%; 10%; 60%--> <!--RP2--><!--RP2End--> |
| [LaunchType](arkts-bundlemanager-launchtype-e.md) | 标识组件的[启动模式](docroot://application-models/uiability-launch-type.md)。 |
| [ModuleType](arkts-bundlemanager-moduletype-e.md) | 标识模块类型。 |
| [MultiAppModeType](arkts-bundlemanager-multiappmodetype-e.md) | 标识应用多开的模式类型。 |
| [PermissionGrantState](arkts-bundlemanager-permissiongrantstate-e.md) | 权限授予状态。 |
| <!--DelRow-->[ProfileType](arkts-bundlemanager-profiletype-e-sys.md) | 标识配置文件类型。 |
| [SupportWindowMode](arkts-bundlemanager-supportwindowmode-e.md) | 标识该组件所支持的窗口模式。 |

