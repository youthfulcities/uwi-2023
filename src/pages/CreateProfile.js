import React, { useCallback } from "react";
import _ from "lodash";

import FormContainer from "../components/Form/FormContainer";
import FamilyMembers from "../components/Form/FamilyMembers";
import Priorities from "../components/Form/Priorities";

import additionalInfo from "../data/additionalInfo.js";

const CreateProfile = ({
  form,
  setForm,
  languages,
  setCurrentLangCode,
  currentLangCode,
  textSize,
  setTextSize,
}) => {
  const { priorities, step } = form;

  const handleChange = (input, value) => {
    setForm({ ...form, [input]: value });
  };

  const nextStep = () => {
    setForm({ ...form, step: form.step + 1 });
  };

  const prevStep = () => {
    setForm({ ...form, step: form.step - 1 });
  };

  const resetStep = () => {
    setForm({ ...form, step: (form.step = 1) });
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

  let cat = `category_${currentLangCode}`;
  let measure = `measurement_${currentLangCode}`;

  //all the categories
  const groupedPrioritiesArray = Object.values(
    _.groupBy(additionalInfo, (item) => item[cat])
  );

  //all the entries in the current category
  const categoryArray = groupedPrioritiesArray[step - 2];

  const getDemographicMeasurements = useCallback(() => {
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
  }, [form]);

  const setPriorities = () => {
    const measurements = getDemographicMeasurements();
    let priorities = measurements;
    setForm({ ...form, priorities, step: 2 });
  };

  const handlePriorityChange = (e) => {
    if (e.target.checked) {
      //add priority to selected
      const priorities = form.priorities;
      priorities.push(
        additionalInfo.find((priority) => priority.name === e.target.name)
      );
      setForm({ ...form, priorities });
    } else {
      //remove priority from selected
      const oldPriorites = form.priorities;
      const priorities = oldPriorites.filter(
        (priority) => priority.name !== e.target.name
      );
      setForm({ ...form, priorities });
    }
  };

  const handleAddAll = (category) => {
    const oldPriorities = form.priorities;
    const filteredPriorities = oldPriorities.filter(
      (item) => category.indexOf(item) === -1
    );
    const priorities = [...filteredPriorities, ...category];
    setForm({ ...form, priorities });
  };

  const handleRemoveAll = (category) => {
    const oldPriorities = form.priorities;
    const priorities = oldPriorities.filter(
      (item) => category.indexOf(item) === -1
    );
    setForm({ ...form, priorities });
  };

  const displaySection = (step) => {
    if (step === 1) {
      return (
        <FamilyMembers
          currentLangCode={currentLangCode}
          setPriorities={setPriorities}
          handleAgesChange={handleAgesChange}
          handleChange={handleChange}
          form={form}
          setForm={setForm}
          nextStep={nextStep}
        />
      );
    } else if (step > 1) {
      return (
        <Priorities
          currentLangCode={currentLangCode}
          handleChange={handleChange}
          handlePriorityChange={handlePriorityChange}
          form={form}
          step={step}
          cat={cat}
          measure={measure}
          categoryArray={categoryArray}
          priorities={priorities}
          groupedPrioritiesArray={groupedPrioritiesArray}
          setForm={setForm}
          nextStep={nextStep}
          resetStep={resetStep}
          handleRemoveAll={handleRemoveAll}
          handleAddAll={handleAddAll}
        />
      );
    } else {
      return (
        <FamilyMembers
          currentLangCode={currentLangCode}
          handleAgesChange={handleAgesChange}
          handleChange={handleChange}
          form={form}
          setForm={setForm}
          nextStep={nextStep}
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
        form={form}
        languages={languages}
        groupedPrioritiesArray={groupedPrioritiesArray}
        step={step}
        setCurrentLangCode={setCurrentLangCode}
        currentLangCode={currentLangCode}
        textSize={textSize}
        setTextSize={setTextSize}
        handleChange={handleChange}
      >
        {displaySection(step)}
      </FormContainer>
    </>
  );
};

export default CreateProfile;
