# getPortList

## getPortList

```TypeScript
function getPortList(): Array<USBPort>
```

获取所有物理USB端口描述信息。开发者模式关闭时，如果没有设备接入，接口可能返回`undefined`，注意需要对接口返回值做判空处理。

**起始版本：** 12

**需要权限：** 

 ohos.permission.MANAGE_USB_CONFIG

**系统能力：** SystemCapability.USB.USBManager

**系统接口：** 此接口为系统接口。

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Array&lt;USBPort> | USB端口描述信息列表。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission verification failed. The application does not have the permission required to  call the API. [since 18] |
| 202 | Permission denied. Normal application do not have permission to use system api. |
| 801 | Capability not supported. [since 18] |
| 14400004 |  |

