import React from "react";
import _ from "lodash";
// import { useTranslation } from "react-i18next";

import FormContainer from "../components/Form/FormContainer";
import FamilyMembers from "../components/Form/FamilyMembers";
import Priorities from "../components/Form/Priorities";

import additionalInfo from "../cityCalc/additionalInfo";

const CreateProfile = ({ form, setForm }) => {
  // const { t } = useTranslation();

  const nextStep = () => {
    setForm({ ...form, step: form.step + 1 });
  };

  const prevStep = () => {
    setForm({ ...form, step: form.step - 1 });
  };

  const resetStep = () => {
    setForm({ ...form, step: (form.step = 1) });
  };

  const handleChange = (input, value) => {
    setForm({ ...form, [input]: value });
  };

  const handlePriorityChange = (e) => {
    if (e.target.checked) {
      const priorities = form.priorities;
      priorities.push(
        additionalInfo.find(
          (priority) => priority.measurement === e.target.name
        )
      );
      setForm({ ...form, priorities });
    } else {
      const oldPriorites = form.priorities;
      const priorities = oldPriorites.filter(
        (priority) => priority.measurement !== e.target.name
      );
      setForm({ ...form, priorities });
    }
  };

  const handleFamilyMemberChange = (input, value, i) => {
    const oldFamily = form.family;
    const family = [...oldFamily];
    family[i] = { ...family[i], [input]: value };
    setForm({ ...form, family });
  };

  const addFamilyMembers = (n) => {
    const obj = {
      id: "",
      age: "",
      name: "",
    };

    let index = 0;

    let family = Array.from({ length: n }, () => ({ ...obj, id: index++ }));

    setForm({ ...form, family: family });
  };

  const getDemographicMeasurements = () => {
    const { numberOfPeople, family } = form;

    let ages = family.map((familyMember) => familyMember.age);

    let ageMeasurements = additionalInfo.map((measurement) => {
      if (Array.isArray(measurement.demographic)) {
        if (_.intersection(measurement.demographic, ages).length > 0) {
          return measurement;
        }
      } else if (measurement.demographic === "all") {
        return measurement;
      } else if (
        typeof measurement.demographic === "object" &&
        numberOfPeople >= measurement.demographic.minNumberOfPeople &&
        numberOfPeople <= measurement.demographic.maxNumberOfPeople
      ) {
        return measurement;
      }
      return undefined;
    });
    return ageMeasurements.filter((e) => e !== undefined);
  };

  const setPriorities = () => {
    const measurements = getDemographicMeasurements();
    let priorities = form.priorities;
    priorities = measurements;
    setForm({ ...form, priorities });
  };

  const displaySection = (step) => {
    switch (step) {
      case 1:
        return (
          <FamilyMembers
            addFamilyMembers={addFamilyMembers}
            handleFamilyMemberChange={handleFamilyMemberChange}
            handleChange={handleChange}
            form={form}
            setForm={setForm}
            nextStep={nextStep}
            setPriorities={setPriorities}
          />
        );
      case 2:
        return (
          <Priorities
            handleChange={handleChange}
            handlePriorityChange={handlePriorityChange}
            form={form}
            setForm={setForm}
            resetStep={resetStep}
            setPriorities={setPriorities}
          />
        );

      default:
        return (
          <FamilyMembers
            addFamilyMembers={addFamilyMembers}
            handleFamilyMemberChange={handleFamilyMemberChange}
            handleChange={handleChange}
            form={form}
            setForm={setForm}
            nextStep={nextStep}
            setPriorities={setPriorities}
          />
        );
    }
  };

  return (
    <>
      <FormContainer
        prevStep={prevStep}
        nextStep={nextStep}
        width="sm"
        step={form.step}
      >
        {displaySection(form.step)}
      </FormContainer>
    </>
  );
};

export default CreateProfile;
