import React from "react";
import _ from "lodash";
// import { useTranslation } from "react-i18next";

import FormContainer from "../components/Form/FormContainer";
import FamilyMembers from "../components/Form/FamilyMembers";
import Priorities from "../components/Form/Priorities";

import additionalInfo from "../cityCalc/additionalInfo";

const CreateProfile = ({
  form,
  setForm,
  languages,
  setCurrentLangCode,
  currentLangCode,
  textSize,
  setTextSize,
}) => {
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
      //add priority to selected
      const priorities = form.priorities;
      priorities.push(
        additionalInfo.find(
          (priority) => priority.measurement === e.target.name
        )
      );
      setForm({ ...form, priorities });
    } else {
      //remove priority from selected
      const oldPriorites = form.priorities;
      const priorities = oldPriorites.filter(
        (priority) => priority.measurement !== e.target.name
      );
      setForm({ ...form, priorities });
    }
  };

  const handleAgesChange = (e) => {
    const ages = form.ages;
    if (e.target.checked) {
      //add age to array
      ages.push(e.target.name);
      setForm({ ...form, ages });
    } else {
      //remove age from array
      const oldAges = form.ages;
      const ages = oldAges.filter((age) => age !== e.target.name);
      setForm({ ...form, ages });
    }

    if (ages.length > form.numberOfPeople) {
      setForm({ ...form, numberOfPeople: ages.length });
    }
  };

  const getDemographicMeasurements = () => {
    const { numberOfPeople, ages } = form;

    //return array of matching measurement objects
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
            handleAgesChange={handleAgesChange}
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
            handleAgesChange={handleAgesChange}
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
        languages={languages}
        setCurrentLangCode={setCurrentLangCode}
        currentLangCode={currentLangCode}
        textSize={textSize}
        setTextSize={setTextSize}
      >
        {displaySection(form.step)}
      </FormContainer>
    </>
  );
};

export default CreateProfile;
