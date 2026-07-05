# Element

**起始版本：** 4

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

## addChild

```TypeScript
addChild(child: Element): void
```

Adds a node to the end of the child node list of the current node.

**起始版本：** 8

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| child | Element | 是 | Subnode object to be added |

## animate

```TypeScript
animate(keyframes: Array<AnimateStyle>, options: AnimateOptions): AnimationResult
```

Creates and runs an animation shortcut on the component. Specify the keyframes and options required for the animation.

**起始版本：** 4

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| keyframes | Array&lt;AnimateStyle> | 是 | keyframes is used to describe key frame parameters of the animation. |
| options | AnimateOptions | 是 | Options. is used to describe animation parameters. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| AnimationResult | This method returns the animation object. |

## createIntersectionObserver

```TypeScript
createIntersectionObserver(param: { ratios: Array<number> }): observer
```

If 0.5 is returned, 50% of the current component is visible.

**起始版本：** 6

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| param | { ratios: Array&lt;number> } | 是 | Scope of Monitoring components. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| observer |  |

## focus

```TypeScript
focus(obj?: FocusParamObj): void
```

Requests or cancels the focus for a component. If focus is set to true, the focus is requested for the component. If focus is set to false, the focus is canceled for the component. This attribute can be defaulted to true.

**起始版本：** 4

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| obj | FocusParamObj | 否 |  |

## getBoundingClientRect

```TypeScript
getBoundingClientRect(): RectObj
```

Obtains the size and position of the element.

**起始版本：** 6

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**返回值：**

| 类型 | 说明 |
| --- | --- |
| RectObj | RectObj the size position of the element. |

## getInspector

```TypeScript
getInspector(): string
```

Obtains attributes of the element.

**起始版本：** 8

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**系统接口：** 此接口为系统接口。

**返回值：**

| 类型 | 说明 |
| --- | --- |
| string | attributes of the element in json string. |

## rotation

```TypeScript
rotation(obj?: FocusParamObj): void
```

Requests or cancels the crown rotation focus for a component. If focus is set to true, the crown event focus is requested. If focus is set to false, the crown event focus is canceled. This attribute can be defaulted to true.

**起始版本：** 4

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| obj | FocusParamObj | 否 |  |

## setAttribute

```TypeScript
setAttribute(name: string, value: string): void
```

Sets the value of an attribute on a specified element. If the attribute already exists, update the value. Otherwise, a new attribute is added with the specified name and value.

**起始版本：** 8

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| name | string | 是 | attribute name |
| value | string | 是 | attribute value¡¢ |

## setStyle

```TypeScript
setStyle(name: string, value: string): boolean
```

Sets a style value on a specified element. If the style exists and the style value is valid, the setting is successful. Otherwise, the setting is invalid.

**起始版本：** 8

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| name | string | 是 | style name |
| value | string | 是 | style value |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| boolean | If the setting is successful, true is returned. If the setting fails, false is returned. |

