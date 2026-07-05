# @ohos.update

升级范围：升级整个系统，包括内置资源和预置应用，不包括三方应用。 升级类型：SD卡升级、在线升级、恢复出厂升级。 - SD卡升级依赖升级包和SD卡安装。 - 在线升级依赖设备厂商部署的用于管理升级包的服务器。服务器由设备厂商部署，IP由调用者传入，请求的request接口是固定的，由设备厂商开发。 - 恢复出厂升级对象提供恢复出厂相关接口。 > **说明：** > > 本模块接口为系统接口。

**起始版本：** 9

**系统能力：** SystemCapability.Update.UpdateService

**系统接口：** 此接口为系统接口。

## 导入模块

```TypeScript
import { update } from '@kit.BasicServicesKit';
```

## 汇总

### 函数

| 名称 | 描述 |
| --- | --- |
| <!--DelRow-->[getLocalUpdater](arkts-update-getlocalupdater-f-sys.md#getLocalUpdater-1) | 获取本地升级对象。 |
| <!--DelRow-->[getOnlineUpdater](arkts-update-getonlineupdater-f-sys.md#getOnlineUpdater-1) | 获取在线升级对象。 |
| <!--DelRow-->[getRestorer](arkts-update-getrestorer-f-sys.md#getRestorer-1) | 获取恢复出厂设置对象。 |

### 接口

| 名称 | 描述 |
| --- | --- |
| <!--DelRow-->[BusinessType](arkts-update-businesstype-i-sys.md) | 升级业务类型。 |
| <!--DelRow-->[CheckResult](arkts-update-checkresult-i-sys.md) | 搜包结果。 |
| <!--DelRow-->[ClearOptions](arkts-update-clearoptions-i-sys.md) | 清除异常选项。 |
| <!--DelRow-->[ComponentDescription](arkts-update-componentdescription-i-sys.md) | 组件描述文件。 |
| <!--DelRow-->[CurrentVersionInfo](arkts-update-currentversioninfo-i-sys.md) | 当前版本信息。 |
| <!--DelRow-->[DescriptionInfo](arkts-update-descriptioninfo-i-sys.md) | 版本描述文件信息。 |
| <!--DelRow-->[DescriptionOptions](arkts-update-descriptionoptions-i-sys.md) | 描述文件选项。 |
| <!--DelRow-->[DownloadOptions](arkts-update-downloadoptions-i-sys.md) | 下载选项。 |
| <!--DelRow-->[ErrorMessage](arkts-update-errormessage-i-sys.md) | 错误信息。 |
| <!--DelRow-->[EventClassifyInfo](arkts-update-eventclassifyinfo-i-sys.md) | 事件信息。 |
| <!--DelRow-->[EventInfo](arkts-update-eventinfo-i-sys.md) | 事件信息。 |
| <!--DelRow-->[FactoryResetInfo](arkts-update-factoryresetinfo-i-sys.md) | 恢复出厂设置信息。 |
| <!--DelRow-->[FactoryResetStrategy](arkts-update-factoryresetstrategy-i-sys.md) | 恢复出厂设置策略。 |
| <!--DelRow-->[LocalUpdater](arkts-update-localupdater-i-sys.md) | 提供本地固件更新功能的工具类。 |
| <!--DelRow-->[NewVersionInfo](arkts-update-newversioninfo-i-sys.md) | 新版本数据。 |
| <!--DelRow-->[PauseDownloadOptions](arkts-update-pausedownloadoptions-i-sys.md) | 暂停下载选项。 |
| <!--DelRow-->[Restorer](arkts-update-restorer-i-sys.md) | 提供设备恢复出厂设置功能的工具类。 |
| <!--DelRow-->[ResumeDownloadOptions](arkts-update-resumedownloadoptions-i-sys.md) | 恢复下载选项。 |
| <!--DelRow-->[TaskBody](arkts-update-taskbody-i-sys.md) | 任务数据。 |
| <!--DelRow-->[TaskInfo](arkts-update-taskinfo-i-sys.md) | 任务信息。 |
| <!--DelRow-->[Updater](arkts-update-updater-i-sys.md) | 提供系统在线更新功能的工具类。 |
| <!--DelRow-->[UpgradeFile](arkts-update-upgradefile-i-sys.md) | 升级文件。 |
| <!--DelRow-->[UpgradeInfo](arkts-update-upgradeinfo-i-sys.md) | 升级信息。 |
| <!--DelRow-->[UpgradeOptions](arkts-update-upgradeoptions-i-sys.md) | 升级选项。 |
| <!--DelRow-->[UpgradePeriod](arkts-update-upgradeperiod-i-sys.md) | 升级时间段。 |
| <!--DelRow-->[UpgradePolicy](arkts-update-upgradepolicy-i-sys.md) | 升级策略。 |
| <!--DelRow-->[VersionComponent](arkts-update-versioncomponent-i-sys.md) | 版本组件。 |
| <!--DelRow-->[VersionDigestInfo](arkts-update-versiondigestinfo-i-sys.md) | 版本摘要。 |

### 类型

| 名称 | 描述 |
| --- | --- |
| <!--DelRow-->[UpgradeTaskCallback](arkts-update-upgradetaskcallback-t-sys.md) | 事件回调。 |

### 枚举

| 名称 | 描述 |
| --- | --- |
| <!--DelRow-->[BusinessSubType](arkts-update-businesssubtype-e-sys.md) | 升级类型。 |
| <!--DelRow-->[BusinessVendor](arkts-update-businessvendor-e-sys.md) | 设备厂家。 |
| <!--DelRow-->[ComponentType](arkts-update-componenttype-e-sys.md) | 组件类型。 |
| <!--DelRow-->[DescriptionFormat](arkts-update-descriptionformat-e-sys.md) | 描述文件格式。 |
| <!--DelRow-->[DescriptionType](arkts-update-descriptiontype-e-sys.md) | 描述文件类型。 |
| <!--DelRow-->[EffectiveMode](arkts-update-effectivemode-e-sys.md) | 生效模式。 |
| <!--DelRow-->[EventClassify](arkts-update-eventclassify-e-sys.md) | 事件类型。 |
| <!--DelRow-->[EventId](arkts-update-eventid-e-sys.md) | 事件ID。 |
| <!--DelRow-->[FactoryResetScope](arkts-update-factoryresetscope-e-sys.md) | 恢复出厂设置范围。 |
| <!--DelRow-->[NetType](arkts-update-nettype-e-sys.md) | 网络类型。 |
| <!--DelRow-->[Order](arkts-update-order-e-sys.md) | 升级指令。 |
| <!--DelRow-->[OtaMode](arkts-update-otamode-e-sys.md) | 升级模式。 |
| <!--DelRow-->[UpgradeAction](arkts-update-upgradeaction-e-sys.md) | 升级方式。 |
| <!--DelRow-->[UpgradeStatus](arkts-update-upgradestatus-e-sys.md) | 升级状态。 |

