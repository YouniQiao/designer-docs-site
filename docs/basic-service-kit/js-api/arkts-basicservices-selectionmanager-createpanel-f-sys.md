# createPanel (System API)

## Modules to Import

```TypeScript
import { selectionManager } from '@kit.BasicServicesKit';
```

## createPanel

```TypeScript
function createPanel(ctx: Context, info: PanelInfo): Promise<Panel>
```

Creates a word selection panel. This API uses a promise to return the result.Only one [MENU_PANEL](arkts-selectioninput-selectionpanel.md) and one [MAIN_PANEL](arkts-selectioninput-selectionpanel.md) can be created for one word selection application.

**Since:** 24

**Model restriction:** This API can be used only in the stage model.

<!--Device-selectionManager-function createPanel(ctx: Context, info: PanelInfo): Promise<Panel>--><!--Device-selectionManager-function createPanel(ctx: Context, info: PanelInfo): Promise<Panel>-End-->

**System capability:** SystemCapability.SelectionInput.Selection

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| ctx | [Context](../../apis-arkui/arkts-components/arkts-arkui-context-t.md) | Yes | Context that the current word selection panel depends on. |
| info | [PanelInfo](arkts-basicservices-selectioninput-selectionpanel-panelinfo-i-sys.md) | Yes | Information about the word selection panel. |

**Return value:**

| Type | Description |
| --- | --- |
| [Promise](../../apis-na/arkts-apis/arkts-na-lib-es5-promise-i.md)<Panel> | Promise used to return the word selection panel created. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [33600001](../../apis-basic-services-kit/errorcode-selection.md#33600001-word-selection-service-error) | Selection service exception. |
| [33600003](../../apis-basic-services-kit/errorcode-selection.md#33600003-api-caller-and-word-selection-application-mismatched) | The application calling the API does not match the application selected in the system settings. |

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

