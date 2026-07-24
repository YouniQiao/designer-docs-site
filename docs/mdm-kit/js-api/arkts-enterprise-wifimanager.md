# @ohos.enterprise.wifiManager

The **wifiManager** module provides Wi-Fi management capabilities for enterprise devices, including obtaining the Wi-Fi status.
> **NOTE**  
>  
> The APIs of this module can be used only in the stage model.  
>  
> The APIs of this module can be called only by a device administrator application that is enabled. For details, see  
> [MDM Kit Development](../../../mdm/mdm-kit-guide.md).  
>  
> The global restriction policies are provided by **restrictions**. To disable Wi-Fi globally, see  
> [@ohos.enterprise.restrictions](arkts-enterprise-restrictions.md).

**Since:** 10

<!--Device-unnamed-declare namespace wifiManager--><!--Device-unnamed-declare namespace wifiManager-End-->

**System capability:** SystemCapability.Customization.EnterpriseDeviceManager

## Modules to Import

```TypeScript
import { wifiManager } from '@kit.MDMKit';
```

## Summary

### Functions

| Name | Description |
| --- | --- |
| [addAllowedWifiList](arkts-mdm-wifimanager-addallowedwifilist-f.md#addallowedwifilist) | Adds allowed Wi-Fi networks. The current device can only connect to the allowed Wi-Fi networks.  A policy conflict is reported when this API is called in the following scenarios:  1. Wi-Fi networks have been disabled by calling [setDisallowedPolicy](arkts-mdm-restrictions-setdisallowedpolicy-f.md#setdisallowedpolicy).You can resolve the conflict by enabling the Wi-Fi networks through [setDisallowedPolicy](arkts-mdm-restrictions-setdisallowedpolicy-f.md#setdisallowedpolicy).2. Disallowed Wi-Fi networks have been added by calling [addDisallowedWifiList](arkts-mdm-wifimanager-adddisallowedwifilist-f.md#adddisallowedwifilist).You can resolve the conflict by removing the disallowed Wi-Fi networks through [removeDisallowedWifiList](arkts-mdm-wifimanager-removedisallowedwifilist-f.md#removedisallowedwifilist). |
| [addDisallowedWifiList](arkts-mdm-wifimanager-adddisallowedwifilist-f.md#adddisallowedwifilist) | Adds disallowed Wi-Fi networks. The current device cannot connect to the disallowed Wi-Fi networks.  A policy conflict is reported when this API is called in the following scenarios:  1. Wi-Fi networks have been disabled by calling [setDisallowedPolicy](arkts-mdm-restrictions-setdisallowedpolicy-f.md#setdisallowedpolicy).You can resolve the conflict by enabling the Wi-Fi networks through [setDisallowedPolicy](arkts-mdm-restrictions-setdisallowedpolicy-f.md#setdisallowedpolicy).2. Allowed Wi-Fi networks have been added by calling [addAllowedWifiList](arkts-mdm-wifimanager-addallowedwifilist-f.md#addallowedwifilist).You can resolve the conflict by removing the allowed Wi-Fi networks through [removeAllowedWifiList](arkts-mdm-wifimanager-removeallowedwifilist-f.md#removeallowedwifilist). |
| [getAllowedWifiList](arkts-mdm-wifimanager-getallowedwifilist-f.md#getallowedwifilist) | Obtains Wi-Fi networks from the allowed list. |
| [getDisallowedWifiList](arkts-mdm-wifimanager-getdisallowedwifilist-f.md#getdisallowedwifilist) | Obtains disallowed Wi-Fi networks. |
| [isWifiActiveSync](arkts-mdm-wifimanager-iswifiactivesync-f.md#iswifiactivesync) | Queries the Wi-Fi status of the current device. |
| [removeAllowedWifiList](arkts-mdm-wifimanager-removeallowedwifilist-f.md#removeallowedwifilist) | Removes Wi-Fi networks from the allowed list. If some Wi-Fi networks are removed from the allowed list, the current device can only connect to the remaining ones; if all Wi-Fi networks are removed from the allowed list, the current device can connect to any Wi-Fi network. |
| [removeDisallowedWifiList](arkts-mdm-wifimanager-removedisallowedwifilist-f.md#removedisallowedwifilist) | Removes disallowed Wi-Fi networks. If some Wi-Fi networks are removed from the disallowed list, the current device cannot connect to the remaining ones; if all Wi-Fi networks are removed from the disallowed list, the current device can connect to any Wi-Fi network. |
| [setWifiProfileSync](arkts-mdm-wifimanager-setwifiprofilesync-f.md#setwifiprofilesync) | Configures Wi-Fi for the current device to connect to a specified network. |
| [turnOffWifi](arkts-mdm-wifimanager-turnoffwifi-f.md#turnoffwifi) | Disables Wi-Fi.  In the following scenario, attempting to disable Wi-Fi using this API will fail, and a message indicating that the system function is disabled will be returned:  ?Wi-Fi has been disabled using the [setDisallowedPolicy](arkts-mdm-restrictions-setdisallowedpolicy-f.md#setdisallowedpolicy)API. In this case, you must call [setDisallowedPolicy](arkts-mdm-restrictions-setdisallowedpolicy-f.md#setdisallowedpolicy)to enable Wi-Fi. |
| [turnOnWifi](arkts-mdm-wifimanager-turnonwifi-f.md#turnonwifi) | Enables Wi-Fi.  In the following scenario, attempting to enable Wi-Fi using this API will fail, and a message indicating that the system function is disabled will be returned:  ?Wi-Fi has been disabled using the [setDisallowedPolicy](arkts-mdm-restrictions-setdisallowedpolicy-f.md#setdisallowedpolicy)API. In this case, you must call [setDisallowedPolicy](arkts-mdm-restrictions-setdisallowedpolicy-f.md#setdisallowedpolicy)to enable Wi-Fi. |

<!--Del-->
### Functions（系统接口）

| Name | Description |
| --- | --- |
| [isWifiActive](arkts-mdm-wifimanager-iswifiactive-f-sys.md#iswifiactive) | Queries the Wi-Fi status of the current device. This API uses an asynchronous callback to return the result. |
| [isWifiActive](arkts-mdm-wifimanager-iswifiactive-f-sys.md#iswifiactive-1) | Queries the Wi-Fi status of the current device. This API uses a promise to return the result. |
| [isWifiDisabled](arkts-mdm-wifimanager-iswifidisabled-f-sys.md#iswifidisabled) | Queries whether Wi-Fi is disabled on the current device. |
| [setWifiDisabled](arkts-mdm-wifimanager-setwifidisabled-f-sys.md#setwifidisabled) | Sets the Wi-Fi disabling policy. |
| [setWifiProfile](arkts-mdm-wifimanager-setwifiprofile-f-sys.md#setwifiprofile) | Configures Wi-Fi for the current device to connect to a specified network. This API uses an asynchronous callback to return the result. |
| [setWifiProfile](arkts-mdm-wifimanager-setwifiprofile-f-sys.md#setwifiprofile-1) | Configures Wi-Fi for the current device to connect to a specified network. This API uses a promise to return the result. |
<!--DelEnd-->

### Interfaces

| Name | Description |
| --- | --- |
| [IpProfile](arkts-mdm-wifimanager-ipprofile-i.md) | Represents IP configuration information. |
| [WifiAccessInfo](arkts-mdm-wifimanager-wifiaccessinfo-i.md) | Represents Wi-Fi access information containing Service Set Identifier (SSID) and Basic Service Set Identifier (BSSID). |
| [WifiEapProfile](arkts-mdm-wifimanager-wifieapprofile-i.md) | Represents EAP profile (configuration) information. |
| [WifiProfile](arkts-mdm-wifimanager-wifiprofile-i.md) | Represents the Wi-Fi configuration information. |

### Enums

| Name | Description |
| --- | --- |
| [EapMethod](arkts-mdm-wifimanager-eapmethod-e.md) | Enumerates the EAP authentication methods. |
| [IpType](arkts-mdm-wifimanager-iptype-e.md) | Enumerates the IP address types. |
| [Phase2Method](arkts-mdm-wifimanager-phase2method-e.md) | Enumerates the Phase 2 authentication methods. |
| [WifiSecurityType](arkts-mdm-wifimanager-wifisecuritytype-e.md) | Enumerates the Wi-Fi security types. |

