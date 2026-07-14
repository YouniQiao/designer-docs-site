# @ohos.contact

The **contact** module provides contact management functions, such as adding, deleting, and updating contacts.

**Since:** 7

**System capability:** SystemCapability.Applications.ContactsData

## Modules to Import

```TypeScript
import { contact } from '@kit.ContactsKit';
```

## Summary

### Functions

| Name | Description |
| --- | --- |
| [addContact](arkts-contacts-addcontact-f.md#addcontact-1) | Adds a contact. This API uses an asynchronous callback to return the result. |
| [addContact](arkts-contacts-addcontact-f.md#addcontact-2) | Adds a contact. This API uses an asynchronous callback to return the result. |
| [addContact](arkts-contacts-addcontact-f.md#addcontact-3) | Adds a contact. This API uses a promise to return the result. |
| [addContact](arkts-contacts-addcontact-f.md#addcontact-4) | Adds a contact. This API uses a promise to return the result. |
| [addContactViaUI](arkts-contacts-addcontactviaui-f.md#addcontactviaui-1) | Creates a contact through UI interaction. This API uses a promise to return the result. |
| [addContacts](arkts-contacts-addcontacts-f.md#addcontacts-1) | Adds contacts in batches. This API uses a promise to return the result. |
| [deleteContact](arkts-contacts-deletecontact-f.md#deletecontact-1) | Deletes a contact. This API uses an asynchronous callback to return the result. |
| [deleteContact](arkts-contacts-deletecontact-f.md#deletecontact-2) | Deletes a contact. This API uses an asynchronous callback to return the result. |
| [deleteContact](arkts-contacts-deletecontact-f.md#deletecontact-3) | Deletes a contact. This API uses a promise to return the result. |
| [deleteContact](arkts-contacts-deletecontact-f.md#deletecontact-4) | Deletes a contact. This API uses a promise to return the result. |
| [hasMatchedCallLog](arkts-contacts-hasmatchedcalllog-f.md#hasmatchedcalllog-1) | Check whether there are any calls that meet the specified condition. By default, the system queries call records generated within 6 hours. |
| [hasMatchedCallLog](arkts-contacts-hasmatchedcalllog-f.md#hasmatchedcalllog-2) | Check whether there are any calls that meet the specified condition. |
| [importContactsViaUI](arkts-contacts-importcontactsviaui-f.md#importcontactsviaui-1) | Imports multiple contacts through UI interaction. A maximum of 100 contacts can be imported at a time. |
| [isLocalContact](arkts-contacts-islocalcontact-f.md#islocalcontact-1) | Checks whether the ID of this contact is in the local address book. This API uses an asynchronous callback to return the result. |
| [isLocalContact](arkts-contacts-islocalcontact-f.md#islocalcontact-2) | Checks whether the ID of this contact is in the local address book. This API uses an asynchronous callback to return the result. |
| [isLocalContact](arkts-contacts-islocalcontact-f.md#islocalcontact-3) | Checks whether the ID of this contact is in the local address book. This API uses a promise to return the result. |
| [isLocalContact](arkts-contacts-islocalcontact-f.md#islocalcontact-4) | Checks whether the ID of this contact is in the local address book. This API uses a promise to return the result. |
| [isMyCard](arkts-contacts-ismycard-f.md#ismycard-1) | Checks whether a contact is included in my card. This API uses an asynchronous callback to return the result. |
| [isMyCard](arkts-contacts-ismycard-f.md#ismycard-2) | Checks whether a contact is included in my card. This API uses an asynchronous callback to return the result. |
| [isMyCard](arkts-contacts-ismycard-f.md#ismycard-3) | Checks whether a contact is included in my card. This API uses a promise to return the result. |
| [isMyCard](arkts-contacts-ismycard-f.md#ismycard-4) | Checks whether a contact is included in my card. This API uses a promise to return the result. |
| [queryContact](arkts-contacts-querycontact-f.md#querycontact-1) | Queries a contact based on the specified key. This API uses an asynchronous callback to return the result. |
| [queryContact](arkts-contacts-querycontact-f.md#querycontact-2) | Queries a contact based on the specified key. This API uses an asynchronous callback to return the result. |
| [queryContact](arkts-contacts-querycontact-f.md#querycontact-3) | Queries a contact based on the specified key and holder. This API uses an asynchronous callback to return the result. |
| [queryContact](arkts-contacts-querycontact-f.md#querycontact-4) | Queries a contact based on the specified key and holder. This API uses an asynchronous callback to return the result. |
| [queryContact](arkts-contacts-querycontact-f.md#querycontact-5) | Queries a contact based on the specified key and attributes. This API uses an asynchronous callback to return the result. |
| [queryContact](arkts-contacts-querycontact-f.md#querycontact-6) | Queries a contact based on the specified key and attributes. This API uses an asynchronous callback to return the result. |
| [queryContact](arkts-contacts-querycontact-f.md#querycontact-7) | Queries a contact based on the specified key, holder, and attributes. This API uses an asynchronous callback to return the result. |
| [queryContact](arkts-contacts-querycontact-f.md#querycontact-8) | Queries a contact based on the specified key, holder, and attributes. This API uses an asynchronous callback to return the result. |
| [queryContact](arkts-contacts-querycontact-f.md#querycontact-9) | Queries a contact based on the specified key, holder, and attributes. This API uses a promise to return the result. |
| [queryContact](arkts-contacts-querycontact-f.md#querycontact-10) | Queries a contact based on the specified key, holder, and attributes. This API uses a promise to return the result. |
| [queryContactSyncInfo](arkts-contacts-querycontactsyncinfo-f.md#querycontactsyncinfo-1) | Queries information about ongoing contact synchronization for the calling application. If the returned contact synchronization information is empty, the invoking party does not synchronize contacts or the contact synchronization is complete. |
| [queryContacts](arkts-contacts-querycontacts-f.md#querycontacts-1) | Queries all contacts. This API uses an asynchronous callback to return the result. |
| [queryContacts](arkts-contacts-querycontacts-f.md#querycontacts-2) | Queries all contacts. This API uses an asynchronous callback to return the result. |
| [queryContacts](arkts-contacts-querycontacts-f.md#querycontacts-3) | Queries all contacts based on the specified holder. This API uses an asynchronous callback to return the result. |
| [queryContacts](arkts-contacts-querycontacts-f.md#querycontacts-4) | Queries all contacts based on the specified holder. This API uses an asynchronous callback to return the result. |
| [queryContacts](arkts-contacts-querycontacts-f.md#querycontacts-5) | Queries all contacts based on the specified attributes. This API uses an asynchronous callback to return the result. |
| [queryContacts](arkts-contacts-querycontacts-f.md#querycontacts-6) | Queries all contacts based on the specified attributes. This API uses an asynchronous callback to return the result. |
| [queryContacts](arkts-contacts-querycontacts-f.md#querycontacts-7) | Queries all contacts based on the specified holder and attributes. This API uses an asynchronous callback to return the result. |
| [queryContacts](arkts-contacts-querycontacts-f.md#querycontacts-8) | Queries all contacts based on the specified holder and attributes. This API uses an asynchronous callback to return the result. |
| [queryContacts](arkts-contacts-querycontacts-f.md#querycontacts-9) | Queries all contacts based on the specified holder and attributes. This API uses a promise to return the result. |
| [queryContacts](arkts-contacts-querycontacts-f.md#querycontacts-10) | Queries all contacts based on the specified holder and attributes. This API uses a promise to return the result. |
| [queryContactsByEmail](arkts-contacts-querycontactsbyemail-f.md#querycontactsbyemail-1) | Queries a contact based on the specified email. This API uses an asynchronous callback to return the result. The return result of this API includes only the **id**, **key**, and **Emails** attributes. If you want to query all information about a contact, you are advised to call [queryContact](arkts-contacts-querycontact-f.md#querycontact-8) to query the contact based on the specified key. |
| [queryContactsByEmail](arkts-contacts-querycontactsbyemail-f.md#querycontactsbyemail-2) | Queries a contact based on the specified email. This API uses an asynchronous callback to return the result. The return result of this API includes only the **id**, **key**, and **Emails** attributes. If you want to query all information about a contact, you are advised to call [queryContact](arkts-contacts-querycontact-f.md#querycontact-8) to query the contact based on the specified key. |
| [queryContactsByEmail](arkts-contacts-querycontactsbyemail-f.md#querycontactsbyemail-3) | Queries a contact based on the specified email and holder. This API uses an asynchronous callback to return the result. The return result of this API includes only the **id**, **key**, and **Emails** attributes. If you want to query all information about a contact, you are advised to call [queryContact](arkts-contacts-querycontact-f.md#querycontact-8) to query the contact based on the specified key. |
| [queryContactsByEmail](arkts-contacts-querycontactsbyemail-f.md#querycontactsbyemail-4) | Queries a contact based on the specified email and holder. This API uses an asynchronous callback to return the result. The return result of this API includes only the **id**, **key**, and **Emails** attributes. If you want to query all information about a contact, you are advised to call [queryContact](arkts-contacts-querycontact-f.md#querycontact-8) to query the contact based on the specified key. |
| [queryContactsByEmail](arkts-contacts-querycontactsbyemail-f.md#querycontactsbyemail-5) | Queries a contact based on the specified email and attributes. This API uses an asynchronous callback to return the result. The return result of this API includes only the **id**, **key**, and **Emails** attributes. If you want to query all information about a contact, you are advised to call [queryContact](arkts-contacts-querycontact-f.md#querycontact-8) to query the contact based on the specified key. |
| [queryContactsByEmail](arkts-contacts-querycontactsbyemail-f.md#querycontactsbyemail-6) | Queries a contact based on the specified email and attributes. This API uses an asynchronous callback to return the result. The return result of this API includes only the **id**, **key**, and **Emails** attributes. If you want to query all information about a contact, you are advised to call [queryContact](arkts-contacts-querycontact-f.md#querycontact-8) to query the contact based on the specified key. |
| [queryContactsByEmail](arkts-contacts-querycontactsbyemail-f.md#querycontactsbyemail-7) | Queries a contact based on the specified email, holder, and attributes. This API uses an asynchronous callback to return the result. The return result of this API includes only the **id**, **key**, and **Emails** attributes. If you want to query all information about a contact, you are advised to call [queryContact](arkts-contacts-querycontact-f.md#querycontact-8) to query the contact based on the specified key. |
| [queryContactsByEmail](arkts-contacts-querycontactsbyemail-f.md#querycontactsbyemail-8) | Queries a contact based on the specified email, holder, and attributes. This API uses an asynchronous callback to return the result. The return result of this API includes only the **id**, **key**, and **Emails** attributes. If you want to query all information about a contact, you are advised to call [queryContact](arkts-contacts-querycontact-f.md#querycontact-8) to query the contact based on the specified key. |
| [queryContactsByEmail](arkts-contacts-querycontactsbyemail-f.md#querycontactsbyemail-9) | Queries a contact based on the specified email, holder, and attributes. This API uses a promise to return the result. The return result of this API includes only the **id**, **key**, and **Emails** attributes. If you want to query all information about a contact, you are advised to call [queryContact](arkts-contacts-querycontact-f.md#querycontact-8) to query the contact based on the specified key. |
| [queryContactsByEmail](arkts-contacts-querycontactsbyemail-f.md#querycontactsbyemail-10) | Queries a contact based on the specified email, holder, and attributes. This API uses a promise to return the result. The return result of this API includes only the **id**, **key**, and **Emails** attributes. If you want to query all information about a contact, you are advised to call [queryContact](arkts-contacts-querycontact-f.md#querycontact-8) to query the contact based on the specified key. |
| [queryContactsByPhoneNumber](arkts-contacts-querycontactsbyphonenumber-f.md#querycontactsbyphonenumber-1) | Queries a contact based on the specified phone number. This API uses an asynchronous callback to return the result. The return result of this API includes only the **id**, **key**, and **phoneNumbers** attributes. If you want to query all information about a contact, you are advised to call [queryContact](arkts-contacts-querycontact-f.md#querycontact-8) to query the contact based on the specified key. If an application calls this API in the background to obtain contact information, the application must request the corresponding continuous task. |
| [queryContactsByPhoneNumber](arkts-contacts-querycontactsbyphonenumber-f.md#querycontactsbyphonenumber-2) | Queries a contact based on the specified phone number. This API uses an asynchronous callback to return the result. The return result of this API includes only the **id**, **key**, and **phoneNumbers** attributes. If you want to query all information about a contact, you are advised to call [queryContact](arkts-contacts-querycontact-f.md#querycontact-8) to query the contact based on the specified key. If an application calls this API in the background to obtain contact information, the application must request the corresponding continuous task. |
| [queryContactsByPhoneNumber](arkts-contacts-querycontactsbyphonenumber-f.md#querycontactsbyphonenumber-3) | Queries a contact based on the specified phone number and holder. This API uses an asynchronous callback to return the result. The return result of this API includes only the **id**, **key**, and **phoneNumbers** attributes. If you want to query all information about a contact, you are advised to call [queryContact](arkts-contacts-querycontact-f.md#querycontact-8) to query the contact based on the specified key. If an application calls this API in the background to obtain contact information, the application must request the corresponding continuous task. |
| [queryContactsByPhoneNumber](arkts-contacts-querycontactsbyphonenumber-f.md#querycontactsbyphonenumber-4) | Queries a contact based on the specified phone number and holder. This API uses an asynchronous callback to return the result. The return result of this API includes only the **id**, **key**, and **phoneNumbers** attributes. If you want to query all information about a contact, you are advised to call [queryContact](arkts-contacts-querycontact-f.md#querycontact-8) to query the contact based on the specified key. If an application calls this API in the background to obtain contact information, the application must request the corresponding continuous task. |
| [queryContactsByPhoneNumber](arkts-contacts-querycontactsbyphonenumber-f.md#querycontactsbyphonenumber-5) | Queries a contact based on the specified phone number and attributes. This API uses an asynchronous callback to return the result. The return result of this API includes only the **id**, **key**, and **phoneNumbers** attributes. If you want to query all information about a contact, you are advised to call [queryContact](arkts-contacts-querycontact-f.md#querycontact-8) to query the contact based on the specified key. If an application calls this API in the background to obtain contact information, the application must request the corresponding continuous task. |
| [queryContactsByPhoneNumber](arkts-contacts-querycontactsbyphonenumber-f.md#querycontactsbyphonenumber-6) | Queries a contact based on the specified phone number and attributes. This API uses an asynchronous callback to return the result. The return result of this API includes only the **id**, **key**, and **phoneNumbers** attributes. If you want to query all information about a contact, you are advised to call [queryContact](arkts-contacts-querycontact-f.md#querycontact-8) to query the contact based on the specified key. If an application calls this API in the background to obtain contact information, the application must request the corresponding continuous task. |
| [queryContactsByPhoneNumber](arkts-contacts-querycontactsbyphonenumber-f.md#querycontactsbyphonenumber-7) | Queries a contact based on the specified phone number, holder, and attributes. This API uses an asynchronous callback to return the result. The return result of this API includes only the **id**, **key**, and **phoneNumbers** attributes. If you want to query all information about a contact, you are advised to call [queryContact](arkts-contacts-querycontact-f.md#querycontact-8) to query the contact based on the specified key. If an application calls this API in the background to obtain contact information, the application must request the corresponding continuous task. |
| [queryContactsByPhoneNumber](arkts-contacts-querycontactsbyphonenumber-f.md#querycontactsbyphonenumber-8) | Queries a contact based on the specified phone number, holder, and attributes. This API uses an asynchronous callback to return the result. The return result of this API includes only the **id**, **key**, and **phoneNumbers** attributes. If you want to query all information about a contact, you are advised to call [queryContact](arkts-contacts-querycontact-f.md#querycontact-8) to query the contact based on the specified key. If an application calls this API in the background to obtain contact information, the application must request the corresponding continuous task. |
| [queryContactsByPhoneNumber](arkts-contacts-querycontactsbyphonenumber-f.md#querycontactsbyphonenumber-9) | Queries a contact based on the specified phone number, holder, and attributes. This API uses a promise to return the result. The return result of this API includes only the **id**, **key**, and **phoneNumbers** attributes. If you want to query all information about a contact, you are advised to call [queryContact](arkts-contacts-querycontact-f.md#querycontact-8) to query the contact based on the specified key. If an application calls this API in the background to obtain contact information, the application must request the corresponding continuous task. |
| [queryContactsByPhoneNumber](arkts-contacts-querycontactsbyphonenumber-f.md#querycontactsbyphonenumber-10) | Queries a contact based on the specified phone number, holder, and attributes. This API uses a promise to return the result. The return result of this API includes only the **id**, **key**, and **phoneNumbers** attributes. If you want to query all information about a contact, you are advised to call [queryContact](arkts-contacts-querycontact-f.md#querycontact-8) to query the contact based on the specified key. If an application calls this API in the background to obtain contact information, the application must request the corresponding continuous task. |
| [queryContactsCount](arkts-contacts-querycontactscount-f.md#querycontactscount-1) | Queries the number of all contacts. This API uses a promise to return the result. |
| [queryGroups](arkts-contacts-querygroups-f.md#querygroups-1) | Queries all groups of a contact. This API uses an asynchronous callback to return the result. |
| [queryGroups](arkts-contacts-querygroups-f.md#querygroups-2) | Queries all groups of a contact. This API uses an asynchronous callback to return the result. |
| [queryGroups](arkts-contacts-querygroups-f.md#querygroups-3) | Queries all groups of a contact based on the specified holder. This API uses an asynchronous callback to return the result. |
| [queryGroups](arkts-contacts-querygroups-f.md#querygroups-4) | Queries all groups of a contact based on the specified holder. This API uses an asynchronous callback to return the result. |
| [queryGroups](arkts-contacts-querygroups-f.md#querygroups-5) | Queries all groups of a contact based on the specified holder. This API uses a promise to return the result. |
| [queryGroups](arkts-contacts-querygroups-f.md#querygroups-6) | Queries all groups of a contact based on the specified holder. This API uses a promise to return the result. |
| [queryHolders](arkts-contacts-queryholders-f.md#queryholders-1) | Queries all applications that have created contacts. This API uses an asynchronous callback to return the result. |
| [queryHolders](arkts-contacts-queryholders-f.md#queryholders-2) | Queries all applications that have created contacts. This API uses an asynchronous callback to return the result. |
| [queryHolders](arkts-contacts-queryholders-f.md#queryholders-3) | Queries all applications that have created contacts. This API uses a promise to return the result. |
| [queryHolders](arkts-contacts-queryholders-f.md#queryholders-4) | Queries all applications that have created contacts. This API uses a promise to return the result. |
| [queryKey](arkts-contacts-querykey-f.md#querykey-1) | Queries the key of a contact based on the specified contact ID. This API uses an asynchronous callback to return the result. |
| [queryKey](arkts-contacts-querykey-f.md#querykey-2) | Queries the key of a contact based on the specified contact ID. This API uses an asynchronous callback to return the result. |
| [queryKey](arkts-contacts-querykey-f.md#querykey-3) | Queries the key of a contact based on the specified contact ID and holder. This API uses an asynchronous callback to return the result. |
| [queryKey](arkts-contacts-querykey-f.md#querykey-4) | Queries the key of a contact based on the specified contact ID and holder. This API uses an asynchronous callback to return the result. |
| [queryKey](arkts-contacts-querykey-f.md#querykey-5) | Queries the key of a contact based on the specified contact ID and holder. This API uses a promise to return the result. |
| [queryKey](arkts-contacts-querykey-f.md#querykey-6) | Queries the key of a contact based on the specified contact ID and holder. This API uses a promise to return the result. |
| [queryMyCard](arkts-contacts-querymycard-f.md#querymycard-1) | Queries my card. This API uses an asynchronous callback to return the result. |
| [queryMyCard](arkts-contacts-querymycard-f.md#querymycard-2) | Queries my card. This API uses an asynchronous callback to return the result. |
| [queryMyCard](arkts-contacts-querymycard-f.md#querymycard-3) | Queries my card. (The contact attribute list can be imported.) This API uses an asynchronous callback to return the result. |
| [queryMyCard](arkts-contacts-querymycard-f.md#querymycard-4) | Queries my card. (The contact attribute list can be imported.) This API uses an asynchronous callback to return the result. |
| [queryMyCard](arkts-contacts-querymycard-f.md#querymycard-5) | Queries my card. (The contact attribute list can be imported.) This API uses a promise to return the result. |
| [queryMyCard](arkts-contacts-querymycard-f.md#querymycard-6) | Queries my card. (The contact attribute list can be imported.) This API uses a promise to return the result. |
| [saveToExistingContactViaUI](arkts-contacts-savetoexistingcontactviaui-f.md#savetoexistingcontactviaui-1) | Saves the information to an existing contact through UI interaction.. This API uses a promise to return the result. |
| [selectContact](arkts-contacts-selectcontact-f.md#selectcontact-1) | Selects a contact. This API uses an asynchronous callback to return the result. |
| [selectContact](arkts-contacts-selectcontact-f.md#selectcontact-2) | Selects a contact. This API uses a promise to return the result. |
| [selectContacts](arkts-contacts-selectcontacts-f.md#selectcontacts-1) | Selects a contact. This API uses an asynchronous callback to return the result. |
| [selectContacts](arkts-contacts-selectcontacts-f.md#selectcontacts-2) | Selects a contact. This API uses a promise to return the result. |
| [selectContacts](arkts-contacts-selectcontacts-f.md#selectcontacts-3) | Selects a contact. (Filter criteria can be transferred during contact selection.) This API uses an asynchronous callback to return the result. |
| [selectContacts](arkts-contacts-selectcontacts-f.md#selectcontacts-4) | Selects a contact. (Filter criteria can be transferred during contact selection.) This API uses a promise to return the result. |
| [syncContacts](arkts-contacts-synccontacts-f.md#synccontacts-1) | Sync multiple contacts in batches into contacts database. A maximum of 400 contacts can be synchronized in batches. The invoking party must be in the foreground. |
| [updateContact](arkts-contacts-updatecontact-f.md#updatecontact-1) | Updates a contact. This API uses an asynchronous callback to return the result. |
| [updateContact](arkts-contacts-updatecontact-f.md#updatecontact-2) | Updates a contact. This API uses an asynchronous callback to return the result. |
| [updateContact](arkts-contacts-updatecontact-f.md#updatecontact-3) | Updates a contact. (The contact attribute list can be imported.) This API uses an asynchronous callback to return the result. |
| [updateContact](arkts-contacts-updatecontact-f.md#updatecontact-4) | Updates a contact. (The contact attribute list can be imported.) This API uses an asynchronous callback to return the result. |
| [updateContact](arkts-contacts-updatecontact-f.md#updatecontact-5) | Updates a contact. (The contact attribute list can be imported.) This API uses a promise to return the result. |
| [updateContact](arkts-contacts-updatecontact-f.md#updatecontact-6) | Updates a contact. (The contact attribute list can be imported.) This API uses a promise to return the result. |

### Classes

| Name | Description |
| --- | --- |
| [Contact](arkts-contacts-contact-c.md) | Defines a contact. |
| [ContactAttributes](arkts-contacts-contactattributes-c.md) | Provides a list of contact attributes, which are generally used as arguments. If **null** is passed, all attributes are queried by default. |
| [Email](arkts-contacts-email-c.md) | Defines a contact's email. |
| [Event](arkts-contacts-event-c.md) | Defines a contact's event. |
| [Group](arkts-contacts-group-c.md) | Defines a contact group. |
| [Holder](arkts-contacts-holder-c.md) | Defines an application that creates the contact. |
| [ImAddress](arkts-contacts-imaddress-c.md) | Enumerates IM addresses. |
| [Name](arkts-contacts-name-c.md) | Defines a contact's name. |
| [NickName](arkts-contacts-nickname-c.md) | Defines a contact's nickname. |
| [Note](arkts-contacts-note-c.md) | Defines a contact's note. |
| [Organization](arkts-contacts-organization-c.md) | Defines a contact's organization. |
| [PhoneNumber](arkts-contacts-phonenumber-c.md) | Defines a contact's phone number. |
| [Portrait](arkts-contacts-portrait-c.md) | Defines a contact's portrait. &gt; **NOTE** &gt; &gt; Since API version 22, contact portraits can be set in URI or [PixelMap](../../apis-image-kit/arkts-apis/arkts-image-pixelmap-i.md) &gt; format. (Currently, contact avatars cannot be set through the [addContactViaUI](arkts-contacts-addcontactviaui-f.md#addcontactviaui-1) or &gt; [saveToExistingContactViaUI](arkts-contacts-savetoexistingcontactviaui-f.md#savetoexistingcontactviaui-1) API.) &gt; &gt; URI indicates the address of the contact portrait file that can be accessed, and &gt; [PixelMap](../../apis-image-kit/arkts-apis/arkts-image-pixelmap-i.md) indicates the [PixelMap](../../apis-image-kit/arkts-apis/arkts-image-pixelmap-i.md) &gt; object generated based on the contact portrait resource. &gt; &gt; Since API version 22, the profile picture resource can be read through URI. The resource can be opened only in &gt; [fs.open](../../apis-core-file-kit/arkts-apis/arkts-corefile-file-fs-open-f.md#open-1) mode and cannot be directly displayed in the **Image** component using a URI. You need to read &gt; the resource and display it in [PixelMap](../../apis-image-kit/arkts-apis/arkts-image-pixelmap-i.md) format. |
| [PostalAddress](arkts-contacts-postaladdress-c.md) | Defines a contact's postal address. |
| [Relation](arkts-contacts-relation-c.md) | Defines a contact's relationship. |
| [SipAddress](arkts-contacts-sipaddress-c.md) | Defines a contact's SIP address. |
| [Website](arkts-contacts-website-c.md) | Defines a contact's website. |

### Interfaces

| Name | Description |
| --- | --- |
| [ContactSelectionFilter](arkts-contacts-contactselectionfilter-i.md) | Defines the contact selection filter. |
| [ContactSelectionOptions](arkts-contacts-contactselectionoptions-i.md) | Defines the Contact selection options, which specifies whether one contact or multiple contacts can be selected. |
| [ContactSyncInfo](arkts-contacts-contactsyncinfo-i.md) | Information about contact synchronization for the calling application. |
| [ContactSyncProgress](arkts-contacts-contactsyncprogress-i.md) | Information about the contact synchronization progress. Contains the sync ID, current batch, and total batch. |
| [DataFilter](arkts-contacts-datafilter-i.md) | Defines the contact data filter item. |
| [FilterClause](arkts-contacts-filterclause-i.md) | Defines the contact filter criteria. Multiple filter criteria are ORed. If the parameter is an array, the array can contain a maximum of three elements. |
| [FilterOptions](arkts-contacts-filteroptions-i.md) | Defines contact filter options. |

### Enums

| Name | Description |
| --- | --- |
| [Attribute](arkts-contacts-attribute-e.md) | Enumerates contact attributes. The enumerated value is of the number type. Create contact data in JSON format: |
| [ContactSyncMode](arkts-contacts-contactsyncmode-e.md) | The type of contact synchronization mode. |
| [DataField](arkts-contacts-datafield-e.md) | Enumerates contact data fields. |
| [FilterCondition](arkts-contacts-filtercondition-e.md) | Enumerates filter criteria. |
| [FilterType](arkts-contacts-filtertype-e.md) | Enumerates contact filter types. |

