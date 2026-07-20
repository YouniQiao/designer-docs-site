# ChildProcess (System API)

The childprocess object can be used to create a new process.

**Since:** 7

<!--Device-process-export interface ChildProcess--><!--Device-process-export interface ChildProcess-End-->

**System capability:** SystemCapability.Utils.Lang

**System API:** This is a system API.

## Modules to Import

```TypeScript
import { process } from '@kit.ArkTS';
```

## close

```TypeScript
close(): void
```

Close the target process

**Since:** 7

<!--Device-ChildProcess-close(): void--><!--Device-ChildProcess-close(): void-End-->

**System capability:** SystemCapability.Utils.Lang

**System API:** This is a system API.

## getErrorOutput

```TypeScript
getErrorOutput(): Promise<Uint8Array>
```

Return it as 'Uint8Array of the stderr until EOF

**Since:** 7

<!--Device-ChildProcess-getErrorOutput(): Promise<Uint8Array>--><!--Device-ChildProcess-getErrorOutput(): Promise<Uint8Array>-End-->

**System capability:** SystemCapability.Utils.Lang

**System API:** This is a system API.

**Return value:**

| Type | Description |
| --- | --- |
| [Promise](../../apis-na/arkts-apis/arkts-na-lib-es5-promise-i.md)<Uint8Array> | Return subprocess standard error output. |

## getOutput

```TypeScript
getOutput(): Promise<Uint8Array>
```

Return it as 'Uint8Array' of the stdout until EOF

**Since:** 7

<!--Device-ChildProcess-getOutput(): Promise<Uint8Array>--><!--Device-ChildProcess-getOutput(): Promise<Uint8Array>-End-->

**System capability:** SystemCapability.Utils.Lang

**System API:** This is a system API.

**Return value:**

| Type | Description |
| --- | --- |
| [Promise](../../apis-na/arkts-apis/arkts-na-lib-es5-promise-i.md)<Uint8Array> | Return subprocess standard output. |

## kill

```TypeScript
kill(signal: number | string): void
```

Send a signal to process

**Since:** 7

<!--Device-ChildProcess-kill(signal: number | string): void--><!--Device-ChildProcess-kill(signal: number | string): void-End-->

**System capability:** SystemCapability.Utils.Lang

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| signal | number \| string | Yes | Number or string represents the signal sent. |

## wait

```TypeScript
wait(): Promise<number>
```

Return 'number' is the target process exit code

**Since:** 7

<!--Device-ChildProcess-wait(): Promise<number>--><!--Device-ChildProcess-wait(): Promise<number>-End-->

**System capability:** SystemCapability.Utils.Lang

**System API:** This is a system API.

**Return value:**

| Type | Description |
| --- | --- |
| [Promise](../../apis-na/arkts-apis/arkts-na-lib-es5-promise-i.md)<number> | Return the target process exit code. |

## exitCode

```TypeScript
readonly exitCode: number
```

Return exitCode is the exit code of the current child process

**Type:** number

**Since:** 7

<!--Device-ChildProcess-readonly exitCode: number--><!--Device-ChildProcess-readonly exitCode: number-End-->

**System capability:** SystemCapability.Utils.Lang

**System API:** This is a system API.

## killed

```TypeScript
readonly killed: boolean
```

Return boolean is whether the current process signal is sent successfully

**Type:** boolean

**Since:** 7

<!--Device-ChildProcess-readonly killed: boolean--><!--Device-ChildProcess-readonly killed: boolean-End-->

**System capability:** SystemCapability.Utils.Lang

**System API:** This is a system API.

## pid

```TypeScript
readonly pid: number
```

Return pid is the pid of the current process

**Type:** number

**Since:** 7

<!--Device-ChildProcess-readonly pid: number--><!--Device-ChildProcess-readonly pid: number-End-->

**System capability:** SystemCapability.Utils.Lang

**System API:** This is a system API.

## ppid

```TypeScript
readonly ppid: number
```

Return ppid is the pid of the current child process

**Type:** number

**Since:** 7

<!--Device-ChildProcess-readonly ppid: number--><!--Device-ChildProcess-readonly ppid: number-End-->

**System capability:** SystemCapability.Utils.Lang

**System API:** This is a system API.

