# equal

## equal

```TypeScript
function equal(agent: WantAgent, otherAgent: WantAgent, callback: AsyncCallback<boolean>): void
```

判断两个WantAgent实例是否相等，以此来判断是否是来自同一应用的相同操作。使用callback异步回调。

**Since:** 7

**Deprecated since:** 9

**Substitute:** ohos.app.ability.wantAgent/wantAgent#equal

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| agent | WantAgent | Yes | WantAgent对象。 |
| otherAgent | WantAgent | Yes | WantAgent对象。 |
| callback | AsyncCallback&lt;boolean> | Yes | 判断两个WantAgent实例是否相等的回调方法。返回true表示两个WantAgent实例相等；返回false表示不相等。 |

**Example**

```TypeScript
import wantAgent, { WantAgent as _WantAgent } from '@ohos.wantAgent';
import { BusinessError } from '@ohos.base';

// WantAgent object
let wantAgentObj1: _WantAgent;
let wantAgentObj2: _WantAgent;

// getWantAgent callback
function getWantAgentCallback(err: BusinessError, data: _WantAgent) {
    console.info('==========================>getWantAgentCallback=======================>');
    if (err.code == 0) {
        wantAgentObj1 = data;
        wantAgentObj2 = data;
    } else {
        console.error('getWantAgent failed, error: ' + JSON.stringify(err));
        return;
    }

    // equal callback
    let equalCallback = (err: BusinessError, data: boolean) => {
        console.info('==========================>equalCallback=======================>');
    };
    wantAgent.equal(wantAgentObj1, wantAgentObj2, equalCallback);
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

## equal

```TypeScript
function equal(agent: WantAgent, otherAgent: WantAgent): Promise<boolean>
```

判断两个WantAgent实例是否相等，以此来判断是否是来自同一应用的相同操作。使用Promise异步回调。

**Since:** 7

**Deprecated since:** 9

**Substitute:** ohos.app.ability.wantAgent/wantAgent#equal

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| agent | WantAgent | Yes | WantAgent对象。 |
| otherAgent | WantAgent | Yes | WantAgent对象。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;boolean> | 以Promise形式返回获取判断两个WantAgent实例是否相等的结果。返回true表示两个WantAgent实例相等；返回false表示不相等。 |

**Example**

```TypeScript
import wantAgent, { WantAgent as _WantAgent } from '@ohos.wantAgent';

// WantAgent object
let wantAgentObj1: _WantAgent;
let wantAgentObj2: _WantAgent;

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
    wantAgentObj1 = data;
    wantAgentObj2 = data;
    if (data) {
        wantAgent.equal(wantAgentObj1, wantAgentObj2).then((data) => {
            console.info('==========================>equalCallback=======================>');
        });
    }
});

```

