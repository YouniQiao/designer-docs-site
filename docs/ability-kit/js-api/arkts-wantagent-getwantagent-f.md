# getWantAgent

## getWantAgent

```TypeScript
function getWantAgent(info: WantAgentInfo, callback: AsyncCallback<WantAgent>): void
```

创建WantAgent，使用callback异步回调。创建成功返回WantAgent对象，创建失败返回空值。

**Since:** 9

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| info | WantAgentInfo | Yes | 表示创建WantAgent所需的配置信息，包括目标UIAbility、操作类型、请求码等。三方应用在WantAgentInfo中只能设置本应用的UIAbility。 |
| callback | AsyncCallback&lt;WantAgent> | Yes | 回调函数。当创建WantAgent成功，err中code为0，data为创建的WantAgent；否则err会返回对应的错误码和错误信息。 |

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

创建WantAgent。使用Promise异步回调。创建成功返回WantAgent对象，创建失败返回空值。

**Since:** 9

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| info | WantAgentInfo | Yes | 表示创建WantAgent所需的配置信息，包括目标UIAbility、操作类型、请求码等。三方应用在WantAgentInfo中只能设置本应用的UIAbility。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;WantAgent> | Promise对象，返回创建的WantAgent。 |

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

