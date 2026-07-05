# getBundleName

## getBundleName

```TypeScript
function getBundleName(agent: WantAgent, callback: AsyncCallback<string>): void
```

获取WantAgent实例所属应用的包名，使用callback异步回调。

**Since:** 9

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| agent | WantAgent | Yes | WantAgent对象。 |
| callback | AsyncCallback&lt;string> | Yes | 回调函数。当获取包名成功，err为undefined，data为创建的WantAgent；否则err会返回对应的错误码和错误信息。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types. |
| 16000007 | Service busy. There are concurrent tasks. Try again later. |
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
  // getBundleName callback.
  let getBundleNameCallback = (err: BusinessError, data: string) => {
    if (err) {
      console.error(`getBundleName failed! ${err.code} ${err.message}`);
    } else {
      console.info(`getBundleName ok! ${JSON.stringify(data)}`);
    }
  }
  try {
    wantAgent.getBundleName(wantAgentData, getBundleNameCallback);
  } catch (err) {
    console.error(`getBundleName failed! ${err.code} ${err.message}`);
  }
}

try {
  wantAgent.getWantAgent(wantAgentInfo, getWantAgentCallback);
} catch (err) {
  console.error(`getWantAgent failed! ${err.code} ${err.message}`);
}

```

## getBundleName

```TypeScript
function getBundleName(agent: WantAgent): Promise<string>
```

获取WantAgent实例所属应用的包名。使用Promise异步回调。

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
| Promise&lt;string> | Promise对象，返回获取WantAgent实例的包名。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types. |
| 16000007 | Service busy. There are concurrent tasks. Try again later. |
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
  wantAgentFlags:[wantAgent.WantAgentFlags.UPDATE_PRESENT_FLAG]
};

// getWantAgent callback.
function getWantAgentCallback(err: BusinessError, data: WantAgent) {
  if (err) {
    console.error(`getWantAgent failed, code: ${JSON.stringify(err.code)}, message: ${JSON.stringify(err.message)}`);
  } else {
    wantAgentData = data;
  }
  try {
    wantAgent.getBundleName(wantAgentData).then((data)=>{
      console.info(`getBundleName ok! ${JSON.stringify(data)}`);
    }).catch((err: BusinessError)=>{
      console.error(`getBundleName failed! ${err.code} ${err.message}`);
    });
  } catch(err){
    console.error(`getBundleName failed! ${err.code} ${err.message}`);
  }
}
try {
  wantAgent.getWantAgent(wantAgentInfo, getWantAgentCallback);
} catch(err) {
  console.error(`getWantAgent failed! ${err.code} ${err.message}`);
}

```

