# getISOCountryCodeForNetworkSync

## getISOCountryCodeForNetworkSync

```TypeScript
function getISOCountryCodeForNetworkSync(slotId: int): string
```

Obtains the ISO-defined country code of the country where the registered network is deployed.

**起始版本：** 10

**系统能力：** SystemCapability.Telephony.CoreService

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| slotId | int | 是 | Indicates the card slot index number,  ranging from 0 to the maximum card slots supported by the device. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| string | Returns the country code defined in ISO 3166-2.  Returns an empty string if the device is not registered with any network. |

**示例：**

```TypeScript
let slotId: number = 0;
let countryISO: string = radio.getISOCountryCodeForNetworkSync(slotId);
console.info(`the country ISO is:` + countryISO);

```

