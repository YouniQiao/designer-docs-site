# GridItemAttribute

**Inheritance:** GridItemAttributeextends: CommonMethod<GridItemAttribute>.

**Since:** 7

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## columnEnd

```TypeScript
columnEnd(value: number)
```

设置当前元素终点列号。

**Since:** 7

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | number | Yes | 当前元素终点列号。 需要指定GridItem起始行列号和所占行列数的场景推荐使用Grid的  [GridLayoutOptions]GridLayoutOptions参数，详细可参考Grid的  [示例1（固定行列Grid）](docroot://reference/apis-arkui/arkui-ts/ts-container-grid.md#示例1固定行列grid)和  [示例3（可滚动Grid设置跨行跨列节点）](docroot://reference/apis-arkui/arkui-ts/ts-container-grid.md#示例3可滚动grid设置跨行跨列节点)。 取值  范围：[0, 总列数-1] |

## columnStart

```TypeScript
columnStart(value: number)
```

设置当前元素起始列号。

**Since:** 7

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | number | Yes | 当前元素起始列号。 需要指定GridItem起始行列号和所占行列数的场景推荐使用Grid的  [GridLayoutOptions]GridLayoutOptions参数，详细可参考Grid的  [示例1（固定行列Grid）](docroot://reference/apis-arkui/arkui-ts/ts-container-grid.md#示例1固定行列grid)和  [示例3（可滚动Grid设置跨行跨列节点）](docroot://reference/apis-arkui/arkui-ts/ts-container-grid.md#示例3可滚动grid设置跨行跨列节点)。 取值  范围：[0, 总列数-1] |

## forceRebuild

```TypeScript
forceRebuild(value: boolean)
```

设置在触发组件build时是否重新创建此节点。 > **说明：** > > 从API version 7开始支持，从API version 9开始废弃。GridItem会根据自身属性和子组件变化自行决定是否需要重新创建，无需设置。

**Since:** 7

**Deprecated since:** 9

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | boolean | Yes | 在触发组件build时是否重新创建此节点。 默认值：false |

## onSelect

```TypeScript
onSelect(event: (isSelected: boolean) => void)
```

GridItem元素被鼠标框选的状态改变时触发回调。

**Since:** 8

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| event | (isSelected: boolean) => void | Yes | 回调函数。进入鼠标框选范围即被选中返回true，移出鼠标框选范围即未被选中返回false。 |

## rowEnd

```TypeScript
rowEnd(value: number)
```

设置当前元素终点行号。

**Since:** 7

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | number | Yes | 当前元素终点行号。 需要指定GridItem起始行列号和所占行列数的场景推荐使用Grid的  [GridLayoutOptions]GridLayoutOptions参数，详细可参考Grid的  [示例1（固定行列Grid）](docroot://reference/apis-arkui/arkui-ts/ts-container-grid.md#示例1固定行列grid)和  [示例3（可滚动Grid设置跨行跨列节点）](docroot://reference/apis-arkui/arkui-ts/ts-container-grid.md#示例3可滚动grid设置跨行跨列节点)。 取值  范围：[0, 总行数-1] |

## rowStart

```TypeScript
rowStart(value: number)
```

设置当前元素起始行号。

**Since:** 7

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | number | Yes | 当前元素起始行号。 需要指定GridItem起始行列号和所占行列数的场景推荐使用Grid的  [GridLayoutOptions]GridLayoutOptions参数，详细可参考Grid的  [示例1（固定行列Grid）](docroot://reference/apis-arkui/arkui-ts/ts-container-grid.md#示例1固定行列grid)和  [示例3（可滚动Grid设置跨行跨列节点）](docroot://reference/apis-arkui/arkui-ts/ts-container-grid.md#示例3可滚动grid设置跨行跨列节点)。 取值  范围：[0, 总行数-1] |

## selectable

```TypeScript
selectable(value: boolean)
```

设置当前GridItem元素是否可以被鼠标框选。外层Grid容器的鼠标框选开启时，GridItem的框选才生效。 该属性需要在设置[多态样式]common前使用才能生效选中态样式。

**Since:** 8

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | boolean | Yes | 当前GridItem元素是否可以被鼠标框选。设置为true时可以被鼠标框选，设置为false时无法被鼠标框选。 默认值：true |

## selected

```TypeScript
selected(value: boolean)
```

设置当前GridItem选中状态。该属性支持[$$](docroot://ui/state-management/arkts-two-way-sync.md)双向绑定变量。 该属性需要在设置[多态样式]common前使用才能生效选中态样式。

**Since:** 10

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | boolean | Yes | 当前GridItem选中状态。设置为true时为选中状态，设置为false时为默认状态。 默认值：false |

