# @ohos.telephony.observer

Monitors telephony state updates of a device, including updates of the network state, signal strength, call state, the data link connection state and others.

**起始版本：** 6

**系统能力：** SystemCapability.Telephony.StateRegistry

## 导入模块

```TypeScript
import { observer } from '@kit.TelephonyKit';
```

## 汇总

### 函数

| 名称 | 描述 |
| --- | --- |
| [off](arkts-observer-off-f.md#off-1) | Cancel callback when the network state is updated. |
| [off](arkts-observer-off-f.md#off-2) | Cancel callback when the signal strength is updated. |
| [off](arkts-observer-off-f.md#off-3) | Cancel callback when the cellular data link connection state is updated. |
| [off](arkts-observer-off-f.md#off-4) | Cancel callback when the uplink and downlink data flow state of cellular data services is updated. |
| [off](arkts-observer-off-f.md#off-5) | Cancel callback when the call state is updated. |
| [off](arkts-observer-off-f.md#off-6) | Cancel callback when the telCall state is updated. |
| [off](arkts-observer-off-f.md#off-7) | Cancel callback when the sim state is updated. |
| [off](arkts-observer-off-f.md#off-8) | Cancel to receive an ICC account change. |
| <!--DelRow-->[off](arkts-observer-off-f-sys.md#off-1) | Cancel callback when the cell information is updated. |
| [offCCallStateChange](arkts-observer-offccallstatechange-f.md#offCCallStateChange-1) | Unsubscribes from the callback for listening to the carrier call state. |
| [offCallStateChange](arkts-observer-offcallstatechange-f.md#offCallStateChange-1) | Cancel callback when the call state is updated. |
| [offCallStateChangeEx](arkts-observer-offcallstatechangeex-f.md#offCallStateChangeEx-1) | Cancel callback when the telCall state is updated. |
| <!--DelRow-->[offCellInfoChange](arkts-observer-offcellinfochange-f-sys.md#offCellInfoChange-1) | Cancel callback when the cell information is updated. |
| [offCellularDataConnectionStateChange](arkts-observer-offcellulardataconnectionstatechange-f.md#offCellularDataConnectionStateChange-1) | Cancel callback when the cellular data link connection state is updated. |
| [offCellularDataFlowChange](arkts-observer-offcellulardataflowchange-f.md#offCellularDataFlowChange-1) | Cancel callback when the uplink and downlink data flow state of cellular data services is updated. |
| [offCommunicationStateChange](arkts-observer-offcommunicationstatechange-f.md#offCommunicationStateChange-1) | Unsubscribes from the callback for listening to the 5A state. |
| [offGetSimActiveState](arkts-observer-offgetsimactivestate-f.md#offGetSimActiveState-1) | Cancel callback when the sim active state is updated. |
| [offIccAccountInfoChange](arkts-observer-officcaccountinfochange-f.md#offIccAccountInfoChange-1) | Cancel to receive an ICC account change. |
| [offNetworkStateChange](arkts-observer-offnetworkstatechange-f.md#offNetworkStateChange-1) | Cancel callback when the network state is updated. |
| [offSignalInfoChange](arkts-observer-offsignalinfochange-f.md#offSignalInfoChange-1) | Cancel callback when the signal strength is updated. |
| [offSimStateChange](arkts-observer-offsimstatechange-f.md#offSimStateChange-1) | Cancel callback when the sim state is updated. |
| [on](arkts-observer-on-f.md#on-1) | Callback when the network state corresponding to the default sim card is updated. |
| [on](arkts-observer-on-f.md#on-2) | Callback when the network state corresponding to the monitored {@code slotId} is updated. |
| [on](arkts-observer-on-f.md#on-3) | Callback when the signal strength corresponding to the default sim card is updated. |
| [on](arkts-observer-on-f.md#on-4) | Callback when the signal strength corresponding to a monitored {@code slotId} is updated. |
| [on](arkts-observer-on-f.md#on-5) | Callback when the cellular data link connection state corresponding to the default sim card is updated. |
| [on](arkts-observer-on-f.md#on-6) | Callback when the cellular data link connection state corresponding to the monitored {@code slotId} is updated. |
| [on](arkts-observer-on-f.md#on-7) | Callback when the uplink and downlink data flow state of cellular data services corresponding to the default sim card is updated. |
| [on](arkts-observer-on-f.md#on-8) | Callback when the uplink and downlink data flow state of cellular data services corresponding to the monitored {@code slotId} is updated. |
| [on](arkts-observer-on-f.md#on-9) | Callback when the call state corresponding to the default sim card is updated. |
| [on](arkts-observer-on-f.md#on-10) | Callback when the call state corresponding to the monitored {@code slotId} is updated. |
| [on](arkts-observer-on-f.md#on-11) | Callback when the telCall state corresponding to the monitored {@code slotId} is updated. |
| [on](arkts-observer-on-f.md#on-12) | Callback when the sim state corresponding to the default sim card is updated. |
| [on](arkts-observer-on-f.md#on-13) | Callback when the sim state corresponding to the monitored {@code slotId} is updated. |
| [on](arkts-observer-on-f.md#on-14) | Receives an ICC account change. This callback is invoked when the ICC account updates and the observer is added to monitor the updates. |
| <!--DelRow-->[on](arkts-observer-on-f-sys.md#on-1) | Callback when the cell information corresponding to the default sim card is updated. |
| <!--DelRow-->[on](arkts-observer-on-f-sys.md#on-2) | Callback when the cell information corresponding to a monitored {@code slotId} is updated. |
| [onCCallStateChange](arkts-observer-onccallstatechange-f.md#onCCallStateChange-1) | Called when the carrier call state changes. |
| [onCallStateChange](arkts-observer-oncallstatechange-f.md#onCallStateChange-1) | Callback when the call state corresponding to the default sim card is updated. |
| [onCallStateChange](arkts-observer-oncallstatechange-f.md#onCallStateChange-2) | Callback when the call state corresponding to the monitored {@code slotId} is updated. |
| [onCallStateChangeEx](arkts-observer-oncallstatechangeex-f.md#onCallStateChangeEx-1) | Callback when the telCall state corresponding to the monitored {@code slotId} is updated. |
| <!--DelRow-->[onCellInfoChange](arkts-observer-oncellinfochange-f-sys.md#onCellInfoChange-1) | Callback when the cell information corresponding to the default sim card is updated. |
| <!--DelRow-->[onCellInfoChange](arkts-observer-oncellinfochange-f-sys.md#onCellInfoChange-2) | Callback when the cell information corresponding to a monitored {@code slotId} is updated. |
| [onCellularDataConnectionStateChange](arkts-observer-oncellulardataconnectionstatechange-f.md#onCellularDataConnectionStateChange-1) | Callback when the cellular data link connection state corresponding to the default sim card is updated. |
| [onCellularDataConnectionStateChange](arkts-observer-oncellulardataconnectionstatechange-f.md#onCellularDataConnectionStateChange-2) | Callback when the cellular data link connection state corresponding to the monitored {@code slotId} is updated. |
| [onCellularDataFlowChange](arkts-observer-oncellulardataflowchange-f.md#onCellularDataFlowChange-1) | Callback when the uplink and downlink data flow state of cellular data services corresponding to the default sim card is updated. |
| [onCellularDataFlowChange](arkts-observer-oncellulardataflowchange-f.md#onCellularDataFlowChange-2) | Callback when the uplink and downlink data flow state of cellular data services corresponding to the monitored {@code slotId} is updated. |
| [onCommunicationStateChange](arkts-observer-oncommunicationstatechange-f.md#onCommunicationStateChange-1) | This API uses an asynchronous callback to return the result. |
| [onGetSimActiveState](arkts-observer-ongetsimactivestate-f.md#onGetSimActiveState-1) | Subscribe to sim active state change events using a callback-based approach as an asynchronous method. |
| [onIccAccountInfoChange](arkts-observer-oniccaccountinfochange-f.md#onIccAccountInfoChange-1) | Receives an ICC account change. This callback is invoked when the ICC account updates and the observer is added to monitor the updates. |
| [onNetworkStateChange](arkts-observer-onnetworkstatechange-f.md#onNetworkStateChange-1) | Callback when the network state corresponding to the default sim card is updated. |
| [onNetworkStateChange](arkts-observer-onnetworkstatechange-f.md#onNetworkStateChange-2) | Callback when the network state corresponding to the monitored {@code slotId} is updated. |
| [onSignalInfoChange](arkts-observer-onsignalinfochange-f.md#onSignalInfoChange-1) | Callback when the signal strength corresponding to the default sim card is updated. |
| [onSignalInfoChange](arkts-observer-onsignalinfochange-f.md#onSignalInfoChange-2) | Callback when the signal strength corresponding to a monitored {@code slotId} is updated. |
| [onSimStateChange](arkts-observer-onsimstatechange-f.md#onSimStateChange-1) | Callback when the sim state corresponding to the default sim card is updated. |
| [onSimStateChange](arkts-observer-onsimstatechange-f.md#onSimStateChange-2) | Callback when the sim state corresponding to the monitored {@code slotId} is updated. |

### 接口

| 名称 | 描述 |
| --- | --- |
| [CallStateInfo](arkts-observer-callstateinfo-i.md) | Indicates call state and number. |
| [CCallStateInfo](arkts-observer-ccallstateinfo-i.md) | Indicates carrier call state and number. |
| [DataConnectionStateInfo](arkts-observer-dataconnectionstateinfo-i.md) | Indicates cellular data connect state and technology type. |
| [ObserverOptions](arkts-observer-observeroptions-i.md) | Indicates observer options. |
| [SimStateData](arkts-observer-simstatedata-i.md) | Indicates SIM card type and status. |

### 类型

| 名称 | 描述 |
| --- | --- |
| [CallState](arkts-observer-callstate-t.md) | Indicates the states of call. |
| [CardType](arkts-observer-cardtype-t.md) | Indicates the SIM card types. |
| [CCallState](arkts-observer-ccallstate-t.md) | Indicates the states of carrier call. |
| <!--DelRow-->[CellInformation](arkts-observer-cellinformation-t-sys.md) | Describes current cell information. |
| [DataConnectState](arkts-observer-dataconnectstate-t.md) | Describes the cellular data link connection state. |
| [DataFlowType](arkts-observer-dataflowtype-t.md) | Describes the cellular data flow type. |
| <!--DelRow-->[NetworkSearchRealTimeResult](arkts-observer-networksearchrealtimeresult-t-sys.md) | Indicates the result of network search. |
| [NetworkState](arkts-observer-networkstate-t.md) | Describes the network registration state. |
| [RatType](arkts-observer-rattype-t.md) | Describes the radio access technology. |
| [SignalInformation](arkts-observer-signalinformation-t.md) | Describes the signal strength information. |
| [SimState](arkts-observer-simstate-t.md) | Indicates the SIM card states. |
| [TelCallState](arkts-observer-telcallstate-t.md) | Indicates the states of tel call. |

### 枚举

| 名称 | 描述 |
| --- | --- |
| [LockReason](arkts-observer-lockreason-e.md) | Enum for SIM card lock type. |

