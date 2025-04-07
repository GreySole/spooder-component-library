import React from "react";
import FormColorInput from "../../input/form/FormColorInput";
import FormTextInput from "../../input/form/FormTextInput";
import Stack from "../../layout/Stack";
import TypeFace from "../../layout/TypeFace";

interface EditCustomSpooderInputPairProps {
  label: string;
  partName: string;
  baseFormKey?: string;
}

export default function EditCustomSpooderInputPair(
  props: EditCustomSpooderInputPairProps
) {
  const { partName, label, baseFormKey } = props;
  return (
    <Stack spacing="medium" margin="small">
      <TypeFace>{label}</TypeFace>
      <FormTextInput
        width="100px"
        formKey={
          baseFormKey ? `${baseFormKey}.parts.${partName}` : `parts.${partName}`
        }
      />
      <FormColorInput
        formKey={
          baseFormKey
            ? `${baseFormKey}.colors.${partName}`
            : `colors.${partName}`
        }
      />
    </Stack>
  );
}
