# NetPortStatesInfo

Defines port states of system network.

**Since:** 24

<!--Device-connection-export interface NetPortStatesInfo--><!--Device-connection-export interface NetPortStatesInfo-End-->

**System capability:** SystemCapability.Communication.NetManager.Core

## Modules to Import

```TypeScript
import { connection } from '@kit.NetworkKit';
```

## tcpPortStatesInfo

```TypeScript
tcpPortStatesInfo?: Array<TcpNetPortStatesInfo>
```

Port information of the TCP network.

**Type:** Array<TcpNetPortStatesInfo>

**Since:** 24

**Model restriction:** This API can be used only in the stage model.

<!--Device-NetPortStatesInfo-tcpPortStatesInfo?: Array<TcpNetPortStatesInfo>--><!--Device-NetPortStatesInfo-tcpPortStatesInfo?: Array<TcpNetPortStatesInfo>-End-->

**System capability:** SystemCapability.Communication.NetManager.Core

## udpPortStatesInfo

```TypeScript
udpPortStatesInfo?: Array<UdpNetPortStatesInfo>
```

Port information of the UDP network.

**Type:** Array<UdpNetPortStatesInfo>

**Since:** 24

**Model restriction:** This API can be used only in the stage model.

<!--Device-NetPortStatesInfo-udpPortStatesInfo?: Array<UdpNetPortStatesInfo>--><!--Device-NetPortStatesInfo-udpPortStatesInfo?: Array<UdpNetPortStatesInfo>-End-->

**System capability:** SystemCapability.Communication.NetManager.Core

