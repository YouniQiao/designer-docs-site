# disconnectAbility

## disconnectAbility

```TypeScript
function disconnectAbility(connection: number, callback: AsyncCallback<void>): void
```

断开与指定ServiceAbility的连接。使用callback异步回调。

**Since:** 7

**Model restriction:** This API can be used only in the FA model.

**System capability:** SystemCapability.Ability.AbilityRuntime.FAModel

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| connection | number | Yes | 表示断开连接的ServiceAbility的ID。 |
| callback | AsyncCallback&lt;void> | Yes | 回调函数。当断开与指定ServiceAbility的连接成功，err为undefined，否则为错误对象。 |

**Example**

```TypeScript
import { featureAbility } from '@kit.AbilityKit';
import { rpc } from '@kit.IPCKit';

let connectId = featureAbility.connectAbility(
  {
    bundleName: 'com.ix.ServiceAbility',
    abilityName: 'com.ix.ServiceAbility.ServiceAbilityA',
  },
  {
    onConnect: (element, remote) => {
      console.info(`ConnectAbility onConnect remote is proxy: ${(remote instanceof rpc.RemoteProxy)}`);
    },
    onDisconnect: (element) => {
      console.info(`ConnectAbility onDisconnect element.deviceId : ${element.deviceId}`);
    },
    onFailed: (code) => {
      console.error(`featureAbilityTest ConnectAbility onFailed errCode : ${code}`);
    },
  },
);

featureAbility.disconnectAbility(connectId, (error) => {
  if (error && error.code !== 0) {
    console.error(`disconnectAbility fail, connectId: ${connectId}, error: ${JSON.stringify(error)}`);
  } else {
    console.info(`disconnectAbility success, connectId: ${connectId}`);
  }
});

```

## disconnectAbility

```TypeScript
function disconnectAbility(connection: number): Promise<void>
```

断开与指定ServiceAbility的连接。使用Promise异步回调。

**Since:** 7

**Model restriction:** This API can be used only in the FA model.

**System capability:** SystemCapability.Ability.AbilityRuntime.FAModel

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| connection | number | Yes | 表示断开连接的ServiceAbility的ID。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | Promise对象。无返回结果的Promise对象。 |

**Example**

```TypeScript
import { featureAbility } from '@kit.AbilityKit';
import { rpc } from '@kit.IPCKit';
import { BusinessError } from '@kit.BasicServicesKit';

let connectId = featureAbility.connectAbility(
  {
    bundleName: 'com.ix.ServiceAbility',
    abilityName: 'com.ix.ServiceAbility.ServiceAbilityA',
  },
  {
    onConnect: (element, remote) => {
      console.info(`ConnectAbility onConnect remote is proxy: ${(remote instanceof rpc.RemoteProxy)}`);
    },
    onDisconnect: (element) => {
      console.info(`ConnectAbility onDisconnect element.deviceId : ${element.deviceId}`);
    },
    onFailed: (code) => {
      console.error(`featureAbilityTest ConnectAbility onFailed errCode : ${code}`);
    },
  },
);

featureAbility.disconnectAbility(connectId).then(() => {
  console.info('disconnectAbility success');
}).catch((error: BusinessError)=>{
  console.error(`featureAbilityTest result errCode : ${error.code}`);
});

```

