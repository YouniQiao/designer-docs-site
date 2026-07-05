# WifiAccessInfo

Wi-Fi的SSID和BSSID信息。

**Since:** 19

**System capability:** SystemCapability.Customization.EnterpriseDeviceManager

## Modules to Import

```TypeScript
import { wifiManager } from '@kit.MDMKit';
```

## bssid

```TypeScript
bssid?: string
```

Wi-Fi热点的MAC地址，例如：00:11:22:33:44:55。获取方式如下：打开设置应用-点击系统选项-点击开发者选项-开启WLAN详细日志记录开关，然后进入设置应用中的WLAN列表，查看显示的MAC地址。若一个Wi- Fi对应多个MAC地址，需添加所有MAC地址。 作为[addDisallowedWifiList]wifiManager.addDisallowedWifiList和 [removeDisallowedWifiList]wifiManager.removeDisallowedWifiList接口的入参时，该属性可选，默认值为空字符串。 作为[addAllowedWifiList]wifiManager.addAllowedWifiList和 [removeAllowedWifiList]wifiManager.removeAllowedWifiList接口入参时，从API version 21开始，该属性可选，默认值为空字符串。API version 20及之前的版本，该属性必填。

**Type:** string

**Since:** 19

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Customization.EnterpriseDeviceManager

## ssid

```TypeScript
ssid: string
```

Wi-Fi热点名称，编码格式为UTF-8，最大长度为32字节（中文字符占3位，英文字符占1位）。

**Type:** string

**Since:** 19

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Customization.EnterpriseDeviceManager

