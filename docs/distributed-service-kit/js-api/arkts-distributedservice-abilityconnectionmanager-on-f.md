# on

## Modules to Import

```TypeScript
import { abilityConnectionManager } from '@kit.DistributedServiceKit';
```

## on('connect')

```TypeScript
function on(type: 'connect', sessionId: number,
        callback: Callback<EventCallbackInfo>): void
```

Enables listening for **connect** events. This API uses an asynchronous callback to return the result.

**Since:** 18

**Model restriction:** This API can be used only in the stage model.

<!--Device-abilityConnectionManager-function on(type: 'connect', sessionId: number,
        callback: Callback<EventCallbackInfo>): void--><!--Device-abilityConnectionManager-function on(type: 'connect', sessionId: number,
        callback: Callback<EventCallbackInfo>): void-End-->

**System capability:** SystemCapability.DistributedSched.AppCollaboration

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'connect' | Yes | Event type. This field has a fixed value of **connect**. This event is triggered when [abilityConnectionManager.connect()](arkts-distributedservice-abilityconnectionmanager-connect-f.md#connect-1) is called. |
| sessionId | number | Yes | ID of the collaboration session. |
| callback | [Callback](../../apis-arkui/arkts-components/arkts-arkui-common-callback-i.md)<EventCallbackInfo> | Yes | Registered callback function. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified. 2.Incorrect parameter types. |

**Example**

```TypeScript
import { abilityConnectionManager } from '@kit.DistributedServiceKit';
import { hilog } from '@kit.PerformanceAnalysisKit';

let sessionId = 100;
abilityConnectionManager.on("connect", sessionId,(callbackInfo) => {
  hilog.info(0x0000, 'testTag', 'session connect, sessionId is', callbackInfo.sessionId);
});


```


## on('disconnect')

```TypeScript
function on(type: 'disconnect', sessionId: number,
        callback: Callback<EventCallbackInfo>): void
```

Enables listening for **disconnect** events.

**Since:** 18

**Model restriction:** This API can be used only in the stage model.

<!--Device-abilityConnectionManager-function on(type: 'disconnect', sessionId: number,
        callback: Callback<EventCallbackInfo>): void--><!--Device-abilityConnectionManager-function on(type: 'disconnect', sessionId: number,
        callback: Callback<EventCallbackInfo>): void-End-->

**System capability:** SystemCapability.DistributedSched.AppCollaboration

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'disconnect' | Yes | Event type. This field has a fixed value of **disconnect**. This event is triggered when [abilityConnectionManager.disconnect()](arkts-distributedservice-abilityconnectionmanager-disconnect-f.md#disconnect-1) is called. |
| sessionId | number | Yes | ID of the collaboration session. |
| callback | [Callback](../../apis-arkui/arkts-components/arkts-arkui-common-callback-i.md)<EventCallbackInfo> | Yes | Registered callback function. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified. 2.Incorrect parameter types. |

**Example**

```TypeScript
import { abilityConnectionManager } from '@kit.DistributedServiceKit';
import { hilog } from '@kit.PerformanceAnalysisKit';

let sessionId = 100;
abilityConnectionManager.on("disconnect", sessionId,(callbackInfo) => {
  hilog.info(0x0000, 'testTag', 'session disconnect, sessionId is', callbackInfo.sessionId);
});


```


## on('receiveMessage')

```TypeScript
function on(type: 'receiveMessage', sessionId: number,
        callback: Callback<EventCallbackInfo>): void
```

Enables listening for **receiveMessage** events.

**Since:** 18

**Model restriction:** This API can be used only in the stage model.

<!--Device-abilityConnectionManager-function on(type: 'receiveMessage', sessionId: number,
        callback: Callback<EventCallbackInfo>): void--><!--Device-abilityConnectionManager-function on(type: 'receiveMessage', sessionId: number,
        callback: Callback<EventCallbackInfo>): void-End-->

**System capability:** SystemCapability.DistributedSched.AppCollaboration

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'receiveMessage' | Yes | Event type. This field has a fixed value of **receiveMessage**. This event is triggered when [abilityConnectionManager.sendMessage()](arkts-distributedservice-abilityconnectionmanager-sendmessage-f.md#sendmessage-1) is called. |
| sessionId | number | Yes | ID of the collaboration session. |
| callback | [Callback](../../apis-arkui/arkts-components/arkts-arkui-common-callback-i.md)<EventCallbackInfo> | Yes | Registered callback function. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified. 2.Incorrect parameter types. |

**Example**

```TypeScript
import { abilityConnectionManager } from '@kit.DistributedServiceKit';
import { hilog } from '@kit.PerformanceAnalysisKit';

let sessionId = 100;
abilityConnectionManager.on("receiveMessage", sessionId,(callbackInfo) => {
  hilog.info(0x0000, 'testTag', 'receiveMessage, sessionId is', callbackInfo.sessionId);
});


```


## on('receiveData')

```TypeScript
function on(type: 'receiveData', sessionId: number,
        callback: Callback<EventCallbackInfo>): void
```

Enables listening for **receiveData** events.

**Since:** 18

**Model restriction:** This API can be used only in the stage model.

<!--Device-abilityConnectionManager-function on(type: 'receiveData', sessionId: number,
        callback: Callback<EventCallbackInfo>): void--><!--Device-abilityConnectionManager-function on(type: 'receiveData', sessionId: number,
        callback: Callback<EventCallbackInfo>): void-End-->

**System capability:** SystemCapability.DistributedSched.AppCollaboration

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'receiveData' | Yes | Event type. This field has a fixed value of **receiveData**. This event is triggered when [abilityConnectionManager.sendData()](arkts-distributedservice-abilityconnectionmanager-senddata-f.md#senddata-1) is called. |
| sessionId | number | Yes | ID of the collaboration session. |
| callback | [Callback](../../apis-arkui/arkts-components/arkts-arkui-common-callback-i.md)<EventCallbackInfo> | Yes | Registered callback function. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified. 2.Incorrect parameter types. |

**Example**

```TypeScript
import { abilityConnectionManager } from '@kit.DistributedServiceKit';
import { hilog } from '@kit.PerformanceAnalysisKit';

let sessionId = 100;
abilityConnectionManager.on("receiveData", sessionId,(callbackInfo) => {
  hilog.info(0x0000, 'testTag', 'receiveData, sessionId is', callbackInfo.sessionId);
});


```

