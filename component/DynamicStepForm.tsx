"use client";
import { useEffect, useState } from "react";

const formConfig = {
  detail: [
    { label: 'CompanyName', name: "Company Name", type: "string", required: true, error: "Enter the Name" },
    { label: 'number', name: "Number of emp", type: "string", required: true, error: "Enter the Number of employees" },
    { label: 'location', name: "Location", type: "string", required: true, error: "Enter the Location" },
    { label: 'companyDetai', name: "Company detail", type: "string", required: true, error: "Enter the Details" },
  ],
  plans: [
    { label: 'planType', name: "Plan", type: "string", required: true, error: "Enter the Plan" },
  ],
};

const formDatas = {
  CompanyName: "",
  number: null,
  location: "",
  companyDetai: '',
  planType: 'default',
  plans: {
    planid: "",
    customPlan: {
      planName: '',
      featcher: ""
    }
  }

}

export default function DynamicStepForm() {
  const steps = [formConfig.detail, formConfig.plans]; // 👈 steps from config

  const [formData, setFormData] = useState<any>(formDatas);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [step, setStep] = useState(0);

  const currentFields = steps[step];


  const handleChange = (name: string, value: string) => {
    // console.log(name)
    if (name === "planid") {
      console.log("planid")
      setFormData({
        ...formData,
        plans: {
          ...formData.plans,
          planid: value,
        },
      });

    } else if (name === "planType" && value === "default") {

      setFormData({
        ...formData,
        [name]: value,
        plans: {
          ...formData.plans,
          customPlan: {
            planName: '',
            featcher: ""
          }
        },
      });

    } else if (name === "planType" && value === "custom") {
      if (value === "custom") {


        setFormData({
          ...formData,
          [name]: value,
          plans: {
            ...formData.plans,
            planid: "",
          },
        });
      }
    } else if (name === "planName" || name === "featcher") {
      setFormData({
        ...formData,
        plans: {
          ...formData.plans,
          customPlan: { ...formData.plans.customPlan, [name]: value },
        },
      });
    } else {
      setFormData({ ...formData, [name]: value });
    }



  };

  const handleNext = () => {
    // let newErrors: Record<string, string> = {};
    // currentFields.forEach((field) => {
    //   const value = formData[field.label] || "";
    //   if (field.required && !value.trim()) {
    //     newErrors[field.label] = field.error;
    //   }
    // });

    // if (Object.keys(newErrors).length > 0) {
    //   setErrors(newErrors);
    //   return;
    // }

    setErrors({});
    if (step < steps.length - 1) {
      setStep(step + 1);
    } else {
      alert("Form submitted ✅ " + JSON.stringify(formData, null, 2));
    }
  };

  const handleBack = () => {
    if (step > 0) setStep(step - 1);
  };


  return (
    <div>
      <h2 className="text-lg font-semibold mb-4">
        Step {step + 1} of {steps.length}
      </h2>

      {currentFields.map((field) => (
        <div key={field.name} className="mb-4">
          <label className="block mb-2 font-medium">{field.name}</label>



          {field.label === 'planType' ?
            <div>
              <select name="planType"
                id={formData[field.label].planType}
                onChange={(e) => handleChange(field.label, e.target.value)} >
                <option value="default">default</option>
                <option value="custom">custom</option>
              </select>
              {formData.planType === "custom" ?
                <div>
                  {Object.entries(formData.plans.customPlan).map(([key, value]) => (
                    <div key={key}>

                      <label className="block mb-2 font-medium">{key}</label>
                      <input
                        type="text"
                        value={formData.plans.key}
                        onChange={(e) => handleChange(key, e.target.value)}
                        className="w-full border border-black p-2 rounded"
                        placeholder={key}
                      />

                      {/* {errors[field.label] && (
                        <p className="text-red-500 text-sm mt-1">{errors[field.name]}</p>
                      )} */}

                    </div>
                  ))}
                </div>
                :
                <select name="cars" id="cars" onChange={(e) => handleChange("planid", e.target.value)} >
                  <option value="volvo">Volvo</option>
                  <option value="saab">Saab</option>
                  <option value="opel">Opel</option>
                  <option value="audi">Audi</option>
                </select>}
            </div>
            :
            <div>
              <input
                type="text"
                value={formData[field.label] || ""}
                onChange={(e) => handleChange(field.label, e.target.value)}
                className="w-full border border-black p-2 rounded"
                placeholder={field.name}
              />
              {errors[field.label] && (
                <p className="text-red-500 text-sm mt-1">{errors[field.name]}</p>
              )}
            </div>}
        </div>
      ))}

      <div className="flex justify-between mt-4">
        <button
          onClick={handleBack}
          disabled={step === 0}
          className="px-4 py-2 bg-gray-300 rounded disabled:opacity-50"
        >
          Back
        </button>
        <button
          onClick={handleNext}
          className="px-4 py-2 bg-blue-600 text-white rounded"
        >
          {step === steps.length - 1 ? "Submit" : "Next"}
        </button>
      </div>
    </div>
  );
}
