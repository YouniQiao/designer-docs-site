# equal

## Modules to Import

```TypeScript
import { WantAgent } from '@kit.AbilityKit';
```

## equal

```TypeScript
function equal(agent: WantAgent, otherAgent: WantAgent, callback: AsyncCallback<boolean>): void
```

Checks whether two WantAgent objects are equal, so as to determine whether the same operation is from the
same application.
This API uses an asynchronous callback to return the result.

**Since:** 9

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| agent | WantAgent | Yes | The first WantAgent object. |
| otherAgent | WantAgent | Yes | The second WantAgent object. |
| callback | AsyncCallback&lt;boolean&gt; | Yes | Callback used to return the result. The value <code>true</code> meansthat the two WantAgent objects are equal, and <code>false</code> means the opposite. |

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
let wantAgent1: WantAgent;
let wantAgent2: WantAgent;
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
    wantAgent1 = data;
    wantAgent2 = data;
  }
  // equal callback
  let equalCallback = (err: BusinessError, data: boolean) => {
    if (err) {
      console.error(`equal failed! ${err.code} ${err.message}`);
    } else {
      console.info(`equal ok! ${JSON.stringify(data)}`);
    }
  }
  try {
    wantAgent.equal(wantAgent1, wantAgent2, equalCallback);
  } catch (err) {
    console.error(`equal failed! ${(err as BusinessError).code} ${(err as BusinessError).message}`);
  }
}

try {
  wantAgent.getWantAgent(wantAgentInfo, getWantAgentCallback);
} catch (err) {
  console.error(`getWantAgent failed! ${(err as BusinessError).code} ${(err as BusinessError).message}`);
}

```


## equal

```TypeScript
function equal(agent: WantAgent, otherAgent: WantAgent): Promise<boolean>
```

Checks whether two WantAgent objects are equal, so as to determine whether the same operation is from the
same application.
This API uses a promise to return the result.

**Since:** 9

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| agent | WantAgent | Yes | The first WantAgent object. |
| otherAgent | WantAgent | Yes | The second WantAgent object. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;boolean&gt; | Promise used to return the result. The value <code>true</code> means that the twoWantAgent objects are equal, and <code>false</code> means the opposite. |

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
let wantAgent1: WantAgent;
let wantAgent2: WantAgent;
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
    wantAgent1 = data;
    wantAgent2 = data;
  }
  try {
    wantAgent.equal(wantAgent1, wantAgent2).then((data) => {
      console.info(`equal ok! ${JSON.stringify(data)}`);
    }).catch((err: BusinessError) => {
      console.error(`equal failed! ${err.code} ${err.message}`);
    })
  } catch (err) {
    console.error(`equal failed! ${(err as BusinessError).code} ${(err as BusinessError).message}`);
  }
}

try {
  wantAgent.getWantAgent(wantAgentInfo, getWantAgentCallback);
} catch (err) {
  console.error(`getWantAgent failed! ${(err as BusinessError).code} ${(err as BusinessError).message}`);
}

```

