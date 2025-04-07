import React from "react";
import EditCustomSpooderInputPair from "./EditCustomSpooderInputPair";
import EditCustomSpooderForm from "./EditCustomSpooderForm";

interface EditCustomSpooderProps {
  formKey?: string;
}

export default function EditCustomSpooder(props: EditCustomSpooderProps) {
  const { formKey } = props;
  return (
    <EditCustomSpooderForm>
      <EditCustomSpooderInputPair
        label={"Long Leg Left"}
        partName={"longlegleft"}
        baseFormKey={formKey}
      />
      <EditCustomSpooderInputPair
        label={"Short Leg Left"}
        partName={"shortlegleft"}
        baseFormKey={formKey}
      />
      <EditCustomSpooderInputPair
        label={"Body Left"}
        partName={"bodyleft"}
        baseFormKey={formKey}
      />
      <EditCustomSpooderInputPair
        label={"Little Eye Left"}
        partName={"littleeyeleft"}
        baseFormKey={formKey}
      />
      <EditCustomSpooderInputPair
        label={"Big Eye Left"}
        partName={"bigeyeleft"}
        baseFormKey={formKey}
      />
      <EditCustomSpooderInputPair
        label={"Fang Left"}
        partName={"fangleft"}
        baseFormKey={formKey}
      />
      <EditCustomSpooderInputPair
        label={"Mouth"}
        partName={"mouth"}
        baseFormKey={formKey}
      />
      <EditCustomSpooderInputPair
        label={"Fang Right"}
        partName={"fangright"}
        baseFormKey={formKey}
      />
      <EditCustomSpooderInputPair
        label={"Big Eye Right"}
        partName={"bigeyeright"}
        baseFormKey={formKey}
      />
      <EditCustomSpooderInputPair
        label={"Little Eye Right"}
        partName={"littleeyeright"}
        baseFormKey={formKey}
      />
      <EditCustomSpooderInputPair
        label={"Body Right"}
        partName={"bodyright"}
        baseFormKey={formKey}
      />
      <EditCustomSpooderInputPair
        label={"Short Leg Right"}
        partName={"shortlegright"}
        baseFormKey={formKey}
      />
      <EditCustomSpooderInputPair
        label={"Long Leg Right"}
        partName={"longlegright"}
        baseFormKey={formKey}
      />
    </EditCustomSpooderForm>
  );
}
