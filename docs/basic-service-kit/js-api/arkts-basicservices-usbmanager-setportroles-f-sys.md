# setPortRoles (System API)

## Modules to Import

```TypeScript
import { usbManager } from '@kit.BasicServicesKit';
```

## setPortRoles

```TypeScript
function setPortRoles(portId: number, powerRole: PowerRoleType, dataRole: DataRoleType): Promise<void>
```

Sets the role types supported by a specified port, which can be **powerRole** (for charging) and **dataRole** (for data transfer). This API uses a promise to return the result.

**Since:** 9

**Deprecated since:** 12

**Substitutes:** setPortRoleTypes(portId:

<!--Device-usbManager-function setPortRoles(portId: number, powerRole: PowerRoleType, dataRole: DataRoleType): Promise<void>--><!--Device-usbManager-function setPortRoles(portId: number, powerRole: PowerRoleType, dataRole: DataRoleType): Promise<void>-End-->

**System capability:** SystemCapability.USB.USBManager

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| portId | number | Yes | Port number. |
| powerRole | [PowerRoleType](arkts-basicservices-usbmanager-powerroletype-e-sys.md) | Yes | Role for charging. |
| dataRole | [DataRoleType](arkts-basicservices-usbmanager-dataroletype-e-sys.md) | Yes | Role for data transfer. |

**Return value:**

| Type | Description |
| --- | --- |
| [Promise](../../apis-na/arkts-apis/arkts-na-lib-es5-promise-i.md)<void> | Promise used to return the result. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes:* <br>1.Mandatory parameters are left unspecified.* <br>2.Incorrect parameter types. |

