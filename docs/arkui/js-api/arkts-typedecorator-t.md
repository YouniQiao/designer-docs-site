# TypeDecorator

```TypeScript
export declare type TypeDecorator = <T>(type: TypeConstructor<T>) => PropertyDecorator
```

属性装饰器，用于装饰嵌套类中属于自定义class类的属性。

**Since:** 12

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | TypeConstructor&lt;T> | Yes | 标记类属性的类型。 |

**Return value:**

| Type | Description |
| --- | --- |
| PropertyDecorator | 属性装饰器。 |

