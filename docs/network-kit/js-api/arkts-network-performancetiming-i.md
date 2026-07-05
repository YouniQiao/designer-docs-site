# PerformanceTiming

Counting the time taken of various stages of HTTP request.

**Since:** 12

**System capability:** SystemCapability.Communication.NetStack

## Modules to Import

```TypeScript
import { http } from '@ohos.net.http';
```

## dnsTiming

```TypeScript
dnsTiming: number
```

Time taken from startup to DNS resolution completion, in milliseconds.

**Type:** number

**Since:** 12

**System capability:** SystemCapability.Communication.NetStack

## firstReceiveTiming

```TypeScript
firstReceiveTiming: number
```

Time taken from startup to receiving the first byte, in milliseconds.

**Type:** number

**Since:** 12

**System capability:** SystemCapability.Communication.NetStack

## firstSendTiming

```TypeScript
firstSendTiming: number
```

Time taken from startup to start sending the first byte, in milliseconds.

**Type:** number

**Since:** 12

**System capability:** SystemCapability.Communication.NetStack

## redirectTiming

```TypeScript
redirectTiming: number
```

Time taken from startup to completion of all redirection steps, in milliseconds.

**Type:** number

**Since:** 12

**System capability:** SystemCapability.Communication.NetStack

## responseBodyTiming

```TypeScript
responseBodyTiming: number
```

Time taken from HTTP Request to body completion, in milliseconds.

**Type:** number

**Since:** 12

**System capability:** SystemCapability.Communication.NetStack

## responseHeaderTiming

```TypeScript
responseHeaderTiming: number
```

Time taken from HTTP request to header completion, in milliseconds.

**Type:** number

**Since:** 12

**System capability:** SystemCapability.Communication.NetStack

## tcpTiming

```TypeScript
tcpTiming: number
```

Time taken from startup to TCP connection completion, in milliseconds.

**Type:** number

**Since:** 12

**System capability:** SystemCapability.Communication.NetStack

## tlsTiming

```TypeScript
tlsTiming: number
```

Time taken from startup to TLS connection completion, in milliseconds.

**Type:** number

**Since:** 12

**System capability:** SystemCapability.Communication.NetStack

## totalFinishTiming

```TypeScript
totalFinishTiming: number
```

Time taken from startup to the completion of the request, in milliseconds.

**Type:** number

**Since:** 12

**System capability:** SystemCapability.Communication.NetStack

## totalTiming

```TypeScript
totalTiming: number
```

Time taken from HTTP Request to callback to the application, in milliseconds.

**Type:** number

**Since:** 12

**System capability:** SystemCapability.Communication.NetStack

