# SelectionExtensionContext

SelectionExtensionContext是 [SelectionExtensionAbility](arkts-selectionextensionability-c-sys.md#SelectionExtensionAbility)的上下文，继承自 [ExtensionContext]./application/ExtensionContext:ExtensionContext。 每个SelectionExtensionAbility组件实例化时，系统都会自动创建对应的SelectionExtensionContext。开发者可以通过SelectionExtensionContext拉起同应用内其他 Ability。 > **说明：** > - 本模块仅支持PC/2in1设备。

**Inheritance:** SelectionExtensionContextextends: ExtensionContext.

**Since:** 20

**System capability:** SystemCapability.SelectionInput.Selection

**System API:** This is a system API.

## Modules to Import

```TypeScript
import { SelectionExtensionContext } from '@kit.BasicServicesKit';
```

## startAbility

```TypeScript
startAbility(want: Want): Promise<void>
```

拉起目标应用。使用Promise异步回调。

**Since:** 20

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.SelectionInput.Selection

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| want | Want | Yes | 想要被拉起的应用信息，包括Ability名称、Bundle名称等。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | Promise对象，无返回结果。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 16000001 | The specified ability does not exist. |
| 16000002 | Incorrect ability type. |
| 16000004 | Cannot start an invisible component. |
| 16000005 | The specified process does not have the permission. |
| 16000006 | Cross-user operations are not allowed. |
| 16000008 | The crowdtesting application expires. |
| 16000009 | An ability cannot be started or stopped in Wukong mode. |
| 16000010 | The call with the continuation and prepare continuation flag is forbidden. |
| 16000011 | The context does not exist. |
| 16000012 | The application is controlled. |
| 16000013 | The application is controlled by EDM. |
| 16000019 | No matching ability is found. |
| 16000050 | Internal error. |
| 16000053 | The ability is not on the top of the UI. |
| 16000055 | Installation-free timed out. |
| 16000061 | Operation not supported. |
| 16000069 | The extension cannot start the third party application. |
| 16000070 | The extension cannot start the service. |
| 16000083 | The ExtensionAbility cannot start the ability due to system control. |
| 16200001 | The caller has been released. |

**Example**

```TypeScript
import { SelectionExtensionAbility, BusinessError } from '@kit.BasicServicesKit';
import { rpc } from '@kit.IPCKit';
import { Want } from '@kit.AbilityKit';

class SelectionAbilityStub extends rpc.RemoteObject {
  constructor(des: string) {
    super(des);
  }
  onRemoteMessageRequest(
    code: number,
    data: rpc.MessageSequence,
    reply: rpc.MessageSequence,
    options: rpc.MessageOption
  ): boolean | Promise<boolean> {
    console.info(`onRemoteMessageRequest code: ${code}`);
    return true;
  }
}

class SelectionExtAbility extends SelectionExtensionAbility {
  onConnect(want: Want): rpc.RemoteObject {
    try {
      let wantAbility: Want = {
        bundleName: "com.selection.selectionapplication",
        abilityName: "EntryAbility",
      };
      this.context.startAbility(wantAbility).then(() => {
        console.info(`startAbility success`);
      }).catch((err: BusinessError) => {
        console.error(`startAbility error: ${err.code}, error message: ${err.message}`);
      })
    } catch (err) {
      console.error(`startAbility error: ${err.code}, error message: ${err.message}`);
    }
    return new SelectionAbilityStub('remote');
  }
}

```

