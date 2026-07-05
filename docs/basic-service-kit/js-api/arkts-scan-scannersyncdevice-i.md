# ScannerSyncDevice

定义扫描仪同步设备的接口。

**Since:** 20

**System capability:** SystemCapability.Print.PrintFramework

## Modules to Import

```TypeScript
import { scan } from '@kit.BasicServicesKit';
```

## discoveryMode

```TypeScript
discoveryMode: ScannerDiscoveryMode
```

发现模式。

**Type:** ScannerDiscoveryMode

**Since:** 20

**System capability:** SystemCapability.Print.PrintFramework

## oldScannerId

```TypeScript
oldScannerId?: string
```

旧的扫描仪ID，仅在syncMode为"update"时有效。

**Type:** string

**Since:** 20

**System capability:** SystemCapability.Print.PrintFramework

## syncMode

```TypeScript
syncMode: ScannerSyncMode
```

同步模式。

**Type:** ScannerSyncMode

**Since:** 20

**System capability:** SystemCapability.Print.PrintFramework

## scannerId

```TypeScript
scannerId: string
```

扫描仪ID。

**Type:** string

**Since:** 20

**System capability:** SystemCapability.Print.PrintFramework

## uniqueId

```TypeScript
uniqueId: string
```

唯一ID。

**Type:** string

**Since:** 20

**System capability:** SystemCapability.Print.PrintFramework

