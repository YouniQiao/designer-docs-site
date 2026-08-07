# setDlpFeature (System API)

## setDlpFeature

```TypeScript
function setDlpFeature(status: DlpFeatureStatus): Promise<StatusInfoResult>
```

Sets the DLP status. This API uses a promise to return the result. The system enables or disables the DLP protection function based on the DLP status specified using this API.

When this feature is enabled, right-click the file to be encrypted, and the encryption option is displayed in the shortcut menu. Files in .txt, .pdf, .xls, .xlsx, .ppt, .pptx, .doc, and .docx formats can be encrypted.

This API is used to enable or disable the DLP function in enterprise policies.

**Since:** 26.0.0

**ArkTS mode:** ArkTS-Dyn only, since version 26.0.0.

**Model restriction:** This API can be used only in the stage model.

<!--Device-dlpSetDlpFeature-function setDlpFeature(status: DlpFeatureStatus): Promise<StatusInfoResult>--><!--Device-dlpSetDlpFeature-function setDlpFeature(status: DlpFeatureStatus): Promise<StatusInfoResult>-End-->

**System capability:** SystemCapability.Security.DataLossPrevention

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| status | \_\_\_MD\_LINK\_USD\_0\_\_\_ | Yes | DLP status. The value **ENABLED\_\_\_ESCAPED\_UNDERSCORE\_\_\_FEATURE** indicates the DLP feature is enabled, and the encryption option is displayed in the menu. The value **NOT\_\_\_ESCAPED\_UNDERSCORE\_\_\_ENABLED\_\_\_ESCAPED\_UNDERSCORE\_\_\_FEATURE** indicates the DLP feature is disabled, and the encryption option is not displayed in the menu. If the value is out of range, error code 401 is thrown. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;StatusInfoResult&gt; | Promise used to return the DLP status that is set. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Non-system applications use system APIs. |
| [19100001](../errorcode-dlp.md#19100001-invalid-parameter) | Invalid parameter value. |
| [19100011](../errorcode-dlp.md#19100011-system-service-abnormal) | The system ability works abnormally. |

