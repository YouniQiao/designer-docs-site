# triggerAsync

## triggerAsync

```TypeScript
function triggerAsync(agent: WantAgent, triggerInfo: TriggerInfo, context: Context): Promise<CompleteData>
```

主动触发WantAgent实例，即按照WantAgent实例中已封装的指定操作和参数等信息执行。使用Promise异步回调。 仅当入参agent为本地WantAgent实例时需要申请: ohos.permission.TRIGGER_LOCAL_WANTAGENT permission.

**Since:** 20

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| agent | WantAgent | Yes | WantAgent对象。 |
| triggerInfo | TriggerInfo | Yes | TriggerInfo对象。 |
| context | Context | Yes | 请求触发WantAgent的UIAbility/ExtensionAbility的Context。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;CompleteData> | Promise对象，返回主动激发WantAgent获得的数据。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | The application does not have permission to call the interface. |
| 202 | The application is not system-app, can not use system-api. |
| 16000020 | The context is not ability context. |
| 16000151 | Invalid wantagent object. |
| 16000153 | The Wantagent has been canceled. |

**Example**

```TypeScript
import { wantAgent, Want, UIAbility, AbilityConstant } from '@kit.AbilityKit';
import type { WantAgent } from '@kit.AbilityKit';
import { BusinessError } from '@kit.BasicServicesKit';

// WantAgent object.
let wantAgentData: WantAgent;
// triggerInfo
let triggerInfo: wantAgent.TriggerInfo = {
  code: 0 // Custom result code.
};
// WantAgentInfo object.
let wantAgentInfo: wantAgent.WantAgentInfo = {
  // Custom parameters.
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
  // Specified operation.
  actionType: wantAgent.OperationType.START_ABILITY,
  requestCode: 0,
  // WantAgent object type.
  wantAgentFlags: [wantAgent.WantAgentFlags.UPDATE_PRESENT_FLAG]
};

class MyAbility extends UIAbility {
  onCreate(want: Want, launchParam: AbilityConstant.LaunchParam) {
    try {
      // Create a WantAgent object.
      wantAgent.getWantAgent(wantAgentInfo, (err: BusinessError, data: WantAgent) => {
        if (err) {
          console.info(`getWantAgent failed, code: ${err.code}, message: ${err.message}`);
        } else {
          wantAgentData = data;
        }

        try {
          // Proactively trigger a WantAgent object.
          wantAgent.triggerAsync(wantAgentData, triggerInfo, this.context).then((data) => {
            console.info(`trigger success, data: ${JSON.stringify(data)}`);
          }).catch((err: BusinessError) => {
            console.error(`triggerAsync failed! ${err.code} ${err.message}`);
          });
        } catch (err) {
          console.error(`triggerAsync failed! ${err.code} ${err.message}`);
        }
      });
    } catch (err) {
      let code = (err as BusinessError).code;
      let msg = (err as BusinessError).message;
      console.error(`getWantAgent failed, code: ${code}, message: ${msg}.`);
    }
  }
}

```

