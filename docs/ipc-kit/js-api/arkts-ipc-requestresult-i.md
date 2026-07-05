# RequestResult

Defines the response to the request.

**Since:** 9

**System capability:** SystemCapability.Communication.IPC.Core

## Modules to Import

```TypeScript
import { rpc } from '@ohos.rpc';
```

## code

```TypeScript
code: number
```

Message code.

**Type:** number

**Since:** 9

**System capability:** SystemCapability.Communication.IPC.Core

## data

```TypeScript
data: MessageSequence
```

**MessageSequence** object sent to the remote process.

**Type:** MessageSequence

**Since:** 9

**System capability:** SystemCapability.Communication.IPC.Core

## errCode

```TypeScript
errCode: number
```

Error code.

**Type:** number

**Since:** 9

**System capability:** SystemCapability.Communication.IPC.Core

## reply

```TypeScript
reply: MessageSequence
```

**MessageSequence** object returned by the remote process.

**Type:** MessageSequence

**Since:** 9

**System capability:** SystemCapability.Communication.IPC.Core

