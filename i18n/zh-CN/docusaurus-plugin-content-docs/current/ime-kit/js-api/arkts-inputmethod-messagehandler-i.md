# MessageHandler

<p>Custom message handler.</p> <p>Implement this interface to respond to custom messages.</p>

**起始版本：** 15

**系统能力：** SystemCapability.MiscServices.InputMethodFramework

## 导入模块

```TypeScript
import { inputMethod } from '@kit.IMEKit';
```

## onMessage

```TypeScript
onMessage(msgId: string, msgParam?: ArrayBuffer): void
```

This method is called when a custom message is received.

**起始版本：** 15

**系统能力：** SystemCapability.MiscServices.InputMethodFramework

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| msgId | string | 是 | the identifier of the message. |
| msgParam | ArrayBuffer | 否 |  |

**示例：**

```TypeScript
let inputMethodController: inputMethod.InputMethodController = inputMethod.getController();

let messageHandler: inputMethod.MessageHandler = {
  onTerminated(): void {
    console.info('OnTerminated.');
  },
  onMessage(msgId: string, msgParam?: ArrayBuffer): void {
    console.info(`recv message, msg: ${msgId}, msgParam: ${JSON.stringify(msgParam)}`);
  }
};
inputMethodController.recvMessage(messageHandler);

```

## onTerminated

```TypeScript
onTerminated(): void
```

This method is called when a new message handler is set.

**起始版本：** 15

**系统能力：** SystemCapability.MiscServices.InputMethodFramework

**示例：**

```TypeScript
let inputMethodController: inputMethod.InputMethodController = inputMethod.getController();

let messageHandler: inputMethod.MessageHandler = {
  onTerminated(): void {
    console.info('OnTerminated.');
  },
  onMessage(msgId: string, msgParam?: ArrayBuffer): void {
    console.info(`recv message, msg: ${msgId}, msgParam: ${JSON.stringify(msgParam)}`);
  }
};
inputMethodController.recvMessage(messageHandler);

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

