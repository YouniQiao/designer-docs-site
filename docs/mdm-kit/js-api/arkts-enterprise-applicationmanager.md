# @ohos.enterprise.applicationManager

The **applicationManager** module provides application management capabilities, including adding, removing, and obtaining the applications that are forbidden to run.

> **NOTE**  
>  
> The APIs of this module can be used only in the stage model.  
>  
> The APIs of this module can be called only by a device administrator application that is enabled. For details, see  
> [MDM Kit Development](docroot://mdm/mdm-kit-guide.md). The  
> [applicationManager.isAppKioskAllowed](arkts-mdm-applicationmanager-isappkioskallowed-f.md#isappkioskallowed-1) API is available to all  
> applications.

**Since:** 10

<!--Device-unnamed-declare namespace applicationManager--><!--Device-unnamed-declare namespace applicationManager-End-->

**System capability:** SystemCapability.Customization.EnterpriseDeviceManager

## Modules to Import

```TypeScript
import { applicationManager } from '@kit.MDMKit';
```

## Summary

### Functions

| Name | Description |
| --- | --- |
| [addAllowedDistributeAbilityConnBundles](arkts-mdm-applicationmanager-addalloweddistributeabilityconnbundles-f.md#addalloweddistributeabilityconnbundles) | Adds the applications that are allowed to distribute ability connection. |
| [addAllowedNotificationBundles](arkts-mdm-applicationmanager-addallowednotificationbundles-f.md#addallowednotificationbundles) | Adds applications that are allowed to send notifications. |
| [addAllowedRunningBundles](arkts-mdm-applicationmanager-addallowedrunningbundles-f.md#addallowedrunningbundles) | Adds the applications that are allowed to run under specified users. |
| [addAutoStartApps](arkts-mdm-applicationmanager-addautostartapps-f.md#addautostartapps) | Adds the auto-start applications for the current user. Applications added to the auto-start list via this API cannot be manually disabled for auto-start by users on the device<!--RP4--><!--RP4End-->. However, they can be removed from the auto-start list using the [removeAutoStartApps](arkts-mdm-applicationmanager-removeautostartapps-f.md#removeautostartapps-1) API. |
| [addAutoStartApps](arkts-mdm-applicationmanager-addautostartapps-f.md#addautostartapps-1) | Adds a list of applications that automatically start upon device startup for a specified user, and sets whether to prohibit the user from manually canceling application auto-start<!--RP4--><!--RP4End-->.  Applications can be added to the auto-start list via this API and the [addAutoStartApps](arkts-mdm-applicationmanager-addautostartapps-f.md#addautostartapps-1) API.Settings from both APIs can take effect simultaneously. For a single user, the auto-start list supports a maximum of 10 applications. For example, if there are already 3 applications in the current list, a maximum of 7 more can be added for the user via this API. |
| [addDisallowedRunningBundlesSync](arkts-mdm-applicationmanager-adddisallowedrunningbundlessync-f.md#adddisallowedrunningbundlessync) | Adds the applications that are not allowed to run by the current or specified user. From API version 21, if the allowed application list [addallowedRunningBundles](arkts-mdm-applicationmanager-addallowedrunningbundles-f.md#addallowedrunningbundles-1) is not empty, the prohibited application list cannot be added using this API. Otherwise, the error code 9200010 is reported. |
| [addDockApp](arkts-mdm-applicationmanager-adddockapp-f.md#adddockapp) | Adds an application to the bottom shortcut bar of a PC/2-in-1 device based on the location index. Then users can tap the application icon in the shortcut bar to directly launch the application. The application icon is the default icon displayed on the home screen. |
| [addFreezeExemptedApps](arkts-mdm-applicationmanager-addfreezeexemptedapps-f.md#addfreezeexemptedapps) | Adds applications to the background freeze-exempt application list for a specified user. This policy applies only to installed applications and becomes invalid after the device is restarted. If the parameter list contains uninstalled applications, error code 9200012 will be returned. If an application in the list is uninstalled after the policy is set, the uninstalled application will be removed from the list. Adding an application that already exists in the list will return success, but the application will not be added repeatedly to the policy list.  Freezing operations include suspending the target application, and managing software resource agents, hardware resource agents, and high-power consumption. |
| [addHideLauncherIcon](arkts-mdm-applicationmanager-addhidelaunchericon-f.md#addhidelaunchericon) | Adds applications that hide launcher icons. |
| [addKeepAliveApps](arkts-mdm-applicationmanager-addkeepaliveapps-f.md#addkeepaliveapps) | Adds applications to the keep-alive list; once added, the application processes will be kept alive automatically.After the device is powered on or the application is killed, the system will proactively restart these application processes.<!--RP7--><!--RP7End-->  For applications added to the keep-alive list via this API, users cannot manually revoke their keep-alive status on the device <!--RP6--><!--RP6End-->. However, you can call the [removeKeepAliveApps](arkts-mdm-applicationmanager-removekeepaliveapps-f.md#removekeepaliveapps-1) API to remove them from the keep-alive list.  If applications are disallowed to run by calling [addDisallowedRunningBundlesSync](arkts-mdm-applicationmanager-adddisallowedrunningbundlessync-f.md#adddisallowedrunningbundlessync-1), they cannot be kept alive. Otherwise, error code 9200010 will be reported.  To use similar functions on phones or tablets, call [addUserNonStopApps](arkts-mdm-applicationmanager-addusernonstopapps-f.md#addusernonstopapps-1) or [addFreezeExemptedApps](arkts-mdm-applicationmanager-addfreezeexemptedapps-f.md#addfreezeexemptedapps-1). For details, see the relevant documents. |
| [addKeepAliveApps](arkts-mdm-applicationmanager-addkeepaliveapps-f.md#addkeepaliveapps-1) | Adds applications to the keep-alive list; once added, the application processes will be kept alive automatically.You can also set whether to disable manual keep-alive cancellation. After the device is powered on or the application is killed, the system will proactively restart these application processes.  Applications can be added to the keep-alive list via this API and the [addKeepAliveApps](arkts-mdm-applicationmanager-addkeepaliveapps-f.md#addkeepaliveapps-1)API. Settings from both APIs can take effect simultaneously. For a single user, the keep-alive list supports a maximum of 5 applications. For example, if there are already 3 applications in the current list, a maximum of 2more can be added for the user via this API.  If applications are disallowed to run by calling [addDisallowedRunningBundlesSync](arkts-mdm-applicationmanager-adddisallowedrunningbundlessync-f.md#adddisallowedrunningbundlessync-1), they cannot be kept alive. Otherwise, error code 9200010 will be reported.  To use similar functions on phones or tablets, call [addUserNonStopApps](arkts-mdm-applicationmanager-addusernonstopapps-f.md#addusernonstopapps-1) or [addFreezeExemptedApps](arkts-mdm-applicationmanager-addfreezeexemptedapps-f.md#addfreezeexemptedapps-1). For details, see the relevant documents. |
| [addUserNonStopApps](arkts-mdm-applicationmanager-addusernonstopapps-f.md#addusernonstopapps) | Adds applications to the non-stoppable application list for a specified user. This policy only applies to installed applications. If the parameter list contains uninstalled applications, error code 9200012 will be returned. If an application in the list is uninstalled after the policy is set, the uninstalled application will be removed from the list. Adding an application that already exists in the list will return success, but the application will not be added repeatedly to the policy list.  On phones and tablets, non-stoppable applications cannot be closed by swiping up in the task center. After a user taps the application name in **Settings** > **Apps & services** to go to the details page, the forcible stop button is unavailable, and the disable button does not take effect.  On PCs/2-in-1 devices, after a user taps the application name in **Settings** > **Apps & services** to go to the details page, the forcible stop button is unavailable, and the disable button does not take effect. |
| [clearUpApplicationData](arkts-mdm-applicationmanager-clearupapplicationdata-f.md#clearupapplicationdata) | Clears all application data. |
| [getAllowedDistributeAbilityConnBundles](arkts-mdm-applicationmanager-getalloweddistributeabilityconnbundles-f.md#getalloweddistributeabilityconnbundles) | Gets the applications that are allowed to distribute ability connection. |
| [getAllowedKioskApps](arkts-mdm-applicationmanager-getallowedkioskapps-f.md#getallowedkioskapps) | Obtains the applications allowed to run in kiosk mode. |
| [getAllowedNotificationBundles](arkts-mdm-applicationmanager-getallowednotificationbundles-f.md#getallowednotificationbundles) | Gets applications that are allowed to send notifications. |
| [getAllowedRunningBundles](arkts-mdm-applicationmanager-getallowedrunningbundles-f.md#getallowedrunningbundles) | Obtains the list of applications allowed to run by a specified user. |
| [getApplicationWindowStates](arkts-mdm-applicationmanager-getapplicationwindowstates-f.md#getapplicationwindowstates) | Gets the window states of the application. |
| [getAutoStartApps](arkts-mdm-applicationmanager-getautostartapps-f.md#getautostartapps) | Checks the auto-start applications for the current user. |
| [getAutoStartApps](arkts-mdm-applicationmanager-getautostartapps-f.md#getautostartapps-1) | Checks the auto-start applications for the specified user. |
| [getDisallowedRunningBundlesSync](arkts-mdm-applicationmanager-getdisallowedrunningbundlessync-f.md#getdisallowedrunningbundlessync) | Obtains applications that are not allowed to run by the current user or specified user. |
| [getDockApps](arkts-mdm-applicationmanager-getdockapps-f.md#getdockapps) | Obtains the list of applications in the shortcut bar currently. |
| [getFreezeExemptedApps](arkts-mdm-applicationmanager-getfreezeexemptedapps-f.md#getfreezeexemptedapps) | Obtains the background freeze-exempt application list of all users on the current device. |
| [getHideLauncherIcon](arkts-mdm-applicationmanager-gethidelaunchericon-f.md#gethidelaunchericon) | Gets applications that hide launcher icons. |
| [getKeepAliveApps](arkts-mdm-applicationmanager-getkeepaliveapps-f.md#getkeepaliveapps) | Obtains the bundle name of the keep-alive application. |
| [getUserNonStopApps](arkts-mdm-applicationmanager-getusernonstopapps-f.md#getusernonstopapps) | Obtains the non-stoppable application list of all users on the current device. |
| [isAbilityDisabled](arkts-mdm-applicationmanager-isabilitydisabled-f.md#isabilitydisabled) | Checks whether the Ability component of a specified application (system application or third-party application) is disabled. |
| [isAppKioskAllowed](arkts-mdm-applicationmanager-isappkioskallowed-f.md#isappkioskallowed) | Checks whether an application is allowed to run in kiosk mode. |
| [isModifyAutoStartAppsDisallowed](arkts-mdm-applicationmanager-ismodifyautostartappsdisallowed-f.md#ismodifyautostartappsdisallowed) | Checks whether a specified user is prohibited from canceling application auto-start. |
| [isModifyKeepAliveAppsDisallowed](arkts-mdm-applicationmanager-ismodifykeepaliveappsdisallowed-f.md#ismodifykeepaliveappsdisallowed) | Checks whether the application is forbidden to cancel the keep-alive status. |
| [queryBundleStatsInfos](arkts-mdm-applicationmanager-querybundlestatsinfos-f.md#querybundlestatsinfos) | Queries bundle statistics information of applications. |
| [queryTrafficStats](arkts-mdm-applicationmanager-querytrafficstats-f.md#querytrafficstats) | Queries usage statistics of application traffic. |
| [removeAllowedDistributeAbilityConnBundles](arkts-mdm-applicationmanager-removealloweddistributeabilityconnbundles-f.md#removealloweddistributeabilityconnbundles) | Removes the applications that are allowed to distribute ability connection. |
| [removeAllowedNotificationBundles](arkts-mdm-applicationmanager-removeallowednotificationbundles-f.md#removeallowednotificationbundles) | Removes applications that are allowed to send notifications. |
| [removeAllowedRunningBundles](arkts-mdm-applicationmanager-removeallowedrunningbundles-f.md#removeallowedrunningbundles) | Removes the applications that are allowed to run by the specified user. |
| [removeAutoStartApps](arkts-mdm-applicationmanager-removeautostartapps-f.md#removeautostartapps) | Removes the auto-start applications for the current user. |
| [removeAutoStartApps](arkts-mdm-applicationmanager-removeautostartapps-f.md#removeautostartapps-1) | Removes the specified application from the auto-start application list of a specified user. |
| [removeDisallowedRunningBundlesSync](arkts-mdm-applicationmanager-removedisallowedrunningbundlessync-f.md#removedisallowedrunningbundlessync) | Removes the applications that are not allowed to run by the current user or specified user. |
| [removeDockApp](arkts-mdm-applicationmanager-removedockapp-f.md#removedockapp) | Removes an application from the shortcut bar. |
| [removeFreezeExemptedApps](arkts-mdm-applicationmanager-removefreezeexemptedapps-f.md#removefreezeexemptedapps) | Removes the background freeze-exempt application list for a specified user. If the parameter list includes uninstalled applications, the removal will still succeed. Installed applications will be removed from the list,while uninstalled ones will not impact the removal process. |
| [removeHideLauncherIcon](arkts-mdm-applicationmanager-removehidelaunchericon-f.md#removehidelaunchericon) | Removes applications that hide launcher icons. |
| [removeKeepAliveApps](arkts-mdm-applicationmanager-removekeepaliveapps-f.md#removekeepaliveapps) | Removes a specified application from the keep-alive list. |
| [removeUserNonStopApps](arkts-mdm-applicationmanager-removeusernonstopapps-f.md#removeusernonstopapps) | Removes the non-stoppable application list for a specified user. If the parameter list includes uninstalled applications, the removal will still succeed. Installed applications will be removed from the list, while uninstalled ones will not impact the removal process. |
| [setAbilityDisabled](arkts-mdm-applicationmanager-setabilitydisabled-f.md#setabilitydisabled) | Sets whether to disable the Ability component of a specified application (system application or third-party application). Currently, only the UIAbility type is supported. After the UIAbility type is disabled, the UI of the Ability component cannot be started. |
| [setAllowedKioskApps](arkts-mdm-applicationmanager-setallowedkioskapps-f.md#setallowedkioskapps) | Sets applications allowed to run in kiosk mode.  Kiosk mode is a system-level runtime mode that restricts a device to a single application or a set of applications.It controls the lock screen, status bar, gestures, and key features to prevent users from launching other applications or performing other operations on the device. |
| [setKioskFeatures](arkts-mdm-applicationmanager-setkioskfeatures-f.md#setkioskfeatures) | Sets the features of kiosk mode. This API is used to control whether the notification center and control panel can be accessed [in kiosk mode](../../apis-ability-kit/arkts-apis/arkts-ability-kioskmanager-enterkioskmode-f.md#enterkioskmode-1).  Since API version 24, you can set whether to allow users to swipe up from the bottom to access the recent taskbar and swipe left or right to display the side dock.  In non-kiosk mode, this API can be called normally but does not take effect. The settings will take effect after kiosk mode is enabled. |

<!--Del-->
### Functions（系统接口）

| Name | Description |
| --- | --- |
| [addDisallowedRunningBundles](arkts-mdm-applicationmanager-adddisallowedrunningbundles-f-sys.md#adddisallowedrunningbundles) | Adds the applications that are not allowed to run under the current user. This API uses an asynchronous callback to return the result. From API version 21, if the allowed application list [addallowedRunningBundles](arkts-mdm-applicationmanager-addallowedrunningbundles-f.md#addallowedrunningbundles-1)is not empty, the prohibited application list cannot be added using this API. Otherwise, the error code 9200010 is reported. |
| [addDisallowedRunningBundles](arkts-mdm-applicationmanager-adddisallowedrunningbundles-f-sys.md#adddisallowedrunningbundles-1) | Adds the applications that are not allowed to run under a specified user (specified by **userId**). This API uses an asynchronous callback to return the result. From API version 21, if the allowed application list [addallowedRunningBundles](arkts-mdm-applicationmanager-addallowedrunningbundles-f.md#addallowedrunningbundles-1)is not empty, the prohibited application list cannot be added using this API. Otherwise, the error code 9200010 is reported. |
| [addDisallowedRunningBundles](arkts-mdm-applicationmanager-adddisallowedrunningbundles-f-sys.md#adddisallowedrunningbundles-2) | Adds the applications that are not allowed to run by the current or specified user. This API uses a promise to return the result. From API version 21, if the allowed application list [addallowedRunningBundles](arkts-mdm-applicationmanager-addallowedrunningbundles-f.md#addallowedrunningbundles-1)is not empty, the prohibited application list cannot be added using this API. Otherwise, the error code 9200010 is reported. |
| [getDisallowedRunningBundles](arkts-mdm-applicationmanager-getdisallowedrunningbundles-f-sys.md#getdisallowedrunningbundles) | Obtains applications that are not allowed to run by the current user. This API uses an asynchronous callback to return the result. |
| [getDisallowedRunningBundles](arkts-mdm-applicationmanager-getdisallowedrunningbundles-f-sys.md#getdisallowedrunningbundles-1) | Obtains an application from the applications that are not allowed to run by the current user (specified by **userId**). This API uses an asynchronous callback to return the result. |
| [getDisallowedRunningBundles](arkts-mdm-applicationmanager-getdisallowedrunningbundles-f-sys.md#getdisallowedrunningbundles-2) | Obtains applications that are not allowed to run by the current user or a specified user. This API uses a promise to return the result. |
| [removeDisallowedRunningBundles](arkts-mdm-applicationmanager-removedisallowedrunningbundles-f-sys.md#removedisallowedrunningbundles) | Removes an application from the applications that are not allowed to run under the current user. This API uses an asynchronous callback to return the result. |
| [removeDisallowedRunningBundles](arkts-mdm-applicationmanager-removedisallowedrunningbundles-f-sys.md#removedisallowedrunningbundles-1) | Removes an application from the applications that are not allowed to run under the current user (specified by **userId**). This API uses an asynchronous callback to return the result. |
| [removeDisallowedRunningBundles](arkts-mdm-applicationmanager-removedisallowedrunningbundles-f-sys.md#removedisallowedrunningbundles-2) | Removes an application from the applications that are not allowed to run under the current or specified user. This API uses a promise to return the result. |
<!--DelEnd-->

### Interfaces

| Name | Description |
| --- | --- |
| [BundleStatsInfo](arkts-mdm-applicationmanager-bundlestatsinfo-i.md) | The bundle statistics information. |
| [DockInfo](arkts-mdm-applicationmanager-dockinfo-i.md) | Describes information about an application in the shortcut bar. |
| [WindowStateInfo](arkts-mdm-applicationmanager-windowstateinfo-i.md) | Window state information. |

### Enums

| Name | Description |
| --- | --- |
| [KioskFeature](arkts-mdm-applicationmanager-kioskfeature-e.md) | Defines the features of the kiosk mode. |
| [ServiceType](arkts-mdm-applicationmanager-servicetype-e.md) | The type of distribute ability. |
| [WindowState](arkts-mdm-applicationmanager-windowstate-e.md) | The state of the window. |

