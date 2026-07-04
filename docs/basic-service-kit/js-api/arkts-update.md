# @ohos.update

The **update** module implements update of the entire system, including built-in resources and preset applications, but not third-party applications. There are three types of updates: SD card update, over the air (OTA) update, and factory reset update. - The SD card update depends on the update packages and SD cards. - The OTA update depends on the server deployed by the device manufacturer for managing update packages. The OTA server IP address is passed by the caller. The request interface is fixed and developed by the device manufacturer. - The factory reset update object provides the API for restoring factory settings. > **NOTE** > > The APIs provided by this module are system APIs.

**Since:** 9

**System capability:** SystemCapability.Update.UpdateService

**System API:** This is a system API.

## Modules to Import

```TypeScript
import { update } from '@ohos.update';
```

## Summary

<!--Del-->
### Functions（系统接口）

| Name | Description |
| --- | --- |
| [getLocalUpdater](arkts-basicservices-getlocalupdater-f-sys.md#getlocalupdater-1) | Obtains a **LocalUpdater** object. |
| [getOnlineUpdater](arkts-basicservices-getonlineupdater-f-sys.md#getonlineupdater-1) | Obtains an **OnlineUpdater** object. |
| [getRestorer](arkts-basicservices-getrestorer-f-sys.md#getrestorer-1) | Obtains a **Restorer** object for restoring factory settings. |
<!--DelEnd-->

<!--Del-->
### Interfaces（系统接口）

| Name | Description |
| --- | --- |
| [BusinessType](arkts-basicservices-businesstype-i-sys.md) | Represents an update service type. |
| [CheckResult](arkts-basicservices-checkresult-i-sys.md) | Represents the package check result. |
| [ClearOptions](arkts-basicservices-clearoptions-i-sys.md) | Represents options for clearing errors. |
| [ComponentDescription](arkts-basicservices-componentdescription-i-sys.md) | Represents a component description file. |
| [CurrentVersionInfo](arkts-basicservices-currentversioninfo-i-sys.md) | Represents information about the current version. |
| [DescriptionInfo](arkts-basicservices-descriptioninfo-i-sys.md) | Represents information about the version description file. |
| [DescriptionOptions](arkts-basicservices-descriptionoptions-i-sys.md) | Represents options of the description file. |
| [DownloadOptions](arkts-basicservices-downloadoptions-i-sys.md) | Represents download options. |
| [ErrorMessage](arkts-basicservices-errormessage-i-sys.md) | Represents an error message. |
| [EventClassifyInfo](arkts-basicservices-eventclassifyinfo-i-sys.md) | Describes event type information. |
| [EventInfo](arkts-basicservices-eventinfo-i-sys.md) | Describes event information. |
| [FactoryResetInfo](arkts-basicservices-factoryresetinfo-i-sys.md) | Describes the information of restoring factory settings. |
| [FactoryResetStrategy](arkts-basicservices-factoryresetstrategy-i-sys.md) | Describes the factory reset strategy. |
| [LocalUpdater](arkts-basicservices-localupdater-i-sys.md) | Defines a tool class for updating the local firmware. |
| [NewVersionInfo](arkts-basicservices-newversioninfo-i-sys.md) | Represents information about the new version. |
| [PauseDownloadOptions](arkts-basicservices-pausedownloadoptions-i-sys.md) | Represents options for pausing download. |
| [Restorer](arkts-basicservices-restorer-i-sys.md) | Defines a tool class for restoring factory settings. |
| [ResumeDownloadOptions](arkts-basicservices-resumedownloadoptions-i-sys.md) | Represents options for resuming download. |
| [TaskBody](arkts-basicservices-taskbody-i-sys.md) | Represents task data. |
| [TaskInfo](arkts-basicservices-taskinfo-i-sys.md) | Task information. |
| [Updater](arkts-basicservices-updater-i-sys.md) | Defines a tool class for updating the system online. |
| [UpgradeFile](arkts-basicservices-upgradefile-i-sys.md) | Represents an update file. |
| [UpgradeInfo](arkts-basicservices-upgradeinfo-i-sys.md) | Represents update information. |
| [UpgradeOptions](arkts-basicservices-upgradeoptions-i-sys.md) | Represents update options. |
| [UpgradePeriod](arkts-basicservices-upgradeperiod-i-sys.md) | Represents an automatic update period. |
| [UpgradePolicy](arkts-basicservices-upgradepolicy-i-sys.md) | Represents an update policy. |
| [VersionComponent](arkts-basicservices-versioncomponent-i-sys.md) | Represents a version component. |
| [VersionDigestInfo](arkts-basicservices-versiondigestinfo-i-sys.md) | Represents version digest information. |
<!--DelEnd-->

<!--Del-->
### Enums（系统接口）

| Name | Description |
| --- | --- |
| [BusinessSubType](arkts-basicservices-businesssubtype-e-sys.md) | Represents an update type. |
| [BusinessVendor](arkts-basicservices-businessvendor-e-sys.md) | Represents a device vendor. |
| [ComponentType](arkts-basicservices-componenttype-e-sys.md) | Represents a component type. |
| [DescriptionFormat](arkts-basicservices-descriptionformat-e-sys.md) | Enumerates description file formats. |
| [DescriptionType](arkts-basicservices-descriptiontype-e-sys.md) | Enumerates description file types. |
| [EffectiveMode](arkts-basicservices-effectivemode-e-sys.md) | Enumerates effective modes. |
| [EventClassify](arkts-basicservices-eventclassify-e-sys.md) | Represents an event type. |
| [EventId](arkts-basicservices-eventid-e-sys.md) | Enumerates event IDs. |
| [FactoryResetScope](arkts-basicservices-factoryresetscope-e-sys.md) | Describes the scope of restoring factory settings. |
| [NetType](arkts-basicservices-nettype-e-sys.md) | Enumerates network types. |
| [Order](arkts-basicservices-order-e-sys.md) | Enumerates update commands. |
| [OtaMode](arkts-basicservices-otamode-e-sys.md) | Enumerates the update modes. |
| [UpgradeAction](arkts-basicservices-upgradeaction-e-sys.md) | Represents an update mode. |
| [UpgradeStatus](arkts-basicservices-upgradestatus-e-sys.md) | Enumerates update states. |
<!--DelEnd-->

<!--Del-->
### Types（系统接口）

| Name | Description |
| --- | --- |
| [UpgradeTaskCallback](arkts-basicservices-upgradetaskcallback-t-sys.md) | Represents an event callback. |
<!--DelEnd-->

