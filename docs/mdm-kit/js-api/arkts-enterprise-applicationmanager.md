# @ohos.enterprise.applicationManager

本模块提供应用管理能力，包括添加应用运行禁止名单、获取应用运行禁止名单、移除应用运行禁止名单等。 > **说明：** > > 本模块接口仅可在Stage模型下使用。 > > 本模块接口仅对设备管理应用开放，且调用接口前需激活设备管理应用，具体请参考[MDM Kit开发指南](docroot://mdm/mdm-kit-guide.md)。 > [applicationManager.isAppKioskAllowed]{@link applicationManager.isAppKioskAllowed}除外，该接口对所有应用开放。

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
| [addAllowedDistributeAbilityConnBundles](arkts-applicationmanager-addalloweddistributeabilityconnbundles-f.md#addAllowedDistributeAbilityConnBundles-1) | 为指定用户添加允许使用分布式能力的应用名单，名单中的应用在指定用户下可以使用指定的分布式能力。 当前支持的分布式类型有：[协同服务]{@link applicationManager.ServiceType}。 > **说明：** > > 1.如果要设置允许使用协同服务的应用名单，在调用本接口前必须已经通过 > [setDisallowedPolicyForAccount]{@link @ohos.enterprise.restrictions:restrictions.setDisallowedPolicyForAccount(admin: Want, feature: string, disallow: boolean, accountId: number)} > 接口禁用了向其他设备传输数据的设备间单向传输数据的能力，否则会抛出错误码9201043。 > 2.当向其他设备传输数据的设备间单向传输数据的能力被解除禁用时，通过本接口设置的允许使用协同服务的应用名单会被同步清除。 |
| [addAllowedNotificationBundles](arkts-applicationmanager-addallowednotificationbundles-f.md#addAllowedNotificationBundles-1) | 添加允许发送通知的应用名单。设置通知白名单后，不在此名单内的应用无法发送通知。 > **说明：** > > 1.如果Kiosk模式与通知白名单策略同时设置，那么设置Kiosk模式的应用与通知白名单中的应用都可以发送通知。 > 2.当已经通过 > [setDisallowedPolicy]{@link @ohos.enterprise.restrictions:restrictions.setDisallowedPolicy(admin: Want, feature: string, disallow: boolean)} > 设置了禁用设备通知能力时，再通过本接口设置通知白名单，会抛出错误码9200010。 > 3.通知白名单对系统服务不生效，系统服务始终可以发送通知。系统应用受通知白名单管控。 > 4.支持跨用户设置，设置后跨用户立即生效。 |
| [addAllowedRunningBundles](arkts-applicationmanager-addallowedrunningbundles-f.md#addAllowedRunningBundles-1) | 添加应用至应用运行允许名单，添加至允许名单的应用允许在指定用户下运行，不在允许名单的应用不允许在指定用户下运行。 > **说明：** > |
| [addAutoStartApps](arkts-applicationmanager-addautostartapps-f.md#addAutoStartApps-1) | 为当前用户添加开机自启动应用名单。通过本接口添加至自启动名单的应用，禁止用户在设备上手动取消应用自启动<!--RP4--><!--RP4End-->，但可通过 [removeAutoStartApps]{@link applicationManager.removeAutoStartApps(admin: Want, autoStartApps: Array<Want>)}接口将应用从自 启动名单中移除。 |
| [addAutoStartApps](arkts-applicationmanager-addautostartapps-f.md#addAutoStartApps-2) | 为指定用户添加开机自启动应用名单，并设置是否禁止该用户手动取消应用自启动<!--RP4--><!--RP4End-->。 通过本接口、[addAutoStartApps]{@link applicationManager.addAutoStartApps(admin: Want, autoStartApps: Array<Want>)}接口均可添加开 机自启动应用名单，两个接口的设置可同时生效。同一用户下，开机自启动应用名单最多支持包含10个应用。例如：若当前名单中已有3个应用，则最多还能通过本接口为当前用户添加7个应用。 |
| <!--DelRow-->[addDisallowedRunningBundles](arkts-applicationmanager-adddisallowedrunningbundles-f-sys.md#addDisallowedRunningBundles-1) | 添加应用至应用运行禁止名单，添加至禁止名单的应用不允许在当前用户下运行，不在禁止名单中的应用允许运行。使用callback异步回调。从API version 21开始，如果应用运行允许名单 [addallowedRunningBundles]{@link @ohos.enterprise.applicationManager:applicationManager.addAllowedRunningBundles}非空 ，就不能再通过本接口添加应用运行禁止名单，否则会报9200010冲突错误码。 |
| <!--DelRow-->[addDisallowedRunningBundles](arkts-applicationmanager-adddisallowedrunningbundles-f-sys.md#addDisallowedRunningBundles-2) | 添加应用至应用运行禁止名单，添加至禁止名单的应用不允许在指定用户（通过userId指定）下运行，不在禁止名单中的应用允许运行。使用callback异步回调。从API version 21开始，如果应用运行允许名单 [addallowedRunningBundles]{@link @ohos.enterprise.applicationManager:applicationManager.addAllowedRunningBundles}非空 ，就不能再通过本接口添加应用运行禁止名单，否则会报9200010冲突错误码。 |
| <!--DelRow-->[addDisallowedRunningBundles](arkts-applicationmanager-adddisallowedrunningbundles-f-sys.md#addDisallowedRunningBundles-3) | 添加应用至应用运行禁止名单，添加至禁止名单的应用不允许在当前/指定用户下运行。使用Promise异步回调。从API version 21开始，如果应用运行允许名单 [addallowedRunningBundles]{@link @ohos.enterprise.applicationManager:applicationManager.addAllowedRunningBundles}非空 ，就不能再通过本接口添加应用运行禁止名单，否则会报9200010冲突错误码。 |
| [addDisallowedRunningBundlesSync](arkts-applicationmanager-adddisallowedrunningbundlessync-f.md#addDisallowedRunningBundlesSync-1) | 添加应用至应用运行禁止名单，添加至禁止名单的应用不允许在当前/指定用户下运行。从API version 21开始，如果应用运行允许名单 [addallowedRunningBundles]{@link applicationManager.addAllowedRunningBundles}非空，就不能再通过本接口添加应用运行禁止名单，否则会报9200010冲突错误 码。 |
| [addDockApp](arkts-applicationmanager-adddockapp-f.md#addDockApp-1) | 根据位置索引添加应用到PC/2in1设备的底部快捷栏，添加后用户可以通过点击快捷栏的应用图标直接启动应用，应用图标为应用在桌面上显示的默认图标。 > **说明：** > > 1.若位置0或1上已存在“应用中心”或“任务中心”，则尝试向该位置添加应用会返回错误码9201019；若该位置为其他应用，则可正常添加。 > > 2.以下应用不可通过本接口添加到快捷栏：“应用中心”、“任务中心”、“文件管理”、“回收站”。 > > 3.仅支持添加具有应用程序入口（即有图标）的应用，无图标的应用不支持添加。 > > 4.仅支持配置当前用户下的快捷栏，每个用户的快捷栏最多可容纳100个应用。 > > 5.在已有应用的位置插入新应用时，新应用将直接占用该位置，原应用及其后的应用依次向后顺移一位。 > > 6.若不传index参数，或传入的index值大于快捷栏当前应用数量，则新应用默认追加到快捷栏末尾。 > > 7.通过本接口添加应用到快捷栏后，用户可以手动移除或调整应用的位置。 |
| [addFreezeExemptedApps](arkts-applicationmanager-addfreezeexemptedapps-f.md#addFreezeExemptedApps-1) | 为指定用户添加后台防冻结应用名单，仅可对已安装应用设置该策略，该策略重启后失效。若参数列表中存在未安装应用，则返回9200012错误码。若设置策略后，名单中有应用被卸载，则卸载的应用将从名单中移除。若添加已存在于名单中的应用，返回 成功，但已设置策略名单中不会重复添加该应用。 冻结操作：对目标应用的挂起、软件资源代理、硬件资源代理和高功耗管控等操作。 |
| [addHideLauncherIcon](arkts-applicationmanager-addhidelaunchericon-f.md#addHideLauncherIcon-1) | 添加隐藏桌面应用图标名单。 > **说明：** > > 1、本接口仅支持隐藏当前用户的桌面应用图标，不支持隐藏应用卡片。 > > 2、如果被隐藏的应用有应用分身，会同步隐藏应用分身。 > > 3、不能把桌面所有应用都添加到隐藏名单中，否则所有应用都会显示到桌面上。 |
| [addKeepAliveApps](arkts-applicationmanager-addkeepaliveapps-f.md#addKeepAliveApps-1) | 添加保活应用名单，添加后将自动保活应用进程。在开机和应用被杀死后，由系统主动拉起应用进程。<!--RP7--><!--RP7End--> 通过本接口添加至保活名单的应用，禁止用户在设备上手动取消保活<!--RP6--><!--RP6End-->，但可通过 [removeKeepAliveApps]{@link applicationManager.removeKeepAliveApps}接口将应用从保活名单中移除。 如果将应用添加至应用禁止运行名单[addDisallowedRunningBundlesSync]{@link applicationManager.addDisallowedRunningBundlesSync}，就不能将应用添 加至保活应用名单，否则会报9200010冲突错误码。 如果需要在Phone/Tablet设备使用类似功能，可以调用[addUserNonStopApps]{@link applicationManager.addUserNonStopApps}或者 [addFreezeExemptedApps]{@link applicationManager.addFreezeExemptedApps}接口，具体功能请参考相关文档。 |
| [addKeepAliveApps](arkts-applicationmanager-addkeepaliveapps-f.md#addKeepAliveApps-2) | 添加保活应用名单，并设置是否禁止用户手动取消保活，添加后将自动保活应用进程。在开机和应用被杀死后，由系统主动拉起应用进程。 通过本接口、 [addKeepAliveApps]{@link applicationManager.addKeepAliveApps(admin: Want, bundleNames: Array<string>, accountId: number)} 接口均可添加保活应用名单，两个接口的设置可同时生效。同一用户下，保活应用名单最多支持包含5个应用。例如：若当前名单中已有3个应用，则最多还能通过本接口为当前用户添加2个应用。 如果通过[addDisallowedRunningBundlesSync]{@link applicationManager.addDisallowedRunningBundlesSync}接口将应用添加至应用禁止运行名单，就不能 将应用添加至保活应用名单，否则会报9200010冲突错误码。 如果需要在Phone/Tablet设备使用类似功能，可以调用[addUserNonStopApps]{@link applicationManager.addUserNonStopApps}或者 [addFreezeExemptedApps]{@link applicationManager.addFreezeExemptedApps}接口，具体功能请参考相关文档。 |
| [addUserNonStopApps](arkts-applicationmanager-addusernonstopapps-f.md#addUserNonStopApps-1) | 为指定用户添加不可关停应用名单，仅可对已安装应用设置该策略。若参数列表中存在未安装应用，则返回9200012错误码。若设置策略后，名单中有应用被卸载，则卸载的应用将从名单中移除。若添加已存在于名单中的应用，返回成功，但已设置策略名 单中不会重复添加该应用。 不可关停应用在Phone和Tablet设备的效果：用户不能在任务中心上滑关闭应用；在设置-应用和元服务中点击应用名称进入详情页面后，页面中的强行停止按钮呈灰色不可用，页面中的停用按钮功能无效。 不可关停应用在PC/2in1设备的效果：用户在设置-应用和元服务中点击应用名称进入详情页面后，页面中的强行停止按钮呈灰色不可用，页面中的停用按钮功能无效。 |
| [clearUpApplicationData](arkts-applicationmanager-clearupapplicationdata-f.md#clearUpApplicationData-1) | 清除应用产生的所有数据。 |
| [getAllowedDistributeAbilityConnBundles](arkts-applicationmanager-getalloweddistributeabilityconnbundles-f.md#getAllowedDistributeAbilityConnBundles-1) | 获取指定用户下允许使用指定类型的分布式能力的应用名单。 |
| [getAllowedKioskApps](arkts-applicationmanager-getallowedkioskapps-f.md#getAllowedKioskApps-1) | 获取允许在Kiosk模式下运行的应用。 |
| [getAllowedNotificationBundles](arkts-applicationmanager-getallowednotificationbundles-f.md#getAllowedNotificationBundles-1) | 获取允许发送通知的应用名单。 |
| [getAllowedRunningBundles](arkts-applicationmanager-getallowedrunningbundles-f.md#getAllowedRunningBundles-1) | 获取指定用户下的应用运行允许名单。 |
| [getApplicationWindowStates](arkts-applicationmanager-getapplicationwindowstates-f.md#getApplicationWindowStates-1) | 查询应用窗口状态 |
| [getAutoStartApps](arkts-applicationmanager-getautostartapps-f.md#getAutoStartApps-1) | 查询当前用户开机自启动应用名单。 |
| [getAutoStartApps](arkts-applicationmanager-getautostartapps-f.md#getAutoStartApps-2) | 查询指定用户下的开机自启动应用名单。 |
| <!--DelRow-->[getDisallowedRunningBundles](arkts-applicationmanager-getdisallowedrunningbundles-f-sys.md#getDisallowedRunningBundles-1) | 获取当前用户下的应用运行禁止名单。使用callback异步回调。 |
| <!--DelRow-->[getDisallowedRunningBundles](arkts-applicationmanager-getdisallowedrunningbundles-f-sys.md#getDisallowedRunningBundles-2) | 获取指定用户（通过userId指定）下的应用运行禁止名单。使用callback异步回调。 |
| <!--DelRow-->[getDisallowedRunningBundles](arkts-applicationmanager-getdisallowedrunningbundles-f-sys.md#getDisallowedRunningBundles-3) | 获取当前/指定用户下的应用运行禁止名单，使用Promise异步回调。 |
| [getDisallowedRunningBundlesSync](arkts-applicationmanager-getdisallowedrunningbundlessync-f.md#getDisallowedRunningBundlesSync-1) | 获取当前/指定用户下的应用运行禁止名单。 |
| [getDockApps](arkts-applicationmanager-getdockapps-f.md#getDockApps-1) | 获取当前快捷栏中应用信息的列表。 |
| [getFreezeExemptedApps](arkts-applicationmanager-getfreezeexemptedapps-f.md#getFreezeExemptedApps-1) | 获取当前设备下所有用户后台防冻结应用名单。 |
| [getHideLauncherIcon](arkts-applicationmanager-gethidelaunchericon-f.md#getHideLauncherIcon-1) | 查询当前用户下隐藏桌面应用图标名单。 |
| [getKeepAliveApps](arkts-applicationmanager-getkeepaliveapps-f.md#getKeepAliveApps-1) | 获取保活应用包名。 |
| [getUserNonStopApps](arkts-applicationmanager-getusernonstopapps-f.md#getUserNonStopApps-1) | 获取当前设备下所有用户不可关停应用名单。 |
| [isAbilityDisabled](arkts-applicationmanager-isabilitydisabled-f.md#isAbilityDisabled-1) | 获取指定应用（系统应用和三方应用均支持）的Ability组件是否被禁用。 |
| [isAppKioskAllowed](arkts-applicationmanager-isappkioskallowed-f.md#isAppKioskAllowed-1) | 查询某应用是否允许在Kiosk模式下运行。 |
| [isModifyAutoStartAppsDisallowed](arkts-applicationmanager-ismodifyautostartappsdisallowed-f.md#isModifyAutoStartAppsDisallowed-1) | 查询指定用户是否禁止取消应用自启动。 |
| [isModifyKeepAliveAppsDisallowed](arkts-applicationmanager-ismodifykeepaliveappsdisallowed-f.md#isModifyKeepAliveAppsDisallowed-1) | 查询应用是否禁止取消保活。 |
| [publishFormToDesktop](arkts-applicationmanager-publishformtodesktop-f.md#publishFormToDesktop-1) | 卡片加桌 |
| [queryBundleStatsInfos](arkts-applicationmanager-querybundlestatsinfos-f.md#queryBundleStatsInfos-1) | 查询指定用户账户在给定时间段内，各应用在前台运行的累计时长统计信息。查询的最小粒度是天，调用时需要传入起始时间（startTime）、结束时间（endTime）以及目标用户账户ID（accountId）。请求参数startTime 和endTime为毫秒级时间戳，支持调用方传入自定义值，startTime默认取当天的00:00:00.000，endTime默认取当天的24:00:00.000（即次日零点）。请求参数接口返回BundleStatsInfo数组， 每个元素包含一个应用的包名，其分身索引值及其对应时间段内的前台使用时长（毫秒级时间戳）。若startTime为0，则表示从设备首次开机的时间开始查询。若起始时间晚于结束时间，接口将返回错误码9200012。 |
| [queryTrafficStats](arkts-applicationmanager-querytrafficstats-f.md#queryTrafficStats-1) | 查询当前用户下指定应用在特定时间段内使用流量情况。使用Promise异步回调。 > **说明：** > > 传入的网络类型（networkInfo.type）仅支持蜂窝网络（connection.NetBearType.BEARER_CELLULAR）和Wi-Fi网络（ > connection.NetBearType.BEARER_WIFI）。若传入其他值，接口会返回错误码9200012。 > > 传入的起始时间（networkInfo.startTime）、结束时间（networkInfo.endTime）为秒级时间戳。若传入的起始时间、结束时间为负数，或起始时间大于结束时间，接口会返回错误码9200012。 > > 传入的用户ID（accountId）非当前用户时，接口会返回错误码9200012。 > > 建议查询的时间间隔（结束时间-起始时间）最小为1天，最大为30天。时间间隔太小，查询结果可能不准确。时间间隔太大，查询耗时会很长。 |
| [removeAllowedDistributeAbilityConnBundles](arkts-applicationmanager-removealloweddistributeabilityconnbundles-f.md#removeAllowedDistributeAbilityConnBundles-1) | 为指定用户移除允许使用分布式能力的应用名单。移除后，若名单中还有剩余的应用，则仅名单中的应用在指定用户下可以使用指定类型的分布式能力；若名单中已被清空，无剩余的应用，则所有应用在指定用户下都不允许使用指定类型的分布式能力。 |
| [removeAllowedNotificationBundles](arkts-applicationmanager-removeallowednotificationbundles-f.md#removeAllowedNotificationBundles-1) | 从允许发送通知的应用名单中移除应用。 |
| [removeAllowedRunningBundles](arkts-applicationmanager-removeallowedrunningbundles-f.md#removeAllowedRunningBundles-1) | 将应用从指定用户下的应用运行允许名单中移除。 |
| [removeAutoStartApps](arkts-applicationmanager-removeautostartapps-f.md#removeAutoStartApps-1) | 为当前用户删除开机自启动应用名单。 |
| [removeAutoStartApps](arkts-applicationmanager-removeautostartapps-f.md#removeAutoStartApps-2) | 删除指定用户的开机自启动应用名单中的指定应用。 |
| <!--DelRow-->[removeDisallowedRunningBundles](arkts-applicationmanager-removedisallowedrunningbundles-f-sys.md#removeDisallowedRunningBundles-1) | 移除在应用运行禁止名单中的应用，在禁止名单存在的情况下，在应用运行禁止名单中的应用不允许在当前用户下运行。使用callback异步回调。 |
| <!--DelRow-->[removeDisallowedRunningBundles](arkts-applicationmanager-removedisallowedrunningbundles-f-sys.md#removeDisallowedRunningBundles-2) | 移除在应用运行禁止名单中的应用，在禁止名单存在的情况下，在应用运行禁止名单中的应用不允许在指定用户（通过userId指定）下运行。使用callback异步回调。 |
| <!--DelRow-->[removeDisallowedRunningBundles](arkts-applicationmanager-removedisallowedrunningbundles-f-sys.md#removeDisallowedRunningBundles-3) | 移除当前/指定用户在应用运行禁止名单中的应用，使用Promise异步回调。 |
| [removeDisallowedRunningBundlesSync](arkts-applicationmanager-removedisallowedrunningbundlessync-f.md#removeDisallowedRunningBundlesSync-1) | 将应用从当前/指定用户下的应用运行禁止名单中移除。 |
| [removeDockApp](arkts-applicationmanager-removedockapp-f.md#removeDockApp-1) | 从快捷栏中移除应用。 > **说明：** > > 以下应用不可通过本接口从快捷栏中移除：“应用中心”、“任务中心”、“文件管理”、“回收站”，否则报错9201018错误码。 > **说明** > 以下应用不可通过本接口从快捷栏中移除：“应用中心”、“任务中心”、“文件管理”、“回收站”，否则报错9201018错误码。 |
| [removeFreezeExemptedApps](arkts-applicationmanager-removefreezeexemptedapps-f.md#removeFreezeExemptedApps-1) | 为指定用户删除后台防冻结应用名单。执行删除策略时，若参数列表中包含未安装应用，删除操作仍能成功执行；已安装的应用将被删除，未安装的应用不影响删除操作。 |
| [removeHideLauncherIcon](arkts-applicationmanager-removehidelaunchericon-f.md#removeHideLauncherIcon-1) | 取消隐藏桌面应用图标名单。 > **说明：** > > 取消隐藏的应用会从桌面第2屏开始找空位显示；如果第2~18屏无空位，则在第1屏找空位；如果第1屏无空位，则在第2屏第1个应用的位置创建小文件夹放置应用。 |
| [removeKeepAliveApps](arkts-applicationmanager-removekeepaliveapps-f.md#removeKeepAliveApps-1) | 移除保活应用名单中的指定应用。 |
| [removeUserNonStopApps](arkts-applicationmanager-removeusernonstopapps-f.md#removeUserNonStopApps-1) | 为指定用户删除不可关停应用名单。执行删除策略时，若参数列表中包含未安装应用，删除操作仍能成功执行；已安装的应用将被删除，未安装的应用不影响删除操作。 |
| [setAbilityDisabled](arkts-applicationmanager-setabilitydisabled-f.md#setAbilityDisabled-1) | 设置是否禁用指定应用（系统应用和三方应用均支持）的Ability组件。当前仅支持UIAbility类型，禁用后无法拉起此Ability组件的用户界面。 |
| [setAllowedKioskApps](arkts-applicationmanager-setallowedkioskapps-f.md#setAllowedKioskApps-1) | 设置允许在Kiosk模式下运行的应用。 Kiosk模式为系统层面提供的一种应用运行模式，该模式下会将设备锁定在单个应用或者一组应用运行，同时对锁屏状态、状态栏、手势操作和关键功能进行控制，防止用户在设备上启动其它应用或执行其它操作。 |
| [setKioskFeatures](arkts-applicationmanager-setkioskfeatures-f.md#setKioskFeatures-1) | 设置Kiosk模式的特征。通过本接口可以控制在Kiosk模式下能否进入通知中心、控制中心。 从API version 24开始，新增支持设置是否允许底部上滑进入最近任务栏，左滑或右滑悬停展示侧边DOCK栏。 在非Kiosk模式下，本接口可以正常调用，但是不会生效，进入Kiosk模式后才会生效。 |

### Interfaces

| Name | Description |
| --- | --- |
| [BundleStatsInfo](arkts-applicationmanager-bundlestatsinfo-i.md) | 应用包统计信息。 |
| [DockInfo](arkts-applicationmanager-dockinfo-i.md) | 快捷栏中的应用信息。 |
| [WindowStateInfo](arkts-applicationmanager-windowstateinfo-i.md) | 窗口状态信息 |

### Enums

| Name | Description |
| --- | --- |
| [KioskFeature](arkts-applicationmanager-kioskfeature-e.md) | Kiosk模式的特征。 |
| [ServiceType](arkts-applicationmanager-servicetype-e.md) | 分布式能力类型。 |
| [WindowState](arkts-applicationmanager-windowstate-e.md) | 窗口状态 |

