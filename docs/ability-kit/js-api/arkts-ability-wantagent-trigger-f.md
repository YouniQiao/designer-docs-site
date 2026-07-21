# trigger

## Modules to Import

```TypeScript
import { WantAgent } from '@kit.AbilityKit';
```

<a id="trigger"></a>
## trigger

```TypeScript
function trigger(agent: WantAgent, triggerInfo: TriggerInfo, callback?: AsyncCallback<CompleteData>): void
```

Proactively triggers a WantAgent object.This API uses an asynchronous callback to return the result.

**Since:** 9

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-wantAgent-function trigger(agent: WantAgent, triggerInfo: TriggerInfo, callback?: AsyncCallback<CompleteData>): void--><!--Device-wantAgent-function trigger(agent: WantAgent, triggerInfo: TriggerInfo, callback?: AsyncCallback<CompleteData>): void-End-->

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| agent | [WantAgent](../../apis-background-tasks-kit/arkts-apis/arkts-backgroundtasks-reminderagent-wantagent-i.md) | Yes | Target WantAgent object. |
| triggerInfo | [TriggerInfo](arkts-ability-wantagent-triggerinfo-t.md) | Yes | {@link TriggerInfo} object. |
| callback | [AsyncCallback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-asynccallback-i.md)&lt;CompleteData&gt; | No | Callback used to return the result. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;2. Incorrect parameter types. |

**Example**

```TypeScript
import { wantAgent, Want } from '@kit.AbilityKit';
import type { WantAgent } from '@kit.AbilityKit';
import { BusinessError } from '@kit.BasicServicesKit';

// WantAgent object.
let wantAgentData: WantAgent;
// triggerInfo
let triggerInfo: wantAgent.TriggerInfo = {
  code: 0 // Custom result code
};
// WantAgentInfo object.
let wantAgentInfo: wantAgent.WantAgentInfo = {
  wants: [
    {
      deviceId: 'deviceId',
      bundleName: 'com.example.myapplication',
      abilityName: 'EntryAbility',
      action: 'action1',
      entities: ['entity1'],
      type: 'MIMETYPE',
      uri: 'key={true,true,false}',
      parameters:
      {
        mykey0: 2222,
        mykey1: [1, 2, 3],
        mykey2: '[1, 2, 3]',
        mykey3: 'ssssssssssssssssssssssssss',
        mykey4: [false, true, false],
        mykey5: ['qqqqq', 'wwwwww', 'aaaaaaaaaaaaaaaaa'],
        mykey6: true,
      }
    } as Want
  ],
  actionType: wantAgent.OperationType.START_ABILITY,
  requestCode: 0,
  wantAgentFlags: [wantAgent.WantAgentFlags.UPDATE_PRESENT_FLAG]
};

// getWantAgent callback.
function getWantAgentCallback(err: BusinessError, data: WantAgent) {
  if (err) {
    console.info(`getWantAgent failed, code: ${err.code}, message: ${err.message}`);
  } else {
    wantAgentData = data;
  }
  // trigger callback
  let triggerCallback = (err: BusinessError, data: wantAgent.CompleteData) => {
    if (err) {
      console.error(`trigger failed, code: ${err.code}, message: ${err.message}`);
    } else {
      console.info(`trigger success, data: ${JSON.stringify(data)}`);
    }
  }
  try {
    wantAgent.trigger(wantAgentData, triggerInfo, triggerCallback);
  } catch (err) {
    let code = (err as BusinessError).code;
    let msg = (err as BusinessError).message;
    console.error(`trigger failed, code: ${code}, message: ${msg}.`);
  }
}

try {
  wantAgent.getWantAgent(wantAgentInfo, getWantAgentCallback);
} catch (err) {
  let code = (err as BusinessError).code;
  let msg = (err as BusinessError).message;
  console.error(`getWantAgent failed, code: ${code}, message: ${msg}.`);
}

```

