# @ohos.enterprise.systemManager

The **systemManager** module provides system management capabilities.
> **NOTE**  
>  
> The APIs of this module can be used only in the stage model.  
>  
> The APIs of this module can be called only by a device administrator application that is enabled. For details, see  
> [MDM Kit Development](../../../mdm/mdm-kit-guide.md).

**Since:** 12

<!--Device-unnamed-declare namespace systemManager--><!--Device-unnamed-declare namespace systemManager-End-->

**System capability:** SystemCapability.Customization.EnterpriseDeviceManager

## Modules to Import

```TypeScript
import { systemManager } from '@kit.MDMKit';
```

## Summary

### Functions

| Name | Description |
| --- | --- |
| [addDisallowedNearLinkProtocols](arkts-mdm-systemmanager-adddisallowednearlinkprotocols-f.md#adddisallowednearlinkprotocols) | Adds a list of NearLink protocols that are not allowed to be used for a specified user. NearLink Kit provides a low  -power, high-speed short-range communication service that supports connection and data interaction between NearLink devices. <!--RP3--><!--RP3End-->This API does not take effect for system services and system applications such as the keyboard and stylus. |
| [addKeyEventPolicies](arkts-mdm-systemmanager-addkeyeventpolicies-f.md#addkeyeventpolicies) | Adds a key event handling policy. When the system triggers a key event, if the event matches the delivered key event policy, the MDM app will be notified via the [EnterpriseAdminExtensionAbility.onKeyEvent](arkts-mdm-enterprise-enterpriseadminextensionability-enterpriseadminextensionability-c.md#onkeyevent)callback, with the key event information of the matched policy carried in the callback. |
| [finishLogCollected](arkts-mdm-systemmanager-finishlogcollected-f.md#finishlogcollected) | Deletes the device logs collected by the current MDM app under the current user. |
| [getAutoUnlockAfterReboot](arkts-mdm-systemmanager-getautounlockafterreboot-f.md#getautounlockafterreboot) | Checks whether the device is automatically unlocked upon reboot. |
| [getDisallowedNearLinkProtocols](arkts-mdm-systemmanager-getdisallowednearlinkprotocols-f.md#getdisallowednearlinkprotocols) | Obtains the list of disallowed NearLink protocols for a specified user. |
| [getInstallLocalEnterpriseAppEnabled](arkts-mdm-systemmanager-getinstalllocalenterpriseappenabled-f.md#getinstalllocalenterpriseappenabled) | Checks whether local installation of enterprise applications is supported. |
| [getInstallLocalEnterpriseAppEnabledForAccount](arkts-mdm-systemmanager-getinstalllocalenterpriseappenabledforaccount-f.md#getinstalllocalenterpriseappenabledforaccount) | Checks whether local installation of enterprise applications is supported for a specified user. |
| [getKeyEventPolicies](arkts-mdm-systemmanager-getkeyeventpolicies-f.md#getkeyeventpolicies) | Obtains the key event handling policy. |
| [getNTPServer](arkts-mdm-systemmanager-getntpserver-f.md#getntpserver) | Obtains the NTP server information. |
| [getOtaUpdatePolicy](arkts-mdm-systemmanager-getotaupdatepolicy-f.md#getotaupdatepolicy) | Checks the update policy. |
| [getUpdateAuthData](arkts-mdm-systemmanager-getupdateauthdata-f.md#getupdateauthdata) | Obtains the authentication data for system update verification. This API uses a promise to return the result. |
| [getUpdateResult](arkts-mdm-systemmanager-getupdateresult-f.md#getupdateresult) | Obtains the system update result. |
| [isActivationLockDisabled](arkts-mdm-systemmanager-isactivationlockdisabled-f.md#isactivationlockdisabled) | Checks whether the device activation lock is disabled. |
| [isOtaUpdateNonceEnable](arkts-mdm-systemmanager-isotaupdatenonceenable-f.md#isotaupdatenonceenable) | Queries whether OTA update nonce is enabled. |
| [notifyUpdatePackages](arkts-mdm-systemmanager-notifyupdatepackages-f.md#notifyupdatepackages) | Notifies the system of the update packages. In intranet updates, call this API to notify the system of the update packages, and then call [systemManager.setOtaUpdatePolicy](arkts-mdm-systemmanager-setotaupdatepolicy-f.md#setotaupdatepolicy) to set the update policy. |
| [removeDisallowedNearLinkProtocols](arkts-mdm-systemmanager-removedisallowednearlinkprotocols-f.md#removedisallowednearlinkprotocols) | Removes the list of disallowed NearLink protocols for a specified user. |
| [removeKeyEventPolicies](arkts-mdm-systemmanager-removekeyeventpolicies-f.md#removekeyeventpolicies) | Removes a key event handling policy. |
| [setActivationLockDisabled](arkts-mdm-systemmanager-setactivationlockdisabled-f.md#setactivationlockdisabled) | Enables or disables the device activation lock. After the device activation lock is disabled, the Find Device function will no longer be available. This function applies only to specific devices.<!--RP5--><!--RP5End--> |
| [setAutoUnlockAfterReboot](arkts-mdm-systemmanager-setautounlockafterreboot-f.md#setautounlockafterreboot) | Sets automatic unlocking upon device reboot. This setting takes effect only on devices without a screen lock password. |
| [setInstallLocalEnterpriseAppEnabled](arkts-mdm-systemmanager-setinstalllocalenterpriseappenabled-f.md#setinstalllocalenterpriseappenabled) | Sets whether local installation of enterprise applications is supported. When local installation is enabled, users can install enterprise applications (signing certificate distribution type: **enterprise_normal**) by double-tapping their installation packages on enterprise PCs/2-in-1 devices with the local installation capability. |
| [setInstallLocalEnterpriseAppEnabledForAccount](arkts-mdm-systemmanager-setinstalllocalenterpriseappenabledforaccount-f.md#setinstalllocalenterpriseappenabledforaccount) | Sets whether local installation of enterprise applications is supported for a specified user. After the policy of supporting local enterprise application installation is delivered to a PC/2-in-1 enterprise device that has the local installation capability, the user can double-click an enterprise application installation package on the desktop or in the Files application to install it.  Only enterprise applications signed with the **enterprise_normal** or **enterprise_mdm** signature type are supported. |
| [setNTPServer](arkts-mdm-systemmanager-setntpserver-f.md#setntpserver) | Sets the NTP server. |
| [setOtaUpdateNonceEnable](arkts-mdm-systemmanager-setotaupdatenonceenable-f.md#setotaupdatenonceenable) | Sets the OTA update nonce enable. |
| [setOtaUpdatePolicy](arkts-mdm-systemmanager-setotaupdatepolicy-f.md#setotaupdatepolicy) | Sets the update policy. In intranet updates, call [systemManager.notifyUpdatePackages](arkts-mdm-systemmanager-notifyupdatepackages-f.md#notifyupdatepackages) to notify the system of the update packages and then call this API to set the upgrade policy. |
| [startCollectLog](arkts-mdm-systemmanager-startcollectlog-f.md#startcollectlog) | Starts to collect the [fault logs](../../apis-performance-analysis-kit/arkts-apis/arkts-performanceanalysis-faultlogger-faulttype-e.md) that have been generated and stored on the device. The fault logs, app service logs, and system run logs that are not stored on the hard disk cannot be collected.  - After the API is called, the system starts a log collection task. The API returns a response immediately after the task is started. The task may fail due to system performance constraints.  - This API can be called by multiple MDM apps. Logs collected by different MDM apps under different users are saved separately and do not affect each other. Only one MDM app can start a log collection task at a time. If this API is called before the task is complete, the error code 9201009 is returned, and other MDM apps may call the API only after the task finishes.  - Upon task completion, the MDM app is notified via the [EnterpriseAdminExtensionAbility.onLogCollected](arkts-mdm-enterprise-enterpriseadminextensionability-enterpriseadminextensionability-c.md#onlogcollected)callback. The system mounts the collected log files to the MDM app sandbox path, enabling the MDM app to read the logs within the callback.  - If the log collection task takes more than 5 minutes, the [EnterpriseAdminExtensionAbility.onLogCollected](arkts-mdm-enterprise-enterpriseadminextensionability-enterpriseadminextensionability-c.md#onlogcollected)callback returns a task execution failure message.  - After the app obtains the logs, you are advised to call [systemManager.finishLogCollected](arkts-mdm-systemmanager-finishlogcollected-f.md#finishlogcollected) to remove the collected logs. |

### Interfaces

| Name | Description |
| --- | --- |
| [ErrorInfo](arkts-mdm-systemmanager-errorinfo-i.md) | Represents the update error information. |
| [KeyEvent](arkts-mdm-systemmanager-keyevent-i.md) | Enumerates key events. When the [EnterpriseAdminExtensionAbility.onKeyEvent](arkts-mdm-enterprise-enterpriseadminextensionability-enterpriseadminextensionability-c.md#onkeyevent)key event callback is triggered, the current key event information is transferred. |
| [KeyEventPolicy](arkts-mdm-systemmanager-keyeventpolicy-i.md) | Enumerates key event handling policies. When a key event occurs, only the keys for which the key event handling policy has been delivered are intercepted. For key events where no handling policy has been delivered, the system executes its original response logic. |
| [KeyItem](arkts-mdm-systemmanager-keyitem-i.md) | Enumerates other key information. This refers to the information of other keys that have been pressed when the current [KeyCode](arkts-mdm-systemmanager-keycode-e.md) event occurs. |
| [NotifyDescription](arkts-mdm-systemmanager-notifydescription-i.md) | Represents the update notification defined by an enterprise. |
| [OtaUpdatePolicy](arkts-mdm-systemmanager-otaupdatepolicy-i.md) | Represents an OTA update policy. |
| [Package](arkts-mdm-systemmanager-package-i.md) | Represents the details about a system update package. |
| [PackageDescription](arkts-mdm-systemmanager-packagedescription-i.md) | Represents the description of a system update package. |
| [SystemUpdateInfo](arkts-mdm-systemmanager-systemupdateinfo-i.md) | Represents information about the system version to update. |
| [UpdatePackageInfo](arkts-mdm-systemmanager-updatepackageinfo-i.md) | Represents information about the system update packages. |
| [UpdateResult](arkts-mdm-systemmanager-updateresult-i.md) | Represents the update result information. |

### Enums

| Name | Description |
| --- | --- |
| [KeyAction](arkts-mdm-systemmanager-keyaction-e.md) | Enumerates key actions. |
| [KeyCode](arkts-mdm-systemmanager-keycode-e.md) | Key code. Key codes are used to map to the actual physical keys on a device in the following scenarios:[adding a key event policy](arkts-mdm-systemmanager-addkeyeventpolicies-f.md#addkeyeventpolicies),[removing a key event policy](arkts-mdm-systemmanager-removekeyeventpolicies-f.md#removekeyeventpolicies),[querying a key event policy](arkts-mdm-systemmanager-getkeyeventpolicies-f.md#getkeyeventpolicies), and [invoking the key event callback API](arkts-mdm-enterprise-enterpriseadminextensionability-enterpriseadminextensionability-c.md#onkeyevent). |
| [KeyPolicy](arkts-mdm-systemmanager-keypolicy-e.md) | Enumerates key policies. This refers to the system behavior triggered after the key code delivered by the MDM app matches the system key event. |
| [NearLinkProtocol](arkts-mdm-systemmanager-nearlinkprotocol-e.md) | Enumerates NearLink protocols. |
| [PackageType](arkts-mdm-systemmanager-packagetype-e.md) | Enumerates the update package types. |
| [PolicyType](arkts-mdm-systemmanager-policytype-e.md) | Enumerates the update policy types. |
| [UpdateStatus](arkts-mdm-systemmanager-updatestatus-e.md) | Enumerates the system update statuses. |

