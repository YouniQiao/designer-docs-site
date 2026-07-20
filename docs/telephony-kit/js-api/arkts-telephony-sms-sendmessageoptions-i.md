# SendMessageOptions

Provides the options (including callbacks) for sending an SMS message.

**Since:** 6

<!--Device-sms-export interface SendMessageOptions--><!--Device-sms-export interface SendMessageOptions-End-->

**System capability:** SystemCapability.Telephony.SmsMms

## Modules to Import

```TypeScript
import { sms } from '@kit.TelephonyKit';
```

## content

```TypeScript
content: string | Array<number>
```

If the content is a string, this is a short message. If the content is a byte array, this is a data message.

**Type:** string | Array<number>

**Since:** 6

<!--Device-SendMessageOptions-content: string | Array<int>--><!--Device-SendMessageOptions-content: string | Array<int>-End-->

**System capability:** SystemCapability.Telephony.SmsMms

## deliveryCallback

```TypeScript
deliveryCallback?: AsyncCallback<IDeliveryShortMessageCallback>
```

Indicates the callback invoked after the SMS message is delivered.

**Type:** AsyncCallback<IDeliveryShortMessageCallback>

**Since:** 6

<!--Device-SendMessageOptions-deliveryCallback?: AsyncCallback<IDeliveryShortMessageCallback>--><!--Device-SendMessageOptions-deliveryCallback?: AsyncCallback<IDeliveryShortMessageCallback>-End-->

**System capability:** SystemCapability.Telephony.SmsMms

## destinationHost

```TypeScript
destinationHost: string
```

Indicates the address to which the SMS message is sent.

**Type:** string

**Since:** 6

<!--Device-SendMessageOptions-destinationHost: string--><!--Device-SendMessageOptions-destinationHost: string-End-->

**System capability:** SystemCapability.Telephony.SmsMms

## destinationPort

```TypeScript
destinationPort?: number
```

If send data message, destinationPort is mandatory. Otherwise is optional.

**Type:** number

**Since:** 6

<!--Device-SendMessageOptions-destinationPort?: int--><!--Device-SendMessageOptions-destinationPort?: int-End-->

**System capability:** SystemCapability.Telephony.SmsMms

## sendCallback

```TypeScript
sendCallback?: AsyncCallback<ISendShortMessageCallback>
```

Indicates the callback invoked after the SMS message is sent.

**Type:** AsyncCallback<ISendShortMessageCallback>

**Since:** 6

<!--Device-SendMessageOptions-sendCallback?: AsyncCallback<ISendShortMessageCallback>--><!--Device-SendMessageOptions-sendCallback?: AsyncCallback<ISendShortMessageCallback>-End-->

**System capability:** SystemCapability.Telephony.SmsMms

## serviceCenter

```TypeScript
serviceCenter?: string
```

Indicates the SMSC address. If the value is {@code null}, the default SMSC address of the SIM card.

**Type:** string

**Since:** 6

<!--Device-SendMessageOptions-serviceCenter?: string--><!--Device-SendMessageOptions-serviceCenter?: string-End-->

**System capability:** SystemCapability.Telephony.SmsMms

## slotId

```TypeScript
slotId: number
```

Indicates the ID of the SIM card slot used for sending the SMS message.

**Type:** number

**Since:** 6

<!--Device-SendMessageOptions-slotId: int--><!--Device-SendMessageOptions-slotId: int-End-->

**System capability:** SystemCapability.Telephony.SmsMms

