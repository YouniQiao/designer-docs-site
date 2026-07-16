# Stack

Provides ports for stacking containers.


## Stack

```TypeScript
Stack(options?: StackOptions)
```

> **NOTE**
>
> Excessive component nesting can lead to performance degradation. In some scenarios, using component attributes
> directly or leveraging system APIs can achieve the same effect as the stack container, reducing the number of
> nested components and optimizing performance. For best practices, see
> [Preferentially Using Component Properties Instead of Nested Components](https://developer.huawei.com/consumer/en/doc/best-practices/bpta-component-nesting-optimization#section78181114123811)
> .

**Since:** 7

**Atomic service API:** This API can be used in atomic services since API version 11.

**Widget capability:** This API can be used in ArkTS widgets since API version 9.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| options | StackOptions | No | Alignment of child components in the container. |

## Summary

- [StackOptions](arkts-arkui-stack-stackoptions-i.md)
