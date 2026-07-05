# FeatureAbility

**起始版本：** 5

**废弃版本：** 8

**替代接口：** ohos.ability.featureAbility.FeatureAbility

**系统能力：** SystemCapability.ArkUI.ArkUI.Lite

## callAbility

```TypeScript
static callAbility(param: CallAbilityParam): Promise<string>
```

Calls an AA.

**起始版本：** 5

**废弃版本：** 8

**系统能力：** SystemCapability.ArkUI.ArkUI.Lite

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| param | CallAbilityParam | 是 | Indicates the request param. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;string> | A Promise object is returned, which contains the result data returned by the AA. The result is a JSON string. |

## continueAbility

```TypeScript
static continueAbility(): Promise<Result>
```

Start FA migration.

**起始版本：** 5

**废弃版本：** 8

**系统能力：** SystemCapability.ArkUI.ArkUI.Lite

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;Result> | A Promise object is returned, which contains the result data returned by the AA. The result is a JSON string. |

## finishWithResult

```TypeScript
static finishWithResult(param: FinishWithResultParams): Promise<Result>
```

FA call the interface to destroy itself and set the result as parameters.

**起始版本：** 5

**废弃版本：** 8

**替代接口：** ohos.ability.featureAbility.FeatureAbility#terminateSelfWithResult

**系统能力：** SystemCapability.ArkUI.ArkUI.Lite

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| param | FinishWithResultParams | 是 | Indicates the request param. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;Result> | A Promise object is returned, which contains the result whether to callback successfully. |

## getDeviceList

```TypeScript
static getDeviceList(flag: number): Promise<Result>
```

Get device information list.

**起始版本：** 5

**废弃版本：** 8

**系统能力：** SystemCapability.ArkUI.ArkUI.Lite

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| flag | number | 是 | Default 0, get the information list of all devices in the network. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;Result> | A Promise object is returned, which contains the result whether the device information list is obtained successfully. |

## sendMsg

```TypeScript
static sendMsg(options: SendMessageOptions): void
```

Sends messages to the destination device.

**起始版本：** 5

**废弃版本：** 8

**系统能力：** SystemCapability.ArkUI.ArkUI.Lite

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| options | SendMessageOptions | 是 | Options. |

## startAbility

```TypeScript
static startAbility(request: RequestParams): Promise<Result>
```

Start a FA without callback result.

**起始版本：** 5

**废弃版本：** 8

**替代接口：** ohos.ability.featureAbility.FeatureAbility#startAbility

**系统能力：** SystemCapability.ArkUI.ArkUI.Lite

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| request | RequestParams | 是 | Indicates the request param. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;Result> | A Promise object is returned, which contains the result of whether to call Ability's interface successfully. |

## startAbilityForResult

```TypeScript
static startAbilityForResult(request: RequestParams): Promise<Result>
```

Start a FA with callback result.

**起始版本：** 5

**废弃版本：** 8

**替代接口：** ohos.ability.featureAbility.FeatureAbility#startAbilityForResult

**系统能力：** SystemCapability.ArkUI.ArkUI.Lite

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| request | RequestParams | 是 | Indicates the request param. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;Result> | A Promise object is returned, which contains the result of the data FA returned. |

## subscribeAbilityEvent

```TypeScript
static subscribeAbilityEvent(param: SubscribeAbilityEventParam, func: Function): Promise<string>
```

Subscribe to events of an AA.

**起始版本：** 5

**废弃版本：** 8

**系统能力：** SystemCapability.ArkUI.ArkUI.Lite

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| param | SubscribeAbilityEventParam | 是 | Indicates the request param. |
| func | Function | 是 | Indicates the event reporting callback. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;string> | A Promise object is returned, which contains the result data returned by the AA. The result is a JSON string. |

## subscribeMsg

```TypeScript
static subscribeMsg(options: SubscribeMessageOptions): void
```

Listens for messages sent from other devices.

**起始版本：** 5

**废弃版本：** 8

**系统能力：** SystemCapability.ArkUI.ArkUI.Lite

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| options | SubscribeMessageOptions | 是 | Options. |

## unsubscribeAbilityEvent

```TypeScript
static unsubscribeAbilityEvent(param: SubscribeAbilityEventParam): Promise<string>
```

Unsubscribe from events of an AA.

**起始版本：** 5

**废弃版本：** 8

**系统能力：** SystemCapability.ArkUI.ArkUI.Lite

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| param | SubscribeAbilityEventParam | 是 | Indicates the request param. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;string> | A Promise object is returned, which contains the result data returned by the AA. The result is a JSON string. |

## unsubscribeMsg

```TypeScript
static unsubscribeMsg(): void
```

Cancel the listening for messages sent from other devices.

**起始版本：** 5

**废弃版本：** 8

**系统能力：** SystemCapability.ArkUI.ArkUI.Lite

