import { ActionPanel, Form, Action, showToast, Toast, Clipboard } from "@raycast/api";
import { runMaskedEmailCommand } from "./utils";

interface FormValues {
  domain: string;
  description: string;
  prefix: string;
}

export default function Command() {
  async function handleSubmit(values: FormValues) {
    const toast = await showToast({ style: Toast.Style.Animated, title: "Creating masked email..." });

    try {
      const command = `create ${
        values.domain ? `-domain "${values.domain}"` : ""
      } ${
        values.description ? `-desc "${values.description}"` : ""
      } ${
        values.prefix ? `-prefix "${values.prefix}"` : ""
      }`;

      const result = await runMaskedEmailCommand(command);

      // Extract email address from the result (assuming it's the first line)
      const maskedEmail = result.split('\n')[0].trim();

      // Copy to clipboard
      await Clipboard.copy(maskedEmail);

      toast.style = Toast.Style.Success;
      toast.title = "Masked email created and copied";
      toast.message = maskedEmail;
    } catch (error) {
      toast.style = Toast.Style.Failure;
      toast.title = "Failed to create masked email";
      toast.message = String(error);
    }
  }

  return (
    <Form
      actions={
        <ActionPanel>
          <Action.SubmitForm title="Create Masked Email" onSubmit={handleSubmit} />
        </ActionPanel>
      }
    >
      <Form.TextField id="domain" title="Domain" placeholder="Optional example.com" />
      <Form.TextField id="description" title="Description" placeholder="Optional Description of the email" />
      <Form.TextField id="prefix" title="Prefix" placeholder="Optional prefix for the email" />
    </Form>
  );
}
