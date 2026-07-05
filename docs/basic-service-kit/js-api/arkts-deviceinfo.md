# @ohos.deviceInfo

本模块提供终端设备信息查询，开发者不可配置。 > **说明：** > > 本模块首批接口从API version 6开始支持。后续版本的新增接口，采用上角标单独标记接口的起始版本。 > 部分参数返回值为default的，会在正式发布的版本中配置。 > 本模块接口返回设备常量信息，建议应用只调用一次，不需要频繁调用。

**Since:** 6

**System capability:** SystemCapability.Startup.SystemInfo

## Modules to Import

```TypeScript
import { deviceInfo } from '@kit.BasicServicesKit';
```

## Summary

### Functions

| Name | Description |
| --- | --- |
| [apiAvailable](arkts-deviceinfo-apiavailable-f.md#apiAvailable-1) | 检查指定的API版本在当前设备上是否可用。 此方法提供跨不同OpenHarmony/分布式操作系统版本的兼容性检查。它会根据输入格式和API版本范围自动选择合适的版本检查方法。 |

### Enums

| Name | Description |
| --- | --- |
| [DeviceTypes](arkts-deviceinfo-devicetypes-e.md) | 设备类型枚举值，可用于校验deviceType的返回值。 |
| [PerformanceClassLevel](arkts-deviceinfo-performanceclasslevel-e.md) | 表示设备能力定级的枚举。 |

### Constants

| Name | Description |
| --- | --- |
| [abiList](arkts-deviceinfo-con.md#abiList) | 应用二进制接口（Abi）。 示例：arm64-v8a |
| [bootCount](arkts-deviceinfo-con.md#bootCount) | 当前设备重启次数，获取失败时返回-1 示例：100 |
| [bootloaderVersion](arkts-deviceinfo-con.md#bootloaderVersion) | Bootloader版本号。 示例：bootloader |
| [brand](arkts-deviceinfo-con.md#brand) | 设备品牌名称。 示例：HUAWEI |
| [buildHost](arkts-deviceinfo-con.md#buildHost) | 构建主机。 示例：default |
| [buildRootHash](arkts-deviceinfo-con.md#buildRootHash) | 构建版本Hash。 示例：default |
| [buildTime](arkts-deviceinfo-con.md#buildTime) | 构建时间。 示例：default |
| [buildType](arkts-deviceinfo-con.md#buildType) | 构建类型。 示例：default |
| [buildUser](arkts-deviceinfo-con.md#buildUser) | 构建用户。 示例：default |
| [buildVersion](arkts-deviceinfo-con.md#buildVersion) | Build版本号，标识编译构建的版本号，值为osFullName中的第四位数值，建议直接使用deviceInfo.buildVersion获取，可提升效率，不建议开发者自主解析osFullName获取。 示例：1 |
| [chipType](arkts-deviceinfo-con.md#chipType) | 当前设备CPU芯片型号 示例：xxxxx |
| [deviceColor](arkts-deviceinfo-con.md#deviceColor) | 当前设备颜色 示例：gold |
| [deviceType](arkts-deviceinfo-con.md#deviceType) | 设备类型。详细请参考[deviceTypes标签](docroot://quick-start/module-configuration-file.md#devicetypes标签)。 示例：<!--RP1-->wearable<!--RP1End--> |
| [diskSN](arkts-deviceinfo-con.md#diskSN) | 硬盘序列号。 **说明** ：该字段只能在2in1设备进行查询，其他设备查询结果为空。 ohos.permission.ACCESS_DISK_PHY_INFO 示例：2502EM400567 |
| [displayVersion](arkts-deviceinfo-con.md#displayVersion) | 产品版本。 示例：<!--RP8-->XXX X.X.X.X<!--RP8End--> |
| [distributionOSApiName](arkts-deviceinfo-con.md#distributionOSApiName) | 发行版系统api版本名称<!--Del-->，由发行方定义<!--DelEnd-->。 |
| [distributionOSApiVersion](arkts-deviceinfo-con.md#distributionOSApiVersion) | 发行版系统api版本<!--Del-->，由发行方定义<!--DelEnd-->。 示例：50001 |
| [distributionOSName](arkts-deviceinfo-con.md#distributionOSName) | 发行版系统名称<!--Del-->，由发行方定义<!--DelEnd-->。 示例：OpenHarmony |
| [distributionOSReleaseType](arkts-deviceinfo-con.md#distributionOSReleaseType) | 发行版系统类型<!--Del-->，由发行方定义<!--DelEnd-->。 示例：Release |
| [distributionOSVersion](arkts-deviceinfo-con.md#distributionOSVersion) | 发行版系统版本号<!--Del-->，由发行方定义<!--DelEnd-->。<!--RP11--><!--RP11End--> 示例：5.0.0 |
| [featureVersion](arkts-deviceinfo-con.md#featureVersion) | Feature版本号，标识规划的新特性版本，值为osFullName中的第三位数值，建议直接使用deviceInfo.featureVersion获取，可提升效率，不建议开发者自主解析osFullName获取。 示例：0 |
| [firstApiVersion](arkts-deviceinfo-con.md#firstApiVersion) | 首个版本系统软件API版本。 示例：3 |
| [hardwareModel](arkts-deviceinfo-con.md#hardwareModel) | 硬件版本号。 示例：<!--RP6-->TASA00CVN1<!--RP6End--> |
| [hardwareProfile](arkts-deviceinfo-con.md#hardwareProfile) | 硬件Profile。 **说明**： 从API version 6 开始支持，从API version 9 开始废弃，建议使用[系统能力SystemCapability](docroot://reference/syscap.md)替代。 示例：default |
| [incrementalVersion](arkts-deviceinfo-con.md#incrementalVersion) | 差异版本号。 示例：default |
| [majorVersion](arkts-deviceinfo-con.md#majorVersion) | Major版本号，随主版本更新增加，值为osFullName中的第一位数值，建议直接使用deviceInfo.majorVersion获取，可提升效率，不建议开发者解析osFullName获取。 示例：5 |
| [manufacture](arkts-deviceinfo-con.md#manufacture) | 设备厂家名称。 示例：HUAWEI |
| [marketName](arkts-deviceinfo-con.md#marketName) | 外部产品系列。 示例：<!--RP2-->Mate XX<!--RP2End--> |
| [ODID](arkts-deviceinfo-con.md#ODID) | 开发者匿名设备标识符。 **ODID值会在以下场景重新生成**： 手机恢复出厂设置。 同一设备上同一个开发者(developerId相同)的应用全部卸载后重新安装时。 **ODID生成规则**： 根据签名信息里developerId解析出的groupId生成，developerId规则为groupId.developerId，若无groupId则取整个developerId作为groupId。 同一设备上运行的同一个开发者(developerId相同)的应用，ODID相同。 同一个设备上不同开发者(developerId不同)的应用，ODID不同。 不同设备上同一个开发者(developerId相同)的应用，ODID不同。 不同设备上不同开发者(developerId不同)的应用，ODID不同。 **说明**：数据长度为37字节(包含结束符)。 示例：1234a567-XXXX-XXXX-XXXX-XXXXXXXXXXXX |
| [osFullName](arkts-deviceinfo-con.md#osFullName) | 系统版本，版本格式<!--RP12-->OpenHarmony-x.x.x.x,x为数值。<!--RP12End--> 示例：<!--RP10-->Openharmony-5.0.0.1<!--RP10End--> |
| [osReleaseType](arkts-deviceinfo-con.md#osReleaseType) | 系统的发布类型，取值为： - Canary：面向特定开发者发布的早期预览版本，不承诺API稳定性。 - Beta：面向开发者公开发布的Beta版本，不承诺API稳定性。 - Release：面向开发者公开发布的正式版本，承诺API稳定性。 示例：<!--RP9-->Canary/Beta/Release<!--RP9End--> |
| [performanceClass](arkts-deviceinfo-con.md#performanceClass) | 描述设备能力等级，基于CPU、内存、存储读写性能和屏幕分辨率等因素综合评估。 |
| [productModel](arkts-deviceinfo-con.md#productModel) | 认证型号。 示例：<!--RP4-->TAS-AL00<!--RP4End--> |
| [productModelAlias](arkts-deviceinfo-con.md#productModelAlias) | 认证型号别名。 示例：TAS-AL00 |
| [productSeries](arkts-deviceinfo-con.md#productSeries) | 产品系列。 示例：<!--RP3-->TAS<!--RP3End--> |
| [sdkApiVersion](arkts-deviceinfo-con.md#sdkApiVersion) | 系统软件API版本。 示例：12 |
| [sdkMinorApiVersion](arkts-deviceinfo-con.md#sdkMinorApiVersion) | 系统软件Minor API版本。**从** API 26 版本开始，系统API版本格式：sdkApiVersion.sdkMinorApiVersion.sdkPatchApiVersion。 26.0.0 示例：0 |
| [sdkPatchApiVersion](arkts-deviceinfo-con.md#sdkPatchApiVersion) | 系统软件Patch API版本。**从** API 26 版本开始，系统API版本格式：sdkApiVersion.sdkMinorApiVersion.sdkPatchApiVersion。 26.0.0 示例：0 |
| [securityPatchTag](arkts-deviceinfo-con.md#securityPatchTag) | 安全补丁级别。 示例：<!--RP7-->2021/01/01<!--RP7End--> |
| [seniorVersion](arkts-deviceinfo-con.md#seniorVersion) | Senior版本号，随局部架构、重大特性增加，值为osFullName中的第二位数值，建议直接使用deviceInfo.seniorVersion获取，可提升效率，不建议开发者自主解析osFullName获取。 示例：0 |
| [serial](arkts-deviceinfo-con.md#serial) | 设备序列号SN(Serial Number)。 **说明**：可作为设备唯一识别码。 ohos.permission.sec.ACCESS_UDID(该权限只允许系统应用及企业定制应用申请) 示例：序列号随设备差异 |
| [softwareModel](arkts-deviceinfo-con.md#softwareModel) | 内部软件子型号。 示例：<!--RP5-->TAS-AL00<!--RP5End--> |
| [udid](arkts-deviceinfo-con.md#udid) | 设备Udid。 **说明**：数据长度为65字节。可作为设备唯一识别码。 ohos.permission.sec.ACCESS_UDID(该权限只允许系统应用及企业类应用申请) 示例：9D6AABD147XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXE5536412 |
| [versionId](arkts-deviceinfo-con.md#versionId) | 版本ID。由deviceType、manufacture、brand、productSeries、osFullName、productModel、softwareModel、sdkApiVersion、 incrementalVersion、buildType拼接组成。 示例：wearable/HUAWEI/HUAWEI/TAS/OpenHarmony-5.0.0.1/TAS-AL00/TAS-AL00/12/default/release:nolog |

