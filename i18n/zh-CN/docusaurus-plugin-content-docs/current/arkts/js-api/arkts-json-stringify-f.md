# stringify

## stringify

```TypeScript
function stringify(value: Object, replacer?: (number | string)[] | null, space?: string | number): string
```

将ArkTS对象或数组转换为JSON字符串。对于容器，支持线性容器，但不支持非线性容器。

**起始版本：** 12

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Utils.Lang

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| value | Object | 是 | ArkTS对象或数组。对于容器，支持线性容器，但不支持非线性容器。 |
| replacer | (number \| string)[] \| null | 否 |  |
| space | string \| number | 否 |  |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| string | 返回JSON文本。 |

## stringify

```TypeScript
function stringify(value: Object, replacer?: Transformer, space?: string | number): string
```

将ArkTS对象或数组转换为JSON字符串。对于容器，支持线性容器，但不支持非线性容器。

**起始版本：** 12

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Utils.Lang

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| value | Object | 是 | ArkTS对象或数组。对于容器，支持线性容器，但不支持非线性容器。 |
| replacer | Transformer | 否 |  |
| space | string \| number | 否 |  |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| string | 返回JSON文本。 |

