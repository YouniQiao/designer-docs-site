# @ohos.nearlink.advertising

提供与广播相关的方法。附近的设备可以扫描并发现该设备。

**起始版本：** 26.0.0

**系统能力：** SystemCapability.Communication.NearLink.Base

## 汇总

### 函数

| 名称 | 描述 |
| --- | --- |
| [offAdvertisingStateChange](arkts-advertising-offadvertisingstatechange-f.md#offAdvertisingStateChange-1) | 取消订阅广播状态变更事件。 |
| [onAdvertisingStateChange](arkts-advertising-onadvertisingstatechange-f.md#onAdvertisingStateChange-1) | 订阅广播状态变化事件。 只有授予了ohos.permission.NEARLINK_ACCESS权限的系统应用程序才能访问此事件。 |
| [startAdvertising](arkts-advertising-startadvertising-f.md#startAdvertising-1) | 开始广播。 |
| [stopAdvertising](arkts-advertising-stopadvertising-f.md#stopAdvertising-1) | 停止广播ID对应的广播。 |

### 接口

| 名称 | 描述 |
| --- | --- |
| [AdvertisingData](arkts-advertising-advertisingdata-i.md) | 广播数据。 |
| [AdvertisingParams](arkts-advertising-advertisingparams-i.md) | 广播参数。 |
| [AdvertisingSettings](arkts-advertising-advertisingsettings-i.md) | 广播设置。 |
| [AdvertisingStateChangeInfo](arkts-advertising-advertisingstatechangeinfo-i.md) | 广播状态变化信息。 |
| [ManufacturerData](arkts-advertising-manufacturerdata-i.md) | 描述制造商数据。 |
| [ServiceData](arkts-advertising-servicedata-i.md) | 服务数据。 |

### 枚举

| 名称 | 描述 |
| --- | --- |
| [AdvertisingState](arkts-advertising-advertisingstate-e.md) | 广播状态的枚举。 |
| [TxPowerMode](arkts-advertising-txpowermode-e.md) | 广播模式的枚举。 |

