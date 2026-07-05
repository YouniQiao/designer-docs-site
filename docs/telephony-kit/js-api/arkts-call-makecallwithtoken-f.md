# makeCallWithToken

## makeCallWithToken

```TypeScript
function makeCallWithToken(phoneNumber: string, options?: MakeCallOptions): Promise<string>
```

Go to the dial screen and the called number is displayed.The authentication challenge value is returned.

**Since:** 26.0.0

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Applications.Contacts

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| phoneNumber | string | Yes | Indicates the called number. |
| options | MakeCallOptions | No |  |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;string> | Promise used to return access token by the makeCall. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 8300001 | Invalid parameter value. |
| 8300002 | Operation failed. Cannot connect to service. |
| 8300003 | System internal error. |
| 8300999 | Unknown error code. |

