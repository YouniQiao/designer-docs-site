# @ohos.enterprise.applicationManager

The **applicationManager** module provides application management capabilities, including adding, removing, and obtaining the applications that are forbidden to run. > **NOTE** > > The APIs of this module can be used only in the stage model. > > The APIs of this module can be called only by a device administrator application that is enabled. For details, see > [MDM Kit Development](../../../../mdm/mdm-kit-guide.md). The > [applicationManager.isAppKioskAllowed](arkts-mdm-isappkioskallowed-f.md#isappkioskallowed-1) API is available to all > applications.

**Since:** 10

**System capability:** SystemCapability.Customization.EnterpriseDeviceManager

## Modules to Import

```TypeScript
import { applicationManager } from '@kit.MDMKit';
```

## Summary

### Functions

| Name | Description |
| --- | --- |
| [addAllowedDistributeAbilityConnBundles](arkts-mdm-addalloweddistributeabilityconnbundles-f.md#addalloweddistributeabilityconnbundles-1) | Adds the applications that are allowed to distribute ability connection. |
| [addAllowedNotificationBundles](arkts-mdm-addallowednotificationbundles-f.md#addallowednotificationbundles-1) | Adds applications that are allowed to send notifications. |
| [addAllowedRunningBundles](arkts-mdm-addallowedrunningbundles-f.md#addallowedrunningbundles-1) | Adds the applications that are allowed to run under specified users. &gt; **NOTE** &gt; |
| [addAutoStartApps](arkts-mdm-addautostartapps-f.md#addautostartapps-1) | Adds the auto-start applications for the current user. Applications added to the auto-start list via this API cannot be manually disabled for auto-start by users on the device&lt;!--RP4--&gt;&lt;!--RP4End--&gt;. However, they can be removed from the auto-start list using the [removeAutoStartApps](arkts-mdm-removeautostartapps-f.md#removeautostartapps-1) API. |
| [addAutoStartApps](arkts-mdm-addautostartapps-f.md#addautostartapps-2) | Adds a list of applications that automatically start upon device startup for a specified user, and sets whether to prohibit the user from manually canceling application auto-start&lt;!--RP4--&gt;&lt;!--RP4End--&gt;. Applications can be added to the auto-start list via this API and the [addAutoStartApps](arkts-mdm-addautostartapps-f.md#addautostartapps-1) API. Settings from both APIs can take effect simultaneously. For a single user, the auto-start list supports a maximum of 10 applications. For example, if there are already 3 applications in the current list, a maximum of 7 more can be added for the user via this API. |
| [addDisallowedRunningBundlesSync](arkts-mdm-adddisallowedrunningbundlessync-f.md#adddisallowedrunningbundlessync-1) | Adds the applications that are not allowed to run by the current or specified user. From API version 21, if the allowed application list [addallowedRunningBundles](arkts-mdm-addallowedrunningbundles-f.md#addallowedrunningbundles-1) is not empty , the prohibited application list cannot be added using this API. Otherwise, the error code 9200010 is reported. |
| [addDockApp](arkts-mdm-adddockapp-f.md#adddockapp-1) | Adds an application to the bottom shortcut bar of a PC/2-in-1 device based on the location index. Then users can tap the application icon in the shortcut bar to directly launch the application. The application icon is the default icon displayed on the home screen. &gt; **NOTE** &gt; |
| [addFreezeExemptedApps](arkts-mdm-addfreezeexemptedapps-f.md#addfreezeexemptedapps-1) | Adds applications to the background freeze-exempt application list for a specified user. This policy applies only to installed applications and becomes invalid after the device is restarted. If the parameter list contains uninstalled applications, error code 9200012 will be returned. If an application in the list is uninstalled after the policy is set, the uninstalled application will be removed from the list. Adding an application that already exists in the list will return success, but the application will not be added repeatedly to the policy list. Freezing operations include suspending the target application, and managing software resource agents, hardware resource agents, and high-power consumption. |
| [addHideLauncherIcon](arkts-mdm-addhidelaunchericon-f.md#addhidelaunchericon-1) | Adds applications that hide launcher icons. |
| [addKeepAliveApps](arkts-mdm-addkeepaliveapps-f.md#addkeepaliveapps-1) | Adds applications to the keep-alive list; once added, the application processes will be kept alive automatically. After the device is powered on or the application is killed, the system will proactively restart these application processes.&lt;!--RP7--&gt;&lt;!--RP7End--&gt; For applications added to the keep-alive list via this API, users cannot manually revoke their keep-alive status on the device &lt;!--RP6--&gt;&lt;!--RP6End--&gt;. However, you can call the [removeKeepAliveApps](arkts-mdm-removekeepaliveapps-f.md#removekeepaliveapps-1) API to remove them from the keep-alive list. If applications are disallowed to run by calling [addDisallowedRunningBundlesSync](arkts-mdm-adddisallowedrunningbundlessync-f.md#adddisallowedrunningbundlessync-1), they cannot be kept alive. Otherwise, error code 9200010 will be reported. To use similar functions on phones or tablets, call [addUserNonStopApps](arkts-mdm-addusernonstopapps-f.md#addusernonstopapps-1) or [addFreezeExemptedApps](arkts-mdm-addfreezeexemptedapps-f.md#addfreezeexemptedapps-1). For details, see the relevant documents. |
| [addKeepAliveApps](arkts-mdm-addkeepaliveapps-f.md#addkeepaliveapps-2) | Adds applications to the keep-alive list; once added, the application processes will be kept alive automatically. You can also set whether to disable manual keep-alive cancellation. After the device is powered on or the application is killed, the system will proactively restart these application processes. Applications can be added to the keep-alive list via this API and the [addKeepAliveApps](arkts-mdm-addkeepaliveapps-f.md#addkeepaliveapps-1) API. Settings from both APIs can take effect simultaneously. For a single user, the keep-alive list supports a maximum of 5 applications. For example, if there are already 3 applications in the current list, a maximum of 2 more can be added for the user via this API. If applications are disallowed to run by calling [addDisallowedRunningBundlesSync](arkts-mdm-adddisallowedrunningbundlessync-f.md#adddisallowedrunningbundlessync-1), they cannot be kept alive. Otherwise, error code 9200010 will be reported. To use similar functions on phones or tablets, call [addUserNonStopApps](arkts-mdm-addusernonstopapps-f.md#addusernonstopapps-1) or [addFreezeExemptedApps](arkts-mdm-addfreezeexemptedapps-f.md#addfreezeexemptedapps-1). For details, see the relevant documents. |
| [addUserNonStopApps](arkts-mdm-addusernonstopapps-f.md#addusernonstopapps-1) | Adds applications to the non-stoppable application list for a specified user. This policy only applies to installed applications. If the parameter list contains uninstalled applications, error code 9200012 will be returned. If an application in the list is uninstalled after the policy is set, the uninstalled application will be removed from the list. Adding an application that already exists in the list will return success, but the application will not be added repeatedly to the policy list. On phones and tablets, non-stoppable applications cannot be closed by swiping up in the task center. After a user taps the application name in **Settings** &gt; **Apps & services** to go to the details page, the forcible stop button is unavailable, and the disable button does not take effect. On PCs/2-in-1 devices, after a user taps the application name in **Settings** &gt; **Apps & services** to go to the details page, the forcible stop button is unavailable, and the disable button does not take effect. |
| [clearUpApplicationData](arkts-mdm-clearupapplicationdata-f.md#clearupapplicationdata-1) | Clears all application data. |
| [getAllowedDistributeAbilityConnBundles](arkts-mdm-getalloweddistributeabilityconnbundles-f.md#getalloweddistributeabilityconnbundles-1) | Gets the applications that are allowed to distribute ability connection. |
| [getAllowedKioskApps](arkts-mdm-getallowedkioskapps-f.md#getallowedkioskapps-1) | Obtains the applications allowed to run in kiosk mode. |
| [getAllowedNotificationBundles](arkts-mdm-getallowednotificationbundles-f.md#getallowednotificationbundles-1) | Gets applications that are allowed to send notifications. |
| [getAllowedRunningBundles](arkts-mdm-getallowedrunningbundles-f.md#getallowedrunningbundles-1) | Obtains the list of applications allowed to run by a specified user. |
| [getApplicationWindowStates](arkts-mdm-getapplicationwindowstates-f.md#getapplicationwindowstates-1) | Gets the window states of the application. |
| [getAutoStartApps](arkts-mdm-getautostartapps-f.md#getautostartapps-1) | Checks the auto-start applications for the current user. |
| [getAutoStartApps](arkts-mdm-getautostartapps-f.md#getautostartapps-2) | Checks the auto-start applications for the specified user. |
| [getDisallowedRunningBundlesSync](arkts-mdm-getdisallowedrunningbundlessync-f.md#getdisallowedrunningbundlessync-1) | Obtains applications that are not allowed to run by the current user or specified user. |
| [getDockApps](arkts-mdm-getdockapps-f.md#getdockapps-1) | Obtains the list of applications in the shortcut bar currently. |
| [getFreezeExemptedApps](arkts-mdm-getfreezeexemptedapps-f.md#getfreezeexemptedapps-1) | Obtains the background freeze-exempt application list of all users on the current device. |
| [getHideLauncherIcon](arkts-mdm-gethidelaunchericon-f.md#gethidelaunchericon-1) | Gets applications that hide launcher icons. |
| [getKeepAliveApps](arkts-mdm-getkeepaliveapps-f.md#getkeepaliveapps-1) | Obtains the bundle name of the keep-alive application. |
| [getUserNonStopApps](arkts-mdm-getusernonstopapps-f.md#getusernonstopapps-1) | Obtains the non-stoppable application list of all users on the current device. |
| [isAbilityDisabled](arkts-mdm-isabilitydisabled-f.md#isabilitydisabled-1) | Checks whether the Ability component of a specified application (system application or third-party application) is disabled. |
| [isAppKioskAllowed](arkts-mdm-isappkioskallowed-f.md#isappkioskallowed-1) | Checks whether an application is allowed to run in kiosk mode. |
| [isModifyAutoStartAppsDisallowed](arkts-mdm-ismodifyautostartappsdisallowed-f.md#ismodifyautostartappsdisallowed-1) | Checks whether a specified user is prohibited from canceling application auto-start. |
| [isModifyKeepAliveAppsDisallowed](arkts-mdm-ismodifykeepaliveappsdisallowed-f.md#ismodifykeepaliveappsdisallowed-1) | Checks whether the application is forbidden to cancel the keep-alive status. |
| [queryBundleStatsInfos](arkts-mdm-querybundlestatsinfos-f.md#querybundlestatsinfos-1) | Queries bundle statistics information of applications. |
| [queryTrafficStats](arkts-mdm-querytrafficstats-f.md#querytrafficstats-1) | Queries usage statistics of application traffic. |
| [removeAllowedDistributeAbilityConnBundles](arkts-mdm-removealloweddistributeabilityconnbundles-f.md#removealloweddistributeabilityconnbundles-1) | Removes the applications that are allowed to distribute ability connection. |
| [removeAllowedNotificationBundles](arkts-mdm-removeallowednotificationbundles-f.md#removeallowednotificationbundles-1) | Removes applications that are allowed to send notifications. |
| [removeAllowedRunningBundles](arkts-mdm-removeallowedrunningbundles-f.md#removeallowedrunningbundles-1) | Removes the applications that are allowed to run by the specified user. |
| [removeAutoStartApps](arkts-mdm-removeautostartapps-f.md#removeautostartapps-1) | Removes the auto-start applications for the current user. |
| [removeAutoStartApps](arkts-mdm-removeautostartapps-f.md#removeautostartapps-2) | Removes the specified application from the auto-start application list of a specified user. |
| [removeDisallowedRunningBundlesSync](arkts-mdm-removedisallowedrunningbundlessync-f.md#removedisallowedrunningbundlessync-1) | Removes the applications that are not allowed to run by the current user or specified user. |
| [removeDockApp](arkts-mdm-removedockapp-f.md#removedockapp-1) | Removes an application from the shortcut bar. &gt; **NOTE** &gt; &gt; The following applications cannot be removed from the shortcut bar using this API: Application Center, Task &gt; Center, Files, and Recycle Bin. Otherwise, error code 9201018 will be reported. |
| [removeFreezeExemptedApps](arkts-mdm-removefreezeexemptedapps-f.md#removefreezeexemptedapps-1) | Removes the background freeze-exempt application list for a specified user. If the parameter list includes uninstalled applications, the removal will still succeed. Installed applications will be removed from the list, while uninstalled ones will not impact the removal process. |
| [removeHideLauncherIcon](arkts-mdm-removehidelaunchericon-f.md#removehidelaunchericon-1) | Removes applications that hide launcher icons. |
| [removeKeepAliveApps](arkts-mdm-removekeepaliveapps-f.md#removekeepaliveapps-1) | Removes a specified application from the keep-alive list. |
| [removeUserNonStopApps](arkts-mdm-removeusernonstopapps-f.md#removeusernonstopapps-1) | Removes the non-stoppable application list for a specified user. If the parameter list includes uninstalled applications, the removal will still succeed. Installed applications will be removed from the list, while uninstalled ones will not impact the removal process. |
| [setAbilityDisabled](arkts-mdm-setabilitydisabled-f.md#setabilitydisabled-1) | Sets whether to disable the Ability component of a specified application (system application or third-party application). Currently, only the UIAbility type is supported. After the UIAbility type is disabled, the UI of the Ability component cannot be started. |
| [setAllowedKioskApps](arkts-mdm-setallowedkioskapps-f.md#setallowedkioskapps-1) | Sets applications allowed to run in kiosk mode. Kiosk mode is a system-level runtime mode that restricts a device to a single application or a set of applications. It controls the lock screen, status bar, gestures, and key features to prevent users from launching other applications or performing other operations on the device. |
| [setKioskFeatures](arkts-mdm-setkioskfeatures-f.md#setkioskfeatures-1) | Sets the features of kiosk mode. This API is used to control whether the notification center and control panel can be accessed [in kiosk mode](../../apis-ability-kit/arkts-apis/arkts-ability-enterkioskmode-f.md#enterkioskmode-1). Since API version 24, you can set whether to allow users to swipe up from the bottom to access the recent taskbar and swipe left or right to display the side dock. In non-kiosk mode, this API can be called normally but does not take effect. The settings will take effect after kiosk mode is enabled. |

<!--Del-->
### Functions（系统接口）

| Name | Description |
| --- | --- |
| [addDisallowedRunningBundles](arkts-mdm-adddisallowedrunningbundles-f-sys.md#adddisallowedrunningbundles-1) | Adds the applications that are not allowed to run under the current user. This API uses an asynchronous callback to return the result. From API version 21, if the allowed application list [addallowedRunningBundles](arkts-mdm-addallowedrunningbundles-f.md#addallowedrunningbundles-1) is not empty, the prohibited application list cannot be added using this API. Otherwise, the error code 9200010 is reported. |
| [addDisallowedRunningBundles](arkts-mdm-adddisallowedrunningbundles-f-sys.md#adddisallowedrunningbundles-2) | Adds the applications that are not allowed to run under a specified user (specified by **userId**). This API uses an asynchronous callback to return the result. From API version 21, if the allowed application list [addallowedRunningBundles](arkts-mdm-addallowedrunningbundles-f.md#addallowedrunningbundles-1) is not empty, the prohibited application list cannot be added using this API. Otherwise, the error code 9200010 is reported. |
| [addDisallowedRunningBundles](arkts-mdm-adddisallowedrunningbundles-f-sys.md#adddisallowedrunningbundles-3) | Adds the applications that are not allowed to run by the current or specified user. This API uses a promise to return the result. From API version 21, if the allowed application list [addallowedRunningBundles](arkts-mdm-addallowedrunningbundles-f.md#addallowedrunningbundles-1) is not empty, the prohibited application list cannot be added using this API. Otherwise, the error code 9200010 is reported. |
| [getDisallowedRunningBundles](arkts-mdm-getdisallowedrunningbundles-f-sys.md#getdisallowedrunningbundles-1) | Obtains applications that are not allowed to run by the current user. This API uses an asynchronous callback to return the result. |
| [getDisallowedRunningBundles](arkts-mdm-getdisallowedrunningbundles-f-sys.md#getdisallowedrunningbundles-2) | Obtains an application from the applications that are not allowed to run by the current user (specified by **userId**). This API uses an asynchronous callback to return the result. |
| [getDisallowedRunningBundles](arkts-mdm-getdisallowedrunningbundles-f-sys.md#getdisallowedrunningbundles-3) | Obtains applications that are not allowed to run by the current user or a specified user. This API uses a promise to return the result. |
| [removeDisallowedRunningBundles](arkts-mdm-removedisallowedrunningbundles-f-sys.md#removedisallowedrunningbundles-1) | Removes an application from the applications that are not allowed to run under the current user. This API uses an asynchronous callback to return the result. |
| [removeDisallowedRunningBundles](arkts-mdm-removedisallowedrunningbundles-f-sys.md#removedisallowedrunningbundles-2) | Removes an application from the applications that are not allowed to run under the current user (specified by **userId**). This API uses an asynchronous callback to return the result. |
| [removeDisallowedRunningBundles](arkts-mdm-removedisallowedrunningbundles-f-sys.md#removedisallowedrunningbundles-3) | Removes an application from the applications that are not allowed to run under the current or specified user. This API uses a promise to return the result. |
<!--DelEnd-->

### Interfaces

| Name | Description |
| --- | --- |
| [BundleStatsInfo](arkts-mdm-bundlestatsinfo-i.md) | The bundle statistics information. |
| [DockInfo](arkts-mdm-dockinfo-i.md) | Describes information about an application in the shortcut bar. |
| [WindowStateInfo](arkts-mdm-windowstateinfo-i.md) | Window state information. |

### Enums

| Name | Description |
| --- | --- |
| [KioskFeature](arkts-mdm-kioskfeature-e.md) | Defines the features of the kiosk mode. |
| [ServiceType](arkts-mdm-servicetype-e.md) | The type of distribute ability. |
| [WindowState](arkts-mdm-windowstate-e.md) | The state of the window. |

