# FeatureAbility

**起始版本：** 5

**废弃版本：** 8

**替代接口：** ohos.ability.featureAbility.FeatureAbility

**系统能力：** SystemCapability.ArkUI.ArkUI.Lite

**系统接口：** 此接口为系统接口。

## sendMsg

```TypeScript
static sendMsg(options: SendMessageOptions): void
```

Sends messages to the destination device.

**起始版本：** 5

**废弃版本：** 8

**系统能力：** SystemCapability.ArkUI.ArkUI.Lite

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| options | SendMessageOptions | 是 | Options. |

## subscribeMsg

```TypeScript
static subscribeMsg(options: SubscribeMessageOptions): void
```

Listens for messages sent from other devices.

**起始版本：** 5

**废弃版本：** 8

**系统能力：** SystemCapability.ArkUI.ArkUI.Lite

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| options | SubscribeMessageOptions | 是 | Options. |

## unsubscribeMsg

```TypeScript
static unsubscribeMsg(): void
```

Cancel the listening for messages sent from other devices.

**起始版本：** 5

**废弃版本：** 8

**系统能力：** SystemCapability.ArkUI.ArkUI.Lite

**系统接口：** 此接口为系统接口。

