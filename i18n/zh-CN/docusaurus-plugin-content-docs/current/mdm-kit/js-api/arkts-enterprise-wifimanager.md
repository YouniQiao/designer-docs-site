# @ohos.enterprise.wifiManager

本模块提供企业设备Wi-Fi管理能力，包括查询Wi-Fi开启状态等。 > **说明：** > > 本模块接口仅可在Stage模型下使用。 > > 本模块接口仅对设备管理应用开放，且调用接口前需激活设备管理应用，具体请参考[MDM Kit开发指南](docroot://mdm/mdm-kit-guide.md)。 > > 全局通用限制类策略由restrictions统一提供，若要全局禁用Wi-Fi，请参考 > [@ohos.enterprise.restrictions（限制类策略）]{@link @ohos.enterprise.restrictions:restrictions}。

**起始版本：** 10

**系统能力：** SystemCapability.Customization.EnterpriseDeviceManager

## 导入模块

```TypeScript
import { wifiManager } from '@kit.MDMKit';
```

## 汇总

### 函数

| 名称 | 描述 |
| --- | --- |
| [addAllowedWifiList](arkts-wifimanager-addallowedwifilist-f.md#addAllowedWifiList-1) | 添加Wi-Fi允许名单。添加允许名单后当前设备仅允许连接该名单下的Wi-Fi。 以下情况下，调用本接口会报策略冲突： 1. 已经通过[setDisallowedPolicy]{@link @ohos.enterprise.restrictions:restrictions.setDisallowedPolicy(admin: Want, feature: string, disallow: boolean)}接口禁用了设备Wi-Fi能力。通过[setDisallowedPolicy]{@link @ohos.enterprise.restrictions:restrictions.setDisallowedPolicy(admin: Want, feature: string, disallow: boolean)}解除Wi-Fi禁用后，可解除冲突。 2. 已经通过[addDisallowedWifiList]{@link wifiManager.addDisallowedWifiList}接口添加了Wi-Fi禁用名单。通过[removeDisallowedWifiList]{@link wifiManager.removeDisallowedWifiList}移除Wi-Fi禁用名单后，可解除冲突。 |
| [addDisallowedWifiList](arkts-wifimanager-adddisallowedwifilist-f.md#addDisallowedWifiList-1) | 添加Wi-Fi禁用名单。添加禁用名单后当前设备不允许连接该名单下的Wi-Fi。 以下情况下，调用本接口会报策略冲突： 1. 已经通过[setDisallowedPolicy]{@link @ohos.enterprise.restrictions:restrictions.setDisallowedPolicy(admin: Want, feature: string, disallow: boolean)}接口禁用了设备Wi-Fi能力。通过[setDisallowedPolicy]{@link @ohos.enterprise.restrictions:restrictions.setDisallowedPolicy(admin: Want, feature: string, disallow: boolean)}解除Wi-Fi禁用后，可解除冲突。 2. 已经通过[addAllowedWifiList]{@link wifiManager.addAllowedWifiList}接口添加了Wi-Fi允许名单。通过[removeAllowedWifiList]{@link wifiManager.removeAllowedWifiList}移除Wi-Fi允许名单后，可解除冲突。 |
| [getAllowedWifiList](arkts-wifimanager-getallowedwifilist-f.md#getAllowedWifiList-1) | 获取Wi-Fi允许名单。 |
| [getDisallowedWifiList](arkts-wifimanager-getdisallowedwifilist-f.md#getDisallowedWifiList-1) | 获取Wi-Fi禁用名单。 |
| <!--DelRow-->[isWifiActive](arkts-wifimanager-iswifiactive-f-sys.md#isWifiActive-1) | 查询当前设备的Wi-Fi开启状态。使用callback异步回调。 |
| <!--DelRow-->[isWifiActive](arkts-wifimanager-iswifiactive-f-sys.md#isWifiActive-2) | 查询当前设备的Wi-Fi开启状态。使用Promise异步回调。 |
| [isWifiActiveSync](arkts-wifimanager-iswifiactivesync-f.md#isWifiActiveSync-1) | 查询当前设备Wi-Fi开启状态。 |
| <!--DelRow-->[isWifiDisabled](arkts-wifimanager-iswifidisabled-f-sys.md#isWifiDisabled-1) | 查询当前设备Wi-Fi是否被禁用。 |
| [removeAllowedWifiList](arkts-wifimanager-removeallowedwifilist-f.md#removeAllowedWifiList-1) | 移除Wi-Fi允许名单。若移除允许名单中的部分Wi-Fi，则当前设备仅允许连接剩下未移除的Wi-Fi。若移除允许名单中的所有Wi-Fi，则当前设备可以连接任意Wi-Fi。 |
| [removeDisallowedWifiList](arkts-wifimanager-removedisallowedwifilist-f.md#removeDisallowedWifiList-1) | 移除Wi-Fi禁用名单。若移除禁用名单中的部分Wi-Fi，则当前设备不允许连接禁用名单内剩余的Wi-Fi。若移除禁用名单中的所有Wi-Fi，则当前设备可以连接任意的Wi-Fi。 |
| <!--DelRow-->[setWifiDisabled](arkts-wifimanager-setwifidisabled-f-sys.md#setWifiDisabled-1) | 设置禁用Wi-Fi策略。 |
| <!--DelRow-->[setWifiProfile](arkts-wifimanager-setwifiprofile-f-sys.md#setWifiProfile-1) | 为当前设备配置Wi-Fi，使连接到指定网络。使用callback异步回调。 |
| <!--DelRow-->[setWifiProfile](arkts-wifimanager-setwifiprofile-f-sys.md#setWifiProfile-2) | 为当前设备配置Wi-Fi，使连接到指定网络。使用Promise异步回调。 |
| [setWifiProfileSync](arkts-wifimanager-setwifiprofilesync-f.md#setWifiProfileSync-1) | 为当前设备配置Wi-Fi，连接到指定网络。 |
| [turnOffWifi](arkts-wifimanager-turnoffwifi-f.md#turnOffWifi-1) | 关闭Wi-Fi开关。 以下情况下，通过本接口关闭Wi-Fi开关，会提示"系统功能被禁用"： ?已经通过 [setDisallowedPolicy]{@link @ohos.enterprise.restrictions:restrictions.setDisallowedPolicy(admin: Want, feature: string, disallow: boolean)} 接口禁用了Wi-Fi。需通过 [setDisallowedPolicy]{@link @ohos.enterprise.restrictions:restrictions.setDisallowedPolicy(admin: Want, feature: string, disallow: boolean)} 接口启用Wi-Fi，解决"系统功能被禁用"报错。 |
| [turnOnWifi](arkts-wifimanager-turnonwifi-f.md#turnOnWifi-1) | 打开Wi-Fi开关。 以下情况下，通过本接口打开Wi-Fi开关，会打开失败并提示"系统功能被禁用"： ?已经通过 [setDisallowedPolicy]{@link @ohos.enterprise.restrictions:restrictions.setDisallowedPolicy(admin: Want, feature: string, disallow: boolean)} 接口禁用了Wi-Fi。需通过 [setDisallowedPolicy]{@link @ohos.enterprise.restrictions:restrictions.setDisallowedPolicy(admin: Want, feature: string, disallow: boolean)} 接口启用Wi-Fi，解决"系统功能被禁用"报错。 |

### 接口

| 名称 | 描述 |
| --- | --- |
| [IpProfile](arkts-wifimanager-ipprofile-i.md) | IP配置信息。 |
| [WifiAccessInfo](arkts-wifimanager-wifiaccessinfo-i.md) | Wi-Fi的SSID和BSSID信息。 |
| [WifiEapProfile](arkts-wifimanager-wifieapprofile-i.md) | 可扩展身份验证协议配置信息。 |
| [WifiProfile](arkts-wifimanager-wifiprofile-i.md) | Wi-Fi配置信息。 |

### 枚举

| 名称 | 描述 |
| --- | --- |
| [EapMethod](arkts-wifimanager-eapmethod-e.md) | 表示EAP认证方式的枚举。 > **说明**： > > 当前仅支持使用EAP_PEAP、EAP_TLS两种认证方式，其他暂不支持。 |
| [IpType](arkts-wifimanager-iptype-e.md) | 表示IP类型的枚举。 |
| [Phase2Method](arkts-wifimanager-phase2method-e.md) | 表示第二阶段认证方式的枚举。 |
| [WifiSecurityType](arkts-wifimanager-wifisecuritytype-e.md) | 表示加密类型的枚举。 |

