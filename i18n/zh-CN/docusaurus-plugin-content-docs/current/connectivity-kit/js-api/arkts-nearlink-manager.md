# @ohos.nearlink.manager

提供管理星闪设备的方法。

**起始版本：** 26.0.0

**系统能力：** SystemCapability.Communication.NearLink.Base

## 汇总

### 函数

| 名称 | 描述 |
| --- | --- |
| <!--DelRow-->[disable](arkts-manager-disable-f-sys.md#disable-1) | 关闭星闪。 |
| <!--DelRow-->[enable](arkts-manager-enable-f-sys.md#enable-1) | 开启星闪。 |
| <!--DelRow-->[factoryReset](arkts-manager-factoryreset-f-sys.md#factoryReset-1) | 恢复星闪设置。 |
| <!--DelRow-->[getLocalAddress](arkts-manager-getlocaladdress-f-sys.md#getLocalAddress-1) | 获取本端设备的MAC地址。 |
| [getLocalName](arkts-manager-getlocalname-f.md#getLocalName-1) | 获取本地设备的名称。 |
| [getPairedDevices](arkts-manager-getpaireddevices-f.md#getPairedDevices-1) | 获取已与当前设备配对的设备列表。 如果用户有ohos.permission.GET_NEARLINK_PEER_MAC权限，则返回真实设备地址。否则，返回随机的设备地址 |
| [getState](arkts-manager-getstate-f.md#getState-1) | 获取星闪状态。 |
| [isNearLinkSupported](arkts-manager-isnearlinksupported-f.md#isNearLinkSupported-1) | 检查当前设备是否支持星闪。 |
| [offStateChange](arkts-manager-offstatechange-f.md#offStateChange-1) | 取消订阅状态变更事件。 |
| [onStateChange](arkts-manager-onstatechange-f.md#onStateChange-1) | 订阅状态变更事件。 |
| <!--DelRow-->[setConnectionMode](arkts-manager-setconnectionmode-f-sys.md#setConnectionMode-1) | 设置设备的NearLink连接模式。 |

### 枚举

| 名称 | 描述 |
| --- | --- |
| <!--DelRow-->[ConnectionMode](arkts-manager-connectionmode-e-sys.md) | 连接模式的枚举。 |
| [NearlinkState](arkts-manager-nearlinkstate-e.md) | 星闪状态的枚举。 |

