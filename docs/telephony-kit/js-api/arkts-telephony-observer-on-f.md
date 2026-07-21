# on

## Modules to Import

```TypeScript
import { observer } from '@kit.TelephonyKit';
```

<a id="on"></a>
## on('networkStateChange')

```TypeScript
function on(type: 'networkStateChange', callback: Callback<NetworkState>): void
```

Callback when the network state corresponding to the default sim card is updated.

**Since:** 6

**Required permissions:** ohos.permission.GET_NETWORK_INFO

<!--Device-observer-function on(type: 'networkStateChange', callback: Callback<NetworkState>): void--><!--Device-observer-function on(type: 'networkStateChange', callback: Callback<NetworkState>): void-End-->

**System capability:** SystemCapability.Telephony.StateRegistry

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'networkStateChange' | Yes | Event type. Indicates the networkStateChange event to be subscribed to. |
| callback | [Callback](../../apis-arkui/arkts-components/arkts-arkui-callback-i.md)&lt;NetworkState&gt; | Yes | Indicates the callback for getting an instance of the {@code NetworkState} class. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied. |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.2. Incorrect parameter types. |
| [8300001](../errorcode-telephony.md#8300001-input-parameter-value-out-of-range) | Invalid parameter value. |
| [8300002](../errorcode-telephony.md#8300002-service-connection-error) | Service connection failed. |
| [8300003](../errorcode-telephony.md#8300003-system-internal-error) | System internal error. |
| [8300999](../errorcode-telephony.md#8300999-internal-error) | Unknown error. |

**Example**

```TypeScript
observer.on('networkStateChange', (data: observer.NetworkState) => {
    console.info("on networkStateChange, data:" + JSON.stringify(data));
});

```


<a id="on-1"></a>
## on('networkStateChange')

```TypeScript
function on(type: 'networkStateChange', options: ObserverOptions, callback: Callback<NetworkState>): void
```

Callback when the network state corresponding to the monitored {@code slotId} is updated.

**Since:** 11

**Required permissions:** ohos.permission.GET_NETWORK_INFO

<!--Device-observer-function on(type: 'networkStateChange', options: ObserverOptions, callback: Callback<NetworkState>): void--><!--Device-observer-function on(type: 'networkStateChange', options: ObserverOptions, callback: Callback<NetworkState>): void-End-->

**System capability:** SystemCapability.Telephony.StateRegistry

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'networkStateChange' | Yes | Event type. Indicates the networkStateChange event to be subscribed to. |
| options | [ObserverOptions](arkts-telephony-observer-observeroptions-i.md) | Yes | Indicates the options for observer. |
| callback | [Callback](../../apis-arkui/arkts-components/arkts-arkui-callback-i.md)&lt;NetworkState&gt; | Yes | Indicates the callback for getting an instance of the {@code NetworkState} class. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied. |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.2. Incorrect parameter types. |
| [8300001](../errorcode-telephony.md#8300001-input-parameter-value-out-of-range) | Invalid parameter value. |
| [8300002](../errorcode-telephony.md#8300002-service-connection-error) | Service connection failed. |
| [8300003](../errorcode-telephony.md#8300003-system-internal-error) | System internal error. |
| [8300999](../errorcode-telephony.md#8300999-internal-error) | Unknown error. |

**Example**

```TypeScript
let options: observer.ObserverOptions = {
    slotId: 0
}
observer.on('networkStateChange', options, (data: observer.NetworkState) => {
    console.info("on networkStateChange, data:" + JSON.stringify(data));
});

```


<a id="on-2"></a>
## on('signalInfoChange')

```TypeScript
function on(type: 'signalInfoChange', callback: Callback<Array<SignalInformation>>): void
```

Callback when the signal strength corresponding to the default sim card is updated.

**Since:** 6

<!--Device-observer-function on(type: 'signalInfoChange', callback: Callback<Array<SignalInformation>>): void--><!--Device-observer-function on(type: 'signalInfoChange', callback: Callback<Array<SignalInformation>>): void-End-->

**System capability:** SystemCapability.Telephony.StateRegistry

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'signalInfoChange' | Yes | Event type. Indicates the signalInfoChange event to be subscribed to. |
| callback | [Callback](../../apis-arkui/arkts-components/arkts-arkui-callback-i.md)&lt;Array&lt;SignalInformation&gt;&gt; | Yes | Indicates the callback for getting an array of instances of the classes derived from {@link SignalInformation}. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.2. Incorrect parameter types. |
| [8300001](../errorcode-telephony.md#8300001-input-parameter-value-out-of-range) | Invalid parameter value. |
| [8300002](../errorcode-telephony.md#8300002-service-connection-error) | Service connection failed. |
| [8300003](../errorcode-telephony.md#8300003-system-internal-error) | System internal error. |
| [8300999](../errorcode-telephony.md#8300999-internal-error) | Unknown error. |

**Example**

```TypeScript
import { radio } from '@kit.TelephonyKit';

observer.on('signalInfoChange', (data: Array<radio.SignalInformation>) => {
    console.info("on signalInfoChange, data:" + JSON.stringify(data));
});

```


<a id="on-3"></a>
## on('signalInfoChange')

```TypeScript
function on(type: 'signalInfoChange', options: ObserverOptions, callback: Callback<Array<SignalInformation>>): void
```

Callback when the signal strength corresponding to a monitored {@code slotId} is updated.

**Since:** 11

<!--Device-observer-function on(type: 'signalInfoChange', options: ObserverOptions, callback: Callback<Array<SignalInformation>>): void--><!--Device-observer-function on(type: 'signalInfoChange', options: ObserverOptions, callback: Callback<Array<SignalInformation>>): void-End-->

**System capability:** SystemCapability.Telephony.StateRegistry

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'signalInfoChange' | Yes | Event type. Indicates the signalInfoChange event to be subscribed to. |
| options | [ObserverOptions](arkts-telephony-observer-observeroptions-i.md) | Yes | Indicates the options for observer. |
| callback | [Callback](../../apis-arkui/arkts-components/arkts-arkui-callback-i.md)&lt;Array&lt;SignalInformation&gt;&gt; | Yes | Indicates the callback for getting an array of instances of the classes derived from {@link SignalInformation}. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.2. Incorrect parameter types. |
| [8300001](../errorcode-telephony.md#8300001-input-parameter-value-out-of-range) | Invalid parameter value. |
| [8300002](../errorcode-telephony.md#8300002-service-connection-error) | Service connection failed. |
| [8300003](../errorcode-telephony.md#8300003-system-internal-error) | System internal error. |
| [8300999](../errorcode-telephony.md#8300999-internal-error) | Unknown error. |

**Example**

```TypeScript
import { radio } from '@kit.TelephonyKit';

let options: observer.ObserverOptions = {
    slotId: 0
}
observer.on('signalInfoChange', options, (data: Array<radio.SignalInformation>) => {
    console.info("on signalInfoChange, data:" + JSON.stringify(data));
});

```


<a id="on-4"></a>
## on('cellularDataConnectionStateChange')

```TypeScript
function on(type: 'cellularDataConnectionStateChange', callback: Callback<DataConnectionStateInfo>): void
```

Callback when the cellular data link connection state corresponding to the default sim card is updated.

**Since:** 11

<!--Device-observer-function on(type: 'cellularDataConnectionStateChange', callback: Callback<DataConnectionStateInfo>): void--><!--Device-observer-function on(type: 'cellularDataConnectionStateChange', callback: Callback<DataConnectionStateInfo>): void-End-->

**System capability:** SystemCapability.Telephony.StateRegistry

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'cellularDataConnectionStateChange' | Yes | Event type. Indicates the cellularDataConnectionStateChange event to be subscribed to. |
| callback | [Callback](../../apis-arkui/arkts-components/arkts-arkui-callback-i.md)&lt;DataConnectionStateInfo&gt; | Yes | Indicates the callback for getting the cellular data link connection state, and networkType Indicates the radio access technology for cellular data services. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.2. Incorrect parameter types. |
| [8300001](../errorcode-telephony.md#8300001-input-parameter-value-out-of-range) | Invalid parameter value. |
| [8300002](../errorcode-telephony.md#8300002-service-connection-error) | Service connection failed. |
| [8300003](../errorcode-telephony.md#8300003-system-internal-error) | System internal error. |
| [8300999](../errorcode-telephony.md#8300999-internal-error) | Unknown error. |

**Example**

```TypeScript
observer.on('cellularDataConnectionStateChange', (data: observer.DataConnectionStateInfo) => {
    console.info("on cellularDataConnectionStateChange, data:" + JSON.stringify(data));
});

```


<a id="on-5"></a>
## on('cellularDataConnectionStateChange')

```TypeScript
function on(type: 'cellularDataConnectionStateChange', options: ObserverOptions,
              callback: Callback<DataConnectionStateInfo>): void
```

Callback when the cellular data link connection state corresponding to the monitored {@code slotId} is updated.

**Since:** 11

<!--Device-observer-function on(type: 'cellularDataConnectionStateChange', options: ObserverOptions,
              callback: Callback<DataConnectionStateInfo>): void--><!--Device-observer-function on(type: 'cellularDataConnectionStateChange', options: ObserverOptions,
              callback: Callback<DataConnectionStateInfo>): void-End-->

**System capability:** SystemCapability.Telephony.StateRegistry

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'cellularDataConnectionStateChange' | Yes | Event type. Indicates the cellularDataConnectionStateChange event to be subscribed to. |
| options | [ObserverOptions](arkts-telephony-observer-observeroptions-i.md) | Yes | Indicates the options for observer. |
| callback | [Callback](../../apis-arkui/arkts-components/arkts-arkui-callback-i.md)&lt;DataConnectionStateInfo&gt; | Yes | Indicates the callback for getting the cellular data link connection state, and networkType Indicates the radio access technology for cellular data services. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.2. Incorrect parameter types. |
| [8300001](../errorcode-telephony.md#8300001-input-parameter-value-out-of-range) | Invalid parameter value. |
| [8300002](../errorcode-telephony.md#8300002-service-connection-error) | Service connection failed. |
| [8300003](../errorcode-telephony.md#8300003-system-internal-error) | System internal error. |
| [8300999](../errorcode-telephony.md#8300999-internal-error) | Unknown error. |

**Example**

```TypeScript
let options: observer.ObserverOptions = {
    slotId: 0
}
observer.on('cellularDataConnectionStateChange', options, (data: observer.DataConnectionStateInfo) => {
    console.info("on cellularDataConnectionStateChange, data:" + JSON.stringify(data));
});

```


<a id="on-6"></a>
## on('cellularDataFlowChange')

```TypeScript
function on(type: 'cellularDataFlowChange', callback: Callback<DataFlowType>): void
```

Callback when the uplink and downlink data flow state of cellular data services corresponding to the default sim card is updated.

**Since:** 7

<!--Device-observer-function on(type: 'cellularDataFlowChange', callback: Callback<DataFlowType>): void--><!--Device-observer-function on(type: 'cellularDataFlowChange', callback: Callback<DataFlowType>): void-End-->

**System capability:** SystemCapability.Telephony.StateRegistry

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'cellularDataFlowChange' | Yes | Event type. Indicates the cellularDataFlowChange event to be subscribed to. |
| callback | [Callback](../../apis-arkui/arkts-components/arkts-arkui-callback-i.md)&lt;DataFlowType&gt; | Yes | Indicates the callback for getting the cellular data flow state. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.2. Incorrect parameter types. |
| [8300001](../errorcode-telephony.md#8300001-input-parameter-value-out-of-range) | Invalid parameter value. |
| [8300002](../errorcode-telephony.md#8300002-service-connection-error) | Service connection failed. |
| [8300003](../errorcode-telephony.md#8300003-system-internal-error) | System internal error. |
| [8300999](../errorcode-telephony.md#8300999-internal-error) | Unknown error. |

**Example**

```TypeScript
import { data } from '@kit.TelephonyKit';

observer.on('cellularDataFlowChange', (data: data.DataFlowType) => {
    console.info("on cellularDataFlowChange, data:" + JSON.stringify(data));
});

```


<a id="on-7"></a>
## on('cellularDataFlowChange')

```TypeScript
function on(type: 'cellularDataFlowChange', options: ObserverOptions, callback: Callback<DataFlowType>): void
```

Callback when the uplink and downlink data flow state of cellular data services corresponding to the monitored {@code slotId} is updated.

**Since:** 11

<!--Device-observer-function on(type: 'cellularDataFlowChange', options: ObserverOptions, callback: Callback<DataFlowType>): void--><!--Device-observer-function on(type: 'cellularDataFlowChange', options: ObserverOptions, callback: Callback<DataFlowType>): void-End-->

**System capability:** SystemCapability.Telephony.StateRegistry

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'cellularDataFlowChange' | Yes | Event type. Indicates the cellularDataFlowChange event to be subscribed to. |
| options | [ObserverOptions](arkts-telephony-observer-observeroptions-i.md) | Yes | Indicates the options for observer. |
| callback | [Callback](../../apis-arkui/arkts-components/arkts-arkui-callback-i.md)&lt;DataFlowType&gt; | Yes | Indicates the callback for getting the cellular data flow state. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.2. Incorrect parameter types. |
| [8300001](../errorcode-telephony.md#8300001-input-parameter-value-out-of-range) | Invalid parameter value. |
| [8300002](../errorcode-telephony.md#8300002-service-connection-error) | Service connection failed. |
| [8300003](../errorcode-telephony.md#8300003-system-internal-error) | System internal error. |
| [8300999](../errorcode-telephony.md#8300999-internal-error) | Unknown error. |

**Example**

```TypeScript
import { data } from '@kit.TelephonyKit';

let options: observer.ObserverOptions = {
    slotId: 0
}
observer.on('cellularDataFlowChange', options, (data: data.DataFlowType) => {
    console.info("on cellularDataFlowChange, data:" + JSON.stringify(data));
});

```


<a id="on-8"></a>
## on('callStateChange')

```TypeScript
function on(type: 'callStateChange', callback: Callback<CallStateInfo>): void
```

Callback when the call state corresponding to the default sim card is updated.

**Since:** 11

<!--Device-observer-function on(type: 'callStateChange', callback: Callback<CallStateInfo>): void--><!--Device-observer-function on(type: 'callStateChange', callback: Callback<CallStateInfo>): void-End-->

**System capability:** SystemCapability.Telephony.StateRegistry

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'callStateChange' | Yes | Event type. Indicates the callStateChange event to be subscribed to. |
| callback | [Callback](../../apis-arkui/arkts-components/arkts-arkui-callback-i.md)&lt;CallStateInfo&gt; | Yes | Indicates the callback for getting the call state and the called number. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.2. Incorrect parameter types. |
| [8300001](../errorcode-telephony.md#8300001-input-parameter-value-out-of-range) | Invalid parameter value. |
| [8300002](../errorcode-telephony.md#8300002-service-connection-error) | Service connection failed. |
| [8300003](../errorcode-telephony.md#8300003-system-internal-error) | System internal error. |
| [8300999](../errorcode-telephony.md#8300999-internal-error) | Unknown error. |

**Example**

```TypeScript
observer.on('callStateChange', (data: observer.CallStateInfo) => {
    console.info("on callStateChange, data:" + JSON.stringify(data));
});

```


<a id="on-9"></a>
## on('callStateChange')

```TypeScript
function on(type: 'callStateChange', options: ObserverOptions, callback: Callback<CallStateInfo>): void
```

Callback when the call state corresponding to the monitored {@code slotId} is updated.

**Since:** 11

<!--Device-observer-function on(type: 'callStateChange', options: ObserverOptions, callback: Callback<CallStateInfo>): void--><!--Device-observer-function on(type: 'callStateChange', options: ObserverOptions, callback: Callback<CallStateInfo>): void-End-->

**System capability:** SystemCapability.Telephony.StateRegistry

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'callStateChange' | Yes | Event type. Indicates the callStateChange event to be subscribed to. |
| options | [ObserverOptions](arkts-telephony-observer-observeroptions-i.md) | Yes | Indicates the options for observer. |
| callback | [Callback](../../apis-arkui/arkts-components/arkts-arkui-callback-i.md)&lt;CallStateInfo&gt; | Yes | Indicates the callback for getting the call state and the called number. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.2. Incorrect parameter types. |
| [8300001](../errorcode-telephony.md#8300001-input-parameter-value-out-of-range) | Invalid parameter value. |
| [8300002](../errorcode-telephony.md#8300002-service-connection-error) | Service connection failed. |
| [8300003](../errorcode-telephony.md#8300003-system-internal-error) | System internal error. |
| [8300999](../errorcode-telephony.md#8300999-internal-error) | Unknown error. |

**Example**

```TypeScript
let options: observer.ObserverOptions = {
    slotId: 0
}
observer.on('callStateChange', options, (data: observer.CallStateInfo) => {
    console.info("on callStateChange, data:" + JSON.stringify(data));
});

```


<a id="on-10"></a>
## on('callStateChangeEx')

```TypeScript
function on(type: 'callStateChangeEx', callback: Callback<TelCallState>, options?: ObserverOptions): void
```

Callback when the telCall state corresponding to the monitored {@code slotId} is updated.

**Since:** 21

<!--Device-observer-function on(type: 'callStateChangeEx', callback: Callback<TelCallState>, options?: ObserverOptions): void--><!--Device-observer-function on(type: 'callStateChangeEx', callback: Callback<TelCallState>, options?: ObserverOptions): void-End-->

**System capability:** SystemCapability.Telephony.StateRegistry

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'callStateChangeEx' | Yes | Event type. Indicates the callStateChangeEx event to be subscribed to. |
| callback | [Callback](../../apis-arkui/arkts-components/arkts-arkui-callback-i.md)&lt;TelCallState&gt; | Yes | Indicates the callback for getting the telCall state. |
| options | [ObserverOptions](arkts-telephony-observer-observeroptions-i.md) | No | Indicates the options for observer. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [8800001](../errorcode-telephony.md#8800001-input-parameter-value-out-of-range) | Invalid parameter value. |
| [8800002](../errorcode-telephony.md#8800002-service-connection-error) | Service connection failed. |
| [8800003](../errorcode-telephony.md#8800003-system-internal-error) | System internal error. |
| [8800999](../errorcode-telephony.md#8800999-internal-error) | Unknown error. |

**Example**

```TypeScript
import { call } from '@kit.TelephonyKit';

let callback: (data: call.TelCallState) => void = (data: call.TelCallState) => {
    console.info("on callStateChangeEx, data:" + JSON.stringify(data));
}
let options: observer.ObserverOptions = {
    slotId: 0
}

observer.on('callStateChangeEx', callback, options);
observer.on('callStateChangeEx', callback);

```


<a id="on-11"></a>
## on('simStateChange')

```TypeScript
function on(type: 'simStateChange', callback: Callback<SimStateData>): void
```

Callback when the sim state corresponding to the default sim card is updated.

**Since:** 7

<!--Device-observer-function on(type: 'simStateChange', callback: Callback<SimStateData>): void--><!--Device-observer-function on(type: 'simStateChange', callback: Callback<SimStateData>): void-End-->

**System capability:** SystemCapability.Telephony.StateRegistry

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'simStateChange' | Yes | Event type. Indicates the simStateChange event to be subscribed to. |
| callback | [Callback](../../apis-arkui/arkts-components/arkts-arkui-callback-i.md)&lt;SimStateData&gt; | Yes | Indicates the callback for getting the SimStateData object.including state Indicates the sim state, and reason Indicates the cause of the change. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.2. Incorrect parameter types. |
| [8300001](../errorcode-telephony.md#8300001-input-parameter-value-out-of-range) | Invalid parameter value. |
| [8300002](../errorcode-telephony.md#8300002-service-connection-error) | Service connection failed. |
| [8300003](../errorcode-telephony.md#8300003-system-internal-error) | System internal error. |
| [8300999](../errorcode-telephony.md#8300999-internal-error) | Unknown error. |

**Example**

```TypeScript
observer.on('simStateChange', (data: observer.SimStateData) => {
    console.info("on simStateChange, data:" + JSON.stringify(data));
});

```


<a id="on-12"></a>
## on('simStateChange')

```TypeScript
function on(type: 'simStateChange', options: ObserverOptions, callback: Callback<SimStateData>): void
```

Callback when the sim state corresponding to the monitored {@code slotId} is updated.

**Since:** 11

<!--Device-observer-function on(type: 'simStateChange', options: ObserverOptions, callback: Callback<SimStateData>): void--><!--Device-observer-function on(type: 'simStateChange', options: ObserverOptions, callback: Callback<SimStateData>): void-End-->

**System capability:** SystemCapability.Telephony.StateRegistry

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'simStateChange' | Yes | Event type. Indicates the simStateChange event to be subscribed to. |
| options | [ObserverOptions](arkts-telephony-observer-observeroptions-i.md) | Yes | Indicates the options for observer. |
| callback | [Callback](../../apis-arkui/arkts-components/arkts-arkui-callback-i.md)&lt;SimStateData&gt; | Yes | Indicates the callback for getting the SimStateData object. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.2. Incorrect parameter types. |
| [8300001](../errorcode-telephony.md#8300001-input-parameter-value-out-of-range) | Invalid parameter value. |
| [8300002](../errorcode-telephony.md#8300002-service-connection-error) | Service connection failed. |
| [8300003](../errorcode-telephony.md#8300003-system-internal-error) | System internal error. |
| [8300999](../errorcode-telephony.md#8300999-internal-error) | Unknown error. |

**Example**

```TypeScript
let options: observer.ObserverOptions = {
    slotId: 0
}
observer.on('simStateChange', options, (data: observer.SimStateData) => {
    console.info("on simStateChange, data:" + JSON.stringify(data));
});

```


<a id="on-13"></a>
## on('iccAccountInfoChange')

```TypeScript
function on(type: 'iccAccountInfoChange', callback: Callback<void>): void
```

Receives an ICC account change. This callback is invoked when the ICC account updates and the observer is added to monitor the updates.

**Since:** 10

<!--Device-observer-function on(type: 'iccAccountInfoChange', callback: Callback<void>): void--><!--Device-observer-function on(type: 'iccAccountInfoChange', callback: Callback<void>): void-End-->

**System capability:** SystemCapability.Telephony.StateRegistry

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'iccAccountInfoChange' | Yes | iccAccountInfoChange |
| callback | [Callback](../../apis-arkui/arkts-components/arkts-arkui-callback-i.md)&lt;void&gt; | Yes | including state Indicates the ICC account information,and reason Indicates the cause of the change. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.2. Incorrect parameter types. |
| [8300001](../errorcode-telephony.md#8300001-input-parameter-value-out-of-range) | Invalid parameter value. |
| [8300002](../errorcode-telephony.md#8300002-service-connection-error) | Service connection failed. |
| [8300003](../errorcode-telephony.md#8300003-system-internal-error) | System internal error. |
| [8300999](../errorcode-telephony.md#8300999-internal-error) | Unknown error. |

**Example**

```TypeScript
observer.on('iccAccountInfoChange', () => {
    console.info("on iccAccountInfoChange success");
});

```

