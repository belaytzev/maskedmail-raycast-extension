# FastMail Masked Email for Raycast

Manage FastMail masked emails directly from Raycast. Create, list, enable, and disable masked emails with ease.

## Prerequisites

1. Install [maskedemail-cli](https://github.com/dvcrn/maskedemail-cli):
```bash
go get github.com/dvcrn/maskedemail-cli
```
2. Get your FastMail API token:
-	Go to FastMail Settings → Privacy & Security → Connected apps & API tokens → Manage API Tokens
-	Create a new API token with "Masked Email" permission
-	Copy the generated token

## Features
-	📧 Create new masked emails with optional domain, description, and prefix
-	📋 List all your masked emails with their status
-	✅ Enable/disable masked emails
-	📎 Quick copy of masked emails to clipboard

## Installation
1.	Install the extension from Raycast Store
2.	Configure your FastMail API token in extension preferences
3.	Start managing your masked emails!

## Usage
### Create Masked Email
-	Open Raycast and search for "Create Masked Email"
-	Fill in optional details (domain, description, prefix)
-	New masked email will be automatically copied to clipboard
### List Masked Emails
-	Open Raycast and search for "List Masked Emails"
-	Press Enter on any email to copy it to clipboard
-	Use CMD+E to toggle enable/disable status
-	Use CMD+D to copy email description
### Enable/Disable Masked Email
-	Use dedicated commands or
-	Use CMD+E shortcut in the list view
### Keyboard Shortcuts
-	Enter - Copy selected masked email to clipboard
-	CMD+E - Toggle enable/disable status
-	CMD+D - Copy email description

## Credits
This extension uses maskedemail-cli by dvcrn.
