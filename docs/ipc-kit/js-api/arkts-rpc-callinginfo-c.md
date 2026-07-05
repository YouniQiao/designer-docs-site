# CallingInfo

Defines the IPC context, including the PID and UID, local and remote device IDs, and whether the API is invoked on the same device.

**Since:** 23

**System capability:** SystemCapability.Communication.IPC.Core

## Modules to Import

```TypeScript
import { rpc } from '@kit.IPCKit';
```

## localDeviceId

```TypeScript
readonly localDeviceId: string
```

Local device ID. This parameter is valid only in RPC scenarios. localDeviceId is valid only when the {@link isLocalCalling} is false. Otherwise localDeviceId is invalid.

**Type:** string

**Since:** 23

**System capability:** SystemCapability.Communication.IPC.Core

```TypeScript
get localDeviceId(): string
```

Indicates the DeviceId of local device. localDeviceId is valid only when the {@link isLocalCalling} is false. Otherwise localDeviceId is invalid.

**Type:** string

**Since:** 23

**System capability:** SystemCapability.Communication.IPC.Core

## remoteDeviceId

```TypeScript
readonly remoteDeviceId: string
```

Remote device ID. This parameter is valid only in RPC scenarios. remoteDeviceId is valid only when the {@link isLocalCalling} is false. Otherwise remoteDeviceId is invalid.

**Type:** string

**Since:** 23

**System capability:** SystemCapability.Communication.IPC.Core

```TypeScript
get remoteDeviceId(): string
```

Indicates the DeviceId of remote device. remoteDeviceId is valid only when the {@link isLocalCalling} is false. Otherwise remoteDeviceId is invalid.

**Type:** string

**Since:** 23

**System capability:** SystemCapability.Communication.IPC.Core

## isLocalCalling

```TypeScript
readonly isLocalCalling: boolean
```

Whether the peer end of the current communication is a process on the local device. Returns **true** if the local and peer processes are on the same device; returns **false** otherwise.

**Type:** boolean

**Since:** 23

**System capability:** SystemCapability.Communication.IPC.Core

```TypeScript
get isLocalCalling(): boolean
```

Indicates whether the peer process is a process of the local device.

**Type:** boolean

**Since:** 23

**System capability:** SystemCapability.Communication.IPC.Core

## callerTokenId

```TypeScript
readonly callerTokenId: number
```

Token ID of the caller. callerTokenId is valid only when the {@link isLocalCalling} is true. Otherwise callerTokenId is invalid.

**Type:** number

**Since:** 23

**System capability:** SystemCapability.Communication.IPC.Core

```TypeScript
get callerTokenId(): long
```

Indicates the tokenId of caller. callerTokenId is valid only when the {@link isLocalCalling} is true. Otherwise callerTokenId is invalid.

**Type:** long

**Since:** 23

**System capability:** SystemCapability.Communication.IPC.Core

## callerPid

```TypeScript
readonly callerPid: number
```

PID of the caller. callerPid is valid only when the {@link isLocalCalling} is true. Otherwise callerPid is invalid

**Type:** number

**Since:** 23

**System capability:** SystemCapability.Communication.IPC.Core

```TypeScript
get callerPid(): int
```

Indicates the pid of caller. callerPid is valid only when the {@link isLocalCalling} is true. Otherwise callerPid is invalid.

**Type:** int

**Since:** 23

**System capability:** SystemCapability.Communication.IPC.Core

## callerUid

```TypeScript
readonly callerUid: number
```

UID of the caller. callerUid is valid only when the {@link isLocalCalling} is true. Otherwise callerUid is invalid.

**Type:** number

**Since:** 23

**System capability:** SystemCapability.Communication.IPC.Core

```TypeScript
get callerUid(): int
```

Indicates the uid of caller. callerUid is valid only when the {@link isLocalCalling} is true. Otherwise callerUid is invalid.

**Type:** int

**Since:** 23

**System capability:** SystemCapability.Communication.IPC.Core

