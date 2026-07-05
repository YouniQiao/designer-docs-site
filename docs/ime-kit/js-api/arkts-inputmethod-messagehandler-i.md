# MessageHandler

<p>Custom message handler.</p> <p>Implement this interface to respond to custom messages.</p>

**Since:** 15

**System capability:** SystemCapability.MiscServices.InputMethodFramework

## Modules to Import

```TypeScript
import { inputMethod } from '@kit.IMEKit';
```

## onMessage

```TypeScript
onMessage(msgId: string, msgParam?: ArrayBuffer): void
```

This method is called when a custom message is received.

**Since:** 15

**System capability:** SystemCapability.MiscServices.InputMethodFramework

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| msgId | string | Yes | the identifier of the message. |
| msgParam | ArrayBuffer | No |  |

**Example**

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

**Since:** 15

**System capability:** SystemCapability.MiscServices.InputMethodFramework

**Example**

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

**Type:** Callback<void>

**Since:** 23

**System capability:** SystemCapability.MiscServices.InputMethodFramework

## onMessage

```TypeScript
onMessage: OnMessageCallback
```

This method is called when a custom message is received.

**Type:** OnMessageCallback

**Since:** 23

**System capability:** SystemCapability.MiscServices.InputMethodFramework

