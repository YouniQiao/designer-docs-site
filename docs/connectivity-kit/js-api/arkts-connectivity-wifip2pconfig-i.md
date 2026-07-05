# WifiP2PConfig

P2P config.

**Since:** 9

**System capability:** SystemCapability.Communication.WiFi.P2P

## Modules to Import

```TypeScript
import { wifiManager } from '@ohos.wifiManager';
```

## deviceAddress

```TypeScript
deviceAddress: string
```

Device mac address

**Type:** string

**Since:** 9

**System capability:** SystemCapability.Communication.WiFi.P2P

## deviceAddressType

```TypeScript
deviceAddressType?: DeviceAddressType
```

Device mac address type

**Type:** DeviceAddressType

**Since:** 10

**System capability:** SystemCapability.Communication.WiFi.P2P

## goBand

```TypeScript
goBand: GroupOwnerBand
```

Group owner band

**Type:** GroupOwnerBand

**Since:** 9

**System capability:** SystemCapability.Communication.WiFi.P2P

## goFreq

```TypeScript
goFreq?: number
```

Group owner frequency

**Type:** number

**Since:** 23

**System capability:** SystemCapability.Communication.WiFi.P2P

## groupName

```TypeScript
groupName: string
```

Group name

**Type:** string

**Since:** 9

**System capability:** SystemCapability.Communication.WiFi.P2P

## netId

```TypeScript
netId: number
```

Group network ID. When creating a group, -1 indicates creates a temporary group, -2: indicates creates a persistent group

**Type:** number

**Since:** 9

**System capability:** SystemCapability.Communication.WiFi.P2P

## passphrase

```TypeScript
passphrase: string
```

The passphrase of this {@code WifiP2pConfig} instance

**Type:** string

**Since:** 9

**System capability:** SystemCapability.Communication.WiFi.P2P

