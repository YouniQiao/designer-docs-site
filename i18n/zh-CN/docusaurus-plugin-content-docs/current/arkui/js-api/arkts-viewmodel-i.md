# ViewModel

View model

**起始版本：** 4

**系统能力：** SystemCapability.ArkUI.ArkUI.Lite

## $t

```TypeScript
$t(path: string, param?: object | Array<any>): string
```

Displays content based on the current system language and a path of the language resource key specified through $t.

**起始版本：** 4

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Lite

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| path | string | 是 | Path of the language resource key |
| param | object \| Array&lt;any> | 否 |  |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| string | content to display |

## $refs

```TypeScript
$refs: ElementReferences
```

An object that holds all DOM elements and component instances that have been registered with the refs attribute

**类型：** ElementReferences

**起始版本：** 4

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Lite

