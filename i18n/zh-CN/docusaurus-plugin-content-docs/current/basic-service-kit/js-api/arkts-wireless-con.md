# Constants

## BLUETOOTH_DISCOVER_ABILITY_STATUS

```TypeScript
const BLUETOOTH_DISCOVER_ABILITY_STATUS: string
```

Specifies whether the device can be discovered or connected by other devices through Bluetooth. If the value is {@code 0}, the device cannot be connected or discovered. If the value is {@code 1}, the device can be connected but cannot be discovered. If the value is {@code 2}, the device can be connected and discovered.

**起始版本：** 7

**废弃版本：** 21

**系统能力：** SystemCapability.Applications.Settings.Core

## BLUETOOTH_DISCOVER_TIMEOUT

```TypeScript
const BLUETOOTH_DISCOVER_TIMEOUT: string
```

Indicates the duration (in seconds) that the device can be discovered through Bluetooth. <p>After the duration expires, the device cannot be discovered through Bluetooth.

**起始版本：** 7

**废弃版本：** 21

**系统能力：** SystemCapability.Applications.Settings.Core

## AIRPLANE_MODE_RADIOS

```TypeScript
const AIRPLANE_MODE_RADIOS: string
```

Indicates the list of radio signals to be disabled when airplane mode is enabled. Multiple radio signals are separated by commas (,). <ul> <li>{@code BLUETOOTH_RADIO} - Bluetooth is disabled in airplane mode. <li>{@code CELL_RADIO} - Cellular radio is disabled in airplane mode. <li>{@code NFC_RADIO} - NFC is disabled in airplane mode. <li>{@code WIFI_RADIO} - Wi-Fi is disabled in airplane mode. </ul>

**起始版本：** 7

**废弃版本：** 21

**系统能力：** SystemCapability.Applications.Settings.Core

## BLUETOOTH_STATUS

```TypeScript
const BLUETOOTH_STATUS: string
```

Specifies whether Bluetooth is enabled. <p>If the value is {@code true}, Bluetooth is enabled. If the value is {@code false}, Bluetooth is disabled.

**起始版本：** 7

**废弃版本：** 21

**系统能力：** SystemCapability.Applications.Settings.Core

## BLUETOOTH_RADIO

```TypeScript
const BLUETOOTH_RADIO: string
```

A constant of {@code AIRPLANE_MODE_RADIOS} to indicate that Bluetooth is disabled in airplane mode.

**起始版本：** 7

**废弃版本：** 21

**系统能力：** SystemCapability.Applications.Settings.Core

## CELL_RADIO

```TypeScript
const CELL_RADIO: string
```

A constant of {@code AIRPLANE_MODE_RADIOS} to indicate that cellular radio is disabled in airplane mode.

**起始版本：** 7

**废弃版本：** 21

**系统能力：** SystemCapability.Applications.Settings.Core

## NFC_RADIO

```TypeScript
const NFC_RADIO: string
```

A constant of {@code AIRPLANE_MODE_RADIOS} to indicate that NFC is disabled in airplane mode.

**起始版本：** 7

**废弃版本：** 21

**系统能力：** SystemCapability.Applications.Settings.Core

## WIFI_RADIO

```TypeScript
const WIFI_RADIO: string
```

A constant of {@code AIRPLANE_MODE_RADIOS} to indicate that Wi-Fi is disabled in airplane mode.

**起始版本：** 7

**废弃版本：** 21

**系统能力：** SystemCapability.Applications.Settings.Core

## OWNER_LOCKDOWN_WIFI_CFG

```TypeScript
const OWNER_LOCKDOWN_WIFI_CFG: string
```

Specifies whether the Wi-Fi configuration created by the application of the device owner should be locked down. <p>If the value is {@code true}, the Wi-Fi configuration should be locked down. If the value is {@code false}, the Wi-Fi configuration should not be locked down.

**起始版本：** 7

**废弃版本：** 21

**系统能力：** SystemCapability.Applications.Settings.Core

## WIFI_DHCP_MAX_RETRY_COUNT

```TypeScript
const WIFI_DHCP_MAX_RETRY_COUNT: string
```

Indicates the maximum number of attempts to obtain an IP address from the DHCP server.

**起始版本：** 7

**废弃版本：** 21

**系统能力：** SystemCapability.Applications.Settings.Core

## WIFI_TO_MOBILE_DATA_AWAKE_TIMEOUT

```TypeScript
const WIFI_TO_MOBILE_DATA_AWAKE_TIMEOUT: string
```

Indicates the maximum duration to hold a wake lock when waiting for the mobile data connection to establish after the Wi-Fi connection is disconnected.

**起始版本：** 7

**废弃版本：** 21

**系统能力：** SystemCapability.Applications.Settings.Core

## WIFI_STATUS

```TypeScript
const WIFI_STATUS: string
```

Specifies whether Wi-Fi is enabled. <p>If the value is {@code true}, Wi-Fi is enabled. If the value is {@code false}, Wi-Fi is disabled.

**起始版本：** 7

**废弃版本：** 21

**系统能力：** SystemCapability.Applications.Settings.Core

## WIFI_WATCHDOG_STATUS

```TypeScript
const WIFI_WATCHDOG_STATUS: string
```

Specifies whether Wi-Fi watchdog is enabled. <p>If the value is {@code true}, Wi-Fi watchdog is enabled. If the value is {@code false}, Wi-Fi watchdog is disabled.

**起始版本：** 7

**废弃版本：** 21

**系统能力：** SystemCapability.Applications.Settings.Core

