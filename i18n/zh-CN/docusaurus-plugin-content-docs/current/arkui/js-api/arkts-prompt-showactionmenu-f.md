# showActionMenu

## showActionMenu

```TypeScript
function showActionMenu(options: ActionMenuOptions, callback: AsyncCallback<ActionMenuSuccessResponse>): void
```

Displays the menu.

**起始版本：** 8

**废弃版本：** 9

**替代接口：** ohos.arkui.UIContext.PromptAction#showActionMenu

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| options | ActionMenuOptions | 是 | Options. |
| callback | AsyncCallback&lt;ActionMenuSuccessResponse> | 是 |  |

**示例：**

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

**起始版本：** 8

**废弃版本：** 9

**替代接口：** ohos.arkui.UIContext.PromptAction#showActionMenu

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| options | ActionMenuOptions | 是 | Options. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;ActionMenuSuccessResponse> |  |

**示例：**

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

