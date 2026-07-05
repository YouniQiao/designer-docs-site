# extendViewModel

## extendViewModel

```TypeScript
export declare function extendViewModel<T extends ViewModel, Data>(
  options: CombinedOptions<T, Data>
): ViewModel & Data
```

**起始版本：** 4

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Lite

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| options | CombinedOptions&lt;T, Data> | 是 |  |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| ViewModel & Data |  |

