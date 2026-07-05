# WifiAccessInfo

Represents Wi-Fi access information containing Service Set Identifier (SSID) and Basic Service Set Identifier ( BSSID).

**Since:** 19

**System capability:** SystemCapability.Customization.EnterpriseDeviceManager

## Modules to Import

```TypeScript
import { wifiManager } from '@ohos.enterprise.wifiManager';
```

## bssid

```TypeScript
bssid?: string
```

MAC address of the Wi-Fi hotspot, for example, **00:11:22:33:44:55**. To obtain the MAC address, enable **Enable Wi-Fi verbose logging** under **Settings** > **System & updates** > **Developer options** first, and then go to the WLAN list to check the MAC address. If a Wi-Fi network has multiple MAC addresses, all of them must be added here. This property is optional when the [addDisallowedWifiList](arkts-mdm-adddisallowedwifilist-f.md#adddisallowedwifilist-1) and [removeDisallowedWifiList](arkts-mdm-removedisallowedwifilist-f.md#removedisallowedwifilist-1) APIs are called. The default value is an empty string. This property is optional (available since API version 21) when the [addAllowedWifiList](arkts-mdm-addallowedwifilist-f.md#addallowedwifilist-1) and [removeAllowedWifiList](arkts-mdm-removeallowedwifilist-f.md#removeallowedwifilist-1) APIs are called. The default value is an empty string. However, this property is mandatory in API version 20 and earlier versions.

**Type:** string

**Since:** 19

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.Customization.EnterpriseDeviceManager

## ssid

```TypeScript
ssid: string
```

Name of the Wi-Fi hotspot. The encoding format is UTF-8 and the maximum length is 32 bytes (three bytes for each Chinese character and one byte for each English character).

**Type:** string

**Since:** 19

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.Customization.EnterpriseDeviceManager

