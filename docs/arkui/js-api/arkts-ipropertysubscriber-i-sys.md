# IPropertySubscriber

提供属性订阅者的接口。

**Since:** 7

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**System API:** This is a system API.

## aboutToBeDeleted

```TypeScript
aboutToBeDeleted(owningView?: IPropertySubscriber): void
```

销毁时调用。

**Since:** 7

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| owningView | IPropertySubscriber | No | 所在自定义组件。 |

## id

```TypeScript
id(): number
```

获取id时调用。

**Since:** 7

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**System API:** This is a system API.

**Return value:**

| Type | Description |
| --- | --- |
| number | 返回变量id。 |

