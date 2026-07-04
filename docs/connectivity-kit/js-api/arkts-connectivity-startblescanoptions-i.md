---
last_update:
  date: 2026-07-04
---

# StartBLEScanOptions

**Since:** 6

**System capability:** SystemCapability.Communication.Bluetooth.Lite

## Modules to Import

```TypeScript
import { BluetoothDevice, BLEFoundResponse, StopBLEScanOptions, SubscribeBLEFoundOptions, StartBLEScanOptions } from '@system.bluetooth';
```

## complete

```TypeScript
complete: () => void
```

StartBLEScanOptions completed

**Type:** () => void

**Since:** 6

**System capability:** SystemCapability.Communication.Bluetooth.Lite

## fail

```TypeScript
fail: (data: string, code: number) => void
```

StartBLEScanOptions failed

**Type:** (data: string, code: number) => void

**Since:** 6

**System capability:** SystemCapability.Communication.Bluetooth.Lite

## interval

```TypeScript
interval: number
```

Time of delay for reporting the scan result

**Type:** number

**Since:** 6

**System capability:** SystemCapability.Communication.Bluetooth.Lite

## success

```TypeScript
success: () => void
```

StartBLEScanOptions success

**Type:** () => void

**Since:** 6

**System capability:** SystemCapability.Communication.Bluetooth.Lite

