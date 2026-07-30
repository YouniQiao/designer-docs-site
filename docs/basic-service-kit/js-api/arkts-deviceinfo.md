# @ohos.deviceInfo

The **deviceInfo** module provides terminal device information query, which cannot be configured by developers.
> **NOTE**  
>  
> The initial APIs of this module are supported since API version 6. Newly added APIs  
> will be marked with a superscript to indicate their earliest API version.  
> Some parameters whose return value is the default value are not yet available.  
> The APIs of this module return information about device constants. You are not expected to call these APIs  
> frequently.

**Since:** 6

<!--Device-unnamed-declare namespace deviceInfo--><!--Device-unnamed-declare namespace deviceInfo-End-->

**System capability:** SystemCapability.Startup.SystemInfo

## Modules to Import

```TypeScript
import { deviceInfo } from '@kit.BasicServicesKit';
```

## Summary

### Functions

| Name | Description |
| --- | --- |
| [apiAvailable](arkts-basicservices-deviceinfo-apiavailable-f.md#apiavailable) | Checks whether a specified API version is available on the current device.This API provides compatibility check across different OpenHarmony/distributed OS versions.A suitable version check method is automatically selected based on the input format and supported API versions. |

### Enums

| Name | Description |
| --- | --- |
| [DeviceTypes](arkts-basicservices-deviceinfo-devicetypes-e.md) | Enumerates device types, which can be used to verify the return value of **deviceType**. |
| [PerformanceClassLevel](arkts-basicservices-deviceinfo-performanceclasslevel-e.md) | Enumerates the device capability levels. |

### Constants

| Name | Description |
| --- | --- |
| [ODID](arkts-basicservices-deviceinfo-con.md#odid) | Open device identifier.  An ODID will be regenerated in the following scenarios:  Restore a phone to its factory settings.  Uninstall and reinstall all applications with the same **developerId** on one device.  An ODID is generated based on the following rules:  The value is generated based on the **groupId** parsed from the **developerId** in the signature information. As **groupId.developerId** is the rule, if no **groupId** exists, the **developerId** is used as the **groupId**.  Applications with the same **developerId** use the same ODID on one device.  Applications with different **developerId**s use different ODIDs on one device.  Applications with the same **developerId** use different ODIDs on different devices.  Applications with different **developerId**s use different ODIDs on different devices. |
| [abiList](arkts-basicservices-deviceinfo-con.md#abilist) | Application binary interface (Abi) list.  Example: arm64-v8a |
| [bootCount](arkts-basicservices-deviceinfo-con.md#bootcount) | Obtains boot count since the device starts running |
| [bootloaderVersion](arkts-basicservices-deviceinfo-con.md#bootloaderversion) | Bootloader version.  Example: bootloader |
| [brand](arkts-basicservices-deviceinfo-con.md#brand) | Device brand.  Example: HUAWEI |
| [buildHost](arkts-basicservices-deviceinfo-con.md#buildhost) | Build host.  Example: default |
| [buildRootHash](arkts-basicservices-deviceinfo-con.md#buildroothash) | Build root hash.  Example: default |
| [buildTime](arkts-basicservices-deviceinfo-con.md#buildtime) | Build time.  Example: default |
| [buildType](arkts-basicservices-deviceinfo-con.md#buildtype) | Build type.  Example: default |
| [buildUser](arkts-basicservices-deviceinfo-con.md#builduser) | Build user.  Example: default |
| [buildVersion](arkts-basicservices-deviceinfo-con.md#buildversion) | Build version number. The value is the fourth digit in **osFullName**. You are advised to use **deviceInfo.buildVersion** instead of parsing **osFullName** to obtain the value, facilitating efficiency improvement.  Example: 1 |
| [chipType](arkts-basicservices-deviceinfo-con.md#chiptype) | Obtains the device CPU chipType by a string. |
| [deviceColor](arkts-basicservices-deviceinfo-con.md#devicecolor) | Obtain the device color represented by a string. If it cannot be obtained, return an empty string |
| [deviceType](arkts-basicservices-deviceinfo-con.md#devicetype) | Device type. For details, see [deviceTypes tag](../../../quick-start/module-configuration-file.md#devicetypes).  Example: <!--RP1-->wearable<!--RP1End--> |
| [diskSN](arkts-basicservices-deviceinfo-con.md#disksn) | Disk SN. |
| [displayVersion](arkts-basicservices-deviceinfo-con.md#displayversion) | Product version.  Example: <!--RP8-->XXX X.X.X.X<!--RP8End--> |
| [distributionOSApiName](arkts-basicservices-deviceinfo-con.md#distributionosapiname) | Distribution OS API name.<!--Del--> It is defined by the issuer.<!--DelEnd--> |
| [distributionOSApiVersion](arkts-basicservices-deviceinfo-con.md#distributionosapiversion) | Distribution OS API version.<!--Del--> It is defined by the issuer.<!--DelEnd-->  Example: 50001 |
| [distributionOSName](arkts-basicservices-deviceinfo-con.md#distributionosname) | Distribution OS name.<!--Del--> It is defined by the issuer.<!--DelEnd-->  Example: OpenHarmony |
| [distributionOSReleaseType](arkts-basicservices-deviceinfo-con.md#distributionosreleasetype) | Distribution OS release type.<!--Del--> It is defined by the issuer.<!--DelEnd-->  Example: Release |
| [distributionOSVersion](arkts-basicservices-deviceinfo-con.md#distributionosversion) | Distribution OS version.<!--Del--> It is defined by the issuer.<!--DelEnd--><!--RP11--><!--RP11End-->  Example: 5.0.0 |
| [featureVersion](arkts-basicservices-deviceinfo-con.md#featureversion) | Feature version number. The value is the third digit in **osFullName**. You are advised to use **deviceInfo.featureVersion** instead of parsing **osFullName** to obtain the value, facilitating efficiency improvement.  Example: 0 |
| [firstApiVersion](arkts-basicservices-deviceinfo-con.md#firstapiversion) | First API version.  Example: 3 |
| [hardwareModel](arkts-basicservices-deviceinfo-con.md#hardwaremodel) | Hardware model.  Example: <!--RP6-->TASA00CVN1<!--RP6End--> |
| [hardwareProfile](arkts-basicservices-deviceinfo-con.md#hardwareprofile) | Hardware profile. |
| [incrementalVersion](arkts-basicservices-deviceinfo-con.md#incrementalversion) | Incremental version.  Example: default |
| [majorVersion](arkts-basicservices-deviceinfo-con.md#majorversion) | Major version number, which increments with the main version. The value is the first digit in **osFullName**. You are advised to use **deviceInfo.majorVersion** instead of parsing **osFullName** to obtain the value, facilitating efficiency improvement.  Example: 5 |
| [manufacture](arkts-basicservices-deviceinfo-con.md#manufacture) | Device manufacturer.  Example: HUAWEI |
| [marketName](arkts-basicservices-deviceinfo-con.md#marketname) | Marketing name.  Example: <!--RP2-->Mate XX<!--RP2End--> |
| [osFullName](arkts-basicservices-deviceinfo-con.md#osfullname) | System version. The version number is in the format of **OpenHarmony-x.x.x.x**, where **x** is a digit.  Example: <!--RP10-->Openharmony-5.0.0.1<!--RP10End--> |
| [osReleaseType](arkts-basicservices-deviceinfo-con.md#osreleasetype) | OS release type. The options are as follows:  - **Canary**: Preliminary release open only to specific developers. This release does not promise API stability and may require tolerance of instability.  - **Beta**: Release open to all developers. This release does not promise API stability and may require tolerance of instability.  - **Release**: Official release open to all developers. This release promises that all APIs are stable.  Example: <!--RP9-->Canary/Beta/Release<!--RP9End--> |
| [performanceClass](arkts-basicservices-deviceinfo-con.md#performanceclass) | Device capability level. |
| [productModel](arkts-basicservices-deviceinfo-con.md#productmodel) | Product model.  Example: <!--RP4-->TAS-AL00<!--RP4End--> |
| [productModelAlias](arkts-basicservices-deviceinfo-con.md#productmodelalias) | Product model alias.  Example: TAS-AL00 |
| [productSeries](arkts-basicservices-deviceinfo-con.md#productseries) | Product series.  Example: <!--RP3-->TAS<!--RP3End--> |
| [sdkApiVersion](arkts-basicservices-deviceinfo-con.md#sdkapiversion) | SDK API version.  Example: 12 |
| [sdkMinorApiVersion](arkts-basicservices-deviceinfo-con.md#sdkminorapiversion) | Obtains the SDK Minor API version. |
| [sdkPatchApiVersion](arkts-basicservices-deviceinfo-con.md#sdkpatchapiversion) | Obtains the SDK Patch API version. |
| [securityPatchTag](arkts-basicservices-deviceinfo-con.md#securitypatchtag) | Security patch tag.  Example: <!--RP7-->2021/01/01<!--RP7End--> |
| [seniorVersion](arkts-basicservices-deviceinfo-con.md#seniorversion) | Senior version number, which increments with architecture and feature updates. The value is the second digit in **osFullName**. You are advised to use **deviceInfo.seniorVersion** instead of parsing **osFullName** to obtain the value, facilitating efficiency improvement.  Example: 0 |
| [serial](arkts-basicservices-deviceinfo-con.md#serial) | Device serial number (SN). |
| [softwareModel](arkts-basicservices-deviceinfo-con.md#softwaremodel) | Software model.  Example: <!--RP5-->TAS-AL00<!--RP5End--> |
| [udid](arkts-basicservices-deviceinfo-con.md#udid) | Device UDID. |
| [versionId](arkts-basicservices-deviceinfo-con.md#versionid) | Version ID. It consists of the following fields: **deviceType**, **manufacture**, **brand**, **productSeries**,**osFullName**, **productModel**, **softwareModel**, **sdkApiVersion**, **incrementalVersion**, and **buildType**.  Example: wearable/HUAWEI/HUAWEI/TAS/OpenHarmony-5.0.0.1/TAS-AL00/TAS-AL00/12/default/release:nolog |

