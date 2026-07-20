# StartBLEScanOptions

**Since:** 6

<!--Device-unnamed-export interface StartBLEScanOptions--><!--Device-unnamed-export interface StartBLEScanOptions-End-->

**System capability:** SystemCapability.Communication.Bluetooth.Lite

## Modules to Import

```TypeScript
import { BluetoothDevice, BLEFoundResponse, StopBLEScanOptions, SubscribeBLEFoundOptions, StartBLEScanOptions } from '@kit.ConnectivityKit';
```

## complete

```TypeScript
complete: () => void
```

StartBLEScanOptions completed

**Type:** () => void

**Since:** 6

**Model restriction:** This API can be used only in the FA model.

<!--Device-StartBLEScanOptions-complete: () => void--><!--Device-StartBLEScanOptions-complete: () => void-End-->

**System capability:** SystemCapability.Communication.Bluetooth.Lite

## fail

```TypeScript
fail: (data: string, code: number) => void
```

StartBLEScanOptions failed

**Type:** (data: string, code: number) => void

**Since:** 6

**Model restriction:** This API can be used only in the FA model.

<!--Device-StartBLEScanOptions-fail: (data: string, code: number) => void--><!--Device-StartBLEScanOptions-fail: (data: string, code: number) => void-End-->

**System capability:** SystemCapability.Communication.Bluetooth.Lite

## interval

```TypeScript
interval: number
```

Time of delay for reporting the scan result

**Type:** number

**Since:** 6

**Model restriction:** This API can be used only in the FA model.

<!--Device-StartBLEScanOptions-interval: number--><!--Device-StartBLEScanOptions-interval: number-End-->

**System capability:** SystemCapability.Communication.Bluetooth.Lite

## success

```TypeScript
success: () => void
```

StartBLEScanOptions success

**Type:** () => void

**Since:** 6

**Model restriction:** This API can be used only in the FA model.

<!--Device-StartBLEScanOptions-success: () => void--><!--Device-StartBLEScanOptions-success: () => void-End-->

**System capability:** SystemCapability.Communication.Bluetooth.Lite

