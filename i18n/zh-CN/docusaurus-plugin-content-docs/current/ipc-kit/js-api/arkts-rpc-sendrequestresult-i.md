# SendRequestResult

Defines the response to the request.

**起始版本：** 8

**废弃版本：** 9

**替代接口：** rpc.RequestResult

**系统能力：** SystemCapability.Communication.IPC.Core

## 导入模块

```TypeScript
import { rpc } from '@kit.IPCKit';
```

## code

```TypeScript
code: number
```

Message code.

**类型：** number

**起始版本：** 8

**废弃版本：** 9

**替代接口：** rpc.RequestResult#code

**系统能力：** SystemCapability.Communication.IPC.Core

## data

```TypeScript
data: MessageParcel
```

MessageParcel** object sent to the remote process.

**类型：** MessageParcel

**起始版本：** 8

**废弃版本：** 9

**替代接口：** rpc.RequestResult#data

**系统能力：** SystemCapability.Communication.IPC.Core

## errCode

```TypeScript
errCode: number
```

Error code.

**类型：** number

**起始版本：** 8

**废弃版本：** 9

**替代接口：** rpc.RequestResult#errCode

**系统能力：** SystemCapability.Communication.IPC.Core

## reply

```TypeScript
reply: MessageParcel
```

MessageParcel** object returned by the remote process.

**类型：** MessageParcel

**起始版本：** 8

**废弃版本：** 9

**替代接口：** rpc.RequestResult#reply

**系统能力：** SystemCapability.Communication.IPC.Core

