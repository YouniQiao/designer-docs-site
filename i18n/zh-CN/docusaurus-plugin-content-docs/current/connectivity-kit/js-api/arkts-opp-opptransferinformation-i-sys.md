# OppTransferInformation

Describes the transferred file information.

**起始版本：** 16

**系统能力：** SystemCapability.Communication.Bluetooth.Core

**系统接口：** 此接口为系统接口。

## 导入模块

```TypeScript
import { opp } from '@kit.ConnectivityKit';
```

## result

```TypeScript
result: TransferResult
```

File transfer result

**类型：** TransferResult

**起始版本：** 16

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Communication.Bluetooth.Core

**系统接口：** 此接口为系统接口。

## currentBytes

```TypeScript
currentBytes: long
```

Number of bytes of the file that have been transferred currently

**类型：** long

**起始版本：** 16

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Communication.Bluetooth.Core

**系统接口：** 此接口为系统接口。

## currentCount

```TypeScript
currentCount: int
```

Number of files currently transferred

**类型：** int

**起始版本：** 16

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Communication.Bluetooth.Core

**系统接口：** 此接口为系统接口。

## remoteDeviceId

```TypeScript
remoteDeviceId: string
```

Device Address of the peer transmission object

**类型：** string

**起始版本：** 16

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Communication.Bluetooth.Core

**系统接口：** 此接口为系统接口。

## filePath

```TypeScript
filePath: string
```

Path of the file to be transferred.

**类型：** string

**起始版本：** 16

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Communication.Bluetooth.Core

**系统接口：** 此接口为系统接口。

## totalBytes

```TypeScript
totalBytes: long
```

Total number of file bytes to transfer

**类型：** long

**起始版本：** 16

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Communication.Bluetooth.Core

**系统接口：** 此接口为系统接口。

## remoteDeviceName

```TypeScript
remoteDeviceName: string
```

Device name of the peer transmission object

**类型：** string

**起始版本：** 16

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Communication.Bluetooth.Core

**系统接口：** 此接口为系统接口。

## totalCount

```TypeScript
totalCount: int
```

Total number of transferred files

**类型：** int

**起始版本：** 16

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Communication.Bluetooth.Core

**系统接口：** 此接口为系统接口。

## status

```TypeScript
status: TransferStatus
```

File transfer status

**类型：** TransferStatus

**起始版本：** 16

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Communication.Bluetooth.Core

**系统接口：** 此接口为系统接口。

## direction

```TypeScript
direction: DirectionType
```

File Transfer Direction

**类型：** DirectionType

**起始版本：** 16

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Communication.Bluetooth.Core

**系统接口：** 此接口为系统接口。

