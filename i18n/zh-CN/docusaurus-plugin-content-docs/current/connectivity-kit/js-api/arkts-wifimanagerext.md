# @ohos.wifiManagerExt

Provides extended methods to operate or manage Wi-Fi. <p>The APIs involved in this file are non-general APIs. These extended APIs are only used by some product types, such as routers. Common products should not use these APIs.</p>

**起始版本：** 9

**系统能力：** SystemCapability.Communication.WiFi.AP.Extension

## 导入模块

```TypeScript
import { wifiManagerExt } from '@kit.ConnectivityKit';
```

## 汇总

### 函数

| 名称 | 描述 |
| --- | --- |
| [disableHotspot](arkts-wifimanagerext-disablehotspot-f.md#disableHotspot-1) | Disable Wi-Fi hotspot function. If Wi-Fi is enabled after the Wi-Fi hotspot is disabled, Wi-Fi may be re-enabled. |
| [enableHotspot](arkts-wifimanagerext-enablehotspot-f.md#enableHotspot-1) | Enable Wi-Fi hotspot function. This method is asynchronous. After the Wi-Fi hotspot is enabled, Wi-Fi may be disabled. |
| [getPowerMode](arkts-wifimanagerext-getpowermode-f.md#getPowerMode-1) | Obtains the current Wi-Fi power mode. |
| [getPowerMode](arkts-wifimanagerext-getpowermode-f.md#getPowerMode-2) | Obtains the current Wi-Fi power mode. |
| [getSupportedPowerMode](arkts-wifimanagerext-getsupportedpowermode-f.md#getSupportedPowerMode-1) | Obtains the supported power Mode. |
| [getSupportedPowerMode](arkts-wifimanagerext-getsupportedpowermode-f.md#getSupportedPowerMode-2) | Obtains the supported power Mode. |
| [setPowerMode](arkts-wifimanagerext-setpowermode-f.md#setPowerMode-1) | Set the current Wi-Fi power mode. |

### 枚举

| 名称 | 描述 |
| --- | --- |
| [PowerMode](arkts-wifimanagerext-powermode-e.md) | The power Mode enumeration. |

