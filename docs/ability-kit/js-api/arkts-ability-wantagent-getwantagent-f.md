# getWantAgent

## Modules to Import

```TypeScript
import { WantAgent } from '@kit.AbilityKit';
```

## getWantAgent

```TypeScript
function getWantAgent(info: WantAgentInfo, callback: AsyncCallback<WantAgent>): void
```

Obtains a WantAgent object.This API uses an asynchronous callback to return the result.If the creation fails, a null WantAgent object is returned.

<p>**NOTE**:<br>Third-party applications can set only their own abilities.</p>

**Since:** 9

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-wantAgent-function getWantAgent(info: WantAgentInfo, callback: AsyncCallback<WantAgent>): void--><!--Device-wantAgent-function getWantAgent(info: WantAgentInfo, callback: AsyncCallback<WantAgent>): void-End-->

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| info | [WantAgentInfo](arkts-ability-wantagent-wantagentinfo-t.md) | Yes | Information about the WantAgent object to obtain. |
| callback | [AsyncCallback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-asynccallback-i.md)<WantAgent> | Yes | Callback used to return the WantAgent object. |

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
  if (err.code) {
    console.error(`getWantAgent failed, code: ${JSON.stringify(err.code)}, message: ${JSON.stringify(err.message)}`);
  } else {
    wantAgentData = data;
  }
}

try {
  wantAgent.getWantAgent(wantAgentInfo, getWantAgentCallback);
} catch (err) {
  console.error(`getWantAgent failed, error: ${JSON.stringify(err)}`);
}

```


## getWantAgent

```TypeScript
function getWantAgent(info: WantAgentInfo): Promise<WantAgent>
```

Obtains a WantAgent object.This API uses a promise to return the result.If the creation fails, a null WantAgent object is returned.

<p>**NOTE**:<br>Third-party applications can set only their own abilities.</p>

**Since:** 9

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-wantAgent-function getWantAgent(info: WantAgentInfo): Promise<WantAgent>--><!--Device-wantAgent-function getWantAgent(info: WantAgentInfo): Promise<WantAgent>-End-->

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| info | [WantAgentInfo](arkts-ability-wantagent-wantagentinfo-t.md) | Yes | Information about the WantAgent object to obtain. |

**Return value:**

| Type | Description |
| --- | --- |
| [Promise](../../apis-na/arkts-apis/arkts-na-lib-es5-promise-i.md)<WantAgent> | Promise used to return the WantAgent object. |

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

try {
  wantAgent.getWantAgent(wantAgentInfo).then((data) => {
    wantAgentData = data;
  }).catch((err: BusinessError) => {
    console.error(`getWantAgent failed, code: ${JSON.stringify(err.code)}, message: ${JSON.stringify(err.message)}`);
  });
} catch (err) {
  console.error(`getWantAgent failed! ${err.code} ${err.message}`);
}

```

