# @ohos.enterprise.common

本模块提供MDM Kit中常用公共能力的纯类型定义，包含枚举类型和数据结构。本模块仅导出类型声明，不包含具体实现逻辑或可执行代码。 > **说明：** > > 本模块接口仅可在Stage模型下使用。

**起始版本：** 22

**系统能力：** SystemCapability.Customization.EnterpriseDeviceManager

## 导入模块

```TypeScript
import { common } from '@kit.MDMKit';
```

## 汇总

### 接口

| 名称 | 描述 |
| --- | --- |
| [ApplicationInstance](arkts-common-applicationinstance-i.md) | 应用的实例数据。 该接口目前在[addUserNonStopApps]{@link @ohos.enterprise.applicationManager:applicationManager.addUserNonStopApps}、 [removeUserNonStopApps]{@link @ohos.enterprise.applicationManager:applicationManager.removeUserNonStopApps}、 [addFreezeExemptedApps]{@link @ohos.enterprise.applicationManager:applicationManager.addFreezeExemptedApps}、 [removeFreezeExemptedApps]{@link @ohos.enterprise.applicationManager:applicationManager.removeFreezeExemptedApps}接口 中作为入参使用。 |
| [InstallationResult](arkts-common-installationresult-i.md) | 应用安装结果。 该对象目前在 [EnterpriseAdminExtensionAbility.onMarketAppInstallResult]{@link @ohos.enterprise.EnterpriseAdminExtensionAbility:EnterpriseAdminExtensionAbility.onMarketAppInstallResult} 作为回调入参使用。 |
| [PolicyChangedEvent](arkts-common-policychangedevent-i.md) | 策略变更事件 |

### 类型

| 名称 | 描述 |
| --- | --- |
| [EnterpriseAdminExtensionContext](arkts-common-enterpriseadminextensioncontext-t.md) | EnterpriseAdminExtensionContext是 [EnterpriseAdminExtensionAbility]{@link @ohos.enterprise.EnterpriseAdminExtensionAbility:EnterpriseAdminExtensionAbility} 的上下文环境，继承自[ExtensionContext]{@link ./application/ExtensionContext:ExtensionContext}。 |

### 枚举

| 名称 | 描述 |
| --- | --- |
| [ManagedPolicy](arkts-common-managedpolicy-e.md) | 企业设备管控策略。 |
| [Result](arkts-common-result-e.md) | 应用安装结果码。 |
| [StartupScene](arkts-common-startupscene-e.md) | 开机向导完成场景。端侧系统在首次切换子用户完成（仅限PC）、OTA升级完成、首次开机完成开机向导时会通过 [onStartupGuideCompleted]{@link @ohos.enterprise.EnterpriseAdminExtensionAbility:EnterpriseAdminExtensionAbility.onStartupGuideCompleted} 回调接口通知设备管理应用。 |

