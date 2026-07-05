# SelectionExtensionAbility

本模块提供划词扩展功能，用于用户通过鼠标、触控板等方式选择文本后的搜索、翻译等场景。 > **说明：** > - 本模块仅支持PC/2in1设备。

**Since:** 20

**System capability:** SystemCapability.SelectionInput.Selection

**System API:** This is a system API.

## Modules to Import

```TypeScript
import { SelectionExtensionAbility } from '@kit.BasicServicesKit';
```

## onConnect

```TypeScript
onConnect(want: Want): rpc.RemoteObject
```

当SelectionExtensionAbility实例完成创建时，系统会触发该回调，开发者可在该回调中执行初始化逻辑（如定义变量、加载资源、监听划词事件等）。

**Since:** 20

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.SelectionInput.Selection

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| want | Want | Yes | 当前SelectionExtensionAbility的Want类型信息，包括Ability名称、Bundle名称等。 |

**Return value:**

| Type | Description |
| --- | --- |
| rpc.RemoteObject | RemoteObject对象，用于客户端和服务端通信。 |

**Example**

```TypeScript
import { SelectionExtensionAbility } from '@kit.BasicServicesKit';
import { rpc } from '@kit.IPCKit';
import { Want } from '@kit.AbilityKit';
import { hilog } from '@kit.PerformanceAnalysisKit';

const TAG: string = '[SelectionExtensionAbility]';

class StubTest extends rpc.RemoteObject {
  constructor(des: string) {
    super(des);
  }
  onConnect(code: number, data: rpc.MessageSequence, reply: rpc.MessageSequence, option: rpc.MessageOption) {
  }
}

class ServiceExtAbility extends SelectionExtensionAbility {
  onConnect(want: Want): rpc.RemoteObject {
    hilog.info(0x0000, TAG, `onConnect, want: ${want.abilityName}`);
    return new StubTest('test');
  }
}

```

## onDisconnect

```TypeScript
onDisconnect(): void
```

当SelectionExtensionAbility实例被销毁（例如用户关闭划词开关或切换划词应用）时，系统触发该回调。开发者可以在该生命周期中执行资源清理、数据保存等相关操作。使用同步回调或Promise异步回调。 在执行完onDisconnect生命周期回调后，应用可能会退出，从而可能导致onDisconnect中的异步函数未能正确执行，比如异步写入数据库。推荐使用Promise异步回调，避免因应用退出导致onDisconnect中的异步 函数（比如异步写入数据库）未能正确执行。 仅当SelectionExtensionAbility正常退出时会触发该回调，异常退出场景（例如低内存终止进程）不会触发该回调。

**Since:** 20

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.SelectionInput.Selection

**System API:** This is a system API.

**Example**

```TypeScript
import { SelectionExtensionAbility } from '@kit.BasicServicesKit';
import { hilog } from '@kit.PerformanceAnalysisKit';

const TAG: string = '[SelectionExtensionAbility]';

class ServiceExtAbility extends SelectionExtensionAbility {
  onDisconnect(): void {
    hilog.info(0x0000, TAG, `onDisconnect`);
  }
}

```

## context

```TypeScript
context: SelectionExtensionContext
```

SelectionExtensionAbility的上下文环境，继承自[ExtensionContext]./application/ExtensionContext:ExtensionContext。

**Type:** SelectionExtensionContext

**Since:** 20

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.SelectionInput.Selection

**System API:** This is a system API.

