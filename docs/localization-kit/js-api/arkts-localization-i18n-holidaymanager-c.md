# HolidayManager

Provides holiday data parsing capabilities, such as determining holidays and obtaining the holiday list of a specified year.

**Since:** 11

<!--Device-i18n-export class HolidayManager--><!--Device-i18n-export class HolidayManager-End-->

**System capability:** SystemCapability.Global.I18n

## Modules to Import

```TypeScript
import { i18n } from '@kit.LocalizationKit';
```

## constructor

```TypeScript
constructor(icsPath: String)
```

Creates a **HolidayManager** object for parsing holiday data.

**Since:** 11

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-HolidayManager-constructor(icsPath: String)--><!--Device-HolidayManager-constructor(icsPath: String)-End-->

**System capability:** SystemCapability.Global.I18n

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| icsPath | [String](../../apis-na/arkts-apis/arkts-na-lib-es2015-iterable-string-i.md) | Yes | Path of the **.ics** file with the read permission granted for applications.iCalendar is a standard Internet calendar format for storing calendar data. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;2.Incorrect parameter types. |
| [890001](../errorcode-i18n.md#890001-parameter-error) | Invalid parameter. Possible causes: Parameter verification failed. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';
import { i18n } from '@kit.LocalizationKit';

try {
  // Replace /system/lib/US.ics with the actual ICS file path.
  let holidayManager = new i18n.HolidayManager('/system/lib/US.ics');
} catch (error) {
  let err: BusinessError = error as BusinessError;
  console.error(`call i18n.HolidayManager failed, error code: ${err.code}, message: ${err.message}.`);
}

```

## getHolidayInfoItemArray

```TypeScript
getHolidayInfoItemArray(year?: number): Array<HolidayInfoItem>
```

Obtains the holiday information list of the specified year.

**Since:** 11

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-HolidayManager-getHolidayInfoItemArray(year?: int): Array<HolidayInfoItem>--><!--Device-HolidayManager-getHolidayInfoItemArray(year?: int): Array<HolidayInfoItem>-End-->

**System capability:** SystemCapability.Global.I18n

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| year | number | No | Specified year, for example, 2023.The default value is the current year. |

**Return value:**

| Type | Description |
| --- | --- |
| [Array](../../apis-na/arkts-apis/arkts-na-lib-es5-array-i.md)<HolidayInfoItem> | Holiday information list. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;2.Incorrect parameter types. |
| [890001](../errorcode-i18n.md#890001-parameter-error) | Invalid parameter. Possible causes: Parameter verification failed. |

## isHoliday

```TypeScript
isHoliday(date?: Date): boolean
```

Determines whether the specified date is a holiday.

**Since:** 11

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-HolidayManager-isHoliday(date?: Date): boolean--><!--Device-HolidayManager-isHoliday(date?: Date): boolean-End-->

**System capability:** SystemCapability.Global.I18n

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| date | [Date](../../apis-na/arkts-apis/arkts-na-lib-es5-date-i.md) | No | Date and time. Note: The month starts from **0**. For example, **0** indicates January.The default value is the current date. |

**Return value:**

| Type | Description |
| --- | --- |
| boolean | **true** if the specified date is a holiday, and **false** otherwise. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;2.Incorrect parameter types. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';
import { i18n } from '@kit.LocalizationKit';

try {
  // Replace /system/lib/US.ics with the actual ICS file path.
  let holidayManager: i18n.HolidayManager = new i18n.HolidayManager('/system/lib/US.ics');
  let isHoliday: boolean = holidayManager.isHoliday();
  isHoliday = holidayManager.isHoliday(new Date(2023, 5, 25)); // The date is 2023.06.25.
} catch (error) {
  let err: BusinessError = error as BusinessError;
  console.error(`call holidayManager.isHoliday failed, error code: ${err.code}, message: ${err.message}.`);
}

```

