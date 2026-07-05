# TaskInfo

查询结果的任务信息数据结构，提供普通查询和系统查询，两种字段的可见范围不同。

**Since:** 10

**System capability:** SystemCapability.Request.FileTransferAgent

## Modules to Import

```TypeScript
import { request } from '@kit.BasicServicesKit';
```

## gauge

```TypeScript
readonly gauge: boolean
```

后台任务的进度通知策略。 - false：代表仅完成或失败的通知。 - true，发出每个进度已完成或失败的通知。

**Type:** boolean

**Since:** 10

**System capability:** SystemCapability.Request.FileTransferAgent

## reason

```TypeScript
readonly reason: string
```

等待/失败/停止/暂停任务的原因。

**Type:** string

**Since:** 10

**System capability:** SystemCapability.Request.FileTransferAgent

## tries

```TypeScript
readonly tries: int
```

任务的尝试次数。

**Type:** int

**Since:** 10

**System capability:** SystemCapability.Request.FileTransferAgent

## data

```TypeScript
readonly data?: string | Array<FormItem>
```

任务值。 - 通过[request.agent.show]request.agent.show(id: string)、 [request.agent.touch]request.agent.touch(id: string, token: string)进行查询 。

**Type:** string | Array<FormItem>

**Since:** 10

**System capability:** SystemCapability.Request.FileTransferAgent

## saveas

```TypeScript
readonly saveas?: string
```

保存下载文件的路径。

**Type:** string

**Since:** 10

**System capability:** SystemCapability.Request.FileTransferAgent

## extras

```TypeScript
readonly extras?: object
```

任务的额外部分。

**Type:** object

**Since:** 10

**System capability:** SystemCapability.Request.FileTransferAgent

```TypeScript
readonly extras?: Record<string, string>
```

The extras of a task. For frontend, nothing now.

**Type:** Record<string, string>

**Since:** 23

**System capability:** SystemCapability.Request.FileTransferAgent

## description

```TypeScript
readonly description: string
```

任务描述。

**Type:** string

**Since:** 10

**System capability:** SystemCapability.Request.FileTransferAgent

## mimeType

```TypeScript
readonly mimeType: string
```

任务配置中的mimetype。

**Type:** string

**Since:** 10

**System capability:** SystemCapability.Request.FileTransferAgent

## mtime

```TypeScript
readonly mtime: long
```

任务状态改变时的Unix时间戳（毫秒），由当前设备的系统生成。

**Type:** long

**Since:** 10

**System capability:** SystemCapability.Request.FileTransferAgent

## priority

```TypeScript
readonly priority: int
```

任务的优先级。前台任务的优先级比后台任务高。任务模式相同的情况下，该配置项的数字越小优先级越高，默认值为0。

**Type:** int

**Since:** 11

**System capability:** SystemCapability.Request.FileTransferAgent

## title

```TypeScript
readonly title: string
```

任务标题。

**Type:** string

**Since:** 10

**System capability:** SystemCapability.Request.FileTransferAgent

## faults

```TypeScript
readonly faults: Faults
```

任务的失败原因。

**Type:** Faults

**Since:** 10

**System capability:** SystemCapability.Request.FileTransferAgent

## tid

```TypeScript
readonly tid: string
```

任务id。

**Type:** string

**Since:** 10

**System capability:** SystemCapability.Request.FileTransferAgent

## url

```TypeScript
readonly url?: string
```

任务的url。 - 通过[request.agent.show]request.agent.show(id: string)、 [request.agent.touch]request.agent.touch(id: string, token: string)进行查询 。

**Type:** string

**Since:** 10

**System capability:** SystemCapability.Request.FileTransferAgent

## mode

```TypeScript
readonly mode: Mode
```

任务模式。 - FOREGROUND表示前台任务。 - BACKGROUND表示后台任务。

**Type:** Mode

**Since:** 10

**System capability:** SystemCapability.Request.FileTransferAgent

## uid

```TypeScript
readonly uid?: string
```

The UID of an application. For system query only.

**Type:** string

**Since:** 10

**System capability:** SystemCapability.Request.FileTransferAgent

**System API:** This is a system API.

## ctime

```TypeScript
readonly ctime: long
```

创建任务的Unix时间戳（毫秒），由当前设备的系统生成。 说明：使用 [request.agent.search]request.agent.search(filter: Filter, callback: AsyncCallback<Array<string>>)进行 查询时，该值需处于[after,before]区间内才可正常查询到任务id，before和after信息详见 [Filter]request.agent.Filter。

**Type:** long

**Since:** 10

**System capability:** SystemCapability.Request.FileTransferAgent

## progress

```TypeScript
readonly progress: Progress
```

任务的过程进度。

**Type:** Progress

**Since:** 10

**System capability:** SystemCapability.Request.FileTransferAgent

## action

```TypeScript
readonly action: Action
```

任务操作选项。 - UPLOAD表示上传任务。 - DOWNLOAD表示下载任务。

**Type:** Action

**Since:** 10

**System capability:** SystemCapability.Request.FileTransferAgent

## bundle

```TypeScript
readonly bundle?: string
```

The bundle name. For system query only.

**Type:** string

**Since:** 10

**System capability:** SystemCapability.Request.FileTransferAgent

**System API:** This is a system API.

## retry

```TypeScript
readonly retry: boolean
```

任务的重试开关，仅应用于后台任务。 - true：是 - false：否

**Type:** boolean

**Since:** 10

**System capability:** SystemCapability.Request.FileTransferAgent

