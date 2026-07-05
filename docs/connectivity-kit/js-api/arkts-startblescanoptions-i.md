# StartBLEScanOptions

**Since:** 6

**System capability:** SystemCapability.Communication.Bluetooth.Lite

## Modules to Import

```TypeScript
import { BluetoothDevice,BLEFoundResponse,StopBLEScanOptions,SubscribeBLEFoundOptions,StartBLEScanOptions } from '@kit.ConnectivityKit';
```

## fail

```TypeScript
fail: (data: string, code: number) => void
```

StartBLEScanOptions failed

**Type:** (data: string, code: number) => void

**Since:** 6

**Model restriction:** This API can be used only in the FA model.

**System capability:** SystemCapability.Communication.Bluetooth.Lite

## success

```TypeScript
success: () => void
```

StartBLEScanOptions success

**Type:** () => void

**Since:** 6

**Model restriction:** This API can be used only in the FA model.

**System capability:** SystemCapability.Communication.Bluetooth.Lite

## interval

```TypeScript
interval: number
```

Time of delay for reporting the scan result

**Type:** number

**Since:** 6

**Model restriction:** This API can be used only in the FA model.

**System capability:** SystemCapability.Communication.Bluetooth.Lite

## complete

```TypeScript
complete: () => void
```

StartBLEScanOptions completed

**Type:** () => void

**Since:** 6

**Model restriction:** This API can be used only in the FA model.

**System capability:** SystemCapability.Communication.Bluetooth.Lite

