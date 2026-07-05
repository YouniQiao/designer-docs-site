# Constants

## deviceType

```TypeScript
const deviceType: string
```

设备类型。详细请参考[deviceTypes标签](docroot://quick-start/module-configuration-file.md#devicetypes标签)。 示例：<!--RP1-->wearable<!--RP1End-->

**Since:** 6

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Startup.SystemInfo

## manufacture

```TypeScript
const manufacture: string
```

设备厂家名称。 示例：HUAWEI

**Since:** 6

**System capability:** SystemCapability.Startup.SystemInfo

## brand

```TypeScript
const brand: string
```

设备品牌名称。 示例：HUAWEI

**Since:** 6

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Startup.SystemInfo

## marketName

```TypeScript
const marketName: string
```

外部产品系列。 示例：<!--RP2-->Mate XX<!--RP2End-->

**Since:** 6

**System capability:** SystemCapability.Startup.SystemInfo

## productSeries

```TypeScript
const productSeries: string
```

产品系列。 示例：<!--RP3-->TAS<!--RP3End-->

**Since:** 6

**System capability:** SystemCapability.Startup.SystemInfo

## productModel

```TypeScript
const productModel: string
```

认证型号。 示例：<!--RP4-->TAS-AL00<!--RP4End-->

**Since:** 6

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Startup.SystemInfo

## productModelAlias

```TypeScript
const productModelAlias: string
```

认证型号别名。 示例：TAS-AL00

**Since:** 14

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Startup.SystemInfo

## softwareModel

```TypeScript
const softwareModel: string
```

内部软件子型号。 示例：<!--RP5-->TAS-AL00<!--RP5End-->

**Since:** 6

**System capability:** SystemCapability.Startup.SystemInfo

## hardwareModel

```TypeScript
const hardwareModel: string
```

硬件版本号。 示例：<!--RP6-->TASA00CVN1<!--RP6End-->

**Since:** 6

**System capability:** SystemCapability.Startup.SystemInfo

## hardwareProfile

```TypeScript
const hardwareProfile: string
```

硬件Profile。 **说明**： 从API version 6 开始支持，从API version 9 开始废弃，建议使用[系统能力SystemCapability](docroot://reference/syscap.md)替代。 示例：default

**Since:** 6

**Deprecated since:** 9

**System capability:** SystemCapability.Startup.SystemInfo

## serial

```TypeScript
const serial: string
```

设备序列号SN(Serial Number)。 **说明**：可作为设备唯一识别码。 ohos.permission.sec.ACCESS_UDID(该权限只允许系统应用及企业定制应用申请) 示例：序列号随设备差异

**Since:** 6

**Required permissions:** 

 ohos.permission.sec.ACCESS_UDID

**System capability:** SystemCapability.Startup.SystemInfo

## bootloaderVersion

```TypeScript
const bootloaderVersion: string
```

Bootloader版本号。 示例：bootloader

**Since:** 6

**System capability:** SystemCapability.Startup.SystemInfo

## abiList

```TypeScript
const abiList: string
```

应用二进制接口（Abi）。 示例：arm64-v8a

**Since:** 6

**System capability:** SystemCapability.Startup.SystemInfo

## securityPatchTag

```TypeScript
const securityPatchTag: string
```

安全补丁级别。 示例：<!--RP7-->2021/01/01<!--RP7End-->

**Since:** 6

**System capability:** SystemCapability.Startup.SystemInfo

## displayVersion

```TypeScript
const displayVersion: string
```

产品版本。 示例：<!--RP8-->XXX X.X.X.X<!--RP8End-->

**Since:** 6

**System capability:** SystemCapability.Startup.SystemInfo

## incrementalVersion

```TypeScript
const incrementalVersion: string
```

差异版本号。 示例：default

**Since:** 6

**System capability:** SystemCapability.Startup.SystemInfo

## osReleaseType

```TypeScript
const osReleaseType: string
```

系统的发布类型，取值为： - Canary：面向特定开发者发布的早期预览版本，不承诺API稳定性。 - Beta：面向开发者公开发布的Beta版本，不承诺API稳定性。 - Release：面向开发者公开发布的正式版本，承诺API稳定性。 示例：<!--RP9-->Canary/Beta/Release<!--RP9End-->

**Since:** 6

**System capability:** SystemCapability.Startup.SystemInfo

## osFullName

```TypeScript
const osFullName: string
```

系统版本，版本格式<!--RP12-->OpenHarmony-x.x.x.x,x为数值。<!--RP12End--> 示例：<!--RP10-->Openharmony-5.0.0.1<!--RP10End-->

**Since:** 6

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Startup.SystemInfo

## majorVersion

```TypeScript
const majorVersion: number
```

Major版本号，随主版本更新增加，值为osFullName中的第一位数值，建议直接使用deviceInfo.majorVersion获取，可提升效率，不建议开发者解析osFullName获取。 示例：5

**Since:** 6

**System capability:** SystemCapability.Startup.SystemInfo

## seniorVersion

```TypeScript
const seniorVersion: number
```

Senior版本号，随局部架构、重大特性增加，值为osFullName中的第二位数值，建议直接使用deviceInfo.seniorVersion获取，可提升效率，不建议开发者自主解析osFullName获取。 示例：0

**Since:** 6

**System capability:** SystemCapability.Startup.SystemInfo

## featureVersion

```TypeScript
const featureVersion: number
```

Feature版本号，标识规划的新特性版本，值为osFullName中的第三位数值，建议直接使用deviceInfo.featureVersion获取，可提升效率，不建议开发者自主解析osFullName获取。 示例：0

**Since:** 6

**System capability:** SystemCapability.Startup.SystemInfo

## buildVersion

```TypeScript
const buildVersion: number
```

Build版本号，标识编译构建的版本号，值为osFullName中的第四位数值，建议直接使用deviceInfo.buildVersion获取，可提升效率，不建议开发者自主解析osFullName获取。 示例：1

**Since:** 6

**System capability:** SystemCapability.Startup.SystemInfo

## sdkApiVersion

```TypeScript
const sdkApiVersion: number
```

系统软件API版本。 示例：12

**Since:** 6

**Atomic service API:** From API version 14 this API can be used in atomic services.

**System capability:** SystemCapability.Startup.SystemInfo

## sdkMinorApiVersion

```TypeScript
const sdkMinorApiVersion: number
```

系统软件Minor API版本。**从** API 26 版本开始，系统API版本格式：sdkApiVersion.sdkMinorApiVersion.sdkPatchApiVersion。 26.0.0 示例：0

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Startup.SystemInfo

## sdkPatchApiVersion

```TypeScript
const sdkPatchApiVersion: number
```

系统软件Patch API版本。**从** API 26 版本开始，系统API版本格式：sdkApiVersion.sdkMinorApiVersion.sdkPatchApiVersion。 26.0.0 示例：0

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Startup.SystemInfo

## firstApiVersion

```TypeScript
const firstApiVersion: number
```

首个版本系统软件API版本。 示例：3

**Since:** 6

**System capability:** SystemCapability.Startup.SystemInfo

## versionId

```TypeScript
const versionId: string
```

版本ID。由deviceType、manufacture、brand、productSeries、osFullName、productModel、softwareModel、sdkApiVersion、 incrementalVersion、buildType拼接组成。 示例：wearable/HUAWEI/HUAWEI/TAS/OpenHarmony-5.0.0.1/TAS-AL00/TAS-AL00/12/default/release:nolog

**Since:** 6

**System capability:** SystemCapability.Startup.SystemInfo

## buildType

```TypeScript
const buildType: string
```

构建类型。 示例：default

**Since:** 6

**System capability:** SystemCapability.Startup.SystemInfo

## buildUser

```TypeScript
const buildUser: string
```

构建用户。 示例：default

**Since:** 6

**System capability:** SystemCapability.Startup.SystemInfo

## buildHost

```TypeScript
const buildHost: string
```

构建主机。 示例：default

**Since:** 6

**System capability:** SystemCapability.Startup.SystemInfo

## buildTime

```TypeScript
const buildTime: string
```

构建时间。 示例：default

**Since:** 6

**System capability:** SystemCapability.Startup.SystemInfo

## buildRootHash

```TypeScript
const buildRootHash: string
```

构建版本Hash。 示例：default

**Since:** 6

**System capability:** SystemCapability.Startup.SystemInfo

## udid

```TypeScript
const udid: string
```

设备Udid。 **说明**：数据长度为65字节。可作为设备唯一识别码。 ohos.permission.sec.ACCESS_UDID(该权限只允许系统应用及企业类应用申请) 示例：9D6AABD147XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXE5536412

**Since:** 7

**Required permissions:** 

 ohos.permission.sec.ACCESS_UDID

**System capability:** SystemCapability.Startup.SystemInfo

## distributionOSName

```TypeScript
const distributionOSName: string
```

发行版系统名称<!--Del-->，由发行方定义<!--DelEnd-->。 示例：OpenHarmony

**Since:** 10

**System capability:** SystemCapability.Startup.SystemInfo

## distributionOSVersion

```TypeScript
const distributionOSVersion: string
```

发行版系统版本号<!--Del-->，由发行方定义<!--DelEnd-->。<!--RP11--><!--RP11End--> 示例：5.0.0

**Since:** 10

**System capability:** SystemCapability.Startup.SystemInfo

## distributionOSApiVersion

```TypeScript
const distributionOSApiVersion: number
```

发行版系统api版本<!--Del-->，由发行方定义<!--DelEnd-->。 示例：50001

**Since:** 10

**System capability:** SystemCapability.Startup.SystemInfo

## distributionOSApiName

```TypeScript
const distributionOSApiName: string
```

发行版系统api版本名称<!--Del-->，由发行方定义<!--DelEnd-->。

**Since:** 13

**System capability:** SystemCapability.Startup.SystemInfo

## distributionOSReleaseType

```TypeScript
const distributionOSReleaseType: string
```

发行版系统类型<!--Del-->，由发行方定义<!--DelEnd-->。 示例：Release

**Since:** 10

**System capability:** SystemCapability.Startup.SystemInfo

## ODID

```TypeScript
const ODID: string
```

开发者匿名设备标识符。 **ODID值会在以下场景重新生成**： 手机恢复出厂设置。 同一设备上同一个开发者(developerId相同)的应用全部卸载后重新安装时。 **ODID生成规则**： 根据签名信息里developerId解析出的groupId生成，developerId规则为groupId.developerId，若无groupId则取整个developerId作为groupId。 同一设备上运行的同一个开发者(developerId相同)的应用，ODID相同。 同一个设备上不同开发者(developerId不同)的应用，ODID不同。 不同设备上同一个开发者(developerId相同)的应用，ODID不同。 不同设备上不同开发者(developerId不同)的应用，ODID不同。 **说明**：数据长度为37字节(包含结束符)。 示例：1234a567-XXXX-XXXX-XXXX-XXXXXXXXXXXX

**Since:** 12

**System capability:** SystemCapability.Startup.SystemInfo

## diskSN

```TypeScript
const diskSN: string
```

硬盘序列号。 **说明** ：该字段只能在2in1设备进行查询，其他设备查询结果为空。 ohos.permission.ACCESS_DISK_PHY_INFO 示例：2502EM400567

**Since:** 15

**Required permissions:** 

 ohos.permission.ACCESS_DISK_PHY_INFO

**System capability:** SystemCapability.Startup.SystemInfo

## performanceClass

```TypeScript
const performanceClass: PerformanceClassLevel
```

描述设备能力等级，基于CPU、内存、存储读写性能和屏幕分辨率等因素综合评估。

**Since:** 19

**System capability:** SystemCapability.Startup.SystemInfo

## chipType

```TypeScript
const chipType: string
```

当前设备CPU芯片型号 示例：xxxxx

**Since:** 21

**System capability:** SystemCapability.Startup.SystemInfo

## bootCount

```TypeScript
const bootCount: number
```

当前设备重启次数，获取失败时返回-1 示例：100

**Since:** 21

**System capability:** SystemCapability.Startup.SystemInfo

## deviceColor

```TypeScript
const deviceColor: string
```

当前设备颜色 示例：gold

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Startup.SystemInfo

