# disconnectAbility

## Modules to Import

```TypeScript
import { particleAbility } from '@kit.AbilityKit';
```

## disconnectAbility

```TypeScript
function disconnectAbility(connection: number, callback: AsyncCallback<void>): void
```

Disconnects this ability from a specific ServiceAbility. This API uses an asynchronous callback to return the
result.

**Since:** 7

**Model restriction:** This API can be used only in the FA model.

**System capability:** SystemCapability.Ability.AbilityRuntime.FAModel

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| connection | number | Yes | ID of the ServiceAbility to disconnect. |
| callback | AsyncCallback&lt;void&gt; | Yes | Callback used to return the result. If the disconnection is successful,**err** is **undefined**. Otherwise, **err** is an error object. |

**Example**

```TypeScript
import { particleAbility } from '@kit.AbilityKit';
import { rpc } from '@kit.IPCKit';

let connId = particleAbility.connectAbility(
  {
    bundleName: 'com.ix.ServiceAbility',
    abilityName: 'ServiceAbilityA',
  },
  {
    onConnect: (element, remote) => {
      console.info(`ConnectAbility onConnect remote is proxy: ${(remote instanceof rpc.RemoteProxy)}`);
    },
    onDisconnect: (element) => {
      console.info(`ConnectAbility onDisconnect element.deviceId: ${element.deviceId}`);
    },
    onFailed: (code) => {
      console.error(`particleAbilityTest ConnectAbility onFailed errCode: ${code}`);
    },
  },
);

particleAbility.disconnectAbility(connId, (err) => {
  console.error(`particleAbilityTest disconnectAbility err: ${JSON.stringify(err)}`);
});

```


## disconnectAbility

```TypeScript
function disconnectAbility(connection: number): Promise<void>
```

Disconnects this ability from a specific ServiceAbility. This API uses a promise to return the result.

**Since:** 7

**Model restriction:** This API can be used only in the FA model.

**System capability:** SystemCapability.Ability.AbilityRuntime.FAModel

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| connection | number | Yes | ID of the ServiceAbility to disconnect. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | Promise used to return the result. Promise that returns no value. |

**Example**

```TypeScript
import { particleAbility } from '@kit.AbilityKit';
import { rpc } from '@kit.IPCKit';
import { BusinessError } from '@kit.BasicServicesKit';

let connId = particleAbility.connectAbility(
  {
    bundleName: 'com.ix.ServiceAbility',
    abilityName: 'ServiceAbilityA',
  },
  {
    onConnect: (element, remote) => {
      console.info(`ConnectAbility onConnect remote is proxy: ${(remote instanceof rpc.RemoteProxy)}`);
    },
    onDisconnect: (element) => {
      console.info(`ConnectAbility onDisconnect element.deviceId: ${element.deviceId}`);
    },
    onFailed: (code) => {
      console.error(`particleAbilityTest ConnectAbility onFailed errCode: ${code}`);
    },
  },
);

particleAbility.disconnectAbility(connId).then(() => {
  console.info('disconnectAbility success');
}).catch((error: BusinessError) => {
  console.error(`particleAbilityTest result errCode : ${error.code}`);
});

```

