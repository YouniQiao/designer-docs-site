# @ohos.arkui.Prefetcher

## Modules to Import

```TypeScript
import { IDataSourcePrefetching,BasicPrefetcher,IPrefetcher } from '@kit.ArkUI';
```

## Summary

### Classes

| Name | Description |
| --- | --- |
| [BasicPrefetcher](arkts-basicprefetcher-c.md) | BasicPrefetcher是IPrefetcher的基础实现。它提供了一种智能数据预取算法，以根据屏幕上可见区域的实时变化和预取持续时间的变化来决定应预取哪些数据项。它还可以根据用户的滚动操作来确定哪些预取请求应该被取消。 BasicPrefetcher对象不支持使用JSON序列化。 |

### Interfaces

| Name | Description |
| --- | --- |
| [IDataSourcePrefetching](arkts-idatasourceprefetching-i.md) | 继承自[IDataSource]{@link IDataSource}。实现该接口，提供具备预取能力的DataSource。 |
| [IPrefetcher](arkts-iprefetcher-i.md) | 实现此接口以提供预取能力。 |

