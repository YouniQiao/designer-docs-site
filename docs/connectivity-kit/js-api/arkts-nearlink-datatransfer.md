# @ohos.nearlink.dataTransfer

Provides methods to operate and manage data transfer of NearLink.

**Since:** 26.0.0

**System capability:** SystemCapability.Communication.NearLink.Base

## Summary

### Functions

| Name | Description |
| --- | --- |
| [connect](arkts-connectivity-connect-f.md#connect-1) | Connects to a server. If the connection is successful, data can be sent to the server. |
| [createPort](arkts-connectivity-createport-f.md#createport-1) | Creates a NearLink listening port that can receive data by UUID. |
| [destroyPort](arkts-connectivity-destroyport-f.md#destroyport-1) | Destroys a listen port and releases related resources by UUID. |
| [disconnect](arkts-connectivity-disconnect-f.md#disconnect-1) | Disconnects or stops an ongoing connection to a server. |
| [getConnectionState](arkts-connectivity-getconnectionstate-f.md#getconnectionstate-1) | Obtains the connection status for data transfer. |
| [offConnectionStateChanged](arkts-connectivity-offconnectionstatechanged-f.md#offconnectionstatechanged-1) | Unsubscribes from the connection state change event. |
| [offReadData](arkts-connectivity-offreaddata-f.md#offreaddata-1) | Unsubscribes from the event reported when data is read from the port. |
| [onConnectionStateChanged](arkts-connectivity-onconnectionstatechanged-f.md#onconnectionstatechanged-1) | Subscribes to the connection state change event.This event is accessible only to applications that granted the ohos.permission.NEARLINK_ACCESS permission. |
| [onReadData](arkts-connectivity-onreaddata-f.md#onreaddata-1) | Subscribes to the event reported when data is read from the port.This event is accessible only to applications that granted the ohos.permission.NEARLINK_ACCESS permission. |
| [writeData](arkts-connectivity-writedata-f.md#writedata-1) | Writes data by address and UUID. |

### Interfaces

| Name | Description |
| --- | --- |
| [ConnectionParams](arkts-connectivity-connectionparams-i.md) | Describes the parameters for connection. |
| [ConnectionResult](arkts-connectivity-connectionresult-i.md) | Describes the parameters for connection result. |
| [ConnectionStateParams](arkts-connectivity-connectionstateparams-i.md) | Describes the parameters required for obtaining the connection status. |
| [DataParams](arkts-connectivity-dataparams-i.md) | Describes the parameters for Data. |

### Enums

| Name | Description |
| --- | --- |
| [TransferMode](arkts-connectivity-transfermode-e.md) | Indicates the data transfer mode. |

### Types

| Name | Description |
| --- | --- |
| [ConnectionState](arkts-connectivity-connectionstate-t.md) | Indicates the connection state. |

