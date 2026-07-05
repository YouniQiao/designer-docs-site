# createPanel

## createPanel

```TypeScript
function createPanel(ctx: Context, info: PanelInfo): Promise<Panel>
```

创建划词面板。使用Promise异步回调。 单个划词应用仅允许创建一个[MENU_PANEL]@ohos.selectionInput.SelectionPanel和一个 [MAIN_PANEL]@ohos.selectionInput.SelectionPanel。

**Since:** 20

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.SelectionInput.Selection

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| ctx | Context | Yes | 当前划词面板依赖的上下文信息。 |
| info | PanelInfo | Yes | 划词面板信息。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;Panel> | Promise对象，返回当前创建的划词面板对象。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 33600001 | Selection service exception. |
| 33600003 | The application calling the API does not match the application  selected in the system settings. |

**Example**

```TypeScript
import { selectionManager, SelectionExtensionAbility, PanelInfo, PanelType, BusinessError } from '@kit.BasicServicesKit';
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
    return true;
  }
}

class ServiceExtAbility extends SelectionExtensionAbility {
  onConnect(want: Want): rpc.RemoteObject {
    let panelInfo: PanelInfo = {
      panelType: PanelType.MENU_PANEL,
      x: 0,
      y: 0,
      width: 500,
      height: 200
    }
    let selectionPanel: selectionManager.Panel | undefined = undefined;
    selectionManager.createPanel(this.context, panelInfo)
      .then((panel: selectionManager.Panel) => {
        selectionPanel = panel;
        console.info('Succeed in creating panel.');
      }).catch((err: BusinessError) => {
      console.error(`Failed to create panel: ${err.code}, error message: ${err.message}`);
    });
    return new SelectionAbilityStub('remote');
  }
}
export default ServiceExtAbility;

```

