# showActionMenu

## showActionMenu

```TypeScript
function showActionMenu(options: ActionMenuOptions, callback: AsyncCallback<ActionMenuSuccessResponse>): void
```

创建并显示操作菜单，菜单响应结果使用callback异步回调返回。 > **说明：** > > - 从API version 9开始支持，从API version 18开始废弃，建议使用[showActionMenu](arkts-apis-uicontext-promptaction.md#showactionmenu11)替代。 showActionMenu需先通过[UIContext](arkts-apis-uicontext-uicontext.md)中的 [getPromptAction](arkts-apis-uicontext-uicontext.md#getpromptaction)方法获取 [PromptAction](arkts-apis-uicontext-promptaction.md)对象，然后通过该对象进行调用。且直接使用showActionMenu可能导致 [UI上下文不明确](../../ui/arkts-global-interface.md#ui上下文不明确)的问题。 > > - 从API version 11开始，可以通过使用[UIContext](arkts-apis-uicontext-uicontext.md)中的 [getPromptAction](arkts-apis-uicontext-uicontext.md#getpromptaction)方法获取当前UI上下文关联的 [PromptAction](arkts-apis-uicontext-promptaction.md)对象。

**Since:** 9

**Deprecated since:** 18

**Substitute:** ohos.arkui.UIContext.PromptAction#showActionMenu

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| options | ActionMenuOptions | Yes | 操作菜单选项。 |
| callback | AsyncCallback&lt;ActionMenuSuccessResponse> | Yes | 回调函数。弹出操作菜单成功，err为undefined，  data为获取到的操作菜单响应结果，否则为错误对象。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes:  1. Mandatory parameters are left unspecified.  2. Incorrect parameters types.  3. Parameter verification failed. |
| 100001 | Internal error. |

**Example**

```TypeScript
import { promptAction } from '@kit.ArkUI';
import { BusinessError } from '@kit.BasicServicesKit';

try {
  promptAction.showActionMenu({
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
} catch (error) {
  let message = (error as BusinessError).message
  let code = (error as BusinessError).code
  console.error(`showActionMenu args error code is ${code}, message is ${message}`);
};


import { promptAction } from '@kit.ArkUI';

@Entry
@Component
struct Index {
  @State isShown: boolean = false
  @State textColor: Color = Color.Black
  @State blueColor: Color = Color.Blue

  @State onWillAppear: boolean = false
  @State onDidAppear: boolean = false
  @State onWillDisappear: boolean = false
  @State onDidDisappear: boolean = false
  build() {
    Column({ space: 50 }) {
      Text('onWillAppear').fontColor(this.onWillAppear ? this.blueColor : this.textColor)
      Text('onDidAppear').fontColor(this.onDidAppear ? this.blueColor : this.textColor)
      Text('onWillDisappear').fontColor(this.onWillDisappear ? this.blueColor : this.textColor)
      Text('onDidDisappear').fontColor(this.onDidDisappear ? this.blueColor : this.textColor)
      Button('click')
        .width(200)
        .height(100)
        .margin(100)
        .fontColor(this.textColor)
        .onClick(() => {
          promptAction.showActionMenu({
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
            ],
            onWillAppear:() => {
              console.info("promptAction menu cycle life onWillAppear");
              this.onWillAppear = true;
            },
            onDidAppear:() => {
              console.info("promptAction menu cycle life onDidAppear");
              this.onDidAppear = true;
            },
            onWillDisappear:() => {
              this.isShown = false;
              console.info("promptAction menu cycle life onWillDisappear");
              this.onWillDisappear = true;
            },
            onDidDisappear:() => {
              console.info("promptAction menu cycle life onDidDisappear");
              this.onDidDisappear = true;
            }
          })
            .then(data => {
              console.info('showActionMenu success, click button: ' + data.index);
            })
            .catch((err: Error) => {
              console.info('showActionMenu error: ' + err);
            })
        })
    }
    .width('100%')
  }
}

```

## showActionMenu

```TypeScript
function showActionMenu(options: ActionMenuOptions): Promise<ActionMenuSuccessResponse>
```

创建并显示操作菜单，菜单响应后通过Promise返回结果。 > **说明：** > > - 从API version 9开始支持，从API version 18开始废弃，建议使用[showActionMenu](arkts-apis-uicontext-promptaction.md#showactionmenu)替代。 showActionMenu需先通过[UIContext](arkts-apis-uicontext-uicontext.md)中的 [getPromptAction](arkts-apis-uicontext-uicontext.md#getpromptaction)方法获取 [PromptAction](arkts-apis-uicontext-promptaction.md)对象，然后通过该对象进行调用。且直接使用showActionMenu可能导致 [UI上下文不明确](../../ui/arkts-global-interface.md#ui上下文不明确)的问题。 > > - 从API version 10开始，可以通过使用[UIContext](arkts-apis-uicontext-uicontext.md)中的 [getPromptAction](arkts-apis-uicontext-uicontext.md#getpromptaction)方法获取当前UI上下文关联的 [PromptAction](arkts-apis-uicontext-promptaction.md)对象。

**Since:** 9

**Deprecated since:** 18

**Substitute:** ohos.arkui.UIContext.PromptAction#showActionMenu

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| options | ActionMenuOptions | Yes | Promise对象，返回菜单的响应结果。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;ActionMenuSuccessResponse> | Promise对象，返回菜单的响应结果。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes:  1. Mandatory parameters are left unspecified.  2. Incorrect parameters types.  3. Parameter verification failed. |
| 100001 | Internal error. |

**Example**

```TypeScript
import { promptAction } from '@kit.ArkUI';

promptAction.showActionMenu({
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
  .catch((err: Error) => {
    console.info('showActionMenu error: ' + err);
  })


import { promptAction } from '@kit.ArkUI';

promptAction.showActionMenu({
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
  .catch((err: Error) => {
    console.info('showActionMenu error: ' + err);
  })

```

