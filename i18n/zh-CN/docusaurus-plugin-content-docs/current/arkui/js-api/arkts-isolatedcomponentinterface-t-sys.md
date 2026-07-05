# IsolatedComponentInterface

```TypeScript
declare type IsolatedComponentInterface = (options: IsolatedOptions) => IsolatedComponentAttribute
```

Provide an interface for the IsolatedComponent, which is used to render UI of other ABC

**起始版本：** 12

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| options | IsolatedOptions | 是 | Construction configuration of IsolatedComponentAttribute |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| IsolatedComponentAttribute | Attribute of IsolatedComponent |

