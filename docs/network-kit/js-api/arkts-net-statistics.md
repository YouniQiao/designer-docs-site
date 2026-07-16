# @ohos.net.statistics

Obtains traffic statistics.

**Since:** 15

**System capability:** SystemCapability.Communication.NetManager.Core

## Modules to Import

```TypeScript
import { statistics } from '@kit.NetworkKit';
```

## Summary

### Functions

| Name | Description |
| --- | --- |
| [getAllRxBytes](arkts-network-getallrxbytes-f.md#getallrxbytes-1) | Queries the data traffic (including all TCP and UDP data packets) received through all NICs. |
| [getAllRxBytes](arkts-network-getallrxbytes-f.md#getallrxbytes-2) | Queries the data traffic (including all TCP and UDP data packets) received through all NICs. |
| [getAllTxBytes](arkts-network-getalltxbytes-f.md#getalltxbytes-1) | Queries the data traffic (including all TCP and UDP data packets) sent through all NICs. |
| [getAllTxBytes](arkts-network-getalltxbytes-f.md#getalltxbytes-2) | Queries the data traffic (including all TCP and UDP data packets) sent through all NICs. |
| [getCellularRxBytes](arkts-network-getcellularrxbytes-f.md#getcellularrxbytes-1) | Queries the data traffic (including all TCP and UDP data packets) received through the cellular network. |
| [getCellularRxBytes](arkts-network-getcellularrxbytes-f.md#getcellularrxbytes-2) | Queries the data traffic (including all TCP and UDP data packets) received through the cellular network. |
| [getCellularTxBytes](arkts-network-getcellulartxbytes-f.md#getcellulartxbytes-1) | Queries the data traffic (including all TCP and UDP data packets) sent through the cellular network. |
| [getCellularTxBytes](arkts-network-getcellulartxbytes-f.md#getcellulartxbytes-2) | Queries the data traffic (including all TCP and UDP data packets) sent through the cellular network. |
| [getIfaceRxBytes](arkts-network-getifacerxbytes-f.md#getifacerxbytes-1) | Queries the data traffic (including all TCP and UDP data packets) received through a specified NIC. |
| [getIfaceRxBytes](arkts-network-getifacerxbytes-f.md#getifacerxbytes-2) | Queries the data traffic (including all TCP and UDP data packets) received through a specified NIC. |
| [getIfaceTxBytes](arkts-network-getifacetxbytes-f.md#getifacetxbytes-1) | Queries the data traffic (including all TCP and UDP data packets) sent through a specified NIC. |
| [getIfaceTxBytes](arkts-network-getifacetxbytes-f.md#getifacetxbytes-2) | Queries the data traffic (including all TCP and UDP data packets) sent through a specified NIC. |
| [getSelfTrafficStats](arkts-network-getselftrafficstats-f.md#getselftrafficstats-1) | Get the traffic usage details of the specified network of the calling application in the specified time period and the specified networktype. |
| [getSockfdRxBytes](arkts-network-getsockfdrxbytes-f.md#getsockfdrxbytes-1) | Queries the data traffic (including all TCP and UDP data packets) received through a specified sockfd. |
| [getSockfdRxBytes](arkts-network-getsockfdrxbytes-f.md#getsockfdrxbytes-2) | Queries the data traffic (including all TCP and UDP data packets) received through a specified sockfd. |
| [getSockfdTxBytes](arkts-network-getsockfdtxbytes-f.md#getsockfdtxbytes-1) | Queries the data traffic (including all TCP and UDP data packets) sent through a specified sockfd. |
| [getSockfdTxBytes](arkts-network-getsockfdtxbytes-f.md#getsockfdtxbytes-2) | Queries the data traffic (including all TCP and UDP data packets) sent through a specified sockfd. |
| [getUidRxBytes](arkts-network-getuidrxbytes-f.md#getuidrxbytes-1) | Queries the data traffic (including all TCP and UDP data packets) received by a specified application. |
| [getUidRxBytes](arkts-network-getuidrxbytes-f.md#getuidrxbytes-2) | Queries the data traffic (including all TCP and UDP data packets) received by a specified application. |
| [getUidTxBytes](arkts-network-getuidtxbytes-f.md#getuidtxbytes-1) | Queries the data traffic (including all TCP and UDP data packets) sent by a specified application. |
| [getUidTxBytes](arkts-network-getuidtxbytes-f.md#getuidtxbytes-2) | Queries the data traffic (including all TCP and UDP data packets) sent by a specified application. |

<!--Del-->
### Functions（系统接口）

| Name | Description |
| --- | --- |
| [getMonthTrafficStats](arkts-network-getmonthtrafficstats-f-sys.md#getmonthtrafficstats-1) | Get this month traffic data of the cellular network. |
| [getTrafficStatsByIface](arkts-network-gettrafficstatsbyiface-f-sys.md#gettrafficstatsbyiface-1) | Get the traffic usage details of the network interface in the specified time period. |
| [getTrafficStatsByIface](arkts-network-gettrafficstatsbyiface-f-sys.md#gettrafficstatsbyiface-2) | Get the traffic usage details of the network interface in the specified time period. |
| [getTrafficStatsByNetwork](arkts-network-gettrafficstatsbynetwork-f-sys.md#gettrafficstatsbynetwork-1) | Get the traffic usage details of the specified network of all applications in the specified time period. |
| [getTrafficStatsByUid](arkts-network-gettrafficstatsbyuid-f-sys.md#gettrafficstatsbyuid-1) | Get the traffic usage details of the specified time period of the application. |
| [getTrafficStatsByUid](arkts-network-gettrafficstatsbyuid-f-sys.md#gettrafficstatsbyuid-2) | Get the traffic usage details of the specified time period of the application. |
| [getTrafficStatsByUidNetwork](arkts-network-gettrafficstatsbyuidnetwork-f-sys.md#gettrafficstatsbyuidnetwork-1) | Get the traffic usage sequence of the specified network of the application in the specified time period. |
| [off](arkts-network-off-f-sys.md#off-1) | Unregister notifications of network traffic updates. |
| [on](arkts-network-on-f-sys.md#on-1) | Register notifications of network traffic updates. |
| [setCalibrationTraffic](arkts-network-setcalibrationtraffic-f-sys.md#setcalibrationtraffic-1) | Set calibration traffic data. |
| [updateIfacesStats](arkts-network-updateifacesstats-f-sys.md#updateifacesstats-1) | Updates network interface statistics data. |
| [updateStatsData](arkts-network-updatestatsdata-f-sys.md#updatestatsdata-1) | Updates network statistics data. |
<!--DelEnd-->

### Interfaces

| Name | Description |
| --- | --- |
| [NetStatsInfo](arkts-network-netstatsinfo-i.md) | Detailed information of statistics. |
| [NetworkInfo](arkts-network-networkinfo-i.md) | Parameters for obtaining detailed information on specified network traffic usage. |

<!--Del-->
### Interfaces（系统接口）

| Name | Description |
| --- | --- |
| [IfaceInfo](arkts-network-ifaceinfo-i-sys.md) | Parameters for obtaining detailed information on network interface traffic usage. |
| [NetStatsChangeInfo](arkts-network-netstatschangeinfo-i-sys.md) | Used to monitor and manage the status and usage of network interfaces. |
| [UidInfo](arkts-network-uidinfo-i-sys.md) | Parameters for obtaining detailed information on application traffic usage. |
<!--DelEnd-->

### Types

| Name | Description |
| --- | --- |
| [NetBearType](arkts-network-netbeartype-t.md) |  |

<!--Del-->
### Types（系统接口）

| Name | Description |
| --- | --- |
| [NetStatsInfoSequence](arkts-network-netstatsinfosequence-t-sys.md) | An {@link NetStatsInfo} array with start time and end time. |
| [UidNetStatsInfo](arkts-network-uidnetstatsinfo-t-sys.md) | {@link NetStatsInfo} for every UID. Key is UID. |
<!--DelEnd-->

