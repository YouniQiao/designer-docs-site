# SendMessageOptions

Provides the options (including callbacks) for sending an SMS message.

**Since:** 6

**System capability:** SystemCapability.Telephony.SmsMms

## Modules to Import

```TypeScript
import { sms } from '@kit.TelephonyKit';
```

## destinationPort

```TypeScript
destinationPort?: int
```

If send data message, destinationPort is mandatory. Otherwise is optional.

**Type:** int

**Since:** 6

**System capability:** SystemCapability.Telephony.SmsMms

## deliveryCallback

```TypeScript
deliveryCallback?: AsyncCallback<IDeliveryShortMessageCallback>
```

Indicates the callback invoked after the SMS message is delivered.

**Type:** AsyncCallback<IDeliveryShortMessageCallback>

**Since:** 6

**System capability:** SystemCapability.Telephony.SmsMms

## sendCallback

```TypeScript
sendCallback?: AsyncCallback<ISendShortMessageCallback>
```

Indicates the callback invoked after the SMS message is sent.

**Type:** AsyncCallback<ISendShortMessageCallback>

**Since:** 6

**System capability:** SystemCapability.Telephony.SmsMms

## slotId

```TypeScript
slotId: int
```

Indicates the ID of the SIM card slot used for sending the SMS message.

**Type:** int

**Since:** 6

**System capability:** SystemCapability.Telephony.SmsMms

## serviceCenter

```TypeScript
serviceCenter?: string
```

Indicates the SMSC address. If the value is {@code null}, the default SMSC address of the SIM card.

**Type:** string

**Since:** 6

**System capability:** SystemCapability.Telephony.SmsMms

## destinationHost

```TypeScript
destinationHost: string
```

Indicates the address to which the SMS message is sent.

**Type:** string

**Since:** 6

**System capability:** SystemCapability.Telephony.SmsMms

## content

```TypeScript
content: string | Array<int>
```

If the content is a string, this is a short message. If the content is a byte array, this is a data message.

**Type:** string | Array<int>

**Since:** 6

**System capability:** SystemCapability.Telephony.SmsMms

