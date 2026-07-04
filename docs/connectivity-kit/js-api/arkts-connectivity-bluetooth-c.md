---
last_update:
  date: 2026-07-04
---

# Bluetooth

Provides methods to manage BLE scan.

**Since:** 6

**System capability:** SystemCapability.Communication.Bluetooth.Lite

## Modules to Import

```TypeScript
import { BluetoothDevice, BLEFoundResponse, StopBLEScanOptions, SubscribeBLEFoundOptions, StartBLEScanOptions } from '@system.bluetooth';
```

## startBLEScan

```TypeScript
static startBLEScan(options: StartBLEScanOptions): void
```

Start BLE scan

**Since:** 6

**System capability:** SystemCapability.Communication.Bluetooth.Lite

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| options | StartBLEScanOptions | Yes | Options |

## stopBLEScan

```TypeScript
static stopBLEScan(options: StopBLEScanOptions): void
```

Stop BLE scan

**Since:** 6

**System capability:** SystemCapability.Communication.Bluetooth.Lite

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| options | StopBLEScanOptions | Yes | Options |

## subscribeBLEFound

```TypeScript
static subscribeBLEFound(options: SubscribeBLEFoundOptions): void
```

Subscribe BLE found

**Since:** 6

**System capability:** SystemCapability.Communication.Bluetooth.Lite

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| options | SubscribeBLEFoundOptions | Yes | Options |

## unsubscribeBLEFound

```TypeScript
static unsubscribeBLEFound(): void
```

Stop the subscription of BLE found

**Since:** 6

**System capability:** SystemCapability.Communication.Bluetooth.Lite

