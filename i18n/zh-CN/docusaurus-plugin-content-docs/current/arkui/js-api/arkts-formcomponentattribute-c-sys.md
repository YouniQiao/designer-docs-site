# FormComponentAttribute

**继承实现关系：** FormComponentAttribute继承自：CommonMethod<FormComponentAttribute>。

**起始版本：** 7

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**系统接口：** 此接口为系统接口。

## allowUpdate

```TypeScript
allowUpdate(value: boolean)
```

Indicates whether to allow card update.

**起始版本：** 7

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| value | boolean | 是 |  |

## colorMode

```TypeScript
colorMode(value: FormColorMode)
```

Set the color mode of the card.

**起始版本：** 23

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| value | FormColorMode | 是 | The form color mode to set. |

## dimension

```TypeScript
dimension(value: FormDimension)
```

Set the card size.

**起始版本：** 7

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| value | FormDimension | 是 |  |

## moduleName

```TypeScript
moduleName(value: string)
```

Card module name.

**起始版本：** 7

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| value | string | 是 |  |

## onAcquired

```TypeScript
onAcquired(callback: Callback<FormCallbackInfo>)
```

This function is triggered after card information is obtained. For details about the form information, see the definition of the original capability subsystem.

**起始版本：** 7

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | Callback&lt;FormCallbackInfo> | 是 | [since 7 - 11] |

## onError

```TypeScript
onError(callback: Callback<ErrorInformation>)
```

Card loading error. Anonymous Object Rectification

**起始版本：** 7

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | Callback&lt;ErrorInformation> | 是 | [since 7 - 17] |

## onLoad

```TypeScript
onLoad(callback: VoidCallback)
```

Card to be loaded. Anonymous Object Rectification

**起始版本：** 10

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | VoidCallback | 是 | [since 10 - 17] |

## onRouter

```TypeScript
onRouter(callback: Callback<object>)
```

Card to be redirected. Anonymous Object Rectification

**起始版本：** 7

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | Callback&lt;object> | 是 | [since 7 - 17] |

## onUninstall

```TypeScript
onUninstall(callback: Callback<FormCallbackInfo>)
```

Uninstall Card.

**起始版本：** 7

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | Callback&lt;FormCallbackInfo> | 是 | [since 7 - 11] |

## onUpdate

```TypeScript
onUpdate(callback: Callback<FormCallbackInfo>)
```

Card has been updated.

**起始版本：** 18

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | Callback&lt;FormCallbackInfo> | 是 |  |

## size

```TypeScript
size(formSize: FormSize)
```

Sets the display area size of the card. Anonymous Object Rectification

**起始版本：** 7

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| formSize | FormSize | 是 | The size of Form. [since 18] |

## visibility

```TypeScript
visibility(value: Visibility)
```

Whether the card is visible.

**起始版本：** 7

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| value | Visibility | 是 |  |

