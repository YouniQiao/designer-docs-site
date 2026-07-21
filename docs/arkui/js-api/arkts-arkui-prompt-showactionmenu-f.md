# showActionMenu

## Modules to Import

```TypeScript
import { prompt } from '@kit.ArkUI';
```

<a id="showactionmenu"></a>
## showActionMenu

```TypeScript
function showActionMenu(options: ActionMenuOptions, callback: AsyncCallback<ActionMenuSuccessResponse>): void
```

Displays the menu.

**Since:** 8

**Deprecated since:** 9

**Substitutes:** showActionMenu

<!--Device-prompt-function showActionMenu(options: ActionMenuOptions, callback: AsyncCallback<ActionMenuSuccessResponse>): void--><!--Device-prompt-function showActionMenu(options: ActionMenuOptions, callback: AsyncCallback<ActionMenuSuccessResponse>): void-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| options | [ActionMenuOptions](arkts-arkui-prompt-actionmenuoptions-i.md) | Yes | Options. |
| callback | [AsyncCallback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-asynccallback-i.md)&lt;ActionMenuSuccessResponse&gt; | Yes |  |

**Example**

```TypeScript
import prompt from '@ohos.prompt'
prompt.showActionMenu({
  title: 'Title Info',
  buttons: [
    {
      text: 'item1',
      color: '#666666'
    },
    {
      text: 'item2',
      color: '#000000'
    },
  ]
}, (err, data) => {
  if (err) {
    console.info('showActionMenu err: ' + err);
    return;
  }
  console.info('showActionMenu success callback, click button: ' + data.index);
})

```


<a id="showactionmenu-1"></a>
## showActionMenu

```TypeScript
function showActionMenu(options: ActionMenuOptions): Promise<ActionMenuSuccessResponse>
```

Displays the menu.

**Since:** 8

**Deprecated since:** 9

**Substitutes:** showActionMenu

<!--Device-prompt-function showActionMenu(options: ActionMenuOptions): Promise<ActionMenuSuccessResponse>--><!--Device-prompt-function showActionMenu(options: ActionMenuOptions): Promise<ActionMenuSuccessResponse>-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| options | [ActionMenuOptions](arkts-arkui-prompt-actionmenuoptions-i.md) | Yes | Options. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;ActionMenuSuccessResponse&gt; | @syscap SystemCapability.ArkUI.ArkUI.Full@FaAndStageModel |

**Example**

```TypeScript
import prompt from '@ohos.prompt'
prompt.showActionMenu({
  title: 'showActionMenu Title Info',
  buttons: [
    {
      text: 'item1',
      color: '#666666'
    },
    {
      text: 'item2',
      color: '#000000'
    },
  ]
})
  .then(data => {
    console.info('showActionMenu success, click button: ' + data.index);
  })
  .catch((err:Error) => {
    console.info('showActionMenu error: ' + err);
  })

```

