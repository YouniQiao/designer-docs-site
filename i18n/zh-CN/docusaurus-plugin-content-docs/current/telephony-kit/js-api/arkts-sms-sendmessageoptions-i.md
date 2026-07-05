# SendMessageOptions

Provides the options (including callbacks) for sending an SMS message.

**起始版本：** 6

**系统能力：** SystemCapability.Telephony.SmsMms

## 导入模块

```TypeScript
import { sms } from '@kit.TelephonyKit';
```

## destinationPort

```TypeScript
destinationPort?: int
```

If send data message, destinationPort is mandatory. Otherwise is optional.

**类型：** int

**起始版本：** 6

**系统能力：** SystemCapability.Telephony.SmsMms

## deliveryCallback

```TypeScript
deliveryCallback?: AsyncCallback<IDeliveryShortMessageCallback>
```

Indicates the callback invoked after the SMS message is delivered.

**类型：** AsyncCallback<IDeliveryShortMessageCallback>

**起始版本：** 6

**系统能力：** SystemCapability.Telephony.SmsMms

## sendCallback

```TypeScript
sendCallback?: AsyncCallback<ISendShortMessageCallback>
```

Indicates the callback invoked after the SMS message is sent.

**类型：** AsyncCallback<ISendShortMessageCallback>

**起始版本：** 6

**系统能力：** SystemCapability.Telephony.SmsMms

## slotId

```TypeScript
slotId: int
```

Indicates the ID of the SIM card slot used for sending the SMS message.

**类型：** int

**起始版本：** 6

**系统能力：** SystemCapability.Telephony.SmsMms

## serviceCenter

```TypeScript
serviceCenter?: string
```

Indicates the SMSC address. If the value is {@code null}, the default SMSC address of the SIM card.

**类型：** string

**起始版本：** 6

**系统能力：** SystemCapability.Telephony.SmsMms

## destinationHost

```TypeScript
destinationHost: string
```

Indicates the address to which the SMS message is sent.

**类型：** string

**起始版本：** 6

**系统能力：** SystemCapability.Telephony.SmsMms

## content

```TypeScript
content: string | Array<int>
```

If the content is a string, this is a short message. If the content is a byte array, this is a data message.

**类型：** string | Array<int>

**起始版本：** 6

**系统能力：** SystemCapability.Telephony.SmsMms

