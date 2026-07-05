# init

## init

```TypeScript
function init(
    options: [
      number,
      number,
      number,
      number,
      number,
      number,
      number,
      number,
      number,
      number,
      number,
      number,
      number,
      number,
      number,
      number
    ]
  ): Matrix4Transit
```

Matrix的构造函数，可以通过传入的参数创建一个四阶矩阵，矩阵为列优先。

**Since:** 7

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| options | [
      number,
      number,
      number,
      number,
      number,
      number,
      number,
      number,
      number,
      number,
      number,
      number,
      number,
      number,
      number,
      number
    ] | Yes | 参数为长度为16（44）的number数组, 详情见四阶矩阵说明。 各number取值范围：(-∞, +∞) 默认值：  [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1] |

**Return value:**

| Type | Description |
| --- | --- |
| Matrix4Transit | 根据入参创建的四阶矩阵对象。 |

