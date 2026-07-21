# off

## Modules to Import

```TypeScript
import { observer } from '@kit.TelephonyKit';
```

<a id="off"></a>
## off('networkStateChange')

```TypeScript
function off(type: 'networkStateChange', callback?: Callback<NetworkState>): void
```

Cancel callback when the network state is updated.

**Since:** 6

<!--Device-observer-function off(type: 'networkStateChange', callback?: Callback<NetworkState>): void--><!--Device-observer-function off(type: 'networkStateChange', callback?: Callback<NetworkState>): void-End-->

**System capability:** SystemCapability.Telephony.StateRegistry

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'networkStateChange' | Yes | Event type. Indicates the networkStateChange event to unsubscribe from. |
| callback | [Callback](../../apis-arkui/arkts-components/arkts-arkui-callback-i.md)&lt;NetworkState&gt; | No | Indicates the callback for getting an instance of the {@code NetworkState} class. |

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
let callback: (data: observer.NetworkState) => void = (data: observer.NetworkState) => {
    console.info("on networkStateChange, data:" + JSON.stringify(data));
}
observer.on('networkStateChange', callback);
// You can pass the callback of the on method to cancel listening for a certain type of callback. If you do not pass the callback, you will cancel listening for all callbacks.
observer.off('networkStateChange', callback);
observer.off('networkStateChange');

```


<a id="off-1"></a>
## off('signalInfoChange')

```TypeScript
function off(type: 'signalInfoChange', callback?: Callback<Array<SignalInformation>>): void
```

Cancel callback when the signal strength is updated.

**Since:** 6

<!--Device-observer-function off(type: 'signalInfoChange', callback?: Callback<Array<SignalInformation>>): void--><!--Device-observer-function off(type: 'signalInfoChange', callback?: Callback<Array<SignalInformation>>): void-End-->

**System capability:** SystemCapability.Telephony.StateRegistry

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'signalInfoChange' | Yes | Event type. Indicates the signalInfoChange event to unsubscribe from. |
| callback | [Callback](../../apis-arkui/arkts-components/arkts-arkui-callback-i.md)&lt;Array&lt;SignalInformation&gt;&gt; | No | Indicates the callback to unsubscribe from the signalInfoChange event. |

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

let callback: (data: Array<radio.SignalInformation>) => void = (data: Array<radio.SignalInformation>) => {
    console.info("on signalInfoChange, data:" + JSON.stringify(data));
}
observer.on('signalInfoChange', callback);
// You can pass the callback of the on method to cancel listening for a certain type of callback. If you do not pass the callback, you will cancel listening for all callbacks.
observer.off('signalInfoChange', callback);
observer.off('signalInfoChange');

```


<a id="off-2"></a>
## off('cellularDataConnectionStateChange')

```TypeScript
function off(type: 'cellularDataConnectionStateChange', callback?: Callback<DataConnectionStateInfo>): void
```

Cancel callback when the cellular data link connection state is updated.

**Since:** 11

<!--Device-observer-function off(type: 'cellularDataConnectionStateChange', callback?: Callback<DataConnectionStateInfo>): void--><!--Device-observer-function off(type: 'cellularDataConnectionStateChange', callback?: Callback<DataConnectionStateInfo>): void-End-->

**System capability:** SystemCapability.Telephony.StateRegistry

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'cellularDataConnectionStateChange' | Yes | Event type. Indicates the cellularDataConnectionStateChange event to unsubscribe from. |
| callback | [Callback](../../apis-arkui/arkts-components/arkts-arkui-callback-i.md)&lt;DataConnectionStateInfo&gt; | No | Indicates the callback to unsubscribe from the cellularDataConnectionStateChange event. |

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
let callback: (data: observer.DataConnectionStateInfo) => void = (data: observer.DataConnectionStateInfo) => {
    console.info("on cellularDataConnectionStateChange, data:" + JSON.stringify(data));
}
observer.on('cellularDataConnectionStateChange', callback);
// You can pass the callback of the on method to cancel listening for a certain type of callback. If you do not pass the callback, you will cancel listening for all callbacks.
observer.off('cellularDataConnectionStateChange', callback);
observer.off('cellularDataConnectionStateChange');

```


<a id="off-3"></a>
## off('cellularDataFlowChange')

```TypeScript
function off(type: 'cellularDataFlowChange', callback?: Callback<DataFlowType>): void
```

Cancel callback when the uplink and downlink data flow state of cellular data services is updated.

**Since:** 7

<!--Device-observer-function off(type: 'cellularDataFlowChange', callback?: Callback<DataFlowType>): void--><!--Device-observer-function off(type: 'cellularDataFlowChange', callback?: Callback<DataFlowType>): void-End-->

**System capability:** SystemCapability.Telephony.StateRegistry

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'cellularDataFlowChange' | Yes | Event type. Indicates the cellularDataFlowChange event to unsubscribe from. |
| callback | [Callback](../../apis-arkui/arkts-components/arkts-arkui-callback-i.md)&lt;DataFlowType&gt; | No | Indicates the callback to unsubscribe from the cellularDataFlowChange event. |

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

let callback: (data: data.DataFlowType) => void = (data: data.DataFlowType) => {
    console.info("on cellularDataFlowChange, data:" + JSON.stringify(data));
}
observer.on('cellularDataFlowChange', callback);
// You can pass the callback of the on method to cancel listening for a certain type of callback. If you do not pass the callback, you will cancel listening for all callbacks.
observer.off('cellularDataFlowChange', callback);
observer.off('cellularDataFlowChange');

```


<a id="off-4"></a>
## off('callStateChange')

```TypeScript
function off(type: 'callStateChange', callback?: Callback<CallStateInfo>): void
```

Cancel callback when the call state is updated.

**Since:** 11

<!--Device-observer-function off(type: 'callStateChange', callback?: Callback<CallStateInfo>): void--><!--Device-observer-function off(type: 'callStateChange', callback?: Callback<CallStateInfo>): void-End-->

**System capability:** SystemCapability.Telephony.StateRegistry

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'callStateChange' | Yes | Event type. Indicates the callStateChange event to unsubscribe from. |
| callback | [Callback](../../apis-arkui/arkts-components/arkts-arkui-callback-i.md)&lt;CallStateInfo&gt; | No | Indicates the callback to unsubscribe from the callStateChange event. |

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
let callback: (data: observer.CallStateInfo) => void = (data: observer.CallStateInfo) => {
    console.info("on callStateChange, data:" + JSON.stringify(data));
}
observer.on('callStateChange', callback);
// You can pass the callback of the on method to cancel listening for a certain type of callback. If you do not pass the callback, you will cancel listening for all callbacks.
observer.off('callStateChange', callback);
observer.off('callStateChange');

```


<a id="off-5"></a>
## off('callStateChangeEx')

```TypeScript
function off(type: 'callStateChangeEx', callback?: Callback<TelCallState>): void
```

Cancel callback when the telCall state is updated.

**Since:** 21

<!--Device-observer-function off(type: 'callStateChangeEx', callback?: Callback<TelCallState>): void--><!--Device-observer-function off(type: 'callStateChangeEx', callback?: Callback<TelCallState>): void-End-->

**System capability:** SystemCapability.Telephony.StateRegistry

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'callStateChangeEx' | Yes | Event type. Indicates the callStateChangeEx event to unsubscribe from. |
| callback | [Callback](../../apis-arkui/arkts-components/arkts-arkui-callback-i.md)&lt;TelCallState&gt; | No | Indicates the callback to unsubscribe from the callStateChangeEx event. |

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
observer.on('callStateChangeEx', callback);
// You can pass the callback of the on method to cancel listening for a certain type of callback. If you do not pass the callback, you will cancel listening for all callbacks.
observer.off('callStateChangeEx', callback);
observer.off('callStateChangeEx');

```


<a id="off-6"></a>
## off('simStateChange')

```TypeScript
function off(type: 'simStateChange', callback?: Callback<SimStateData>): void
```

Cancel callback when the sim state is updated.

**Since:** 7

<!--Device-observer-function off(type: 'simStateChange', callback?: Callback<SimStateData>): void--><!--Device-observer-function off(type: 'simStateChange', callback?: Callback<SimStateData>): void-End-->

**System capability:** SystemCapability.Telephony.StateRegistry

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'simStateChange' | Yes | Event type. Indicates the simStateChange event to unsubscribe from. |
| callback | [Callback](../../apis-arkui/arkts-components/arkts-arkui-callback-i.md)&lt;SimStateData&gt; | No | Indicates the callback to unsubscribe from the simStateChange event. |

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
let callback: (data: observer.SimStateData) => void = (data: observer.SimStateData) => {
    console.info("on simStateChange, data:" + JSON.stringify(data));
}
observer.on('simStateChange', callback);
// You can pass the callback of the on method to cancel listening for a certain type of callback. If you do not pass the callback, you will cancel listening for all callbacks.
observer.off('simStateChange', callback);
observer.off('simStateChange');

```


<a id="off-7"></a>
## off('iccAccountInfoChange')

```TypeScript
function off(type: 'iccAccountInfoChange', callback?: Callback<void>): void
```

Cancel to receive an ICC account change.

**Since:** 10

<!--Device-observer-function off(type: 'iccAccountInfoChange', callback?: Callback<void>): void--><!--Device-observer-function off(type: 'iccAccountInfoChange', callback?: Callback<void>): void-End-->

**System capability:** SystemCapability.Telephony.StateRegistry

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'iccAccountInfoChange' | Yes | iccAccountInfoChange |
| callback | [Callback](../../apis-arkui/arkts-components/arkts-arkui-callback-i.md)&lt;void&gt; | No | including state Indicates the ICC account information,and reason Indicates the cause of the change. |

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
let callback: () => void = () => {
    console.info("on iccAccountInfoChange success");
}
observer.on('iccAccountInfoChange', callback);
// You can pass the callback of the on method to cancel listening for a certain type of callback. If you do not pass the callback, you will cancel listening for all callbacks.
observer.off('iccAccountInfoChange', callback);
observer.off('iccAccountInfoChange');

```

