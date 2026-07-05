# @ohos.arkui.Prefetcher

## Modules to Import

```TypeScript
import { IDataSourcePrefetching, BasicPrefetcher, IPrefetcher } from '@ohos.arkui.Prefetcher';
```

## Summary

### Classes

| Name | Description |
| --- | --- |
| [BasicPrefetcher](arkts-arkui-basicprefetcher-c.md) | **BasicPrefetcher** is a fundamental implementation of **IPrefetcher**. It offers an intelligent data prefetching algorithm that decides the data items to prefetch based on real-time changes in the visible area on the screen and variations in the prefetch duration. It can also determine the prefetch requests to be canceled based on the user's scrolling actions. **BasicPrefetcher** objects do not support JSON serialization. |

### Interfaces

| Name | Description |
| --- | --- |
| [IDataSourcePrefetching](arkts-arkui-idatasourceprefetching-i.md) | Extends the [IDataSource](../arkts-components/arkts-arkui-idatasource-i.md#idatasource) API to add data prefetching capability to your data source. |
| [IPrefetcher](arkts-arkui-iprefetcher-i.md) | Provides prefetching capabilities. |

