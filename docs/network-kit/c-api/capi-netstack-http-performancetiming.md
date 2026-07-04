# Http_PerformanceTiming

```c
typedef struct Http_PerformanceTiming {...} Http_PerformanceTiming
```

## Overview

Response timing information. It will be collected in {@link Http_Response.performanceTiming}.

**Since**: 20

**Related module**: [netstack](capi-netstack.md)

**Header file**: [net_http_type.h](capi-net-http-type-h.md)

## Summary

### Member variables

| Name | Description |
| -- | -- |
| double dnsTiming | The total time in milliseconds for the HTTP transfer, including name resolving, TCP connect etc. |
| double tcpTiming | The time in milliseconds from the start until the remote host name was resolved. |
| double tlsTiming | The time in milliseconds from the start until the connection to the remote host (or proxy) was completed. |
| double firstSendTiming | The time in milliseconds, it took from the start until the transfer is just about to begin. |
| double firstReceiveTiming | The time in milliseconds from last modification time of the remote file. |
| double totalFinishTiming | The time in milliseconds, it took from the start until the first byte is received. |
| double redirectTiming | The time in milliseconds it took for all redirection steps including name lookup, connect, etc. |


