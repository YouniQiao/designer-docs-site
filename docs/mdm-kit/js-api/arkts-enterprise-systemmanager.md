# @ohos.enterprise.systemManager

The **systemManager** module provides system management capabilities. > **NOTE** > > The APIs of this module can be used only in the stage model. > > The APIs of this module can be called only by a device administrator application that is enabled. For details, see > [MDM Kit Development](../../../../mdm/mdm-kit-guide.md).

**Since:** 12

**System capability:** SystemCapability.Customization.EnterpriseDeviceManager

## Modules to Import

```TypeScript
import { systemManager } from '@kit.MDMKit';
```

## Summary

### Functions

| Name | Description |
| --- | --- |
| [addDisallowedNearLinkProtocols](arkts-mdm-adddisallowednearlinkprotocols-f.md#adddisallowednearlinkprotocols-1) | Adds a list of NearLink protocols that are not allowed to be used for a specified user. NearLink Kit provides a low -power, high-speed short-range communication service that supports connection and data interaction between NearLink devices. &lt;!--RP3--&gt;&lt;!--RP3End--&gt;This API does not take effect for system services and system applications such as the keyboard and stylus. |
| [addKeyEventPolicies](arkts-mdm-addkeyeventpolicies-f.md#addkeyeventpolicies-1) | Adds a key event handling policy. When the system triggers a key event, if the event matches the delivered key event policy, the MDM app will be notified via the [EnterpriseAdminExtensionAbility.onKeyEvent](arkts-mdm-enterpriseadminextensionability-c.md#onkeyevent-1) callback, with the key event information of the matched policy carried in the callback. |
| [finishLogCollected](arkts-mdm-finishlogcollected-f.md#finishlogcollected-1) | Deletes the device logs collected by the current MDM app under the current user. &gt; **NOTE** &gt; &gt; After the app calls [startCollectLog](arkts-mdm-startcollectlog-f.md#startcollectlog-1) to initiate log collection and &gt; receives the &gt; [EnterpriseAdminExtensionAbility.onLogCollected](arkts-mdm-enterpriseadminextensionability-c.md#onlogcollected-1) &gt; callback, you are advised to immediately copy or process the logs, and then call this API to delete the collected &gt; logs. &gt; &gt; If this API is not called, device logs will occupy the system storage space, which does not affect the next call &gt; of [startCollectLog](arkts-mdm-startcollectlog-f.md#startcollectlog-1) to start a log collection task. |
| [getAutoUnlockAfterReboot](arkts-mdm-getautounlockafterreboot-f.md#getautounlockafterreboot-1) | Checks whether the device is automatically unlocked upon reboot. |
| [getDisallowedNearLinkProtocols](arkts-mdm-getdisallowednearlinkprotocols-f.md#getdisallowednearlinkprotocols-1) | Obtains the list of disallowed NearLink protocols for a specified user. |
| [getInstallLocalEnterpriseAppEnabled](arkts-mdm-getinstalllocalenterpriseappenabled-f.md#getinstalllocalenterpriseappenabled-1) | Checks whether local installation of enterprise applications is supported. |
| [getInstallLocalEnterpriseAppEnabledForAccount](arkts-mdm-getinstalllocalenterpriseappenabledforaccount-f.md#getinstalllocalenterpriseappenabledforaccount-1) | Checks whether local installation of enterprise applications is supported for a specified user. |
| [getKeyEventPolicies](arkts-mdm-getkeyeventpolicies-f.md#getkeyeventpolicies-1) | Obtains the key event handling policy. |
| [getNTPServer](arkts-mdm-getntpserver-f.md#getntpserver-1) | Obtains the NTP server information. |
| [getOtaUpdatePolicy](arkts-mdm-getotaupdatepolicy-f.md#getotaupdatepolicy-1) | Checks the update policy. |
| [getUpdateAuthData](arkts-mdm-getupdateauthdata-f.md#getupdateauthdata-1) | Obtains the authentication data for system update verification. This API uses a promise to return the result. |
| [getUpdateResult](arkts-mdm-getupdateresult-f.md#getupdateresult-1) | Obtains the system update result. |
| [isActivationLockDisabled](arkts-mdm-isactivationlockdisabled-f.md#isactivationlockdisabled-1) | Checks whether the device activation lock is disabled. |
| [isOtaUpdateNonceEnable](arkts-mdm-isotaupdatenonceenable-f.md#isotaupdatenonceenable-1) | Queries whether OTA update nonce is enabled. |
| [notifyUpdatePackages](arkts-mdm-notifyupdatepackages-f.md#notifyupdatepackages-1) | Notifies the system of the update packages. In intranet updates, call this API to notify the system of the update packages, and then call [systemManager.setOtaUpdatePolicy](arkts-mdm-setotaupdatepolicy-f.md#setotaupdatepolicy-1) to set the update policy. &gt; **NOTE** &gt; &gt; This API is time-consuming. Subsequent calls to other synchronous APIs in the application main thread must wait &gt; for the asynchronous return of this API. |
| [removeDisallowedNearLinkProtocols](arkts-mdm-removedisallowednearlinkprotocols-f.md#removedisallowednearlinkprotocols-1) | Removes the list of disallowed NearLink protocols for a specified user. |
| [removeKeyEventPolicies](arkts-mdm-removekeyeventpolicies-f.md#removekeyeventpolicies-1) | Removes a key event handling policy. |
| [setActivationLockDisabled](arkts-mdm-setactivationlockdisabled-f.md#setactivationlockdisabled-1) | Enables or disables the device activation lock. After the device activation lock is disabled, the Find Device function will no longer be available. This function applies only to specific devices.&lt;!--RP5--&gt;&lt;!--RP5End--&gt; |
| [setAutoUnlockAfterReboot](arkts-mdm-setautounlockafterreboot-f.md#setautounlockafterreboot-1) | Sets automatic unlocking upon device reboot. This setting takes effect only on devices without a screen lock password. |
| [setInstallLocalEnterpriseAppEnabled](arkts-mdm-setinstalllocalenterpriseappenabled-f.md#setinstalllocalenterpriseappenabled-1) | Sets whether local installation of enterprise applications is supported. When local installation is enabled, users can install enterprise applications (signing certificate distribution type: **enterprise_normal**) by double- tapping their installation packages on enterprise PCs/2-in-1 devices with the local installation capability. |
| [setInstallLocalEnterpriseAppEnabledForAccount](arkts-mdm-setinstalllocalenterpriseappenabledforaccount-f.md#setinstalllocalenterpriseappenabledforaccount-1) | Sets whether local installation of enterprise applications is supported for a specified user. After the policy of supporting local enterprise application installation is delivered to a PC/2-in-1 enterprise device that has the local installation capability, the user can double-click an enterprise application installation package on the desktop or in the Files application to install it. Only enterprise applications signed with the **enterprise_normal** or **enterprise_mdm** signature type are supported. &gt; **NOTE** &gt; &gt; A PC/2-in-1 enterprise device supports local installation of enterprise applications for the current user if any &gt; of the following conditions is met: &gt; &lt;!--RP7--&gt;&lt;!--RP7End--&gt; |
| [setNTPServer](arkts-mdm-setntpserver-f.md#setntpserver-1) | Sets the NTP server. |
| [setOtaUpdateNonceEnable](arkts-mdm-setotaupdatenonceenable-f.md#setotaupdatenonceenable-1) | Sets the OTA update nonce enable. |
| [setOtaUpdatePolicy](arkts-mdm-setotaupdatepolicy-f.md#setotaupdatepolicy-1) | Sets the update policy. In intranet updates, call [systemManager.notifyUpdatePackages](arkts-mdm-notifyupdatepackages-f.md#notifyupdatepackages-1) to notify the system of the update packages and then call this API to set the upgrade policy. |
| [startCollectLog](arkts-mdm-startcollectlog-f.md#startcollectlog-1) | Starts to collect the [fault logs](../../apis-performance-analysis-kit/arkts-apis/arkts-performanceanalysis-faulttype-e.md) that have been generated and stored on the device. The fault logs, app service logs, and system run logs that are not stored on the hard disk cannot be collected. - After the API is called, the system starts a log collection task. The API returns a response immediately after the task is started. The task may fail due to system performance constraints. - This API can be called by multiple MDM apps. Logs collected by different MDM apps under different users are saved separately and do not affect each other. Only one MDM app can start a log collection task at a time. If this API is called before the task is complete, the error code 9201009 is returned, and other MDM apps may call the API only after the task finishes. - Upon task completion, the MDM app is notified via the [EnterpriseAdminExtensionAbility.onLogCollected](arkts-mdm-enterpriseadminextensionability-c.md#onlogcollected-1) callback. The system mounts the collected log files to the MDM app sandbox path, enabling the MDM app to read the logs within the callback. - If the log collection task takes more than 5 minutes, the [EnterpriseAdminExtensionAbility.onLogCollected](arkts-mdm-enterpriseadminextensionability-c.md#onlogcollected-1) callback returns a task execution failure message. - After the app obtains the logs, you are advised to call [systemManager.finishLogCollected](arkts-mdm-finishlogcollected-f.md#finishlogcollected-1) to remove the collected logs. |

### Interfaces

| Name | Description |
| --- | --- |
| [ErrorInfo](arkts-mdm-errorinfo-i.md) | Represents the update error information. |
| [KeyEvent](arkts-mdm-keyevent-i.md) | Enumerates key events. When the [EnterpriseAdminExtensionAbility.onKeyEvent](arkts-mdm-enterpriseadminextensionability-c.md#onkeyevent-1) key event callback is triggered, the current key event information is transferred. |
| [KeyEventPolicy](arkts-mdm-keyeventpolicy-i.md) | Enumerates key event handling policies. When a key event occurs, only the keys for which the key event handling policy has been delivered are intercepted. For key events where no handling policy has been delivered, the system executes its original response logic. |
| [KeyItem](arkts-mdm-keyitem-i.md) | Enumerates other key information. This refers to the information of other keys that have been pressed when the current [KeyCode](arkts-mdm-keycode-e.md) event occurs. |
| [NotifyDescription](arkts-mdm-notifydescription-i.md) | Represents the update notification defined by an enterprise. |
| [OtaUpdatePolicy](arkts-mdm-otaupdatepolicy-i.md) | Represents an OTA update policy. |
| [Package](arkts-mdm-package-i.md) | Represents the details about a system update package. |
| [PackageDescription](arkts-mdm-packagedescription-i.md) | Represents the description of a system update package. |
| [UpdatePackageInfo](arkts-mdm-updatepackageinfo-i.md) | Represents information about the system update packages. |
| [UpdateResult](arkts-mdm-updateresult-i.md) | Represents the update result information. |

<!--Del-->
### Interfaces（系统接口）

| Name | Description |
| --- | --- |
| [SystemUpdateInfo](arkts-mdm-systemupdateinfo-i.md) | Represents information about the system version to update. |
<!--DelEnd-->

### Enums

| Name | Description |
| --- | --- |
| [KeyAction](arkts-mdm-keyaction-e.md) | Enumerates key actions. |
| [KeyCode](arkts-mdm-keycode-e.md) | Key code. Key codes are used to map to the actual physical keys on a device in the following scenarios: [adding a key event policy](arkts-mdm-addkeyeventpolicies-f.md#addkeyeventpolicies-1), [removing a key event policy](arkts-mdm-removekeyeventpolicies-f.md#removekeyeventpolicies-1), [querying a key event policy](arkts-mdm-getkeyeventpolicies-f.md#getkeyeventpolicies-1), and [invoking the key event callback API](arkts-mdm-enterpriseadminextensionability-c.md#onkeyevent-1) . |
| [KeyPolicy](arkts-mdm-keypolicy-e.md) | Enumerates key policies. This refers to the system behavior triggered after the key code delivered by the MDM app matches the system key event. |
| [NearLinkProtocol](arkts-mdm-nearlinkprotocol-e.md) | Enumerates NearLink protocols. |
| [PackageType](arkts-mdm-packagetype-e.md) | Enumerates the update package types. |
| [PolicyType](arkts-mdm-policytype-e.md) | Enumerates the update policy types. |
| [UpdateStatus](arkts-mdm-updatestatus-e.md) | Enumerates the system update statuses. |

