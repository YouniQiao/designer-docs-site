# wireless

Provides methods for setting radio network information, including information about Bluetooth, Wi-Fi, Near Field Communication (NFC), and the airplane mode.

**Since:** 7

<!--Device-settings-namespace wireless--><!--Device-settings-namespace wireless-End-->

**System capability:** SystemCapability.Applications.Settings.Core

## Modules to Import

```TypeScript
import { settings } from '@kit.BasicServicesKit';
```

## Summary

### Constants

| Name | Description |
| --- | --- |
| [BLUETOOTH_DISCOVER_ABILITY_STATUS](arkts-basicservices-wireless-con.md#bluetooth_discover_ability_status) | Specifies whether the device can be discovered or connected by other devices through Bluetooth.If the value is {@code 0}, the device cannot be connected or discovered. If the value is {@code 1}, the device can be connected but cannot be discovered. If the value is {@code 2}, the device can be connected and discovered. |
| [BLUETOOTH_DISCOVER_TIMEOUT](arkts-basicservices-wireless-con.md#bluetooth_discover_timeout) | Indicates the duration (in seconds) that the device can be discovered through Bluetooth.&lt;p&gt;After the duration expires, the device cannot be discovered through Bluetooth. |
| [AIRPLANE_MODE_RADIOS](arkts-basicservices-wireless-con.md#airplane_mode_radios) | Indicates the list of radio signals to be disabled when airplane mode is enabled. Multiple radio signals are separated by commas (,).&lt;ul&gt;&lt;li&gt;{@code BLUETOOTH_RADIO} - Bluetooth is disabled in airplane mode.&lt;li&gt;{@code CELL_RADIO} - Cellular radio is disabled in airplane mode.&lt;li&gt;{@code NFC_RADIO} - NFC is disabled in airplane mode.&lt;li&gt;{@code WIFI_RADIO} - Wi-Fi is disabled in airplane mode.&lt;/ul&gt; |
| [BLUETOOTH_STATUS](arkts-basicservices-wireless-con.md#bluetooth_status) | Specifies whether Bluetooth is enabled.&lt;p&gt;If the value is {@code true}, Bluetooth is enabled. If the value is {@code false}, Bluetooth is disabled. |
| [BLUETOOTH_RADIO](arkts-basicservices-wireless-con.md#bluetooth_radio) | A constant of {@code AIRPLANE_MODE_RADIOS} to indicate that Bluetooth is disabled in airplane mode. |
| [CELL_RADIO](arkts-basicservices-wireless-con.md#cell_radio) | A constant of {@code AIRPLANE_MODE_RADIOS} to indicate that cellular radio is disabled in airplane mode. |
| [NFC_RADIO](arkts-basicservices-wireless-con.md#nfc_radio) | A constant of {@code AIRPLANE_MODE_RADIOS} to indicate that NFC is disabled in airplane mode. |
| [WIFI_RADIO](arkts-basicservices-wireless-con.md#wifi_radio) | A constant of {@code AIRPLANE_MODE_RADIOS} to indicate that Wi-Fi is disabled in airplane mode. |
| [OWNER_LOCKDOWN_WIFI_CFG](arkts-basicservices-wireless-con.md#owner_lockdown_wifi_cfg) | Specifies whether the Wi-Fi configuration created by the application of the device owner should be locked down.&lt;p&gt;If the value is {@code true}, the Wi-Fi configuration should be locked down.If the value is {@code false}, the Wi-Fi configuration should not be locked down. |
| [WIFI_DHCP_MAX_RETRY_COUNT](arkts-basicservices-wireless-con.md#wifi_dhcp_max_retry_count) | Indicates the maximum number of attempts to obtain an IP address from the DHCP server. |
| [WIFI_TO_MOBILE_DATA_AWAKE_TIMEOUT](arkts-basicservices-wireless-con.md#wifi_to_mobile_data_awake_timeout) | Indicates the maximum duration to hold a wake lock when waiting for the mobile data connection to establish after the Wi-Fi connection is disconnected. |
| [WIFI_STATUS](arkts-basicservices-wireless-con.md#wifi_status) | Specifies whether Wi-Fi is enabled.&lt;p&gt;If the value is {@code true}, Wi-Fi is enabled. If the value is {@code false}, Wi-Fi is disabled. |
| [WIFI_WATCHDOG_STATUS](arkts-basicservices-wireless-con.md#wifi_watchdog_status) | Specifies whether Wi-Fi watchdog is enabled.&lt;p&gt;If the value is {@code true}, Wi-Fi watchdog is enabled.If the value is {@code false}, Wi-Fi watchdog is disabled. |

