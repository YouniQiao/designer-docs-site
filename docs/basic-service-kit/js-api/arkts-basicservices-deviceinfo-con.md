# Constants

## ODID

```TypeScript
const ODID: string
```

Open device identifier.

An ODID will be regenerated in the following scenarios:

Restore a phone to its factory settings.

Uninstall and reinstall all applications with the same **developerId** on one device.

An ODID is generated based on the following rules:

The value is generated based on the **groupId** parsed from the **developerId** in the signature information. As **groupId.developerId** is the rule, if no **groupId** exists, the **developerId** is used as the **groupId**.

Applications with the same **developerId** use the same ODID on one device.

Applications with different **developerId**s use different ODIDs on one device.

Applications with the same **developerId** use different ODIDs on different devices.

Applications with different **developerId**s use different ODIDs on different devices.

**NOTE**

The data length is 37 bytes.

Example: 1234a567-XXXX-XXXX-XXXX-XXXXXXXXXXXX

**Since:** 12

<!--Device-deviceInfo-const ODID: string--><!--Device-deviceInfo-const ODID: string-End-->

**System capability:** SystemCapability.Startup.SystemInfo

## abiList

```TypeScript
const abiList: string
```

Application binary interface (Abi) list.

Example: arm64-v8a

**Since:** 6

<!--Device-deviceInfo-const abiList: string--><!--Device-deviceInfo-const abiList: string-End-->

**System capability:** SystemCapability.Startup.SystemInfo

## bootCount

```TypeScript
const bootCount: number
```

Obtains boot count since the device starts running

**Since:** 21

<!--Device-deviceInfo-const bootCount: number--><!--Device-deviceInfo-const bootCount: number-End-->

**System capability:** SystemCapability.Startup.SystemInfo

## bootloaderVersion

```TypeScript
const bootloaderVersion: string
```

Bootloader version.

Example: bootloader

**Since:** 6

<!--Device-deviceInfo-const bootloaderVersion: string--><!--Device-deviceInfo-const bootloaderVersion: string-End-->

**System capability:** SystemCapability.Startup.SystemInfo

## brand

```TypeScript
const brand: string
```

Device brand.

Example: HUAWEI

**Since:** 6

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-deviceInfo-const brand: string--><!--Device-deviceInfo-const brand: string-End-->

**System capability:** SystemCapability.Startup.SystemInfo

## buildHost

```TypeScript
const buildHost: string
```

Build host.

Example: default

**Since:** 6

<!--Device-deviceInfo-const buildHost: string--><!--Device-deviceInfo-const buildHost: string-End-->

**System capability:** SystemCapability.Startup.SystemInfo

## buildRootHash

```TypeScript
const buildRootHash: string
```

Build root hash.

Example: default

**Since:** 6

<!--Device-deviceInfo-const buildRootHash: string--><!--Device-deviceInfo-const buildRootHash: string-End-->

**System capability:** SystemCapability.Startup.SystemInfo

## buildTime

```TypeScript
const buildTime: string
```

Build time.

Example: default

**Since:** 6

<!--Device-deviceInfo-const buildTime: string--><!--Device-deviceInfo-const buildTime: string-End-->

**System capability:** SystemCapability.Startup.SystemInfo

## buildType

```TypeScript
const buildType: string
```

Build type.

Example: default

**Since:** 6

<!--Device-deviceInfo-const buildType: string--><!--Device-deviceInfo-const buildType: string-End-->

**System capability:** SystemCapability.Startup.SystemInfo

## buildUser

```TypeScript
const buildUser: string
```

Build user.

Example: default

**Since:** 6

<!--Device-deviceInfo-const buildUser: string--><!--Device-deviceInfo-const buildUser: string-End-->

**System capability:** SystemCapability.Startup.SystemInfo

## buildVersion

```TypeScript
const buildVersion: number
```

Build version number. The value is the fourth digit in **osFullName**. You are advised to use **deviceInfo.buildVersion** instead of parsing **osFullName** to obtain the value, facilitating efficiency improvement.

Example: 1

**Since:** 6

<!--Device-deviceInfo-const buildVersion: number--><!--Device-deviceInfo-const buildVersion: number-End-->

**System capability:** SystemCapability.Startup.SystemInfo

## chipType

```TypeScript
const chipType: string
```

Obtains the device CPU chipType by a string.

**Since:** 21

<!--Device-deviceInfo-const chipType: string--><!--Device-deviceInfo-const chipType: string-End-->

**System capability:** SystemCapability.Startup.SystemInfo

## deviceColor

```TypeScript
const deviceColor: string
```

Obtain the device color represented by a string. If it cannot be obtained, return an empty string

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

<!--Device-deviceInfo-const deviceColor: string--><!--Device-deviceInfo-const deviceColor: string-End-->

**System capability:** SystemCapability.Startup.SystemInfo

## deviceType

```TypeScript
const deviceType: string
```

Device type. For details, see [deviceTypes tag](../../../../quick-start/module-configuration-file.md#devicetypes).

Example: <!--RP1-->wearable<!--RP1End-->

**Since:** 6

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-deviceInfo-const deviceType: string--><!--Device-deviceInfo-const deviceType: string-End-->

**System capability:** SystemCapability.Startup.SystemInfo

## diskSN

```TypeScript
const diskSN: string
```

Disk SN.

**NOTE**

This field can be queried only on the 2-in-1 device. For other devices, the query result is empty.

ohos.permission.ACCESS_DISK_PHY_INFO

Example: 2502EM400567

**Since:** 15

**Required permissions:** ohos.permission.ACCESS_DISK_PHY_INFO

<!--Device-deviceInfo-const diskSN: string--><!--Device-deviceInfo-const diskSN: string-End-->

**System capability:** SystemCapability.Startup.SystemInfo

## displayVersion

```TypeScript
const displayVersion: string
```

Product version.

Example: <!--RP8-->XXX X.X.X.X<!--RP8End-->

**Since:** 6

<!--Device-deviceInfo-const displayVersion: string--><!--Device-deviceInfo-const displayVersion: string-End-->

**System capability:** SystemCapability.Startup.SystemInfo

## distributionOSApiName

```TypeScript
const distributionOSApiName: string
```

Distribution OS API name.<!--Del--> It is defined by the issuer.<!--DelEnd-->

**Since:** 13

<!--Device-deviceInfo-const distributionOSApiName: string--><!--Device-deviceInfo-const distributionOSApiName: string-End-->

**System capability:** SystemCapability.Startup.SystemInfo

## distributionOSApiVersion

```TypeScript
const distributionOSApiVersion: number
```

Distribution OS API version.<!--Del--> It is defined by the issuer.<!--DelEnd-->

Example: 50001

**Since:** 10

<!--Device-deviceInfo-const distributionOSApiVersion: number--><!--Device-deviceInfo-const distributionOSApiVersion: number-End-->

**System capability:** SystemCapability.Startup.SystemInfo

## distributionOSName

```TypeScript
const distributionOSName: string
```

Distribution OS name.<!--Del--> It is defined by the issuer.<!--DelEnd-->

Example: OpenHarmony

**Since:** 10

<!--Device-deviceInfo-const distributionOSName: string--><!--Device-deviceInfo-const distributionOSName: string-End-->

**System capability:** SystemCapability.Startup.SystemInfo

## distributionOSReleaseType

```TypeScript
const distributionOSReleaseType: string
```

Distribution OS release type.<!--Del--> It is defined by the issuer.<!--DelEnd-->

Example: Release

**Since:** 10

<!--Device-deviceInfo-const distributionOSReleaseType: string--><!--Device-deviceInfo-const distributionOSReleaseType: string-End-->

**System capability:** SystemCapability.Startup.SystemInfo

## distributionOSVersion

```TypeScript
const distributionOSVersion: string
```

Distribution OS version.<!--Del--> It is defined by the issuer.<!--DelEnd--><!--RP11--><!--RP11End-->

Example: 5.0.0

**Since:** 10

<!--Device-deviceInfo-const distributionOSVersion: string--><!--Device-deviceInfo-const distributionOSVersion: string-End-->

**System capability:** SystemCapability.Startup.SystemInfo

## featureVersion

```TypeScript
const featureVersion: number
```

Feature version number. The value is the third digit in **osFullName**. You are advised to use **deviceInfo.featureVersion** instead of parsing **osFullName** to obtain the value, facilitating efficiency improvement.

Example: 0

**Since:** 6

<!--Device-deviceInfo-const featureVersion: number--><!--Device-deviceInfo-const featureVersion: number-End-->

**System capability:** SystemCapability.Startup.SystemInfo

## firstApiVersion

```TypeScript
const firstApiVersion: number
```

First API version.

Example: 3

**Since:** 6

<!--Device-deviceInfo-const firstApiVersion: number--><!--Device-deviceInfo-const firstApiVersion: number-End-->

**System capability:** SystemCapability.Startup.SystemInfo

## hardwareModel

```TypeScript
const hardwareModel: string
```

Hardware model.

Example: <!--RP6-->TASA00CVN1<!--RP6End-->

**Since:** 6

<!--Device-deviceInfo-const hardwareModel: string--><!--Device-deviceInfo-const hardwareModel: string-End-->

**System capability:** SystemCapability.Startup.SystemInfo

## hardwareProfile

```TypeScript
const hardwareProfile: string
```

Hardware profile.

**NOTE**

This API is supported since API version 6 and deprecated since API version 9.

Example: default

**Since:** 6

**Deprecated since:** 9

<!--Device-deviceInfo-const hardwareProfile: string--><!--Device-deviceInfo-const hardwareProfile: string-End-->

**System capability:** SystemCapability.Startup.SystemInfo

## incrementalVersion

```TypeScript
const incrementalVersion: string
```

Incremental version.

Example: default

**Since:** 6

<!--Device-deviceInfo-const incrementalVersion: string--><!--Device-deviceInfo-const incrementalVersion: string-End-->

**System capability:** SystemCapability.Startup.SystemInfo

## majorVersion

```TypeScript
const majorVersion: number
```

Major version number, which increments with the main version. The value is the first digit in **osFullName**. You are advised to use **deviceInfo.majorVersion** instead of parsing **osFullName** to obtain the value, facilitating efficiency improvement.

Example: 5

**Since:** 6

<!--Device-deviceInfo-const majorVersion: number--><!--Device-deviceInfo-const majorVersion: number-End-->

**System capability:** SystemCapability.Startup.SystemInfo

## manufacture

```TypeScript
const manufacture: string
```

Device manufacturer.

Example: HUAWEI

**Since:** 6

<!--Device-deviceInfo-const manufacture: string--><!--Device-deviceInfo-const manufacture: string-End-->

**System capability:** SystemCapability.Startup.SystemInfo

## marketName

```TypeScript
const marketName: string
```

Marketing name.

Example: <!--RP2-->Mate XX<!--RP2End-->

**Since:** 6

<!--Device-deviceInfo-const marketName: string--><!--Device-deviceInfo-const marketName: string-End-->

**System capability:** SystemCapability.Startup.SystemInfo

## osFullName

```TypeScript
const osFullName: string
```

System version. The version number is in the format of **OpenHarmony-x.x.x.x**, where **x** is a digit.

Example: <!--RP10-->Openharmony-5.0.0.1<!--RP10End-->

**Since:** 6

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-deviceInfo-const osFullName: string--><!--Device-deviceInfo-const osFullName: string-End-->

**System capability:** SystemCapability.Startup.SystemInfo

## osReleaseType

```TypeScript
const osReleaseType: string
```

OS release type. The options are as follows:

- **Canary**: Preliminary release open only to specific developers. This release does not promise API stability and may require tolerance of instability.  
- **Beta**: Release open to all developers. This release does not promise API stability and may require tolerance of instability.  
- **Release**: Official release open to all developers. This release promises that all APIs are stable.

Example: <!--RP9-->Canary/Beta/Release<!--RP9End-->

**Since:** 6

<!--Device-deviceInfo-const osReleaseType: string--><!--Device-deviceInfo-const osReleaseType: string-End-->

**System capability:** SystemCapability.Startup.SystemInfo

## performanceClass

```TypeScript
const performanceClass: PerformanceClassLevel
```

Device capability level.

**Since:** 19

<!--Device-deviceInfo-const performanceClass: PerformanceClassLevel--><!--Device-deviceInfo-const performanceClass: PerformanceClassLevel-End-->

**System capability:** SystemCapability.Startup.SystemInfo

## productModel

```TypeScript
const productModel: string
```

Product model.

Example: <!--RP4-->TAS-AL00<!--RP4End-->

**Since:** 6

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-deviceInfo-const productModel: string--><!--Device-deviceInfo-const productModel: string-End-->

**System capability:** SystemCapability.Startup.SystemInfo

## productModelAlias

```TypeScript
const productModelAlias: string
```

Product model alias.

Example: TAS-AL00

**Since:** 14

**Atomic service API:** This API can be used in atomic services since API version 14.

<!--Device-deviceInfo-const productModelAlias: string--><!--Device-deviceInfo-const productModelAlias: string-End-->

**System capability:** SystemCapability.Startup.SystemInfo

## productSeries

```TypeScript
const productSeries: string
```

Product series.

Example: <!--RP3-->TAS<!--RP3End-->

**Since:** 6

<!--Device-deviceInfo-const productSeries: string--><!--Device-deviceInfo-const productSeries: string-End-->

**System capability:** SystemCapability.Startup.SystemInfo

## sdkApiVersion

```TypeScript
const sdkApiVersion: number
```

SDK API version.

Example: 12

**Since:** 6

**Atomic service API:** This API can be used in atomic services since API version 14.

<!--Device-deviceInfo-const sdkApiVersion: number--><!--Device-deviceInfo-const sdkApiVersion: number-End-->

**System capability:** SystemCapability.Startup.SystemInfo

## sdkMinorApiVersion

```TypeScript
const sdkMinorApiVersion: number
```

Obtains the SDK Minor API version.

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 26.0.0.

<!--Device-deviceInfo-const sdkMinorApiVersion: number--><!--Device-deviceInfo-const sdkMinorApiVersion: number-End-->

**System capability:** SystemCapability.Startup.SystemInfo

## sdkPatchApiVersion

```TypeScript
const sdkPatchApiVersion: number
```

Obtains the SDK Patch API version.

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 26.0.0.

<!--Device-deviceInfo-const sdkPatchApiVersion: number--><!--Device-deviceInfo-const sdkPatchApiVersion: number-End-->

**System capability:** SystemCapability.Startup.SystemInfo

## securityPatchTag

```TypeScript
const securityPatchTag: string
```

Security patch tag.

Example: <!--RP7-->2021/01/01<!--RP7End-->

**Since:** 6

<!--Device-deviceInfo-const securityPatchTag: string--><!--Device-deviceInfo-const securityPatchTag: string-End-->

**System capability:** SystemCapability.Startup.SystemInfo

## seniorVersion

```TypeScript
const seniorVersion: number
```

Senior version number, which increments with architecture and feature updates. The value is the second digit in **osFullName**. You are advised to use **deviceInfo.seniorVersion** instead of parsing **osFullName** to obtain the value, facilitating efficiency improvement.

Example: 0

**Since:** 6

<!--Device-deviceInfo-const seniorVersion: number--><!--Device-deviceInfo-const seniorVersion: number-End-->

**System capability:** SystemCapability.Startup.SystemInfo

## serial

```TypeScript
const serial: string
```

Device serial number (SN).

**NOTE**

The device SN can be used as the unique identifier of a device.

**Required permission**: ohos.permission.sec.ACCESS_UDID (for system applications and enterprise applications only)

Example: The SN varies with the device.

**Since:** 6

**Required permissions:** ohos.permission.sec.ACCESS_UDID

<!--Device-deviceInfo-const serial: string--><!--Device-deviceInfo-const serial: string-End-->

**System capability:** SystemCapability.Startup.SystemInfo

## softwareModel

```TypeScript
const softwareModel: string
```

Software model.

Example: <!--RP5-->TAS-AL00<!--RP5End-->

**Since:** 6

<!--Device-deviceInfo-const softwareModel: string--><!--Device-deviceInfo-const softwareModel: string-End-->

**System capability:** SystemCapability.Startup.SystemInfo

## udid

```TypeScript
const udid: string
```

Device UDID.

**NOTE**

The data length is 65 bytes. The UDID can be used as the unique identifier of a device.

**Required permission**: ohos.permission.sec.ACCESS_UDID (for system applications and enterprise applications only)

Example: 9D6AABD147XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXE5536412

**Since:** 7

**Required permissions:** ohos.permission.sec.ACCESS_UDID

<!--Device-deviceInfo-const udid: string--><!--Device-deviceInfo-const udid: string-End-->

**System capability:** SystemCapability.Startup.SystemInfo

## versionId

```TypeScript
const versionId: string
```

Version ID. It consists of the following fields: **deviceType**, **manufacture**, **brand**, **productSeries**,**osFullName**, **productModel**, **softwareModel**, **sdkApiVersion**, **incrementalVersion**, and **buildType**.

Example: wearable/HUAWEI/HUAWEI/TAS/OpenHarmony-5.0.0.1/TAS-AL00/TAS-AL00/12/default/release:nolog

**Since:** 6

<!--Device-deviceInfo-const versionId: string--><!--Device-deviceInfo-const versionId: string-End-->

**System capability:** SystemCapability.Startup.SystemInfo

