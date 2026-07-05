# getUid

## getUid

```TypeScript
function getUid(agent: WantAgent, callback: AsyncCallback<number>): void
```

获取WantAgent实例的用户ID。使用callback异步回调。

**Since:** 7

**Deprecated since:** 9

**Substitute:** ohos.app.ability.wantAgent/wantAgent#getUid

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| agent | WantAgent | Yes | WantAgent对象。 |
| callback | AsyncCallback&lt;number> | Yes | 获取WantAgent实例的用户ID的回调方法。 |

**Example**

```TypeScript
import wantAgent, { WantAgent as _WantAgent } from '@ohos.wantAgent';
import { BusinessError } from '@ohos.base';

// WantAgent object
let wantAgentObj: _WantAgent;

// getWantAgent callback
function getWantAgentCallback(err: BusinessError, data: _WantAgent) {
    console.info('==========================>getWantAgentCallback=======================>');
    if (err.code == 0) {
        wantAgentObj = data;
    } else {
        console.error('getWantAgent failed, error: ' + JSON.stringify(err));
        return;
    }

    // getUid callback
    let getUidCallback = (err: BusinessError, data: number) => {
        console.info('==========================>getUidCallback=======================>');
    }
    wantAgent.getUid(wantAgentObj, getUidCallback);
}

wantAgent.getWantAgent({
    wants: [
        {
            deviceId: 'deviceId',
            bundleName: 'com.neu.setResultOnAbilityResultTest1',
            abilityName: 'com.example.test.EntryAbility',
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
        }
    ],
    operationType: wantAgent.OperationType.START_ABILITY,
    requestCode: 0,
    wantAgentFlags:[wantAgent.WantAgentFlags.UPDATE_PRESENT_FLAG]
}, getWantAgentCallback);

```

## getUid

```TypeScript
function getUid(agent: WantAgent): Promise<number>
```

获取WantAgent实例的用户ID。使用Promise异步回调。

**Since:** 7

**Deprecated since:** 9

**Substitute:** ohos.app.ability.wantAgent/wantAgent#getUid

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| agent | WantAgent | Yes | WantAgent对象。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;number> | 以Promise形式返回获取WantAgent实例的用户ID。 |

**Example**

```TypeScript
import wantAgent, { WantAgent as _WantAgent } from '@ohos.wantAgent';

// WantAgent object
let wantAgentObj: _WantAgent;

wantAgent.getWantAgent({
    wants: [
        {
            deviceId: 'deviceId',
            bundleName: 'com.neu.setResultOnAbilityResultTest1',
            abilityName: 'com.example.test.EntryAbility',
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
        }
    ],
    operationType: wantAgent.OperationType.START_ABILITY,
    requestCode: 0,
    wantAgentFlags:[wantAgent.WantAgentFlags.UPDATE_PRESENT_FLAG]
}).then((data) => {
    console.info('==========================>getWantAgentCallback=======================>');
    wantAgentObj = data;
    if (wantAgentObj) {
        wantAgent.getUid(wantAgentObj).then((data) => {
        console.info('==========================>getUidCallback=======================>');
    });
    }
});

```

