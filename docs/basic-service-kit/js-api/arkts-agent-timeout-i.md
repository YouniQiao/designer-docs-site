# Timeout

任务的超时配置。任务处于等待状态的时间不参与计算，上传下载任务会存在以下任务等待的原因: [WaitingReason<sup>20+</sup>]request.agent.WaitingReason 。

**Since:** 20

**System capability:** SystemCapability.Request.FileTransferAgent

## Modules to Import

```TypeScript
import { request } from '@kit.BasicServicesKit';
```

## totalTimeout

```TypeScript
totalTimeout?: int
```

任务总超时时间，单位为秒。总超时包括建立连接、发送请求和接收响应的全部时间。未指定时使用默认值604800秒（1周）。允许设置的最小值为1秒，最大值为604800秒（1周）。

**Type:** int

**Since:** 20

**System capability:** SystemCapability.Request.FileTransferAgent

## connectionTimeout

```TypeScript
connectionTimeout?: int
```

任务连接超时时间，单位为秒。连接超时是指客户端与服务器建立连接的最大耗时。若不设置则使用默认值60秒，允许设置的最小值为1秒。

**Type:** int

**Since:** 20

**System capability:** SystemCapability.Request.FileTransferAgent

