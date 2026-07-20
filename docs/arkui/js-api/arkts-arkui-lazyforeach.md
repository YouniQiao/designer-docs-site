# LazyForEach

> **NOTE**

For details about the development, see
[LazyForEach: Lazy Data Loading](docroot://ui/rendering-control/arkts-rendering-control-lazyforeach.md).

In scenarios involving a large number of child components, LazyForEach, when combined with techniques such as cached
list items, dynamic preloading, and component reuse, can significantly improve scrolling frame rates while reducing
memory usage. For best practices, see
[Optimizing Frame Loss for Long List Loading](https://developer.huawei.com/consumer/en/doc/best-practices/bpta-best-practices-long-list).


## LazyForEach

```TypeScript
LazyForEach(
    dataSource: IDataSource,
    itemGenerator: (item: any, index: number) => void,
    keyGenerator?: (item: any, index: number) => string
  )
```

**LazyForEach** iterates over provided data sources and creates corresponding components during each iteration.When **LazyForEach** is used in a scrolling container, the framework creates components as required within the visible area of the scrolling container. When a component is out of the visible area, the framework destroys and reclaims the component to reduce memory usage.

**Since:** 7

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-LazyForEachInterface-(
    dataSource: IDataSource,
    itemGenerator: (item: any, index: number) => void,
    keyGenerator?: (item: any, index: number) => string
  ): LazyForEachAttribute--><!--Device-LazyForEachInterface-(
    dataSource: IDataSource,
    itemGenerator: (item: any, index: number) => void,
    keyGenerator?: (item: any, index: number) => string
  ): LazyForEachAttribute-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| dataSource | IDataSource | Yes | **LazyForEach** data source. You need to implement related APIs. |
| itemGenerator | (item: any, index: number) =&gt; void | Yes | Child component generation function, which generates a child component for eachdata item in the array.<br>**NOTE**<br>- (Optional) **item**: data item.<br>(Optional) **index**: index of thedata item.<br>- The function body of **itemGenerator** must be included in braces {...}.<br>- **itemGenerator**can and must generate only one child component for each iteration.<br>- The **if** statement is allowed in**itemGenerator**, but you must ensure that each branch of the **if** statement creates a child component ofthe same type. |
| keyGenerator | (item: any, index: number) =&gt; string | No | ID generation function, which generates a unique and fixed ID for each data itemin the data source. Components are updated only when their generated key changes. The **keyGenerator**parameter is optional, but you are advised to provide it so that the development framework can better identifyarray changes and update components correctly.<br>The default value is an empty callback.<br>**NOTE**<br>- (Optional) **item**: data item.<br>(Optional) **index**: index of the data item.<br>- When **keyGenerator** isomitted, the default function **(item: Object, index: number) =&gt; { return viewId + '-' + index.toString(); }**is used, where key generation is affected by the index value only (**viewId** is compiler-generated andconsistent within the same **LazyForEach** component).<br>- To ensure correct and efficient child componentupdates, avoiding rendering anomalies or performance degradation, keys must meet the following requirements:<br>1. Uniqueness: Each data item must have a distinct key.<br>2. Consistency: Keys must remain unchanged forunmodified data items. |

## LazyForEach

```TypeScript
LazyForEach(
    dataSource: IDataSource,
    itemGenerator: (item: any, index: number) => void,
    keyGenerator?: (item: any, index: number) => string,
    options?: LazyForEachOptions
  )
```

Enter the value to obtain the LazyForEach.

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 26.0.0.

<!--Device-LazyForEachInterface-(
    dataSource: IDataSource,
    itemGenerator: (item: any, index: number) => void,
    keyGenerator?: (item: any, index: number) => string,
    options?: LazyForEachOptions
  ): LazyForEachAttribute--><!--Device-LazyForEachInterface-(
    dataSource: IDataSource,
    itemGenerator: (item: any, index: number) => void,
    keyGenerator?: (item: any, index: number) => string,
    options?: LazyForEachOptions
  ): LazyForEachAttribute-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| dataSource | IDataSource | Yes |  |
| itemGenerator | (item: any, index: number) =&gt; void | Yes |  |
| keyGenerator | (item: any, index: number) =&gt; string | No |  |
| options | LazyForEachOptions | No |  |

## Summary

- [DataAddOperation](arkts-arkui-lazyforeach-dataaddoperation-i.md)
- [DataChangeListener](arkts-arkui-lazyforeach-datachangelistener-i.md)
- [DataChangeOperation](arkts-arkui-lazyforeach-datachangeoperation-i.md)
- [DataDeleteOperation](arkts-arkui-lazyforeach-datadeleteoperation-i.md)
- [DataExchangeOperation](arkts-arkui-lazyforeach-dataexchangeoperation-i.md)
- [DataMoveOperation](arkts-arkui-lazyforeach-datamoveoperation-i.md)
- [DataReloadOperation](arkts-arkui-lazyforeach-datareloadoperation-i.md)
- [ExchangeIndex](arkts-arkui-lazyforeach-exchangeindex-i.md)
- [ExchangeKey](arkts-arkui-lazyforeach-exchangekey-i.md)
- [IDataSource](arkts-arkui-lazyforeach-idatasource-i.md)
- [LazyForEachOptions](arkts-arkui-lazyforeach-lazyforeachoptions-i.md)
- [MoveIndex](arkts-arkui-lazyforeach-moveindex-i.md)
- [DataOperation](arkts-arkui-lazyforeach-dataoperation-t.md)
- [DataOperationType](arkts-arkui-lazyforeach-dataoperationtype-e.md)
- [LazyForEachCustomComponentFreezeMode](arkts-arkui-lazyforeach-lazyforeachcustomcomponentfreezemode-e.md)
- [LazyForEachMemOptStrategy](arkts-arkui-lazyforeach-lazyforeachmemoptstrategy-e.md)
- [LazyForEachReleaseStrategy](arkts-arkui-lazyforeach-lazyforeachreleasestrategy-e.md)
