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

  //take language into account
  let cat = `category_${currentLangCode}`;
  let measure = `measurement_${currentLangCode}`;

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

    //automatically update # of people if more age groups are selected than the # of people
    if (ages.length > form.numberOfPeople) {
      setForm({ ...form, numberOfPeople: ages.length });
    }
  };

  //return an array of all the category names
  const groupedPrioritiesArray = Object.values(
    _.groupBy(additionalInfo, (item) => item[cat])
  );

  //return an array of all the entries in the current category
  const categoryArray = groupedPrioritiesArray[step - 2];

  //determine which measurements match which people
  //will have to be updated if structure of demongraphics in additionalInfo.js is updated
  //measurements should be either for specific age ranges, for everyone, or for a specific # of people, not a combination of those options
  const getDemographicMeasurements = useCallback(() => {
    const { numberOfPeople, ages } = form;

    //return array of matching measurement objects from additionalInfo.js
    let ageMeasurements = additionalInfo.map((measurement) => {
      if (Array.isArray(measurement.demographic)) {
        //include measurment if there is any intersection betwen the demographic info in additionalInfo.js and the ages as per the form. Multiple ages ranges are possible for each measurement; just checking whether intersection is true/false ensures the measurement is only added once regardless of how many age groups it matches
        if (_.intersection(measurement.demographic, ages).length > 0) {
          return measurement;
        }

        //include measurement if the measurement applies to everyone as per additionalInfo.js
      } else if (measurement.demographic === "all") {
        return measurement;

        //include measurement if the # of people falls in between the range in additionalInfo.js
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
