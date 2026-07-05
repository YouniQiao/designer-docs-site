# RequestResult

Defines the response to the request.

**起始版本：** 9

**系统能力：** SystemCapability.Communication.IPC.Core

## 导入模块

```TypeScript
import { rpc } from '@kit.IPCKit';
```

## code

```TypeScript
code: int
```

Message code.

**类型：** int

**起始版本：** 9

**系统能力：** SystemCapability.Communication.IPC.Core

## data

```TypeScript
data: MessageSequence
```

MessageSequence** object sent to the remote process.

**类型：** MessageSequence

**起始版本：** 9

**系统能力：** SystemCapability.Communication.IPC.Core

## errCode

```TypeScript
errCode: int
```

Error code.

**类型：** int

**起始版本：** 9

**系统能力：** SystemCapability.Communication.IPC.Core

## reply

```TypeScript
reply: MessageSequence
```

MessageSequence** object returned by the remote process.

**类型：** MessageSequence

**起始版本：** 9

**系统能力：** SystemCapability.Communication.IPC.Core

