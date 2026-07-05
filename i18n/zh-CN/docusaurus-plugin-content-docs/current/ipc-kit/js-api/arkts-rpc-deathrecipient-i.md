# DeathRecipient

Subscribes to death notifications of a remote object. When the remote object is dead, the local end will receive a notification and **[onRemoteDied]rpc.DeathRecipient.onRemoteDied()** will be called. A remote object is dead when the process holding the object is terminated or the device of the remote object is shut down or restarted. If the local and remote objects belong to different devices, the remote object is dead when the device holding the remote object is detached from the network.

**起始版本：** 7

**系统能力：** SystemCapability.Communication.IPC.Core

## 导入模块

```TypeScript
import { rpc } from '@kit.IPCKit';
```

## onRemoteDied

```TypeScript
onRemoteDied(): void
```

Called to perform subsequent operations when a death notification of the remote object is received.

**起始版本：** 7

**系统能力：** SystemCapability.Communication.IPC.Core

**示例：**

```TypeScript
import { rpc } from '@kit.IPCKit';
import { hilog } from '@kit.PerformanceAnalysisKit';

class MyDeathRecipient implements rpc.DeathRecipient {
  onRemoteDied() {
    hilog.info(0x0000, 'testTag', 'server died');
  }
}

```

## onRemoteDied

```TypeScript
onRemoteDied: OnRemoteDiedFunc
```

Called to perform subsequent operations when a death notification of the remote object is received.

**类型：** OnRemoteDiedFunc

**起始版本：** 23

**系统能力：** SystemCapability.Communication.IPC.Core

