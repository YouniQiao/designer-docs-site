# getOperationType

## getOperationType

```TypeScript
function getOperationType(agent: WantAgent, callback: AsyncCallback<int>): void
```

获取一个WantAgent实例的OperationType信息，使用callback异步回调。

**Since:** 9

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| agent | WantAgent | Yes | WantAgent对象。 |
| callback | AsyncCallback&lt;int> | Yes | 获取一个WantAgent的OperationType信息的回调方法。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types. |
| 16000007 | Service busy. There are concurrent tasks. Try again later. |
| 16000015 | Service timeout. |
| 16000151 | Invalid wantAgent object. |

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
    console.error(`getWantAgent failed, code: ${JSON.stringify(err.code)}, message: ${JSON.stringify(err.message)}`);
  } else {
    wantAgentData = data;
  }
  // getOperationTypeCallback callback
  let getOperationTypeCallback = (err: BusinessError, data: number) => {
    if (err) {
      console.error(`getOperationType failed! ${err.code} ${err.message}`);
    } else {
      console.info(`getOperationType ok! ${JSON.stringify(data)}`);
    }
  }
  try {
    wantAgent.getOperationType(wantAgentData, getOperationTypeCallback);
  } catch (err) {
    console.error(`getOperationTypeCallback failed! ${(err as BusinessError).code} ${(err as BusinessError).message}`);
  }
}

try {
  wantAgent.getWantAgent(wantAgentInfo, getWantAgentCallback);
} catch (err) {
  console.error(`getWantAgent failed! ${(err as BusinessError).code} ${(err as BusinessError).message}`);
}

```

## getOperationType

```TypeScript
function getOperationType(agent: WantAgent): Promise<int>
```

获取一个WantAgent实例的OperationType信息。使用Promise异步回调。

**Since:** 9

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| agent | WantAgent | Yes | WantAgent对象。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;int> | Promise对象，返回OperationType的结果。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types. |
| 16000007 | Service busy. There are concurrent tasks. Try again later. |
| 16000015 | Service timeout. |
| 16000151 | Invalid wantAgent object. |

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
    console.error(`getWantAgent failed, code: ${JSON.stringify(err.code)}, message: ${JSON.stringify(err.message)}`);
  } else {
    wantAgentData = data;
  }
  try {
    wantAgent.getOperationType(wantAgentData).then((data) => {
      console.info(`getOperationType ok! ${JSON.stringify(data)}`);
    }).catch((err: BusinessError) => {
      console.error(`getOperationType failed! ${err.code} ${err.message}`);
    });
  } catch (err) {
    console.error(`getOperationType failed! ${(err as BusinessError).code} ${(err as BusinessError).message}`);
  }
}

try {
  wantAgent.getWantAgent(wantAgentInfo, getWantAgentCallback);
} catch (err) {
  console.error(`getWantAgent failed! ${(err as BusinessError).code} ${(err as BusinessError).message}`);
}

```

