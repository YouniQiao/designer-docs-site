# on (System API)

## Modules to Import

```TypeScript
import { observer } from '@kit.TelephonyKit';
```

## on('cellInfoChange')

```TypeScript
function on(type: 'cellInfoChange', callback: Callback<Array<CellInformation>>): void
```

Callback when the cell information corresponding to the default sim card is updated.

**Since:** 8

**Required permissions:** ohos.permission.LOCATION and ohos.permission.APPROXIMATELY_LOCATION

<!--Device-observer-function on(type: 'cellInfoChange', callback: Callback<Array<CellInformation>>): void--><!--Device-observer-function on(type: 'cellInfoChange', callback: Callback<Array<CellInformation>>): void-End-->

**System capability:** SystemCapability.Telephony.StateRegistry

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'cellInfoChange' | Yes | Event type. Indicates the cellInfoChange event to be subscribed to. |
| callback | [Callback](../../apis-arkui/arkts-components/arkts-arkui-common-callback-i.md)<Array<CellInformation>> | Yes | Indicates the callback for getting an array of instances of the classes derived from {@link CellInformation}. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied. |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Non-system applications use system APIs. |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.2. Incorrect parameter types. |
| [8300001](../errorcode-telephony.md#8300001-input-parameter-value-out-of-range) | Invalid parameter value. |
| [8300002](../errorcode-telephony.md#8300002-service-connection-error) | Service connection failed. |
| [8300003](../errorcode-telephony.md#8300003-system-internal-error) | System internal error. |
| [8300999](../errorcode-telephony.md#8300999-internal-error) | Unknown error. |

**Example**

```TypeScript
import { radio } from '@kit.TelephonyKit';

observer.on('cellInfoChange', (data: Array<radio.CellInformation>) => {
    console.info("on cellInfoChange, data:" + JSON.stringify(data));
});

```


## on('cellInfoChange')

```TypeScript
function on(type: 'cellInfoChange', options: ObserverOptions, callback: Callback<Array<CellInformation>>): void
```

Callback when the cell information corresponding to a monitored {@code slotId} is updated.

**Since:** 11

**Required permissions:** ohos.permission.LOCATION and ohos.permission.APPROXIMATELY_LOCATION

<!--Device-observer-function on(type: 'cellInfoChange', options: ObserverOptions, callback: Callback<Array<CellInformation>>): void--><!--Device-observer-function on(type: 'cellInfoChange', options: ObserverOptions, callback: Callback<Array<CellInformation>>): void-End-->

**System capability:** SystemCapability.Telephony.StateRegistry

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'cellInfoChange' | Yes | Event type. Indicates the cellInfoChange event to be subscribed to. |
| options | [ObserverOptions](arkts-telephony-observer-observeroptions-i.md) | Yes | Indicates the options for observer. |
| callback | [Callback](../../apis-arkui/arkts-components/arkts-arkui-common-callback-i.md)<Array<CellInformation>> | Yes | Indicates the callback for getting an array of instances of the classes derived from {@link CellInformation}. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied. |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Non-system applications use system APIs. |
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
observer.on('cellInfoChange', options, (data: Array<radio.CellInformation>) => {
    console.info("on cellInfoChange, data:" + JSON.stringify(data));
});

```

