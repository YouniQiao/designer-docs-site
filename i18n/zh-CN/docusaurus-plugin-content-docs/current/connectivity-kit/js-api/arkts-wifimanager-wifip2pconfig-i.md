# WifiP2PConfig

P2P config.

**起始版本：** 9

**系统能力：** SystemCapability.Communication.WiFi.P2P

## 导入模块

```TypeScript
import { wifiManager } from '@kit.ConnectivityKit';
```

## goFreq

```TypeScript
goFreq?: int
```

Group owner frequency

**类型：** int

**起始版本：** 23

**系统能力：** SystemCapability.Communication.WiFi.P2P

## groupName

```TypeScript
groupName: string
```

Group name

**类型：** string

**起始版本：** 9

**系统能力：** SystemCapability.Communication.WiFi.P2P

## deviceAddress

```TypeScript
deviceAddress: string
```

Device mac address

**类型：** string

**起始版本：** 9

**系统能力：** SystemCapability.Communication.WiFi.P2P

## goBand

```TypeScript
goBand: GroupOwnerBand
```

Group owner band

**类型：** GroupOwnerBand

**起始版本：** 9

**系统能力：** SystemCapability.Communication.WiFi.P2P

## netId

```TypeScript
netId: int
```

Group network ID. When creating a group, -1 indicates creates a temporary group, -2: indicates creates a persistent group

**类型：** int

**起始版本：** 9

**系统能力：** SystemCapability.Communication.WiFi.P2P

## passphrase

```TypeScript
passphrase: string
```

The passphrase of this {@code WifiP2pConfig} instance

**类型：** string

**起始版本：** 9

**系统能力：** SystemCapability.Communication.WiFi.P2P

## deviceAddressType

```TypeScript
deviceAddressType?: DeviceAddressType
```

Device mac address type

**类型：** DeviceAddressType

**起始版本：** 10

**系统能力：** SystemCapability.Communication.WiFi.P2P

