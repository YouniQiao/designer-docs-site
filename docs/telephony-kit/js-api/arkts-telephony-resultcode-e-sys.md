# ResultCode (System API)

Result state.

**Since:** 18

**System capability:** SystemCapability.Telephony.CoreService.Esim

**System API:** This is a system API.

## RESULT_SOLVABLE_ERRORS

```TypeScript
RESULT_SOLVABLE_ERRORS = -2
```

Indicates that the user must resolve a solvable error.

**Since:** 18

**System capability:** SystemCapability.Telephony.CoreService.Esim

**System API:** This is a system API.

## RESULT_MUST_DISABLE_PROFILE

```TypeScript
RESULT_MUST_DISABLE_PROFILE = -1
```

Indicates that the active profile must be disabled to perform the operation.

**Since:** 18

**System capability:** SystemCapability.Telephony.CoreService.Esim

**System API:** This is a system API.

## RESULT_OK

```TypeScript
RESULT_OK = 0
```

Operation succeeded.

**Since:** 18

**System capability:** SystemCapability.Telephony.CoreService.Esim

**System API:** This is a system API.

## RESULT_GET_EID_FAILED

```TypeScript
RESULT_GET_EID_FAILED = 201
```

Failed to obtain the EID.

**Since:** 18

**System capability:** SystemCapability.Telephony.CoreService.Esim

**System API:** This is a system API.

## RESULT_ACTIVATION_CODE_CHANGED

```TypeScript
RESULT_ACTIVATION_CODE_CHANGED = 203
```

The activation code is changed after the end user confirms the operation.

**Since:** 18

**System capability:** SystemCapability.Telephony.CoreService.Esim

**System API:** This is a system API.

## RESULT_ACTIVATION_CODE_INVALID

```TypeScript
RESULT_ACTIVATION_CODE_INVALID = 204
```

The activation code is invalid.

**Since:** 18

**System capability:** SystemCapability.Telephony.CoreService.Esim

**System API:** This is a system API.

## RESULT_SMDP_ADDRESS_INVALID

```TypeScript
RESULT_SMDP_ADDRESS_INVALID = 205
```

The SM-DP+ server address is invalid.

**Since:** 18

**System capability:** SystemCapability.Telephony.CoreService.Esim

**System API:** This is a system API.

## RESULT_EUICC_INFO_INVALID

```TypeScript
RESULT_EUICC_INFO_INVALID = 206
```

Invalid eUICC information.

**Since:** 18

**System capability:** SystemCapability.Telephony.CoreService.Esim

**System API:** This is a system API.

## RESULT_TLS_HANDSHAKE_FAILED

```TypeScript
RESULT_TLS_HANDSHAKE_FAILED = 207
```

TLS handshake fails.

**Since:** 18

**System capability:** SystemCapability.Telephony.CoreService.Esim

**System API:** This is a system API.

## RESULT_CERTIFICATE_IO_ERROR

```TypeScript
RESULT_CERTIFICATE_IO_ERROR = 208
```

Certificate network connection error.

**Since:** 18

**System capability:** SystemCapability.Telephony.CoreService.Esim

**System API:** This is a system API.

## RESULT_CERTIFICATE_RESPONSE_TIMEOUT

```TypeScript
RESULT_CERTIFICATE_RESPONSE_TIMEOUT = 209
```

The certificate address is invalid or the response times out.

**Since:** 18

**System capability:** SystemCapability.Telephony.CoreService.Esim

**System API:** This is a system API.

## RESULT_AUTHENTICATION_FAILED

```TypeScript
RESULT_AUTHENTICATION_FAILED = 210
```

Authentication fails.

**Since:** 18

**System capability:** SystemCapability.Telephony.CoreService.Esim

**System API:** This is a system API.

## RESULT_RESPONSE_HTTP_FAILED

```TypeScript
RESULT_RESPONSE_HTTP_FAILED = 211
```

HTTP response fails.

**Since:** 18

**System capability:** SystemCapability.Telephony.CoreService.Esim

**System API:** This is a system API.

## RESULT_CONFIRMATION_CODE_INCORRECT

```TypeScript
RESULT_CONFIRMATION_CODE_INCORRECT = 212
```

Incorrect confirmation code.

**Since:** 18

**System capability:** SystemCapability.Telephony.CoreService.Esim

**System API:** This is a system API.

## RESULT_EXCEEDED_CONFIRMATION_CODE_TRY_LIMIT

```TypeScript
RESULT_EXCEEDED_CONFIRMATION_CODE_TRY_LIMIT = 213
```

The maximum number of confirmation code attempts is reached.

**Since:** 18

**System capability:** SystemCapability.Telephony.CoreService.Esim

**System API:** This is a system API.

## RESULT_NO_PROFILE_ON_SERVER

```TypeScript
RESULT_NO_PROFILE_ON_SERVER = 214
```

There is no profile on the server for download.

**Since:** 18

**System capability:** SystemCapability.Telephony.CoreService.Esim

**System API:** This is a system API.

## RESULT_TRANSACTION_ID_INVALID

```TypeScript
RESULT_TRANSACTION_ID_INVALID = 215
```

The transaction ID is invalid.

**Since:** 18

**System capability:** SystemCapability.Telephony.CoreService.Esim

**System API:** This is a system API.

## RESULT_SERVER_ADDRESS_INVALID

```TypeScript
RESULT_SERVER_ADDRESS_INVALID = 216
```

The server address is invalid.

**Since:** 18

**System capability:** SystemCapability.Telephony.CoreService.Esim

**System API:** This is a system API.

## RESULT_GET_BOUND_PROFILE_PACKAGE_FAILED

```TypeScript
RESULT_GET_BOUND_PROFILE_PACKAGE_FAILED = 217
```

Failed to obtain the bound profile package.

**Since:** 18

**System capability:** SystemCapability.Telephony.CoreService.Esim

**System API:** This is a system API.

## RESULT_USER_CANCEL_DOWNLOAD

```TypeScript
RESULT_USER_CANCEL_DOWNLOAD = 218
```

The download is canceled by the end user.

**Since:** 18

**System capability:** SystemCapability.Telephony.CoreService.Esim

**System API:** This is a system API.

## RESULT_SERVER_UNAVAILABLE

```TypeScript
RESULT_SERVER_UNAVAILABLE = 220
```

The carrier server is unavailable.

**Since:** 18

**System capability:** SystemCapability.Telephony.CoreService.Esim

**System API:** This is a system API.

## RESULT_PROFILE_NON_DELETE

```TypeScript
RESULT_PROFILE_NON_DELETE = 223
```

The profile is attached to a non-delete profile policy rule.

**Since:** 18

**System capability:** SystemCapability.Telephony.CoreService.Esim

**System API:** This is a system API.

## RESULT_SMDP_ADDRESS_INCORRECT

```TypeScript
RESULT_SMDP_ADDRESS_INCORRECT = 226
```

The authentication response server address does not match.

**Since:** 18

**System capability:** SystemCapability.Telephony.CoreService.Esim

**System API:** This is a system API.

## RESULT_ANALYZE_AUTHENTICATION_SERVER_RESPONSE_FAILED

```TypeScript
RESULT_ANALYZE_AUTHENTICATION_SERVER_RESPONSE_FAILED = 228
```

Failed to analyze the authentication server response.

**Since:** 18

**System capability:** SystemCapability.Telephony.CoreService.Esim

**System API:** This is a system API.

## RESULT_ANALYZE_AUTHENTICATION_CLIENT_RESPONSE_FAILED

```TypeScript
RESULT_ANALYZE_AUTHENTICATION_CLIENT_RESPONSE_FAILED = 229
```

Failed to analyze the authentication client response.

**Since:** 18

**System capability:** SystemCapability.Telephony.CoreService.Esim

**System API:** This is a system API.

## RESULT_ANALYZE_AUTHENTICATION_CLIENT_MATCHING_ID_REFUSED

```TypeScript
RESULT_ANALYZE_AUTHENTICATION_CLIENT_MATCHING_ID_REFUSED = 231
```

Failed to analyze the authentication client response because the matching ID is rejected.

**Since:** 18

**System capability:** SystemCapability.Telephony.CoreService.Esim

**System API:** This is a system API.

## RESULT_PROFILE_TYPE_ERROR_AUTHENTICATION_STOPPED

```TypeScript
RESULT_PROFILE_TYPE_ERROR_AUTHENTICATION_STOPPED = 233
```

Authentication stopped due to an error in the profile type.

**Since:** 18

**System capability:** SystemCapability.Telephony.CoreService.Esim

**System API:** This is a system API.

## RESULT_CARRIER_SERVER_REFUSED_ERRORS

```TypeScript
RESULT_CARRIER_SERVER_REFUSED_ERRORS = 249
```

The carrier server refused errors of which the reason code is 3.8.

**Since:** 18

**System capability:** SystemCapability.Telephony.CoreService.Esim

**System API:** This is a system API.

## RESULT_CERTIFICATE_INVALID

```TypeScript
RESULT_CERTIFICATE_INVALID = 251
```

The certificate is invalid.

**Since:** 18

**System capability:** SystemCapability.Telephony.CoreService.Esim

**System API:** This is a system API.

## RESULT_OUT_OF_MEMORY

```TypeScript
RESULT_OUT_OF_MEMORY = 263
```

Profile installation failed due to insufficient memory.

**Since:** 18

**System capability:** SystemCapability.Telephony.CoreService.Esim

**System API:** This is a system API.

## RESULT_PPR_FORBIDDEN

```TypeScript
RESULT_PPR_FORBIDDEN = 268
```

The profile policy rule prohibits this operation during download.

**Since:** 18

**System capability:** SystemCapability.Telephony.CoreService.Esim

**System API:** This is a system API.

## RESULT_NOTHING_TO_DELETE

```TypeScript
RESULT_NOTHING_TO_DELETE = 270
```

Nothing is to be deleted.

**Since:** 18

**System capability:** SystemCapability.Telephony.CoreService.Esim

**System API:** This is a system API.

## RESULT_PPR_NOT_MATCH

```TypeScript
RESULT_PPR_NOT_MATCH = 276
```

The profile policy rule does not match.

**Since:** 18

**System capability:** SystemCapability.Telephony.CoreService.Esim

**System API:** This is a system API.

## RESULT_CAT_BUSY

```TypeScript
RESULT_CAT_BUSY = 283
```

A session is ongoing.

**Since:** 18

**System capability:** SystemCapability.Telephony.CoreService.Esim

**System API:** This is a system API.

## RESULT_PROFILE_EID_INVALID

```TypeScript
RESULT_PROFILE_EID_INVALID = 284
```

This eSIM profile is already in use or is invalid.

**Since:** 18

**System capability:** SystemCapability.Telephony.CoreService.Esim

**System API:** This is a system API.

## RESULT_DOWNLOAD_TIMEOUT

```TypeScript
RESULT_DOWNLOAD_TIMEOUT = 287
```

Download times out.

**Since:** 18

**System capability:** SystemCapability.Telephony.CoreService.Esim

**System API:** This is a system API.

## RESULT_SGP_22_OTHER

```TypeScript
RESULT_SGP_22_OTHER = 400
```

Other errors defined in SGP.22.

**Since:** 18

**System capability:** SystemCapability.Telephony.CoreService.Esim

**System API:** This is a system API.

