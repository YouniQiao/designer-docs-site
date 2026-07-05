# PerformanceInfo

预下载的性能信息。

**Since:** 20

**System capability:** SystemCapability.Request.FileTransferAgent

## Modules to Import

```TypeScript
import { cacheDownload } from '@kit.BasicServicesKit';
```

## tlsTime

```TypeScript
readonly tlsTime: double
```

从启动到tls连接完成所需的时间，单位：毫秒（ms）。

**Type:** double

**Since:** 20

**System capability:** SystemCapability.Request.FileTransferAgent

## redirectTime

```TypeScript
readonly redirectTime: double
```

从启动到完成所有重定向步骤所需的时间，单位：毫秒（ms）。

**Type:** double

**Since:** 20

**System capability:** SystemCapability.Request.FileTransferAgent

## firstReceiveTime

```TypeScript
readonly firstReceiveTime: double
```

从启动到接收第一个字节所需的时间，单位：毫秒（ms）。

**Type:** double

**Since:** 20

**System capability:** SystemCapability.Request.FileTransferAgent

## totalTime

```TypeScript
readonly totalTime: double
```

从启动到完成请求所需的时间，单位：毫秒（ms）。

**Type:** double

**Since:** 20

**System capability:** SystemCapability.Request.FileTransferAgent

## connectTime

```TypeScript
readonly connectTime: double
```

从启动到tcp连接完成所需的时间，单位：毫秒（ms）。

**Type:** double

**Since:** 20

**System capability:** SystemCapability.Request.FileTransferAgent

## dnsTime

```TypeScript
readonly dnsTime: double
```

从启动到dns解析完成所需的时间，单位：毫秒（ms）。

**Type:** double

**Since:** 20

**System capability:** SystemCapability.Request.FileTransferAgent

## firstSendTime

```TypeScript
readonly firstSendTime: double
```

从启动到开始发送第一个字节所需的时间，单位：毫秒（ms）。

**Type:** double

**Since:** 20

**System capability:** SystemCapability.Request.FileTransferAgent

