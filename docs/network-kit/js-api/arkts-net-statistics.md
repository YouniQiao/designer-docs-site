# @ohos.net.statistics

Obtains traffic statistics.

**Since:** 15

<!--Device-unnamed-declare namespace statistics--><!--Device-unnamed-declare namespace statistics-End-->

**System capability:** SystemCapability.Communication.NetManager.Core

## Modules to Import

```TypeScript
import { statistics } from '@kit.NetworkKit';
```

## Summary

### Functions

| Name | Description |
| --- | --- |
| [getAllRxBytes](arkts-network-statistics-getallrxbytes-f.md#getallrxbytes-1) | Queries the data traffic (including all TCP and UDP data packets) received through all NICs. |
| [getAllRxBytes](arkts-network-statistics-getallrxbytes-f.md#getallrxbytes-2) | Queries the data traffic (including all TCP and UDP data packets) received through all NICs. |
| [getAllTxBytes](arkts-network-statistics-getalltxbytes-f.md#getalltxbytes-1) | Queries the data traffic (including all TCP and UDP data packets) sent through all NICs. |
| [getAllTxBytes](arkts-network-statistics-getalltxbytes-f.md#getalltxbytes-2) | Queries the data traffic (including all TCP and UDP data packets) sent through all NICs. |
| [getCellularRxBytes](arkts-network-statistics-getcellularrxbytes-f.md#getcellularrxbytes-1) | Queries the data traffic (including all TCP and UDP data packets) received through the cellular network. |
| [getCellularRxBytes](arkts-network-statistics-getcellularrxbytes-f.md#getcellularrxbytes-2) | Queries the data traffic (including all TCP and UDP data packets) received through the cellular network. |
| [getCellularTxBytes](arkts-network-statistics-getcellulartxbytes-f.md#getcellulartxbytes-1) | Queries the data traffic (including all TCP and UDP data packets) sent through the cellular network. |
| [getCellularTxBytes](arkts-network-statistics-getcellulartxbytes-f.md#getcellulartxbytes-2) | Queries the data traffic (including all TCP and UDP data packets) sent through the cellular network. |
| [getIfaceRxBytes](arkts-network-statistics-getifacerxbytes-f.md#getifacerxbytes-1) | Queries the data traffic (including all TCP and UDP data packets) received through a specified NIC. |
| [getIfaceRxBytes](arkts-network-statistics-getifacerxbytes-f.md#getifacerxbytes-2) | Queries the data traffic (including all TCP and UDP data packets) received through a specified NIC. |
| [getIfaceTxBytes](arkts-network-statistics-getifacetxbytes-f.md#getifacetxbytes-1) | Queries the data traffic (including all TCP and UDP data packets) sent through a specified NIC. |
| [getIfaceTxBytes](arkts-network-statistics-getifacetxbytes-f.md#getifacetxbytes-2) | Queries the data traffic (including all TCP and UDP data packets) sent through a specified NIC. |
| [getSelfTrafficStats](arkts-network-statistics-getselftrafficstats-f.md#getselftrafficstats-1) | Get the traffic usage details of the specified network of the calling application in the specified time period and the specified networktype. |
| [getSockfdRxBytes](arkts-network-statistics-getsockfdrxbytes-f.md#getsockfdrxbytes-1) | Queries the data traffic (including all TCP and UDP data packets) received through a specified sockfd. |
| [getSockfdRxBytes](arkts-network-statistics-getsockfdrxbytes-f.md#getsockfdrxbytes-2) | Queries the data traffic (including all TCP and UDP data packets) received through a specified sockfd. |
| [getSockfdTxBytes](arkts-network-statistics-getsockfdtxbytes-f.md#getsockfdtxbytes-1) | Queries the data traffic (including all TCP and UDP data packets) sent through a specified sockfd. |
| [getSockfdTxBytes](arkts-network-statistics-getsockfdtxbytes-f.md#getsockfdtxbytes-2) | Queries the data traffic (including all TCP and UDP data packets) sent through a specified sockfd. |
| [getUidRxBytes](arkts-network-statistics-getuidrxbytes-f.md#getuidrxbytes-1) | Queries the data traffic (including all TCP and UDP data packets) received by a specified application. |
| [getUidRxBytes](arkts-network-statistics-getuidrxbytes-f.md#getuidrxbytes-2) | Queries the data traffic (including all TCP and UDP data packets) received by a specified application. |
| [getUidTxBytes](arkts-network-statistics-getuidtxbytes-f.md#getuidtxbytes-1) | Queries the data traffic (including all TCP and UDP data packets) sent by a specified application. |
| [getUidTxBytes](arkts-network-statistics-getuidtxbytes-f.md#getuidtxbytes-2) | Queries the data traffic (including all TCP and UDP data packets) sent by a specified application. |

<!--Del-->
### Functions（系统接口）

| Name | Description |
| --- | --- |
| [getMonthTrafficStats](arkts-network-statistics-getmonthtrafficstats-f-sys.md#getmonthtrafficstats-1) | Get this month traffic data of the cellular network. |
| [getTrafficStatsByIface](arkts-network-statistics-gettrafficstatsbyiface-f-sys.md#gettrafficstatsbyiface-1) | Get the traffic usage details of the network interface in the specified time period. |
| [getTrafficStatsByIface](arkts-network-statistics-gettrafficstatsbyiface-f-sys.md#gettrafficstatsbyiface-2) | Get the traffic usage details of the network interface in the specified time period. |
| [getTrafficStatsByNetwork](arkts-network-statistics-gettrafficstatsbynetwork-f-sys.md#gettrafficstatsbynetwork-1) | Get the traffic usage details of the specified network of all applications in the specified time period. |
| [getTrafficStatsByUid](arkts-network-statistics-gettrafficstatsbyuid-f-sys.md#gettrafficstatsbyuid-1) | Get the traffic usage details of the specified time period of the application. |
| [getTrafficStatsByUid](arkts-network-statistics-gettrafficstatsbyuid-f-sys.md#gettrafficstatsbyuid-2) | Get the traffic usage details of the specified time period of the application. |
| [getTrafficStatsByUidNetwork](arkts-network-statistics-gettrafficstatsbyuidnetwork-f-sys.md#gettrafficstatsbyuidnetwork-1) | Get the traffic usage sequence of the specified network of the application in the specified time period. |
| [off](arkts-network-statistics-off-f-sys.md#off-1) | Unregister notifications of network traffic updates. |
| [on](arkts-network-statistics-on-f-sys.md#on-1) | Register notifications of network traffic updates. |
| [setCalibrationTraffic](arkts-network-statistics-setcalibrationtraffic-f-sys.md#setcalibrationtraffic-1) | Set calibration traffic data. |
| [updateIfacesStats](arkts-network-statistics-updateifacesstats-f-sys.md#updateifacesstats-1) | Updates network interface statistics data. |
| [updateStatsData](arkts-network-statistics-updatestatsdata-f-sys.md#updatestatsdata-1) | Updates network statistics data. |
<!--DelEnd-->

### Interfaces

| Name | Description |
| --- | --- |
| [NetStatsInfo](arkts-network-statistics-netstatsinfo-i.md) | Detailed information of statistics. |
| [NetworkInfo](arkts-network-statistics-networkinfo-i.md) | Parameters for obtaining detailed information on specified network traffic usage. |

<!--Del-->
### Interfaces（系统接口）

| Name | Description |
| --- | --- |
| [IfaceInfo](arkts-network-statistics-ifaceinfo-i-sys.md) | Parameters for obtaining detailed information on network interface traffic usage. |
| [NetStatsChangeInfo](arkts-network-statistics-netstatschangeinfo-i-sys.md) | Used to monitor and manage the status and usage of network interfaces. |
| [UidInfo](arkts-network-statistics-uidinfo-i-sys.md) | Parameters for obtaining detailed information on application traffic usage. |
<!--DelEnd-->

### Types

| Name | Description |
| --- | --- |
| [NetBearType](arkts-network-statistics-netbeartype-t.md) |  |

<!--Del-->
### Types（系统接口）

| Name | Description |
| --- | --- |
| [NetStatsInfoSequence](arkts-network-statistics-netstatsinfosequence-t-sys.md) | An {@link NetStatsInfo} array with start time and end time. |
| [UidNetStatsInfo](arkts-network-statistics-uidnetstatsinfo-t-sys.md) | {@link NetStatsInfo} for every UID. Key is UID. |
<!--DelEnd-->

