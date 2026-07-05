# SendRequestResult

Defines the response to the request.

**Since:** 8

**Deprecated since:** 9

**Substitute:** rpc.RequestResult

**System capability:** SystemCapability.Communication.IPC.Core

## Modules to Import

```TypeScript
import { rpc } from '@kit.IPCKit';
```

## code

```TypeScript
code: number
```

Message code.

**Type:** number

**Since:** 8

**Deprecated since:** 9

**Substitute:** rpc.RequestResult#code

**System capability:** SystemCapability.Communication.IPC.Core

## data

```TypeScript
data: MessageParcel
```

MessageParcel** object sent to the remote process.

**Type:** MessageParcel

**Since:** 8

**Deprecated since:** 9

**Substitute:** rpc.RequestResult#data

**System capability:** SystemCapability.Communication.IPC.Core

## errCode

```TypeScript
errCode: number
```

Error code.

**Type:** number

**Since:** 8

**Deprecated since:** 9

**Substitute:** rpc.RequestResult#errCode

**System capability:** SystemCapability.Communication.IPC.Core

## reply

```TypeScript
reply: MessageParcel
```

MessageParcel** object returned by the remote process.

**Type:** MessageParcel

**Since:** 8

**Deprecated since:** 9

**Substitute:** rpc.RequestResult#reply

**System capability:** SystemCapability.Communication.IPC.Core

