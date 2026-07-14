# @ohos.enterprise.wifiManager

The **wifiManager** module provides Wi-Fi management capabilities for enterprise devices, including obtaining the Wi- Fi status. > **NOTE** > > The APIs of this module can be used only in the stage model. > > The APIs of this module can be called only by a device administrator application that is enabled. For details, see > [MDM Kit Development](../../../../mdm/mdm-kit-guide.md). > > The global restriction policies are provided by **restrictions**. To disable Wi-Fi globally, see > [@ohos.enterprise.restrictions](arkts-enterprise-restrictions.md).

**Since:** 10

**System capability:** SystemCapability.Customization.EnterpriseDeviceManager

## Modules to Import

```TypeScript
import { wifiManager } from '@kit.MDMKit';
```

## Summary

### Functions

| Name | Description |
| --- | --- |
| [addAllowedWifiList](arkts-mdm-addallowedwifilist-f.md#addallowedwifilist-1) | Adds allowed Wi-Fi networks. The current device can only connect to the allowed Wi-Fi networks. A policy conflict is reported when this API is called in the following scenarios: 1. Wi-Fi networks have been disabled by calling [setDisallowedPolicy](arkts-mdm-setdisallowedpolicy-f.md#setdisallowedpolicy-1). You can resolve the conflict by enabling the Wi-Fi networks through [setDisallowedPolicy](arkts-mdm-setdisallowedpolicy-f.md#setdisallowedpolicy-1). 2. Disallowed Wi-Fi networks have been added by calling [addDisallowedWifiList](arkts-mdm-adddisallowedwifilist-f.md#adddisallowedwifilist-1). You can resolve the conflict by removing the disallowed Wi-Fi networks through [removeDisallowedWifiList](arkts-mdm-removedisallowedwifilist-f.md#removedisallowedwifilist-1). |
| [addDisallowedWifiList](arkts-mdm-adddisallowedwifilist-f.md#adddisallowedwifilist-1) | Adds disallowed Wi-Fi networks. The current device cannot connect to the disallowed Wi-Fi networks. A policy conflict is reported when this API is called in the following scenarios: 1. Wi-Fi networks have been disabled by calling [setDisallowedPolicy](arkts-mdm-setdisallowedpolicy-f.md#setdisallowedpolicy-1). You can resolve the conflict by enabling the Wi-Fi networks through [setDisallowedPolicy](arkts-mdm-setdisallowedpolicy-f.md#setdisallowedpolicy-1). 2. Allowed Wi-Fi networks have been added by calling [addAllowedWifiList](arkts-mdm-addallowedwifilist-f.md#addallowedwifilist-1). You can resolve the conflict by removing the allowed Wi-Fi networks through [removeAllowedWifiList](arkts-mdm-removeallowedwifilist-f.md#removeallowedwifilist-1). |
| [getAllowedWifiList](arkts-mdm-getallowedwifilist-f.md#getallowedwifilist-1) | Obtains Wi-Fi networks from the allowed list. |
| [getDisallowedWifiList](arkts-mdm-getdisallowedwifilist-f.md#getdisallowedwifilist-1) | Obtains disallowed Wi-Fi networks. |
| [isWifiActiveSync](arkts-mdm-iswifiactivesync-f.md#iswifiactivesync-1) | Queries the Wi-Fi status of the current device. |
| [removeAllowedWifiList](arkts-mdm-removeallowedwifilist-f.md#removeallowedwifilist-1) | Removes Wi-Fi networks from the allowed list. If some Wi-Fi networks are removed from the allowed list, the current device can only connect to the remaining ones; if all Wi-Fi networks are removed from the allowed list, the current device can connect to any Wi-Fi network. |
| [removeDisallowedWifiList](arkts-mdm-removedisallowedwifilist-f.md#removedisallowedwifilist-1) | Removes disallowed Wi-Fi networks. If some Wi-Fi networks are removed from the disallowed list, the current device cannot connect to the remaining ones; if all Wi-Fi networks are removed from the disallowed list, the current device can connect to any Wi-Fi network. |
| [setWifiProfileSync](arkts-mdm-setwifiprofilesync-f.md#setwifiprofilesync-1) | Configures Wi-Fi for the current device to connect to a specified network. |
| [turnOffWifi](arkts-mdm-turnoffwifi-f.md#turnoffwifi-1) | Disables Wi-Fi. In the following scenario, attempting to disable Wi-Fi using this API will fail, and a message indicating that the system function is disabled will be returned: ?Wi-Fi has been disabled using the [setDisallowedPolicy](arkts-mdm-setdisallowedpolicy-f.md#setdisallowedpolicy-1) API. In this case, you must call [setDisallowedPolicy](arkts-mdm-setdisallowedpolicy-f.md#setdisallowedpolicy-1) to enable Wi-Fi. |
| [turnOnWifi](arkts-mdm-turnonwifi-f.md#turnonwifi-1) | Enables Wi-Fi. In the following scenario, attempting to enable Wi-Fi using this API will fail, and a message indicating that the system function is disabled will be returned: ?Wi-Fi has been disabled using the [setDisallowedPolicy](arkts-mdm-setdisallowedpolicy-f.md#setdisallowedpolicy-1) API. In this case, you must call [setDisallowedPolicy](arkts-mdm-setdisallowedpolicy-f.md#setdisallowedpolicy-1) to enable Wi-Fi. |

<!--Del-->
### Functions（系统接口）

| Name | Description |
| --- | --- |
| [isWifiActive](arkts-mdm-iswifiactive-f-sys.md#iswifiactive-1) | Queries the Wi-Fi status of the current device. This API uses an asynchronous callback to return the result. |
| [isWifiActive](arkts-mdm-iswifiactive-f-sys.md#iswifiactive-2) | Queries the Wi-Fi status of the current device. This API uses a promise to return the result. |
| [isWifiDisabled](arkts-mdm-iswifidisabled-f-sys.md#iswifidisabled-1) | Queries whether Wi-Fi is disabled on the current device. |
| [setWifiDisabled](arkts-mdm-setwifidisabled-f-sys.md#setwifidisabled-1) | Sets the Wi-Fi disabling policy. |
| [setWifiProfile](arkts-mdm-setwifiprofile-f-sys.md#setwifiprofile-1) | Configures Wi-Fi for the current device to connect to a specified network. This API uses an asynchronous callback to return the result. |
| [setWifiProfile](arkts-mdm-setwifiprofile-f-sys.md#setwifiprofile-2) | Configures Wi-Fi for the current device to connect to a specified network. This API uses a promise to return the result. |
<!--DelEnd-->

### Interfaces

| Name | Description |
| --- | --- |
| [IpProfile](arkts-mdm-ipprofile-i.md) | Represents IP configuration information. |
| [WifiAccessInfo](arkts-mdm-wifiaccessinfo-i.md) | Represents Wi-Fi access information containing Service Set Identifier (SSID) and Basic Service Set Identifier ( BSSID). |
| [WifiEapProfile](arkts-mdm-wifieapprofile-i.md) | Represents EAP profile (configuration) information. |
| [WifiProfile](arkts-mdm-wifiprofile-i.md) | Represents the Wi-Fi configuration information. |

### Enums

| Name | Description |
| --- | --- |
| [EapMethod](arkts-mdm-eapmethod-e.md) | Enumerates the EAP authentication methods. &gt; **NOTE** &gt; &gt; Currently, only the EAP_PEAP and EAP_TLS authentication methods are supported. |
| [IpType](arkts-mdm-iptype-e.md) | Enumerates the IP address types. |
| [Phase2Method](arkts-mdm-phase2method-e.md) | Enumerates the Phase 2 authentication methods. |
| [WifiSecurityType](arkts-mdm-wifisecuritytype-e.md) | Enumerates the Wi-Fi security types. |

