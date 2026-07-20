# createGroup

## Modules to Import

```TypeScript
import { request } from '@kit.BasicServicesKit';
```

## createGroup

```TypeScript
function createGroup(config: GroupConfig): Promise<string>
```

Creates a group based on [GroupConfig](arkts-basicservices-agent-groupconfig-i.md). This API uses a promise to return the result.

**Since:** 15

<!--Device-agent-function createGroup(config: GroupConfig): Promise<string>--><!--Device-agent-function createGroup(config: GroupConfig): Promise<string>-End-->

**System capability:** SystemCapability.Request.FileTransferAgent

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| config | [GroupConfig](arkts-basicservices-agent-groupconfig-i.md) | Yes | Group options for a download task. |

**Return value:**

| Type | Description |
| --- | --- |
| [Promise](../../apis-na/arkts-apis/arkts-na-lib-es5-promise-i.md)<string> | Promise used to return the ID of the created group. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes:<br> 1. Missing mandatory parameters.<br> 2. Incorrect parameter type.<br> 3. Parameter verification failed. |
| [13400003](../../apis-basic-services-kit/errorcode-request.md#13400003-service-error) | Task service ability error. |

