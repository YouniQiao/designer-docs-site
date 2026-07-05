# MessageHandler

Represents a custom communication object. > **NOTE** > > You can register this object to receive custom communication data sent by the edit box application attached to > the input method application. When the custom communication data is received, the > [onMessage]inputMethodEngine.MessageHandler.onMessage(msgId: string, msgParam?: ArrayBuffer) callback in > this object is triggered. > > This object is globally unique. After multiple registrations, only the last registered object is valid and > retained, and the [onTerminated]inputMethodEngine.MessageHandler.onTerminated() callback of the > penultimate registered object is triggered. > > If this object is unregistered, its [onTerminated]inputMethodEngine.MessageHandler.onTerminated() > callback will be triggered.

**起始版本：** 15

**系统能力：** SystemCapability.MiscServices.InputMethodFramework

## 导入模块

```TypeScript
import { inputMethodEngine } from '@kit.IMEKit';
```

## onMessage

```TypeScript
onMessage(msgId: string, msgParam?: ArrayBuffer): void
```

Receives the custom data callback sent by the edit box application attached to the input method application. > **NOTE** > > This callback is triggered when the registered [MessageHandler]inputMethodEngine.MessageHandler > receives custom communication data sent by the edit box application attached to the input method application. > > The **msgId** parameter is mandatory, and the **msgParam** parameter is optional. If only the custom **msgId** > data is received, confirm it with the data sender.

**起始版本：** 15

**系统能力：** SystemCapability.MiscServices.InputMethodFramework

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| msgId | string | 是 | Identifier of the received custom communication data. |
| msgParam | ArrayBuffer | 否 |  |

**示例：**

```TypeScript
inputMethodEngine.getInputMethodAbility()
  .on('inputStart',
    (keyboardController: inputMethodEngine.KeyboardController, inputClient: inputMethodEngine.InputClient) => {
      let messageHandler: inputMethodEngine.MessageHandler = {
        onTerminated(): void {
          console.info('OnTerminated.');
        },
        onMessage(msgId: string, msgParam?: ArrayBuffer): void {
          console.info(`recv message, msgId is ${msgId}, msgParam is ${JSON.stringify(msgParam)}`);
        }
      }
      client.recvMessage(messageHandler);
    });

```

## onTerminated

```TypeScript
onTerminated(): void
```

Listens for MessageHandler termination. > **NOTE** > > When an application registers a new [MessageHandler]inputMethodEngine.MessageHandler object, the > [onTerminated]inputMethodEngine.MessageHandler.onTerminated() callback of the penultimate registered > [MessageHandler]inputMethodEngine.MessageHandler object is triggered. > > When an application unregisters a new [MessageHandler]inputMethodEngine.MessageHandler object, the > [onTerminated]inputMethodEngine.MessageHandler.onTerminated() callback of the registered > [MessageHandler]inputMethodEngine.MessageHandler object is triggered.

**起始版本：** 15

**系统能力：** SystemCapability.MiscServices.InputMethodFramework

**示例：**

```TypeScript
inputMethodEngine.getInputMethodAbility()
  .on('inputStart',
    (keyboardController: inputMethodEngine.KeyboardController, inputClient: inputMethodEngine.InputClient) => {
      let messageHandler: inputMethodEngine.MessageHandler = {
        onTerminated(): void {
          console.info('OnTerminated.');
        },
        onMessage(msgId: string, msgParam?: ArrayBuffer): void {
          console.info(`recv message, msgId is ${msgId}, msgParam is ${JSON.stringify(msgParam)}`);
        }
      }
      client.recvMessage(messageHandler);
    });

```

## onTerminated

```TypeScript
onTerminated: Callback<void>
```

This method is called when a new message handler is set.

**类型：** Callback<void>

**起始版本：** 23

**系统能力：** SystemCapability.MiscServices.InputMethodFramework

## onMessage

```TypeScript
onMessage: OnMessageCallback
```

This method is called when a custom message is received.

**类型：** OnMessageCallback

**起始版本：** 23

**系统能力：** SystemCapability.MiscServices.InputMethodFramework

