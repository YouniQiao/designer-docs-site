# createCloudServiceStub

## createCloudServiceStub

```TypeScript
function createCloudServiceStub(instance: CloudService): Promise<rpc.RemoteObject>
```

根据CloudService类的实例创建对应的RemoteObject对象，系统内部通过该对象调用CloudService的实现接口。使用Promise异步回调。

**Since:** 11

**System capability:** SystemCapability.DistributedDataManager.CloudSync.Server

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| instance | CloudService | Yes | CloudService类的实例。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;rpc.RemoteObject> | Promise对象，返回CloudService的RemoteObject对象。 |

**Example**

```TypeScript
import { Want, ServiceExtensionAbility } from '@kit.AbilityKit';
import { rpc } from '@kit.IPCKit';

class MyCloudService implements cloudExtension.CloudService {
  constructor() {}
  async connectShareCenter(userId: number, bundleName: string): Promise<rpc.RemoteObject> {
    // ...
  }
}

export default class MyServiceExtension extends ServiceExtensionAbility {
  onCreate(want: Want) {
    console.info(`onCreate: ${want}`);
  }
  onRequest(want: Want, startId: number) {
    console.info(`onRequest: ${want} ${startId}`);
  }
  onConnect(want: Want): rpc.RemoteObject | Promise<rpc.RemoteObject> {
    console.info(`onConnect: ${want}`);
    return cloudExtension.createCloudServiceStub(new MyCloudService());
  }
  onDisconnect(want: Want) {
    console.info(`onDisconnect: ${want}`);
  }
  onDestroy() {
    console.info('onDestroy');
  }
}

```

