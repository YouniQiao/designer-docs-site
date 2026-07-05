# IRemoteBroker

Represents the holder of a remote proxy object. It is used to obtain a proxy object.

**Since:** 7

**System capability:** SystemCapability.Communication.IPC.Core

## Modules to Import

```TypeScript
import { rpc } from '@kit.IPCKit';
```

## asObject

```TypeScript
asObject(): IRemoteObject
```

Obtains a proxy or remote object. This API must be implemented by its derived classes.

**Since:** 7

**System capability:** SystemCapability.Communication.IPC.Core

**Return value:**

| Type | Description |
| --- | --- |
| IRemoteObject | Returns the RemoteObject if it is the caller; returns the  [IRemoteObject]rpc.IRemoteObject, the holder of this RemoteProxy object, if the caller is a  [RemoteProxy]rpc.RemoteProxy object. |

**Example**

```TypeScript
import { rpc } from '@kit.IPCKit';

class TestAbility extends rpc.RemoteObject {
  asObject() {
    return this;
  }
}
let remoteObject = new TestAbility("testObject").asObject();


// If the FA model is used, import featureAbility from @kit.AbilityKit.
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
  // Obtain the package name and ability name on the server.
  bundleName: "com.ohos.server",
  abilityName: "com.ohos.server.EntryAbility",
};

// Use this method to connect to the ability for the FA model.
// FA.connectAbility(want,connect);

// Save the connection ID, which will be used for the subsequent service disconnection.
let context: common.UIAbilityContext = this.getUIContext().getHostContext(); // UIAbilityContext
// Save the connection ID, which will be used for the subsequent service disconnection.
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

