# GeoAddress

Data struct describes geographic locations.

**起始版本：** 7

**废弃版本：** 9

**替代接口：** ohos.geoLocationManager/geoLocationManager.GeoAddress

**需要权限：** 

 ohos.permission.LOCATION

**系统能力：** SystemCapability.Location.Location.Geocoder

## 导入模块

```TypeScript
import { geolocation } from '@kit.LocationKit';
```

## subLocality

```TypeScript
subLocality?: string
```

Indicates sub-locality information.

**类型：** string

**起始版本：** 7

**废弃版本：** 9

**替代接口：** ohos.geoLocationManager/geoLocationManager.GeoAddress#subLocality

**需要权限：** 

 ohos.permission.LOCATION

**系统能力：** SystemCapability.Location.Location.Geocoder

## postalCode

```TypeScript
postalCode?: string
```

Indicates postal code.

**类型：** string

**起始版本：** 7

**废弃版本：** 9

**替代接口：** ohos.geoLocationManager/geoLocationManager.GeoAddress#postalCode

**需要权限：** 

 ohos.permission.LOCATION

**系统能力：** SystemCapability.Location.Location.Geocoder

## latitude

```TypeScript
latitude?: number
```

Indicates latitude information. A positive value indicates north latitude, and a negative value indicates south latitude.

**类型：** number

**起始版本：** 7

**废弃版本：** 9

**替代接口：** ohos.geoLocationManager/geoLocationManager.GeoAddress#latitude

**需要权限：** 

 ohos.permission.LOCATION

**系统能力：** SystemCapability.Location.Location.Geocoder

## locality

```TypeScript
locality?: string
```

Indicates locality information.

**类型：** string

**起始版本：** 7

**废弃版本：** 9

**替代接口：** ohos.geoLocationManager/geoLocationManager.GeoAddress#locality

**需要权限：** 

 ohos.permission.LOCATION

**系统能力：** SystemCapability.Location.Location.Geocoder

## administrativeArea

```TypeScript
administrativeArea?: string
```

Indicates administrative region name.

**类型：** string

**起始版本：** 7

**废弃版本：** 9

**替代接口：** ohos.geoLocationManager/geoLocationManager.GeoAddress#administrativeArea

**需要权限：** 

 ohos.permission.LOCATION

**系统能力：** SystemCapability.Location.Location.Geocoder

## locale

```TypeScript
locale?: string
```

Indicates language used for the location description. zh indicates Chinese, and en indicates English.

**类型：** string

**起始版本：** 7

**废弃版本：** 9

**替代接口：** ohos.geoLocationManager/geoLocationManager.GeoAddress#locale

**需要权限：** 

 ohos.permission.LOCATION

**系统能力：** SystemCapability.Location.Location.Geocoder

## descriptions

```TypeScript
descriptions?: Array<string>
```

Indicates additional information.

**类型：** Array<string>

**起始版本：** 7

**废弃版本：** 9

**替代接口：** ohos.geoLocationManager/geoLocationManager.GeoAddress#descriptions

**需要权限：** 

 ohos.permission.LOCATION

**系统能力：** SystemCapability.Location.Location.Geocoder

## roadName

```TypeScript
roadName?: string
```

Indicates road name.

**类型：** string

**起始版本：** 7

**废弃版本：** 9

**替代接口：** ohos.geoLocationManager/geoLocationManager.GeoAddress#roadName

**需要权限：** 

 ohos.permission.LOCATION

**系统能力：** SystemCapability.Location.Location.Geocoder

## phoneNumber

```TypeScript
phoneNumber?: string
```

Indicates phone number.

**类型：** string

**起始版本：** 7

**废弃版本：** 9

**替代接口：** ohos.geoLocationManager/geoLocationManager.GeoAddress#phoneNumber

**需要权限：** 

 ohos.permission.LOCATION

**系统能力：** SystemCapability.Location.Location.Geocoder

## subRoadName

```TypeScript
subRoadName?: string
```

Indicates auxiliary road information.

**类型：** string

**起始版本：** 7

**废弃版本：** 9

**替代接口：** ohos.geoLocationManager/geoLocationManager.GeoAddress#subRoadName

**需要权限：** 

 ohos.permission.LOCATION

**系统能力：** SystemCapability.Location.Location.Geocoder

## addressUrl

```TypeScript
addressUrl?: string
```

Indicates website URL.

**类型：** string

**起始版本：** 7

**废弃版本：** 9

**替代接口：** ohos.geoLocationManager/geoLocationManager.GeoAddress#addressUrl

**需要权限：** 

 ohos.permission.LOCATION

**系统能力：** SystemCapability.Location.Location.Geocoder

## premises

```TypeScript
premises?: string
```

Indicates house information.

**类型：** string

**起始版本：** 7

**废弃版本：** 9

**替代接口：** ohos.geoLocationManager/geoLocationManager.GeoAddress#premises

**需要权限：** 

 ohos.permission.LOCATION

**系统能力：** SystemCapability.Location.Location.Geocoder

## countryCode

```TypeScript
countryCode?: string
```

Indicates country code.

**类型：** string

**起始版本：** 7

**废弃版本：** 9

**替代接口：** ohos.geoLocationManager/geoLocationManager.GeoAddress#countryCode

**需要权限：** 

 ohos.permission.LOCATION

**系统能力：** SystemCapability.Location.Location.Geocoder

## subAdministrativeArea

```TypeScript
subAdministrativeArea?: string
```

Indicates sub-administrative region name.

**类型：** string

**起始版本：** 7

**废弃版本：** 9

**替代接口：** ohos.geoLocationManager/geoLocationManager.GeoAddress#subAdministrativeArea

**需要权限：** 

 ohos.permission.LOCATION

**系统能力：** SystemCapability.Location.Location.Geocoder

## countryName

```TypeScript
countryName?: string
```

Indicates country name.

**类型：** string

**起始版本：** 7

**废弃版本：** 9

**替代接口：** ohos.geoLocationManager/geoLocationManager.GeoAddress#countryName

**需要权限：** 

 ohos.permission.LOCATION

**系统能力：** SystemCapability.Location.Location.Geocoder

## descriptionsSize

```TypeScript
descriptionsSize?: number
```

Indicates the amount of additional descriptive information.

**类型：** number

**起始版本：** 7

**废弃版本：** 9

**替代接口：** ohos.geoLocationManager/geoLocationManager.GeoAddress#descriptionsSize

**需要权限：** 

 ohos.permission.LOCATION

**系统能力：** SystemCapability.Location.Location.Geocoder

## placeName

```TypeScript
placeName?: string
```

Indicates landmark of the location.

**类型：** string

**起始版本：** 7

**废弃版本：** 9

**替代接口：** ohos.geoLocationManager/geoLocationManager.GeoAddress#placeName

**需要权限：** 

 ohos.permission.LOCATION

**系统能力：** SystemCapability.Location.Location.Geocoder

## longitude

```TypeScript
longitude?: number
```

Indicates longitude information. A positive value indicates east longitude , and a negative value indicates west longitude .

**类型：** number

**起始版本：** 7

**废弃版本：** 9

**替代接口：** ohos.geoLocationManager/geoLocationManager.GeoAddress#longitude

**需要权限：** 

 ohos.permission.LOCATION

**系统能力：** SystemCapability.Location.Location.Geocoder

