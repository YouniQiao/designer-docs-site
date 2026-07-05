# ThreadWorkerPriority

```TypeScript
export enum ThreadWorkerPriority
```

Worker线程的优先级枚举，各优先级对应关系请参考QoS等级定义。

**Since:** 18

**System capability:** SystemCapability.Utils.Lang

## HIGH

```TypeScript
HIGH = 0
```

适用于打开文档等用户触发并且可以看到进展的任务，任务在几秒钟之内完成。对应QOS_USER_INITIATED。

**Since:** 18

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

## MEDIUM

```TypeScript
MEDIUM = 1
```

任务完成需要几秒钟。是ThreadWorkerPriority的默认值。对应QOS_DEFAULT。

**Since:** 18

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

## LOW

```TypeScript
LOW = 2
```

适用于下载等不需要立即看到响应效果的任务，任务完成需要几秒到几分钟。对应QOS_UTILITY。

**Since:** 18

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

## IDLE

```TypeScript
IDLE = 3
```

适用于数据同步等用户不可见的后台任务，任务完成需要几分钟甚至几小时。对应QOS_BACKGROUND。

**Since:** 18

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

## DEADLINE

```TypeScript
DEADLINE = 4
```

适用于页面加载等越快越好的关键任务，任务几乎是瞬间完成的。对应QOS_DEADLINE_REQUEST。

**Since:** 20

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

## VIP

```TypeScript
VIP = 5
```

适用于UI线程、动画渲染等用户交互任务，任务是即时的。对应QOS_USER_INTERACTIVE。

**Since:** 20

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

