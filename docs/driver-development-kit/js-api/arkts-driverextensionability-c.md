# DriverExtensionAbility

DriverExtensionAbility模块提供驱动相关扩展能力，提供驱动创建、销毁、连接、断开等生命周期回调。

**Since:** 10

**System capability:** SystemCapability.Driver.ExternalDevice

## Modules to Import

```TypeScript
import { DriverExtensionContext } from '@kit.DriverDevelopmentKit';
```

## onConnect

```TypeScript
onConnect(want: Want): rpc.RemoteObject | Promise<rpc.RemoteObject>
```

Extension生命周期回调，会在[onCreate](../../apis-ability-kit/arkts-apis/arkts-abilitystage-c.md#onCreate)之后回调。返回一个 [RemoteObject](../../apis-ipc-kit/arkts-apis/arkts-rpc-remoteobject-c.md#RemoteObject)对象，用于客户端和服务端进行通信。

**Since:** 10

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Driver.ExternalDevice

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| want | Want | Yes | 当前Extension相关的Want类型信息，包括ability名称、bundle名称等。 |

**Return value:**

| Type | Description |
| --- | --- |
| rpc.RemoteObject | 一个RemoteObject对象，用于客户端和服务端进行通信；或一个Promise对象，返回用于通信的  RemoteObject对象。 |

**Example**

```TypeScript
import { DriverExtensionAbility } from '@kit.DriverDevelopmentKit';
import { rpc } from '@kit.IPCKit';
import { Want } from '@kit.AbilityKit';

class StubTest extends rpc.RemoteObject{
    constructor(des : string) {
        super(des);
    }
    onRemoteMessageRequest(code : number, data : rpc.MessageSequence, reply : rpc.MessageSequence, option : rpc.MessageOption) {
      // This interface must be overridden.
      return true;
    }
}
class DriverExt extends DriverExtensionAbility {
  onConnect(want : Want) {
    console.info(`onConnect , want: ${want.abilityName}`);
    return new StubTest('test');
  }
}


import { DriverExtensionAbility } from '@kit.DriverDevelopmentKit';
import { rpc } from '@kit.IPCKit';
import { Want } from '@kit.AbilityKit';

class StubTest extends rpc.RemoteObject{
    constructor(des : string) {
        super(des);
    }
    onRemoteMessageRequest(code : number, data : rpc.MessageSequence, reply : rpc.MessageSequence, option : rpc.MessageOption) {
      // This interface must be overridden.
      return true;
    }
}
async function getDescriptor() {
    // Call the asynchronous function.
    return "asyncTest";
}
class DriverExt extends DriverExtensionAbility {
  async onConnect(want : Want) {
    console.info(`onConnect , want: ${want.abilityName}`);
    let descriptor = await getDescriptor();
    return new StubTest(descriptor);
  }
}

```

## onDisconnect

```TypeScript
onDisconnect(want: Want): void | Promise<void>
```

Extension的生命周期回调，客户端执行断开连接服务时回调。

**Since:** 10

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Driver.ExternalDevice

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| want | Want | Yes | 当前Extension相关的Want类型信息，包括ability名称、bundle名称等。 |

**Example**

```TypeScript
import { DriverExtensionAbility } from '@kit.DriverDevelopmentKit';
import { Want } from '@kit.AbilityKit';

class DriverExt extends DriverExtensionAbility {
  onDisconnect(want : Want) {
    console.info(`onDisconnect, want: ${want.abilityName}`);
  }
}


import { DriverExtensionAbility } from '@kit.DriverDevelopmentKit';
import { Want } from '@kit.AbilityKit';

class DriverExt extends DriverExtensionAbility {
  async onDisconnect(want : Want) {
    console.info(`onDisconnect, want: ${want.abilityName}`);
    // Call the asynchronous function.
  }
}

```

## onDisconnect

```TypeScript
onDisconnect(want: Want): undefined | Promise<void>
```

Extension的生命周期回调，客户端执行断开连接服务时回调。

**Since:** 23

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Driver.ExternalDevice

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| want | Want | Yes | Indicates disconnection information about the driver extension. |

**Return value:**

| Type | Description |
| --- | --- |
| undefined | 返回值为空；或一个Promise对象，无返回结果。 |

## onDump

```TypeScript
onDump(params: Array<string>): Array<string>
```

转储客户端信息时调用，建议不要转储敏感信息。

**Since:** 10

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Driver.ExternalDevice

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| params | Array&lt;string> | Yes | 表示命令形式的参数。 |

**Return value:**

| Type | Description |
| --- | --- |
| Array&lt;string> | 一个string类型的数组，用于转存客户端信息。 |

**Example**

```TypeScript
class DriverExt extends DriverExtensionAbility {
    onDump(params : Array<string>) {
        console.info(`dump, params: ${JSON.stringify(params)}`);
        return ['params'];
    }
}

```

## onInit

```TypeScript
onInit(want: Want): void
```

Extension生命周期回调，在创建时回调，执行初始化业务逻辑操作。

**Since:** 10

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Driver.ExternalDevice

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| want | Want | Yes | 当前Extension相关的Want类型信息，包括ability名称、bundle名称等。 |

**Example**

```TypeScript
import { DriverExtensionAbility } from '@kit.DriverDevelopmentKit';
import { Want } from '@kit.AbilityKit';

class DriverExt extends DriverExtensionAbility {
  onInit(want : Want) {
    console.info(`onInit, want: ${want.abilityName}`);
  }
}

```

## onRelease

```TypeScript
onRelease(): void
```

Extension生命周期回调，在销毁时回调，执行资源清理等操作。

**Since:** 10

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Driver.ExternalDevice

**Example**

```TypeScript
class DriverExt extends DriverExtensionAbility {
  onRelease() {
    console.info('onRelease');
  }
}

```

## context

```TypeScript
context: DriverExtensionContext
```

DriverExtension的上下文环境，继承自ExtensionContext。

**Type:** DriverExtensionContext

**Since:** 10

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Driver.ExternalDevice

