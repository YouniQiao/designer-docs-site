# on

## on('streamChange')

```TypeScript
function on(type: 'streamChange', callback: Callback<number>): void
```

Subscribe Wi-Fi stream change events.

**起始版本：** 9

**需要权限：** 

 ohos.permission.MANAGE_WIFI_CONNECTION

**系统能力：** SystemCapability.Communication.WiFi.STA

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'streamChange' | 是 | event name. |
| callback | Callback&lt;number> | 是 | the callback of on, 1: stream down, 2: stream up, 3: stream bidirectional |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied. |
| 202 | System API is not allowed called by Non-system application. |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.  2. Incorrect parameter types. |
| 801 | Capability not supported. |
| 2501000 | Operation failed. |

## on('deviceConfigChange')

```TypeScript
function on(type: 'deviceConfigChange', callback: Callback<number>): void
```

Subscribe Wi-Fi device config change events.

**起始版本：** 9

**需要权限：** 

 ohos.permission.GET_WIFI_INFO

**系统能力：** SystemCapability.Communication.WiFi.STA

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'deviceConfigChange' | 是 | event name. |
| callback | Callback&lt;number> | 是 | the callback of on, 0: config is added, 1: config is changed, 2: config is removed. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied. |
| 202 | System API is not allowed called by Non-system application. |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.  2. Incorrect parameter types. |
| 801 | Capability not supported. |
| 2501000 | Operation failed. |

## on('hotspotStaJoin')

```TypeScript
function on(type: 'hotspotStaJoin', callback: Callback<StationInfo>): void
```

Subscribe Wi-Fi hotspot sta join events.

**起始版本：** 9

**需要权限：** 

 ohos.permission.MANAGE_WIFI_HOTSPOT

**系统能力：** SystemCapability.Communication.WiFi.AP.Core

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'hotspotStaJoin' | 是 | event name. |
| callback | Callback&lt;StationInfo> | 是 | the callback of on |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied. |
| 202 | System API is not allowed called by Non-system application. |
| 401 | Invalid parameters. Possible causes: 1. Mandatory parameters are left unspecified.  2. Incorrect parameter types. |
| 801 | Capability not supported. |
| 2601000 | Operation failed. |

## on('hotspotStaLeave')

```TypeScript
function on(type: 'hotspotStaLeave', callback: Callback<StationInfo>): void
```

Subscribe Wi-Fi hotspot sta leave events.

**起始版本：** 9

**需要权限：** 

 ohos.permission.MANAGE_WIFI_HOTSPOT

**系统能力：** SystemCapability.Communication.WiFi.AP.Core

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'hotspotStaLeave' | 是 | event name. |
| callback | Callback&lt;StationInfo> | 是 | the callback of on |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied. |
| 202 | System API is not allowed called by Non-system application. |
| 401 | Invalid parameters. Possible causes: 1. Mandatory parameters are left unspecified.  2. Incorrect parameter types. |
| 801 | Capability not supported. |
| 2601000 | Operation failed. |

