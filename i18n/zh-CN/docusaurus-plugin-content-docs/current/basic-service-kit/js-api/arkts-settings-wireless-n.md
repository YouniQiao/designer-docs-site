# wireless

Provides methods for setting radio network information, including information about Bluetooth, Wi-Fi, Near Field Communication (NFC), and the airplane mode.

**起始版本：** 7

**系统能力：** SystemCapability.Applications.Settings.Core

## 导入模块

```TypeScript
import { settings } from '@kit.BasicServicesKit';
```

## 汇总

### 常量

| 名称 | 描述 |
| --- | --- |
| [AIRPLANE_MODE_RADIOS](arkts-wireless-con.md#AIRPLANE_MODE_RADIOS) | Indicates the list of radio signals to be disabled when airplane mode is enabled. Multiple radio signals are separated by commas (,). <ul> <li>{@code BLUETOOTH_RADIO} - Bluetooth is disabled in airplane mode. <li>{@code CELL_RADIO} - Cellular radio is disabled in airplane mode. <li>{@code NFC_RADIO} - NFC is disabled in airplane mode. <li>{@code WIFI_RADIO} - Wi-Fi is disabled in airplane mode. </ul> |
| [BLUETOOTH_DISCOVER_ABILITY_STATUS](arkts-wireless-con.md#BLUETOOTH_DISCOVER_ABILITY_STATUS) | Specifies whether the device can be discovered or connected by other devices through Bluetooth. If the value is {@code 0}, the device cannot be connected or discovered. If the value is {@code 1}, the device can be connected but cannot be discovered. If the value is {@code 2}, the device can be connected and discovered. |
| [BLUETOOTH_DISCOVER_TIMEOUT](arkts-wireless-con.md#BLUETOOTH_DISCOVER_TIMEOUT) | Indicates the duration (in seconds) that the device can be discovered through Bluetooth. <p>After the duration expires, the device cannot be discovered through Bluetooth. |
| [BLUETOOTH_RADIO](arkts-wireless-con.md#BLUETOOTH_RADIO) | A constant of {@code AIRPLANE_MODE_RADIOS} to indicate that Bluetooth is disabled in airplane mode. |
| [BLUETOOTH_STATUS](arkts-wireless-con.md#BLUETOOTH_STATUS) | Specifies whether Bluetooth is enabled. <p>If the value is {@code true}, Bluetooth is enabled. If the value is {@code false}, Bluetooth is disabled. |
| [CELL_RADIO](arkts-wireless-con.md#CELL_RADIO) | A constant of {@code AIRPLANE_MODE_RADIOS} to indicate that cellular radio is disabled in airplane mode. |
| [NFC_RADIO](arkts-wireless-con.md#NFC_RADIO) | A constant of {@code AIRPLANE_MODE_RADIOS} to indicate that NFC is disabled in airplane mode. |
| [OWNER_LOCKDOWN_WIFI_CFG](arkts-wireless-con.md#OWNER_LOCKDOWN_WIFI_CFG) | Specifies whether the Wi-Fi configuration created by the application of the device owner should be locked down. <p>If the value is {@code true}, the Wi-Fi configuration should be locked down. If the value is {@code false}, the Wi-Fi configuration should not be locked down. |
| [WIFI_DHCP_MAX_RETRY_COUNT](arkts-wireless-con.md#WIFI_DHCP_MAX_RETRY_COUNT) | Indicates the maximum number of attempts to obtain an IP address from the DHCP server. |
| [WIFI_RADIO](arkts-wireless-con.md#WIFI_RADIO) | A constant of {@code AIRPLANE_MODE_RADIOS} to indicate that Wi-Fi is disabled in airplane mode. |
| [WIFI_STATUS](arkts-wireless-con.md#WIFI_STATUS) | Specifies whether Wi-Fi is enabled. <p>If the value is {@code true}, Wi-Fi is enabled. If the value is {@code false}, Wi-Fi is disabled. |
| [WIFI_TO_MOBILE_DATA_AWAKE_TIMEOUT](arkts-wireless-con.md#WIFI_TO_MOBILE_DATA_AWAKE_TIMEOUT) | Indicates the maximum duration to hold a wake lock when waiting for the mobile data connection to establish after the Wi-Fi connection is disconnected. |
| [WIFI_WATCHDOG_STATUS](arkts-wireless-con.md#WIFI_WATCHDOG_STATUS) | Specifies whether Wi-Fi watchdog is enabled. <p>If the value is {@code true}, Wi-Fi watchdog is enabled. If the value is {@code false}, Wi-Fi watchdog is disabled. |

