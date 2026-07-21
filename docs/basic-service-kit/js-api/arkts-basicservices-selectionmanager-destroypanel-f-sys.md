# destroyPanel (System API)

## Modules to Import

```TypeScript
import { selectionManager } from '@kit.BasicServicesKit';
```

<a id="destroypanel"></a>
## destroyPanel

```TypeScript
function destroyPanel(panel: Panel): Promise<void>
```

Destroys the word selection panel. This API uses a promise to return the result.

**Since:** 24

**Model restriction:** This API can be used only in the stage model.

<!--Device-selectionManager-function destroyPanel(panel: Panel): Promise<void>--><!--Device-selectionManager-function destroyPanel(panel: Panel): Promise<void>-End-->

**System capability:** SystemCapability.SelectionInput.Selection

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| panel | [Panel](arkts-basicservices-selectionmanager-panel-i-sys.md) | Yes | Word selection panel to destroy. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | Promise that returns no value. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [33600001](../../apis-basic-services-kit/errorcode-selection.md#33600001-word-selection-service-error) | Selection service exception. |

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
        console.info('Succeed in creating panel.');
        selectionPanel = panel;
        try {
          if (selectionPanel) {
            selectionManager.destroyPanel(selectionPanel).then(() => {
              console.info('Succeed in destroying panel.');
            }).catch((err: BusinessError) => {
              console.error(`Failed to destroy panel: ${err.code}, error message: ${err.message}`);
            });
          }
        } catch (err) {
          console.error(`Failed to destroy panel: ${err.code}, error message: ${err.message}`);
        }
      }).catch((err: BusinessError) => {
      console.error(`Failed to create panel: ${err.code}, error message: ${err.message}`);
    });
    return new SelectionAbilityStub('remote');
  }
}
export default ServiceExtAbility;

```

