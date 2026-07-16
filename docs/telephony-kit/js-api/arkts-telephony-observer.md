# @ohos.telephony.observer

Monitors telephony state updates of a device, including updates of the network state,
signal strength, call state, the data link connection state and others.

**Since:** 6

**System capability:** SystemCapability.Telephony.StateRegistry

## Modules to Import

```TypeScript
import { observer } from '@kit.TelephonyKit';
```

## Summary

### Functions

| Name | Description |
| --- | --- |
| [off](arkts-telephony-off-f.md#off-1) | Cancel callback when the network state is updated. |
| [off](arkts-telephony-off-f.md#off-2) | Cancel callback when the signal strength is updated. |
| [off](arkts-telephony-off-f.md#off-4) | Cancel callback when the cellular data link connection state is updated. |
| [off](arkts-telephony-off-f.md#off-5) | Cancel callback when the uplink and downlink data flow state of cellular data services is updated. |
| [off](arkts-telephony-off-f.md#off-6) | Cancel callback when the call state is updated. |
| [off](arkts-telephony-off-f.md#off-7) | Cancel callback when the telCall state is updated. |
| [off](arkts-telephony-off-f.md#off-8) | Cancel callback when the sim state is updated. |
| [off](arkts-telephony-off-f.md#off-9) | Cancel to receive an ICC account change. |
| [offCCallStateChange](arkts-telephony-offccallstatechange-f.md#offccallstatechange-1) | Unsubscribes from the callback for listening to the carrier call state. |
| [offCommunicationStateChange](arkts-telephony-offcommunicationstatechange-f.md#offcommunicationstatechange-1) | Unsubscribes from the callback for listening to the 5A state. |
| [offGetSimActiveState](arkts-telephony-offgetsimactivestate-f.md#offgetsimactivestate-1) | Cancel callback when the sim active state is updated. |
| [on](arkts-telephony-on-f.md#on-1) | Callback when the network state corresponding to the default sim card is updated. |
| [on](arkts-telephony-on-f.md#on-2) | Callback when the network state corresponding to the monitored {@code slotId} is updated. |
| [on](arkts-telephony-on-f.md#on-3) | Callback when the signal strength corresponding to the default sim card is updated. |
| [on](arkts-telephony-on-f.md#on-4) | Callback when the signal strength corresponding to a monitored {@code slotId} is updated. |
| [on](arkts-telephony-on-f.md#on-7) | Callback when the cellular data link connection state corresponding to the default sim card is updated. |
| [on](arkts-telephony-on-f.md#on-8) | Callback when the cellular data link connection state corresponding to the monitored {@code slotId} is updated. |
| [on](arkts-telephony-on-f.md#on-9) | Callback when the uplink and downlink data flow state of cellular data servicescorresponding to the default sim card is updated. |
| [on](arkts-telephony-on-f.md#on-10) | Callback when the uplink and downlink data flow state of cellular data servicescorresponding to the monitored {@code slotId} is updated. |
| [on](arkts-telephony-on-f.md#on-11) | Callback when the call state corresponding to the default sim card is updated. |
| [on](arkts-telephony-on-f.md#on-12) | Callback when the call state corresponding to the monitored {@code slotId} is updated. |
| [on](arkts-telephony-on-f.md#on-13) | Callback when the telCall state corresponding to the monitored {@code slotId} is updated. |
| [on](arkts-telephony-on-f.md#on-14) | Callback when the sim state corresponding to the default sim card is updated. |
| [on](arkts-telephony-on-f.md#on-15) | Callback when the sim state corresponding to the monitored {@code slotId} is updated. |
| [on](arkts-telephony-on-f.md#on-16) | Receives an ICC account change. This callback is invoked when the ICC account updatesand the observer is added to monitor the updates. |
| [onCCallStateChange](arkts-telephony-onccallstatechange-f.md#onccallstatechange-1) | Called when the carrier call state changes. |
| [onCommunicationStateChange](arkts-telephony-oncommunicationstatechange-f.md#oncommunicationstatechange-1) | This API uses an asynchronous callback to return the result. |
| [onGetSimActiveState](arkts-telephony-ongetsimactivestate-f.md#ongetsimactivestate-1) | Subscribe to sim active state change events using a callback-based approach as an asynchronous method. |

<!--Del-->
### Functions（系统接口）

| Name | Description |
| --- | --- |
| [off](arkts-telephony-off-f-sys.md#off-3) | Cancel callback when the cell information is updated. |
| [on](arkts-telephony-on-f-sys.md#on-5) | Callback when the cell information corresponding to the default sim card is updated. |
| [on](arkts-telephony-on-f-sys.md#on-6) | Callback when the cell information corresponding to a monitored {@code slotId} is updated. |
<!--DelEnd-->

### Interfaces

| Name | Description |
| --- | --- |
| [CCallStateInfo](arkts-telephony-ccallstateinfo-i.md) | Indicates carrier call state and number. |
| [CallStateInfo](arkts-telephony-callstateinfo-i.md) | Indicates call state and number. |
| [DataConnectionStateInfo](arkts-telephony-dataconnectionstateinfo-i.md) | Indicates cellular data connect state and technology type. |
| [ObserverOptions](arkts-telephony-observeroptions-i.md) | Indicates observer options. |
| [SimStateData](arkts-telephony-simstatedata-i.md) | Indicates SIM card type and status. |

### Enums

| Name | Description |
| --- | --- |
| [LockReason](arkts-telephony-lockreason-e.md) | Enum for SIM card lock type. |

### Types

| Name | Description |
| --- | --- |
| [CCallState](arkts-telephony-ccallstate-t.md) | Indicates the states of carrier call. |
| [CallState](arkts-telephony-callstate-t.md) | Indicates the states of call. |
| [CardType](arkts-telephony-cardtype-t.md) | Indicates the SIM card types. |
| [DataConnectState](arkts-telephony-dataconnectstate-t.md) | Describes the cellular data link connection state. |
| [DataFlowType](arkts-telephony-dataflowtype-t.md) | Describes the cellular data flow type. |
| [NetworkState](arkts-telephony-networkstate-t.md) | Describes the network registration state. |
| [RatType](arkts-telephony-rattype-t.md) | Describes the radio access technology. |
| [SignalInformation](arkts-telephony-signalinformation-t.md) | Describes the signal strength information. |
| [SimState](arkts-telephony-simstate-t.md) | Indicates the SIM card states. |
| [TelCallState](arkts-telephony-telcallstate-t.md) | Indicates the states of tel call. |

<!--Del-->
### Types（系统接口）

| Name | Description |
| --- | --- |
| [CellInformation](arkts-telephony-cellinformation-t-sys.md) | Describes current cell information. |
| [NetworkSearchRealTimeResult](arkts-telephony-networksearchrealtimeresult-t-sys.md) | Indicates the result of network search. |
<!--DelEnd-->

