# cancel

## Modules to Import

```TypeScript
import { WantAgent } from '@kit.AbilityKit';
```

<a id="cancel"></a>
## cancel

```TypeScript
function cancel(agent: WantAgent, callback: AsyncCallback<void>): void
```

Cancels a WantAgent object.This API uses an asynchronous callback to return the result.

**Since:** 9

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-wantAgent-function cancel(agent: WantAgent, callback: AsyncCallback<void>): void--><!--Device-wantAgent-function cancel(agent: WantAgent, callback: AsyncCallback<void>): void-End-->

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| agent | [WantAgent](../../apis-background-tasks-kit/arkts-apis/arkts-backgroundtasks-reminderagent-wantagent-i.md) | Yes | Target WantAgent object. |
| callback | [AsyncCallback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-asynccallback-i.md)&lt;void&gt; | Yes | Callback used to return the result. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;2. Incorrect parameter types. |
| [16000007](../errorcode-ability.md#16000007-service-unresponsive) | Service busy. There are concurrent tasks. Try again later. |
| [16000151](../errorcode-ability.md#16000151-invalid-wantagent-object) | Invalid wantAgent object. |

**Example**

```TypeScript
import { wantAgent, Want } from '@kit.AbilityKit';
import type { WantAgent } from '@kit.AbilityKit';
import { BusinessError } from '@kit.BasicServicesKit';

// WantAgent object.
let wantAgentData: WantAgent;
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
    console.error(`getWantAgent failed, err code: ${err.code}, err msg: ${err.message}.`);
  } else {
    wantAgentData = data;
  }
  // cancel callback.
  let cancelCallback = (err: BusinessError, data: void) => {
    if (err) {
      console.error(`cancel failed, err code: ${err.code}, err msg: ${err.message}.`);
    } else {
      console.info(`cancel sucecss.`);
    }
  }
  try {
    wantAgent.cancel(wantAgentData, cancelCallback);
  } catch (err) {
    let code = (err as BusinessError).code;
    let msg = (err as BusinessError).message;
    console.error(`cancel failed, err code: ${code}, err msg: ${msg}.`);
  }
}

try {
  wantAgent.getWantAgent(wantAgentInfo, getWantAgentCallback);
} catch (err) {
  let code = (err as BusinessError).code;
  let msg = (err as BusinessError).message;
  console.error(`getWantAgent failed, err code: ${code}, err msg: ${msg}.`);
}

```


<a id="cancel-1"></a>
## cancel

```TypeScript
function cancel(agent: WantAgent): Promise<void>
```

Cancels a WantAgent object.This API uses a promise to return the result.

**Since:** 9

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-wantAgent-function cancel(agent: WantAgent): Promise<void>--><!--Device-wantAgent-function cancel(agent: WantAgent): Promise<void>-End-->

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| agent | [WantAgent](../../apis-background-tasks-kit/arkts-apis/arkts-backgroundtasks-reminderagent-wantagent-i.md) | Yes | Target WantAgent object. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | Promise used to return the result. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;2. Incorrect parameter types. |
| [16000007](../errorcode-ability.md#16000007-service-unresponsive) | Service busy. There are concurrent tasks. Try again later. |
| [16000151](../errorcode-ability.md#16000151-invalid-wantagent-object) | Invalid wantAgent object. |

**Example**

```TypeScript
import { wantAgent, Want } from '@kit.AbilityKit';
import type { WantAgent } from '@kit.AbilityKit';
import { BusinessError } from '@kit.BasicServicesKit';

// WantAgent object.
let wantAgentData: WantAgent;
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
    console.error(`getWantAgent failed, err code: ${err.code}, err msg: ${err.message}.`);
  } else {
    wantAgentData = data;
  }
  try {
    wantAgent.cancel(wantAgentData).then((data) => {
      console.info('cancel success.');
    }).catch((err: BusinessError) => {
      console.error(`cancel failed, err code: ${err.code}, err msg: ${err.message}.`);
    });
  } catch (err) {
    let code = (err as BusinessError).code;
    let msg = (err as BusinessError).message;
    console.error(`cancel failed, err code: ${code}, err msg: ${msg}.`);
  }
}

try {
  wantAgent.getWantAgent(wantAgentInfo, getWantAgentCallback);
} catch (err) {
  let code = (err as BusinessError).code;
  let msg = (err as BusinessError).message;
  console.error(`getWantAgent failed, err code: ${code}, err msg: ${msg}.`);
}

```

