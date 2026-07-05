# connectAbility

## connectAbility

```TypeScript
function connectAbility(request: Want, options: ConnectOptions): number
```

将当前Ability与指定的ServiceAbility进行连接。 > **说明：** > > 组件启动规则详见：[组件启动规则（FA模型）](docroot://application-models/component-startup-rules-fa.md)。 > > 跨应用连接serviceAbility，对端应用需配置关联启动。

**Since:** 7

**Model restriction:** This API can be used only in the FA model.

**System capability:** SystemCapability.Ability.AbilityRuntime.FAModel

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| request | Want | Yes | 表示被连接的ServiceAbility。 |
| options | ConnectOptions | Yes | 表示连接回调函数。 |

**Return value:**

| Type | Description |
| --- | --- |
| number | 连接的ServiceAbility的ID(ID从0开始自增，每连接成功一次ID加1)。 |

**Example**

```TypeScript
import { featureAbility } from '@kit.AbilityKit';
import { rpc } from '@kit.IPCKit';

let connectId = featureAbility.connectAbility(
  {
    deviceId: '',
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

```

