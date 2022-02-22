import React, { useState } from "react";

import FormContainer from "../components/Form/FormContainer";
import FamilyMembers from "../components/Form/FamilyMembers";

const CreateProfile = () => {
  const [form, setForm] = useState({
    step: 1,
    name: "",
    gender: "",
    inCanada: false,
    job: "",
    language: "",
    englishProficiency: "",
    currentCity: "",
    numberOfPeople: 0,
    family: [],
  });

  const nextStep = () => {
    setForm({ ...form, step: form.step + 1 });
  };

  const prevStep = () => {
    setForm({ ...form, step: form.step - 1 });
  };

  const handleChange = (input, value) => {
    setForm({ ...form, [input]: value });
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
      gender: "",
    };

    let index = 0;

    let family = Array.from({ length: n }, () => ({ ...obj, id: index++ }));

    setForm({ ...form, family: family });
  };

  console.log(form);

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
          />
        );
      default:
        return <h1>Loading...</h1>;
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
