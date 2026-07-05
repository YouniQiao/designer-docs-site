# createLocalWantAgent

## createLocalWantAgent

```TypeScript
function createLocalWantAgent(info: LocalWantAgentInfo): WantAgent
```

创建本地WantAgent实例。 > **说明：** > 本接口创建的本地WantAgent实例仅存储于WantAgent客户端，不受WantAgent服务端管理。使用该本地实例时，需要校验实例，以保证安全性。 > 本地WantAgent实例创建后，触发方法参见[wantAgent.triggerAsync](arkts-wantagent-triggerasync-f-sys.md#triggerAsync-1)接口说明。

**Since:** 20

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| info | LocalWantAgentInfo | Yes | Information about the local WantAgent object to create. |

**Return value:**

| Type | Description |
| --- | --- |
| WantAgent | Returns the created WantAgent. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 202 | Not System App. Interface caller is not a system app. |

**Example**

```TypeScript
import { wantAgent, Want } from '@kit.AbilityKit';
import type { WantAgent } from '@kit.AbilityKit';

// Declare a wantAgent object.
let wantAgentData: WantAgent;
// Create a LocalWantAgentInfo object.
let localWantAgentInfo: wantAgent.LocalWantAgentInfo = {
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
  operationType: wantAgent.OperationType.START_ABILITY,
  requestCode: 0
};
// Create a local WantAgent object.
try {
  wantAgentData = wantAgent.createLocalWantAgent(localWantAgentInfo);
} catch (err) {
  console.error('createLocalWantAgent failed');
}

```

