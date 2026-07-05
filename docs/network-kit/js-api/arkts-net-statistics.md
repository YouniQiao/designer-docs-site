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
| [getAllRxBytes](arkts-statistics-getallrxbytes-f.md#getAllRxBytes-1) | Queries the data traffic (including all TCP and UDP data packets) received through all NICs. |
| [getAllRxBytes](arkts-statistics-getallrxbytes-f.md#getAllRxBytes-2) | Queries the data traffic (including all TCP and UDP data packets) received through all NICs. |
| [getAllTxBytes](arkts-statistics-getalltxbytes-f.md#getAllTxBytes-1) | Queries the data traffic (including all TCP and UDP data packets) sent through all NICs. |
| [getAllTxBytes](arkts-statistics-getalltxbytes-f.md#getAllTxBytes-2) | Queries the data traffic (including all TCP and UDP data packets) sent through all NICs. |
| [getCellularRxBytes](arkts-statistics-getcellularrxbytes-f.md#getCellularRxBytes-1) | Queries the data traffic (including all TCP and UDP data packets) received through the cellular network. |
| [getCellularRxBytes](arkts-statistics-getcellularrxbytes-f.md#getCellularRxBytes-2) | Queries the data traffic (including all TCP and UDP data packets) received through the cellular network. |
| [getCellularTxBytes](arkts-statistics-getcellulartxbytes-f.md#getCellularTxBytes-1) | Queries the data traffic (including all TCP and UDP data packets) sent through the cellular network. |
| [getCellularTxBytes](arkts-statistics-getcellulartxbytes-f.md#getCellularTxBytes-2) | Queries the data traffic (including all TCP and UDP data packets) sent through the cellular network. |
| [getIfaceRxBytes](arkts-statistics-getifacerxbytes-f.md#getIfaceRxBytes-1) | Queries the data traffic (including all TCP and UDP data packets) received through a specified NIC. |
| [getIfaceRxBytes](arkts-statistics-getifacerxbytes-f.md#getIfaceRxBytes-2) | Queries the data traffic (including all TCP and UDP data packets) received through a specified NIC. |
| [getIfaceTxBytes](arkts-statistics-getifacetxbytes-f.md#getIfaceTxBytes-1) | Queries the data traffic (including all TCP and UDP data packets) sent through a specified NIC. |
| [getIfaceTxBytes](arkts-statistics-getifacetxbytes-f.md#getIfaceTxBytes-2) | Queries the data traffic (including all TCP and UDP data packets) sent through a specified NIC. |
| <!--DelRow-->[getMonthTrafficStats](arkts-statistics-getmonthtrafficstats-f-sys.md#getMonthTrafficStats-1) | Get this month traffic data of the cellular network. |
| [getSelfTrafficStats](arkts-statistics-getselftrafficstats-f.md#getSelfTrafficStats-1) | Get the traffic usage details of the specified network of the calling application in the specified time period and the specified networktype. |
| [getSockfdRxBytes](arkts-statistics-getsockfdrxbytes-f.md#getSockfdRxBytes-1) | Queries the data traffic (including all TCP and UDP data packets) received through a specified sockfd. |
| [getSockfdRxBytes](arkts-statistics-getsockfdrxbytes-f.md#getSockfdRxBytes-2) | Queries the data traffic (including all TCP and UDP data packets) received through a specified sockfd. |
| [getSockfdTxBytes](arkts-statistics-getsockfdtxbytes-f.md#getSockfdTxBytes-1) | Queries the data traffic (including all TCP and UDP data packets) sent through a specified sockfd. |
| [getSockfdTxBytes](arkts-statistics-getsockfdtxbytes-f.md#getSockfdTxBytes-2) | Queries the data traffic (including all TCP and UDP data packets) sent through a specified sockfd. |
| <!--DelRow-->[getTrafficStatsByIface](arkts-statistics-gettrafficstatsbyiface-f-sys.md#getTrafficStatsByIface-1) | Get the traffic usage details of the network interface in the specified time period. |
| <!--DelRow-->[getTrafficStatsByIface](arkts-statistics-gettrafficstatsbyiface-f-sys.md#getTrafficStatsByIface-2) | Get the traffic usage details of the network interface in the specified time period. |
| <!--DelRow-->[getTrafficStatsByNetwork](arkts-statistics-gettrafficstatsbynetwork-f-sys.md#getTrafficStatsByNetwork-1) | Get the traffic usage details of the specified network of all applications in the specified time period. |
| <!--DelRow-->[getTrafficStatsByUid](arkts-statistics-gettrafficstatsbyuid-f-sys.md#getTrafficStatsByUid-1) | Get the traffic usage details of the specified time period of the application. |
| <!--DelRow-->[getTrafficStatsByUid](arkts-statistics-gettrafficstatsbyuid-f-sys.md#getTrafficStatsByUid-2) | Get the traffic usage details of the specified time period of the application. |
| <!--DelRow-->[getTrafficStatsByUidNetwork](arkts-statistics-gettrafficstatsbyuidnetwork-f-sys.md#getTrafficStatsByUidNetwork-1) | Get the traffic usage sequence of the specified network of the application in the specified time period. |
| [getUidRxBytes](arkts-statistics-getuidrxbytes-f.md#getUidRxBytes-1) | Queries the data traffic (including all TCP and UDP data packets) received by a specified application. |
| [getUidRxBytes](arkts-statistics-getuidrxbytes-f.md#getUidRxBytes-2) | Queries the data traffic (including all TCP and UDP data packets) received by a specified application. |
| [getUidTxBytes](arkts-statistics-getuidtxbytes-f.md#getUidTxBytes-1) | Queries the data traffic (including all TCP and UDP data packets) sent by a specified application. |
| [getUidTxBytes](arkts-statistics-getuidtxbytes-f.md#getUidTxBytes-2) | Queries the data traffic (including all TCP and UDP data packets) sent by a specified application. |
| <!--DelRow-->[off](arkts-statistics-off-f-sys.md#off-1) | Unregister notifications of network traffic updates. |
| <!--DelRow-->[offNetStatsChange](arkts-statistics-offnetstatschange-f-sys.md#offNetStatsChange-1) | Unregister notifications of network traffic updates. |
| <!--DelRow-->[on](arkts-statistics-on-f-sys.md#on-1) | Register notifications of network traffic updates. |
| <!--DelRow-->[onNetStatsChange](arkts-statistics-onnetstatschange-f-sys.md#onNetStatsChange-1) | Register notifications of network traffic updates. |
| <!--DelRow-->[setCalibrationTraffic](arkts-statistics-setcalibrationtraffic-f-sys.md#setCalibrationTraffic-1) | Set calibration traffic data. |
| <!--DelRow-->[updateIfacesStats](arkts-statistics-updateifacesstats-f-sys.md#updateIfacesStats-1) | Updates network interface statistics data. |
| <!--DelRow-->[updateStatsData](arkts-statistics-updatestatsdata-f-sys.md#updateStatsData-1) | Updates network statistics data. |

### Interfaces

| Name | Description |
| --- | --- |
| <!--DelRow-->[IfaceInfo](arkts-statistics-ifaceinfo-i-sys.md) | Parameters for obtaining detailed information on network interface traffic usage. |
| <!--DelRow-->[NetStatsChangeInfo](arkts-statistics-netstatschangeinfo-i-sys.md) | Used to monitor and manage the status and usage of network interfaces. |
| [NetStatsInfo](arkts-statistics-netstatsinfo-i.md) | Detailed information of statistics. |
| <!--DelRow-->[NetStatsInfoSequenceItem](arkts-statistics-netstatsinfosequenceitem-i-sys.md) | Parameters for an {@link NetStatsInfo} with start time and end time. |
| [NetworkInfo](arkts-statistics-networkinfo-i.md) | Parameters for obtaining detailed information on specified network traffic usage. |
| <!--DelRow-->[UidInfo](arkts-statistics-uidinfo-i-sys.md) | Parameters for obtaining detailed information on application traffic usage. |

### Types

| Name | Description |
| --- | --- |
| [NetBearType](arkts-statistics-netbeartype-t.md) |  |
| <!--DelRow-->[NetStatsInfoSequence](arkts-statistics-netstatsinfosequence-t-sys.md) | An {@link NetStatsInfo} array with start time and end time. |
| <!--DelRow-->[NetStatsInfoSequence](arkts-statistics-netstatsinfosequence-t-sys.md) | Array of {@link NetStatsInfoSequenceItem}. |
| <!--DelRow-->[UidNetStatsInfo](arkts-statistics-uidnetstatsinfo-t-sys.md) | {@link NetStatsInfo} for every UID. Key is UID. |
| <!--DelRow-->[UidNetStatsInfo](arkts-statistics-uidnetstatsinfo-t-sys.md) | {@link NetStatsInfo} for every UID. Key is UID. |

