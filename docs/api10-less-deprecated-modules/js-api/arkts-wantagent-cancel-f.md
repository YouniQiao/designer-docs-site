# cancel

## cancel

```TypeScript
function cancel(agent: WantAgent, callback: AsyncCallback<void>): void
```

取消WantAgent实例。使用callback异步回调。

**Since:** 7

**Deprecated since:** 9

**Substitute:** ohos.app.ability.wantAgent/wantAgent#cancel

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| agent | WantAgent | Yes | WantAgent对象。 |
| callback | AsyncCallback&lt;void> | Yes | 取消WantAgent实例的回调方法 |

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

    // cancel callback
    let cancelCallback = (err: BusinessError) => {
        console.info('==========================>cancelCallback=======================>');
    }
    wantAgent.cancel(wantAgentObj, cancelCallback);
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

## cancel

```TypeScript
function cancel(agent: WantAgent): Promise<void>
```

取消WantAgent实例。使用Promise异步回调。

**Since:** 7

**Deprecated since:** 9

**Substitute:** ohos.app.ability.wantAgent/wantAgent#cancel

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| agent | WantAgent | Yes | WantAgent对象。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | 以Promise形式获取异步返回结果。 |

**Example**

```TypeScript
import wantAgent, { WantAgent as _WantAgent } from '@ohos.wantAgent';
import { BusinessError } from '@ohos.base';

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
        wantAgent.cancel(wantAgentObj).then((data) => {
            console.info('==========================>cancelCallback=======================>');
        });
    }
});

```

