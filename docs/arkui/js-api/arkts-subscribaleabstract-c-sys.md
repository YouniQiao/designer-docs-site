# SubscribaleAbstract

定义Subscribale基类。

**Since:** 7

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**System API:** This is a system API.

## addOwningProperty

```TypeScript
public addOwningProperty(subscriber: IPropertySubscriber): void
```

添加持有的属性。

**Since:** 7

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| subscriber | IPropertySubscriber | Yes | 订阅者。 |

## constructor

```TypeScript
constructor()
```

构造函数。

**Since:** 7

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**System API:** This is a system API.

## notifyPropertyHasChanged

```TypeScript
protected notifyPropertyHasChanged(propName: string, newValue: any): void
```

当通知属性更改时调用。

**Since:** 7

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| propName | string | Yes | 属性名称。 |
| newValue | any | Yes | 更改的新值。 |

## removeOwningProperty

```TypeScript
public removeOwningProperty(property: IPropertySubscriber): void
```

删除已拥有的属性时调用。

**Since:** 7

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| property | IPropertySubscriber | Yes | 要删除的属性。 |

## removeOwningPropertyById

```TypeScript
public removeOwningPropertyById(subscriberId: number): void
```

使用id删除已拥有的属性时调用。

**Since:** 7

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| subscriberId | number | Yes | 要删除的属性id。 |

## owningProperties_

```TypeScript
private owningProperties_: Set<number>
```

返回所持有的属性。

**Type:** Set<number>

**Since:** 7

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**System API:** This is a system API.

