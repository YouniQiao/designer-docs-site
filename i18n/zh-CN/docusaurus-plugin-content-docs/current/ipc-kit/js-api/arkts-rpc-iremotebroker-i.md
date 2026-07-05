# IRemoteBroker

Represents the holder of a remote proxy object. It is used to obtain a proxy object.

**起始版本：** 7

**系统能力：** SystemCapability.Communication.IPC.Core

## 导入模块

```TypeScript
import { rpc } from '@kit.IPCKit';
```

## asObject

```TypeScript
asObject(): IRemoteObject
```

Obtains a proxy or remote object. This API must be implemented by its derived classes.

**起始版本：** 7

**系统能力：** SystemCapability.Communication.IPC.Core

**返回值：**

| 类型 | 说明 |
| --- | --- |
| IRemoteObject | Returns the RemoteObject if it is the caller; returns the  [IRemoteObject]rpc.IRemoteObject, the holder of this RemoteProxy object, if the caller is a  [RemoteProxy]rpc.RemoteProxy object. |

**示例：**

```TypeScript
import { rpc } from '@kit.IPCKit';

class TestAbility extends rpc.RemoteObject {
  asObject() {
    return this;
  }
}
let remoteObject = new TestAbility("testObject").asObject();


// FA模型需要从@kit.AbilityKit导入featureAbility
// import { featureAbility } from '@kit.AbilityKit';
import { rpc } from '@kit.IPCKit';
import { Want, common } from '@kit.AbilityKit';
import { hilog } from '@kit.PerformanceAnalysisKit';

let proxy: rpc.IRemoteObject | undefined;
let connect: common.ConnectOptions = {
  onConnect: (elementName, remoteProxy) => {
    hilog.info(0x0000, 'testTag', 'js onConnect called');
    proxy = remoteProxy;
  },
  onDisconnect: (elementName) => {
    hilog.info(0x0000, 'testTag', 'onDisconnect');
  },
  onFailed: () => {
    hilog.info(0x0000, 'testTag', 'onFailed');
  }
};
let want: Want  = {
  // 获取服务端包名和ability名称
  bundleName: "com.ohos.server",
  abilityName: "com.ohos.server.EntryAbility",
};

// FA模型使用此方法连接服务
// FA.connectAbility(want,connect);

// 建立连接后返回的Id需要保存下来，在解绑服务时需要作为参数传入
let context: common.UIAbilityContext = this.getUIContext().getHostContext(); // UIAbilityContext
// 建立连接后返回的Id需要保存下来，在解绑服务时需要作为参数传入
let connectionId = context.connectServiceExtensionAbility(want, connect);


import { rpc } from '@kit.IPCKit';

class TestProxy {
  remote: rpc.IRemoteObject;
  constructor(remote: rpc.IRemoteObject) {
    this.remote = remote;
  }
  asObject() {
    return this.remote;
  }
}
if (proxy != undefined) {
  let iRemoteObject = new TestProxy(proxy).asObject();
}

```

