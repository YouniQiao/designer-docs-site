# TimeZone

Provides time zone management capabilities, such as time zone name translation, offset retrieval, and transition rule retrieval.

**起始版本：** 7

**系统能力：** SystemCapability.Global.I18n

## 导入模块

```TypeScript
import { i18n } from '@kit.LocalizationKit';
```

## getAppDefaultTimeZone

```TypeScript
static getAppDefaultTimeZone(): TimeZone
```

Obtains the default time zone object used by an application. If the default time zone has been set by calling setAppDefaultTimeZoneById, the default time zone object is returned. Otherwise, the system time zone object is returned.

**起始版本：** 26.0.0

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Global.I18n

**返回值：**

| 类型 | 说明 |
| --- | --- |
| TimeZone | TimeZone object, first set by application, then system time zone, last GMT time zone. |

**示例：**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';
import { i18n } from '@kit.LocalizationKit';

try {
  let zoneID: string = 'Asia/Shanghai';
  i18n.TimeZone.setAppDefaultTimeZoneById(zoneID);
  console.info('setAppDefaultTimeZoneById success.');
} catch (error) {
  let err: BusinessError = error as BusinessError;
  console.error(`call TimeZone.setAppDefaultTimeZoneById failed, error code: ${err.code}, message: ${err.message}.`);
}
let timeZone: i18n.TimeZone = i18n.TimeZone.getAppDefaultTimeZone();
let id: string = timeZone.getID();
console.info(`getAppDefaultTimeZone success, time zone id: ${id}`);

```

## getAvailableIDs

```TypeScript
static getAvailableIDs(): Array<string>
```

Obtains the list of time zone IDs supported by the system.

**起始版本：** 9

**原子化服务API：** 从API version 12开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Global.I18n

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Array&lt;string> | List of time zone IDs supported by the system. |

**示例：**

```TypeScript
import { i18n } from '@kit.LocalizationKit';

// ids = ['America/Adak', 'America/Anchorage', 'America/Bogota', 'America/Denver', 'America/Los_Angeles', 'America/Montevideo', 'America/Santiago', 'America/Sao_Paulo', 'Asia/Ashgabat', 'Asia/Hovd', 'Asia/Jerusalem', 'Asia/Magadan', 'Asia/Omsk', 'Asia/Shanghai', 'Asia/Tokyo', 'Asia/Yerevan', 'Atlantic/Cape_Verde', 'Australia/Lord_Howe', 'Europe/Dublin', 'Europe/London', 'Europe/Moscow', 'Pacific/Auckland', 'Pacific/Easter', 'Pacific/Pago-Pago']
let ids: Array<string> = i18n.TimeZone.getAvailableIDs();

```

## getAvailableZoneCityIDs

```TypeScript
static getAvailableZoneCityIDs(): Array<string>
```

Obtains the list of time zone city IDs supported by the system.

**起始版本：** 9

**原子化服务API：** 从API version 12开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Global.I18n

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Array&lt;string> | List of time zone city IDs supported by the system. |

**示例：**

```TypeScript
import { i18n } from '@kit.LocalizationKit';

// cityIDs = ['Auckland', 'Magadan', 'Lord Howe Island', 'Tokyo', 'Shanghai', 'Hovd', 'Omsk', 'Ashgabat', 'Yerevan', 'Moscow', 'Tel Aviv', 'Dublin', 'London', 'Praia', 'Montevideo', 'Brasília', 'Santiago', 'Bogotá', 'Easter Island', 'Salt Lake City', 'Los Angeles', 'Anchorage', 'Adak', 'Pago Pago']
let cityIDs: Array<string> = i18n.TimeZone.getAvailableZoneCityIDs();

```

## getCityDisplayName

```TypeScript
static getCityDisplayName(cityID: string, locale: string): string
```

Obtains time zone city display name in the specified language.

**起始版本：** 9

**原子化服务API：** 从API version 12开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Global.I18n

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| cityID | string | 是 | Time zone city ID. |
| locale | string | 是 | [System locale](docroot://internationalization/i18n-locale-culture.md#how-it-works),  which consists of the language, script, and country/region. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| string | Time zone city display name in the specified language. |

**示例：**

```TypeScript
import { i18n } from '@kit.LocalizationKit';

let displayName: string = i18n.TimeZone.getCityDisplayName('Shanghai', 'zh-CN'); // displayName = '上海 (中国)'

```

## getDisplayName

```TypeScript
getDisplayName(locale?: string, isDST?: boolean): string
```

Obtains time zone display name in the specified language.

**起始版本：** 7

**原子化服务API：** 从API version 12开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Global.I18n

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| locale | string | 否 |  |
| isDST | boolean | 否 |  |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| string | Time zone display name in the specified language. |

**示例：**

```TypeScript
import { i18n } from '@kit.LocalizationKit';

let timezone: i18n.TimeZone = i18n.getTimeZone('Asia/Shanghai');
let timezoneName: string = timezone.getDisplayName('zh-CN', false); // timezoneName = '中国标准时间'

```

## getID

```TypeScript
getID(): string
```

Obtains the ID of the specified **TimeZone** object.

**起始版本：** 7

**原子化服务API：** 从API version 12开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Global.I18n

**返回值：**

| 类型 | 说明 |
| --- | --- |
| string | Time zone ID corresponding to the TimeZone object. |

**示例：**

```TypeScript
import { i18n } from '@kit.LocalizationKit';

let timezone: i18n.TimeZone = i18n.getTimeZone('Asia/Shanghai');
let timezoneID: string = timezone.getID(); // timezoneID = 'Asia/Shanghai'

```

## getOffset

```TypeScript
getOffset(date?: double): int
```

Obtains the offset of the specified time zone at the specified time.

**起始版本：** 7

**原子化服务API：** 从API version 12开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Global.I18n

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| date | double | 否 |  |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| int | Time zone offset, in milliseconds. When the DST is used, the time zone offset is the raw time  zone offset plus the DST offset. |

**示例：**

```TypeScript
import { i18n } from '@kit.LocalizationKit';

let timezone: i18n.TimeZone = i18n.getTimeZone('Asia/Shanghai');
let offset: number = timezone.getOffset(1234567890); // offset = 28800000

```

## getRawOffset

```TypeScript
getRawOffset(): int
```

Obtains the raw offset of the specified time zone.

**起始版本：** 7

**原子化服务API：** 从API version 12开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Global.I18n

**返回值：**

| 类型 | 说明 |
| --- | --- |
| int | Raw offset of the time zone, in milliseconds. |

**示例：**

```TypeScript
import { i18n } from '@kit.LocalizationKit';

let timezone: i18n.TimeZone = i18n.getTimeZone('Asia/Shanghai');
let offset: number = timezone.getRawOffset(); // offset = 28800000

```

## getTimezoneFromCity

```TypeScript
static getTimezoneFromCity(cityID: string): TimeZone
```

Creates a **TimeZone** object corresponding to the specified time zone city.

**起始版本：** 9

**原子化服务API：** 从API version 12开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Global.I18n

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| cityID | string | 是 | Time zone city ID. The value must be a time zone city ID supported by the system. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| TimeZone | TimeZone object corresponding to the specified time zone city ID. |

**示例：**

```TypeScript
import { i18n } from '@kit.LocalizationKit';

let timezone: i18n.TimeZone = i18n.TimeZone.getTimezoneFromCity('Shanghai');

```

## getTimezonesByLocation

```TypeScript
static getTimezonesByLocation(longitude: double, latitude: double): Array<TimeZone>
```

Creates an array of **TimeZone** objects corresponding to the specified location.

**起始版本：** 10

**原子化服务API：** 从API version 12开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Global.I18n

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| longitude | double | 是 | Longitude. The value range is  [-180, 179.9). A positive value is used for east longitude and a negative value is used for west longitude. |
| latitude | double | 是 | Latitude. The value range is  [-90, 89.9). A positive value is used for north latitude and a negative value is used for south latitude. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Array&lt;TimeZone> | TimeZone objects corresponding to the specified location. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;  2.Incorrect parameter types. |
| 890001 | Invalid parameter. Possible causes: Parameter verification failed. |

**示例：**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';
import { i18n } from '@kit.LocalizationKit';

try {
  let timezoneArray: Array<i18n.TimeZone> = i18n.TimeZone.getTimezonesByLocation(-118.1, 34.0);
} catch (error) {
  let err: BusinessError = error as BusinessError;
  console.error(`call TimeZone.getTimezonesByLocation failed, error code: ${err.code}, message: ${err.message}.`);
}

```

## getZoneRules

```TypeScript
public getZoneRules(): ZoneRules
```

Obtains the time zone transition rules. For details about the time zone transition logic, see [DST Transition](docroot://internationalization/i18n-dst-transition.md).

**起始版本：** 20

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Global.I18n

**返回值：**

| 类型 | 说明 |
| --- | --- |
| ZoneRules | Time zone transition rule, including the transition time and the offset before and after  the transition. |

## isDaylightSavingTime

```TypeScript
public isDaylightSavingTime(date: Date): boolean
```

Check if the given date use daylight saving time. The calculation will be based on the matched time zone rules.

**起始版本：** 26.0.0

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Global.I18n

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| date | Date | 是 | Date and time. Note: The month starts from 0, indicating January. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| boolean | true if the date use daylight saving time, and false otherwise. |

## setAppDefaultTimeZoneById

```TypeScript
static setAppDefaultTimeZoneById(zoneID: string): void
```

Sets the default time zone for the current app, the value will be used on the application's runtime lifecycle. When the date time formatting function is used, the default time zone ID of the app is used preferentially.

**起始版本：** 26.0.0

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Global.I18n

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| zoneID | string | 是 | Time zone ID that set default for app. for example, "Asia/Shanghai".  Time zone ID supported by the system |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 8900001 | Invalid parameter. Possible causes: Parameter verification failed. |

**示例：**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';
import { i18n } from '@kit.LocalizationKit';

try {
  let zoneID: string = 'Asia/Shanghai';
  i18n.TimeZone.setAppDefaultTimeZoneById(zoneID);
  console.info('setAppDefaultTimeZoneById success.');
} catch (error) {
  let err: BusinessError = error as BusinessError;
  console.error(`call TimeZone.setAppDefaultTimeZoneById failed, error code: ${err.code}, message: ${err.message}.`);
}

```

