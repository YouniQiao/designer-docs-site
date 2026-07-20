# on (System API)

## Modules to Import

```TypeScript
import { abilityConnectionManager } from '@kit.DistributedServiceKit';
```

## on('receiveImage')

```TypeScript
function on(type: 'receiveImage', sessionId: number,
        callback: Callback<EventCallbackInfo>): void
```

Registers receiveImage event.

**Since:** 18

**Model restriction:** This API can be used only in the stage model.

<!--Device-abilityConnectionManager-function on(type: 'receiveImage', sessionId: number,
        callback: Callback<EventCallbackInfo>): void--><!--Device-abilityConnectionManager-function on(type: 'receiveImage', sessionId: number,
        callback: Callback<EventCallbackInfo>): void-End-->

**System capability:** SystemCapability.DistributedSched.AppCollaboration

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'receiveImage' | Yes | Registration Type, 'receiveImage'. |
| sessionId | number | Yes | Ability connection Session id. |
| callback | [Callback](../../apis-arkui/arkts-components/arkts-arkui-common-callback-i.md)<EventCallbackInfo> | Yes | Used to handle ('receiveImage') command. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Not system App. |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified. 2.Incorrect parameter types. |

**Example**

```TypeScript
import { abilityConnectionManager } from '@kit.DistributedServiceKit';
import { hilog } from '@kit.PerformanceAnalysisKit';

abilityConnectionManager.on("receiveImage", sessionId, (callbackInfo) => {
  hilog.info(0x0000, 'testTag', 'session receiveImage, sessionId is', callbackInfo.sessionId);
});

```


## on('collaborateEvent')

```TypeScript
function on(type: 'collaborateEvent', sessionId: number,
        callback: Callback<CollaborateEventInfo>): void
```

Registers collaborateEvent event.

**Since:** 18

**Model restriction:** This API can be used only in the stage model.

<!--Device-abilityConnectionManager-function on(type: 'collaborateEvent', sessionId: number,
        callback: Callback<CollaborateEventInfo>): void--><!--Device-abilityConnectionManager-function on(type: 'collaborateEvent', sessionId: number,
        callback: Callback<CollaborateEventInfo>): void-End-->

**System capability:** SystemCapability.DistributedSched.AppCollaboration

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'collaborateEvent' | Yes | Registration Type, 'collaborateEvent'. |
| sessionId | number | Yes | Ability connection Session id. |
| callback | [Callback](../../apis-arkui/arkts-components/arkts-arkui-common-callback-i.md)<CollaborateEventInfo> | Yes | Called when an error event comes. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Not system App. |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified. 2.Incorrect parameter types. |

**Example**

```TypeScript
import { abilityConnectionManager } from '@kit.DistributedServiceKit';
import { hilog } from '@kit.PerformanceAnalysisKit';

let sessionId = 100;
abilityConnectionManager.on("collaborateEvent", sessionId, (callbackInfo) => {
  hilog.info(0x0000, 'testTag', 'session collaborateEvent, eventType is', callbackInfo.eventType);
});

```

