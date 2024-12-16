import { ActionPanel, Form, Action, showToast, Toast } from "@raycast/api";
import { runMaskedEmailCommand } from "./utils";

export default function Command() {
  async function handleSubmit(values: { email: string }) {
    const toast = await showToast({ style: Toast.Style.Animated, title: "Enabling masked email..." });

    try {
      await runMaskedEmailCommand(`enable ${values.email}`);
      toast.style = Toast.Style.Success;
      toast.title = "Masked email enabled";
    } catch (error) {
      toast.style = Toast.Style.Failure;
      toast.title = "Failed to enable masked email";
      toast.message = String(error);
    }
  }

  return (
    <Form
      actions={
        <ActionPanel>
          <Action.SubmitForm title="Enable Masked Email" onSubmit={handleSubmit} />
        </ActionPanel>
      }
    >
      <Form.TextField id="email" title="Masked Email" placeholder="masked@example.com" />
    </Form>
  );
}
