# ExtensionAbilityType

```TypeScript
export enum ExtensionAbilityType
```

扩展组件的类型。 <!--Table: 30%; 10%; 60%--> <!--RP2--><!--RP2End-->

**Since:** 9

**System capability:** SystemCapability.BundleManager.BundleFramework.Core

## FORM

```TypeScript
FORM = 0
```

[FormExtensionAbility]@ohos.app.form.FormExtensionAbility：卡片扩展能力，提供卡片开发能力。

**Since:** 9

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.BundleManager.BundleFramework.Core

## WORK_SCHEDULER

```TypeScript
WORK_SCHEDULER = 1
```

[WorkSchedulerExtensionAbility]@ohos.WorkSchedulerExtensionAbility：延时任务扩展能力，允许应用在系统闲时执行实时性不高的任务。

**Since:** 9

**System capability:** SystemCapability.BundleManager.BundleFramework.Core

## INPUT_METHOD

```TypeScript
INPUT_METHOD = 2
```

[InputMethodExtensionAbility](../../apis-ime-kit/arkts-apis/arkts-inputmethodextensionability-c.md#InputMethodExtensionAbility)：输入法扩展能力，用于开发输入 法应用。

**Since:** 9

**System capability:** SystemCapability.BundleManager.BundleFramework.Core

## SERVICE

```TypeScript
SERVICE = 3
```

[ServiceExtensionAbility](arkts-serviceextensionability-c-sys.md#ServiceExtensionAbility)：后台服务扩展能力，提供后台运 行并对外提供相应能力。

**Since:** 9

**System capability:** SystemCapability.BundleManager.BundleFramework.Core

## ACCESSIBILITY

```TypeScript
ACCESSIBILITY = 4
```

AccessibilityExtensionAbility：无障碍服务扩展能力，支持访问与操作前台界面。

**Since:** 9

**System capability:** SystemCapability.BundleManager.BundleFramework.Core

## DATA_SHARE

```TypeScript
DATA_SHARE = 5
```

[DataShareExtensionAbility]@ohos.application.DataShareExtensionAbility：数据共享扩展能力，用于对外提供数据读写服务。

**Since:** 9

**System capability:** SystemCapability.BundleManager.BundleFramework.Core

## FILE_SHARE

```TypeScript
FILE_SHARE = 6
```

FileShareExtensionAbility：文件共享扩展能力，用于应用间的文件分享。预留能力，仅系统应用支持。

**Since:** 9

**System capability:** SystemCapability.BundleManager.BundleFramework.Core

## STATIC_SUBSCRIBER

```TypeScript
STATIC_SUBSCRIBER = 7
```

[StaticSubscriberExtensionAbility](../../apis-basic-service-kit/arkts-apis/arkts-staticsubscriberextensionability-c-sys.md#StaticSubscriberExtensionAbility) ：静态广播扩展能力，用于处理静态事件，比如开机事件。

**Since:** 9

**System capability:** SystemCapability.BundleManager.BundleFramework.Core

## WALLPAPER

```TypeScript
WALLPAPER = 8
```

WallpaperExtensionAbility：壁纸扩展能力，用于实现桌面壁纸。预留能力，仅系统应用支持。

**Since:** 9

**System capability:** SystemCapability.BundleManager.BundleFramework.Core

## BACKUP

```TypeScript
BACKUP = 9
```

[BackupExtensionAbility]@ohos.application.BackupExtensionAbility：数据备份扩展能力，提供应用数据的备份恢复能力。

**Since:** 9

**System capability:** SystemCapability.BundleManager.BundleFramework.Core

## WINDOW

```TypeScript
WINDOW = 10
```

[WindowExtensionAbility]@ohos.application.WindowExtensionAbility：界面组合扩展能力，允许系统应用进行跨应用的界面拉起和嵌入。

**Since:** 9

**System capability:** SystemCapability.BundleManager.BundleFramework.Core

## ENTERPRISE_ADMIN

```TypeScript
ENTERPRISE_ADMIN = 11
```

[EnterpriseAdminExtensionAbility](../../apis-mdm-kit/arkts-apis/arkts-enterpriseadminextensionability-c.md#EnterpriseAdminExtensionAbility) ：企业设备管理扩展能力，提供企业管理时处理管理事件的能力。

**Since:** 9

**System capability:** SystemCapability.BundleManager.BundleFramework.Core

## THUMBNAIL

```TypeScript
THUMBNAIL = 13
```

ThumbnailExtensionAbility：文件缩略图扩展能力，用于为文件提供图标缩略图的能力。预留能力，仅系统应用支持。

**Since:** 9

**System capability:** SystemCapability.BundleManager.BundleFramework.Core

## PREVIEW

```TypeScript
PREVIEW = 14
```

PreviewExtensionAbility：文件预览扩展能力，提供文件预览的能力，其他应用可以直接在应用中嵌入显示。预留能力，仅系统应用支持。

**Since:** 9

**System capability:** SystemCapability.BundleManager.BundleFramework.Core

## PRINT

```TypeScript
PRINT = 15
```

PrintExtensionAbility：文件打印扩展能力，提供应用打印照片、文档等办公场景。仅系统应用支持。

**Since:** 10

**System capability:** SystemCapability.BundleManager.BundleFramework.Core

## SHARE

```TypeScript
SHARE = 16
```

[ShareExtensionAbility](arkts-shareextensionability-c.md#ShareExtensionAbility)：提供分享业务能力，为开发者提供基于 UIExtension的分享业务模板。

**Since:** 10

**System capability:** SystemCapability.BundleManager.BundleFramework.Core

## PUSH

```TypeScript
PUSH = 17
```

PushExtensionAbility：推送扩展能力，提供推送场景化消息能力。预留能力，仅系统应用支持。

**Since:** 10

**System capability:** SystemCapability.BundleManager.BundleFramework.Core

## DRIVER

```TypeScript
DRIVER = 18
```

[DriverExtensionAbility]@ohos.app.ability.DriverExtensionAbility：驱动扩展能力，提供外设驱动扩展能力。应用配置了driver类型的 ExtensionAbility后会被视为驱动应用，驱动应用在安装、卸载和恢复时不会区分用户，且创建新用户时也会安装设备上已有的驱动应用。例如，创建子用户时会默认安装主用户已有的驱动应用，在子用户上卸载驱动应用时，主用户上对应 的驱动应用也会同时被卸载。

**Since:** 10

**System capability:** SystemCapability.BundleManager.BundleFramework.Core

## ACTION

```TypeScript
ACTION = 19
```

[ActionExtensionAbility](arkts-actionextensionability-c.md#ActionExtensionAbility)：自定义服务扩展能力，为开发者提供基 于UIExtension的自定义操作业务模板。

**Since:** 10

**System capability:** SystemCapability.BundleManager.BundleFramework.Core

## ADS_SERVICE

```TypeScript
ADS_SERVICE = 20
```

AdsServiceExtensionAbility：广告服务扩展能力，对外提供后台自定义广告业务服务，仅系统应用支持。

**Since:** 11

**System capability:** SystemCapability.BundleManager.BundleFramework.Core

## EMBEDDED_UI

```TypeScript
EMBEDDED_UI = 21
```

[EmbeddedUIExtensionAbility](arkts-embeddeduiextensionability-c.md#EmbeddedUIExtensionAbility)：嵌入式UI 扩展能力，提供跨进程界面嵌入的能力。

**Since:** 12

**System capability:** SystemCapability.BundleManager.BundleFramework.Core

## INSIGHT_INTENT_UI

```TypeScript
INSIGHT_INTENT_UI = 22
```

InsightIntentUIExtensionAbility：为开发者提供能被小艺意图调用，以窗口形态呈现内容的扩展能力。

**Since:** 12

**System capability:** SystemCapability.BundleManager.BundleFramework.Core

## FENCE

```TypeScript
FENCE = 24
```

[FenceExtensionAbility](../../apis-location-kit/arkts-apis/arkts-fenceextensionability-c.md#FenceExtensionAbility)：为开发者提供地理围栏相关的能力，继承自 ExtensionAbility。

**Since:** 18

**System capability:** SystemCapability.BundleManager.BundleFramework.Core

## CALLER_INFO_QUERY

```TypeScript
CALLER_INFO_QUERY = 25
```

CallerInfoQueryExtensionAbility：为开发者提供来去电信息查询能力

**Since:** 19

**System capability:** SystemCapability.BundleManager.BundleFramework.Core

## ASSET_ACCELERATION

```TypeScript
ASSET_ACCELERATION = 26
```

AssetAccelerationExtensionAbility：资源预下载扩展能力，提供在设备闲时状态，进行后台资源预下载的能力。

**Since:** 18

**System capability:** SystemCapability.BundleManager.BundleFramework.Core

## FORM_EDIT

```TypeScript
FORM_EDIT = 27
```

[FormEditExtensionAbility](../../apis-form-kit/arkts-apis/arkts-formeditextensionability-c.md#FormEditExtensionAbility)：为开发者提供卡片编辑的能力， 继承自UIExtensionAbility。

**Since:** 18

**System capability:** SystemCapability.BundleManager.BundleFramework.Core

## DISTRIBUTED

```TypeScript
DISTRIBUTED = 28
```

[DistributedExtensionAbility](../../apis-distributed-service-kit/arkts-apis/arkts-distributedextensionability-c.md#DistributedExtensionAbility)：提供 分布式相关扩展能力，提供分布式创建、销毁、连接的生命周期回调。

**Since:** 20

**System capability:** SystemCapability.BundleManager.BundleFramework.Core

## APP_SERVICE

```TypeScript
APP_SERVICE = 29
```

[AppServiceExtensionAbility](arkts-appserviceextensionability-c.md#AppServiceExtensionAbility)：为企业普通 应用提供后台服务能力。

**Since:** 20

**System capability:** SystemCapability.BundleManager.BundleFramework.Core

## LIVE_FORM

```TypeScript
LIVE_FORM = 30
```

[LiveFormExtensionAbility]@ohos.app.form.LiveFormExtensionAbility：互动卡片相关扩展能力，提供互动卡片创建、销毁的生命周期回调。

**Since:** 20

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.BundleManager.BundleFramework.Core

## SELECTION

```TypeScript
SELECTION = 31
```

[SelectionExtensionAbility](../../apis-basic-service-kit/arkts-apis/arkts-selectionextensionability-c-sys.md#SelectionExtensionAbility)：为开发者提 供划词弹窗能力的ExtensionAbility。 **模型约束**：此接口仅可在Stage模型下使用。

**Since:** 24

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.BundleManager.BundleFramework.Core

## WEB_NATIVE_MESSAGING

```TypeScript
WEB_NATIVE_MESSAGING = 32
```

[WebNativeMessagingExtensionAbility]@ohos.web.WebNativeMessagingExtensionAbility：为开发者提供Web原生消息通信能力的 ExtensionAbility。

**Since:** 21

**System capability:** SystemCapability.BundleManager.BundleFramework.Core

## FAULT_LOG

```TypeScript
FAULT_LOG = 33
```

[FaultLogExtensionAbility](../../apis-performance-analysis-kit/arkts-apis/arkts-faultlogextensionability-c.md#FaultLogExtensionAbility)：提供故障延迟通知的能力。

**Since:** 21

**System capability:** SystemCapability.BundleManager.BundleFramework.Core

## NOTIFICATION_SUBSCRIBER

```TypeScript
NOTIFICATION_SUBSCRIBER = 34
```

[NotificationSubscriberExtensionAbility](../../apis-notification-kit/arkts-apis/arkts-notificationsubscriberextensionability-c.md#NotificationSubscriberExtensionAbility) ：提供通知订阅的相关功能。

**Since:** 22

**System capability:** SystemCapability.BundleManager.BundleFramework.Core

## CRYPTO

```TypeScript
CRYPTO = 35
```

[CryptoExtensionAbility](docroot://security/UniversalKeystoreKit/huks-extension-ability-support-dev.md)：提供外部密钥管理扩 展的相关功能。

**Since:** 22

**System capability:** SystemCapability.BundleManager.BundleFramework.Core

## PARTNER_AGENT

```TypeScript
PARTNER_AGENT = 36
```

[PartnerAgentExtensionAbility]@ohos.FusionConnectivity.PartnerAgentExtensionAbility：基于蓝牙通信技术，提供设备发现与设备下线的 通知功能。 **模型约束**：此接口仅可在Stage模型下使用。

**Since:** 23

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.BundleManager.BundleFramework.Core

## AGENT

```TypeScript
AGENT = 37
```

[AgentExtensionAbility](docroot://reference/apis-ability-kit/js-apis-app-agent-agentExtensionAbility.md)：提供智能体扩展能 力，包括智能体服务的创建、销毁、连接、断开的生命周期回调接口，以及接收客户端所发送数据和安全认证的回调接口。 **模型约束**：此接口仅可在Stage模型下使用。

**Since:** 24

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.BundleManager.BundleFramework.Core

## AGENT_UI

```TypeScript
AGENT_UI = 38
```

[AgentUIExtensionAbility](docroot://reference/apis-ability-kit/js-apis-agent-agentUIExtensionAbility.md)：为开发者提供接入 端侧Agent UI界面显示能力。 **模型约束**：此接口仅可在Stage模型下使用。

**Since:** 24

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.BundleManager.BundleFramework.Core

## MODULAR_OBJECT

```TypeScript
MODULAR_OBJECT = 39
```

[ModularObjectExtensionAbility](docroot://application-models/modular-object-extension-overview.md)：提供应用自身能力开放功能。

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.BundleManager.BundleFramework.Core

## UNSPECIFIED

```TypeScript
UNSPECIFIED = 255
```

不指定类型<!--Del-->，配合 [queryExtensionAbilityInfo接口](arkts-bundlemanager-queryextensionabilityinfo-f-sys.md#queryExtensionAbilityInfo-2) 可以查询所有类型的ExtensionAbility<!--DelEnd-->。

**Since:** 9

**System capability:** SystemCapability.BundleManager.BundleFramework.Core

