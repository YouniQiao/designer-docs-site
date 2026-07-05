# USBEndpoint

通过USB发送和接收数据的端口。通过[USBInterface]usbManager.USBInterface获取。 > **说明：** > > 主机控制器按照Endpoint类型调度。 > > 协议层打包时依赖type决定传输特性。

**Since:** 9

**System capability:** SystemCapability.USB.USBManager

## Modules to Import

```TypeScript
import { usbManager } from '@kit.BasicServicesKit';
```

## number

```TypeScript
number: number
```

端点号。

**Type:** number

**Since:** 9

**System capability:** SystemCapability.USB.USBManager

## address

```TypeScript
address: int
```

端点地址。

**Type:** int

**Since:** 9

**System capability:** SystemCapability.USB.USBManager

## endpointAddr

```TypeScript
endpointAddr: int
```

Endpoint address

**Type:** int

**Since:** 23

**System capability:** SystemCapability.USB.USBManager

## interval

```TypeScript
interval: int
```

端点间隔。（单位：毫秒）

**Type:** int

**Since:** 9

**System capability:** SystemCapability.USB.USBManager

## attributes

```TypeScript
attributes: int
```

端点属性。

**Type:** int

**Since:** 9

**System capability:** SystemCapability.USB.USBManager

## interfaceId

```TypeScript
interfaceId: int
```

端点所属的接口的唯一标识。

**Type:** int

**Since:** 9

**System capability:** SystemCapability.USB.USBManager

## type

```TypeScript
type: int
```

端点类型。取值见[UsbEndpointTransferType]usbManager.UsbEndpointTransferType

**Type:** int

**Since:** 9

**System capability:** SystemCapability.USB.USBManager

## maxPacketSize

```TypeScript
maxPacketSize: int
```

端点最大数据包大小。（单位：字节）

**Type:** int

**Since:** 9

**System capability:** SystemCapability.USB.USBManager

## direction

```TypeScript
direction: USBRequestDirection
```

端点的方向。

**Type:** USBRequestDirection

**Since:** 9

**System capability:** SystemCapability.USB.USBManager

