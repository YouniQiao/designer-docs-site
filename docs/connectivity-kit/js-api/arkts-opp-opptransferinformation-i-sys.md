# OppTransferInformation

Describes the transferred file information.

**Since:** 16

**System capability:** SystemCapability.Communication.Bluetooth.Core

**System API:** This is a system API.

## Modules to Import

```TypeScript
import { opp } from '@kit.ConnectivityKit';
```

## result

```TypeScript
result: TransferResult
```

File transfer result

**Type:** TransferResult

**Since:** 16

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Communication.Bluetooth.Core

**System API:** This is a system API.

## currentBytes

```TypeScript
currentBytes: long
```

Number of bytes of the file that have been transferred currently

**Type:** long

**Since:** 16

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Communication.Bluetooth.Core

**System API:** This is a system API.

## currentCount

```TypeScript
currentCount: int
```

Number of files currently transferred

**Type:** int

**Since:** 16

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Communication.Bluetooth.Core

**System API:** This is a system API.

## remoteDeviceId

```TypeScript
remoteDeviceId: string
```

Device Address of the peer transmission object

**Type:** string

**Since:** 16

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Communication.Bluetooth.Core

**System API:** This is a system API.

## filePath

```TypeScript
filePath: string
```

Path of the file to be transferred.

**Type:** string

**Since:** 16

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Communication.Bluetooth.Core

**System API:** This is a system API.

## totalBytes

```TypeScript
totalBytes: long
```

Total number of file bytes to transfer

**Type:** long

**Since:** 16

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Communication.Bluetooth.Core

**System API:** This is a system API.

## remoteDeviceName

```TypeScript
remoteDeviceName: string
```

Device name of the peer transmission object

**Type:** string

**Since:** 16

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Communication.Bluetooth.Core

**System API:** This is a system API.

## totalCount

```TypeScript
totalCount: int
```

Total number of transferred files

**Type:** int

**Since:** 16

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Communication.Bluetooth.Core

**System API:** This is a system API.

## status

```TypeScript
status: TransferStatus
```

File transfer status

**Type:** TransferStatus

**Since:** 16

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Communication.Bluetooth.Core

**System API:** This is a system API.

## direction

```TypeScript
direction: DirectionType
```

File Transfer Direction

**Type:** DirectionType

**Since:** 16

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Communication.Bluetooth.Core

**System API:** This is a system API.

