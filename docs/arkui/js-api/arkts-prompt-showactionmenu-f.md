# showActionMenu

## showActionMenu

```TypeScript
function showActionMenu(options: ActionMenuOptions, callback: AsyncCallback<ActionMenuSuccessResponse>): void
```

Displays the menu.

**Since:** 8

**Deprecated since:** 9

**Substitute:** ohos.arkui.UIContext.PromptAction#showActionMenu

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| options | ActionMenuOptions | Yes | Options. |
| callback | AsyncCallback&lt;ActionMenuSuccessResponse> | Yes |  |

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

## showActionMenu

```TypeScript
function showActionMenu(options: ActionMenuOptions): Promise<ActionMenuSuccessResponse>
```

Displays the menu.

**Since:** 8

**Deprecated since:** 9

**Substitute:** ohos.arkui.UIContext.PromptAction#showActionMenu

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| options | ActionMenuOptions | Yes | Options. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;ActionMenuSuccessResponse> |  |

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

